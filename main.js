// Neon Mob City Phase 1
// Static A-Frame/WebXR prototype: city hub, one robot factory base, simple AI,
// raycast shooting, clear choices, and return-to-city flow.

const COLORS = {
  black: "#04030B",
  navy: "#090018",
  street: "#070913",
  purple: "#3D0B62",
  cyan: "#00F5FF",
  pink: "#FF2BD6",
  yellow: "#FFF07A",
  green: "#52FF6B",
  orange: "#FF7A2D",
  red: "#FF355E",
  white: "#F8F7FF",
  wall: "#597082",
};

const ENEMY_DEFS = {
  mob: {
    name: "Mob Soldier",
    health: 1,
    speed: 0.95,
    range: 8,
    cooldown: 1.9,
    damage: 8,
    color: COLORS.pink,
  },
  robot: {
    name: "Robot Guard",
    health: 1,
    speed: 0.62,
    range: 9,
    cooldown: 2.35,
    damage: 10,
    color: COLORS.cyan,
  },
};

const state = {
  mode: "city",
  seed: Date.now() % 100000,
  playerHealth: 100,
  cityState: "Untouched",
  baseCleared: false,
  activeChoice: "",
  enemies: [],
  patrols: [],
  targets: [],
  enemyShots: [],
  portalZones: [],
  keyState: {},
  moveAxis: { x: 0, y: 0 },
  lastMessageAt: 0,
  lastTime: 0,
  nextEnemyId: 1,
};

let refs = {};
let rand = seededRandom(state.seed);
let raycaster = null;

window.addEventListener("DOMContentLoaded", init);

function init() {
  refs = {
    scene: document.getElementById("scene"),
    world: document.getElementById("world-root"),
    effects: document.getElementById("effects-root"),
    rig: document.getElementById("player-rig"),
    camera: document.getElementById("player-camera"),
    rightController: document.getElementById("right-controller"),
    leftController: document.getElementById("left-controller"),
    noteTitle: document.getElementById("noteTitle"),
    noteMessage: document.getElementById("noteMessage"),
    hudHealth: document.getElementById("hudHealth"),
    hudObjective: document.getElementById("hudObjective"),
    hudEnemies: document.getElementById("hudEnemies"),
    hudCityState: document.getElementById("hudCityState"),
    vrHudText: document.getElementById("vrHudText"),
  };

  if (!refs.scene || !refs.world || !refs.camera || !window.AFRAME) {
    return;
  }

  raycaster = new THREE.Raycaster();
  registerComponents();
  createPixelTextures();
  bindInput();
  buildCityHub();

  refs.scene.addEventListener("enter-vr", () => {
    setMessage("VR session active", "Use a thumbstick to move. Trigger fires the ray gun.");
  });

  refs.scene.addEventListener("exit-vr", () => {
    setMessage("Neon Mob City", "Open in Meta Quest Browser, press Enter VR, then enter the Robot Factory.");
  });

  requestAnimationFrame(gameLoop);
}

function registerComponents() {
  if (AFRAME.components.billboard) {
    return;
  }

  AFRAME.registerComponent("billboard", {
    tick() {
      if (!refs.camera) {
        return;
      }

      const cameraWorld = new THREE.Vector3();
      refs.camera.object3D.getWorldPosition(cameraWorld);
      const target = cameraWorld.clone();
      target.y = this.el.object3D.getWorldPosition(new THREE.Vector3()).y;
      this.el.object3D.lookAt(target);
    },
  });
}

function bindInput() {
  window.addEventListener("keydown", (event) => {
    state.keyState[event.code] = true;
    if (event.code === "Space") {
      fireWeapon(refs.camera);
    }
  });

  window.addEventListener("keyup", (event) => {
    state.keyState[event.code] = false;
  });

  window.addEventListener("pointerdown", (event) => {
    if (event.target && event.target.tagName === "CANVAS") {
      fireWeapon(refs.camera, event);
    }
  });

  [refs.leftController, refs.rightController].forEach((controller) => {
    if (!controller) {
      return;
    }

    controller.addEventListener("triggerdown", () => fireWeapon(controller));
    controller.addEventListener("gripdown", () => fireWeapon(controller));
    controller.addEventListener("axismove", (event) => {
      const axis = event.detail.axis || [0, 0];
      state.moveAxis.x = Math.abs(axis[0]) > 0.12 ? axis[0] : 0;
      state.moveAxis.y = Math.abs(axis[1]) > 0.12 ? axis[1] : 0;
    });
  });
}

function gameLoop(time) {
  const dt = Math.min((time - state.lastTime) / 1000 || 0, 0.05);
  state.lastTime = time;

  updatePlayerMove(dt);
  updatePatrols(dt, time);
  updateEnemies(dt, time);
  updateEnemyShots(dt);
  updatePortalZones(time);
  updateHud();

  requestAnimationFrame(gameLoop);
}

function updatePlayerMove(dt) {
  if (!refs.rig || !refs.camera) {
    return;
  }

  let x = state.moveAxis.x;
  let y = state.moveAxis.y;

  if (state.keyState.KeyA) x -= 1;
  if (state.keyState.KeyD) x += 1;
  if (state.keyState.KeyW) y -= 1;
  if (state.keyState.KeyS) y += 1;

  if (Math.abs(x) < 0.01 && Math.abs(y) < 0.01) {
    return;
  }

  const forward = new THREE.Vector3();
  refs.camera.object3D.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();

  const right = new THREE.Vector3(forward.z, 0, -forward.x);
  const move = new THREE.Vector3();
  move.addScaledVector(right, x);
  move.addScaledVector(forward, -y);

  if (move.lengthSq() > 0) {
    move.normalize();
    refs.rig.object3D.position.addScaledVector(move, 3.2 * dt);
  }
}

function updatePatrols(dt, time) {
  state.patrols.forEach((patrol, index) => {
    const base = patrol.basePosition;
    const offset = Math.sin(time * 0.001 + index * 1.9) * 1.1;
    patrol.el.object3D.position.set(base.x + offset, 0, base.z);
  });
}

function updateEnemies(dt, time) {
  if (state.mode !== "base" || state.baseCleared) {
    return;
  }

  const playerPos = refs.rig.object3D.position;

  state.enemies.forEach((enemy) => {
    if (!enemy.el.isConnected || enemy.health <= 0) {
      return;
    }

    const pos = enemy.el.object3D.position;
    const toPlayer = new THREE.Vector3(playerPos.x - pos.x, 0, playerPos.z - pos.z);
    const distance = toPlayer.length();

    enemy.el.object3D.lookAt(playerPos.x, pos.y, playerPos.z);

    if (distance < enemy.range) {
      if (distance > 1.25) {
        toPlayer.normalize();
        pos.addScaledVector(toPlayer, enemy.speed * dt);
      } else if (time - enemy.lastContact > 1000) {
        enemy.lastContact = time;
        damagePlayer(ENEMY_DEFS[enemy.type].damage);
      }

      if (time - enemy.lastShot > enemy.cooldown * 1000) {
        enemy.lastShot = time + rand() * 350;
        spawnEnemyShot(enemy, playerPos);
      }
    }
  });
}

function updateEnemyShots(dt) {
  const cameraPos = new THREE.Vector3();
  refs.camera.object3D.getWorldPosition(cameraPos);

  state.enemyShots = state.enemyShots.filter((shot) => {
    if (!shot.el.isConnected) {
      return false;
    }

    shot.age += dt;
    shot.position.addScaledVector(shot.velocity, dt);
    shot.el.object3D.position.copy(shot.position);

    if (shot.position.distanceTo(cameraPos) < 0.45) {
      damagePlayer(shot.damage);
      safeRemove(shot.el);
      return false;
    }

    if (shot.age > 5) {
      safeRemove(shot.el);
      return false;
    }

    return true;
  });
}

function updatePortalZones(time) {
  if (!refs.rig) {
    return;
  }

  const pos = refs.rig.object3D.position;

  state.portalZones.forEach((portal) => {
    if (!portal.active || time < portal.nextAllowed) {
      return;
    }

    const dx = pos.x - portal.x;
    const dz = pos.z - portal.z;
    if (Math.sqrt(dx * dx + dz * dz) > portal.radius) {
      return;
    }

    portal.nextAllowed = time + 1200;
    if (portal.type === "robot") {
      enterRobotFactory();
    } else if (portal.type === "locked") {
      setMessage(portal.label, "This mob base is locked in Phase 1.");
    } else if (portal.type === "return" && state.baseCleared) {
      returnToCity();
    }
  });
}

function damagePlayer(amount) {
  state.playerHealth = Math.max(0, state.playerHealth - amount);
  flashScreenMessage(`Hit for ${amount}. Health ${state.playerHealth}.`);

  if (state.playerHealth <= 0) {
    state.playerHealth = 100;
    setMessage("Emergency reboot", "Health restored for Phase 1 testing.");
  }
}

// City hub generation: blocky roads, randomized building heights/windows,
// neon skyline pieces, patrol placeholders, and three mob base entrances.
function buildCityHub() {
  state.mode = "city";
  state.enemies = [];
  state.patrols = [];
  state.enemyShots = [];
  state.portalZones = [];
  state.targets = [];
  clearEntity(refs.world);
  clearEntity(refs.effects);
  rand = seededRandom(state.seed);

  refs.rig.object3D.position.set(0, 0, 6);
  refs.scene.setAttribute("background", "color: #090018");
  refs.scene.setAttribute("fog", "type: exponential; color: #150020; density: 0.035");

  makePlane({
    parent: refs.world,
    position: "0 0 0",
    rotation: "-90 0 0",
    width: 30,
    height: 30,
    material: "src: #city-grid; repeat: 14 14; shader: flat",
  });

  makeBox({ position: "0 0.015 -3", size: "5 0.03 24", color: COLORS.street, material: neonMaterial(COLORS.street) });
  makeBox({ position: "0 0.025 -3", size: "0.08 0.04 23", color: COLORS.cyan, material: neonMaterial(COLORS.cyan) });
  makeBox({ position: "-2.25 0.03 -3", size: "0.08 0.05 23", color: COLORS.pink, material: neonMaterial(COLORS.pink) });
  makeBox({ position: "2.25 0.03 -3", size: "0.08 0.05 23", color: COLORS.pink, material: neonMaterial(COLORS.pink) });
  makeBox({ position: "0 0.035 -3", size: "24 0.04 0.08", color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });

  createSkyline();
  createCityBuildings();
  createCityTitlePanel();

  // Base entrance setup: one active Robot Factory, two locked Phase 1 placeholders.
  createBaseEntrance({
    id: "robot",
    label: "ROBOT FACTORY",
    sublabel: "Phase 1 playable",
    x: 0,
    z: -10.4,
    color: COLORS.cyan,
    icon: "BOT",
    active: true,
  });
  createBaseEntrance({
    id: "mutant",
    label: "MUTANT LAB",
    sublabel: "Locked",
    x: -5.6,
    z: -6.8,
    color: COLORS.green,
    accent: COLORS.purple,
    icon: "BIO",
    active: false,
  });
  createBaseEntrance({
    id: "casino",
    label: "NEON CASINO",
    sublabel: "Locked",
    x: 5.6,
    z: -6.8,
    color: COLORS.pink,
    accent: COLORS.yellow,
    icon: "$$$",
    active: false,
  });

  createPatrol("mob", -2.2, -1.6);
  createPatrol("robot", 3.1, -2.6);

  updateHud();
  setMessage("Neon Mob City", "Choose a mob base. Robot Factory is playable in Phase 1.");
}

function createSkyline() {
  for (let i = 0; i < 18; i += 1) {
    const x = -14 + i * 1.65;
    const h = 2.2 + rand() * 4.2;
    const z = -14.2 - rand() * 1.2;
    makeBox({
      position: `${x} ${h / 2} ${z}`,
      size: `${0.9 + rand() * 0.8} ${h} ${0.8 + rand() * 0.6}`,
      color: "#05050B",
      material: "color: #05050B; roughness: 1; metalness: 0",
    });
  }

  makePlane({
    position: "0 6.2 -16.5",
    width: 11,
    height: 6,
    material: `color: #7B145F; opacity: 0.5; transparent: true; side: double; shader: flat`,
  });
}

function createCityBuildings() {
  const rows = [
    { x: -8.7, side: -1 },
    { x: 8.7, side: 1 },
  ];

  rows.forEach((row) => {
    for (let i = 0; i < 6; i += 1) {
      const z = 3 - i * 3.2;
      const h = 2.4 + rand() * 5.2;
      const w = 1.8 + rand() * 1.5;
      const d = 1.7 + rand() * 1.2;
      const color = rand() > 0.5 ? COLORS.cyan : COLORS.pink;
      createBuilding(row.x + rand() * row.side, z, w, h, d, color);
    }
  });

  createNeonSign(-8.6, 2.3, -1.5, "BYTE\nPAWN", COLORS.cyan);
  createNeonSign(8.6, 2.5, -0.4, "VICE\nRAMEN", COLORS.pink);
  createNeonSign(-8.3, 3.1, -7.7, "NOIR\nMOTEL", COLORS.yellow);
  createNeonSign(8.4, 2.8, -8.2, "LASER\nLOANS", COLORS.green);
}

function createBuilding(x, z, width, height, depth, windowColor) {
  makeBox({
    position: `${x} ${height / 2} ${z}`,
    size: `${width} ${height} ${depth}`,
    color: COLORS.black,
    material: "color: #05050B; roughness: 1; metalness: 0",
  });

  const faceZ = z + (z < -3 ? depth / 2 + 0.02 : -depth / 2 - 0.02);
  const rows = Math.max(2, Math.floor(height / 0.72));
  const cols = Math.max(2, Math.floor(width / 0.48));

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (rand() < 0.45) {
        continue;
      }

      const wx = x - width / 2 + 0.35 + c * 0.44;
      const wy = 0.45 + r * 0.62;
      makeBox({
        position: `${wx} ${wy} ${faceZ}`,
        size: "0.22 0.28 0.03",
        color: windowColor,
        material: neonMaterial(windowColor),
      });
    }
  }
}

function createNeonSign(x, y, z, text, color) {
  const sign = makePlane({
    position: `${x} ${y} ${z}`,
    rotation: `0 ${x < 0 ? 90 : -90} 0`,
    width: 1.45,
    height: 0.72,
    material: neonMaterial(color),
  });
  makeText({ parent: sign, value: text, position: "-0.58 0.17 0.03", width: 1.35, color: COLORS.black });
}

function createCityTitlePanel() {
  const panel = makeEntity("a-entity", { position: "0 2.35 1.8", billboard: "" });
  makePlane({
    parent: panel,
    width: 5.2,
    height: 1.45,
    material: "color: #080713; opacity: 0.86; transparent: true; shader: flat",
  });
  makeText({ parent: panel, value: "NEON MOB CITY", position: "-2.25 0.45 0.04", width: 4.6, color: COLORS.cyan });
  makeText({ parent: panel, value: "Objective: Choose a mob base", position: "-2.2 0.03 0.04", width: 4.2, color: COLORS.white });
  refs.cityStateText = makeText({
    parent: panel,
    value: `City State: ${state.cityState}`,
    position: "-2.2 -0.34 0.04",
    width: 4.2,
    color: COLORS.yellow,
  });
}

function createBaseEntrance(config) {
  const group = makeEntity("a-entity", { position: `${config.x} 0 ${config.z}` });
  const accent = config.accent || config.color;

  makeBox({ parent: group, position: "0 1.3 0", size: "2.4 2.6 0.35", color: "#0B0E18", material: "color: #0B0E18; roughness: 1" });
  makeBox({ parent: group, position: "0 1.3 0.04", size: "1.48 1.85 0.12", color: config.color, material: neonMaterial(config.color) });
  makeBox({ parent: group, position: "-1.45 1.05 0.08", size: "0.18 2.1 0.18", color: accent, material: neonMaterial(accent) });
  makeBox({ parent: group, position: "1.45 1.05 0.08", size: "0.18 2.1 0.18", color: accent, material: neonMaterial(accent) });

  const labelPanel = makePlane({
    parent: group,
    position: "0 2.95 0.08",
    width: 2.9,
    height: 0.62,
    material: neonMaterial(config.color),
  });
  makeText({ parent: labelPanel, value: config.label, position: "-1.22 0.14 0.03", width: 2.45, color: COLORS.black });

  const iconPanel = makePlane({
    parent: group,
    position: "0 1.45 0.13",
    width: 1.05,
    height: 0.62,
    material: "color: #080713; shader: flat",
  });
  makeText({ parent: iconPanel, value: config.icon, position: "-0.38 0.14 0.03", width: 0.85, color: config.color });

  const sub = makeText({ parent: group, value: config.sublabel, position: "-1.03 0.28 0.14", width: 2.1, color: COLORS.white });
  sub.setAttribute("align", "center");

  const target = makeBox({
    parent: group,
    position: "0 1.1 0.18",
    size: "1.55 1.95 0.12",
    color: config.color,
    material: `color: ${config.color}; opacity: 0.18; transparent: true; shader: flat`,
  });

  addTarget(target, {
    type: "portal",
    portalId: config.id,
  });

  state.portalZones.push({
    type: config.active ? "robot" : "locked",
    label: config.label,
    x: config.x,
    z: config.z + 0.25,
    radius: 1.2,
    active: true,
    nextAllowed: 0,
  });
}

function createPatrol(type, x, z) {
  const patrol = createEnemy(type, x, z, { activeCombat: false });
  patrol.basePosition = { x, z };
  state.patrols.push(patrol);
}

// Test base generation: a tiny robot factory with simple rooms, hallway,
// cover blocks, hazard stripes, randomized accent color, and spawn points.
function enterRobotFactory() {
  state.mode = "base";
  state.baseCleared = false;
  state.enemies = [];
  state.patrols = [];
  state.enemyShots = [];
  state.portalZones = [];
  state.targets = [];
  clearEntity(refs.world);
  clearEntity(refs.effects);

  const accent = rand() > 0.5 ? COLORS.cyan : "#5A7DFF";
  refs.rig.object3D.position.set(0, 0, 3.25);
  refs.scene.setAttribute("background", "color: #05060F");
  refs.scene.setAttribute("fog", "type: exponential; color: #05060F; density: 0.018");

  createBaseRoom(0, 0, 6, 5, accent, "START CELL");
  createBaseHall(0, -4.2, 2.4, 4.2, accent);
  createBaseRoom(0, -8.2, 7, 5.4, accent, "ROBOT LINE");
  createBaseRoom(4.6, -8.2, 3.2, 4.2, COLORS.yellow, "CONTROL");

  createCoverBlocks(accent);
  createFactoryProps(accent);
  createBaseHeader(accent);
  createReturnPortal(false);

  // Enemy spawning: deliberately readable center-lane placement with small
  // per-run jitter, so the first playable base is easy to clear in Phase 1.
  const selectedSpawns = [
    { type: "mob", x: -0.85 + rand() * 0.25, z: -5.75 },
    { type: "robot", x: 0.85 - rand() * 0.25, z: -6.55 },
    { type: "mob", x: -0.55 + rand() * 0.25, z: -7.75 },
    { type: "robot", x: 0.55 - rand() * 0.25, z: -8.75 },
  ];

  selectedSpawns.forEach((spawn) => createEnemy(spawn.type, spawn.x, spawn.z, { activeCombat: true }));

  setMessage("Robot Factory", "Clear the guards. Shoot with trigger, click, or Space.");
  updateHud();
}

function createBaseRoom(cx, cz, width, depth, accent, label) {
  makePlane({
    position: `${cx} 0.01 ${cz}`,
    rotation: "-90 0 0",
    width,
    height: depth,
    material: "src: #factory-floor; repeat: 6 6; shader: flat",
  });
  makePlane({
    position: `${cx} 2.55 ${cz}`,
    rotation: "90 0 0",
    width,
    height: depth,
    material: "src: #factory-ceiling; repeat: 4 4; shader: flat",
  });

  const x0 = cx - width / 2;
  const x1 = cx + width / 2;
  const z0 = cz - depth / 2;
  const z1 = cz + depth / 2;

  if (cz === 0) {
    wall(cx, z1, width, 0.18);
    wall(x0, cz, 0.18, depth);
    wall(x1, cz, 0.18, depth);
    wall(cx - 2.15, z0, 1.7, 0.18);
    wall(cx + 2.15, z0, 1.7, 0.18);
  } else if (cx === 0) {
    wall(x0, cz, 0.18, depth);
    wall(x1, cz, 0.18, depth);
    wall(cx, z0, width, 0.18);
    wall(cx - 2.45, z1, 2.0, 0.18);
    wall(cx + 2.45, z1, 2.0, 0.18);
  } else {
    wall(cx, z0, width, 0.18);
    wall(cx, z1, width, 0.18);
    wall(x1, cz, 0.18, depth);
  }

  makeBox({ position: `${cx} 2.25 ${cz + depth / 2 - 0.08}`, size: `${width * 0.65} 0.12 0.1`, color: accent, material: neonMaterial(accent) });
  makeText({ value: label, position: `${cx - width / 2 + 0.35} 2.05 ${cz + depth / 2 - 0.15}`, rotation: "0 0 0", width: 2.6, color: accent });
}

function createBaseHall(cx, cz, width, depth, accent) {
  makePlane({
    position: `${cx} 0.012 ${cz}`,
    rotation: "-90 0 0",
    width,
    height: depth,
    material: "src: #factory-floor; repeat: 3 5; shader: flat",
  });
  wall(cx - width / 2, cz, 0.18, depth);
  wall(cx + width / 2, cz, 0.18, depth);
  makeBox({ position: `${cx} 0.08 ${cz}`, size: "0.1 0.1 3.6", color: accent, material: neonMaterial(accent) });
}

function wall(x, z, width, depth) {
  makeBox({
    position: `${x} 1.15 ${z}`,
    size: `${width} 2.3 ${depth}`,
    color: COLORS.wall,
    material: "src: #factory-wall; repeat: 3 2; shader: flat",
  });
}

function createCoverBlocks(accent) {
  [
    [-1.65, 0.45, -0.7, 1.0, 0.9, 0.7],
    [1.45, 0.35, -7.0, 1.25, 0.7, 0.7],
    [-1.8, 0.35, -8.8, 1.4, 0.7, 0.6],
    [4.2, 0.45, -7.4, 0.9, 0.9, 0.7],
  ].forEach(([x, y, z, w, h, d]) => {
    makeBox({ position: `${x} ${y} ${z}`, size: `${w} ${h} ${d}`, color: "#2F3B4C", material: "src: #panel-block; repeat: 2 2; shader: flat" });
    makeBox({ position: `${x} ${y + h / 2 + 0.04} ${z}`, size: `${w} 0.06 ${d}`, color: accent, material: neonMaterial(accent) });
  });
}

function createFactoryProps(accent) {
  for (let i = 0; i < 4; i += 1) {
    const x = -2.2 + i * 1.45;
    makeBox({ position: `${x} 0.35 -10.1`, size: "0.75 0.7 0.55", color: "#293446", material: "src: #panel-block; repeat: 2 1; shader: flat" });
    makeBox({ position: `${x} 0.75 -10.1`, size: "0.5 0.08 0.58", color: accent, material: neonMaterial(accent) });
  }

  makeBox({ position: "-3.05 1.1 -5.4", size: "0.08 1.4 1.1", color: COLORS.yellow, material: "src: #hazard; repeat: 1 4; shader: flat" });
  makeBox({ position: "3.05 1.1 -5.4", size: "0.08 1.4 1.1", color: COLORS.yellow, material: "src: #hazard; repeat: 1 4; shader: flat" });
}

function createBaseHeader(accent) {
  const panel = makeEntity("a-entity", { position: "0 2.05 2.2", billboard: "" });
  makePlane({ parent: panel, width: 4.2, height: 0.95, material: "color: #080713; opacity: 0.82; transparent: true; shader: flat" });
  makeText({ parent: panel, value: "ROBOT FACTORY", position: "-1.7 0.28 0.04", width: 3.4, color: accent });
  makeText({ parent: panel, value: `Run Seed: ${Math.floor(state.seed)}`, position: "-1.65 -0.08 0.04", width: 3.3, color: COLORS.white });
}

function createReturnPortal(active) {
  const group = makeEntity("a-entity", { id: "return-portal", position: "2.3 0 -10.25", visible: active ? "true" : "false" });
  makeBox({ parent: group, position: "0 1.2 0", size: "1.55 2.15 0.16", color: COLORS.pink, material: neonMaterial(COLORS.pink) });
  makeBox({ parent: group, position: "0 1.2 0.08", size: "1.0 1.55 0.18", color: COLORS.cyan, material: `color: ${COLORS.cyan}; opacity: 0.35; transparent: true; shader: flat` });
  makeText({ parent: group, value: "RETURN\nTO CITY", position: "-0.66 2.6 0.08", width: 1.45, color: COLORS.yellow });

  addTarget(group, { type: "return" });
  state.portalZones.push({ type: "return", x: 2.3, z: -10.2, radius: 1.2, active, nextAllowed: 0 });
}

// Enemy spawning: flat mob billboard sprites and boxy robot guards share the
// same simple health/movement/shooting behavior.
function createEnemy(type, x, z, options) {
  const def = ENEMY_DEFS[type];
  const id = state.nextEnemyId++;
  const group = makeEntity("a-entity", { position: `${x} 0 ${z}` });
  const enemy = {
    id,
    type,
    el: group,
    health: def.health,
    maxHealth: def.health,
    speed: def.speed,
    range: def.range,
    cooldown: def.cooldown,
    lastShot: 0,
    lastContact: 0,
    activeCombat: Boolean(options.activeCombat),
  };

  if (type === "mob") {
    makePlane({
      parent: group,
      position: "0 0.85 0",
      width: 0.86,
      height: 1.35,
      material: "src: #mob-soldier; transparent: true; alphaTest: 0.08; side: double; shader: flat",
      billboard: "",
    });
  } else {
    makeBox({ parent: group, position: "0 0.72 0", size: "0.8 1.05 0.42", color: "#28374B", material: "src: #robot-panel; repeat: 2 2; shader: flat" });
    makeBox({ parent: group, position: "0 1.15 -0.23", size: "0.56 0.14 0.05", color: COLORS.cyan, material: neonMaterial(COLORS.cyan) });
    makeBox({ parent: group, position: "-0.48 0.68 0", size: "0.18 0.62 0.22", color: "#465A77", material: "shader: flat; color: #465A77" });
    makeBox({ parent: group, position: "0.48 0.68 0", size: "0.18 0.62 0.22", color: "#465A77", material: "shader: flat; color: #465A77" });
  }

  const hitbox = makeBox({
    parent: group,
    position: "0 0.9 0",
    size: "1.65 2.1 0.9",
    color: COLORS.white,
    material: "color: #FFFFFF; opacity: 0.01; transparent: true; shader: flat; depthWrite: false",
  });
  addTarget(hitbox, { type: "enemy", enemyId: id });

  const shadow = makePlane({
    parent: group,
    position: "0 0.02 0",
    rotation: "-90 0 0",
    width: 0.9,
    height: 0.5,
    material: "color: #000000; opacity: 0.35; transparent: true; shader: flat",
  });
  shadow.classList.remove("clickable");

  if (enemy.activeCombat) {
    state.enemies.push(enemy);
  }

  return enemy;
}

function spawnEnemyShot(enemy, playerPos) {
  const origin = enemy.el.object3D.position.clone();
  origin.y = 1.05;
  const target = new THREE.Vector3(playerPos.x, 1.45, playerPos.z);
  const velocity = target.sub(origin).normalize().multiplyScalar(enemy.type === "robot" ? 3.2 : 3.7);
  const color = enemy.type === "robot" ? COLORS.cyan : COLORS.red;
  const el = makeEntity("a-sphere", {
    position: vecToAttr(origin),
    radius: "0.075",
    color,
    material: neonMaterial(color),
  }, refs.effects);

  state.enemyShots.push({
    el,
    position: origin,
    velocity,
    age: 0,
    damage: ENEMY_DEFS[enemy.type].damage,
  });
}

// Shooting system: a tiny raycast weapon using controller trigger, desktop
// click, or Space. It hits enemies, portals, and clear-choice buttons.
function fireWeapon(sourceEl, event) {
  if (!sourceEl || !raycaster) {
    return;
  }

  const origin = new THREE.Vector3();
  const direction = new THREE.Vector3(0, 0, -1);
  const quat = new THREE.Quaternion();

  if (
    sourceEl === refs.camera
    && event
    && typeof event.clientX === "number"
    && refs.camera.components.camera
  ) {
    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
    raycaster.setFromCamera(mouse, refs.camera.components.camera.camera);
    origin.copy(raycaster.ray.origin);
    direction.copy(raycaster.ray.direction);
  } else {
    sourceEl.object3D.getWorldPosition(origin);
    sourceEl.object3D.getWorldQuaternion(quat);
    direction.applyQuaternion(quat).normalize();
    raycaster.set(origin, direction);
  }

  raycaster.far = 24;

  const targetObjects = state.targets
    .filter((target) => target.el.isConnected && target.el.getAttribute("visible") !== false)
    .map((target) => target.el.object3D);

  const intersections = raycaster.intersectObjects(targetObjects, true);
  let end = origin.clone().addScaledVector(direction, 16);

  if (intersections.length > 0) {
    const hit = intersections[0];
    end = hit.point.clone();
    const target = findTargetData(hit.object);
    if (target) {
      handleTarget(target, hit.point);
    }
  }

  drawTracer(origin, end);
}

function handleTarget(target, point) {
  if (target.type === "enemy") {
    damageEnemy(target.enemyId, point);
  } else if (target.type === "portal") {
    if (target.portalId === "robot") {
      enterRobotFactory();
    } else {
      setMessage("Locked base", "This mob base is a Phase 1 placeholder.");
    }
  } else if (target.type === "choice") {
    chooseFactoryOutcome(target.choiceId);
  } else if (target.type === "return" && state.baseCleared) {
    returnToCity();
  }
}

function damageEnemy(enemyId, point) {
  const enemy = state.enemies.find((item) => item.id === enemyId);
  if (!enemy) {
    return;
  }

  enemy.health -= 1;
  spawnHitEffect(point || enemy.el.object3D.position, enemy.type === "robot" ? COLORS.cyan : COLORS.pink);

  if (enemy.health <= 0) {
    safeRemove(enemy.el);
    state.enemies = state.enemies.filter((item) => item.id !== enemyId);
    state.targets = state.targets.filter((item) => item.data.enemyId !== enemyId);
    flashScreenMessage(`${ENEMY_DEFS[enemy.type].name} down.`);

    if (state.mode === "base" && state.enemies.length === 0) {
      clearRobotFactory();
    }
  }
}

function drawTracer(origin, end) {
  const tracer = makeEntity("a-entity", {
    line: `start: ${vecToAttr(origin)}; end: ${vecToAttr(end)}; color: ${COLORS.pink}; opacity: 0.95`,
  }, refs.effects);

  setTimeout(() => safeRemove(tracer), 95);
}

function spawnHitEffect(point, color) {
  const spark = makeEntity("a-sphere", {
    position: vecToAttr(point),
    radius: "0.11",
    color,
    material: neonMaterial(color),
    animation: "property: scale; to: 2 2 2; dur: 160; easing: easeOutQuad",
  }, refs.effects);

  setTimeout(() => safeRemove(spark), 170);
}

function clearRobotFactory() {
  state.baseCleared = true;
  setMessage("Base cleared", "Choose how to hit the Robot Factory network.");

  const returnPortal = document.getElementById("return-portal");
  if (returnPortal) {
    returnPortal.setAttribute("visible", "true");
  }

  const portal = state.portalZones.find((zone) => zone.type === "return");
  if (portal) {
    portal.active = true;
  }

  showChoicePanel();
}

// Simple choice system: choices only update city state for now. This proves
// run-state changes can feed back into the hub in later phases.
function showChoicePanel() {
  const choices = [
    ["scrap", "Take Scrap Parts", COLORS.yellow],
    ["jam", "Jam Robot Signals", COLORS.cyan],
    ["overload", "Overload Factory", COLORS.pink],
  ];
  const panel = makeEntity("a-entity", { id: "choice-panel", position: "-2.05 1.55 -8.45", billboard: "" });
  makePlane({ parent: panel, width: 4.2, height: 2.15, material: "color: #080713; opacity: 0.9; transparent: true; shader: flat" });
  makeText({ parent: panel, value: "FACTORY CLEAR", position: "-1.72 0.83 0.04", width: 3.5, color: COLORS.cyan });
  makeText({ parent: panel, value: "Shoot a choice, then return to the city.", position: "-1.72 0.48 0.04", width: 3.5, color: COLORS.white });

  choices.forEach(([id, label, color], index) => {
    const y = 0.03 - index * 0.47;
    const button = makePlane({
      parent: panel,
      position: `0 ${y} 0.05`,
      width: 3.4,
      height: 0.34,
      material: neonMaterial(color),
    });
    makeText({ parent: button, value: label, position: "-1.45 0.08 0.04", width: 2.9, color: COLORS.black });
    addTarget(button, { type: "choice", choiceId: id });
  });

  choices.forEach(([id, label, color], index) => {
    const x = -1.55 + index * 1.55;
    const kiosk = makeBox({
      position: `${x} 0.75 -6.65`,
      size: "1.1 1.25 0.16",
      color,
      material: neonMaterial(color),
    });
    makeText({ parent: kiosk, value: label, position: "-0.43 0.26 0.09", width: 0.88, color: COLORS.black, align: "center", wrapCount: 10 });
    addTarget(kiosk, { type: "choice", choiceId: id });
  });
}

function chooseFactoryOutcome(choiceId) {
  const labels = {
    scrap: "Scrap Parts Secured",
    jam: "Robot Signals Jammed",
    overload: "Factory Overloaded",
  };

  state.activeChoice = choiceId;
  state.cityState = labels[choiceId] || "Robot Factory Cleared";
  setMessage("Choice locked", `City State: ${state.cityState}. Return through the portal.`);
}

// Return-to-city flow: rebuild the hub and keep the selected city-state label.
function returnToCity() {
  buildCityHub();
  setMessage("Back in the hub", `City State: ${state.cityState}. Other bases remain locked for Phase 1.`);
}

function updateHud() {
  const enemyLabel = state.mode === "base"
    ? `Enemies: ${state.enemies.length}`
    : "Enemies: Hub patrols";
  const objective = state.mode === "base"
    ? state.baseCleared
      ? "Objective: Choose reward, return to city"
      : "Objective: Clear the Robot Factory"
    : "Objective: Choose a mob base";

  refs.hudHealth.textContent = `Health: ${state.playerHealth}`;
  refs.hudObjective.textContent = objective;
  refs.hudEnemies.textContent = enemyLabel;
  refs.hudCityState.textContent = `City State: ${state.cityState}`;

  if (refs.vrHudText) {
    refs.vrHudText.setAttribute(
      "value",
      `NEON MOB CITY\nHealth ${state.playerHealth}\n${enemyLabel}\n${state.cityState}`
    );
  }

  if (refs.cityStateText && refs.cityStateText.isConnected) {
    refs.cityStateText.setAttribute("value", `City State: ${state.cityState}`);
  }
}

function setMessage(title, message) {
  refs.noteTitle.textContent = title;
  refs.noteMessage.textContent = message;
}

function flashScreenMessage(message) {
  const now = performance.now();
  if (now - state.lastMessageAt < 250) {
    return;
  }

  state.lastMessageAt = now;
  refs.noteMessage.textContent = message;
}

function createPixelTextures() {
  makeTexture("city-grid", 64, 64, (ctx) => {
    ctx.fillStyle = "#090018";
    ctx.fillRect(0, 0, 64, 64);
    ctx.strokeStyle = "rgba(255, 43, 214, 0.48)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(64, 0);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 64);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 245, 255, 0.24)";
    ctx.fillRect(31, 0, 2, 64);
    ctx.fillRect(0, 31, 64, 2);
  });

  makeTexture("factory-floor", 64, 64, (ctx) => {
    ctx.fillStyle = "#354854";
    ctx.fillRect(0, 0, 64, 64);
    for (let y = 0; y < 64; y += 16) {
      for (let x = 0; x < 64; x += 16) {
        ctx.fillStyle = (x + y) % 32 === 0 ? "#4D6B61" : "#24333E";
        ctx.fillRect(x + 1, y + 1, 14, 14);
      }
    }
    ctx.strokeStyle = "#111722";
    ctx.lineWidth = 2;
    for (let i = 0; i <= 64; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 64);
      ctx.moveTo(0, i);
      ctx.lineTo(64, i);
      ctx.stroke();
    }
  });

  makeTexture("factory-wall", 64, 64, (ctx) => {
    ctx.fillStyle = "#597082";
    ctx.fillRect(0, 0, 64, 64);
    ctx.strokeStyle = "#263646";
    ctx.lineWidth = 2;
    for (let y = 8; y < 64; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(64, y);
      ctx.stroke();
    }
    for (let x = 0; x < 64; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 8, 8);
      ctx.lineTo(x, 16);
      ctx.stroke();
    }
  });

  makeTexture("factory-ceiling", 64, 64, (ctx) => {
    ctx.fillStyle = "#24303B";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#B8F8FF";
    for (let y = 8; y < 64; y += 24) {
      for (let x = 8; x < 64; x += 24) {
        ctx.fillRect(x, y, 10, 10);
      }
    }
    ctx.strokeStyle = "#111722";
    ctx.strokeRect(0, 0, 64, 64);
  });

  makeTexture("panel-block", 64, 64, (ctx) => {
    ctx.fillStyle = "#2F3B4C";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#425875";
    ctx.fillRect(6, 6, 22, 12);
    ctx.fillRect(36, 16, 20, 10);
    ctx.fillRect(12, 38, 42, 12);
    ctx.strokeStyle = "#101822";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 64, 64);
  });

  makeTexture("robot-panel", 64, 64, (ctx) => {
    ctx.fillStyle = "#28374B";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#00F5FF";
    ctx.fillRect(8, 10, 48, 6);
    ctx.fillRect(28, 24, 8, 8);
    ctx.fillStyle = "#151D2A";
    ctx.fillRect(8, 42, 48, 12);
  });

  makeTexture("hazard", 64, 64, (ctx) => {
    ctx.fillStyle = COLORS.yellow;
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#141414";
    for (let i = -64; i < 128; i += 18) {
      ctx.beginPath();
      ctx.moveTo(i, 64);
      ctx.lineTo(i + 12, 64);
      ctx.lineTo(i + 76, 0);
      ctx.lineTo(i + 64, 0);
      ctx.closePath();
      ctx.fill();
    }
  });

  makeTexture("mob-soldier", 64, 96, (ctx) => {
    ctx.clearRect(0, 0, 64, 96);
    ctx.fillStyle = "#151421";
    ctx.fillRect(21, 28, 22, 42);
    ctx.fillStyle = "#05050B";
    ctx.fillRect(16, 70, 12, 20);
    ctx.fillRect(36, 70, 12, 20);
    ctx.fillStyle = "#2B2940";
    ctx.fillRect(16, 36, 10, 28);
    ctx.fillRect(38, 36, 10, 28);
    ctx.fillStyle = "#D9B59B";
    ctx.fillRect(23, 10, 18, 20);
    ctx.fillStyle = COLORS.pink;
    ctx.fillRect(20, 18, 24, 5);
    ctx.fillStyle = COLORS.cyan;
    ctx.fillRect(25, 46, 14, 4);
    ctx.fillStyle = "#000000";
    ctx.fillRect(18, 6, 28, 6);
    ctx.fillRect(13, 88, 16, 5);
    ctx.fillRect(35, 88, 16, 5);
  });
}

function makeTexture(id, width, height, draw) {
  if (document.getElementById(id)) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.id = id;
  canvas.width = width;
  canvas.height = height;
  canvas.style.display = "none";
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  draw(ctx);
  document.body.appendChild(canvas);
}

function makeEntity(tag, attrs = {}, parent = refs.world) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      el.setAttribute(key, value);
    }
  });
  parent.appendChild(el);
  return el;
}

function makeBox(options) {
  const [width, height, depth] = String(options.size || "1 1 1").split(" ");
  const attrs = {
    position: options.position || "0 0 0",
    width,
    height,
    depth,
    color: options.color || COLORS.white,
  };

  if (options.rotation) attrs.rotation = options.rotation;
  if (options.material) attrs.material = options.material;
  return makeEntity("a-box", attrs, options.parent || refs.world);
}

function makePlane(options) {
  const attrs = {
    position: options.position || "0 0 0",
    rotation: options.rotation || "0 0 0",
    width: options.width || 1,
    height: options.height || 1,
  };

  if (options.color) attrs.color = options.color;
  if (options.material) attrs.material = options.material;
  if (options.billboard !== undefined) attrs.billboard = options.billboard;
  return makeEntity("a-plane", attrs, options.parent || refs.world);
}

function makeText(options) {
  const attrs = {
    value: options.value,
    position: options.position || "0 0 0.04",
    width: options.width || 2,
    color: options.color || COLORS.white,
    align: options.align || "left",
    wrapCount: options.wrapCount || 24,
  };

  if (options.rotation) attrs.rotation = options.rotation;
  return makeEntity("a-text", attrs, options.parent || refs.world);
}

function neonMaterial(color) {
  return `color: ${color}; emissive: ${color}; emissiveIntensity: 0.85; roughness: 1; metalness: 0`;
}

function addTarget(el, data) {
  el.classList.add("clickable");
  el.dataset.targetType = data.type;
  if (data.enemyId !== undefined) el.dataset.enemyId = String(data.enemyId);
  if (data.portalId !== undefined) el.dataset.portalId = data.portalId;
  if (data.choiceId !== undefined) el.dataset.choiceId = data.choiceId;
  el.object3D.userData.neonTarget = data;
  state.targets.push({ el, data });

  el.addEventListener("click", (event) => {
    event.stopPropagation();
    handleTarget(data, el.object3D.getWorldPosition(new THREE.Vector3()));
  });
}

function findTargetData(object) {
  let cursor = object;
  while (cursor) {
    if (cursor.userData && cursor.userData.neonTarget) {
      return cursor.userData.neonTarget;
    }
    if (cursor.el) {
      const record = state.targets.find((item) => item.el === cursor.el);
      if (record) {
        return record.data;
      }
    }
    if (cursor.el && cursor.el.object3D && cursor.el.object3D.userData.neonTarget) {
      return cursor.el.object3D.userData.neonTarget;
    }
    cursor = cursor.parent;
  }
  return null;
}

function clearEntity(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function safeRemove(el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function seededRandom(seed) {
  let value = Math.max(1, Math.floor(seed));
  return function random() {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function shuffle(items, random) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function vecToAttr(vec) {
  return `${vec.x.toFixed(3)} ${vec.y.toFixed(3)} ${vec.z.toFixed(3)}`;
}
