// Neon Mob City Phase 1
// Static A-Frame/WebXR prototype: city hub, one robot factory base, simple AI,
// physical pickup gun, visible bullets, clear choices, and return-to-city flow.

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
    damage: 1,
    color: COLORS.pink,
  },
  robot: {
    name: "Robot Guard",
    health: 1,
    speed: 0.62,
    range: 9,
    cooldown: 2.35,
    damage: 1,
    color: COLORS.cyan,
  },
};

const SHOP_DEFS = [
  ["Gun Shop", "GUN", COLORS.yellow],
  ["Upgrade Clinic", "UP+", COLORS.green],
  ["Repair Garage", "FIX", COLORS.cyan],
  ["Black Market Door", "???", COLORS.pink],
  ["Neon Diner", "EAT", COLORS.orange],
  ["Pawn Shop", "$", COLORS.yellow],
  ["Arcade Shop", "8BIT", COLORS.cyan],
  ["Mod Shop", "MOD", COLORS.green],
];

const NPC_DEFS = [
  { id: "civilian", label: "CIV", texture: "#npc-civilian", color: COLORS.cyan },
  { id: "mob-worker", label: "MOB", texture: "#npc-mob-worker", color: COLORS.pink },
  { id: "vendor", label: "SELL", texture: "#npc-vendor", color: COLORS.yellow },
  { id: "robot-ped", label: "BOT", texture: "#npc-robot-ped", color: COLORS.cyan },
  { id: "mutant-weirdo", label: "BIO", texture: "#npc-mutant", color: COLORS.green },
];

const BILLBOARD_COPY = [
  "NEON MOB CITY",
  "DON'T TRUST THE TOWER",
  "PAY YOUR STREET TAX",
  "ROBOT FACTORY HIRING",
  "BLACK MARKET BELOW",
  "MOB NEWS 24/7",
  "VHS DREAMS",
  "CYBER NOODLES",
  "WARNING: MUTANT ZONE",
  "THE TOWER WATCHES",
];

const BASE_LOCATIONS = [
  { id: "street-tax-office", label: "Street Tax Office", zone: "downtown", color: COLORS.yellow, icon: "TAX", kind: "office" },
  { id: "robot", label: "Robot Factory", zone: "industrial", color: COLORS.cyan, icon: "BOT", kind: "factory", active: true },
  { id: "neon-casino", label: "Neon Casino", zone: "entertainment", color: COLORS.pink, accent: COLORS.yellow, icon: "$$$", kind: "casino" },
  { id: "mutant-lab", label: "Mutant Lab", zone: "weird", color: COLORS.green, accent: COLORS.purple, icon: "BIO", kind: "lab" },
  { id: "police-armory", label: "Corrupt Police Armory", zone: "downtown", color: "#5A7DFF", accent: COLORS.red, icon: "POL", kind: "armory" },
  { id: "broadcast-tower", label: "Broadcast Tower", zone: "rooftop", color: COLORS.cyan, accent: COLORS.pink, icon: "TV", kind: "tower" },
  { id: "sewer-black-market", label: "Sewer Black Market", zone: "underground", color: COLORS.green, accent: COLORS.yellow, icon: "SEW", kind: "sewer" },
  { id: "rooftop-mech-yard", label: "Rooftop Mech Yard", zone: "rooftop", color: COLORS.orange, accent: COLORS.cyan, icon: "MECH", kind: "rooftop" },
  { id: "neon-nightclub", label: "Neon Nightclub", zone: "entertainment", color: COLORS.pink, accent: COLORS.cyan, icon: "CLUB", kind: "club" },
  { id: "abandoned-arcade", label: "Abandoned Arcade", zone: "entertainment", color: COLORS.cyan, accent: COLORS.yellow, icon: "8BIT", kind: "arcade" },
  { id: "sky-construction", label: "Sky Construction Site", zone: "rooftop", color: COLORS.yellow, accent: COLORS.orange, icon: "SKY", kind: "construction" },
  { id: "mob-hospital", label: "Mob Hospital", zone: "downtown", color: COLORS.green, accent: COLORS.red, icon: "MED", kind: "hospital" },
  { id: "underground-train", label: "Underground Train Station", zone: "underground", color: COLORS.cyan, accent: COLORS.yellow, icon: "RAIL", kind: "station" },
  { id: "hotel-hideout", label: "Luxury Hotel Hideout", zone: "downtown", color: COLORS.pink, accent: COLORS.yellow, icon: "HOT", kind: "hotel" },
  { id: "weapon-range", label: "Weapon Testing Range", zone: "industrial", color: COLORS.red, accent: COLORS.yellow, icon: "RNG", kind: "range" },
  { id: "mutant-zoo", label: "Mutant Zoo", zone: "weird", color: COLORS.green, accent: COLORS.orange, icon: "ZOO", kind: "zoo" },
  { id: "city-hall", label: "City Hall Courtroom", zone: "downtown", color: COLORS.white, accent: COLORS.red, icon: "LAW", kind: "court" },
  { id: "neon-mall", label: "Neon Mall", zone: "downtown", color: COLORS.cyan, accent: COLORS.pink, icon: "MALL", kind: "mall" },
  { id: "power-plant", label: "Power Plant", zone: "industrial", color: COLORS.yellow, accent: COLORS.cyan, icon: "PWR", kind: "plant" },
  { id: "mob-church", label: "Mob Church", zone: "downtown", color: COLORS.purple, accent: COLORS.yellow, icon: "BELL", kind: "church" },
  { id: "cyber-prison", label: "Cyber Prison", zone: "underground", color: "#5A7DFF", accent: COLORS.red, icon: "CELL", kind: "prison" },
  { id: "highway-ambush", label: "Highway Ambush Route", zone: "waterfront", color: COLORS.orange, accent: COLORS.yellow, icon: "HWY", kind: "highway" },
  { id: "neon-docks", label: "Neon Docks", zone: "waterfront", color: COLORS.cyan, accent: COLORS.green, icon: "DOCK", kind: "docks" },
  { id: "weather-tower", label: "Weather Control Tower", zone: "rooftop", color: COLORS.cyan, accent: COLORS.yellow, icon: "WX", kind: "tower" },
  { id: "dream-theater", label: "Dream Theater", zone: "entertainment", color: COLORS.pink, accent: COLORS.purple, icon: "DREAM", kind: "theater" },
  { id: "mob-museum", label: "Mob Museum", zone: "downtown", color: COLORS.orange, accent: COLORS.yellow, icon: "ART", kind: "museum" },
  { id: "old-subway-lab", label: "Old Subway Lab", zone: "underground", color: COLORS.green, accent: COLORS.cyan, icon: "LAB", kind: "station" },
  { id: "tower-restaurant", label: "Moonlight Tower Restaurant", zone: "rooftop", color: COLORS.yellow, accent: COLORS.pink, icon: "MOON", kind: "tower" },
  { id: "ai-bank-vault", label: "AI Bank Vault", zone: "downtown", color: COLORS.yellow, accent: COLORS.cyan, icon: "AI$", kind: "vault" },
  { id: "vhs-dimension", label: "Secret VHS Dimension", zone: "weird", color: COLORS.pink, accent: COLORS.cyan, icon: "VHS", kind: "vhs" },
];

const BASE_SLOTS = {
  downtown: [
    { x: -14.4, z: 13.0, rot: 90 }, { x: -5.0, z: 13.2, rot: 0 }, { x: 5.0, z: 13.2, rot: 0 },
    { x: 14.4, z: 12.8, rot: -90 }, { x: -14.5, z: 3.4, rot: 90 }, { x: 14.5, z: 3.2, rot: -90 },
    { x: -5.0, z: 3.3, rot: 180 }, { x: 5.0, z: 3.3, rot: 180 }, { x: -14.2, z: -6.6, rot: 90 },
    { x: 14.2, z: -6.6, rot: -90 },
  ],
  industrial: [
    { x: -22.0, z: -14.5, rot: 90 }, { x: -14.0, z: -22.0, rot: 0 }, { x: -5.2, z: -22.2, rot: 0 },
    { x: -22.0, z: -26.0, rot: 90 }, { x: -10.5, z: -32.0, rot: 180 },
  ],
  entertainment: [
    { x: 14.2, z: -15.0, rot: -90 }, { x: 22.0, z: -14.5, rot: -90 }, { x: 14.0, z: -22.2, rot: 0 },
    { x: 5.2, z: -22.0, rot: 0 }, { x: 22.0, z: -26.0, rot: -90 },
  ],
  underground: [
    { x: -22.0, z: 4.0, rot: 90 }, { x: -22.0, z: -4.2, rot: 90 }, { x: -14.2, z: -13.0, rot: 180 },
    { x: -5.0, z: -13.2, rot: 180 },
  ],
  rooftop: [
    { x: 5.2, z: -31.8, rot: 180 }, { x: 14.0, z: -31.8, rot: 180 }, { x: 22.0, z: -3.8, rot: -90 },
    { x: 22.0, z: 4.2, rot: -90 }, { x: 5.0, z: -13.2, rot: 180 },
  ],
  weird: [
    { x: -5.0, z: -31.8, rot: 180 }, { x: 0.0, z: -36.0, rot: 180 }, { x: 14.5, z: -36.0, rot: 180 },
  ],
  waterfront: [
    { x: -22.0, z: -34.5, rot: 90 }, { x: 22.0, z: -34.5, rot: -90 },
  ],
};

const ROAD_X = [-20, -10, 0, 10, 20];
const ROAD_Z = [18, 8, -2, -12, -22, -32];

const NPC_SIDEWALK_PATHS = [
  { axis: "z", x: -12.8, start: 16, end: -30, rot: 180 },
  { axis: "z", x: -7.2, start: -30, end: 16, rot: 0 },
  { axis: "z", x: 2.8, start: 16, end: -30, rot: 180 },
  { axis: "z", x: 7.2, start: -30, end: 16, rot: 0 },
  { axis: "z", x: 12.8, start: 16, end: -30, rot: 180 },
  { axis: "x", z: 12.8, start: -18, end: 18, rot: -90 },
  { axis: "x", z: 3.2, start: 18, end: -18, rot: 90 },
  { axis: "x", z: -16.8, start: -18, end: 18, rot: -90 },
  { axis: "x", z: -26.8, start: 18, end: -18, rot: 90 },
];

const TRAFFIC_PATHS = [
  { axis: "z", x: -20.9, start: 18, end: -34, lane: -0.9 },
  { axis: "z", x: -9.1, start: -34, end: 18, lane: 0.9 },
  { axis: "z", x: 0.9, start: 18, end: -34, lane: 0.9 },
  { axis: "z", x: 10.9, start: -34, end: 18, lane: 0.9 },
  { axis: "z", x: 19.1, start: 18, end: -34, lane: -0.9 },
  { axis: "x", z: 17.1, start: -24, end: 24, lane: -0.9 },
  { axis: "x", z: -2.9, start: 24, end: -24, lane: -0.9 },
  { axis: "x", z: -21.1, start: -24, end: 24, lane: 0.9 },
  { axis: "x", z: -32.9, start: 24, end: -24, lane: -0.9 },
];

const REGULAR_BUILDING_SIGNS = [
  "APTS", "DATA OFFICE", "NOIR HOTEL", "NOODLE BAR", "PARKING", "WAREHOUSE",
  "BYTE LOFTS", "CYBER LAUNDRY", "PIXEL PLAZA", "ALLEY MART", "SLEEP PODS", "RADIO REPAIR",
];

const state = {
  mode: "city",
  seed: Date.now() % 100000,
  playerHealth: 5,
  maxHealth: 5,
  invulnerableUntil: 0,
  dead: false,
  cityState: "Untouched",
  baseCleared: false,
  activeChoice: "",
  enemies: [],
  patrols: [],
  npcs: [],
  cars: [],
  solidBoxes: [],
  solidCircles: [],
  baseLocations: [],
  targets: [],
  enemyShots: [],
  bullets: [],
  portalZones: [],
  keyState: {},
  leftStick: { x: 0, y: 0 },
  rightStick: { x: 0, y: 0 },
  snapTurnReadyAt: 0,
  gun: {
    heldBy: null,
    handName: "",
    el: null,
    muzzle: null,
  },
  lastMessageAt: 0,
  nextEnemyId: 1,
  ready: false,
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
    rig: document.getElementById("playerRig") || document.getElementById("player-rig"),
    camera: document.getElementById("camera") || document.getElementById("player-camera"),
    rightController: document.getElementById("rightHand") || document.getElementById("right-controller"),
    leftController: document.getElementById("leftHand") || document.getElementById("left-controller"),
    gun: document.getElementById("gun"),
    gunMuzzle: document.getElementById("gunMuzzle"),
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
  ensureComponentWiring();
  createPixelTextures();
  bindInput();
  state.gun.el = refs.gun;
  state.gun.muzzle = refs.gunMuzzle;
  buildCityHub();
  state.ready = true;

  refs.scene.addEventListener("enter-vr", () => {
    setMessage("VR session active", "Left stick moves. Right stick snap turns. Grip the gun, then trigger fires.");
  });

  refs.scene.addEventListener("exit-vr", () => {
    setMessage("Neon Mob City", "Open in Meta Quest Browser, press Enter VR, then enter the Robot Factory.");
  });
}

function ensureComponentWiring() {
  refs.scene.setAttribute("game-state", "");
  refs.scene.setAttribute("bullet-system", "");
  refs.scene.setAttribute("city-generator", "");
  refs.scene.setAttribute("building-generator", "");
  refs.scene.setAttribute("base-location-manager", "");
  refs.scene.setAttribute("neon-sign-generator", "");
  refs.rig.setAttribute("player-movement", "");
  refs.rig.setAttribute("snap-turn", "");
  refs.rig.setAttribute("player-health", "");

  if (refs.gun) {
    refs.gun.setAttribute("grabbable-gun", "");
    refs.gun.setAttribute("gun-shooter", "");
  }
}

function registerComponents() {
  if (!AFRAME.components.billboard) {
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

  if (!AFRAME.components["game-state"]) {
    AFRAME.registerComponent("game-state", {
      tick(time, delta) {
        if (!state.ready) {
          return;
        }

        const dt = Math.min((delta || 0) / 1000, 0.05);
        updatePatrols(dt, time);
        updateEnemies(dt, time);
        updateEnemyShots(dt);
        updateTraffic(dt, time);
        updateHeldGun();
        updatePortalZones(time);
        updateGunDrop();
        updateHud();
      },
    });
  }

  if (!AFRAME.components["player-movement"]) {
    AFRAME.registerComponent("player-movement", {
      tick(time, delta) {
        if (!state.ready || state.dead) {
          return;
        }

        updatePlayerMove(Math.min((delta || 0) / 1000, 0.05));
      },
    });
  }

  if (!AFRAME.components["city-generator"]) {
    AFRAME.registerComponent("city-generator", {});
  }

  if (!AFRAME.components["building-generator"]) {
    AFRAME.registerComponent("building-generator", {});
  }

  if (!AFRAME.components["base-location-manager"]) {
    AFRAME.registerComponent("base-location-manager", {});
  }

  if (!AFRAME.components["neon-sign-generator"]) {
    AFRAME.registerComponent("neon-sign-generator", {});
  }

  if (!AFRAME.components["npc-wander"]) {
    AFRAME.registerComponent("npc-wander", {
      schema: {
        axis: { default: "x" },
        span: { default: 1.4 },
        speed: { default: 0.00032 },
        phase: { default: 0 },
      },
      init() {
        this.basePosition = this.el.object3D.position.clone();
        this.lastOffset = 0;
        this.body = this.el.querySelector(".npc-body-root")?.object3D || null;
        this.leftArm = this.el.querySelector(".npc-left-arm")?.object3D || null;
        this.rightArm = this.el.querySelector(".npc-right-arm")?.object3D || null;
        this.leftLeg = this.el.querySelector(".npc-left-leg")?.object3D || null;
        this.rightLeg = this.el.querySelector(".npc-right-leg")?.object3D || null;
      },
      tick(time) {
        if (state.mode !== "city" || !this.basePosition) {
          return;
        }

        const offset = Math.sin(time * this.data.speed + this.data.phase) * this.data.span;
        this.el.object3D.position.copy(this.basePosition);
        if (this.data.axis === "z") {
          this.el.object3D.position.z += offset;
        } else {
          this.el.object3D.position.x += offset;
        }

        const movingPositive = offset >= this.lastOffset;
        this.lastOffset = offset;
        this.el.object3D.rotation.y = this.data.axis === "z"
          ? (movingPositive ? 0 : Math.PI)
          : (movingPositive ? -Math.PI / 2 : Math.PI / 2);

        const stride = Math.sin(time * 0.008 + this.data.phase);
        const swing = stride * 0.42;
        if (this.body) {
          this.body.position.y = 0.04 + Math.abs(stride) * 0.035;
        }
        if (this.leftArm) this.leftArm.rotation.x = swing;
        if (this.rightArm) this.rightArm.rotation.x = -swing;
        if (this.leftLeg) this.leftLeg.rotation.x = -swing;
        if (this.rightLeg) this.rightLeg.rotation.x = swing;
      },
    });
  }

  if (!AFRAME.components["snap-turn"]) {
    AFRAME.registerComponent("snap-turn", {});
  }

  if (!AFRAME.components["grabbable-gun"]) {
    AFRAME.registerComponent("grabbable-gun", {});
  }

  if (!AFRAME.components["gun-shooter"]) {
    AFRAME.registerComponent("gun-shooter", {});
  }

  if (!AFRAME.components["bullet-system"]) {
    AFRAME.registerComponent("bullet-system", {
      tick(time, delta) {
        if (!state.ready || state.dead) {
          return;
        }

        updateBullets(Math.min((delta || 0) / 1000, 0.05));
      },
    });
  }

  if (!AFRAME.components["enemy-health"]) {
    AFRAME.registerComponent("enemy-health", {});
  }

  if (!AFRAME.components["player-health"]) {
    AFRAME.registerComponent("player-health", {});
  }
}

function bindInput() {
  window.addEventListener("keydown", (event) => {
    state.keyState[event.code] = true;
    if (event.code === "Space") {
      fireDesktopBullet();
    }
    if (event.code === "KeyR" && state.dead) {
      restartGame();
    }
  });

  window.addEventListener("keyup", (event) => {
    state.keyState[event.code] = false;
  });

  window.addEventListener("pointerdown", (event) => {
    if (event.target && event.target.tagName === "CANVAS") {
      fireInteractionRay(refs.camera, event);
    }
  });

  if (refs.leftController) {
    refs.leftController.addEventListener("thumbstickmoved", (event) => updateStick("left", event));
    refs.leftController.addEventListener("axismove", (event) => updateStick("left", event));
    refs.leftController.addEventListener("triggerdown", () => shootHeldGun(refs.leftController));
    refs.leftController.addEventListener("gripdown", () => tryGrabGun(refs.leftController));
    refs.leftController.addEventListener("gripup", () => releaseGun(refs.leftController));
  }

  if (refs.rightController) {
    refs.rightController.addEventListener("thumbstickmoved", (event) => updateStick("right", event));
    refs.rightController.addEventListener("axismove", (event) => updateStick("right", event));
    refs.rightController.addEventListener("triggerdown", () => shootHeldGun(refs.rightController));
    refs.rightController.addEventListener("gripdown", () => tryGrabGun(refs.rightController));
    refs.rightController.addEventListener("gripup", () => releaseGun(refs.rightController));
  }
}

function updateStick(hand, event) {
  const stick = getStickVector(event);
  if (hand === "left") {
    state.leftStick.x = Math.abs(stick.x) > 0.15 ? stick.x : 0;
    state.leftStick.y = Math.abs(stick.y) > 0.15 ? -stick.y : 0;
    return;
  }

  state.rightStick.x = Math.abs(stick.x) > 0.15 ? stick.x : 0;
  state.rightStick.y = Math.abs(stick.y) > 0.15 ? stick.y : 0;
  attemptSnapTurn(performance.now());
}

function getStickVector(event) {
  if (typeof event.detail.x === "number" || typeof event.detail.y === "number") {
    return {
      x: event.detail.x || 0,
      y: event.detail.y || 0,
    };
  }

  const axis = event.detail.axis || [0, 0];
  return {
    x: axis[0] || 0,
    y: axis[1] || 0,
  };
}

function attemptSnapTurn(time) {
  if (!refs.rig || time < state.snapTurnReadyAt || Math.abs(state.rightStick.x) <= 0.75) {
    return;
  }

  const direction = state.rightStick.x > 0 ? -1 : 1;
  refs.rig.object3D.rotation.y += THREE.MathUtils.degToRad(30 * direction);
  state.snapTurnReadyAt = time + 250;
}

function updatePlayerMove(dt) {
  if (!refs.rig || !refs.camera) {
    return;
  }

  let x = state.leftStick.x;
  let y = state.leftStick.y;

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
    movePlayerWithCollision(move, 3.0 * dt);
  }
}

function movePlayerWithCollision(direction, distance) {
  const current = refs.rig.object3D.position;
  const proposed = current.clone().addScaledVector(direction, distance);

  if (!wouldCollide(proposed)) {
    current.copy(proposed);
    return;
  }

  const slideX = current.clone();
  slideX.x = proposed.x;
  if (!wouldCollide(slideX)) {
    current.copy(slideX);
    return;
  }

  const slideZ = current.clone();
  slideZ.z = proposed.z;
  if (!wouldCollide(slideZ)) {
    current.copy(slideZ);
  }
}

function wouldCollide(position) {
  if (state.mode !== "city") {
    return false;
  }

  const radius = 0.42;
  const margin = 0.08;
  const boxHit = state.solidBoxes.some((box) => (
    Math.abs(position.x - box.x) < box.halfX + radius + margin
    && Math.abs(position.z - box.z) < box.halfZ + radius + margin
  ));
  if (boxHit) {
    return true;
  }

  const circleHit = state.solidCircles.some((circle) => (
    distance2D(position.x, position.z, circle.x, circle.z) < circle.radius + radius
  ));
  if (circleHit) {
    return true;
  }

  return state.cars.some((car) => (
    car.el.isConnected
    && distance2D(position.x, position.z, car.el.object3D.position.x, car.el.object3D.position.z) < car.radius + radius
  )) || state.npcs.some((npc) => (
    npc.isConnected
    && distance2D(position.x, position.z, npc.object3D.position.x, npc.object3D.position.z) < 0.62 + radius
  ));
}

function updatePatrols(dt, time) {
  state.patrols.forEach((patrol, index) => {
    const base = patrol.basePosition;
    const offset = Math.sin(time * 0.001 + index * 1.9) * 1.1;
    patrol.el.object3D.position.set(base.x + offset, 0, base.z);
  });
}

function updateEnemies(dt, time) {
  if (state.mode !== "base" || state.baseCleared || state.dead) {
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
  if (state.dead) {
    return;
  }

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
  const now = performance.now();
  if (state.dead || now < state.invulnerableUntil) {
    return;
  }

  state.invulnerableUntil = now + 1000;
  state.playerHealth = Math.max(0, state.playerHealth - amount);
  flashScreenMessage(`Hit. ${heartsLabel()}`);

  if (state.playerHealth <= 0) {
    state.dead = true;
    setMessage("You Died", "Press R to restart the run.");
  }
}

function restartGame() {
  state.playerHealth = state.maxHealth;
  state.invulnerableUntil = 0;
  state.dead = false;
  state.cityState = "Untouched";
  state.activeChoice = "";
  state.baseCleared = false;
  clearBullets();
  buildCityHub();
  setMessage("Neon Mob City", "Run restarted. Grip the gun, then choose the Robot Factory.");
}

// City hub generation: a seeded visual city pass. Each page load gets a new
// seed, then bases, shops, NPC paths, props, billboards, and building heights
// are shuffled inside broad zones so the hub feels alive without becoming huge.
function buildCityHub() {
  state.mode = "city";
  state.enemies = [];
  state.patrols = [];
  state.npcs = [];
  state.cars = [];
  state.solidBoxes = [];
  state.solidCircles = [];
  state.baseLocations = [];
  state.enemyShots = [];
  state.bullets = [];
  state.portalZones = [];
  state.targets = [];
  clearEntity(refs.world);
  clearEntity(refs.effects);
  rand = seededRandom(state.seed);

  refs.rig.object3D.position.set(0, 0, 18);
  refs.rig.object3D.rotation.set(0, 0, 0);
  refs.scene.setAttribute("background", "color: #090018");
  refs.scene.setAttribute("fog", "type: exponential; color: #150020; density: 0.022");

  const basePlacements = generateBasePlacements();
  const shopPlacements = generateShopPlacements();
  const occupied = basePlacements.concat(shopPlacements).map((item) => ({ x: item.x, z: item.z, radius: 2.8 }));

  createCityRoadGrid();
  createSkyline();
  createGeneratedBuildings(occupied);
  createShopExteriors(shopPlacements);
  createBaseLocations(basePlacements);
  createBillboards();
  createCityProps();
  createCityNpcs();
  createTrafficCars();
  createCityTitlePanel();
  placeGunInFrontOfPlayer(1.75);

  updateHud();
  setMessage("Neon Mob City", "Explore the randomized city. Robot Factory is the active test base.");
}

function generateBasePlacements() {
  const slotsByZone = {};
  Object.entries(BASE_SLOTS).forEach(([zone, slots]) => {
    slotsByZone[zone] = shuffle(slots.slice(), rand);
  });

  state.baseLocations = BASE_LOCATIONS.map((base) => {
    const slot = slotsByZone[base.zone].shift();
    const jitter = base.active ? 0.25 : 0.85;
    return {
      ...base,
      x: slot.x + (rand() - 0.5) * jitter,
      z: slot.z + (rand() - 0.5) * jitter,
      rotation: slot.rot,
      active: Boolean(base.active),
      sublabel: base.active ? "Active test base" : "Locked visual landmark",
    };
  });

  return state.baseLocations;
}

function generateShopPlacements() {
  const slots = shuffle([
    { x: -5.0, z: 17.0, rot: 180 }, { x: 5.0, z: 17.0, rot: 180 },
    { x: -14.6, z: 8.0, rot: 90 }, { x: 14.6, z: 8.0, rot: -90 },
    { x: -14.6, z: -1.8, rot: 90 }, { x: 14.6, z: -1.8, rot: -90 },
    { x: -5.0, z: -17.0, rot: 0 }, { x: 5.0, z: -17.0, rot: 0 },
  ], rand);

  return SHOP_DEFS.map(([label, icon, color], index) => ({
    label,
    icon,
    color,
    accent: index % 2 === 0 ? COLORS.cyan : COLORS.pink,
    ...slots[index],
  }));
}

function createCityRoadGrid() {
  makePlane({
    parent: refs.world,
    position: "0 -0.01 -8",
    rotation: "-90 0 0",
    width: 58,
    height: 62,
    material: "src: #city-grid; repeat: 24 26; shader: flat",
  });

  ROAD_X.forEach((x) => {
    makeBox({ position: `${x} 0.015 -7`, size: "4.3 0.03 58", color: COLORS.street, material: "src: #road-pixel; repeat: 2 24; shader: flat" });
    for (let z = 18; z >= -34; z -= 4) {
      makeBox({ position: `${x} 0.045 ${z}`, size: "0.1 0.04 1.15", color: COLORS.cyan, material: neonMaterial(COLORS.cyan) });
    }
  });

  ROAD_Z.forEach((z) => {
    makeBox({ position: `0 0.018 ${z}`, size: "50 0.03 4.3", color: COLORS.street, material: "src: #road-pixel; repeat: 22 2; shader: flat" });
    for (let x = -24; x <= 24; x += 4) {
      makeBox({ position: `${x} 0.05 ${z}`, size: "1.15 0.04 0.1", color: COLORS.pink, material: neonMaterial(COLORS.pink) });
    }
  });

  for (let xi = 0; xi < ROAD_X.length - 1; xi += 1) {
    for (let zi = 0; zi < ROAD_Z.length - 1; zi += 1) {
      const cx = (ROAD_X[xi] + ROAD_X[xi + 1]) / 2;
      const cz = (ROAD_Z[zi] + ROAD_Z[zi + 1]) / 2;
      makeBox({ position: `${cx} 0.025 ${cz}`, size: "4.9 0.04 4.9", color: "#161128", material: "src: #sidewalk-tile; repeat: 3 3; shader: flat" });
      if (rand() > 0.55) {
        makeBox({ position: `${cx} 0.055 ${cz}`, size: `${rand() > 0.5 ? "0.42 0.04 5.2" : "5.2 0.04 0.42"}`, color: "#05050B", material: "color: #05050B; shader: flat" });
      }
    }
  }

  makeBox({ position: "0 0.04 -37.8", size: "54 0.05 2.4", color: "#061827", material: "color: #061827; emissive: #00F5FF; emissiveIntensity: 0.18; shader: flat" });
}

function createGeneratedBuildings(occupied) {
  const cells = [];
  [-15, -5, 5, 15].forEach((x) => {
    [13, 3, -7, -17, -27].forEach((z) => cells.push({ x, z }));
  });

  shuffle(cells, rand).forEach((cell) => {
    const count = 3 + Math.floor(rand() * 3);
    for (let i = 0; i < count; i += 1) {
      const x = cell.x + (rand() - 0.5) * 5.4;
      const z = cell.z + (rand() - 0.5) * 5.4;
      if (isNearOccupied(x, z, occupied, 2.15)) {
        continue;
      }

      const heightBias = z < -20 ? 3.5 : 1.6;
      const h = heightBias + 1.6 + rand() * 5.2;
      const w = 1.15 + rand() * 1.55;
      const d = 1.15 + rand() * 1.55;
      const windowColor = [COLORS.cyan, COLORS.pink, COLORS.yellow, COLORS.green][Math.floor(rand() * 4)];
      createBuilding(x, z, w, h, d, windowColor);
      if (rand() > 0.45) {
        createRegularBuildingSign(x, z, w, d, h, REGULAR_BUILDING_SIGNS[Math.floor(rand() * REGULAR_BUILDING_SIGNS.length)], windowColor);
      }
      if (rand() > 0.62) {
        createRooftopAntenna(x, h, z, windowColor);
      }
    }
  });
}

function isNearOccupied(x, z, occupied, radius) {
  return occupied.some((item) => {
    const dx = x - item.x;
    const dz = z - item.z;
    return Math.sqrt(dx * dx + dz * dz) < radius + item.radius;
  });
}

function createShopExteriors(shops) {
  shops.forEach((shop) => createShopExterior(shop));
}

function createBaseLocations(bases) {
  bases.forEach((base) => createBaseEntrance(base));
}

function createSkyline() {
  createSkyPanel("0 8 -46", "0 0 0", 70, 18);
  createSkyPanel("0 8 28", "0 180 0", 70, 18);
  createSkyPanel("-34 8 -8", "0 90 0", 74, 18);
  createSkyPanel("34 8 -8", "0 -90 0", 74, 18);

  createSkylineWall("north");
  createSkylineWall("south");
  createSkylineWall("west");
  createSkylineWall("east");
}

function createSkyPanel(position, rotation, width, height) {
  makePlane({
    position,
    rotation,
    width,
    height,
    material: `color: #7B145F; opacity: 0.38; transparent: true; side: double; shader: flat`,
  });
}

function createSkylineWall(side) {
  const count = side === "north" || side === "south" ? 36 : 32;
  for (let i = 0; i < count; i += 1) {
    const h = 3.4 + rand() * 8.4;
    const w = 0.8 + rand() * 1.3;
    const d = 0.7 + rand() * 1.1;
    let x;
    let z;
    if (side === "north") {
      x = -32 + i * (64 / count);
      z = -42.5 - rand() * 2.2;
    } else if (side === "south") {
      x = -32 + i * (64 / count);
      z = 24.5 + rand() * 2.2;
    } else if (side === "west") {
      x = -32.5 - rand() * 2.2;
      z = 22 - i * (62 / count);
    } else {
      x = 32.5 + rand() * 2.2;
      z = 22 - i * (62 / count);
    }

    makeBox({
      position: `${x} ${h / 2} ${z}`,
      size: `${w} ${h} ${d}`,
      color: "#05050B",
      material: "color: #05050B; roughness: 1; metalness: 0",
    });

    if (i % 3 === 0) {
      const windowGlow = rand() > 0.5 ? COLORS.cyan : COLORS.pink;
      makeBox({
        position: `${x} ${Math.min(h - 0.45, 2 + rand() * 4)} ${z}`,
        size: "0.18 0.18 0.03",
        color: windowGlow,
        material: neonMaterial(windowGlow),
      });
    }
  }
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
  addSolidBox(x, z, width + 0.18, depth + 0.18, "regular-building");

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

function createShopExterior(shop) {
  const group = makeEntity("a-entity", { position: `${shop.x} 0 ${shop.z}`, rotation: `0 ${shop.rot} 0` });
  addSolidBox(shop.x, shop.z, shop.rot % 180 === 0 ? 2.45 : 0.9, shop.rot % 180 === 0 ? 0.9 : 2.45, "shop");
  makeBox({ parent: group, position: "0 1.05 0", size: "2.15 2.1 0.48", color: "#080713", material: "color: #080713; shader: flat" });
  makeBox({ parent: group, position: "0 0.72 0.28", size: "0.74 1.18 0.14", color: "#111827", material: `color: #111827; emissive: ${shop.color}; emissiveIntensity: 0.18; shader: flat` });
  makeBox({ parent: group, position: "-0.68 0.92 0.3", size: "0.42 0.56 0.08", color: shop.accent, material: neonMaterial(shop.accent) });
  makeBox({ parent: group, position: "0.68 0.92 0.3", size: "0.42 0.56 0.08", color: shop.accent, material: neonMaterial(shop.accent) });

  const sign = makePlane({ parent: group, position: "0 2.25 0.31", width: 2.35, height: 0.5, material: neonMaterial(shop.color) });
  makeText({ parent: sign, value: shop.label.toUpperCase(), position: "-1.02 0.12 0.03", width: 2.05, color: COLORS.black, align: "center", wrapCount: 14 });
  makeText({ parent: group, value: shop.icon, position: "-0.38 1.18 0.36", width: 0.9, color: shop.color, align: "center", wrapCount: 8 });
}

function createBillboards() {
  const billboardSlots = [
    { x: -18, y: 5.6, z: 6, rot: 75 }, { x: 18, y: 5.8, z: 5, rot: -75 },
    { x: -17, y: 6.2, z: -12, rot: 90 }, { x: 17, y: 6.0, z: -13, rot: -90 },
    { x: -7, y: 7.0, z: -27, rot: 180 }, { x: 7, y: 6.8, z: -27, rot: 180 },
    { x: 0, y: 4.4, z: 10, rot: 180 }, { x: 0, y: 5.5, z: -35, rot: 0 },
  ];

  shuffle(billboardSlots, rand).forEach((slot, index) => {
    const text = BILLBOARD_COPY[index % BILLBOARD_COPY.length];
    const color = [COLORS.cyan, COLORS.pink, COLORS.yellow, COLORS.green][index % 4];
    const group = makeEntity("a-entity", { position: `${slot.x} ${slot.y} ${slot.z}`, rotation: `0 ${slot.rot} 0` });
    makeBox({ parent: group, position: "0 -0.16 -0.04", size: "3.5 0.16 0.12", color: "#22283D", material: "color: #22283D; shader: flat" });
    makeBox({ parent: group, position: "-1.35 -2.35 -0.08", size: "0.12 4.4 0.12", color: "#273449", material: "color: #273449; shader: flat" });
    makeBox({ parent: group, position: "1.35 -2.35 -0.08", size: "0.12 4.4 0.12", color: "#273449", material: "color: #273449; shader: flat" });
    makeBox({ parent: group, position: "0 -4.52 -0.08", size: "3.05 0.14 0.22", color: "#111827", material: "color: #111827; shader: flat" });
    makePlane({ parent: group, width: 3.6, height: 1.2, material: `color: #070913; emissive: ${color}; emissiveIntensity: 0.25; shader: flat` });
    makeText({ parent: group, value: text, position: "-1.58 0.28 0.05", width: 3.15, color, align: "center", wrapCount: 16 });
    if (index % 3 === 0) {
      makeBox({ parent: group, position: "-1.65 -0.42 0.08", size: "0.18 0.32 0.08", color: color, material: neonMaterial(color) });
      makeBox({ parent: group, position: "1.65 -0.42 0.08", size: "0.18 0.32 0.08", color: color, material: neonMaterial(color) });
    }
    addSolidBox(slot.x, slot.z, 0.55, 0.55, "billboard-support");
  });
}

function createCityProps() {
  for (let i = 0; i < 18; i += 1) {
    const x = [-22.1, -17.9, -12.1, -7.9, -2.1, 2.1, 7.9, 12.1, 17.9, 22.1][Math.floor(rand() * 10)];
    const z = 16 - Math.floor(rand() * 13) * 4;
    createParkedCar(x, z + (rand() - 0.5) * 1.8, rand() > 0.5 ? 0 : 90);
  }

  for (let i = 0; i < 28; i += 1) {
    const x = -24 + rand() * 48;
    const z = -35 + rand() * 52;
    if (Math.abs(x % 10) < 2.8 || Math.abs((z + 2) % 10) < 2.8) {
      continue;
    }
    createSmallProp(x, z, i);
  }

  for (let i = 0; i < 16; i += 1) {
    const x = i % 2 === 0 ? -2.8 : 2.8;
    const z = 16 - i * 3.2;
    createStreetLamp(x, z, i % 3 === 0 ? COLORS.pink : COLORS.cyan);
  }
}

function createRegularBuildingSign(x, z, width, depth, height, label, color) {
  const frontSouth = z < -3;
  const signZ = z + (frontSouth ? depth / 2 + 0.05 : -depth / 2 - 0.05);
  const rotation = frontSouth ? "0 0 0" : "0 180 0";
  const signY = Math.min(height - 0.35, 2.1 + rand() * 1.4);
  const sign = makePlane({
    position: `${x} ${signY} ${signZ}`,
    rotation,
    width: Math.min(1.8, width + 0.35),
    height: 0.42,
    material: neonMaterial(color),
  });
  makeText({ parent: sign, value: label, position: "-0.78 0.1 0.03", width: 1.55, color: COLORS.black, align: "center", wrapCount: 12 });
  makeBox({ position: `${x - Math.min(width / 2, 0.8)} ${signY} ${signZ - (frontSouth ? 0.04 : -0.04)}`, size: "0.06 0.55 0.06", color: "#273449", material: "color: #273449; shader: flat" });
  makeBox({ position: `${x + Math.min(width / 2, 0.8)} ${signY} ${signZ - (frontSouth ? 0.04 : -0.04)}`, size: "0.06 0.55 0.06", color: "#273449", material: "color: #273449; shader: flat" });
}

function createParkedCar(x, z, rotation) {
  const color = [COLORS.pink, COLORS.cyan, COLORS.yellow, COLORS.green][Math.floor(rand() * 4)];
  const group = makeEntity("a-entity", { position: `${x} 0 ${z}`, rotation: `0 ${rotation} 0` });
  addSolidBox(x, z, rotation === 0 ? 1.4 : 2.2, rotation === 0 ? 2.2 : 1.4, "parked-car");
  makeBox({ parent: group, position: "0 0.28 0", size: "1.25 0.38 2.05", color: "#101626", material: "color: #101626; shader: flat" });
  makeBox({ parent: group, position: "0 0.55 -0.12", size: "0.86 0.34 0.88", color, material: neonMaterial(color) });
  makeBox({ parent: group, position: "-0.68 0.23 0.62", size: "0.08 0.18 0.42", color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });
  makeBox({ parent: group, position: "0.68 0.23 0.62", size: "0.08 0.18 0.42", color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });
}

function createSmallProp(x, z, index) {
  const type = index % 6;
  if (type === 0) {
    makeCylinder({ position: `${x} 0.28 ${z}`, radius: 0.24, height: 0.56, color: "#1C2432", material: "src: #panel-block; repeat: 1 1; shader: flat" });
    addSolidCircle(x, z, 0.28, "trash-can");
  } else if (type === 1) {
    makeBox({ position: `${x} 0.42 ${z}`, size: "0.45 0.84 0.34", color: COLORS.cyan, material: neonMaterial(COLORS.cyan) });
    addSolidBox(x, z, 0.58, 0.48, "vending-machine");
  } else if (type === 2) {
    makeBox({ position: `${x} 0.23 ${z}`, size: "0.72 0.46 0.72", color: "#293446", material: "src: #panel-block; repeat: 1 1; shader: flat" });
    addSolidBox(x, z, 0.84, 0.84, "crate");
  } else if (type === 3) {
    makeBox({ position: `${x} 0.18 ${z}`, size: "1.05 0.36 0.16", color: COLORS.orange, material: "src: #hazard; repeat: 2 1; shader: flat" });
    addSolidBox(x, z, 1.15, 0.28, "barrier");
  } else if (type === 4) {
    makeCylinder({ position: `${x} 0.04 ${z}`, rotation: "-90 0 0", radius: 0.48, height: 0.04, color: COLORS.green, material: `color: ${COLORS.green}; emissive: ${COLORS.green}; emissiveIntensity: 0.25; shader: flat` });
  } else {
    const arrow = makePlane({ position: `${x} 1.0 ${z}`, rotation: `0 ${Math.floor(rand() * 4) * 90} 0`, width: 0.9, height: 0.4, material: neonMaterial(COLORS.pink) });
    makeText({ parent: arrow, value: ">>>", position: "-0.34 0.1 0.03", width: 0.72, color: COLORS.black, align: "center" });
  }
}

function createStreetLamp(x, z, color) {
  const group = makeEntity("a-entity", { position: `${x} 0 ${z}` });
  addSolidCircle(x, z, 0.22, "street-lamp");
  makeCylinder({ parent: group, position: "0 1.05 0", radius: 0.035, height: 2.1, color: "#3B4658", material: "color: #3B4658; shader: flat" });
  makeBox({ parent: group, position: "0 2.12 0", size: "0.48 0.12 0.48", color, material: neonMaterial(color) });
}

function createCityNpcs() {
  for (let i = 0; i < 24; i += 1) {
    const def = NPC_DEFS[i % NPC_DEFS.length];
    const path = NPC_SIDEWALK_PATHS[i % NPC_SIDEWALK_PATHS.length];
    const t = rand();
    const x = path.axis === "x" ? lerp(path.start, path.end, t) : path.x + (rand() - 0.5) * 0.35;
    const z = path.axis === "z" ? lerp(path.start, path.end, t) : path.z + (rand() - 0.5) * 0.35;
    createNpc(def, x, z, path, i);
  }
}

function createNpc(def, x, z, path, index) {
  const bodyColor = def.id === "robot-ped" ? "#334155" : def.id === "mutant-weirdo" ? "#203B28" : "#171827";
  const headColor = def.id === "robot-ped" ? "#8DEBFF" : def.id === "mutant-weirdo" ? "#8EFF7A" : "#D7A37A";
  const group = makeEntity("a-entity", {
    position: `${x} 0 ${z}`,
    rotation: `0 ${path.rot} 0`,
  });
  const wanderConfig = `axis: ${path.axis}; span: ${(0.75 + rand() * 1.1).toFixed(2)}; speed: ${(0.00018 + rand() * 0.0002).toFixed(5)}; phase: ${(rand() * 6.28).toFixed(2)}`;
  const rig = makeEntity("a-entity", { class: "npc-body-root", position: "0 0.04 0" }, group);
  makeBox({ parent: rig, position: "0 0.82 0", size: "0.38 0.62 0.22", color: bodyColor, material: `color: ${bodyColor}; shader: flat` });
  makeBox({ parent: rig, position: "0 1.27 0", size: "0.32 0.32 0.3", color: headColor, material: `color: ${headColor}; shader: flat` });
  makeBox({ parent: rig, position: "0 1.31 -0.16", size: "0.22 0.045 0.035", color: def.color, material: neonMaterial(def.color) });
  const leftArm = makeBox({ parent: rig, position: "-0.32 0.78 0", size: "0.12 0.48 0.12", color: bodyColor, material: `color: ${bodyColor}; shader: flat` });
  const rightArm = makeBox({ parent: rig, position: "0.32 0.78 0", size: "0.12 0.48 0.12", color: bodyColor, material: `color: ${bodyColor}; shader: flat` });
  const leftLeg = makeBox({ parent: rig, position: "-0.12 0.28 0", size: "0.13 0.48 0.13", color: "#0B0E18", material: "color: #0B0E18; shader: flat" });
  const rightLeg = makeBox({ parent: rig, position: "0.12 0.28 0", size: "0.13 0.48 0.13", color: "#0B0E18", material: "color: #0B0E18; shader: flat" });
  leftArm.classList.add("npc-left-arm");
  rightArm.classList.add("npc-right-arm");
  leftLeg.classList.add("npc-left-leg");
  rightLeg.classList.add("npc-right-leg");
  if (def.id === "vendor") {
    makeBox({ parent: group, position: "0.52 0.45 -0.05", size: "0.5 0.3 0.42", color: def.color, material: neonMaterial(def.color) });
  }
  makePlane({ parent: group, position: "0 0.03 0", rotation: "-90 0 0", width: 0.58, height: 0.36, material: "color: #000000; opacity: 0.32; transparent: true; shader: flat" });
  group.setAttribute("npc-wander", wanderConfig);
  state.npcs.push(group);
}

function createTrafficCars() {
  const shuffledPaths = shuffle(TRAFFIC_PATHS.slice(), rand);
  for (let i = 0; i < 9; i += 1) {
    createTrafficCar(shuffledPaths[i % shuffledPaths.length], i);
  }
}

function createTrafficCar(path, index) {
  const start = path.start;
  const end = path.end;
  const direction = end >= start ? 1 : -1;
  const span = Math.abs(end - start);
  const offset = rand() * span;
  const color = [COLORS.pink, COLORS.cyan, COLORS.yellow, COLORS.green, COLORS.orange][index % 5];
  const group = makeEntity("a-entity", {}, refs.world);
  const car = {
    el: group,
    path,
    value: start + direction * offset,
    direction,
    speed: 2.2 + rand() * 1.2,
    radius: 0.95,
  };

  makeBox({ parent: group, position: "0 0.28 0", size: "1.15 0.38 1.85", color: "#101626", material: "color: #101626; shader: flat" });
  makeBox({ parent: group, position: "0 0.55 -0.1", size: "0.82 0.34 0.78", color, material: neonMaterial(color) });
  makeBox({ parent: group, position: "-0.38 0.32 -0.96", size: "0.22 0.1 0.05", color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });
  makeBox({ parent: group, position: "0.38 0.32 -0.96", size: "0.22 0.1 0.05", color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });
  makeBox({ parent: group, position: "-0.38 0.32 0.96", size: "0.22 0.1 0.05", color: COLORS.red, material: neonMaterial(COLORS.red) });
  makeBox({ parent: group, position: "0.38 0.32 0.96", size: "0.22 0.1 0.05", color: COLORS.red, material: neonMaterial(COLORS.red) });

  state.cars.push(car);
  updateTrafficCarTransform(car);
}

function updateTraffic(dt) {
  if (state.mode !== "city") {
    return;
  }

  state.cars.forEach((car) => {
    car.value += car.direction * car.speed * dt;
    if (car.direction > 0 && car.value > car.path.end) {
      car.value = car.path.start;
    } else if (car.direction < 0 && car.value < car.path.end) {
      car.value = car.path.start;
    }
    updateTrafficCarTransform(car);
  });
}

function updateTrafficCarTransform(car) {
  if (car.path.axis === "z") {
    car.el.object3D.position.set(car.path.x, 0, car.value);
    car.el.object3D.rotation.y = car.direction > 0 ? Math.PI : 0;
  } else {
    car.el.object3D.position.set(car.value, 0, car.path.z);
    car.el.object3D.rotation.y = car.direction > 0 ? -Math.PI / 2 : Math.PI / 2;
  }
}

function createRooftopAntenna(x, height, z, color) {
  const group = makeEntity("a-entity", { position: `${x} ${height + 0.18} ${z}` });
  makeCylinder({ parent: group, position: "0 0.44 0", radius: 0.025, height: 0.88, color: color, material: neonMaterial(color) });
  makeBox({ parent: group, position: "0 0.92 0", size: "0.52 0.05 0.05", color: color, material: neonMaterial(color) });
}

function createCityTitlePanel() {
  const panel = makeEntity("a-entity", { position: "0 2.55 15.0", billboard: "" });
  makePlane({
    parent: panel,
    width: 6.4,
    height: 2.0,
    material: "color: #080713; opacity: 0.86; transparent: true; shader: flat",
  });
  makeText({ parent: panel, value: "NEON MOB CITY", position: "-2.9 0.72 0.04", width: 5.8, color: COLORS.cyan });
  makeText({ parent: panel, value: `Run Seed: ${Math.floor(state.seed)}`, position: "-2.85 0.32 0.04", width: 5.6, color: COLORS.yellow });
  makeText({ parent: panel, value: "Objective: Explore the city and choose a mob base", position: "-2.85 -0.02 0.04", width: 5.6, color: COLORS.white });
  makeText({ parent: panel, value: "Active Base: Robot Factory  |  Locked Bases Visible: 29", position: "-2.85 -0.36 0.04", width: 5.6, color: COLORS.pink });
  refs.cityStateText = makeText({
    parent: panel,
    value: `City State: ${state.cityState}`,
    position: "-2.85 -0.7 0.04",
    width: 5.6,
    color: COLORS.yellow,
  });
}

function createBaseEntrance(config) {
  const group = makeEntity("a-entity", {
    position: `${config.x} 0 ${config.z}`,
    rotation: `0 ${config.rotation || 0} 0`,
  });
  const accent = config.accent || config.color;
  addSolidBox(config.x, config.z, 2.95, 1.25, "base-landmark");

  makeBox({ parent: group, position: "0 1.35 0", size: "2.55 2.7 0.42", color: "#0B0E18", material: "color: #0B0E18; roughness: 1; metalness: 0" });
  makeBox({ parent: group, position: "0 1.18 0.08", size: "1.42 1.75 0.16", color: config.color, material: neonMaterial(config.color) });
  makeBox({ parent: group, position: "-1.45 1.05 0.12", size: "0.18 2.05 0.2", color: accent, material: neonMaterial(accent) });
  makeBox({ parent: group, position: "1.45 1.05 0.12", size: "0.18 2.05 0.2", color: accent, material: neonMaterial(accent) });

  const labelPanel = makePlane({
    parent: group,
    position: "0 3.02 0.12",
    width: 3.15,
    height: 0.72,
    material: neonMaterial(config.color),
  });
  makeText({ parent: labelPanel, value: config.label.toUpperCase(), position: "-1.43 0.18 0.03", width: 2.86, color: COLORS.black, align: "center", wrapCount: 16 });

  const iconPanel = makePlane({
    parent: group,
    position: "0 1.46 0.2",
    width: 1.08,
    height: 0.62,
    material: "color: #080713; shader: flat",
  });
  makeText({ parent: iconPanel, value: config.icon, position: "-0.46 0.14 0.03", width: 0.92, color: config.color, align: "center", wrapCount: 7 });

  const sub = makeText({ parent: group, value: config.sublabel, position: "-1.2 0.28 0.22", width: 2.4, color: config.active ? COLORS.yellow : COLORS.white, wrapCount: 14 });
  sub.setAttribute("align", "center");
  createBaseDetails(group, config, accent);

  const target = makeBox({
    parent: group,
    position: "0 1.08 0.25",
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
    z: config.z,
    radius: 1.2,
    active: true,
    nextAllowed: 0,
  });
}

function createBaseDetails(group, config, accent) {
  if (["factory", "plant", "range"].includes(config.kind)) {
    makeCylinder({ parent: group, position: "-0.82 2.15 -0.08", radius: 0.12, height: 1.25, color: accent, material: neonMaterial(accent) });
    makeCylinder({ parent: group, position: "0.82 2.0 -0.08", radius: 0.1, height: 1.0, color: "#36465D", material: "src: #panel-block; repeat: 1 2; shader: flat" });
    makeBox({ parent: group, position: "0 0.12 0.48", size: "2.35 0.14 0.18", color: COLORS.yellow, material: "src: #hazard; repeat: 4 1; shader: flat" });
  } else if (["lab", "zoo", "hospital"].includes(config.kind)) {
    makeCylinder({ parent: group, position: "-0.82 0.78 0.48", radius: 0.22, height: 1.15, color: COLORS.green, material: `color: ${COLORS.green}; opacity: 0.58; transparent: true; shader: flat` });
    makeCylinder({ parent: group, position: "0.82 0.78 0.48", radius: 0.22, height: 1.15, color: accent, material: `color: ${accent}; opacity: 0.52; transparent: true; shader: flat` });
    makeText({ parent: group, value: "!!", position: "-0.16 2.08 0.24", width: 0.35, color: COLORS.yellow, align: "center" });
  } else if (["casino", "club", "arcade", "theater"].includes(config.kind)) {
    makeBox({ parent: group, position: "-1.1 0.82 0.45", size: "0.22 1.35 0.22", color: accent, material: neonMaterial(accent) });
    makeBox({ parent: group, position: "1.1 0.82 0.45", size: "0.22 1.35 0.22", color: accent, material: neonMaterial(accent) });
    makeBox({ parent: group, position: "0 2.46 0.2", size: "2.3 0.16 0.12", color: accent, material: neonMaterial(accent) });
  } else if (["tower", "rooftop", "construction"].includes(config.kind)) {
    makeBox({ parent: group, position: "0 3.95 -0.05", size: "0.32 1.7 0.32", color: "#111827", material: "color: #111827; shader: flat" });
    makeBox({ parent: group, position: "0 4.82 -0.05", size: "1.35 0.18 0.18", color: accent, material: neonMaterial(accent) });
    makeBox({ parent: group, position: "0.48 3.62 0.12", size: "0.76 0.42 0.08", color: config.color, material: neonMaterial(config.color) });
  } else if (["sewer", "station", "prison"].includes(config.kind)) {
    makeCylinder({ parent: group, position: "0 0.04 0.92", rotation: "-90 0 0", radius: 0.68, height: 0.08, color: accent, material: `color: ${accent}; emissive: ${accent}; emissiveIntensity: 0.45; shader: flat` });
    makeBox({ parent: group, position: "-0.56 0.36 0.55", size: "0.18 0.72 0.16", color: "#334155", material: "color: #334155; shader: flat" });
    makeBox({ parent: group, position: "0.56 0.36 0.55", size: "0.18 0.72 0.16", color: "#334155", material: "color: #334155; shader: flat" });
  } else if (["docks", "highway"].includes(config.kind)) {
    makeBox({ parent: group, position: "0 0.09 0.92", size: "2.8 0.18 0.72", color: "#0A2633", material: `color: #0A2633; emissive: ${accent}; emissiveIntensity: 0.14; shader: flat` });
    makeBox({ parent: group, position: "-0.7 0.38 0.72", size: "0.55 0.55 0.55", color: "#293446", material: "src: #panel-block; repeat: 1 1; shader: flat" });
    makeBox({ parent: group, position: "0.52 0.28 0.85", size: "0.72 0.36 0.48", color: COLORS.orange, material: "src: #hazard; repeat: 2 1; shader: flat" });
  } else if (config.kind === "vhs") {
    makeBox({ parent: group, position: "-0.62 1.88 0.38", size: "0.38 0.38 0.12", color: COLORS.cyan, material: neonMaterial(COLORS.cyan) });
    makeBox({ parent: group, position: "0.68 0.82 0.46", size: "0.46 0.46 0.12", color: COLORS.pink, material: neonMaterial(COLORS.pink) });
    makeText({ parent: group, value: "TRACKING...", position: "-0.84 2.28 0.24", width: 1.7, color: COLORS.white, align: "center", wrapCount: 12 });
  } else if (config.kind === "vault") {
    makeCylinder({ parent: group, position: "0 1.08 0.3", rotation: "90 0 0", radius: 0.62, height: 0.16, color: COLORS.yellow, material: neonMaterial(COLORS.yellow) });
    makeText({ parent: group, value: "AI", position: "-0.2 1.25 0.43", width: 0.5, color: COLORS.black, align: "center" });
  } else {
    makeBox({ parent: group, position: "-0.95 0.48 0.52", size: "0.5 0.38 0.38", color: accent, material: neonMaterial(accent) });
    makeBox({ parent: group, position: "0.96 0.48 0.52", size: "0.5 0.38 0.38", color: config.color, material: neonMaterial(config.color) });
  }
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
  state.npcs = [];
  state.cars = [];
  state.solidBoxes = [];
  state.solidCircles = [];
  state.enemyShots = [];
  state.bullets = [];
  state.portalZones = [];
  state.targets = [];
  clearEntity(refs.world);
  clearEntity(refs.effects);

  const accent = rand() > 0.5 ? COLORS.cyan : "#5A7DFF";
  refs.rig.object3D.position.set(0, 0, 3.25);
  placeGunInFrontOfPlayer(1.25);
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

  setMessage("Robot Factory", "Clear the guards. Hold the gun and fire neon bullets.");
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
  const group = makeEntity("a-entity", { position: `${x} 0 ${z}`, "enemy-health": "" });
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

function tryGrabGun(hand) {
  if (state.dead || !state.gun.el || state.gun.heldBy) {
    return;
  }

  const handPosition = new THREE.Vector3();
  const gunPosition = new THREE.Vector3();
  hand.object3D.getWorldPosition(handPosition);
  state.gun.el.object3D.getWorldPosition(gunPosition);

  if (handPosition.distanceTo(gunPosition) > 0.75) {
    setMessage("Gun out of reach", "Move a hand closer, then press side grip.");
    return;
  }

  state.gun.heldBy = hand;
  state.gun.handName = getHandName(hand);
  refs.scene.appendChild(state.gun.el);
  setGunVisible(true);
  state.gun.el.setAttribute("scale", "1 1 1");
  state.gun.el.object3D.scale.set(1, 1, 1);
  updateHeldGun();
  console.log(`Gun grabbed ${state.gun.handName}`);
  setMessage("Gun grabbed", "Trigger fires neon bullets. Release grip to drop it.");
}

function releaseGun(hand) {
  if (!state.gun.el || state.gun.heldBy !== hand) {
    return;
  }

  state.gun.heldBy = null;
  state.gun.handName = "";
  refs.scene.appendChild(state.gun.el);
  setGunVisible(true);
  placeGunInFrontOfPlayer(1.0);
  console.log("Gun released");
  setMessage("Gun dropped", "Grip near the gun with either hand to pick it up again.");
}

function getHandName(hand) {
  return hand === refs.leftController ? "left" : "right";
}

function updateHeldGun() {
  if (!state.gun.el || !state.gun.heldBy) {
    return;
  }

  const handPosition = new THREE.Vector3();
  const handQuaternion = new THREE.Quaternion();
  const localOffset = new THREE.Vector3(0, -0.08, -0.25);
  const localRotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(
    THREE.MathUtils.degToRad(-8),
    0,
    0
  ));

  state.gun.heldBy.object3D.getWorldPosition(handPosition);
  state.gun.heldBy.object3D.getWorldQuaternion(handQuaternion);
  localOffset.applyQuaternion(handQuaternion);

  state.gun.el.object3D.position.copy(handPosition.add(localOffset));
  state.gun.el.object3D.quaternion.copy(handQuaternion.multiply(localRotation));
  state.gun.el.object3D.scale.set(1, 1, 1);
  setGunVisible(true);
  state.gun.el.object3D.updateMatrixWorld(true);
}

function placeGunInFrontOfPlayer(distance) {
  if (!state.gun.el || state.gun.heldBy || !refs.rig || !refs.camera) {
    return;
  }

  refs.scene.appendChild(state.gun.el);

  const rigPosition = refs.rig.object3D.position;
  const forward = new THREE.Vector3();
  refs.camera.object3D.getWorldDirection(forward);
  forward.y = 0;
  if (forward.lengthSq() === 0) {
    forward.set(0, 0, -1);
  }
  forward.normalize();

  const position = new THREE.Vector3(rigPosition.x, 1.15, rigPosition.z).addScaledVector(forward, distance);
  const yaw = THREE.MathUtils.radToDeg(Math.atan2(-forward.x, -forward.z));
  setGunVisible(true);
  state.gun.el.setAttribute("position", vecToAttr(position));
  state.gun.el.setAttribute("rotation", `0 ${yaw.toFixed(2)} 0`);
  state.gun.el.setAttribute("scale", "1 1 1");
  state.gun.el.object3D.position.copy(position);
  state.gun.el.object3D.rotation.set(0, THREE.MathUtils.degToRad(yaw), 0);
  state.gun.el.object3D.scale.set(1, 1, 1);
  state.gun.el.object3D.updateMatrixWorld(true);
}

function updateGunDrop() {
  if (!state.gun.el || state.gun.heldBy) {
    return;
  }

  const pos = state.gun.el.object3D.position;
  if (pos.y < 0.65) {
    pos.y = 0.65;
  }
}

function setGunVisible(visible) {
  if (!state.gun.el) {
    return;
  }

  state.gun.el.setAttribute("visible", visible ? "true" : "false");
  state.gun.el.object3D.visible = visible;
  state.gun.el.object3D.scale.set(1, 1, 1);
  state.gun.el.querySelectorAll("*").forEach((child) => {
    child.setAttribute("visible", visible ? "true" : "false");
    child.object3D.visible = visible;
    child.object3D.scale.set(1, 1, 1);
  });
}

function shootHeldGun(hand) {
  if (state.dead || !state.gun.el || state.gun.heldBy !== hand) {
    return;
  }

  spawnBullet();
}

function fireDesktopBullet() {
  if (state.dead || !state.gun.heldBy) {
    return;
  }

  spawnBullet();
}

function spawnBullet() {
  const source = state.gun.muzzle || state.gun.el;
  const origin = new THREE.Vector3();
  const direction = new THREE.Vector3(0, 0, -1);
  const quaternion = new THREE.Quaternion();

  source.object3D.getWorldPosition(origin);
  source.object3D.getWorldQuaternion(quaternion);
  direction.applyQuaternion(quaternion).normalize();

  const bullet = makeEntity("a-sphere", {
    position: vecToAttr(origin),
    radius: "0.055",
    color: COLORS.yellow,
    material: neonMaterial(COLORS.yellow),
  }, refs.effects);

  state.bullets.push({
    el: bullet,
    position: origin,
    velocity: direction.multiplyScalar(13),
    age: 0,
  });
}

function updateBullets(dt) {
  state.bullets = state.bullets.filter((bullet) => {
    if (!bullet.el.isConnected) {
      return false;
    }

    bullet.age += dt;
    bullet.position.addScaledVector(bullet.velocity, dt);
    bullet.el.object3D.position.copy(bullet.position);

    const hitEnemy = state.enemies.find((enemy) => {
      if (!enemy.el.isConnected || enemy.health <= 0) {
        return false;
      }

      const enemyPosition = enemy.el.object3D.position.clone();
      enemyPosition.y = 0.9;
      return enemyPosition.distanceTo(bullet.position) < 0.9;
    });

    if (hitEnemy) {
      damageEnemy(hitEnemy.id, bullet.position);
      safeRemove(bullet.el);
      return false;
    }

    const hitTarget = findBulletTarget(bullet.position);
    if (hitTarget) {
      handleTarget(hitTarget.data, bullet.position);
      spawnHitEffect(bullet.position, COLORS.yellow);
      safeRemove(bullet.el);
      return false;
    }

    if (bullet.age > 2) {
      safeRemove(bullet.el);
      return false;
    }

    return true;
  });
}

function clearBullets() {
  state.bullets.forEach((bullet) => safeRemove(bullet.el));
  state.bullets = [];
}

function findBulletTarget(position) {
  return state.targets.find((target) => {
    if (!target.el.isConnected || target.data.type === "enemy") {
      return false;
    }

    const bounds = new THREE.Box3().setFromObject(target.el.object3D);
    bounds.expandByScalar(target.data.type === "choice" ? 0.22 : 0.35);
    return bounds.containsPoint(position);
  });
}

// Interaction ray for desktop cursor clicks. Combat damage now comes from
// visible bullets fired by a held gun.
function fireInteractionRay(sourceEl, event) {
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
    return;
  } else if (target.type === "portal") {
    if (target.portalId === "robot") {
      enterRobotFactory();
    } else {
      setMessage("Locked base", "Landmark is visible for the full city prototype. Only Robot Factory is playable now.");
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
  setMessage("Back in the city", `City State: ${state.cityState}. All 30 base landmarks are visible; Robot Factory remains playable.`);
}

function updateHud() {
  const enemyLabel = state.mode === "base"
    ? `Enemies: ${state.enemies.length}`
    : `City: ${BASE_LOCATIONS.length} bases, ${state.npcs.length} NPCs, ${state.cars.length} cars`;
  const objective = state.mode === "base"
    ? state.baseCleared
      ? "Objective: Choose reward, return to city"
      : "Objective: Clear the Robot Factory"
    : "Objective: Explore the city and choose a mob base";

  refs.hudHealth.textContent = heartsLabel();
  refs.hudObjective.textContent = objective;
  refs.hudEnemies.textContent = enemyLabel;
  refs.hudCityState.textContent = `City State: ${state.cityState}`;

  if (refs.vrHudText) {
    refs.vrHudText.setAttribute(
      "value",
      `NEON MOB CITY\n${heartsLabel()}\n${enemyLabel}\n${state.dead ? "YOU DIED" : state.cityState}`
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

function heartsLabel() {
  const full = "♥ ".repeat(state.playerHealth).trim();
  const empty = "♡ ".repeat(Math.max(0, state.maxHealth - state.playerHealth)).trim();
  return `Health: ${[full, empty].filter(Boolean).join(" ")}`;
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

  makeTexture("road-pixel", 64, 64, (ctx) => {
    ctx.fillStyle = "#070913";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#111827";
    for (let i = 0; i < 64; i += 8) {
      ctx.fillRect(i, 0, 2, 64);
      ctx.fillRect(0, i, 64, 1);
    }
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.fillRect(8, 12, 10, 2);
    ctx.fillRect(34, 42, 14, 2);
  });

  makeTexture("sidewalk-tile", 64, 64, (ctx) => {
    ctx.fillStyle = "#161128";
    ctx.fillRect(0, 0, 64, 64);
    ctx.strokeStyle = "#2B2140";
    ctx.lineWidth = 2;
    for (let i = 0; i <= 64; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 64);
      ctx.moveTo(0, i);
      ctx.lineTo(64, i);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(0,245,255,0.18)";
    ctx.fillRect(30, 0, 2, 64);
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

  makeNpcTexture("npc-civilian", "#1B2030", COLORS.cyan, "#F3B591");
  makeNpcTexture("npc-mob-worker", "#111111", COLORS.pink, "#D9B59B");
  makeNpcTexture("npc-vendor", "#342018", COLORS.yellow, "#E6B37A");
  makeNpcTexture("npc-robot-ped", "#2F3B4C", COLORS.cyan, "#B8F8FF");
  makeNpcTexture("npc-mutant", "#1F3424", COLORS.green, "#83FF94");
}

function makeNpcTexture(id, body, accent, skin) {
  makeTexture(id, 48, 72, (ctx) => {
    ctx.clearRect(0, 0, 48, 72);
    ctx.fillStyle = body;
    ctx.fillRect(16, 24, 16, 28);
    ctx.fillStyle = skin;
    ctx.fillRect(17, 8, 14, 15);
    ctx.fillStyle = accent;
    ctx.fillRect(13, 19, 22, 4);
    ctx.fillRect(18, 34, 12, 4);
    ctx.fillStyle = "#05050B";
    ctx.fillRect(13, 52, 8, 16);
    ctx.fillRect(27, 52, 8, 16);
    ctx.fillRect(14, 4, 20, 5);
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

function makeCylinder(options) {
  const attrs = {
    position: options.position || "0 0 0",
    rotation: options.rotation || "0 0 0",
    radius: options.radius || 0.5,
    height: options.height || 1,
    color: options.color || COLORS.white,
    "segments-radial": options.segmentsRadial || 8,
  };

  if (options.material) attrs.material = options.material;
  return makeEntity("a-cylinder", attrs, options.parent || refs.world);
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

function addSolidBox(x, z, width, depth, label) {
  state.solidBoxes.push({
    x,
    z,
    halfX: width / 2,
    halfZ: depth / 2,
    label,
  });
}

function addSolidCircle(x, z, radius, label) {
  state.solidCircles.push({ x, z, radius, label });
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

function distance2D(ax, az, bx, bz) {
  const dx = ax - bx;
  const dz = az - bz;
  return Math.sqrt(dx * dx + dz * dz);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function quatToRotationAttr(quaternion) {
  const euler = new THREE.Euler().setFromQuaternion(quaternion, "YXZ");
  return [
    THREE.MathUtils.radToDeg(euler.x).toFixed(2),
    THREE.MathUtils.radToDeg(euler.y).toFixed(2),
    THREE.MathUtils.radToDeg(euler.z).toFixed(2),
  ].join(" ");
}
