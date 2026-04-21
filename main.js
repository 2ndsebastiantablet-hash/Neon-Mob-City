const CHARACTER_DEFS = [
  {
    id: "director",
    name: "Director",
    preview: "DR",
    copy: "Round cap, smart jacket, and a clipboard-ready pose.",
    bodyColor: "#5d76db",
    pantsColor: "#2d3f7e",
    skinColor: "#f3c7a5",
    accentColor: "#2b315f",
    variant: "cap",
  },
  {
    id: "popstar",
    name: "Pop Star",
    preview: "PS",
    copy: "Bright outfit and a confident stage stance.",
    bodyColor: "#f06aa6",
    pantsColor: "#7d2d60",
    skinColor: "#f5cdb0",
    accentColor: "#531438",
    variant: "sparkle",
  },
  {
    id: "astronaut",
    name: "Astronaut",
    preview: "AS",
    copy: "Bubble helmet and crisp mission suit.",
    bodyColor: "#dfe8f4",
    pantsColor: "#9caec7",
    skinColor: "#f0c8ab",
    accentColor: "#5e7899",
    variant: "helmet",
  },
  {
    id: "glitch",
    name: "Glitch Kid",
    preview: "GK",
    copy: "Neon tones with a crooked digital grin.",
    bodyColor: "#59d7b6",
    pantsColor: "#177b6d",
    skinColor: "#ecc29f",
    accentColor: "#1f4a45",
    variant: "visor",
  },
  {
    id: "hero",
    name: "Hero",
    preview: "HR",
    copy: "Strong colors, cape flair, and a classic pose.",
    bodyColor: "#f0b14b",
    pantsColor: "#5f3d16",
    skinColor: "#f1c9a9",
    accentColor: "#cc4937",
    variant: "cape",
  },
  {
    id: "punk",
    name: "Punk",
    preview: "PK",
    copy: "Tall hair, chunky boots, and a bold silhouette.",
    bodyColor: "#ff8e5f",
    pantsColor: "#703822",
    skinColor: "#f0c1a2",
    accentColor: "#231512",
    variant: "mohawk",
  },
  {
    id: "royal",
    name: "Royal",
    preview: "RY",
    copy: "Soft capelet, bright sash, and a tiny crown.",
    bodyColor: "#8c6de6",
    pantsColor: "#4c358d",
    skinColor: "#f5cfb1",
    accentColor: "#f1c55a",
    variant: "crown",
  },
  {
    id: "ghost",
    name: "Ghost",
    preview: "GH",
    copy: "Floating fabric body with a friendly expression.",
    bodyColor: "#ecf4ff",
    pantsColor: "#bfd4ea",
    skinColor: "#eff5ff",
    accentColor: "#8aa9ca",
    variant: "ghost",
  },
];

const OBJECT_DEFS = [
  { id: "cube", name: "Cube", preview: "[]", copy: "Chunky stage block.", baseColor: "#f4a261" },
  { id: "triangle", name: "Triangle", preview: "/\\", copy: "Sharp prop for signs or peaks.", baseColor: "#e76f51" },
  { id: "circle", name: "Circle", preview: "()", copy: "Soft spotlight orb.", baseColor: "#2a9d8f" },
  { id: "star", name: "Star", preview: "*", copy: "Five-pointed marquee burst.", baseColor: "#e9c46a" },
  { id: "diamond", name: "Diamond", preview: "<>", copy: "Gem-like accent prop.", baseColor: "#7f95d1" },
  { id: "hexagon", name: "Hexagon", preview: "HX", copy: "Honeycomb tile shape.", baseColor: "#9c6644" },
  { id: "capsule", name: "Capsule", preview: "CP", copy: "Rounded prop with motion energy.", baseColor: "#f28482" },
  { id: "heart", name: "Heart", preview: "HT", copy: "Storybook romance icon.", baseColor: "#ff6b8a" },
];

const TEXTURE_DEFS = [
  {
    id: "sunset-stripe",
    name: "Sunset Stripe",
    copy: "Warm stripes with an orange glow.",
    preview: "repeating-linear-gradient(135deg, #ffb07c 0 14px, #ff8552 14px 28px, #ffd1ba 28px 42px)",
  },
  {
    id: "mint-grid",
    name: "Mint Grid",
    copy: "Clean lines for set walls and outfits.",
    preview:
      "linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(135deg, #d4fff2, #8de1d5)",
  },
  {
    id: "berry-dot",
    name: "Berry Dot",
    copy: "Playful dots with a candy-pop feel.",
    preview:
      "radial-gradient(circle at 20% 20%, #ff7fb3 0 16%, transparent 18%), radial-gradient(circle at 72% 66%, #ffd0e2 0 14%, transparent 16%), linear-gradient(135deg, #fff3f8, #ffc9df)",
  },
  {
    id: "midnight-wave",
    name: "Midnight Wave",
    copy: "Deep blue arcs for moody scenes.",
    preview:
      "repeating-radial-gradient(circle at 0 100%, #1b2b57 0 14px, #35508b 14px 28px, #7ca0ff 28px 42px)",
  },
  {
    id: "brick-pop",
    name: "Brick Pop",
    copy: "Theater-wall brick rows with bright mortar.",
    preview:
      "linear-gradient(90deg, rgba(255,255,255,0.65) 8%, transparent 8%), linear-gradient(#e07b5f 48%, #c95d43 48%), linear-gradient(135deg, #f8ceb4, #e08464)",
  },
  {
    id: "checker-pop",
    name: "Checker Pop",
    copy: "Graphic checkerboard for punchy props.",
    preview:
      "conic-gradient(from 45deg, #fff4dc 0 25%, #f7b267 25% 50%, #fff4dc 50% 75%, #f4845f 75% 100%)",
  },
  {
    id: "sprinkles",
    name: "Sprinkles",
    copy: "Scattered confetti lines and specks.",
    preview:
      "linear-gradient(135deg, #fff8ef, #ffe6d0), repeating-linear-gradient(45deg, transparent 0 14px, rgba(240, 111, 77, 0.9) 14px 18px, transparent 18px 28px)",
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    copy: "Hex-style pattern with syrupy gold.",
    preview:
      "linear-gradient(30deg, rgba(0,0,0,0.12) 12%, transparent 12.5%, transparent 87%, rgba(0,0,0,0.12) 87.5%, rgba(0,0,0,0.12)), linear-gradient(150deg, rgba(0,0,0,0.12) 12%, transparent 12.5%, transparent 87%, rgba(0,0,0,0.12) 87.5%, rgba(0,0,0,0.12)), linear-gradient(90deg, rgba(255, 212, 103, 0.85), rgba(255, 173, 51, 0.85))",
  },
  {
    id: "confetti",
    name: "Confetti",
    copy: "Festival flecks in every direction.",
    preview:
      "radial-gradient(circle at 18% 20%, #ef476f 0 10%, transparent 11%), radial-gradient(circle at 72% 30%, #118ab2 0 9%, transparent 10%), radial-gradient(circle at 55% 72%, #ffd166 0 11%, transparent 12%), linear-gradient(135deg, #fff8ef, #ffe9c9)",
  },
  {
    id: "film-noir",
    name: "Film Noir",
    copy: "Monochrome bars for dramatic takes.",
    preview:
      "repeating-linear-gradient(135deg, #202020 0 12px, #454545 12px 24px, #f2efe9 24px 36px)",
  },
];

const PROJECT_STORAGE_KEY = "worms-project-v2";
const STAGE_GRID_SIZE = 48;
const SOUND_EFFECT_OPTIONS = [
  { value: "pop", label: "Pop" },
  { value: "click", label: "Click" },
  { value: "spark", label: "Spark" },
  { value: "thump", label: "Thump" },
];
const MUSIC_OPTIONS = [
  { value: "marquee", label: "Marquee Loop" },
  { value: "dream", label: "Dream Pad" },
];
const SCRIPT_GROUPS = [
  { id: "motion", name: "Motion" },
  { id: "animation", name: "Animation" },
  { id: "timing", name: "Timing" },
  { id: "sound", name: "Sound" },
  { id: "control", name: "Control" },
];
const SCRIPT_BLOCK_DEFS = [
  {
    type: "move_right_seconds",
    category: "motion",
    title: "Move Right",
    copy: "Move this actor right for a number of seconds.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 20, step: 0.1 }],
  },
  {
    type: "move_left_blocks",
    category: "motion",
    title: "Move Left",
    copy: "Slide this actor left by stage blocks.",
    params: [{ name: "blocks", label: "Blocks", input: "number", min: 1, max: 20, step: 1 }],
  },
  {
    type: "move_up_blocks",
    category: "motion",
    title: "Move Up",
    copy: "Move this actor upward by stage blocks.",
    params: [{ name: "blocks", label: "Blocks", input: "number", min: 1, max: 20, step: 1 }],
  },
  {
    type: "move_down_blocks",
    category: "motion",
    title: "Move Down",
    copy: "Move this actor downward by stage blocks.",
    params: [{ name: "blocks", label: "Blocks", input: "number", min: 1, max: 20, step: 1 }],
  },
  {
    type: "teleport_xy",
    category: "motion",
    title: "Teleport To X / Y",
    copy: "Snap this actor to exact stage coordinates.",
    params: [
      { name: "x", label: "X", input: "number", min: 0, max: 2000, step: 1 },
      { name: "y", label: "Y", input: "number", min: 0, max: 2000, step: 1 },
    ],
  },
  {
    type: "face_left",
    category: "motion",
    title: "Turn Facing Left",
    copy: "Face the actor left.",
    params: [],
  },
  {
    type: "face_right",
    category: "motion",
    title: "Turn Facing Right",
    copy: "Face the actor right.",
    params: [],
  },
  {
    type: "jump_blocks",
    category: "motion",
    title: "Jump",
    copy: "Hop upward by a number of blocks.",
    params: [{ name: "blocks", label: "Blocks", input: "number", min: 1, max: 12, step: 1 }],
  },
  {
    type: "play_wiggle",
    category: "animation",
    title: "Play Wiggle",
    copy: "Wiggle for a number of seconds.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 20, step: 0.1 }],
  },
  {
    type: "play_bounce",
    category: "animation",
    title: "Play Bounce",
    copy: "Bounce in place for a number of seconds.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 20, step: 0.1 }],
  },
  {
    type: "play_stretch",
    category: "animation",
    title: "Play Stretch",
    copy: "Stretch and squash for a number of seconds.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 20, step: 0.1 }],
  },
  {
    type: "stop_animation",
    category: "animation",
    title: "Stop Animation",
    copy: "Stop the current looping animation.",
    params: [],
  },
  {
    type: "change_size",
    category: "animation",
    title: "Change Size",
    copy: "Set the actor size as a percentage.",
    params: [{ name: "percent", label: "Size %", input: "number", min: 20, max: 300, step: 5 }],
  },
  {
    type: "flip_360",
    category: "animation",
    title: "Flip 360",
    copy: "Spin this actor in a full circle.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.2, max: 10, step: 0.1 }],
  },
  {
    type: "change_texture",
    category: "animation",
    title: "Change Texture",
    copy: "Swap to a chosen texture.",
    params: [{
      name: "textureId",
      label: "Texture",
      input: "select",
      options: TEXTURE_DEFS.map((texture) => ({ value: texture.id, label: texture.name })),
    }],
  },
  {
    type: "wait",
    category: "timing",
    title: "Wait",
    copy: "Pause for a number of seconds.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 30, step: 0.1 }],
  },
  {
    type: "repeat",
    category: "timing",
    title: "Repeat",
    copy: "Run the blocks inside a number of times.",
    params: [{ name: "times", label: "Times", input: "number", min: 1, max: 20, step: 1 }],
    allowsChildren: true,
  },
  {
    type: "forever_recording",
    category: "timing",
    title: "Forever During Recording",
    copy: "Loop the blocks inside while recording is active.",
    params: [],
    allowsChildren: true,
  },
  {
    type: "parallel",
    category: "timing",
    title: "Run Together",
    copy: "Run all child blocks at the same time.",
    params: [],
    allowsChildren: true,
  },
  {
    type: "sequence",
    category: "timing",
    title: "Group In Order",
    copy: "Run all child blocks in order.",
    params: [],
    allowsChildren: true,
  },
  {
    type: "play_sound",
    category: "sound",
    title: "Play Sound Effect",
    copy: "Play a placeholder sound effect.",
    params: [{ name: "soundId", label: "Sound", input: "select", options: SOUND_EFFECT_OPTIONS }],
  },
  {
    type: "play_music",
    category: "sound",
    title: "Play Music",
    copy: "Play a looping placeholder music bed.",
    params: [{ name: "musicId", label: "Music", input: "select", options: MUSIC_OPTIONS }],
  },
  {
    type: "stop_sound",
    category: "sound",
    title: "Stop Sound",
    copy: "Stop all currently playing placeholder sound.",
    params: [],
  },
  {
    type: "set_volume",
    category: "sound",
    title: "Set Volume",
    copy: "Set global script volume.",
    params: [{ name: "volume", label: "Volume %", input: "number", min: 0, max: 100, step: 5 }],
  },
  {
    type: "when_recording_start",
    category: "control",
    title: "When Recording Starts",
    copy: "Run these blocks as soon as recording begins.",
    params: [],
    allowsChildren: true,
    trigger: true,
  },
  {
    type: "when_clicked",
    category: "control",
    title: "When This Actor Is Clicked",
    copy: "Run these blocks when this actor is clicked.",
    params: [],
    allowsChildren: true,
    trigger: true,
  },
  {
    type: "when_key_pressed",
    category: "control",
    title: "When Keyboard Key Is Pressed",
    copy: "Run these blocks when the chosen key is pressed.",
    params: [{ name: "key", label: "Key", input: "select", options: [
      { value: "space", label: "Space" },
      { value: "enter", label: "Enter" },
      { value: "w", label: "W" },
      { value: "a", label: "A" },
      { value: "s", label: "S" },
      { value: "d", label: "D" },
      { value: "arrowup", label: "Arrow Up" },
      { value: "arrowdown", label: "Arrow Down" },
      { value: "arrowleft", label: "Arrow Left" },
      { value: "arrowright", label: "Arrow Right" },
    ] }],
    allowsChildren: true,
    trigger: true,
  },
  {
    type: "stop_this_script",
    category: "control",
    title: "Stop This Script",
    copy: "Stop the currently running script stack.",
    params: [],
  },
  {
    type: "stop_all_scripts",
    category: "control",
    title: "Stop All Scripts",
    copy: "Stop every running script immediately.",
    params: [],
  },
];
const scriptBlockMap = new Map(SCRIPT_BLOCK_DEFS.map((block) => [block.type, block]));

const stageCanvas = document.querySelector("#stageCanvas");
const stageFrame = stageCanvas.parentElement;
const stageCtx = stageCanvas.getContext("2d");
const recordingCanvas = document.createElement("canvas");
const recordingCtx = recordingCanvas.getContext("2d");
let ctx = stageCtx;
let patternCache = new Map();
const patternCaches = {
  stage: new Map(),
  recording: new Map(),
};

const elements = {
  menuScreen: document.querySelector("#menuScreen"),
  studioScreen: document.querySelector("#studioScreen"),
  libraryScreen: document.querySelector("#libraryScreen"),
  playButton: document.querySelector("#playButton"),
  libraryButton: document.querySelector("#libraryButton"),
  menuButton: document.querySelector("#menuButton"),
  studioLibraryButton: document.querySelector("#studioLibraryButton"),
  libraryToStudioButton: document.querySelector("#libraryToStudioButton"),
  libraryMenuButton: document.querySelector("#libraryMenuButton"),
  clearStageButton: document.querySelector("#clearStageButton"),
  recordingBadge: document.querySelector("#recordingBadge"),
  selectionLabel: document.querySelector("#selectionLabel"),
  toolLabel: document.querySelector("#toolLabel"),
  recordButton: document.querySelector("#recordButton"),
  stopButton: document.querySelector("#stopButton"),
  openLibraryButton: document.querySelector("#openLibraryButton"),
  characterList: document.querySelector("#characterList"),
  textureList: document.querySelector("#textureList"),
  objectList: document.querySelector("#objectList"),
  scriptsModule: document.querySelector("#scriptsModule"),
  scriptsModuleCloseButton: document.querySelector("#scriptsModuleCloseButton"),
  scriptActorLabel: document.querySelector("#scriptActorLabel"),
  scriptCategoryTabs: document.querySelector("#scriptCategoryTabs"),
  scriptPalette: document.querySelector("#scriptPalette"),
  scriptWorkspace: document.querySelector("#scriptWorkspace"),
  libraryList: document.querySelector("#libraryList"),
  libraryVideo: document.querySelector("#libraryVideo"),
  libraryMeta: document.querySelector("#libraryMeta"),
  emptyLibraryState: document.querySelector("#emptyLibraryState"),
  panelButtons: [...document.querySelectorAll(".sidebar-tab")],
  panels: {
    characters: document.querySelector("#charactersPanel"),
    textures: document.querySelector("#texturesPanel"),
    objects: document.querySelector("#objectsPanel"),
    camera: document.querySelector("#cameraPanel"),
  },
};

const textureMap = new Map(TEXTURE_DEFS.map((texture) => [texture.id, texture]));
const characterMap = new Map(CHARACTER_DEFS.map((character) => [character.id, character]));
const objectMap = new Map(OBJECT_DEFS.map((objectDef) => [objectDef.id, objectDef]));

const state = {
  screen: "menu",
  stageWidth: 900,
  stageHeight: 580,
  activePanel: "characters",
  activeTool: null,
  activeScriptCategory: "motion",
  selectedScriptBlockId: null,
  scriptsModuleOpen: false,
  lastNonScriptPanel: "characters",
  scriptDrag: null,
  scriptDropTarget: null,
  items: [],
  selection: new Set(),
  clipboard: [],
  interaction: null,
  dragPaintedIds: new Set(),
  lastPointer: { x: 0, y: 0, inside: false },
  nextId: 1,
  keysPressed: new Set(),
  recording: null,
  recordings: [],
  selectedRecordingId: null,
  libraryObjectUrl: null,
  lastFrameTime: 0,
  lastProjectSaveTime: 0,
  projectDirty: false,
  scriptRunners: [],
  stopAllScriptsRequested: false,
  globalVolume: 0.65,
  audio: {
    ctx: null,
    master: null,
    activeNodes: [],
    stopLooping: false,
  },
};

function createRecordingStore() {
  const dbName = "worms-studio";
  const storeName = "recordings";
  let dbPromise = null;
  const memoryFallback = [];

  function openDb() {
    if (!("indexedDB" in window)) {
      return Promise.resolve(null);
    }

    if (!dbPromise) {
      dbPromise = new Promise((resolve) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: "id" });
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(null);
      });
    }

    return dbPromise;
  }

  async function list() {
    const db = await openDb();
    if (!db) {
      return [...memoryFallback].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    return new Promise((resolve) => {
      const transaction = db.transaction(storeName, "readonly");
      const request = transaction.objectStore(storeName).getAll();
      request.onsuccess = () => {
        const items = request.result || [];
        items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        resolve(items);
      };
      request.onerror = () => resolve([]);
    });
  }

  async function save(recording) {
    const db = await openDb();
    if (!db) {
      const existingIndex = memoryFallback.findIndex((item) => item.id === recording.id);
      if (existingIndex >= 0) {
        memoryFallback.splice(existingIndex, 1, recording);
      } else {
        memoryFallback.push(recording);
      }
      return;
    }

    await new Promise((resolve) => {
      const transaction = db.transaction(storeName, "readwrite");
      transaction.objectStore(storeName).put(recording);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => resolve();
      transaction.onabort = () => resolve();
    });
  }

  async function remove(id) {
    const db = await openDb();
    if (!db) {
      const index = memoryFallback.findIndex((item) => item.id === id);
      if (index >= 0) {
        memoryFallback.splice(index, 1);
      }
      return;
    }

    await new Promise((resolve) => {
      const transaction = db.transaction(storeName, "readwrite");
      transaction.objectStore(storeName).delete(id);
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => resolve();
      transaction.onabort = () => resolve();
    });
  }

  return { list, save, remove };
}

const recordingStore = createRecordingStore();

function createBlockId() {
  return `block-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createItemRuntime() {
  return {
    animation: null,
    flip: null,
    jump: null,
    visual: {
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
  };
}

function normalizeItem(item) {
  return {
    ...item,
    facing: item.facing === -1 ? -1 : 1,
    sizePct: typeof item.sizePct === "number" ? item.sizePct : 100,
    scripts: Array.isArray(item.scripts) ? item.scripts.map(deserializeBlock) : [],
    runtime: createItemRuntime(),
  };
}

function serializeBlock(block) {
  return {
    id: block.id,
    type: block.type,
    params: { ...(block.params || {}) },
    children: Array.isArray(block.children) ? block.children.map(serializeBlock) : [],
  };
}

function deserializeBlock(block) {
  return {
    id: block.id || createBlockId(),
    type: block.type,
    params: { ...(block.params || {}) },
    children: Array.isArray(block.children) ? block.children.map(deserializeBlock) : [],
  };
}

function serializeItem(item) {
  return {
    id: item.id,
    kind: item.kind,
    subtype: item.subtype,
    x: item.x,
    y: item.y,
    w: item.w,
    h: item.h,
    textureId: item.textureId,
    facing: item.facing,
    sizePct: item.sizePct,
    scripts: item.scripts.map(serializeBlock),
  };
}

function markProjectDirty() {
  state.projectDirty = true;
}

function saveProjectState() {
  try {
    const payload = {
      items: state.items.map(serializeItem),
      nextId: state.nextId,
      globalVolume: state.globalVolume,
    };
    window.localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(payload));
    state.projectDirty = false;
    state.lastProjectSaveTime = performance.now();
  } catch {
    state.projectDirty = false;
  }
}

function loadProjectState() {
  try {
    const raw = window.localStorage.getItem(PROJECT_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const payload = JSON.parse(raw);
    if (Array.isArray(payload.items)) {
      state.items = payload.items.map(normalizeItem);
    }
    if (typeof payload.nextId === "number") {
      state.nextId = payload.nextId;
    } else if (state.items.length > 0) {
      state.nextId = Math.max(...state.items.map((item) => item.id)) + 1;
    }
    if (typeof payload.globalVolume === "number") {
      state.globalVolume = clamp(payload.globalVolume, 0, 1);
    }
  } catch {
    state.items = [];
  }
}

function createBlockFromType(type) {
  const definition = scriptBlockMap.get(type);
  if (!definition) {
    return null;
  }

  const params = {};
  for (const param of definition.params) {
    if (param.input === "select") {
      params[param.name] = param.options[0]?.value ?? "";
      continue;
    }
    if (typeof param.min === "number") {
      params[param.name] = param.min;
      continue;
    }
    params[param.name] = 0;
  }

  if (["move_right_seconds", "play_wiggle", "play_bounce", "play_stretch", "wait", "flip_360"].includes(type)) {
    params.seconds = params.seconds ?? 1;
  }
  if (type === "change_size") {
    params.percent = 100;
  }
  if (type === "set_volume") {
    params.volume = 70;
  }
  if (type === "move_left_blocks" || type === "move_up_blocks" || type === "move_down_blocks" || type === "jump_blocks") {
    params.blocks = 2;
  }
  if (type === "teleport_xy") {
    params.x = Math.round(state.stageWidth * 0.5);
    params.y = Math.round(state.stageHeight * 0.5);
  }
  if (type === "repeat") {
    params.times = 2;
  }

  return {
    id: createBlockId(),
    type,
    params,
    children: definition.allowsChildren ? [] : [],
  };
}

function getItemSize(item) {
  const scale = clamp((item.sizePct || 100) / 100, 0.2, 3);
  return {
    w: item.w * scale,
    h: item.h * scale,
  };
}

function getSingleSelectedItem() {
  const selected = getSelectedItems();
  return selected.length === 1 ? selected[0] : null;
}

function getItemById(itemId) {
  return state.items.find((item) => item.id === itemId) || null;
}

function normalizeScriptKey(key) {
  if (key === " ") {
    return "space";
  }
  return key.toLowerCase();
}

function findScriptBlockLocation(siblings, blockId, parent = null) {
  for (let index = 0; index < siblings.length; index += 1) {
    const block = siblings[index];
    if (block.id === blockId) {
      return { block, parent, siblings, index };
    }
    if (block.children?.length) {
      const nested = findScriptBlockLocation(block.children, blockId, block);
      if (nested) {
        return nested;
      }
    }
  }
  return null;
}

function addBlockToSelectedActor(type) {
  const actor = getSingleSelectedItem();
  const newBlock = createBlockFromType(type);
  if (!actor || !newBlock) {
    return;
  }

  const definition = scriptBlockMap.get(type);
  const isTrigger = Boolean(definition.trigger);
  const selectedLocation = actor.scripts.length > 0 && state.selectedScriptBlockId
    ? findScriptBlockLocation(actor.scripts, state.selectedScriptBlockId)
    : null;

  if (isTrigger) {
    actor.scripts.push(newBlock);
  } else if (selectedLocation) {
    const selectedDefinition = scriptBlockMap.get(selectedLocation.block.type);
    if (selectedDefinition?.allowsChildren) {
      selectedLocation.block.children.push(newBlock);
    } else {
      selectedLocation.siblings.splice(selectedLocation.index + 1, 0, newBlock);
    }
  } else if (actor.scripts.length > 0) {
    actor.scripts[actor.scripts.length - 1].children.push(newBlock);
  } else {
    const root = createBlockFromType("when_recording_start");
    root.children.push(newBlock);
    actor.scripts.push(root);
  }

  state.selectedScriptBlockId = newBlock.id;
  markProjectDirty();
  renderScriptEditor();
}

function moveSelectedScriptBlock(direction) {
  const actor = getSingleSelectedItem();
  if (!actor || !state.selectedScriptBlockId) {
    return;
  }

  const location = findScriptBlockLocation(actor.scripts, state.selectedScriptBlockId);
  if (!location) {
    return;
  }

  const targetIndex = location.index + direction;
  if (targetIndex < 0 || targetIndex >= location.siblings.length) {
    return;
  }

  const [block] = location.siblings.splice(location.index, 1);
  location.siblings.splice(targetIndex, 0, block);
  markProjectDirty();
  renderScriptEditor();
}

function deleteSelectedScriptBlock() {
  const actor = getSingleSelectedItem();
  if (!actor || !state.selectedScriptBlockId) {
    return false;
  }

  const location = findScriptBlockLocation(actor.scripts, state.selectedScriptBlockId);
  if (!location) {
    return false;
  }

  location.siblings.splice(location.index, 1);
  state.selectedScriptBlockId = null;
  markProjectDirty();
  renderScriptEditor();
  return true;
}

function updateBlockParam(blockId, paramName, rawValue) {
  const actor = getSingleSelectedItem();
  if (!actor) {
    return;
  }

  const location = findScriptBlockLocation(actor.scripts, blockId);
  if (!location) {
    return;
  }

  const definition = scriptBlockMap.get(location.block.type);
  const paramDef = definition.params.find((param) => param.name === paramName);
  if (!paramDef) {
    return;
  }

  let value = rawValue;
  if (paramDef.input === "number") {
    value = Number.parseFloat(rawValue);
    if (!Number.isFinite(value)) {
      value = paramDef.min ?? 0;
    }
    if (typeof paramDef.min === "number") {
      value = Math.max(paramDef.min, value);
    }
    if (typeof paramDef.max === "number") {
      value = Math.min(paramDef.max, value);
    }
  }

  location.block.params[paramName] = value;
  markProjectDirty();
}

function renderScriptCategoryTabs() {
  elements.scriptCategoryTabs.innerHTML = "";
  for (const category of SCRIPT_GROUPS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-category-button";
    button.classList.toggle("active", category.id === state.activeScriptCategory);
    button.textContent = category.name;
    button.addEventListener("click", () => {
      state.activeScriptCategory = category.id;
      renderScriptCategoryTabs();
      renderScriptPalette();
    });
    elements.scriptCategoryTabs.append(button);
  }
}

function createScriptDragPayloadFromEvent(event) {
  const raw = event.dataTransfer?.getData("application/json");
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setScriptDragState(payload) {
  state.scriptDrag = payload;
  state.scriptDropTarget = null;
}

function clearScriptDragState() {
  state.scriptDrag = null;
  state.scriptDropTarget = null;
  renderScriptEditor();
}

function insertRootScriptBlock(actor, index, block) {
  const definition = scriptBlockMap.get(block.type);
  if (definition?.trigger) {
    actor.scripts.splice(index, 0, block);
    return;
  }

  const wrapper = createBlockFromType("when_recording_start");
  wrapper.children.push(block);
  actor.scripts.splice(index, 0, wrapper);
}

function isBlockDescendant(block, targetId) {
  if (block.id === targetId) {
    return true;
  }
  return block.children?.some((child) => isBlockDescendant(child, targetId)) || false;
}

function canDropOnTarget(actor, payload, target) {
  if (!actor || !payload || !target) {
    return false;
  }

  if (payload.source === "existing") {
    const location = findScriptBlockLocation(actor.scripts, payload.blockId);
    if (!location) {
      return false;
    }
    if (target.blockId && isBlockDescendant(location.block, target.blockId)) {
      return false;
    }
  }

  if (target.kind === "inside") {
    const location = findScriptBlockLocation(actor.scripts, target.blockId);
    if (!location) {
      return false;
    }
    return Boolean(scriptBlockMap.get(location.block.type)?.allowsChildren);
  }

  return true;
}

function getDraggedBlock(actor, payload) {
  if (!payload || !actor) {
    return null;
  }

  if (payload.source === "palette") {
    return createBlockFromType(payload.blockType);
  }

  const location = findScriptBlockLocation(actor.scripts, payload.blockId);
  if (!location) {
    return null;
  }

  location.siblings.splice(location.index, 1);
  return location.block;
}

function performScriptDrop(target) {
  const actor = getSingleSelectedItem();
  const payload = state.scriptDrag;
  if (!actor || !payload || !canDropOnTarget(actor, payload, target)) {
    clearScriptDragState();
    return;
  }

  const block = getDraggedBlock(actor, payload);
  if (!block) {
    clearScriptDragState();
    return;
  }

  if (target.kind === "root") {
    insertRootScriptBlock(actor, target.index, block);
  } else {
    const location = findScriptBlockLocation(actor.scripts, target.blockId);
    if (!location) {
      clearScriptDragState();
      return;
    }

    if (target.kind === "inside") {
      location.block.children.push(block);
    } else if (location.siblings === actor.scripts) {
      const insertIndex = target.kind === "before" ? location.index : location.index + 1;
      insertRootScriptBlock(actor, insertIndex, block);
    } else {
      const insertIndex = target.kind === "before" ? location.index : location.index + 1;
      location.siblings.splice(insertIndex, 0, block);
    }
  }

  state.selectedScriptBlockId = block.id;
  markProjectDirty();
  clearScriptDragState();
}

function createDropLine(target, label, extraClass = "") {
  const actor = getSingleSelectedItem();
  const line = document.createElement("div");
  line.className = `script-drop-line ${extraClass}`.trim();
  line.textContent = label;
  const isActive =
    state.scriptDropTarget &&
    state.scriptDropTarget.kind === target.kind &&
    state.scriptDropTarget.blockId === target.blockId &&
    state.scriptDropTarget.index === target.index;
  line.classList.toggle("active", Boolean(isActive));

  line.addEventListener("dragover", (event) => {
    const payload = state.scriptDrag || createScriptDragPayloadFromEvent(event);
    if (!canDropOnTarget(actor, payload, target)) {
      return;
    }
    event.preventDefault();
    state.scriptDropTarget = target;
    line.classList.add("active");
  });

  line.addEventListener("dragleave", () => {
    line.classList.remove("active");
  });

  line.addEventListener("drop", (event) => {
    event.preventDefault();
    const payload = state.scriptDrag || createScriptDragPayloadFromEvent(event);
    setScriptDragState(payload);
    performScriptDrop(target);
  });

  return line;
}

function renderScriptPalette() {
  elements.scriptPalette.innerHTML = "";
  const blocks = SCRIPT_BLOCK_DEFS.filter((block) => block.category === state.activeScriptCategory);
  for (const block of blocks) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-palette-button";
    button.draggable = true;
    button.innerHTML = `<strong>${block.title}</strong><br>${block.copy}`;
    button.addEventListener("click", () => addBlockToSelectedActor(block.type));
    button.addEventListener("dragstart", (event) => {
      const payload = { source: "palette", blockType: block.type };
      setScriptDragState(payload);
      event.dataTransfer?.setData("application/json", JSON.stringify(payload));
      event.dataTransfer.effectAllowed = "copy";
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
      clearScriptDragState();
    });
    elements.scriptPalette.append(button);
  }
}

function renderScriptBlock(block, container, actor, isRootLevel = false) {
  const definition = scriptBlockMap.get(block.type);
  container.append(createDropLine({ kind: "before", blockId: block.id }, "Drop block here"));

  const card = document.createElement("article");
  card.className = "script-block";
  card.classList.toggle("selected", block.id === state.selectedScriptBlockId);
  card.draggable = true;
  card.addEventListener("click", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
      return;
    }
    state.selectedScriptBlockId = block.id;
    renderScriptEditor();
  });
  card.addEventListener("dragstart", (event) => {
    const payload = { source: "existing", blockId: block.id };
    setScriptDragState(payload);
    event.dataTransfer?.setData("application/json", JSON.stringify(payload));
    event.dataTransfer.effectAllowed = "move";
    card.classList.add("dragging");
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    clearScriptDragState();
  });

  const row = document.createElement("div");
  row.className = "script-block-row";

  const titleWrap = document.createElement("div");
  const title = document.createElement("h5");
  title.className = "script-block-title";
  title.textContent = definition.title;

  const copy = document.createElement("p");
  copy.className = "script-block-copy";
  copy.textContent = definition.copy;
  titleWrap.append(title, copy);

  const badge = document.createElement("span");
  badge.className = `script-block-category ${definition.category}`;
  badge.textContent = definition.category;
  row.append(titleWrap, badge);
  card.append(row);

  if (definition.params.length > 0) {
    const paramGrid = document.createElement("div");
    paramGrid.className = "script-param-grid";

    for (const param of definition.params) {
      const label = document.createElement("label");
      label.className = "script-param-label";
      label.textContent = param.label;

      let input;
      if (param.input === "select") {
        input = document.createElement("select");
        for (const option of param.options) {
          const optionElement = document.createElement("option");
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          input.append(optionElement);
        }
      } else {
        input = document.createElement("input");
        input.type = "number";
        if (typeof param.min === "number") {
          input.min = String(param.min);
        }
        if (typeof param.max === "number") {
          input.max = String(param.max);
        }
        if (typeof param.step === "number") {
          input.step = String(param.step);
        }
      }

      input.value = String(block.params[param.name] ?? "");
      input.addEventListener("input", () => updateBlockParam(block.id, param.name, input.value));
      label.append(input);
      paramGrid.append(label);
    }
    card.append(paramGrid);
  }

  if (definition.allowsChildren) {
    card.append(createDropLine({ kind: "inside", blockId: block.id }, "Drop inside this block"));
    const children = document.createElement("div");
    children.className = "script-children";
    if (block.children.length === 0) {
      children.append(createDropLine({ kind: "inside", blockId: block.id }, "Drop block inside this block", "root-empty"));
    } else {
      for (const child of block.children) {
        renderScriptBlock(child, children, actor, false);
      }
      children.append(createDropLine({ kind: "inside", blockId: block.id }, "Drop block at end of container"));
    }
    card.append(children);
  }

  container.append(card);
  if (!isRootLevel) {
    container.append(createDropLine({ kind: "after", blockId: block.id }, "Drop block here"));
  }
}

function renderScriptEditor() {
  const actor = getSingleSelectedItem();

  if (!actor) {
    elements.scriptActorLabel.textContent = "Select one character or object on the stage to script it.";
    elements.scriptWorkspace.innerHTML = '<p class="script-empty">Script editing turns on when exactly one character or object is selected.</p>';
    return;
  }

  const actorName = actor.kind === "character" ? characterMap.get(actor.subtype).name : objectMap.get(actor.subtype).name;
  elements.scriptActorLabel.textContent = `${actorName} has ${actor.scripts.length} script stack${actor.scripts.length === 1 ? "" : "s"} saved in this project.`;
  elements.scriptWorkspace.innerHTML = "";

  if (actor.scripts.length === 0) {
    elements.scriptWorkspace.append(
      createDropLine(
        { kind: "root", index: 0 },
        'Drop a block here to start a stack. Action blocks auto-wrap in "When Recording Starts".',
        "root-empty",
      ),
    );
    return;
  }

  actor.scripts.forEach((rootBlock, index) => {
    const group = document.createElement("div");
    group.className = "script-stack-group";
    group.append(createDropLine({ kind: "root", index }, "Drop root block here"));
    renderScriptBlock(rootBlock, group, actor, true);
    if (index === actor.scripts.length - 1) {
      group.append(createDropLine({ kind: "root", index: index + 1 }, "Drop root block here"));
    }
    elements.scriptWorkspace.append(group);
  });
}

function createAudioEngine() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return null;
  }

  if (state.audio.ctx) {
    return state.audio;
  }

  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContextCtor();
  const master = audioContext.createGain();
  master.gain.value = state.globalVolume;
  master.connect(audioContext.destination);
  state.audio.ctx = audioContext;
  state.audio.master = master;
  return state.audio;
}

function stopAllAudioNodes() {
  state.audio.stopLooping = true;
  for (const nodeInfo of state.audio.activeNodes) {
    try {
      nodeInfo.source.stop();
    } catch {
      // noop
    }
  }
  state.audio.activeNodes = [];
}

function playPlaceholderTone(kind, value) {
  const audio = createAudioEngine();
  if (!audio) {
    return;
  }

  state.audio.stopLooping = false;
  audio.ctx.resume?.();
  const oscillator = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  oscillator.connect(gain);
  gain.connect(audio.master);

  const now = audio.ctx.currentTime;
  let frequency = 360;
  let duration = 0.35;
  let loop = false;

  if (kind === "sound") {
    if (value === "click") {
      frequency = 520;
      duration = 0.15;
    } else if (value === "spark") {
      frequency = 780;
      duration = 0.2;
    } else if (value === "thump") {
      frequency = 180;
      duration = 0.3;
    }
  } else {
    frequency = value === "dream" ? 246 : 196;
    duration = 1.8;
    loop = true;
  }

  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.type = kind === "music" ? "sine" : "triangle";
  gain.gain.setValueAtTime(kind === "music" ? 0.08 : 0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.start(now);
  if (loop) {
    oscillator.stop(now + duration);
  } else {
    oscillator.stop(now + duration);
  }

  state.audio.activeNodes.push({ source: oscillator, gain, loop: kind === "music" });
  oscillator.onended = () => {
    state.audio.activeNodes = state.audio.activeNodes.filter((node) => node.source !== oscillator);
    if (kind === "music" && state.recording && !state.audio.stopLooping) {
      playPlaceholderTone("music", value);
    }
  };
}

function setAudioVolume(volumeFraction) {
  state.globalVolume = clamp(volumeFraction, 0, 1);
  const audio = createAudioEngine();
  if (audio?.master) {
    audio.master.gain.value = state.globalVolume;
  }
  markProjectDirty();
}

function clearItemRuntimeVisuals(item) {
  item.runtime.visual.offsetX = 0;
  item.runtime.visual.offsetY = 0;
  item.runtime.visual.rotation = 0;
  item.runtime.visual.scaleX = 1;
  item.runtime.visual.scaleY = 1;
}

function updateItemTransientState(item, deltaSeconds) {
  clearItemRuntimeVisuals(item);

  if (item.runtime.animation) {
    item.runtime.animation.remaining -= deltaSeconds;
    item.runtime.animation.elapsed += deltaSeconds;
    const wave = Math.sin(item.runtime.animation.elapsed * Math.PI * 4);

    if (item.runtime.animation.type === "wiggle") {
      item.runtime.visual.rotation += wave * 0.14;
    } else if (item.runtime.animation.type === "bounce") {
      item.runtime.visual.offsetY -= Math.abs(wave) * 16;
    } else if (item.runtime.animation.type === "stretch") {
      item.runtime.visual.scaleX *= 1 + Math.abs(wave) * 0.16;
      item.runtime.visual.scaleY *= 1 - Math.abs(wave) * 0.12;
    }

    if (item.runtime.animation.remaining <= 0) {
      item.runtime.animation = null;
    }
  }

  if (item.runtime.flip) {
    item.runtime.flip.remaining -= deltaSeconds;
    const progress = 1 - clamp(item.runtime.flip.remaining / item.runtime.flip.total, 0, 1);
    item.runtime.visual.rotation += progress * Math.PI * 2;
    if (item.runtime.flip.remaining <= 0) {
      item.runtime.flip = null;
    }
  }

  if (item.runtime.jump) {
    item.runtime.jump.remaining -= deltaSeconds;
    const progress = 1 - clamp(item.runtime.jump.remaining / item.runtime.jump.total, 0, 1);
    item.runtime.visual.offsetY -= Math.sin(progress * Math.PI) * item.runtime.jump.height;
    if (item.runtime.jump.remaining <= 0) {
      item.runtime.jump = null;
    }
  }
}

function setLoopAnimation(item, type, seconds) {
  item.runtime.animation = {
    type,
    remaining: seconds,
    elapsed: 0,
  };
}

function clearAllScriptRunners() {
  state.scriptRunners = [];
  state.stopAllScriptsRequested = false;
  for (const item of state.items) {
    item.runtime.animation = null;
    item.runtime.flip = null;
    item.runtime.jump = null;
    clearItemRuntimeVisuals(item);
  }
}

function createSequenceRunner(actor, blocks, run) {
  let index = 0;
  let current = blocks.length > 0 ? createRunnerForBlock(actor, blocks[0], run) : null;

  return {
    done: blocks.length === 0,
    update(deltaSeconds) {
      if (this.done || run.stopped) {
        this.done = true;
        return;
      }

      let safety = 0;
      while (current && safety < 10) {
        current.update(deltaSeconds);
        if (!current.done) {
          return;
        }
        index += 1;
        if (index >= blocks.length) {
          this.done = true;
          return;
        }
        current = createRunnerForBlock(actor, blocks[index], run);
        deltaSeconds = 0;
        safety += 1;
      }
    },
  };
}

function createWaitRunner(seconds) {
  let remaining = seconds;
  return {
    done: false,
    update(deltaSeconds) {
      remaining -= deltaSeconds;
      if (remaining <= 0) {
        this.done = true;
      }
    },
  };
}

function createTimedMoveRunner(actor, dx, dy, duration) {
  const total = Math.max(0.05, duration);
  let remaining = total;
  return {
    done: false,
    update(deltaSeconds) {
      const step = Math.min(deltaSeconds, remaining);
      actor.x += (dx / total) * step;
      actor.y += (dy / total) * step;
      clampItemToStage(actor);
      remaining -= step;
      markProjectDirty();
      if (remaining <= 0) {
        this.done = true;
      }
    },
  };
}

function createInstantRunner(action) {
  let started = false;
  return {
    done: false,
    update() {
      if (!started) {
        action();
        started = true;
      }
      this.done = true;
    },
  };
}

function createRepeatRunner(actor, block, run) {
  let remainingIterations = Math.max(1, Math.round(block.params.times || 1));
  let current = createSequenceRunner(actor, block.children, run);
  return {
    done: false,
    update(deltaSeconds) {
      if (this.done || run.stopped) {
        this.done = true;
        return;
      }
      current.update(deltaSeconds);
      if (current.done) {
        remainingIterations -= 1;
        if (remainingIterations <= 0) {
          this.done = true;
          return;
        }
        current = createSequenceRunner(actor, block.children, run);
      }
    },
  };
}

function createForeverRunner(actor, block, run) {
  let current = createSequenceRunner(actor, block.children, run);
  return {
    done: false,
    update(deltaSeconds) {
      if (!state.recording || run.stopped) {
        this.done = true;
        return;
      }
      current.update(deltaSeconds);
      if (current.done) {
        current = createSequenceRunner(actor, block.children, run);
      }
    },
  };
}

function createParallelRunner(actor, block, run) {
  const runners = block.children.map((child) => createRunnerForBlock(actor, child, run));
  return {
    done: runners.length === 0,
    update(deltaSeconds) {
      if (this.done || run.stopped) {
        this.done = true;
        return;
      }
      for (const runner of runners) {
        if (!runner.done) {
          runner.update(deltaSeconds);
        }
      }
      this.done = runners.every((runner) => runner.done);
    },
  };
}

function createRunnerForBlock(actor, block, run) {
  switch (block.type) {
    case "move_right_seconds":
      return createTimedMoveRunner(actor, STAGE_GRID_SIZE * 2 * Number(block.params.seconds || 1), 0, Number(block.params.seconds || 1));
    case "move_left_blocks": {
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, -STAGE_GRID_SIZE * blocks, 0, Math.max(0.2, blocks * 0.45));
    }
    case "move_up_blocks": {
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, 0, -STAGE_GRID_SIZE * blocks, Math.max(0.2, blocks * 0.45));
    }
    case "move_down_blocks": {
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, 0, STAGE_GRID_SIZE * blocks, Math.max(0.2, blocks * 0.45));
    }
    case "teleport_xy":
      return createInstantRunner(() => {
        actor.x = Number(block.params.x || actor.x);
        actor.y = Number(block.params.y || actor.y);
        clampItemToStage(actor);
        markProjectDirty();
      });
    case "face_left":
      return createInstantRunner(() => {
        actor.facing = -1;
        markProjectDirty();
      });
    case "face_right":
      return createInstantRunner(() => {
        actor.facing = 1;
        markProjectDirty();
      });
    case "jump_blocks": {
      const blocks = Number(block.params.blocks || 1);
      const total = Math.max(0.3, blocks * 0.28);
      actor.runtime.jump = {
        total,
        remaining: total,
        height: blocks * (STAGE_GRID_SIZE * 0.55),
      };
      return createWaitRunner(total);
    }
    case "play_wiggle":
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "wiggle", seconds);
        return seconds;
      })());
    case "play_bounce":
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "bounce", seconds);
        return seconds;
      })());
    case "play_stretch":
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "stretch", seconds);
        return seconds;
      })());
    case "stop_animation":
      return createInstantRunner(() => {
        actor.runtime.animation = null;
      });
    case "change_size":
      return createInstantRunner(() => {
        actor.sizePct = clamp(Number(block.params.percent || 100), 20, 300);
        clampItemToStage(actor);
        markProjectDirty();
      });
    case "flip_360":
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        actor.runtime.flip = { total: seconds, remaining: seconds };
        return seconds;
      })());
    case "change_texture":
      return createInstantRunner(() => {
        actor.textureId = block.params.textureId || null;
        markProjectDirty();
      });
    case "wait":
      return createWaitRunner(Number(block.params.seconds || 1));
    case "repeat":
      return createRepeatRunner(actor, block, run);
    case "forever_recording":
      return createForeverRunner(actor, block, run);
    case "parallel":
      return createParallelRunner(actor, block, run);
    case "sequence":
      return createSequenceRunner(actor, block.children, run);
    case "play_sound":
      return createInstantRunner(() => playPlaceholderTone("sound", block.params.soundId));
    case "play_music":
      return createInstantRunner(() => playPlaceholderTone("music", block.params.musicId));
    case "stop_sound":
      return createInstantRunner(stopAllAudioNodes);
    case "set_volume":
      return createInstantRunner(() => setAudioVolume(Number(block.params.volume || 0) / 100));
    case "stop_this_script":
      return createInstantRunner(() => {
        run.stopped = true;
      });
    case "stop_all_scripts":
      return createInstantRunner(() => {
        state.stopAllScriptsRequested = true;
      });
    default:
      return createInstantRunner(() => {});
  }
}

function startScriptRun(actor, rootBlock) {
  const run = {
    id: createBlockId(),
    actorId: actor.id,
    rootBlockId: rootBlock.id,
    stopped: false,
    runner: null,
  };
  run.runner = createSequenceRunner(actor, rootBlock.children || [], run);
  state.scriptRunners.push(run);
}

function triggerScripts(eventName, options = {}) {
  const actorId = options.actorId ?? null;
  const key = options.key ?? null;

  for (const actor of state.items) {
    if (actorId != null && actor.id !== actorId) {
      continue;
    }

    for (const rootBlock of actor.scripts) {
      if (eventName === "recording_start" && rootBlock.type === "when_recording_start") {
        startScriptRun(actor, rootBlock);
      }
      if (eventName === "clicked" && rootBlock.type === "when_clicked") {
        startScriptRun(actor, rootBlock);
      }
      if (eventName === "key_pressed" && rootBlock.type === "when_key_pressed") {
        if (normalizeScriptKey(rootBlock.params.key || "") === key) {
          startScriptRun(actor, rootBlock);
        }
      }
    }
  }
}

function updateScripts(deltaSeconds) {
  for (const item of state.items) {
    updateItemTransientState(item, deltaSeconds);
  }

  for (const run of state.scriptRunners) {
    if (run.stopped) {
      continue;
    }
    const actor = getItemById(run.actorId);
    if (!actor) {
      run.stopped = true;
      continue;
    }
    run.runner.update(deltaSeconds);
    if (run.runner.done) {
      run.stopped = true;
    }
  }

  if (state.stopAllScriptsRequested) {
    clearAllScriptRunners();
    stopAllAudioNodes();
  } else {
    state.scriptRunners = state.scriptRunners.filter((run) => !run.stopped);
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundRectPath(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width * 0.5, height * 0.5);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function drawFilledRoundedRect(context, x, y, width, height, radius, fillStyle, strokeStyle = null) {
  roundRectPath(context, x, y, width, height, radius);
  context.fillStyle = fillStyle;
  context.fill();
  if (strokeStyle) {
    context.strokeStyle = strokeStyle;
    context.stroke();
  }
}

function getCanvasPoint(event) {
  const rect = stageCanvas.getBoundingClientRect();
  return {
    x: clamp(event.clientX - rect.left, 0, rect.width),
    y: clamp(event.clientY - rect.top, 0, rect.height),
  };
}

function getItemBounds(item) {
  const size = getItemSize(item);
  return {
    left: item.x - size.w * 0.5,
    top: item.y - size.h * 0.5,
    right: item.x + size.w * 0.5,
    bottom: item.y + size.h * 0.5,
  };
}

function rectContainsPoint(rect, x, y) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function rectContainsRect(outer, inner) {
  return (
    inner.left >= outer.left &&
    inner.right <= outer.right &&
    inner.top >= outer.top &&
    inner.bottom <= outer.bottom
  );
}

function cloneItem(item) {
  const copy = normalizeItem({
    ...serializeItem(item),
    id: state.nextId++,
  });
  return copy;
}

function getSelectedItems() {
  return state.items.filter((item) => state.selection.has(item.id));
}

function setSelection(ids) {
  state.selection = new Set(ids);
  state.selectedScriptBlockId = null;
  updateSelectionLabel();
  renderScriptEditor();
}

function clearSelection() {
  state.selection.clear();
  state.selectedScriptBlockId = null;
  updateSelectionLabel();
  renderScriptEditor();
}

function clearActiveTool() {
  state.activeTool = null;
  updateToolButtons();
  updateToolLabel();
}

function getPanelToolType(panelName) {
  switch (panelName) {
    case "characters":
      return "character";
    case "textures":
      return "texture";
    case "objects":
      return "object";
    default:
      return null;
  }
}

function updateSidebarTabs() {
  for (const button of elements.panelButtons) {
    const isScripts = button.dataset.panel === "scripts";
    button.classList.toggle(
      "active",
      isScripts ? state.scriptsModuleOpen : !state.scriptsModuleOpen && button.dataset.panel === state.activePanel,
    );
  }
}

function openScriptsModule() {
  state.scriptsModuleOpen = true;
  elements.scriptsModule.classList.remove("hidden");
  updateSidebarTabs();
  renderScriptEditor();
}

function closeScriptsModule() {
  state.scriptsModuleOpen = false;
  elements.scriptsModule.classList.add("hidden");
  state.scriptDropTarget = null;
  state.scriptDrag = null;
  updateSidebarTabs();
}

function setActiveTool(type, id) {
  if (state.activeTool && state.activeTool.type === type && state.activeTool.id === id) {
    clearActiveTool();
    return;
  }

  state.activeTool = { type, id };
  clearSelection();
  updateToolButtons();
  updateToolLabel();
}

function setActivePanel(panelName) {
  if (panelName === "scripts") {
    openScriptsModule();
    return;
  }

  const previousPanel = state.activePanel;
  state.activePanel = panelName;
  state.lastNonScriptPanel = panelName;

  closeScriptsModule();

  if (previousPanel !== panelName && state.activeTool) {
    const panelToolType = getPanelToolType(panelName);
    if (panelToolType !== state.activeTool.type) {
      clearActiveTool();
    }
  }

  updateSidebarTabs();

  for (const [name, panel] of Object.entries(elements.panels)) {
    panel.classList.toggle("hidden", name !== panelName);
  }
}

function updateSelectionLabel() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    elements.selectionLabel.textContent = "No selection.";
    return;
  }

  if (selectedItems.length === 1) {
    const item = selectedItems[0];
    const source = item.kind === "character" ? characterMap.get(item.subtype) : objectMap.get(item.subtype);
    elements.selectionLabel.textContent = `Selected: ${source.name}`;
    return;
  }

  elements.selectionLabel.textContent = `Selected: ${selectedItems.length} items`;
}

function updateToolLabel() {
  if (!state.activeTool) {
    elements.toolLabel.textContent = "Choose a tool on the right, then click on the stage.";
    return;
  }

  if (state.activeTool.type === "character") {
    elements.toolLabel.textContent = `Placement tool: ${characterMap.get(state.activeTool.id).name}. Click the stage to place it.`;
    return;
  }

  if (state.activeTool.type === "object") {
    elements.toolLabel.textContent = `Placement tool: ${objectMap.get(state.activeTool.id).name}. Click the stage to place it.`;
    return;
  }

  if (state.activeTool.type === "texture") {
    elements.toolLabel.textContent = `Texture brush: ${textureMap.get(state.activeTool.id).name}. Drag over an item to apply it.`;
  }
}

function updateToolButtons() {
  const cards = document.querySelectorAll(".tool-card");
  for (const card of cards) {
    const isActive =
      state.activeTool &&
      card.dataset.toolType === state.activeTool.type &&
      card.dataset.toolId === state.activeTool.id;
    card.classList.toggle("active", Boolean(isActive));
  }
}

function updateRecordingUi() {
  const isRecording = Boolean(state.recording);
  const canRecord = Boolean(window.MediaRecorder);
  elements.recordButton.disabled = isRecording || !canRecord;
  elements.stopButton.disabled = !isRecording;
  elements.recordingBadge.classList.toggle("recording", isRecording);
  if (!canRecord) {
    elements.recordingBadge.textContent = "Recorder unavailable";
    return;
  }
  elements.recordingBadge.textContent = isRecording ? "Recording..." : "Idle";
}

function showScreen(screenName) {
  state.screen = screenName;
  elements.menuScreen.classList.toggle("hidden", screenName !== "menu");
  elements.studioScreen.classList.toggle("hidden", screenName !== "studio");
  elements.libraryScreen.classList.toggle("hidden", screenName !== "library");
  if (screenName !== "studio") {
    closeScriptsModule();
    clearAllScriptRunners();
    stopAllAudioNodes();
  }
}

function createCharacterItem(characterId, x, y) {
  return normalizeItem({
    id: state.nextId++,
    kind: "character",
    subtype: characterId,
    x,
    y,
    w: 82,
    h: 136,
    textureId: null,
  });
}

function createObjectItem(objectId, x, y) {
  return normalizeItem({
    id: state.nextId++,
    kind: "object",
    subtype: objectId,
    x,
    y,
    w: 92,
    h: 92,
    textureId: null,
  });
}

function clampItemToStage(item) {
  const size = getItemSize(item);
  item.x = clamp(item.x, size.w * 0.5 + 12, state.stageWidth - size.w * 0.5 - 12);
  item.y = clamp(item.y, size.h * 0.5 + 12, state.stageHeight - size.h * 0.5 - 12);
}

function placeItemFromTool(point) {
  if (!state.activeTool) {
    return;
  }

  let item = null;
  if (state.activeTool.type === "character") {
    item = createCharacterItem(state.activeTool.id, point.x, point.y);
  } else if (state.activeTool.type === "object") {
    item = createObjectItem(state.activeTool.id, point.x, point.y);
  }

  if (!item) {
    return;
  }

  clampItemToStage(item);
  state.items.push(item);
  setSelection([item.id]);
  markProjectDirty();
}

function hitTest(x, y) {
  for (let index = state.items.length - 1; index >= 0; index -= 1) {
    const item = state.items[index];
    if (rectContainsPoint(getItemBounds(item), x, y)) {
      return item;
    }
  }

  return null;
}

function startDragSelection(point) {
  const snapshot = new Map();
  for (const item of getSelectedItems()) {
    snapshot.set(item.id, { x: item.x, y: item.y });
  }

  state.interaction = {
    type: "drag",
    start: point,
    snapshot,
  };
}

function beginMarquee(point) {
  state.interaction = {
    type: "marquee",
    start: point,
    current: point,
  };
}

function applyTextureAtPoint(point) {
  if (!state.activeTool || state.activeTool.type !== "texture") {
    return;
  }

  const hit = hitTest(point.x, point.y);
  if (hit && !state.dragPaintedIds.has(hit.id)) {
    hit.textureId = state.activeTool.id;
    state.dragPaintedIds.add(hit.id);
    markProjectDirty();
  }
}

function onPointerDown(event) {
  if (state.screen !== "studio" || event.button !== 0) {
    return;
  }

  const point = getCanvasPoint(event);
  state.lastPointer = { x: point.x, y: point.y, inside: true };
  stageCanvas.setPointerCapture?.(event.pointerId);

  if (state.activeTool && (state.activeTool.type === "character" || state.activeTool.type === "object")) {
    placeItemFromTool(point);
    return;
  }

  if (state.activeTool && state.activeTool.type === "texture") {
    state.dragPaintedIds = new Set();
    applyTextureAtPoint(point);
    state.interaction = { type: "paintTexture" };
    return;
  }

  const hit = hitTest(point.x, point.y);
  if (hit) {
    triggerScripts("clicked", { actorId: hit.id });
    if (!state.selection.has(hit.id)) {
      setSelection([hit.id]);
    }
    startDragSelection(point);
  } else {
    clearSelection();
    beginMarquee(point);
  }
}

function onPointerMove(event) {
  const point = getCanvasPoint(event);
  state.lastPointer = { x: point.x, y: point.y, inside: true };

  if (!state.interaction) {
    return;
  }

  if (state.interaction.type === "drag") {
    const dx = point.x - state.interaction.start.x;
    const dy = point.y - state.interaction.start.y;

    for (const item of state.items) {
      if (!state.selection.has(item.id)) {
        continue;
      }

      const snapshot = state.interaction.snapshot.get(item.id);
      item.x = snapshot.x + dx;
      item.y = snapshot.y + dy;
      clampItemToStage(item);
    }
    return;
  }

  if (state.interaction.type === "marquee") {
    state.interaction.current = point;
    return;
  }

  if (state.interaction.type === "paintTexture") {
    applyTextureAtPoint(point);
  }
}

function onPointerUp(event) {
  if (state.interaction && state.interaction.type === "marquee") {
    const { start, current } = state.interaction;
    const marquee = {
      left: Math.min(start.x, current.x),
      top: Math.min(start.y, current.y),
      right: Math.max(start.x, current.x),
      bottom: Math.max(start.y, current.y),
    };

    if (Math.abs(current.x - start.x) > 4 || Math.abs(current.y - start.y) > 4) {
      const ids = state.items
        .filter((item) => rectContainsRect(marquee, getItemBounds(item)))
        .map((item) => item.id);
      setSelection(ids);
    }
  }

  state.interaction = null;
  state.dragPaintedIds = new Set();
  if (event?.pointerId != null) {
    stageCanvas.releasePointerCapture?.(event.pointerId);
  }
  markProjectDirty();
}

function copySelection() {
  const selected = getSelectedItems();
  if (selected.length === 0) {
    return;
  }

  state.clipboard = selected.map((item) => ({
    ...serializeItem(item),
  }));
  elements.toolLabel.textContent = `Copied ${selected.length} item${selected.length === 1 ? "" : "s"}. Press Ctrl+V to paste.`;
}

function pasteClipboard() {
  if (state.clipboard.length === 0) {
    return;
  }

  const bounds = state.clipboard.reduce(
    (accumulator, item) => {
      const scale = (item.sizePct || 100) / 100;
      const width = item.w * scale;
      const height = item.h * scale;
      const left = item.x - width * 0.5;
      const top = item.y - height * 0.5;
      const right = item.x + width * 0.5;
      const bottom = item.y + height * 0.5;
      accumulator.left = Math.min(accumulator.left, left);
      accumulator.top = Math.min(accumulator.top, top);
      accumulator.right = Math.max(accumulator.right, right);
      accumulator.bottom = Math.max(accumulator.bottom, bottom);
      return accumulator;
    },
    { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity },
  );

  const centerX = (bounds.left + bounds.right) * 0.5;
  const centerY = (bounds.top + bounds.bottom) * 0.5;
  const targetX = state.lastPointer.inside ? state.lastPointer.x : centerX + 28;
  const targetY = state.lastPointer.inside ? state.lastPointer.y : centerY + 28;
  const dx = targetX - centerX;
  const dy = targetY - centerY;

  const newIds = [];
  for (const template of state.clipboard) {
    const item =
      template.kind === "character"
        ? createCharacterItem(template.subtype, template.x + dx, template.y + dy)
        : createObjectItem(template.subtype, template.x + dx, template.y + dy);

    item.w = template.w;
    item.h = template.h;
    item.textureId = template.textureId;
    item.facing = template.facing ?? 1;
    item.sizePct = template.sizePct ?? 100;
    item.scripts = Array.isArray(template.scripts) ? template.scripts.map(deserializeBlock) : [];
    clampItemToStage(item);
    state.items.push(item);
    newIds.push(item.id);
  }

  setSelection(newIds);
  markProjectDirty();
}

function deleteSelection() {
  if (state.selection.size === 0) {
    return;
  }

  state.items = state.items.filter((item) => !state.selection.has(item.id));
  clearSelection();
  elements.toolLabel.textContent = "Selection deleted.";
  markProjectDirty();
}

function handleKeyDown(event) {
  if (state.screen !== "studio") {
    return;
  }

  const isFormTarget =
    event.target instanceof HTMLInputElement ||
    event.target instanceof HTMLSelectElement ||
    event.target instanceof HTMLTextAreaElement;
  if (isFormTarget) {
    return;
  }

  const key = event.key.toLowerCase();

  if ((event.ctrlKey || event.metaKey) && key === "c") {
    event.preventDefault();
    copySelection();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "v") {
    event.preventDefault();
    pasteClipboard();
    return;
  }

  if (key === "backspace") {
    event.preventDefault();
    if (!deleteSelectedScriptBlock()) {
      deleteSelection();
    }
    return;
  }

  if (key === "escape") {
    clearActiveTool();
    clearSelection();
    return;
  }

  if (!event.ctrlKey && !event.metaKey && !event.altKey) {
    triggerScripts("key_pressed", { key: normalizeScriptKey(event.key) });
  }

  if (["w", "a", "s", "d"].includes(key)) {
    event.preventDefault();
    state.keysPressed.add(key);
  }
}

function handleKeyUp(event) {
  state.keysPressed.delete(event.key.toLowerCase());
}

function moveSelectionByKeys(deltaSeconds) {
  if (state.selection.size === 0 || state.keysPressed.size === 0) {
    return;
  }

  let dx = 0;
  let dy = 0;
  const speed = 220;

  if (state.keysPressed.has("a")) {
    dx -= speed * deltaSeconds;
  }
  if (state.keysPressed.has("d")) {
    dx += speed * deltaSeconds;
  }
  if (state.keysPressed.has("w")) {
    dy -= speed * deltaSeconds;
  }
  if (state.keysPressed.has("s")) {
    dy += speed * deltaSeconds;
  }

  for (const item of state.items) {
    if (!state.selection.has(item.id)) {
      continue;
    }
    item.x += dx;
    item.y += dy;
    clampItemToStage(item);
  }
  markProjectDirty();
}

function ensureCanvasSize() {
  const rect = stageFrame.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  const dpr = window.devicePixelRatio || 1;

  if (stageCanvas.width !== Math.floor(width * dpr) || stageCanvas.height !== Math.floor(height * dpr)) {
    stageCanvas.width = Math.floor(width * dpr);
    stageCanvas.height = Math.floor(height * dpr);
    recordingCanvas.width = Math.floor(width * dpr);
    recordingCanvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    recordingCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    state.stageWidth = width;
    state.stageHeight = height;
    patternCaches.stage.clear();
    patternCaches.recording.clear();

    for (const item of state.items) {
      clampItemToStage(item);
    }
  }
}

function buildPattern(textureId) {
  if (patternCache.has(textureId)) {
    return patternCache.get(textureId);
  }

  const canvas = document.createElement("canvas");
  canvas.width = 72;
  canvas.height = 72;
  const patternContext = canvas.getContext("2d");

  patternContext.clearRect(0, 0, canvas.width, canvas.height);

  switch (textureId) {
    case "sunset-stripe": {
      patternContext.fillStyle = "#ffd1ba";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.strokeStyle = "#ff8552";
      patternContext.lineWidth = 10;
      for (let offset = -72; offset < 144; offset += 24) {
        patternContext.beginPath();
        patternContext.moveTo(offset, 72);
        patternContext.lineTo(offset + 72, 0);
        patternContext.stroke();
      }
      break;
    }
    case "mint-grid": {
      patternContext.fillStyle = "#c9f6eb";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.strokeStyle = "rgba(0, 69, 58, 0.25)";
      patternContext.lineWidth = 2;
      for (let line = 0; line <= 72; line += 18) {
        patternContext.beginPath();
        patternContext.moveTo(line, 0);
        patternContext.lineTo(line, 72);
        patternContext.stroke();
        patternContext.beginPath();
        patternContext.moveTo(0, line);
        patternContext.lineTo(72, line);
        patternContext.stroke();
      }
      break;
    }
    case "berry-dot": {
      patternContext.fillStyle = "#fff1f7";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.fillStyle = "#ff7fb3";
      for (let y = 12; y <= 60; y += 24) {
        for (let x = 12; x <= 60; x += 24) {
          patternContext.beginPath();
          patternContext.arc(x, y, 6, 0, Math.PI * 2);
          patternContext.fill();
        }
      }
      break;
    }
    case "midnight-wave": {
      patternContext.fillStyle = "#2f477c";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.strokeStyle = "#9ab5ff";
      patternContext.lineWidth = 4;
      for (let y = 12; y < 96; y += 18) {
        patternContext.beginPath();
        for (let x = -12; x <= 84; x += 8) {
          const waveY = y + Math.sin(x * 0.12) * 6;
          if (x === -12) {
            patternContext.moveTo(x, waveY);
          } else {
            patternContext.lineTo(x, waveY);
          }
        }
        patternContext.stroke();
      }
      break;
    }
    case "brick-pop": {
      patternContext.fillStyle = "#e58a66";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.strokeStyle = "rgba(255, 246, 235, 0.8)";
      patternContext.lineWidth = 3;
      for (let y = 0; y <= 72; y += 18) {
        patternContext.beginPath();
        patternContext.moveTo(0, y);
        patternContext.lineTo(72, y);
        patternContext.stroke();
      }
      for (let row = 0; row < 4; row += 1) {
        const startX = row % 2 === 0 ? 0 : 18;
        for (let x = startX; x <= 72; x += 36) {
          patternContext.beginPath();
          patternContext.moveTo(x, row * 18);
          patternContext.lineTo(x, row * 18 + 18);
          patternContext.stroke();
        }
      }
      break;
    }
    case "checker-pop": {
      patternContext.fillStyle = "#fff4dc";
      patternContext.fillRect(0, 0, 72, 72);
      for (let row = 0; row < 4; row += 1) {
        for (let column = 0; column < 4; column += 1) {
          if ((row + column) % 2 === 0) {
            patternContext.fillStyle = row % 2 === 0 ? "#f7b267" : "#f4845f";
            patternContext.fillRect(column * 18, row * 18, 18, 18);
          }
        }
      }
      break;
    }
    case "sprinkles": {
      patternContext.fillStyle = "#fff6ea";
      patternContext.fillRect(0, 0, 72, 72);
      const colors = ["#ef6f4d", "#2f8f83", "#ffb703", "#d36c6c"];
      for (let index = 0; index < 24; index += 1) {
        patternContext.strokeStyle = colors[index % colors.length];
        patternContext.lineWidth = 3;
        patternContext.beginPath();
        const x = (index * 19) % 72;
        const y = (index * 29) % 72;
        patternContext.moveTo(x, y);
        patternContext.lineTo(x + 8, y + 3);
        patternContext.stroke();
      }
      break;
    }
    case "honeycomb": {
      patternContext.fillStyle = "#ffc14d";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.strokeStyle = "rgba(103, 66, 0, 0.35)";
      patternContext.lineWidth = 2;
      for (let row = 0; row < 4; row += 1) {
        for (let column = 0; column < 3; column += 1) {
          const x = column * 24 + (row % 2) * 12;
          const y = row * 18;
          patternContext.beginPath();
          patternContext.moveTo(x + 6, y);
          patternContext.lineTo(x + 18, y);
          patternContext.lineTo(x + 24, y + 9);
          patternContext.lineTo(x + 18, y + 18);
          patternContext.lineTo(x + 6, y + 18);
          patternContext.lineTo(x, y + 9);
          patternContext.closePath();
          patternContext.stroke();
        }
      }
      break;
    }
    case "confetti": {
      patternContext.fillStyle = "#fff4dd";
      patternContext.fillRect(0, 0, 72, 72);
      const confettiColors = ["#ef476f", "#118ab2", "#ffd166", "#06d6a0"];
      for (let index = 0; index < 22; index += 1) {
        patternContext.fillStyle = confettiColors[index % confettiColors.length];
        const x = (index * 23) % 72;
        const y = (index * 17) % 72;
        patternContext.save();
        patternContext.translate(x, y);
        patternContext.rotate((index % 6) * 0.35);
        patternContext.fillRect(-3, -1.5, 6, 3);
        patternContext.restore();
      }
      break;
    }
    case "film-noir": {
      patternContext.fillStyle = "#f1eee8";
      patternContext.fillRect(0, 0, 72, 72);
      patternContext.fillStyle = "#242424";
      for (let offset = -72; offset < 144; offset += 24) {
        patternContext.save();
        patternContext.translate(offset, 0);
        patternContext.rotate(Math.PI / 4);
        patternContext.fillRect(0, 0, 12, 120);
        patternContext.restore();
      }
      break;
    }
    default:
      break;
  }

  const pattern = ctx.createPattern(canvas, "repeat");
  patternCache.set(textureId, pattern);
  return pattern;
}

function withRenderTarget(targetCtx, targetPatternCache, callback) {
  const previousCtx = ctx;
  const previousPatternCache = patternCache;
  ctx = targetCtx;
  patternCache = targetPatternCache;
  callback();
  ctx = previousCtx;
  patternCache = previousPatternCache;
}

function resolveFill(item, fallbackColor) {
  if (!item.textureId) {
    return fallbackColor;
  }
  return buildPattern(item.textureId) || fallbackColor;
}

function drawShadow(item) {
  const size = getItemSize(item);
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  ctx.save();
  ctx.globalAlpha = 0.14;
  ctx.fillStyle = "#53341e";
  ctx.beginPath();
  ctx.ellipse(
    item.x + visual.offsetX,
    item.y + visual.offsetY + size.h * 0.42,
    size.w * 0.34 * Math.abs(visual.scaleX),
    size.h * 0.09 * Math.abs(visual.scaleY),
    0,
    0,
    Math.PI * 2,
  );
  ctx.fill();
  ctx.restore();
}

function drawCharacter(item) {
  const character = characterMap.get(item.subtype);
  const bodyFill = resolveFill(item, character.bodyColor);
  const scale = (item.sizePct || 100) / 100;
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  drawShadow(item);

  ctx.save();
  ctx.translate(item.x + visual.offsetX, item.y + visual.offsetY);
  ctx.rotate(visual.rotation);
  ctx.scale(scale * item.facing * visual.scaleX, scale * visual.scaleY);

  if (character.variant === "ghost") {
    ctx.fillStyle = bodyFill;
    ctx.strokeStyle = "#6d8db0";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-28, 12);
    ctx.quadraticCurveTo(-28, -46, 0, -56);
    ctx.quadraticCurveTo(28, -46, 28, 12);
    ctx.lineTo(28, 44);
    ctx.quadraticCurveTo(20, 34, 10, 44);
    ctx.quadraticCurveTo(0, 34, -10, 44);
    ctx.quadraticCurveTo(-20, 34, -28, 44);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#2b3d58";
    ctx.beginPath();
    ctx.arc(-9, -12, 4, 0, Math.PI * 2);
    ctx.arc(9, -12, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 4, 8, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.strokeStyle = "#55779d";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
    return;
  }

  ctx.strokeStyle = "rgba(47, 28, 15, 0.8)";
  ctx.lineWidth = 2.2;

  ctx.fillStyle = character.pantsColor;
  drawFilledRoundedRect(ctx, -18, 24, 14, 40, 6, character.pantsColor);
  drawFilledRoundedRect(ctx, 4, 24, 14, 40, 6, character.pantsColor);

  ctx.fillStyle = "#2b2421";
  drawFilledRoundedRect(ctx, -20, 58, 18, 8, 4, "#2b2421");
  drawFilledRoundedRect(ctx, 2, 58, 18, 8, 4, "#2b2421");

  ctx.fillStyle = bodyFill;
  drawFilledRoundedRect(ctx, -24, -8, 48, 44, 14, bodyFill, "rgba(47, 28, 15, 0.8)");

  ctx.fillStyle = bodyFill;
  drawFilledRoundedRect(ctx, -34, -4, 10, 32, 5, bodyFill, "rgba(47, 28, 15, 0.25)");
  drawFilledRoundedRect(ctx, 24, -4, 10, 32, 5, bodyFill, "rgba(47, 28, 15, 0.25)");

  ctx.fillStyle = character.skinColor;
  ctx.beginPath();
  ctx.arc(0, -32, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#2c1d14";
  ctx.beginPath();
  ctx.arc(-7, -34, 2.6, 0, Math.PI * 2);
  ctx.arc(7, -34, 2.6, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#7a4d38";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, -26, 7, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();

  switch (character.variant) {
    case "cap":
      ctx.fillStyle = character.accentColor;
      ctx.beginPath();
      ctx.arc(-2, -46, 18, Math.PI, 2 * Math.PI);
      ctx.fill();
      drawFilledRoundedRect(ctx, -15, -48, 28, 8, 4, character.accentColor);
      break;
    case "sparkle":
      ctx.fillStyle = "#fff7ea";
      drawFilledRoundedRect(ctx, -8, 5, 16, 16, 4, "#fff7ea", "rgba(47, 28, 15, 0.18)");
      ctx.strokeStyle = character.accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -56);
      ctx.lineTo(0, -46);
      ctx.moveTo(-5, -51);
      ctx.lineTo(5, -51);
      ctx.stroke();
      break;
    case "helmet":
      ctx.strokeStyle = "#5e7899";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, -32, 28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
      ctx.beginPath();
      ctx.arc(6, -38, 20, 0, Math.PI * 2);
      ctx.fill();
      break;
    case "visor":
      ctx.fillStyle = "#1f4a45";
      drawFilledRoundedRect(ctx, -16, -40, 32, 12, 6, "#1f4a45");
      ctx.fillStyle = "#7fffe5";
      drawFilledRoundedRect(ctx, -13, -38, 26, 8, 4, "#7fffe5");
      break;
    case "cape":
      ctx.fillStyle = character.accentColor;
      ctx.beginPath();
      ctx.moveTo(-20, -4);
      ctx.lineTo(-34, 30);
      ctx.lineTo(-10, 30);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(20, -4);
      ctx.lineTo(34, 30);
      ctx.lineTo(10, 30);
      ctx.closePath();
      ctx.fill();
      break;
    case "mohawk":
      ctx.fillStyle = character.accentColor;
      ctx.beginPath();
      ctx.moveTo(-10, -53);
      ctx.lineTo(-3, -68);
      ctx.lineTo(4, -53);
      ctx.lineTo(11, -68);
      ctx.lineTo(18, -53);
      ctx.closePath();
      ctx.fill();
      break;
    case "crown":
      ctx.fillStyle = character.accentColor;
      ctx.beginPath();
      ctx.moveTo(-16, -51);
      ctx.lineTo(-10, -63);
      ctx.lineTo(-2, -51);
      ctx.lineTo(0, -64);
      ctx.lineTo(8, -51);
      ctx.lineTo(14, -63);
      ctx.lineTo(18, -51);
      ctx.closePath();
      ctx.fill();
      drawFilledRoundedRect(ctx, -17, -51, 34, 8, 4, character.accentColor);
      break;
    default:
      break;
  }

  ctx.restore();
}

function drawObject(item) {
  const objectDef = objectMap.get(item.subtype);
  const fillStyle = resolveFill(item, objectDef.baseColor);
  const scale = (item.sizePct || 100) / 100;
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  drawShadow(item);

  ctx.save();
  ctx.translate(item.x + visual.offsetX, item.y + visual.offsetY);
  ctx.rotate(visual.rotation);
  ctx.scale(scale * item.facing * visual.scaleX, scale * visual.scaleY);
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = "rgba(47, 28, 15, 0.78)";
  ctx.lineWidth = 2.5;

  switch (item.subtype) {
    case "cube":
      drawFilledRoundedRect(ctx, -38, -38, 76, 76, 16, fillStyle, ctx.strokeStyle);
      break;
    case "triangle":
      ctx.beginPath();
      ctx.moveTo(0, -42);
      ctx.lineTo(42, 36);
      ctx.lineTo(-42, 36);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case "circle":
      ctx.beginPath();
      ctx.arc(0, 0, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      break;
    case "star":
      ctx.beginPath();
      for (let index = 0; index < 10; index += 1) {
        const angle = -Math.PI / 2 + index * (Math.PI / 5);
        const radius = index % 2 === 0 ? 42 : 18;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case "diamond":
      ctx.beginPath();
      ctx.moveTo(0, -42);
      ctx.lineTo(42, 0);
      ctx.lineTo(0, 42);
      ctx.lineTo(-42, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case "hexagon":
      ctx.beginPath();
      for (let index = 0; index < 6; index += 1) {
        const angle = Math.PI / 6 + index * (Math.PI / 3);
        const x = Math.cos(angle) * 42;
        const y = Math.sin(angle) * 42;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case "capsule":
      drawFilledRoundedRect(ctx, -46, -28, 92, 56, 28, fillStyle, ctx.strokeStyle);
      break;
    case "heart":
      ctx.beginPath();
      ctx.moveTo(0, 40);
      ctx.bezierCurveTo(40, 10, 48, -26, 20, -34);
      ctx.bezierCurveTo(6, -39, 0, -25, 0, -18);
      ctx.bezierCurveTo(0, -25, -6, -39, -20, -34);
      ctx.bezierCurveTo(-48, -26, -40, 10, 0, 40);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    default:
      break;
  }

  ctx.restore();
}

function drawSelectionOutline(item) {
  const bounds = getItemBounds(item);
  ctx.save();
  ctx.strokeStyle = "#2f8f83";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([10, 7]);
  roundRectPath(ctx, bounds.left - 8, bounds.top - 8, item.w + 16, item.h + 16, 18);
  ctx.stroke();
  ctx.restore();
}

function drawMarquee() {
  if (!state.interaction || state.interaction.type !== "marquee") {
    return;
  }

  const { start, current } = state.interaction;
  const left = Math.min(start.x, current.x);
  const top = Math.min(start.y, current.y);
  const width = Math.abs(current.x - start.x);
  const height = Math.abs(current.y - start.y);

  ctx.save();
  ctx.fillStyle = "rgba(47, 143, 131, 0.12)";
  ctx.strokeStyle = "rgba(47, 143, 131, 0.95)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 5]);
  ctx.fillRect(left, top, width, height);
  ctx.strokeRect(left, top, width, height);
  ctx.restore();
}

function drawPlacementPreview() {
  if (!state.activeTool || !state.lastPointer.inside || state.interaction) {
    return;
  }

  if (state.activeTool.type !== "character" && state.activeTool.type !== "object") {
    return;
  }

  const preview =
    state.activeTool.type === "character"
      ? createCharacterItem(state.activeTool.id, state.lastPointer.x, state.lastPointer.y)
      : createObjectItem(state.activeTool.id, state.lastPointer.x, state.lastPointer.y);

  clampItemToStage(preview);
  ctx.save();
  ctx.globalAlpha = 0.55;
  if (preview.kind === "character") {
    drawCharacter(preview);
  } else {
    drawObject(preview);
  }
  ctx.restore();
}

function drawRecordingOverlay(now) {
  if (!state.recording) {
    return;
  }

  const seconds = (now - state.recording.startedAt) / 1000;
  const label = `REC ${formatDuration(seconds)}`;

  ctx.save();
  drawFilledRoundedRect(ctx, 18, 18, 128, 38, 14, "rgba(42, 20, 18, 0.82)");
  ctx.fillStyle = "#ff6b6b";
  ctx.beginPath();
  ctx.arc(38, 37, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff8f1";
  ctx.font = "700 16px Trebuchet MS";
  ctx.fillText(label, 54, 42);
  ctx.restore();
}

function drawStage(now, options = {}) {
  const {
    showSelectionOutlines = true,
    showEditorOverlays = true,
    showRecordingOverlay = true,
  } = options;

  ctx.clearRect(0, 0, state.stageWidth, state.stageHeight);

  ctx.fillStyle = "#fffdfa";
  ctx.fillRect(0, 0, state.stageWidth, state.stageHeight);

  ctx.save();
  ctx.strokeStyle = "rgba(189, 150, 114, 0.18)";
  ctx.lineWidth = 1;
  for (let x = 36; x < state.stageWidth; x += 72) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, state.stageHeight);
    ctx.stroke();
  }
  for (let y = 36; y < state.stageHeight; y += 72) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(state.stageWidth, y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "rgba(140, 95, 58, 0.18)";
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, state.stageWidth - 4, state.stageHeight - 4);
  ctx.restore();

  ctx.fillStyle = "rgba(97, 64, 39, 0.4)";
  ctx.font = "700 14px Trebuchet MS";
  ctx.fillText("WORMS STAGE", 18, state.stageHeight - 18);

  for (const item of state.items) {
    if (item.kind === "character") {
      drawCharacter(item);
    } else {
      drawObject(item);
    }
  }

  if (showSelectionOutlines) {
    for (const item of getSelectedItems()) {
      drawSelectionOutline(item);
    }
  }

  if (showEditorOverlays) {
    drawPlacementPreview();
    drawMarquee();
  }

  if (showRecordingOverlay) {
    drawRecordingOverlay(now);
  }

  if (state.items.length === 0) {
    ctx.save();
    ctx.fillStyle = "rgba(120, 86, 58, 0.7)";
    ctx.font = "700 24px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.fillText("Pick a character or object, then click anywhere on the white stage.", state.stageWidth * 0.5, state.stageHeight * 0.46);
    ctx.font = "600 16px Trebuchet MS";
    ctx.fillText("Use marquee select, Ctrl+C, Ctrl+V, texture drag, and WASD movement once your cast is placed.", state.stageWidth * 0.5, state.stageHeight * 0.52);
    ctx.restore();
  }
}

function renderStageViews(now) {
  ensureCanvasSize();

  withRenderTarget(stageCtx, patternCaches.stage, () => {
    drawStage(now, {
      showSelectionOutlines: true,
      showEditorOverlays: true,
      showRecordingOverlay: true,
    });
  });

  withRenderTarget(recordingCtx, patternCaches.recording, () => {
    drawStage(now, {
      showSelectionOutlines: false,
      showEditorOverlays: false,
      showRecordingOverlay: false,
    });
  });
}

function animate(now) {
  const deltaSeconds = state.lastFrameTime ? Math.min(0.033, (now - state.lastFrameTime) / 1000) : 0;
  state.lastFrameTime = now;

  if (state.screen === "studio") {
    moveSelectionByKeys(deltaSeconds);
    updateScripts(deltaSeconds);
    renderStageViews(now);
  }

  if (state.projectDirty && now - state.lastProjectSaveTime > 250) {
    saveProjectState();
  }

  requestAnimationFrame(animate);
}

async function loadRecordings() {
  state.recordings = await recordingStore.list();
  if (!state.recordings.some((recording) => recording.id === state.selectedRecordingId)) {
    state.selectedRecordingId = state.recordings[0]?.id || null;
  }
  renderLibrary();
}

function releaseLibraryUrl() {
  if (state.libraryObjectUrl) {
    URL.revokeObjectURL(state.libraryObjectUrl);
    state.libraryObjectUrl = null;
  }
}

function selectRecording(recordingId) {
  state.selectedRecordingId = recordingId;
  renderLibrary();
}

async function deleteRecording(recordingId) {
  if (recordingId === state.selectedRecordingId) {
    releaseLibraryUrl();
    state.selectedRecordingId = null;
  }
  await recordingStore.remove(recordingId);
  await loadRecordings();
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function formatDuration(seconds) {
  const totalSeconds = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function renderLibrary() {
  elements.libraryList.innerHTML = "";

  if (state.recordings.length === 0) {
    elements.libraryMeta.textContent = "Select a take to watch it here.";
    elements.emptyLibraryState.classList.remove("hidden");
    releaseLibraryUrl();
    elements.libraryVideo.removeAttribute("src");
    elements.libraryVideo.load();
    return;
  }

  elements.emptyLibraryState.classList.add("hidden");

  for (const recording of state.recordings) {
    const card = document.createElement("article");
    card.className = "library-card";
    card.classList.toggle("active", recording.id === state.selectedRecordingId);

    const header = document.createElement("div");
    header.className = "library-card-header";

    const titleWrap = document.createElement("div");
    const title = document.createElement("h4");
    title.className = "library-card-title";
    title.textContent = recording.name;

    const meta = document.createElement("p");
    meta.className = "library-card-meta";
    meta.textContent = `${formatDate(recording.createdAt)} | ${formatDuration(recording.duration)}`;

    titleWrap.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "library-card-actions";

    const watchButton = document.createElement("button");
    watchButton.type = "button";
    watchButton.className = "secondary-button";
    watchButton.textContent = "Watch";
    watchButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectRecording(recording.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteRecording(recording.id);
    });

    actions.append(watchButton, deleteButton);
    header.append(titleWrap, actions);

    const copy = document.createElement("p");
    copy.className = "library-card-copy";
    copy.textContent = "Recorded straight from the stage canvas.";

    card.append(header, copy);
    card.addEventListener("click", () => selectRecording(recording.id));
    elements.libraryList.append(card);
  }

  const active = state.recordings.find((recording) => recording.id === state.selectedRecordingId) || state.recordings[0];
  state.selectedRecordingId = active.id;
  releaseLibraryUrl();
  state.libraryObjectUrl = URL.createObjectURL(active.blob);
  elements.libraryVideo.src = state.libraryObjectUrl;
  elements.libraryVideo.load();
  elements.libraryMeta.textContent = `${active.name} | ${formatDate(active.createdAt)} | ${formatDuration(active.duration)}`;
}

function getRecordingMimeType() {
  const options = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];

  for (const mimeType of options) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported(mimeType)) {
      return mimeType;
    }
  }

  return "";
}

function startRecording() {
  if (state.recording || !window.MediaRecorder) {
    return;
  }

  clearAllScriptRunners();
  stopAllAudioNodes();
  renderStageViews(performance.now());
  const stream = recordingCanvas.captureStream(30);
  const mimeType = getRecordingMimeType();
  const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  const chunks = [];
  const recordingState = {
    recorder,
    stream,
    startedAt: performance.now(),
    stopPromise: null,
    resolveStop: null,
  };

  recordingState.stopPromise = new Promise((resolve) => {
    recordingState.resolveStop = resolve;
  });

  recorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  recorder.onstop = async () => {
    const duration = (performance.now() - recordingState.startedAt) / 1000;
    const blob = new Blob(chunks, { type: recorder.mimeType || "video/webm" });
    const recording = {
      id: `take-${Date.now()}`,
      name: `Take ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })}`,
      createdAt: new Date().toISOString(),
      duration,
      blob,
    };

    stream.getTracks().forEach((track) => track.stop());
    state.recording = null;
    updateRecordingUi();
    await recordingStore.save(recording);
    await loadRecordings();
    recordingState.resolveStop?.();
  };

  recorder.start(150);
  state.recording = recordingState;
  triggerScripts("recording_start");
  updateRecordingUi();
}

async function stopRecording() {
  if (!state.recording) {
    return;
  }

  const { recorder, stopPromise } = state.recording;
  clearAllScriptRunners();
  stopAllAudioNodes();
  for (const item of state.items) {
    item.runtime.animation = null;
    item.runtime.flip = null;
    item.runtime.jump = null;
  }
  if (recorder.state !== "inactive") {
    recorder.stop();
  }
  saveProjectState();
  await stopPromise;
}

async function openLibrary() {
  await stopRecording();
  saveProjectState();
  await loadRecordings();
  showScreen("library");
}

async function goToMenu() {
  await stopRecording();
  saveProjectState();
  showScreen("menu");
}

async function goToStudio() {
  showScreen("studio");
  updateSelectionLabel();
  updateToolLabel();
  renderScriptEditor();
}

function clearStage() {
  state.items = [];
  clearAllScriptRunners();
  stopAllAudioNodes();
  clearSelection();
  markProjectDirty();
  saveProjectState();
}

function buildToolCard(definition, options) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tool-card";
  button.dataset.toolType = options.toolType;
  button.dataset.toolId = definition.id;

  const preview = document.createElement("div");
  preview.className = options.previewClass;
  if (options.previewType === "text") {
    preview.textContent = definition.preview;
  } else if (options.previewType === "background") {
    preview.style.background = definition.preview;
  }

  const title = document.createElement("div");
  title.className = "tool-card-title";
  title.textContent = definition.name;

  const copy = document.createElement("div");
  copy.className = "tool-card-copy";
  copy.textContent = definition.copy;

  button.append(preview, title, copy);
  button.addEventListener("click", () => setActiveTool(options.toolType, definition.id));
  return button;
}

function populateToolLists() {
  for (const character of CHARACTER_DEFS) {
    elements.characterList.append(
      buildToolCard(character, {
        toolType: "character",
        previewType: "text",
        previewClass: "character-preview",
      }),
    );
  }

  for (const texture of TEXTURE_DEFS) {
    elements.textureList.append(
      buildToolCard(texture, {
        toolType: "texture",
        previewType: "background",
        previewClass: "texture-preview",
      }),
    );
  }

  for (const objectDef of OBJECT_DEFS) {
    elements.objectList.append(
      buildToolCard(objectDef, {
        toolType: "object",
        previewType: "text",
        previewClass: "object-preview",
      }),
    );
  }
}

function bindEvents() {
  elements.playButton.addEventListener("click", goToStudio);
  elements.libraryButton.addEventListener("click", openLibrary);
  elements.menuButton.addEventListener("click", goToMenu);
  elements.studioLibraryButton.addEventListener("click", openLibrary);
  elements.libraryToStudioButton.addEventListener("click", goToStudio);
  elements.libraryMenuButton.addEventListener("click", goToMenu);
  elements.clearStageButton.addEventListener("click", clearStage);
  elements.recordButton.addEventListener("click", startRecording);
  elements.stopButton.addEventListener("click", stopRecording);
  elements.openLibraryButton.addEventListener("click", openLibrary);
  elements.scriptsModuleCloseButton.addEventListener("click", closeScriptsModule);

  for (const button of elements.panelButtons) {
    button.addEventListener("click", () => setActivePanel(button.dataset.panel));
  }

  stageCanvas.addEventListener("pointerdown", onPointerDown);
  stageCanvas.addEventListener("pointermove", onPointerMove);
  stageCanvas.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  stageCanvas.addEventListener("pointerleave", () => {
    state.lastPointer.inside = false;
  });

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("resize", ensureCanvasSize);
  window.addEventListener("beforeunload", saveProjectState);
}

async function init() {
  loadProjectState();
  populateToolLists();
  renderScriptCategoryTabs();
  renderScriptPalette();
  bindEvents();
  setActivePanel("characters");
  updateSelectionLabel();
  updateToolLabel();
  renderScriptEditor();
  updateRecordingUi();
  await loadRecordings();
  requestAnimationFrame(animate);
}

init();
