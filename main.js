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
const SCENE_TARGET_ID = "scene";
const CHARACTER_BUILDER_WIDTH = 420;
const CHARACTER_BUILDER_HEIGHT = 520;
const PHYSICS_FIXED_TIMESTEP = 1 / 60;
const PHYSICS_MAX_STEPS_PER_FRAME = 5;
const PHYSICS_SLEEP_SPEED = 18;
const PHYSICS_SLEEP_ANGULAR_SPEED = 0.35;
const PHYSICS_SLEEP_DELAY = 0.75;
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
const PHYSICS_DIRECTION_OPTIONS = [
  { value: "down", label: "Down" },
  { value: "up", label: "Up" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
];
const COLLISION_TOGGLE_OPTIONS = [
  { value: "on", label: "On" },
  { value: "off", label: "Off" },
];
const PHYSICS_LAYERS = [
  { value: "default", label: "Default", color: "#8aa0ae" },
  { value: "characters", label: "Characters", color: "#f06aa6" },
  { value: "objects", label: "Objects", color: "#2f8f83" },
  { value: "scenery", label: "Scenery", color: "#9c6644" },
  { value: "trigger", label: "Trigger", color: "#ffd166" },
  { value: "custom1", label: "Custom 1", color: "#5d76db" },
  { value: "custom2", label: "Custom 2", color: "#8c6de6" },
];
const PHYSICS_LAYER_OPTIONS = PHYSICS_LAYERS.map((layer) => ({ value: layer.value, label: layer.label }));
const SET_PEN_COLORS = ["#2f8f83", "#e76f51", "#f4a261", "#264653", "#ffd166", "#ef476f", "#ffffff", "#2c1d14"];
const DRAWING_CLOSE_DISTANCE = 18;
const MUSIC_MAKER_COLUMNS = 16;
const MUSIC_MAKER_TRACKS = [
  { type: "note", label: "C6", frequency: 1046.5, color: "#ef476f" },
  { type: "note", label: "A5", frequency: 880, color: "#f78c6b" },
  { type: "note", label: "G5", frequency: 783.99, color: "#ffd166" },
  { type: "note", label: "E5", frequency: 659.25, color: "#8ac926" },
  { type: "note", label: "C5", frequency: 523.25, color: "#06d6a0" },
  { type: "note", label: "A4", frequency: 440, color: "#4cc9f0" },
  { type: "note", label: "G4", frequency: 392, color: "#4895ef" },
  { type: "note", label: "E4", frequency: 329.63, color: "#4361ee" },
  { type: "note", label: "C4", frequency: 261.63, color: "#7209b7" },
  { type: "note", label: "A3", frequency: 220, color: "#b5179e" },
  { type: "note", label: "G3", frequency: 196, color: "#9b5de5" },
  { type: "note", label: "C3", frequency: 130.81, color: "#577590" },
  { type: "snare", label: "Snare", color: "#f4a261" },
  { type: "bass", label: "Bass", color: "#2c1d14" },
];
const MUSIC_MAKER_ROWS = MUSIC_MAKER_TRACKS.length;
const SCRIPT_GROUPS = [
  { id: "scene", name: "Scene" },
  { id: "motion", name: "Motion" },
  { id: "animation", name: "Animation" },
  { id: "timing", name: "Timing" },
  { id: "physics", name: "Physics" },
  { id: "sound", name: "Sound" },
  { id: "control", name: "Control" },
];
const SCRIPT_BLOCK_DEFS = [
  {
    type: "set_scene_lighting",
    category: "scene",
    title: "Set Lighting",
    copy: "Set the scene lighting color and strength.",
    params: [
      { name: "color", label: "Color", input: "color" },
      { name: "strength", label: "Light %", input: "number", min: 0, max: 100, step: 5 },
    ],
    sceneOnly: true,
  },
  {
    type: "fade_scene_lighting",
    category: "scene",
    title: "Fade Lighting",
    copy: "Fade the scene lighting to a color over time.",
    params: [
      { name: "color", label: "Color", input: "color" },
      { name: "strength", label: "Light %", input: "number", min: 0, max: 100, step: 5 },
      { name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 20, step: 0.1 },
    ],
    sceneOnly: true,
  },
  {
    type: "clear_scene_lighting",
    category: "scene",
    title: "Clear Lighting",
    copy: "Remove the current scene lighting overlay.",
    params: [],
    sceneOnly: true,
  },
  {
    type: "change_light_color_brightness",
    category: "scene",
    title: "Change Light Brightness/Color",
    copy: "Immediately change the stage light tint and brightness.",
    params: [
      { name: "color", label: "Color", input: "color" },
      { name: "strength", label: "Light %", input: "number", min: 0, max: 100, step: 5 },
    ],
    sceneOnly: true,
  },
  {
    type: "spawn_actor",
    category: "scene",
    title: "Spawn Actor",
    copy: "Create a new character on the main stage.",
    params: [
      { name: "actorSubtype", label: "Actor", input: "actorSubtype" },
      { name: "x", label: "X", input: "number", min: 0, max: 2000, step: 1 },
      { name: "y", label: "Y", input: "number", min: 0, max: 2000, step: 1 },
    ],
    sceneOnly: true,
  },
  {
    type: "add_light_source",
    category: "scene",
    title: "Add Light Source",
    copy: "Add a movable sun or moon light to the active set.",
    params: [
      { name: "lightType", label: "Type", input: "select", options: [
        { value: "sun", label: "Sun" },
        { value: "moon", label: "Moon" },
      ] },
      { name: "color", label: "Tint", input: "color" },
      { name: "brightness", label: "Bright %", input: "number", min: 0, max: 100, step: 5 },
    ],
    sceneOnly: true,
  },
  {
    type: "change_set",
    category: "scene",
    title: "Change Set",
    copy: "Switch the movie to another saved set.",
    params: [{ name: "setId", label: "Set", input: "setSelect" }],
    sceneOnly: true,
  },
  {
    type: "transfer_character_to_set",
    category: "scene",
    title: "Transfer To Set",
    copy: "Move the current actor into a selected set.",
    params: [{ name: "setId", label: "Set", input: "setSelect" }],
  },
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
    type: "return_to_spawn",
    category: "motion",
    title: "Return To Spawning Point",
    copy: "Move this actor back to where it was first placed.",
    params: [],
  },
  {
    type: "play_animation_chunk",
    category: "animation",
    title: "Play Animation Chunk",
    copy: "Run a named reusable animation chunk.",
    params: [{ name: "chunkId", label: "Chunk", input: "animationChunkSelect" }],
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
    type: "rotate_by_degrees",
    category: "animation",
    title: "Rotate By Degrees",
    copy: "Turn this actor by a number of degrees from its current rotation.",
    params: [{ name: "degrees", label: "Degrees", input: "number", min: -720, max: 720, step: 5 }],
  },
  {
    type: "set_rotation_degrees",
    category: "animation",
    title: "Set Rotation",
    copy: "Set this actor to an exact rotation in degrees.",
    params: [{ name: "degrees", label: "Degrees", input: "number", min: -360, max: 360, step: 5 }],
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
    type: "delay_seconds",
    category: "timing",
    title: "Delay By Seconds",
    copy: "Delay this script by a chosen number of seconds before continuing.",
    params: [{ name: "seconds", label: "Seconds", input: "number", min: 0.1, max: 60, step: 0.1 }],
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
    type: "physics_on",
    category: "physics",
    title: "Turn Physics On",
    copy: "Enable stage physics.",
    params: [],
    sceneOnly: true,
  },
  {
    type: "physics_off",
    category: "physics",
    title: "Turn Physics Off",
    copy: "Disable stage physics.",
    params: [],
    sceneOnly: true,
  },
  {
    type: "gravity_on",
    category: "physics",
    title: "Turn Gravity On",
    copy: "Enable global gravity.",
    params: [],
    sceneOnly: true,
  },
  {
    type: "gravity_off",
    category: "physics",
    title: "Turn Gravity Off",
    copy: "Disable global gravity.",
    params: [],
    sceneOnly: true,
  },
  {
    type: "set_gravity_strength",
    category: "physics",
    title: "Set Gravity Strength",
    copy: "Set the global gravity strength.",
    params: [{ name: "strength", label: "Strength", input: "number", min: 0, max: 3000, step: 25 }],
    sceneOnly: true,
  },
  {
    type: "set_gravity_direction",
    category: "physics",
    title: "Set Gravity Direction",
    copy: "Point gravity in a new direction.",
    params: [{ name: "direction", label: "Direction", input: "select", options: PHYSICS_DIRECTION_OPTIONS }],
    sceneOnly: true,
  },
  {
    type: "enable_object_physics",
    category: "physics",
    title: "Enable Physics For Object",
    copy: "Enable physics on this object.",
    params: [],
  },
  {
    type: "disable_object_physics",
    category: "physics",
    title: "Disable Physics For Object",
    copy: "Disable physics on this object.",
    params: [],
  },
  {
    type: "enable_character_physics",
    category: "physics",
    title: "Enable Physics For Character",
    copy: "Enable physics on this character.",
    params: [],
  },
  {
    type: "disable_character_physics",
    category: "physics",
    title: "Disable Physics For Character",
    copy: "Disable physics on this character.",
    params: [],
  },
  {
    type: "apply_force_object",
    category: "physics",
    title: "Apply Force To Object",
    copy: "Push this object using a continuous force.",
    params: [
      { name: "x", label: "Force X", input: "number", min: -4000, max: 4000, step: 25 },
      { name: "y", label: "Force Y", input: "number", min: -4000, max: 4000, step: 25 },
    ],
  },
  {
    type: "apply_force_character",
    category: "physics",
    title: "Apply Force To Character",
    copy: "Push this character using a continuous force.",
    params: [
      { name: "x", label: "Force X", input: "number", min: -4000, max: 4000, step: 25 },
      { name: "y", label: "Force Y", input: "number", min: -4000, max: 4000, step: 25 },
    ],
  },
  {
    type: "apply_impulse_object",
    category: "physics",
    title: "Apply Impulse To Object",
    copy: "Give this object a sudden burst of momentum.",
    params: [
      { name: "x", label: "Impulse X", input: "number", min: -4000, max: 4000, step: 25 },
      { name: "y", label: "Impulse Y", input: "number", min: -4000, max: 4000, step: 25 },
    ],
  },
  {
    type: "apply_impulse_character",
    category: "physics",
    title: "Apply Impulse To Character",
    copy: "Give this character a sudden burst of momentum.",
    params: [
      { name: "x", label: "Impulse X", input: "number", min: -4000, max: 4000, step: 25 },
      { name: "y", label: "Impulse Y", input: "number", min: -4000, max: 4000, step: 25 },
    ],
  },
  {
    type: "set_object_velocity",
    category: "physics",
    title: "Set Object Velocity",
    copy: "Set this object's exact velocity.",
    params: [
      { name: "x", label: "Vel X", input: "number", min: -2500, max: 2500, step: 10 },
      { name: "y", label: "Vel Y", input: "number", min: -2500, max: 2500, step: 10 },
    ],
  },
  {
    type: "set_character_velocity",
    category: "physics",
    title: "Set Character Velocity",
    copy: "Set this character's exact velocity.",
    params: [
      { name: "x", label: "Vel X", input: "number", min: -2500, max: 2500, step: 10 },
      { name: "y", label: "Vel Y", input: "number", min: -2500, max: 2500, step: 10 },
    ],
  },
  {
    type: "set_object_mass",
    category: "physics",
    title: "Set Object Mass",
    copy: "Set this object's mass.",
    params: [{ name: "mass", label: "Mass", input: "number", min: 0.1, max: 100, step: 0.1 }],
  },
  {
    type: "set_character_mass",
    category: "physics",
    title: "Set Character Mass",
    copy: "Set this character's mass.",
    params: [{ name: "mass", label: "Mass", input: "number", min: 0.1, max: 100, step: 0.1 }],
  },
  {
    type: "set_object_density",
    category: "physics",
    title: "Set Object Density",
    copy: "Set this object's density.",
    params: [{ name: "density", label: "Density", input: "number", min: 0.1, max: 10, step: 0.1 }],
  },
  {
    type: "set_character_density",
    category: "physics",
    title: "Set Character Density",
    copy: "Set this character's density.",
    params: [{ name: "density", label: "Density", input: "number", min: 0.1, max: 10, step: 0.1 }],
  },
  {
    type: "set_friction",
    category: "physics",
    title: "Set Friction",
    copy: "Set the actor friction level.",
    params: [{ name: "amount", label: "Friction", input: "number", min: 0, max: 1, step: 0.05 }],
  },
  {
    type: "set_bounciness",
    category: "physics",
    title: "Set Bounciness",
    copy: "Set the actor bounce level.",
    params: [{ name: "amount", label: "Bounce", input: "number", min: 0, max: 1, step: 0.05 }],
  },
  {
    type: "freeze_object",
    category: "physics",
    title: "Freeze Object",
    copy: "Freeze this object in place.",
    params: [],
  },
  {
    type: "freeze_character",
    category: "physics",
    title: "Freeze Character",
    copy: "Freeze this character in place.",
    params: [],
  },
  {
    type: "unfreeze_object",
    category: "physics",
    title: "Unfreeze Object",
    copy: "Let this object move again.",
    params: [],
  },
  {
    type: "unfreeze_character",
    category: "physics",
    title: "Unfreeze Character",
    copy: "Let this character move again.",
    params: [],
  },
  {
    type: "make_object_static",
    category: "physics",
    title: "Make Object Static",
    copy: "Turn this object into a static body.",
    params: [],
  },
  {
    type: "make_object_dynamic",
    category: "physics",
    title: "Make Object Dynamic",
    copy: "Turn this object into a dynamic body.",
    params: [],
  },
  {
    type: "make_object_kinematic",
    category: "physics",
    title: "Make Object Kinematic",
    copy: "Turn this object into a kinematic body.",
    params: [],
  },
  {
    type: "make_character_static",
    category: "physics",
    title: "Make Character Static",
    copy: "Turn this character into a static body.",
    params: [],
  },
  {
    type: "make_character_dynamic",
    category: "physics",
    title: "Make Character Dynamic",
    copy: "Turn this character into a dynamic body.",
    params: [],
  },
  {
    type: "make_character_kinematic",
    category: "physics",
    title: "Make Character Kinematic",
    copy: "Turn this character into a kinematic body.",
    params: [],
  },
  {
    type: "toggle_collision",
    category: "physics",
    title: "Collision On / Off",
    copy: "Toggle collisions for this actor.",
    params: [{ name: "enabled", label: "Collision", input: "select", options: COLLISION_TOGGLE_OPTIONS }],
  },
  {
    type: "set_object_trigger_on",
    category: "physics",
    title: "Set Object Trigger On",
    copy: "Turn this object into a trigger / sensor body.",
    params: [],
  },
  {
    type: "set_object_trigger_off",
    category: "physics",
    title: "Set Object Trigger Off",
    copy: "Turn off trigger / sensor mode for this object.",
    params: [],
  },
  {
    type: "set_character_trigger_on",
    category: "physics",
    title: "Set Character Trigger On",
    copy: "Turn this character into a trigger / sensor body.",
    params: [],
  },
  {
    type: "set_character_trigger_off",
    category: "physics",
    title: "Set Character Trigger Off",
    copy: "Turn off trigger / sensor mode for this character.",
    params: [],
  },
  {
    type: "set_object_layer",
    category: "physics",
    title: "Set Object Layer",
    copy: "Move this object onto a chosen collision layer.",
    params: [{ name: "layer", label: "Layer", input: "select", options: PHYSICS_LAYER_OPTIONS }],
  },
  {
    type: "set_character_layer",
    category: "physics",
    title: "Set Character Layer",
    copy: "Move this character onto a chosen collision layer.",
    params: [{ name: "layer", label: "Layer", input: "select", options: PHYSICS_LAYER_OPTIONS }],
  },
  {
    type: "set_object_collision_mask",
    category: "physics",
    title: "Set Object Collision Mask",
    copy: "Choose which layers this object collides with or detects.",
    params: [{ name: "mask", label: "Mask", input: "layerMask" }],
  },
  {
    type: "set_character_collision_mask",
    category: "physics",
    title: "Set Character Collision Mask",
    copy: "Choose which layers this character collides with or detects.",
    params: [{ name: "mask", label: "Mask", input: "layerMask" }],
  },
  {
    type: "enable_collision_between_layers",
    category: "physics",
    title: "Enable Layer Collision",
    copy: "Allow two global layers to collide and trigger each other.",
    params: [
      { name: "layerA", label: "Layer A", input: "select", options: PHYSICS_LAYER_OPTIONS },
      { name: "layerB", label: "Layer B", input: "select", options: PHYSICS_LAYER_OPTIONS },
    ],
    sceneOnly: true,
  },
  {
    type: "disable_collision_between_layers",
    category: "physics",
    title: "Disable Layer Collision",
    copy: "Prevent two global layers from colliding or triggering each other.",
    params: [
      { name: "layerA", label: "Layer A", input: "select", options: PHYSICS_LAYER_OPTIONS },
      { name: "layerB", label: "Layer B", input: "select", options: PHYSICS_LAYER_OPTIONS },
    ],
    sceneOnly: true,
  },
  {
    type: "stop_object_momentum",
    category: "physics",
    title: "Stop Object",
    copy: "Destroy this object's momentum.",
    params: [],
  },
  {
    type: "stop_character_momentum",
    category: "physics",
    title: "Stop Character",
    copy: "Destroy this character's momentum.",
    params: [],
  },
  {
    type: "when_actor_enters_trigger",
    category: "physics",
    title: "When Actor Enters Trigger",
    copy: "Run when this actor enters a trigger, or when another actor enters this actor if it is a trigger.",
    params: [],
    allowsChildren: true,
    trigger: true,
  },
  {
    type: "when_actor_exits_trigger",
    category: "physics",
    title: "When Actor Exits Trigger",
    copy: "Run when this actor leaves a trigger, or when another actor exits this actor if it is a trigger.",
    params: [],
    allowsChildren: true,
    trigger: true,
  },
  {
    type: "if_actor_overlapping_trigger",
    category: "physics",
    title: "If Overlapping Trigger",
    copy: "Only run the blocks inside while this actor is touching at least one compatible trigger.",
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
    title: "Play Audio",
    copy: "Play built-in audio or a saved item from the Audio library.",
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
    type: "remove_character",
    category: "control",
    title: "Remove Character",
    copy: "Remove this actor, or its whole group, from the scene.",
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
const ACTOR_SPECIFIC_PHYSICS_BLOCK_KINDS = new Map([
  ["enable_object_physics", "object"],
  ["disable_object_physics", "object"],
  ["apply_force_object", "object"],
  ["apply_impulse_object", "object"],
  ["set_object_velocity", "object"],
  ["set_object_mass", "object"],
  ["set_object_density", "object"],
  ["freeze_object", "object"],
  ["unfreeze_object", "object"],
  ["make_object_static", "object"],
  ["make_object_dynamic", "object"],
  ["make_object_kinematic", "object"],
  ["set_object_trigger_on", "object"],
  ["set_object_trigger_off", "object"],
  ["set_object_layer", "object"],
  ["set_object_collision_mask", "object"],
  ["stop_object_momentum", "object"],
  ["enable_character_physics", "character"],
  ["disable_character_physics", "character"],
  ["apply_force_character", "character"],
  ["apply_impulse_character", "character"],
  ["set_character_velocity", "character"],
  ["set_character_mass", "character"],
  ["set_character_density", "character"],
  ["freeze_character", "character"],
  ["unfreeze_character", "character"],
  ["make_character_static", "character"],
  ["make_character_dynamic", "character"],
  ["make_character_kinematic", "character"],
  ["set_character_trigger_on", "character"],
  ["set_character_trigger_off", "character"],
  ["set_character_layer", "character"],
  ["set_character_collision_mask", "character"],
  ["stop_character_momentum", "character"],
]);
const ACTOR_SPECIFIC_PHYSICS_BLOCK_TITLES = new Map([
  ["enable_object_physics", "Enable Physics"],
  ["disable_object_physics", "Disable Physics"],
  ["enable_character_physics", "Enable Physics"],
  ["disable_character_physics", "Disable Physics"],
  ["apply_force_object", "Apply Force"],
  ["apply_force_character", "Apply Force"],
  ["apply_impulse_object", "Apply Impulse"],
  ["apply_impulse_character", "Apply Impulse"],
  ["set_object_velocity", "Set Velocity"],
  ["set_character_velocity", "Set Velocity"],
  ["set_object_mass", "Set Mass"],
  ["set_character_mass", "Set Mass"],
  ["set_object_density", "Set Density"],
  ["set_character_density", "Set Density"],
  ["freeze_object", "Freeze"],
  ["freeze_character", "Freeze"],
  ["unfreeze_object", "Unfreeze"],
  ["unfreeze_character", "Unfreeze"],
  ["make_object_static", "Make Static"],
  ["make_character_static", "Make Static"],
  ["make_object_dynamic", "Make Dynamic"],
  ["make_character_dynamic", "Make Dynamic"],
  ["make_object_kinematic", "Make Kinematic"],
  ["make_character_kinematic", "Make Kinematic"],
  ["set_object_trigger_on", "Trigger Mode On"],
  ["set_character_trigger_on", "Trigger Mode On"],
  ["set_object_trigger_off", "Trigger Mode Off"],
  ["set_character_trigger_off", "Trigger Mode Off"],
  ["set_object_layer", "Set Layer"],
  ["set_character_layer", "Set Layer"],
  ["set_object_collision_mask", "Set Collision Mask"],
  ["set_character_collision_mask", "Set Collision Mask"],
  ["stop_object_momentum", "Stop Momentum"],
  ["stop_character_momentum", "Stop Momentum"],
]);

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
  set: new Map(),
  builder: new Map(),
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
  globalUndoButton: document.querySelector("#globalUndoButton"),
  characterList: document.querySelector("#characterList"),
  textureList: document.querySelector("#textureList"),
  objectList: document.querySelector("#objectList"),
  createCharacterButton: document.querySelector("#createCharacterButton"),
  createObjectButton: document.querySelector("#createObjectButton"),
  importCharacterButton: document.querySelector("#importCharacterButton"),
  importTextureButton: document.querySelector("#importTextureButton"),
  createTextureButton: document.querySelector("#createTextureButton"),
  editTextureButton: document.querySelector("#editTextureButton"),
  importObjectButton: document.querySelector("#importObjectButton"),
  physicsToggleButton: document.querySelector("#physicsToggleButton"),
  gravityToggleButton: document.querySelector("#gravityToggleButton"),
  physicsSettingsButton: document.querySelector("#physicsSettingsButton"),
  physicsStatusLabel: document.querySelector("#physicsStatusLabel"),
  physicsSettingsPanel: document.querySelector("#physicsSettingsPanel"),
  physicsGravityStrength: document.querySelector("#physicsGravityStrength"),
  physicsGravityDirection: document.querySelector("#physicsGravityDirection"),
  physicsAirDrag: document.querySelector("#physicsAirDrag"),
  physicsBounceDefault: document.querySelector("#physicsBounceDefault"),
  physicsFrictionDefault: document.querySelector("#physicsFrictionDefault"),
  physicsTimeScale: document.querySelector("#physicsTimeScale"),
  physicsSolverIterations: document.querySelector("#physicsSolverIterations"),
  physicsSleeping: document.querySelector("#physicsSleeping"),
  physicsWorldBounds: document.querySelector("#physicsWorldBounds"),
  physicsDebugView: document.querySelector("#physicsDebugView"),
  physicsTriggerDebugView: document.querySelector("#physicsTriggerDebugView"),
  physicsLayerDebugView: document.querySelector("#physicsLayerDebugView"),
  physicsOverlapDebugView: document.querySelector("#physicsOverlapDebugView"),
  physicsLayerMatrix: document.querySelector("#physicsLayerMatrix"),
  importStageButton: document.querySelector("#importStageButton"),
  importCharacterInput: document.querySelector("#importCharacterInput"),
  importTextureInput: document.querySelector("#importTextureInput"),
  importObjectInput: document.querySelector("#importObjectInput"),
  importStageInput: document.querySelector("#importStageInput"),
  importMusicInput: document.querySelector("#importMusicInput"),
  importAudioInput: document.querySelector("#importAudioInput"),
  characterBuilderImportInput: document.querySelector("#characterBuilderImportInput"),
  textureEditorPanel: document.querySelector("#textureEditorPanel"),
  textureEditorTitle: document.querySelector("#textureEditorTitle"),
  textureEditorCanvas: document.querySelector("#textureEditorCanvas"),
  textureEditorColor: document.querySelector("#textureEditorColor"),
  closeTextureEditorButton: document.querySelector("#closeTextureEditorButton"),
  saveTextureEditorButton: document.querySelector("#saveTextureEditorButton"),
  actorContextMenu: document.querySelector("#actorContextMenu"),
  actorContextCodeButton: document.querySelector("#actorContextCodeButton"),
  actorContextPenButton: document.querySelector("#actorContextPenButton"),
  actorContextEditCharacterButton: document.querySelector("#actorContextEditCharacterButton"),
  actorContextPhysicsToggleButton: document.querySelector("#actorContextPhysicsToggleButton"),
  actorContextPhysicsButton: document.querySelector("#actorContextPhysicsButton"),
  actorContextGroupButton: document.querySelector("#actorContextGroupButton"),
  actorContextUngroupButton: document.querySelector("#actorContextUngroupButton"),
  actorContextColor: document.querySelector("#actorContextColor"),
  drawingContextMenu: document.querySelector("#drawingContextMenu"),
  drawingContextDeleteButton: document.querySelector("#drawingContextDeleteButton"),
  objectPhysicsPanel: document.querySelector("#objectPhysicsPanel"),
  objectPhysicsTitle: document.querySelector("#objectPhysicsTitle"),
  closeObjectPhysicsButton: document.querySelector("#closeObjectPhysicsButton"),
  objectPhysicsEnabled: document.querySelector("#objectPhysicsEnabled"),
  objectPhysicsGravity: document.querySelector("#objectPhysicsGravity"),
  objectPhysicsBodyType: document.querySelector("#objectPhysicsBodyType"),
  objectPhysicsMass: document.querySelector("#objectPhysicsMass"),
  objectPhysicsDensity: document.querySelector("#objectPhysicsDensity"),
  objectPhysicsFriction: document.querySelector("#objectPhysicsFriction"),
  objectPhysicsBounce: document.querySelector("#objectPhysicsBounce"),
  objectPhysicsLinearDrag: document.querySelector("#objectPhysicsLinearDrag"),
  objectPhysicsAngularDrag: document.querySelector("#objectPhysicsAngularDrag"),
  objectPhysicsLockRotation: document.querySelector("#objectPhysicsLockRotation"),
  objectPhysicsLockX: document.querySelector("#objectPhysicsLockX"),
  objectPhysicsLockY: document.querySelector("#objectPhysicsLockY"),
  objectPhysicsCollision: document.querySelector("#objectPhysicsCollision"),
  objectPhysicsTrigger: document.querySelector("#objectPhysicsTrigger"),
  objectPhysicsLayer: document.querySelector("#objectPhysicsLayer"),
  objectPhysicsMask: document.querySelector("#objectPhysicsMask"),
  objectPhysicsCanGrab: document.querySelector("#objectPhysicsCanGrab"),
  objectPhysicsStartAsleep: document.querySelector("#objectPhysicsStartAsleep"),
  objectPhysicsGravityScale: document.querySelector("#objectPhysicsGravityScale"),
  objectPhysicsSummary: document.querySelector("#objectPhysicsSummary"),
  penAnimationPanel: document.querySelector("#penAnimationPanel"),
  penAnimationTitle: document.querySelector("#penAnimationTitle"),
  penAnimationDuration: document.querySelector("#penAnimationDuration"),
  penAnimationHelp: document.querySelector("#penAnimationHelp"),
  penLineToolButton: document.querySelector("#penLineToolButton"),
  penFreehandToolButton: document.querySelector("#penFreehandToolButton"),
  previewPenAnimationButton: document.querySelector("#previewPenAnimationButton"),
  deletePenAnimationButton: document.querySelector("#deletePenAnimationButton"),
  closePenAnimationButton: document.querySelector("#closePenAnimationButton"),
  stagePenColor: document.querySelector("#stagePenColor"),
  stageDrawButton: document.querySelector("#stageDrawButton"),
  stageFillColor: document.querySelector("#stageFillColor"),
  stageBucketButton: document.querySelector("#stageBucketButton"),
  importAudioButton: document.querySelector("#importAudioButton"),
  recordMicButton: document.querySelector("#recordMicButton"),
  stopMicButton: document.querySelector("#stopMicButton"),
  audioCountdownLabel: document.querySelector("#audioCountdownLabel"),
  musicMakerCard: document.querySelector("#musicMakerCard"),
  expandMusicMakerButton: document.querySelector("#expandMusicMakerButton"),
  musicMakerName: document.querySelector("#musicMakerName"),
  musicMakerGrid: document.querySelector("#musicMakerGrid"),
  previewMusicMakerButton: document.querySelector("#previewMusicMakerButton"),
  saveMusicMakerButton: document.querySelector("#saveMusicMakerButton"),
  audioLibraryList: document.querySelector("#audioLibraryList"),
  scriptsModule: document.querySelector("#scriptsModule"),
  scriptsModuleCloseButton: document.querySelector("#scriptsModuleCloseButton"),
  stageModule: document.querySelector("#stageModule"),
  stageModuleCloseButton: document.querySelector("#stageModuleCloseButton"),
  characterBuilderModule: document.querySelector("#characterBuilderModule"),
  characterBuilderCanvas: document.querySelector("#characterBuilderCanvas"),
  characterBuilderTitle: document.querySelector("#characterBuilderTitle"),
  characterBuilderLabel: document.querySelector("#characterBuilderLabel"),
  characterBuilderNameLabel: document.querySelector("#characterBuilderNameLabel"),
  characterBuilderName: document.querySelector("#characterBuilderName"),
  saveCharacterBuilderButton: document.querySelector("#saveCharacterBuilderButton"),
  closeCharacterBuilderButton: document.querySelector("#closeCharacterBuilderButton"),
  characterBuilderSelectButton: document.querySelector("#characterBuilderSelectButton"),
  characterBuilderPenButton: document.querySelector("#characterBuilderPenButton"),
  characterBuilderImportButton: document.querySelector("#characterBuilderImportButton"),
  characterBuilderPenColor: document.querySelector("#characterBuilderPenColor"),
  characterBuilderFillColor: document.querySelector("#characterBuilderFillColor"),
  characterBuilderBucketButton: document.querySelector("#characterBuilderBucketButton"),
  characterBuilderObjectList: document.querySelector("#characterBuilderObjectList"),
  characterBuilderTextureList: document.querySelector("#characterBuilderTextureList"),
  setEditorLabel: document.querySelector("#setEditorLabel"),
  sceneList: document.querySelector("#sceneList"),
  addSceneButton: document.querySelector("#addSceneButton"),
  setList: document.querySelector("#setList"),
  addSetButton: document.querySelector("#addSetButton"),
  setCanvas: document.querySelector("#setCanvas"),
  setCharacterList: document.querySelector("#setCharacterList"),
  setObjectList: document.querySelector("#setObjectList"),
  setTextureList: document.querySelector("#setTextureList"),
  setToolTabs: [...document.querySelectorAll(".set-tool-tab")],
  setPenControls: document.querySelector("#setPenControls"),
  setBaseColors: document.querySelector("#setBaseColors"),
  setPenColor: document.querySelector("#setPenColor"),
  setFillColor: document.querySelector("#setFillColor"),
  setUsePenButton: document.querySelector("#setUsePenButton"),
  setUseBucketButton: document.querySelector("#setUseBucketButton"),
  setLightControls: document.querySelector("#setLightControls"),
  setAddLightButton: document.querySelector("#setAddLightButton"),
  setLightType: document.querySelector("#setLightType"),
  setLightColor: document.querySelector("#setLightColor"),
  setLightBrightness: document.querySelector("#setLightBrightness"),
  setMiniCodePanel: document.querySelector("#setMiniCodePanel"),
  setMiniCodeCloseButton: document.querySelector("#setMiniCodeCloseButton"),
  setMiniCodeTitle: document.querySelector("#setMiniCodeTitle"),
  setMiniCodePalette: document.querySelector("#setMiniCodePalette"),
  setMiniCodeWorkspace: document.querySelector("#setMiniCodeWorkspace"),
  setActorContextMenu: document.querySelector("#setActorContextMenu"),
  setActorContextCodeButton: document.querySelector("#setActorContextCodeButton"),
  setActorContextPenButton: document.querySelector("#setActorContextPenButton"),
  setActorContextPhysicsToggleButton: document.querySelector("#setActorContextPhysicsToggleButton"),
  setActorContextPhysicsButton: document.querySelector("#setActorContextPhysicsButton"),
  setDrawingContextMenu: document.querySelector("#setDrawingContextMenu"),
  setDrawingContextDeleteButton: document.querySelector("#setDrawingContextDeleteButton"),
  scriptActorLabel: document.querySelector("#scriptActorLabel"),
  scriptActorList: document.querySelector("#scriptActorList"),
  scriptCategoryTabs: document.querySelector("#scriptCategoryTabs"),
  scriptPalette: document.querySelector("#scriptPalette"),
  scriptWorkspace: document.querySelector("#scriptWorkspace"),
  scriptBlockInfo: document.querySelector("#scriptBlockInfo"),
  libraryList: document.querySelector("#libraryList"),
  libraryVideo: document.querySelector("#libraryVideo"),
  libraryMeta: document.querySelector("#libraryMeta"),
  emptyLibraryState: document.querySelector("#emptyLibraryState"),
  panelButtons: [...document.querySelectorAll(".sidebar-tab")],
  panels: {
    characters: document.querySelector("#charactersPanel"),
    textures: document.querySelector("#texturesPanel"),
    objects: document.querySelector("#objectsPanel"),
    draw: document.querySelector("#drawPanel"),
    audio: document.querySelector("#audioPanel"),
    camera: document.querySelector("#cameraPanel"),
  },
};

const textureMap = new Map(TEXTURE_DEFS.map((texture) => [texture.id, texture]));
const characterMap = new Map(CHARACTER_DEFS.map((character) => [character.id, character]));
const objectMap = new Map(OBJECT_DEFS.map((objectDef) => [objectDef.id, objectDef]));
const importedImageCache = new Map();
const setCanvas = elements.setCanvas;
const setFrame = setCanvas.parentElement;
const setCtx = setCanvas.getContext("2d");
const textureEditorCtx = elements.textureEditorCanvas.getContext("2d");
const characterBuilderCanvas = elements.characterBuilderCanvas;
const characterBuilderCtx = characterBuilderCanvas.getContext("2d");
let currentRenderFlags = {
  showPhysicsBadges: true,
  showPhysicsDebug: false,
};

function createDefaultPhysicsSettings() {
  return {
    enabled: false,
    gravityEnabled: true,
    showGlobalSettings: false,
    objectEditorItemId: null,
    statusMessage: "",
    accumulator: 0,
    settings: {
      gravityStrength: 1200,
      gravityDirection: "down",
      airDrag: 0.08,
      defaultRestitution: 0.18,
      defaultFriction: 0.55,
      timeScale: 1,
      solverIterations: 3,
      sleeping: true,
      worldBounds: true,
      debugView: false,
      triggerDebugView: false,
      layerDebugView: false,
      overlapDebugView: false,
      layerRules: createDefaultPhysicsLayerRules(),
      maxObjects: 60,
    },
    activeTriggerPairs: new Set(),
    pendingTriggerEvents: [],
    debugTriggerPairs: [],
    debugCollisionPairs: [],
  };
}

function getDefaultPhysicsLayer(kind, triggerMode = false) {
  if (triggerMode) {
    return "trigger";
  }
  if (kind === "character") {
    return "characters";
  }
  if (kind === "object") {
    return "objects";
  }
  return "default";
}

function createDefaultPhysicsLayerRules() {
  const rules = {};
  for (let index = 0; index < PHYSICS_LAYERS.length; index += 1) {
    for (let otherIndex = index; otherIndex < PHYSICS_LAYERS.length; otherIndex += 1) {
      const key = [PHYSICS_LAYERS[index].value, PHYSICS_LAYERS[otherIndex].value].sort().join("|");
      rules[key] = true;
    }
  }
  return rules;
}

function normalizePhysicsLayer(layer, kind, triggerMode = false) {
  return PHYSICS_LAYERS.some((entry) => entry.value === layer) ? layer : getDefaultPhysicsLayer(kind, triggerMode);
}

function normalizePhysicsCollisionMask(mask) {
  const allLayers = PHYSICS_LAYERS.map((layer) => layer.value);
  const uniqueMask = Array.isArray(mask)
    ? Array.from(new Set(mask.filter((value) => allLayers.includes(value))))
    : [];
  return uniqueMask.length > 0 ? uniqueMask : [...allLayers];
}

function normalizePhysicsLayerRules(rules) {
  const defaults = createDefaultPhysicsLayerRules();
  const result = { ...defaults };
  if (!rules || typeof rules !== "object") {
    return result;
  }
  for (const key of Object.keys(defaults)) {
    if (key in rules) {
      result[key] = rules[key] !== false;
    }
  }
  return result;
}

function getPhysicsLayerMeta(layer) {
  return PHYSICS_LAYERS.find((entry) => entry.value === layer) || PHYSICS_LAYERS[0];
}

function getPhysicsLayerRuleKey(layerA, layerB) {
  return [layerA, layerB].sort().join("|");
}

function normalizeGlobalPhysicsSettings(physics) {
  const defaults = createDefaultPhysicsSettings();
  const settings = physics?.settings || {};
  return {
    ...defaults,
    enabled: Boolean(physics?.enabled),
    gravityEnabled: physics?.gravityEnabled !== false,
    showGlobalSettings: Boolean(physics?.showGlobalSettings),
    objectEditorItemId: physics?.objectEditorItemId ?? null,
    statusMessage: typeof physics?.statusMessage === "string" ? physics.statusMessage : "",
    accumulator: 0,
    settings: {
      gravityStrength: clamp(Number(settings.gravityStrength ?? defaults.settings.gravityStrength), 0, 3000),
      gravityDirection: ["down", "up", "left", "right"].includes(settings.gravityDirection) ? settings.gravityDirection : "down",
      airDrag: clamp(Number(settings.airDrag ?? defaults.settings.airDrag), 0, 4),
      defaultRestitution: clamp(Number(settings.defaultRestitution ?? defaults.settings.defaultRestitution), 0, 1),
      defaultFriction: clamp(Number(settings.defaultFriction ?? defaults.settings.defaultFriction), 0, 1),
      timeScale: clamp(Number(settings.timeScale ?? defaults.settings.timeScale), 0.25, 2),
      solverIterations: clamp(Math.round(Number(settings.solverIterations ?? defaults.settings.solverIterations)), 1, 8),
      sleeping: settings.sleeping !== false,
      worldBounds: settings.worldBounds !== false,
      debugView: Boolean(settings.debugView),
      triggerDebugView: Boolean(settings.triggerDebugView),
      layerDebugView: Boolean(settings.layerDebugView),
      overlapDebugView: Boolean(settings.overlapDebugView),
      layerRules: normalizePhysicsLayerRules(settings.layerRules),
      maxObjects: defaults.settings.maxObjects,
    },
    activeTriggerPairs: new Set(),
    pendingTriggerEvents: [],
    debugTriggerPairs: [],
    debugCollisionPairs: [],
  };
}

function serializeGlobalPhysicsSettings(physics) {
  return {
    enabled: physics.enabled,
    gravityEnabled: physics.gravityEnabled,
    settings: {
      gravityStrength: physics.settings.gravityStrength,
      gravityDirection: physics.settings.gravityDirection,
      airDrag: physics.settings.airDrag,
      defaultRestitution: physics.settings.defaultRestitution,
      defaultFriction: physics.settings.defaultFriction,
      timeScale: physics.settings.timeScale,
      solverIterations: physics.settings.solverIterations,
      sleeping: physics.settings.sleeping,
      worldBounds: physics.settings.worldBounds,
      debugView: physics.settings.debugView,
      triggerDebugView: physics.settings.triggerDebugView,
      layerDebugView: physics.settings.layerDebugView,
      overlapDebugView: physics.settings.overlapDebugView,
      layerRules: { ...physics.settings.layerRules },
    },
  };
}

function createDefaultObjectPhysics(kind = "object") {
  const settings = createDefaultPhysicsSettings().settings;
  return {
    enabled: kind === "object",
    gravityAffected: true,
    bodyType: "dynamic",
    mass: 1,
    density: 1,
    friction: settings.defaultFriction,
    restitution: settings.defaultRestitution,
    linearDrag: settings.airDrag,
    angularDrag: 0.6,
    rotationLocked: false,
    lockX: false,
    lockY: false,
    collisionEnabled: true,
    triggerMode: false,
    layer: getDefaultPhysicsLayer(kind, false),
    collisionMask: PHYSICS_LAYERS.map((layer) => layer.value),
    canGrab: true,
    startAsleep: false,
    gravityScale: 1,
    frozen: false,
  };
}

function normalizeObjectPhysics(physics, kind) {
  const defaults = createDefaultObjectPhysics(kind);
  const source = physics || {};
  if (kind !== "object" && kind !== "character") {
    return {
      ...defaults,
      enabled: false,
    };
  }
  return {
    enabled: typeof source.enabled === "boolean" ? source.enabled : defaults.enabled,
    gravityAffected: source.gravityAffected !== false,
    bodyType: ["static", "dynamic", "kinematic"].includes(source.bodyType) ? source.bodyType : "dynamic",
    mass: clamp(Number(source.mass ?? defaults.mass), 0.1, 100),
    density: clamp(Number(source.density ?? defaults.density), 0.1, 10),
    friction: clamp(Number(source.friction ?? defaults.friction), 0, 1),
    restitution: clamp(Number(source.restitution ?? defaults.restitution), 0, 1),
    linearDrag: clamp(Number(source.linearDrag ?? defaults.linearDrag), 0, 6),
    angularDrag: clamp(Number(source.angularDrag ?? defaults.angularDrag), 0, 12),
    rotationLocked: Boolean(source.rotationLocked),
    lockX: Boolean(source.lockX),
    lockY: Boolean(source.lockY),
    collisionEnabled: source.collisionEnabled !== false,
    triggerMode: Boolean(source.triggerMode),
    layer: normalizePhysicsLayer(source.layer, kind, Boolean(source.triggerMode)),
    collisionMask: normalizePhysicsCollisionMask(source.collisionMask),
    canGrab: source.canGrab !== false,
    startAsleep: Boolean(source.startAsleep),
    gravityScale: clamp(Number(source.gravityScale ?? defaults.gravityScale), 0, 4),
    frozen: Boolean(source.frozen),
  };
}

function serializeObjectPhysics(physics) {
  return {
    enabled: physics.enabled,
    gravityAffected: physics.gravityAffected,
    bodyType: physics.bodyType,
    mass: physics.mass,
    density: physics.density,
    friction: physics.friction,
    restitution: physics.restitution,
    linearDrag: physics.linearDrag,
    angularDrag: physics.angularDrag,
    rotationLocked: physics.rotationLocked,
    lockX: physics.lockX,
    lockY: physics.lockY,
    collisionEnabled: physics.collisionEnabled,
    triggerMode: physics.triggerMode,
    layer: physics.layer,
    collisionMask: [...physics.collisionMask],
    canGrab: physics.canGrab,
    startAsleep: physics.startAsleep,
    gravityScale: physics.gravityScale,
    frozen: physics.frozen,
  };
}

const state = {
  screen: "menu",
  stageWidth: 900,
  stageHeight: 580,
  activePanel: "characters",
  activeTool: null,
  activeScriptCategory: "scene",
  scriptEditorMode: "main",
  selectedScriptBlockId: null,
  scriptTargetId: SCENE_TARGET_ID,
  scriptsModuleOpen: false,
  stageModuleOpen: false,
  characterBuilderOpen: false,
  lastNonScriptPanel: "characters",
  scriptDrag: null,
  scriptDropTarget: null,
  scenes: [],
  activeSceneId: null,
  activeSetId: null,
  setEditorTool: "select",
  setToolSelection: {
    character: "director",
    object: "cube",
    texture: "sunset-stripe",
  },
  setSelection: new Set(),
  setSelectedItemId: null,
  setSelectedDrawingId: null,
  setSelectedLightId: null,
  setInteraction: null,
  setPointerMoved: false,
  setClipboard: {
    items: [],
    drawings: [],
  },
  setMiniCodeItemId: null,
  setContextItemId: null,
  contextDrawingId: null,
  setContextDrawingId: null,
  setPenColor: "#2f8f83",
  sceneSetId: null,
  characterBuilder: {
    editingId: null,
    assetType: "character",
    activeTool: "select",
    selectedItemId: null,
    selectedDrawingId: null,
    interaction: null,
    items: [],
    drawings: [],
    clipboard: {
      items: [],
      drawings: [],
    },
    penColor: "#2f8f83",
    fillColor: "#ffd166",
    toolSelection: {
      object: "cube",
      texture: "sunset-stripe",
    },
  },
  items: [],
  sets: [],
  customCharacters: [],
  customObjects: [],
  customTextures: [],
  customMusic: [],
  animationChunks: [],
  sceneScripts: [],
  scene: {
    lightingColor: "#fff7d6",
    lightingStrength: 0,
  },
  physics: createDefaultPhysicsSettings(),
  selection: new Set(),
  stageDrawings: [],
  stageSelectedDrawingId: null,
  clipboard: [],
  stageDrawingClipboard: [],
  selectedScriptBlockIds: new Set(),
  interaction: null,
  contextActorId: null,
  penAnimation: {
    actorId: null,
    tool: null,
    drawing: false,
    preview: null,
  },
  textureEditor: {
    textureId: null,
    drawing: false,
    pendingName: "",
  },
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
  undoStack: [],
  undoRestoring: false,
  scriptRunners: [],
  penAnimationRunners: [],
  stopAllScriptsRequested: false,
  globalVolume: 0.65,
  audio: {
    ctx: null,
    master: null,
    activeNodes: [],
    stopLooping: false,
    micRecorder: null,
    micStream: null,
    micChunks: [],
    countdownTimer: null,
    musicPreviewStops: [],
    musicMakerExpanded: false,
  },
  musicMaker: {
    cells: Array.from({ length: MUSIC_MAKER_ROWS }, () => Array.from({ length: MUSIC_MAKER_COLUMNS }, () => false)),
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
    physics: {
      vx: 0,
      vy: 0,
      angularVelocity: 0,
      asleep: false,
      sleepTimer: 0,
      dragging: false,
      controlledTimer: 0,
      previousX: 0,
      previousY: 0,
      overlapIds: new Set(),
      initialized: false,
    },
  };
}

function getCharacterDefs() {
  return [...CHARACTER_DEFS, ...state.customCharacters];
}

function getObjectDefs() {
  return [...OBJECT_DEFS, ...state.customObjects];
}

function getTextureDefs() {
  return [...TEXTURE_DEFS, ...state.customTextures];
}

function getMusicOptions() {
  return [...MUSIC_OPTIONS, ...state.customMusic.map((music) => ({ value: music.value, label: music.label || music.name || "Audio" }))];
}

function getCharacterDef(characterId) {
  return characterMap.get(characterId) || state.customCharacters.find((character) => character.id === characterId) || CHARACTER_DEFS[0];
}

function getObjectDef(objectId) {
  return objectMap.get(objectId) || state.customObjects.find((objectDef) => objectDef.id === objectId) || OBJECT_DEFS[0];
}

function getTextureDef(textureId) {
  return textureMap.get(textureId) || state.customTextures.find((texture) => texture.id === textureId) || null;
}

function getImportedImage(imageData) {
  if (!imageData) {
    return null;
  }
  if (importedImageCache.has(imageData)) {
    return importedImageCache.get(imageData);
  }
  const image = new Image();
  image.src = imageData;
  image.onload = () => {
    patternCaches.stage.clear();
    patternCaches.recording.clear();
    patternCaches.set.clear();
    patternCaches.builder.clear();
  };
  importedImageCache.set(imageData, image);
  return image;
}

function normalizePenAnimation(animation) {
  if (!animation) {
    return null;
  }
  return {
    type: animation.type === "line" ? "line" : "freehand",
    duration: clamp(Number(animation.duration || 2), 0.1, 60),
    points: Array.isArray(animation.points)
      ? animation.points.map((point) => ({ x: Number(point.x || 0), y: Number(point.y || 0) }))
      : [],
  };
}

function serializePenAnimation(animation) {
  return {
    type: animation.type,
    duration: animation.duration,
    points: animation.points.map((point) => ({ x: point.x, y: point.y })),
  };
}

function normalizeItem(item) {
  const physics = normalizeObjectPhysics(item.physics, item.kind);
  const runtime = createItemRuntime();
  runtime.physics.asleep = physics.startAsleep;
  return {
    ...item,
    facing: item.facing === -1 ? -1 : 1,
    sizePct: typeof item.sizePct === "number" ? item.sizePct : 100,
    scaleX: typeof item.scaleX === "number" ? item.scaleX : 1,
    scaleY: typeof item.scaleY === "number" ? item.scaleY : 1,
    spawnX: typeof item.spawnX === "number" ? item.spawnX : item.x,
    spawnY: typeof item.spawnY === "number" ? item.spawnY : item.y,
    color: item.color || null,
    groupId: item.groupId || null,
    groupScriptHostId: item.groupScriptHostId || null,
    rotation: typeof item.rotation === "number" ? item.rotation : 0,
    imageData: item.imageData || null,
    physics,
    penAnimation: item.penAnimation ? normalizePenAnimation(item.penAnimation) : null,
    scripts: Array.isArray(item.scripts) ? item.scripts.map(deserializeBlock) : [],
    runtime,
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

function serializeAnimationChunk(chunk) {
  return {
    id: chunk.id,
    name: chunk.name,
    kind: chunk.kind,
    blocks: Array.isArray(chunk.blocks) ? chunk.blocks.map(serializeBlock) : [],
    penAnimation: chunk.penAnimation ? serializePenAnimation(chunk.penAnimation) : null,
  };
}

function normalizeAnimationChunk(chunk) {
  return {
    id: chunk.id || `chunk-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: chunk.name || "Animation Chunk",
    kind: chunk.kind === "pen" ? "pen" : "blocks",
    blocks: Array.isArray(chunk.blocks) ? chunk.blocks.map(deserializeBlock) : [],
    penAnimation: chunk.penAnimation ? normalizePenAnimation(chunk.penAnimation) : null,
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
    imageData: item.imageData || null,
    facing: item.facing,
    sizePct: item.sizePct,
    scaleX: item.scaleX,
    scaleY: item.scaleY,
    spawnX: item.spawnX,
    spawnY: item.spawnY,
    color: item.color || null,
    groupId: item.groupId || null,
    groupScriptHostId: item.groupScriptHostId || null,
    rotation: item.rotation || 0,
    physics: serializeObjectPhysics(item.physics || normalizeObjectPhysics(null, item.kind)),
    penAnimation: item.penAnimation ? serializePenAnimation(item.penAnimation) : null,
    scripts: item.scripts.map(serializeBlock),
  };
}

function createSetName() {
  return `Set ${state.sets.length + 1}`;
}

function createSceneName() {
  return `Scene ${state.scenes.length + 1}`;
}

function createSceneWorkspace(name = createSceneName()) {
  return {
    id: `scene-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    stageSetId: null,
    items: [],
    drawings: [],
    sceneScripts: [],
    scene: {
      lightingColor: "#fff7d6",
      lightingStrength: 0,
    },
  };
}

function serializeSceneWorkspace(scene) {
  return {
    id: scene.id,
    name: scene.name,
    stageSetId: scene.stageSetId || null,
    items: Array.isArray(scene.items) ? scene.items.map((item) => isPhysicsObject(item) || item.kind ? serializeItem(item) : item) : [],
    drawings: Array.isArray(scene.drawings) ? scene.drawings.map(serializeDrawing) : [],
    sceneScripts: Array.isArray(scene.sceneScripts) ? scene.sceneScripts.map(serializeBlock) : [],
    scene: {
      lightingColor: scene.scene?.lightingColor || "#fff7d6",
      lightingStrength: clamp(Number(scene.scene?.lightingStrength || 0), 0, 1),
    },
  };
}

function normalizeSceneWorkspace(scene) {
  return {
    id: scene.id || `scene-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: scene.name || "Scene",
    stageSetId: scene.stageSetId || null,
    items: Array.isArray(scene.items) ? scene.items.map(normalizeItem) : [],
    drawings: Array.isArray(scene.drawings) ? scene.drawings.map(normalizeDrawing) : [],
    sceneScripts: Array.isArray(scene.sceneScripts) ? scene.sceneScripts.map(deserializeBlock) : [],
    scene: {
      lightingColor: scene.scene?.lightingColor || "#fff7d6",
      lightingStrength: clamp(Number(scene.scene?.lightingStrength || 0), 0, 1),
    },
  };
}

function createStageSet(name = createSetName()) {
  return {
    id: `set-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    items: [],
    drawings: [],
    lights: [],
    lightingColor: "#fff7d6",
    lightingStrength: 0,
  };
}

function serializeDrawing(drawing) {
  return {
    id: drawing.id,
    type: drawing.type || "path",
    color: drawing.color,
    imageData: drawing.imageData || null,
    x: drawing.x,
    y: drawing.y,
    w: drawing.w,
    h: drawing.h,
    closed: Boolean(drawing.closed),
    fillColor: drawing.fillColor || null,
    points: Array.isArray(drawing.points) ? drawing.points.map((point) => ({ x: point.x, y: point.y })) : [],
  };
}

function normalizeDrawing(drawing) {
  return {
    id: drawing.id || `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: drawing.type === "image" ? "image" : "path",
    color: drawing.color || "#2f8f83",
    imageData: drawing.imageData || null,
    x: Number(drawing.x || state.stageWidth * 0.5),
    y: Number(drawing.y || state.stageHeight * 0.5),
    w: Number(drawing.w || state.stageWidth * 0.55),
    h: Number(drawing.h || state.stageHeight * 0.45),
    closed: Boolean(drawing.closed),
    fillColor: drawing.fillColor || null,
    points: Array.isArray(drawing.points) ? drawing.points.map((point) => ({ x: Number(point.x || 0), y: Number(point.y || 0) })) : [],
  };
}

function serializeStageSet(set) {
  return {
    id: set.id,
    name: set.name,
    items: set.items.map(serializeItem),
    drawings: Array.isArray(set.drawings) ? set.drawings.map(serializeDrawing) : [],
    lights: Array.isArray(set.lights) ? set.lights.map((light) => ({ ...light })) : [],
    lightingColor: set.lightingColor || "#fff7d6",
    lightingStrength: clamp(Number(set.lightingStrength || 0), 0, 1),
  };
}

function normalizeStageSet(set) {
  return {
    id: set.id || `set-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: set.name || "Set",
    items: Array.isArray(set.items) ? set.items.map(normalizeItem) : [],
    drawings: Array.isArray(set.drawings) ? set.drawings.map(normalizeDrawing) : [],
    lights: Array.isArray(set.lights) ? set.lights.map((light) => ({
      id: light.id || `light-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      x: Number(light.x || state.stageWidth * 0.5),
      y: Number(light.y || state.stageHeight * 0.35),
      type: light.type === "moon" ? "moon" : "sun",
      color: light.color || "#fff2a6",
      brightness: clamp(Number(light.brightness ?? 0.55), 0, 1),
    })) : [],
    lightingColor: set.lightingColor || "#fff7d6",
    lightingStrength: clamp(Number(set.lightingStrength || 0), 0, 1),
  };
}

function ensureDefaultScene() {
  if (state.scenes.length === 0) {
    const firstScene = createSceneWorkspace("Scene 1");
    state.scenes.push(firstScene);
    state.activeSceneId = firstScene.id;
  }
  if (!state.scenes.some((scene) => scene.id === state.activeSceneId)) {
    state.activeSceneId = state.scenes[0].id;
  }
}

function getActiveSceneWorkspace() {
  ensureDefaultScene();
  return state.scenes.find((scene) => scene.id === state.activeSceneId) || state.scenes[0];
}

function syncCurrentSceneToWorkspace() {
  ensureDefaultScene();
  const scene = getActiveSceneWorkspace();
  if (!scene) {
    return;
  }
  scene.items = state.items.map(serializeItem);
  scene.drawings = state.stageDrawings.map(serializeDrawing);
  scene.sceneScripts = state.sceneScripts.map(serializeBlock);
  scene.stageSetId = state.sceneSetId || null;
  scene.scene = {
    lightingColor: state.scene.lightingColor || "#fff7d6",
    lightingStrength: clamp(Number(state.scene.lightingStrength || 0), 0, 1),
  };
}

function loadSceneWorkspace(sceneId) {
  ensureDefaultScene();
  const scene = state.scenes.find((candidate) => candidate.id === sceneId) || state.scenes[0];
  state.activeSceneId = scene.id;
  state.items = scene.items.map(normalizeItem);
  state.stageDrawings = scene.drawings.map(normalizeDrawing);
  state.sceneScripts = scene.sceneScripts.map(deserializeBlock);
  state.sceneSetId = scene.stageSetId || null;
  if (state.sceneSetId && state.sets.some((set) => set.id === state.sceneSetId)) {
    state.activeSetId = state.sceneSetId;
  }
  state.scene = {
    lightingColor: scene.scene?.lightingColor || "#fff7d6",
    lightingStrength: clamp(Number(scene.scene?.lightingStrength || 0), 0, 1),
  };
  state.scriptTargetId = SCENE_TARGET_ID;
  hideActorContextMenu();
  hideSetActorContextMenu();
  hideDrawingContextMenu();
  hideSetDrawingContextMenu();
  closePenAnimationEditor();
  closeSetMiniCodePanel();
  closeObjectPhysicsEditor();
  clearAllScriptRunners();
  stopAllAudioNodes();
  resetAllPhysicsRuntime();
  clearSelection();
}

function ensureDefaultSet() {
  if (state.sets.length === 0) {
    const firstSet = createStageSet("Set 1");
    state.sets.push(firstSet);
    state.activeSetId = firstSet.id;
    return;
  }

  if (!state.sets.some((set) => set.id === state.activeSetId)) {
    state.activeSetId = state.sets[0].id;
  }
}

function getActiveSet() {
  ensureDefaultSet();
  return state.sets.find((set) => set.id === state.activeSetId) || state.sets[0];
}

function getStageSetById(setId) {
  ensureDefaultSet();
  return state.sets.find((set) => set.id === setId) || null;
}

function getAllSetItems() {
  return state.sets.flatMap((set) => set.items);
}

function getSetItemById(itemId) {
  for (const set of state.sets) {
    const item = set.items.find((candidate) => candidate.id === itemId);
    if (item) {
      return { set, item };
    }
  }
  return null;
}

function markProjectDirty() {
  state.projectDirty = true;
}

function buildProjectSnapshot() {
  syncCurrentSceneToWorkspace();
  return {
    scenes: state.scenes.map(serializeSceneWorkspace),
    activeSceneId: state.activeSceneId,
    items: state.items.map(serializeItem),
    sets: state.sets.map(serializeStageSet),
    activeSetId: state.activeSetId,
    customCharacters: state.customCharacters.map((item) => ({ ...item })),
    customObjects: state.customObjects.map((item) => ({ ...item })),
    customTextures: state.customTextures.map((item) => ({ ...item })),
    customMusic: state.customMusic.map((item) => ({ ...item })),
    animationChunks: state.animationChunks.map(serializeAnimationChunk),
    stageDrawings: state.stageDrawings.map(serializeDrawing),
    sceneScripts: state.sceneScripts.map(serializeBlock),
    scene: { ...state.scene },
    physics: serializeGlobalPhysicsSettings(state.physics),
    nextId: state.nextId,
    globalVolume: state.globalVolume,
  };
}

function pushUndoSnapshot() {
  if (state.undoRestoring || state.recording) {
    return;
  }
  const snapshot = JSON.stringify(buildProjectSnapshot());
  if (state.undoStack[state.undoStack.length - 1] === snapshot) {
    return;
  }
  state.undoStack.push(snapshot);
  if (state.undoStack.length > 50) {
    state.undoStack.shift();
  }
}

function restoreProjectSnapshot(snapshot) {
  state.undoRestoring = true;
  try {
    state.scenes = Array.isArray(snapshot.scenes) ? snapshot.scenes.map(normalizeSceneWorkspace) : [];
    state.sets = Array.isArray(snapshot.sets) ? snapshot.sets.map(normalizeStageSet) : [];
    state.activeSceneId = snapshot.activeSceneId || null;
    state.activeSetId = snapshot.activeSetId || null;
    state.customCharacters = Array.isArray(snapshot.customCharacters) ? snapshot.customCharacters.map((item) => ({ ...item })) : [];
    state.customObjects = Array.isArray(snapshot.customObjects) ? snapshot.customObjects.map((item) => ({ ...item })) : [];
    state.customTextures = Array.isArray(snapshot.customTextures) ? snapshot.customTextures.map((item) => ({ ...item })) : [];
    state.customMusic = Array.isArray(snapshot.customMusic) ? snapshot.customMusic.map((item) => ({ ...item })) : [];
    state.animationChunks = Array.isArray(snapshot.animationChunks) ? snapshot.animationChunks.map(normalizeAnimationChunk) : [];
    state.physics = snapshot.physics ? normalizeGlobalPhysicsSettings(snapshot.physics) : createDefaultPhysicsSettings();
    state.nextId = typeof snapshot.nextId === "number" ? snapshot.nextId : state.nextId;
    state.globalVolume = typeof snapshot.globalVolume === "number" ? clamp(snapshot.globalVolume, 0, 1) : state.globalVolume;
    ensureDefaultScene();
    ensureDefaultSet();
    loadSceneWorkspace(state.activeSceneId);
    hideDrawingContextMenu();
    hideSetDrawingContextMenu();
    patternCaches.stage.clear();
    patternCaches.recording.clear();
    patternCaches.set.clear();
    patternCaches.builder.clear();
    populateToolLists();
    populateSetToolLists();
    updateToolButtons();
    updateSelectionLabel();
    updateToolLabel();
    renderPhysicsControls();
    renderScriptCategoryTabs();
    renderScriptPalette();
    renderActiveScriptEditor();
    renderAudioLibrary();
    renderStageModule();
    markProjectDirty();
    saveProjectState();
  } finally {
    state.undoRestoring = false;
  }
}

function undoLastAction() {
  if (state.recording || state.undoStack.length === 0) {
    return;
  }
  const snapshot = state.undoStack.pop();
  if (!snapshot) {
    return;
  }
  restoreProjectSnapshot(JSON.parse(snapshot));
}

function saveProjectState() {
  try {
    syncCurrentSceneToWorkspace();
    const payload = {
      scenes: state.scenes.map(serializeSceneWorkspace),
      activeSceneId: state.activeSceneId,
      items: state.items.map(serializeItem),
      sets: state.sets.map(serializeStageSet),
      activeSetId: state.activeSetId,
      customCharacters: state.customCharacters,
      customObjects: state.customObjects,
      customTextures: state.customTextures,
      customMusic: state.customMusic,
      animationChunks: state.animationChunks.map(serializeAnimationChunk),
      stageDrawings: state.stageDrawings.map(serializeDrawing),
      sceneScripts: state.sceneScripts.map(serializeBlock),
      scene: { ...state.scene },
      physics: serializeGlobalPhysicsSettings(state.physics),
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
      ensureDefaultScene();
      loadSceneWorkspace(state.activeSceneId);
      ensureDefaultSet();
      return;
    }

    const payload = JSON.parse(raw);
    if (Array.isArray(payload.scenes)) {
      state.scenes = payload.scenes.map(normalizeSceneWorkspace);
    }
    if (Array.isArray(payload.sets)) {
      state.sets = payload.sets.map(normalizeStageSet);
    }
    if (payload.activeSceneId) {
      state.activeSceneId = payload.activeSceneId;
    }
    if (payload.activeSetId) {
      state.activeSetId = payload.activeSetId;
    }
    if (Array.isArray(payload.customCharacters)) {
      state.customCharacters = payload.customCharacters;
    }
    if (Array.isArray(payload.customObjects)) {
      state.customObjects = payload.customObjects;
    }
    if (Array.isArray(payload.customTextures)) {
      state.customTextures = payload.customTextures;
    }
    if (Array.isArray(payload.customMusic)) {
      state.customMusic = payload.customMusic;
    }
    if (Array.isArray(payload.animationChunks)) {
      state.animationChunks = payload.animationChunks.map(normalizeAnimationChunk);
    }
    if (state.scenes.length === 0) {
      state.scenes = [normalizeSceneWorkspace({
        id: payload.activeSceneId || `scene-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name: "Scene 1",
        stageSetId: payload.activeSetId || null,
        items: Array.isArray(payload.items) ? payload.items : [],
        drawings: Array.isArray(payload.stageDrawings) ? payload.stageDrawings : [],
        sceneScripts: Array.isArray(payload.sceneScripts) ? payload.sceneScripts : [],
        scene: payload.scene || null,
      })];
      state.activeSceneId = state.scenes[0].id;
    }
    if (payload.physics) {
      state.physics = normalizeGlobalPhysicsSettings(payload.physics);
    }
    if (typeof payload.nextId === "number") {
      state.nextId = payload.nextId;
    } else {
      const sceneItems = state.scenes.flatMap((scene) => scene.items.map(normalizeItem));
      const allItems = [...sceneItems, ...getAllSetItems()];
      if (allItems.length > 0) {
        state.nextId = Math.max(...allItems.map((item) => item.id)) + 1;
      }
    }
    if (typeof payload.globalVolume === "number") {
      state.globalVolume = clamp(payload.globalVolume, 0, 1);
    }
    ensureDefaultScene();
    loadSceneWorkspace(state.activeSceneId);
  } catch {
    state.items = [];
    ensureDefaultScene();
    loadSceneWorkspace(state.activeSceneId);
  }
  ensureDefaultSet();
}

function createBlockFromType(type) {
  const definition = scriptBlockMap.get(type);
  if (!definition) {
    return null;
  }

  const params = {};
  for (const param of definition.params) {
    if (param.input === "actorSubtype") {
      params[param.name] = getCharacterDefs()[0]?.id ?? "";
      continue;
    }
    if (param.input === "setSelect") {
      params[param.name] = getActiveSet()?.id ?? "";
      continue;
    }
    if (param.input === "animationChunkSelect") {
      params[param.name] = state.animationChunks[0]?.id ?? "";
      continue;
    }
    if (param.input === "select") {
      params[param.name] = getBlockParamOptions(param)[0]?.value ?? "";
      continue;
    }
    if (param.input === "layerMask") {
      params[param.name] = PHYSICS_LAYERS.map((layer) => layer.value);
      continue;
    }
    if (param.input === "color") {
      params[param.name] = "#fff1a8";
      continue;
    }
    if (typeof param.min === "number") {
      params[param.name] = param.min;
      continue;
    }
    params[param.name] = 0;
  }

  if (["move_right_seconds", "play_wiggle", "play_bounce", "play_stretch", "wait", "delay_seconds", "flip_360"].includes(type)) {
    params.seconds = params.seconds ?? 1;
  }
  if (type === "change_size") {
    params.percent = 100;
  }
  if (type === "rotate_by_degrees") {
    params.degrees = 45;
  }
  if (type === "set_rotation_degrees") {
    params.degrees = 0;
  }
  if (type === "set_volume") {
    params.volume = 70;
  }
  if (type === "set_gravity_strength") {
    params.strength = 1200;
  }
  if (type === "set_gravity_direction") {
    params.direction = "down";
  }
  if (type === "set_scene_lighting" || type === "fade_scene_lighting" || type === "change_light_color_brightness") {
    params.strength = 35;
    params.color = "#ffd36f";
  }
  if (type === "spawn_actor") {
    params.x = Math.round(state.stageWidth * 0.5);
    params.y = Math.round(state.stageHeight * 0.5);
  }
  if (type === "add_light_source") {
    params.color = "#fff2a6";
    params.brightness = 55;
  }
  if (type === "move_left_blocks" || type === "move_up_blocks" || type === "move_down_blocks" || type === "jump_blocks") {
    params.blocks = 2;
  }
  if (["set_friction", "set_bounciness"].includes(type)) {
    params.amount = type === "set_friction" ? 0.55 : 0.18;
  }
  if (["set_object_mass", "set_character_mass"].includes(type)) {
    params.mass = 1;
  }
  if (["set_object_density", "set_character_density"].includes(type)) {
    params.density = 1;
  }
  if (["set_object_velocity", "set_character_velocity", "apply_force_object", "apply_force_character", "apply_impulse_object", "apply_impulse_character"].includes(type)) {
    params.x = 0;
    params.y = 0;
  }
  if (type === "toggle_collision") {
    params.enabled = "on";
  }
  if (["set_object_layer", "set_character_layer"].includes(type)) {
    params.layer = params.layer ?? "default";
  }
  if (["enable_collision_between_layers", "disable_collision_between_layers"].includes(type)) {
    params.layerA = params.layerA ?? "default";
    params.layerB = params.layerB ?? "characters";
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
    w: item.w * scale * (item.scaleX || 1),
    h: item.h * scale * (item.scaleY || 1),
  };
}

function isPhysicsObject(item) {
  return item?.kind === "object" || item?.kind === "character";
}

function isPhysicsCircle(item) {
  return item?.subtype === "circle";
}

function getActiveStageActors() {
  const sceneSetItems = state.sceneSetId ? getStageSetById(state.sceneSetId)?.items || [] : [];
  return [...state.items, ...sceneSetItems];
}

function getPhysicsGravityVector() {
  const strength = state.physics.gravityEnabled ? state.physics.settings.gravityStrength : 0;
  switch (state.physics.settings.gravityDirection) {
    case "up":
      return { x: 0, y: -strength };
    case "left":
      return { x: -strength, y: 0 };
    case "right":
      return { x: strength, y: 0 };
    case "down":
    default:
      return { x: 0, y: strength };
  }
}

function ensurePhysicsRuntime(item) {
  const body = item.runtime.physics;
  if (!body.initialized) {
    body.previousX = item.x;
    body.previousY = item.y;
    body.asleep = Boolean(item.physics?.startAsleep);
    body.initialized = true;
  }
  return body;
}

function wakePhysicsItem(item) {
  if (!isPhysicsObject(item)) {
    return;
  }
  const body = ensurePhysicsRuntime(item);
  body.asleep = false;
  body.sleepTimer = 0;
}

function resetPhysicsBody(item) {
  if (!item?.runtime?.physics) {
    return;
  }
  item.runtime.physics.vx = 0;
  item.runtime.physics.vy = 0;
  item.runtime.physics.angularVelocity = 0;
  item.runtime.physics.sleepTimer = 0;
  item.runtime.physics.asleep = Boolean(item.physics?.startAsleep);
  item.runtime.physics.dragging = false;
  item.runtime.physics.controlledTimer = 0;
  item.runtime.physics.previousX = item.x;
  item.runtime.physics.previousY = item.y;
  item.runtime.physics.overlapIds = new Set();
  item.runtime.physics.initialized = true;
}

function resetAllPhysicsRuntime() {
  state.physics.accumulator = 0;
  state.physics.activeTriggerPairs = new Set();
  state.physics.pendingTriggerEvents = [];
  state.physics.debugTriggerPairs = [];
  state.physics.debugCollisionPairs = [];
  for (const item of getActiveStageActors()) {
    resetPhysicsBody(item);
  }
}

function wakeMatchingPhysicsItems(predicate = () => true) {
  for (const item of getActiveStageActors()) {
    if (isPhysicsObject(item) && item.physics?.enabled && predicate(item)) {
      wakePhysicsItem(item);
    }
  }
}

function resyncPhysicsBodyAfterResize(item) {
  if (!state.physics.enabled || !isPhysicsObject(item) || !item.physics?.enabled) {
    return;
  }
  resetPhysicsBody(item);
  wakePhysicsItem(item);
}

function getPhysicsMass(item) {
  if (!isPhysicsObject(item)) {
    return Infinity;
  }
  if (item.physics.bodyType === "static") {
    return Infinity;
  }
  const size = getItemSize(item);
  const sizeFactor = Math.max(0.25, (size.w * size.h) / (92 * 92));
  return Math.max(0.05, item.physics.mass * item.physics.density * sizeFactor);
}

function getPhysicsInverseMass(item) {
  if (!isPhysicsObject(item)) {
    return 0;
  }
  const body = ensurePhysicsRuntime(item);
  if (item.physics.bodyType === "static" || item.physics.bodyType === "kinematic" || item.physics.frozen || body.dragging || body.controlledTimer > 0) {
    return 0;
  }
  return 1 / getPhysicsMass(item);
}

function getPhysicsShape(item) {
  const size = getItemSize(item);
  if (isPhysicsCircle(item)) {
    return {
      type: "circle",
      x: item.x,
      y: item.y,
      radius: Math.min(size.w, size.h) * 0.46,
    };
  }
  return {
    type: "box",
    x: item.x,
    y: item.y,
    halfW: size.w * 0.5,
    halfH: size.h * 0.5,
  };
}

function getPhysicsBounds(item) {
  const shape = getPhysicsShape(item);
  if (shape.type === "circle") {
    return {
      left: shape.x - shape.radius,
      right: shape.x + shape.radius,
      top: shape.y - shape.radius,
      bottom: shape.y + shape.radius,
    };
  }
  return {
    left: shape.x - shape.halfW,
    right: shape.x + shape.halfW,
    top: shape.y - shape.halfH,
    bottom: shape.y + shape.halfH,
  };
}

function shouldActorsUseLayerRules(itemA, itemB) {
  if (!isPhysicsObject(itemA) || !isPhysicsObject(itemB)) {
    return false;
  }
  const layerA = normalizePhysicsLayer(itemA.physics.layer, itemA.kind, itemA.physics.triggerMode);
  const layerB = normalizePhysicsLayer(itemB.physics.layer, itemB.kind, itemB.physics.triggerMode);
  const maskA = normalizePhysicsCollisionMask(itemA.physics.collisionMask);
  const maskB = normalizePhysicsCollisionMask(itemB.physics.collisionMask);
  const ruleKey = getPhysicsLayerRuleKey(layerA, layerB);
  return maskA.includes(layerB)
    && maskB.includes(layerA)
    && state.physics.settings.layerRules[ruleKey] !== false;
}

function makePhysicsPairKey(itemA, itemB) {
  return [itemA.id, itemB.id].sort((left, right) => left - right).join(":");
}

function getPhysicsPairItems(pairKey) {
  const [leftId, rightId] = pairKey.split(":").map((value) => Number(value));
  const left = getItemById(leftId);
  const right = getItemById(rightId);
  return left && right ? [left, right] : null;
}

function clearActorTriggerOverlapId(actorId) {
  for (const item of getActiveStageActors()) {
    if (isPhysicsObject(item)) {
      ensurePhysicsRuntime(item).overlapIds.delete(actorId);
    }
  }
}

function syncTriggerOverlapPairs(detectedPairs) {
  const previousPairs = state.physics.activeTriggerPairs || new Set();
  const nextPairs = new Set(detectedPairs);

  for (const pairKey of previousPairs) {
    if (!nextPairs.has(pairKey)) {
      const items = getPhysicsPairItems(pairKey);
      if (!items) {
        const [leftId, rightId] = pairKey.split(":").map((value) => Number(value));
        clearActorTriggerOverlapId(leftId);
        clearActorTriggerOverlapId(rightId);
        continue;
      }
      const [itemA, itemB] = items;
      ensurePhysicsRuntime(itemA).overlapIds.delete(itemB.id);
      ensurePhysicsRuntime(itemB).overlapIds.delete(itemA.id);
      state.physics.pendingTriggerEvents.push({ type: "exit", actorId: itemA.id, otherActorId: itemB.id });
      state.physics.pendingTriggerEvents.push({ type: "exit", actorId: itemB.id, otherActorId: itemA.id });
    }
  }

  for (const pairKey of nextPairs) {
    const items = getPhysicsPairItems(pairKey);
    if (!items) {
      continue;
    }
    const [itemA, itemB] = items;
    ensurePhysicsRuntime(itemA).overlapIds.add(itemB.id);
    ensurePhysicsRuntime(itemB).overlapIds.add(itemA.id);
    if (!previousPairs.has(pairKey)) {
      state.physics.pendingTriggerEvents.push({ type: "enter", actorId: itemA.id, otherActorId: itemB.id });
      state.physics.pendingTriggerEvents.push({ type: "enter", actorId: itemB.id, otherActorId: itemA.id });
    }
  }

  state.physics.activeTriggerPairs = nextPairs;
}

function actorIsOverlappingTrigger(actor) {
  if (!actor || !isPhysicsObject(actor)) {
    return false;
  }
  return ensurePhysicsRuntime(actor).overlapIds.size > 0;
}

function applyPhysicsTranslation(item, dx, dy) {
  if (!isPhysicsObject(item)) {
    return;
  }
  if (!item.physics.lockX) {
    item.x += dx;
  }
  if (!item.physics.lockY) {
    item.y += dy;
  }
}

function applyPhysicsVelocity(item, dx, dy) {
  if (!isPhysicsObject(item)) {
    return;
  }
  const body = ensurePhysicsRuntime(item);
  if (!item.physics.lockX) {
    body.vx += dx;
  }
  if (!item.physics.lockY) {
    body.vy += dy;
  }
}

function setPhysicsMotionFromDelta(item, dx, dy, deltaSeconds, options = {}) {
  if (!isPhysicsObject(item) || !deltaSeconds) {
    return;
  }
  const body = ensurePhysicsRuntime(item);
  body.vx = item.physics.lockX ? 0 : dx / deltaSeconds;
  body.vy = item.physics.lockY ? 0 : dy / deltaSeconds;
  body.controlledTimer = Math.max(body.controlledTimer, options.controlled === false ? 0 : Math.max(0.05, deltaSeconds * 2));
  body.dragging = Boolean(options.dragging);
  wakePhysicsItem(item);
}

function canGrabItemManually(item) {
  return !isPhysicsObject(item) || !state.physics.enabled || item.physics.canGrab;
}

function getBoxBoxCollision(shapeA, shapeB) {
  const dx = shapeB.x - shapeA.x;
  const overlapX = shapeA.halfW + shapeB.halfW - Math.abs(dx);
  if (overlapX <= 0) {
    return null;
  }
  const dy = shapeB.y - shapeA.y;
  const overlapY = shapeA.halfH + shapeB.halfH - Math.abs(dy);
  if (overlapY <= 0) {
    return null;
  }
  if (overlapX < overlapY) {
    return {
      normal: { x: dx >= 0 ? 1 : -1, y: 0 },
      penetration: overlapX,
    };
  }
  return {
    normal: { x: 0, y: dy >= 0 ? 1 : -1 },
    penetration: overlapY,
  };
}

function getCircleCircleCollision(shapeA, shapeB) {
  const dx = shapeB.x - shapeA.x;
  const dy = shapeB.y - shapeA.y;
  const distance = Math.hypot(dx, dy);
  const radius = shapeA.radius + shapeB.radius;
  if (distance >= radius) {
    return null;
  }
  if (distance < 0.0001) {
    return {
      normal: { x: 1, y: 0 },
      penetration: radius,
    };
  }
  return {
    normal: { x: dx / distance, y: dy / distance },
    penetration: radius - distance,
  };
}

function getCircleBoxCollision(circle, box) {
  const closestX = clamp(circle.x, box.x - box.halfW, box.x + box.halfW);
  const closestY = clamp(circle.y, box.y - box.halfH, box.y + box.halfH);
  let dx = circle.x - closestX;
  let dy = circle.y - closestY;
  let distance = Math.hypot(dx, dy);

  if (distance < 0.0001) {
    const offsetX = circle.x - box.x;
    const offsetY = circle.y - box.y;
    const diffX = box.halfW - Math.abs(offsetX);
    const diffY = box.halfH - Math.abs(offsetY);
    if (diffX < diffY) {
      dx = offsetX >= 0 ? 1 : -1;
      dy = 0;
      distance = 1;
      return {
        normal: { x: -dx, y: 0 },
        penetration: circle.radius + diffX,
      };
    }
    dx = 0;
    dy = offsetY >= 0 ? 1 : -1;
    distance = 1;
    return {
      normal: { x: 0, y: -dy },
      penetration: circle.radius + diffY,
    };
  }

  if (distance >= circle.radius) {
    return null;
  }

  return {
    normal: { x: -dx / distance, y: -dy / distance },
    penetration: circle.radius - distance,
  };
}

function getCollisionManifold(itemA, itemB) {
  const shapeA = getPhysicsShape(itemA);
  const shapeB = getPhysicsShape(itemB);
  if (shapeA.type === "circle" && shapeB.type === "circle") {
    return getCircleCircleCollision(shapeA, shapeB);
  }
  if (shapeA.type === "box" && shapeB.type === "box") {
    return getBoxBoxCollision(shapeA, shapeB);
  }
  if (shapeA.type === "circle" && shapeB.type === "box") {
    return getCircleBoxCollision(shapeA, shapeB);
  }
  const manifold = getCircleBoxCollision(shapeB, shapeA);
  if (!manifold) {
    return null;
  }
  return {
    normal: { x: -manifold.normal.x, y: -manifold.normal.y },
    penetration: manifold.penetration,
  };
}

function resolvePhysicsPair(itemA, itemB, manifold = null) {
  if (!itemA.physics.collisionEnabled || !itemB.physics.collisionEnabled || !shouldActorsUseLayerRules(itemA, itemB)) {
    return;
  }

  const resolvedManifold = manifold || getCollisionManifold(itemA, itemB);
  if (!resolvedManifold || itemA.physics.triggerMode || itemB.physics.triggerMode) {
    return;
  }

  const bodyA = ensurePhysicsRuntime(itemA);
  const bodyB = ensurePhysicsRuntime(itemB);
  const invMassA = getPhysicsInverseMass(itemA);
  const invMassB = getPhysicsInverseMass(itemB);
  const invMassSum = invMassA + invMassB;

  if (invMassSum > 0) {
    const correction = Math.max(resolvedManifold.penetration - 0.4, 0) / invMassSum * 0.82;
    applyPhysicsTranslation(itemA, -resolvedManifold.normal.x * correction * invMassA, -resolvedManifold.normal.y * correction * invMassA);
    applyPhysicsTranslation(itemB, resolvedManifold.normal.x * correction * invMassB, resolvedManifold.normal.y * correction * invMassB);
  }

  const relativeVelocity = {
    x: bodyB.vx - bodyA.vx,
    y: bodyB.vy - bodyA.vy,
  };
  const velocityAlongNormal = relativeVelocity.x * resolvedManifold.normal.x + relativeVelocity.y * resolvedManifold.normal.y;
  if (velocityAlongNormal > 0 || invMassSum === 0) {
    return;
  }

  const restitution = Math.max(itemA.physics.restitution, itemB.physics.restitution);
  const impulseMagnitude = -(1 + restitution) * velocityAlongNormal / invMassSum;
  const impulseX = resolvedManifold.normal.x * impulseMagnitude;
  const impulseY = resolvedManifold.normal.y * impulseMagnitude;
  applyPhysicsVelocity(itemA, -impulseX * invMassA, -impulseY * invMassA);
  applyPhysicsVelocity(itemB, impulseX * invMassB, impulseY * invMassB);

  const tangentX = relativeVelocity.x - velocityAlongNormal * resolvedManifold.normal.x;
  const tangentY = relativeVelocity.y - velocityAlongNormal * resolvedManifold.normal.y;
  const tangentLength = Math.hypot(tangentX, tangentY);
  if (tangentLength > 0.0001) {
    const tx = tangentX / tangentLength;
    const ty = tangentY / tangentLength;
    const tangentSpeed = relativeVelocity.x * tx + relativeVelocity.y * ty;
    let frictionImpulse = -tangentSpeed / invMassSum;
    const friction = Math.sqrt(itemA.physics.friction * itemB.physics.friction);
    const maxFriction = impulseMagnitude * friction;
    frictionImpulse = clamp(frictionImpulse, -maxFriction, maxFriction);
    applyPhysicsVelocity(itemA, -tx * frictionImpulse * invMassA, -ty * frictionImpulse * invMassA);
    applyPhysicsVelocity(itemB, tx * frictionImpulse * invMassB, ty * frictionImpulse * invMassB);
  }

  if (!itemA.physics.rotationLocked && invMassA > 0) {
    bodyA.angularVelocity -= resolvedManifold.normal.x * relativeVelocity.y * 0.0009;
  }
  if (!itemB.physics.rotationLocked && invMassB > 0) {
    bodyB.angularVelocity += resolvedManifold.normal.x * relativeVelocity.y * 0.0009;
  }

  wakePhysicsItem(itemA);
  wakePhysicsItem(itemB);
}

function resolveWorldBounds(item) {
  if (!item.physics.collisionEnabled || !state.physics.settings.worldBounds) {
    return;
  }
  const body = ensurePhysicsRuntime(item);
  const bounds = getPhysicsBounds(item);
  const restitution = item.physics.restitution;
  const friction = 1 - item.physics.friction * 0.35;

  if (!item.physics.lockX && bounds.left < 0) {
    item.x += -bounds.left;
    body.vx = Math.abs(body.vx) * restitution;
    body.vy *= friction;
    wakePhysicsItem(item);
  }
  if (!item.physics.lockX && bounds.right > state.stageWidth) {
    item.x -= bounds.right - state.stageWidth;
    body.vx = -Math.abs(body.vx) * restitution;
    body.vy *= friction;
    wakePhysicsItem(item);
  }
  if (!item.physics.lockY && bounds.top < 0) {
    item.y += -bounds.top;
    body.vy = Math.abs(body.vy) * restitution;
    body.vx *= friction;
    wakePhysicsItem(item);
  }
  if (!item.physics.lockY && bounds.bottom > state.stageHeight) {
    item.y -= bounds.bottom - state.stageHeight;
    body.vy = -Math.abs(body.vy) * restitution;
    body.vx *= friction;
    wakePhysicsItem(item);
  }
}

function updatePhysicsSleepState(item, deltaSeconds) {
  if (!state.physics.settings.sleeping || item.physics.bodyType !== "dynamic" || item.physics.frozen) {
    return;
  }
  const body = ensurePhysicsRuntime(item);
  if (body.dragging || body.controlledTimer > 0) {
    body.sleepTimer = 0;
    body.asleep = false;
    return;
  }
  const speed = Math.hypot(body.vx, body.vy);
  if (speed < PHYSICS_SLEEP_SPEED && Math.abs(body.angularVelocity) < PHYSICS_SLEEP_ANGULAR_SPEED) {
    body.sleepTimer += deltaSeconds;
    if (body.sleepTimer >= PHYSICS_SLEEP_DELAY) {
      body.asleep = true;
      body.vx = 0;
      body.vy = 0;
      body.angularVelocity = 0;
    }
  } else {
    body.sleepTimer = 0;
    body.asleep = false;
  }
}

function stepPhysics(deltaSeconds) {
  const physicsItems = getActiveStageActors().filter((item) => isPhysicsObject(item) && item.physics.enabled);
  const maxObjects = state.physics.settings.maxObjects;
  const simulatedItems = physicsItems.slice(0, maxObjects);
  const gravity = getPhysicsGravityVector();
  const detectedTriggerPairs = new Set();
  const debugTriggerPairs = [];
  const debugCollisionPairs = [];

  if (physicsItems.length > maxObjects) {
    state.physics.statusMessage = `Physics is simulating the first ${maxObjects} actors right now to keep the stage stable.`;
  } else {
    state.physics.statusMessage = state.physics.enabled
      ? `Physics on. ${simulatedItems.length} actor${simulatedItems.length === 1 ? "" : "s"} active.`
      : "Physics is off. Turn it on to enable collisions, pushing, and gravity for stage actors.";
  }

  for (const item of simulatedItems) {
    const body = ensurePhysicsRuntime(item);
    body.previousX = item.x;
    body.previousY = item.y;
    body.controlledTimer = Math.max(0, body.controlledTimer - deltaSeconds);
    if (item.physics.bodyType === "static" || item.physics.frozen) {
      body.vx = 0;
      body.vy = 0;
      body.angularVelocity = 0;
      body.asleep = false;
      continue;
    }
    if (body.dragging || body.controlledTimer > 0 || body.asleep) {
      continue;
    }

    if (item.physics.bodyType !== "kinematic" && state.physics.gravityEnabled && item.physics.gravityAffected) {
      body.vx += gravity.x * item.physics.gravityScale * deltaSeconds;
      body.vy += gravity.y * item.physics.gravityScale * deltaSeconds;
    }

    const linearDamping = Math.max(0, 1 - (state.physics.settings.airDrag + item.physics.linearDrag) * deltaSeconds);
    const angularDamping = Math.max(0, 1 - item.physics.angularDrag * deltaSeconds);
    body.vx = item.physics.lockX ? 0 : body.vx * linearDamping;
    body.vy = item.physics.lockY ? 0 : body.vy * linearDamping;
    body.angularVelocity = item.physics.rotationLocked ? 0 : body.angularVelocity * angularDamping;

    if (!item.physics.lockX) {
      item.x += body.vx * deltaSeconds;
    }
    if (!item.physics.lockY) {
      item.y += body.vy * deltaSeconds;
    }
    if (!item.physics.rotationLocked) {
      item.rotation += body.angularVelocity * deltaSeconds;
    }
  }

  const colliders = simulatedItems.filter((item) => item.physics.collisionEnabled);
  for (let iteration = 0; iteration < state.physics.settings.solverIterations; iteration += 1) {
    for (let index = 0; index < colliders.length; index += 1) {
      for (let otherIndex = index + 1; otherIndex < colliders.length; otherIndex += 1) {
        const itemA = colliders[index];
        const itemB = colliders[otherIndex];
        if (!shouldActorsUseLayerRules(itemA, itemB)) {
          continue;
        }
        const manifold = getCollisionManifold(itemA, itemB);
        if (!manifold) {
          continue;
        }
        if (itemA.physics.triggerMode || itemB.physics.triggerMode) {
          const pairKey = makePhysicsPairKey(itemA, itemB);
          detectedTriggerPairs.add(pairKey);
          if (iteration === 0) {
            debugTriggerPairs.push([itemA.id, itemB.id]);
          }
          continue;
        }
        resolvePhysicsPair(itemA, itemB, manifold);
        if (iteration === 0) {
          debugCollisionPairs.push([itemA.id, itemB.id]);
        }
      }
    }
    if (state.physics.settings.worldBounds) {
      for (const item of colliders) {
        resolveWorldBounds(item);
      }
    }
  }

  for (const item of simulatedItems) {
    if (ensurePhysicsRuntime(item).dragging) {
      continue;
    }
    updatePhysicsSleepState(item, deltaSeconds);
  }
  state.physics.debugTriggerPairs = debugTriggerPairs;
  state.physics.debugCollisionPairs = debugCollisionPairs;
  syncTriggerOverlapPairs(detectedTriggerPairs);
}

function updatePhysics(deltaSeconds) {
  if (!state.physics.enabled) {
    state.physics.accumulator = 0;
    state.physics.statusMessage = "";
    return;
  }

  const scaledDelta = Math.min(0.05, deltaSeconds) * state.physics.settings.timeScale;
  state.physics.accumulator = Math.min(0.12, state.physics.accumulator + scaledDelta);
  let steps = 0;
  while (state.physics.accumulator >= PHYSICS_FIXED_TIMESTEP && steps < PHYSICS_MAX_STEPS_PER_FRAME) {
    stepPhysics(PHYSICS_FIXED_TIMESTEP);
    state.physics.accumulator -= PHYSICS_FIXED_TIMESTEP;
    steps += 1;
  }
}

function moveActorDirectly(actor, nextX, nextY, deltaSeconds = 1 / 60) {
  if (!actor) {
    return;
  }
  const dx = nextX - actor.x;
  const dy = nextY - actor.y;
  actor.x = nextX;
  actor.y = nextY;
  clampItemToStage(actor);
  if (state.physics.enabled && actor.physics?.enabled) {
    setPhysicsMotionFromDelta(actor, dx, dy, Math.max(1 / 120, deltaSeconds), { controlled: true });
  }
  markProjectDirty();
}

function teleportActorTo(actor, x, y) {
  if (!actor) {
    return;
  }
  moveActorDirectly(actor, Number(x || actor.x), Number(y || actor.y), 1 / 60);
  if (actor.physics?.enabled) {
    const body = ensurePhysicsRuntime(actor);
    body.vx = 0;
    body.vy = 0;
    body.angularVelocity = 0;
  }
}

function getPhysicsScriptTarget(actor, expectedKind = null) {
  if (!actor) {
    return null;
  }
  if (!isPhysicsObject(actor)) {
    return null;
  }
  if (expectedKind && actor.kind !== expectedKind) {
    return null;
  }
  return actor;
}

function setActorPhysicsEnabled(actor, enabled) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.enabled = enabled;
  if (!enabled) {
    resetPhysicsBody(target);
  } else {
    wakePhysicsItem(target);
  }
  markProjectDirty();
}

function setActorBodyType(actor, bodyType) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.bodyType = ["static", "dynamic", "kinematic"].includes(bodyType) ? bodyType : "dynamic";
  target.physics.gravityAffected = target.physics.bodyType === "static" ? false : target.physics.gravityAffected;
  target.physics.frozen = false;
  resetPhysicsBody(target);
  wakePhysicsItem(target);
  markProjectDirty();
}

function setActorFrozen(actor, frozen) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.frozen = Boolean(frozen);
  if (frozen) {
    resetPhysicsBody(target);
  } else {
    wakePhysicsItem(target);
  }
  markProjectDirty();
}

function setActorMomentum(actor, vx, vy) {
  const target = getPhysicsScriptTarget(actor);
  if (!target || !target.physics.enabled) {
    return;
  }
  const body = ensurePhysicsRuntime(target);
  body.vx = target.physics.lockX ? 0 : Number(vx || 0);
  body.vy = target.physics.lockY ? 0 : Number(vy || 0);
  body.controlledTimer = 0;
  wakePhysicsItem(target);
  markProjectDirty();
}

function applyPhysicsVector(actor, x, y, mode = "force") {
  const target = getPhysicsScriptTarget(actor);
  if (!target || !target.physics.enabled || target.physics.bodyType === "static" || target.physics.bodyType === "kinematic" || target.physics.frozen) {
    return;
  }
  const body = ensurePhysicsRuntime(target);
  const invMass = getPhysicsInverseMass(target);
  if (invMass === 0) {
    return;
  }
  const scale = mode === "impulse" ? 1 : PHYSICS_FIXED_TIMESTEP;
  if (!target.physics.lockX) {
    body.vx += Number(x || 0) * invMass * scale;
  }
  if (!target.physics.lockY) {
    body.vy += Number(y || 0) * invMass * scale;
  }
  wakePhysicsItem(target);
  markProjectDirty();
}

function stopActorMomentum(actor) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  const body = ensurePhysicsRuntime(target);
  body.vx = 0;
  body.vy = 0;
  body.angularVelocity = 0;
  body.controlledTimer = 0;
  markProjectDirty();
}

function setActorTriggerMode(actor, enabled) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.triggerMode = Boolean(enabled);
  if (target.physics.triggerMode && target.physics.layer === getDefaultPhysicsLayer(target.kind, false)) {
    target.physics.layer = "trigger";
  }
  if (!target.physics.triggerMode && target.physics.layer === "trigger") {
    target.physics.layer = getDefaultPhysicsLayer(target.kind, false);
  }
  resetPhysicsBody(target);
  wakePhysicsItem(target);
  markProjectDirty();
}

function setActorPhysicsLayer(actor, layer) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.layer = normalizePhysicsLayer(layer, target.kind, target.physics.triggerMode);
  wakePhysicsItem(target);
  markProjectDirty();
}

function setActorCollisionMask(actor, mask) {
  const target = getPhysicsScriptTarget(actor);
  if (!target) {
    return;
  }
  target.physics.collisionMask = normalizePhysicsCollisionMask(mask);
  wakePhysicsItem(target);
  markProjectDirty();
}

function setGlobalLayerCollisionRule(layerA, layerB, enabled) {
  const normalizedA = normalizePhysicsLayer(layerA, "object", false);
  const normalizedB = normalizePhysicsLayer(layerB, "object", false);
  state.physics.settings.layerRules[getPhysicsLayerRuleKey(normalizedA, normalizedB)] = enabled !== false;
  wakeMatchingPhysicsItems();
  markProjectDirty();
}

function flushTriggerScriptEvents() {
  if (!state.physics.pendingTriggerEvents.length) {
    return;
  }
  const events = [...state.physics.pendingTriggerEvents];
  state.physics.pendingTriggerEvents = [];
  for (const event of events) {
    triggerScripts(event.type === "enter" ? "trigger_enter" : "trigger_exit", {
      actorId: event.actorId,
      otherActorId: event.otherActorId,
    });
  }
}

function getSingleSelectedItem() {
  const selected = getSelectedItems();
  return selected.length === 1 ? selected[0] : null;
}

function getGroupItems(groupId) {
  return groupId ? state.items.filter((item) => item.groupId === groupId) : [];
}

function getGroupScriptHost(item) {
  if (!item?.groupId) {
    return item || null;
  }
  const hostId = item.groupScriptHostId || item.id;
  return getItemById(hostId) || item;
}

function getScriptTargetHost(item) {
  return item?.groupId ? getGroupScriptHost(item) : item;
}

function getScriptTargetItem() {
  if (state.scriptEditorMode === "set") {
    return getSetMiniScriptTarget();
  }

  if (state.scriptTargetId === SCENE_TARGET_ID) {
    return null;
  }

  if (state.scriptTargetId != null) {
    const target = getItemById(state.scriptTargetId);
    if (target) {
      const host = getScriptTargetHost(target);
      state.scriptTargetId = host.id;
      return host;
    }
  }

  const selected = getSingleSelectedItem();
  if (selected) {
    const host = getScriptTargetHost(selected);
    state.scriptTargetId = host.id;
    return host;
  }

  const firstItem = state.items[0] || null;
  state.scriptTargetId = firstItem?.id ?? SCENE_TARGET_ID;
  return firstItem;
}

function isSceneScriptTarget() {
  if (state.scriptEditorMode === "set") {
    return false;
  }
  return state.scriptTargetId === SCENE_TARGET_ID;
}

function getScriptTargetScripts() {
  if (state.scriptEditorMode === "set") {
    return getSetMiniScriptTarget()?.scripts || null;
  }

  if (isSceneScriptTarget()) {
    return state.sceneScripts;
  }

  return getScriptTargetItem()?.scripts || null;
}

function getScriptTargetName() {
  if (state.scriptEditorMode === "set") {
    const actor = getSetMiniScriptTarget();
    return actor ? getActorDisplayName(actor) : "No Set Actor";
  }
  if (isSceneScriptTarget()) {
    return "Scene";
  }
  const actor = getScriptTargetItem();
  return actor ? getActorDisplayName(actor) : "No Actor";
}

function getScriptTargetActorKind() {
  if (isSceneScriptTarget()) {
    return null;
  }
  const actor = getScriptTargetItem();
  return actor?.kind || null;
}

function getScriptBlockDisplayTitle(blockOrDefinition) {
  const type = blockOrDefinition?.type || null;
  if (!type) {
    return "";
  }
  return ACTOR_SPECIFIC_PHYSICS_BLOCK_TITLES.get(type) || blockOrDefinition.title || "";
}

function isBlockAvailableForCurrentTarget(block) {
  if (!block) {
    return false;
  }
  if (isSceneScriptTarget()) {
    if (block.type === "when_clicked") {
      return false;
    }
    return Boolean(block.sceneOnly) || block.category === "timing" || block.category === "sound" || block.category === "control";
  }

  const targetKind = getScriptTargetActorKind();
  const requiredKind = ACTOR_SPECIFIC_PHYSICS_BLOCK_KINDS.get(block.type);
  if (requiredKind && targetKind && requiredKind !== targetKind) {
    return false;
  }

  return !block.sceneOnly;
}

function getItemById(itemId) {
  return state.items.find((item) => item.id === itemId) || getSetItemById(itemId)?.item || null;
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
  const actor = getScriptTargetItem();
  const scripts = getScriptTargetScripts();
  const newBlock = createBlockFromType(type);
  if (!scripts || !newBlock) {
    return;
  }

  const definition = scriptBlockMap.get(type);
  if (!isBlockAvailableForCurrentTarget(definition)) {
    return;
  }
  const isTrigger = Boolean(definition.trigger);
  const selectedLocation = scripts.length > 0 && state.selectedScriptBlockId
    ? findScriptBlockLocation(scripts, state.selectedScriptBlockId)
    : null;

  if (isTrigger) {
    scripts.push(newBlock);
  } else if (selectedLocation) {
    const selectedDefinition = scriptBlockMap.get(selectedLocation.block.type);
    if (selectedDefinition?.allowsChildren) {
      selectedLocation.block.children.push(newBlock);
    } else {
      selectedLocation.siblings.splice(selectedLocation.index + 1, 0, newBlock);
    }
  } else if (scripts.length > 0) {
    scripts[scripts.length - 1].children.push(newBlock);
  } else {
    const root = createBlockFromType("when_recording_start");
    root.children.push(newBlock);
    scripts.push(root);
  }

  state.selectedScriptBlockId = newBlock.id;
  state.selectedScriptBlockIds = new Set([newBlock.id]);
  markProjectDirty();
  renderActiveScriptEditor();
}

function moveSelectedScriptBlock(direction) {
  const scripts = getScriptTargetScripts();
  if (!scripts || !state.selectedScriptBlockId) {
    return;
  }

  const location = findScriptBlockLocation(scripts, state.selectedScriptBlockId);
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
  renderActiveScriptEditor();
}

function deleteSelectedScriptBlock() {
  const scripts = getScriptTargetScripts();
  if (!scripts || !state.selectedScriptBlockId) {
    return false;
  }

  const location = findScriptBlockLocation(scripts, state.selectedScriptBlockId);
  if (!location) {
    return false;
  }

  location.siblings.splice(location.index, 1);
  state.selectedScriptBlockId = null;
  state.selectedScriptBlockIds.clear();
  markProjectDirty();
  renderActiveScriptEditor();
  return true;
}

function updateBlockParam(blockId, paramName, rawValue) {
  const scripts = getScriptTargetScripts();
  if (!scripts) {
    return;
  }

  const location = findScriptBlockLocation(scripts, blockId);
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
  renderActiveScriptEditor();
}

function insertRootScriptBlock(scripts, index, block) {
  const definition = scriptBlockMap.get(block.type);
  if (definition?.trigger) {
    scripts.splice(index, 0, block);
    return;
  }

  const wrapper = createBlockFromType("when_recording_start");
  wrapper.children.push(block);
  scripts.splice(index, 0, wrapper);
}

function isBlockDescendant(block, targetId) {
  if (block.id === targetId) {
    return true;
  }
  return block.children?.some((child) => isBlockDescendant(child, targetId)) || false;
}

function canDropOnTarget(actor, payload, target) {
  const scripts = getScriptTargetScripts();
  if (!scripts || !payload || !target) {
    return false;
  }

  if (payload.source === "existing") {
    const location = findScriptBlockLocation(scripts, payload.blockId);
    if (!location) {
      return false;
    }
    if (target.blockId && isBlockDescendant(location.block, target.blockId)) {
      return false;
    }
  }

  if (target.kind === "inside") {
    const location = findScriptBlockLocation(scripts, target.blockId);
    if (!location) {
      return false;
    }
    return Boolean(scriptBlockMap.get(location.block.type)?.allowsChildren);
  }

  return true;
}

function getDraggedBlock(actor, payload) {
  const scripts = getScriptTargetScripts();
  if (!payload || !scripts) {
    return null;
  }

  if (payload.source === "palette") {
    const block = createBlockFromType(payload.blockType);
    if (block && payload.chunkId) {
      block.params.chunkId = payload.chunkId;
    }
    return block;
  }

  const location = findScriptBlockLocation(scripts, payload.blockId);
  if (!location) {
    return null;
  }

  location.siblings.splice(location.index, 1);
  return location.block;
}

function addAnimationChunkBlock(chunkId) {
  const block = createBlockFromType("play_animation_chunk");
  if (!block) {
    return;
  }
  block.params.chunkId = chunkId;
  const scripts = getScriptTargetScripts();
  if (!scripts) {
    return;
  }
  if (scripts.length === 0) {
    const root = createBlockFromType("when_recording_start");
    root.children.push(block);
    scripts.push(root);
  } else {
    scripts[scripts.length - 1].children.push(block);
  }
  state.selectedScriptBlockId = block.id;
  state.selectedScriptBlockIds = new Set([block.id]);
  markProjectDirty();
  renderActiveScriptEditor();
}

function createAnimationChunkFromSelection() {
  const scripts = getScriptTargetScripts();
  if (!scripts) {
    return;
  }
  const selectedIds = state.selectedScriptBlockIds.size > 0
    ? [...state.selectedScriptBlockIds]
    : state.selectedScriptBlockId
      ? [state.selectedScriptBlockId]
      : [];
  if (selectedIds.length === 0) {
    return;
  }

  const locations = selectedIds
    .map((id) => findScriptBlockLocation(scripts, id))
    .filter(Boolean);
  if (locations.length === 0) {
    return;
  }

  const firstSiblings = locations[0].siblings;
  const sameStack = locations.every((location) => location.siblings === firstSiblings);
  const usableLocations = sameStack ? locations : [locations[0]];
  usableLocations.sort((a, b) => a.index - b.index);
  const name = window.prompt("Name this animation block:", "Animation Chunk");
  if (!name) {
    return;
  }

  const blocks = usableLocations.map((location) => serializeBlock(location.block)).map(deserializeBlock);
  const chunk = {
    id: `chunk-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    kind: "blocks",
    blocks,
    penAnimation: null,
  };
  state.animationChunks.push(chunk);

  const replacement = createBlockFromType("play_animation_chunk");
  replacement.params.chunkId = chunk.id;
  for (let index = usableLocations.length - 1; index >= 0; index -= 1) {
    firstSiblings.splice(usableLocations[index].index, 1);
  }
  if (firstSiblings === scripts) {
    insertRootScriptBlock(firstSiblings, usableLocations[0].index, replacement);
  } else {
    firstSiblings.splice(usableLocations[0].index, 0, replacement);
  }
  state.selectedScriptBlockId = replacement.id;
  state.selectedScriptBlockIds = new Set([replacement.id]);
  markProjectDirty();
  renderScriptPalette();
  renderActiveScriptEditor();
}

function performScriptDrop(target) {
  const actor = getScriptTargetItem();
  const scripts = getScriptTargetScripts();
  const payload = state.scriptDrag;
  if (!scripts || !payload || !canDropOnTarget(actor, payload, target)) {
    clearScriptDragState();
    return;
  }

  const block = getDraggedBlock(actor, payload);
  if (!block) {
    clearScriptDragState();
    return;
  }
  if (!isBlockAvailableForCurrentTarget(scriptBlockMap.get(block.type))) {
    clearScriptDragState();
    return;
  }

  if (target.kind === "root") {
    insertRootScriptBlock(scripts, target.index, block);
  } else {
    const location = findScriptBlockLocation(scripts, target.blockId);
    if (!location) {
      clearScriptDragState();
      return;
    }

    if (target.kind === "inside") {
      location.block.children.push(block);
    } else if (location.siblings === scripts) {
      const insertIndex = target.kind === "before" ? location.index : location.index + 1;
      insertRootScriptBlock(scripts, insertIndex, block);
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
  const actor = getScriptTargetItem();
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
  const blocks = SCRIPT_BLOCK_DEFS.filter((block) => block.category === state.activeScriptCategory && isBlockAvailableForCurrentTarget(block));
  for (const block of blocks) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-palette-button";
    button.draggable = true;
    button.textContent = getScriptBlockDisplayTitle(block);
    button.addEventListener("click", () => addBlockToSelectedActor(block.type));
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      showBlockInfo(block, event.clientX, event.clientY);
    });
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

  if (state.activeScriptCategory === "animation") {
    for (const chunk of state.animationChunks) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "script-palette-button";
      button.draggable = true;
      button.textContent = chunk.name;
      button.addEventListener("click", () => addAnimationChunkBlock(chunk.id));
      button.addEventListener("dragstart", (event) => {
        const payload = { source: "palette", blockType: "play_animation_chunk", chunkId: chunk.id };
        setScriptDragState(payload);
        event.dataTransfer?.setData("application/json", JSON.stringify(payload));
        event.dataTransfer.effectAllowed = "copy";
      });
      button.addEventListener("dragend", clearScriptDragState);
      elements.scriptPalette.append(button);
    }
  }
}

function showBlockInfo(definition, clientX, clientY) {
  elements.scriptBlockInfo.innerHTML = `<h5>${getScriptBlockDisplayTitle(definition)}</h5><p>${definition.copy}</p>`;
  elements.scriptBlockInfo.classList.remove("hidden");
  const rect = elements.scriptBlockInfo.getBoundingClientRect();
  const x = clamp(clientX + 12, 12, window.innerWidth - rect.width - 12);
  const y = clamp(clientY + 12, 12, window.innerHeight - rect.height - 12);
  elements.scriptBlockInfo.style.left = `${x}px`;
  elements.scriptBlockInfo.style.top = `${y}px`;
}

function hideBlockInfo() {
  elements.scriptBlockInfo.classList.add("hidden");
}

function getBlockParamOptions(param) {
  if (param.input === "actorSubtype") {
    return getCharacterDefs().map((character) => ({ value: character.id, label: character.name }));
  }
  if (param.input === "setSelect") {
    ensureDefaultSet();
    return state.sets.map((set) => ({ value: set.id, label: set.name }));
  }
  if (param.input === "animationChunkSelect") {
    return state.animationChunks.map((chunk) => ({ value: chunk.id, label: chunk.name }));
  }
  if (param.name === "textureId") {
    return getTextureDefs().map((texture) => ({ value: texture.id, label: texture.name }));
  }
  if (param.name === "musicId") {
    return getMusicOptions();
  }
  return param.options || [];
}

function renderScriptBlock(block, container, actor, isRootLevel = false) {
  const definition = scriptBlockMap.get(block.type);
  container.append(createDropLine({ kind: "before", blockId: block.id }, "Drop block here"));

  const card = document.createElement("article");
  card.className = "script-block";
  card.classList.toggle("selected", block.id === state.selectedScriptBlockId || state.selectedScriptBlockIds.has(block.id));
  card.draggable = true;
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) {
      return;
    }
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      if (state.selectedScriptBlockIds.has(block.id)) {
        state.selectedScriptBlockIds.delete(block.id);
      } else {
        state.selectedScriptBlockIds.add(block.id);
      }
      state.selectedScriptBlockId = block.id;
    } else {
      state.selectedScriptBlockId = block.id;
      state.selectedScriptBlockIds = new Set([block.id]);
    }
    renderActiveScriptEditor();
  });
  card.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (state.selectedScriptBlockIds.size > 0 && (state.selectedScriptBlockIds.has(block.id) || block.id === state.selectedScriptBlockId)) {
      createAnimationChunkFromSelection();
      return;
    }
    showBlockInfo(definition, event.clientX, event.clientY);
  });
  card.addEventListener("dragstart", (event) => {
    event.stopPropagation();
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
  title.textContent = getScriptBlockDisplayTitle(definition);

  titleWrap.append(title);

  row.append(titleWrap);
  card.append(row);

  if (definition.params.length > 0 && block.id === state.selectedScriptBlockId) {
    const paramGrid = document.createElement("div");
    paramGrid.className = "script-param-grid";

    for (const param of definition.params) {
      const label = document.createElement("label");
      label.className = "script-param-label";
      label.textContent = param.label;

      let input;
      if (param.input === "layerMask") {
        input = document.createElement("div");
        input.className = "physics-mask-list";
        const currentMask = normalizePhysicsCollisionMask(block.params[param.name]);
        for (const option of PHYSICS_LAYER_OPTIONS) {
          const optionLabel = document.createElement("label");
          optionLabel.className = "physics-mask-item";
          optionLabel.textContent = option.label;
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = currentMask.includes(option.value);
          checkbox.addEventListener("input", () => {
            const nextMask = Array.from(input.querySelectorAll("input[type='checkbox']"))
              .filter((candidate) => candidate.checked)
              .map((candidate) => candidate.value);
            updateBlockParam(block.id, param.name, nextMask);
          });
          checkbox.value = option.value;
          optionLabel.append(checkbox);
          input.append(optionLabel);
        }
        label.append(input);
        paramGrid.append(label);
        continue;
      }
      if (param.input === "select" || param.input === "actorSubtype" || param.input === "setSelect" || param.input === "animationChunkSelect") {
        input = document.createElement("select");
        for (const option of getBlockParamOptions(param)) {
          const optionElement = document.createElement("option");
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          input.append(optionElement);
        }
      } else if (param.input === "color") {
        input = document.createElement("input");
        input.type = "color";
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
      input.title = param.label;
      input.setAttribute("aria-label", param.label);
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

function getActorDisplayName(actor) {
  return actor.kind === "character" ? getCharacterDef(actor.subtype).name : getObjectDef(actor.subtype).name;
}

function renderScriptActorList() {
  elements.scriptActorList.innerHTML = "";

  const sceneButton = document.createElement("button");
  sceneButton.type = "button";
  sceneButton.className = "script-actor-card scene-card";
  sceneButton.classList.toggle("active", isSceneScriptTarget());
  sceneButton.innerHTML = `<strong>Scene</strong><span class="script-actor-meta">${state.sceneScripts.length} stack${state.sceneScripts.length === 1 ? "" : "s"} | lighting</span>`;
  sceneButton.addEventListener("click", () => {
    state.scriptTargetId = SCENE_TARGET_ID;
    state.selectedScriptBlockId = null;
    clearSelection();
    renderScriptActorList();
    renderScriptPalette();
    renderScriptEditor();
  });
  elements.scriptActorList.append(sceneButton);

  if (state.scriptTargetId !== SCENE_TARGET_ID && !getScriptTargetItem() && state.items.length > 0) {
    state.scriptTargetId = state.items[0].id;
  }

  for (const item of state.items) {
    if (item.groupId && item.groupScriptHostId && item.groupScriptHostId !== item.id) {
      continue;
    }
    const groupMembers = getGroupItems(item.groupId);
    const scriptCount = item.scripts.length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-actor-card";
    button.classList.toggle("active", item.id === state.scriptTargetId);

    const title = document.createElement("strong");
    title.textContent = item.groupId ? `Group (${groupMembers.length})` : getActorDisplayName(item);

    const meta = document.createElement("span");
    meta.className = "script-actor-meta";
    const physicsMeta = item.physics?.enabled ? ` | ${item.physics.bodyType}` : "";
    meta.textContent = `${item.groupId ? "group" : item.kind}${physicsMeta} | ${scriptCount} stack${scriptCount === 1 ? "" : "s"}`;

    button.append(title, meta);
    button.addEventListener("click", () => {
      const host = getScriptTargetHost(item);
      state.scriptTargetId = host.id;
      state.selectedScriptBlockId = null;
      setSelection(item.groupId ? groupMembers.map((member) => member.id) : [item.id]);
      renderScriptActorList();
      renderScriptPalette();
      renderScriptEditor();
    });
    elements.scriptActorList.append(button);
  }
}

function renderActiveScriptEditor() {
  if (state.scriptEditorMode === "set") {
    renderSetMiniCodePanel();
    return;
  }
  renderScriptEditor();
}

function renderScriptEditor() {
  state.scriptEditorMode = "main";
  renderScriptActorList();
  const actor = getScriptTargetItem();
  const scripts = getScriptTargetScripts();
  const targetName = getScriptTargetName();
  const targetDescription = isSceneScriptTarget()
    ? "Scene scripts control global effects like lighting, timing, and sound."
    : `${targetName} has ${scripts?.length || 0} script stack${scripts?.length === 1 ? "" : "s"} saved in this project.`;
  elements.scriptActorLabel.textContent = targetDescription;
  elements.scriptWorkspace.innerHTML = "";

  if (!scripts) {
    elements.scriptWorkspace.innerHTML = '<p class="script-empty">Pick Scene, or place a character/object on the stage and choose it here.</p>';
    return;
  }

  if (scripts.length === 0) {
    elements.scriptWorkspace.append(
      createDropLine(
        { kind: "root", index: 0 },
        'Drop a block here to start a stack. Action blocks auto-wrap in "When Recording Starts".',
        "root-empty",
      ),
    );
    return;
  }

  scripts.forEach((rootBlock, index) => {
    const group = document.createElement("div");
    group.className = "script-stack-group";
    group.append(createDropLine({ kind: "root", index }, "Drop root block here"));
    renderScriptBlock(rootBlock, group, actor, true);
    if (index === scripts.length - 1) {
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
  stopMusicMakerPreview();
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
  if (kind === "music") {
    const customMusic = state.customMusic.find((music) => music.value === value);
    if (customMusic?.pattern) {
      playMusicPattern(customMusic.pattern, { loop: Boolean(state.recording) });
      return;
    }
    if (customMusic?.dataUrl) {
      const audioElement = new Audio(customMusic.dataUrl);
      audioElement.volume = state.globalVolume;
      audioElement.loop = Boolean(state.recording);
      audioElement.play().catch(() => {});
      state.audio.activeNodes.push({
        source: { stop: () => audioElement.pause() },
        gain: null,
        loop: audioElement.loop,
      });
      return;
    }
  }

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

function stopMusicMakerPreview() {
  for (const stop of state.audio.musicPreviewStops) {
    stop();
  }
  state.audio.musicPreviewStops = [];
}

function playMusicMakerCell(rowIndex, columnIndex = 0, startAt = null, stepDuration = 0.22) {
  const audio = createAudioEngine();
  if (!audio) {
    return null;
  }
  audio.ctx.resume?.();
  const track = MUSIC_MAKER_TRACKS[rowIndex] || MUSIC_MAKER_TRACKS[0];
  const startTime = startAt != null ? startAt + columnIndex * stepDuration : audio.ctx.currentTime + 0.02 + columnIndex * stepDuration;

  if (track.type === "snare") {
    const bufferSize = Math.floor(audio.ctx.sampleRate * 0.16);
    const buffer = audio.ctx.createBuffer(1, bufferSize, audio.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < bufferSize; index += 1) {
      data[index] = (Math.random() * 2 - 1) * (1 - index / bufferSize);
    }
    const source = audio.ctx.createBufferSource();
    const gain = audio.ctx.createGain();
    const filter = audio.ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 900;
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audio.master);
    gain.gain.setValueAtTime(0.42, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.16);
    source.start(startTime);
    source.stop(startTime + 0.18);
    state.audio.activeNodes.push({ source, gain, loop: false });
    source.onended = () => {
      state.audio.activeNodes = state.audio.activeNodes.filter((node) => node.source !== source);
    };
    return source;
  }

  const oscillator = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  oscillator.type = track.type === "bass" ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(track.type === "bass" ? 82.41 : track.frequency || 261.63, startTime);
  oscillator.connect(gain);
  gain.connect(audio.master);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(track.type === "bass" ? 0.48 : 0.3, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + (track.type === "bass" ? 0.24 : stepDuration * 0.9));
  oscillator.start(startTime);
  oscillator.stop(startTime + (track.type === "bass" ? 0.26 : stepDuration * 0.95));
  state.audio.activeNodes.push({ source: oscillator, gain, loop: false });
  oscillator.onended = () => {
    state.audio.activeNodes = state.audio.activeNodes.filter((node) => node.source !== oscillator);
  };
  return oscillator;
}

function playMusicPattern(pattern, options = {}) {
  const audio = createAudioEngine();
  if (!audio) {
    return;
  }
  stopMusicMakerPreview();
  audio.ctx.resume?.();
  const stepDuration = 0.22;
  const startAt = audio.ctx.currentTime + 0.04;
  const rows = Array.isArray(pattern) ? pattern : state.musicMaker.cells;

  rows.forEach((row, rowIndex) => {
    row.forEach((enabled, columnIndex) => {
      if (!enabled) {
        return;
      }
      const source = playMusicMakerCell(rowIndex, columnIndex, startAt, stepDuration);
      state.audio.musicPreviewStops.push(() => {
        try {
          source?.stop();
        } catch {
          // noop
        }
      });
    });
  });

  if (options.loop) {
    const timeoutId = window.setTimeout(() => {
      if (state.recording && !state.audio.stopLooping) {
        playMusicPattern(pattern, options);
      }
    }, MUSIC_MAKER_COLUMNS * stepDuration * 1000);
    state.audio.musicPreviewStops.push(() => window.clearTimeout(timeoutId));
  }
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
  state.penAnimationRunners = [];
  state.stopAllScriptsRequested = false;
  for (const item of state.items) {
    item.runtime.animation = null;
    item.runtime.flip = null;
    item.runtime.jump = null;
    if (item.runtime.physics) {
      item.runtime.physics.dragging = false;
      item.runtime.physics.controlledTimer = 0;
    }
    clearItemRuntimeVisuals(item);
  }
  for (const item of getAllSetItems()) {
    item.runtime.animation = null;
    item.runtime.flip = null;
    item.runtime.jump = null;
    if (item.runtime.physics) {
      item.runtime.physics.dragging = false;
      item.runtime.physics.controlledTimer = 0;
    }
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
  const startX = actor.x;
  const startY = actor.y;
  let remaining = total;
  let elapsed = 0;
  return {
    done: false,
    update(deltaSeconds) {
      const step = Math.min(deltaSeconds, remaining);
      elapsed += step;
      const progress = clamp(elapsed / total, 0, 1);
      moveActorDirectly(actor, startX + dx * progress, startY + dy * progress, step);
      remaining -= step;
      if (remaining <= 0) {
        this.done = true;
      }
    },
  };
}

function createPenAnimationRunner(actor, animation, options = {}) {
  const sourcePoints = animation.points?.length >= 2 ? animation.points : null;
  if (!actor || !sourcePoints) {
    return { done: true, update() {} };
  }
  const offsetX = actor.x - sourcePoints[0].x;
  const offsetY = actor.y - sourcePoints[0].y;
  const points = sourcePoints.map((point) => ({ x: point.x + offsetX, y: point.y + offsetY }));
  const lengths = [];
  let totalLength = 0;
  for (let index = 1; index < points.length; index += 1) {
    const length = Math.hypot(points[index].x - points[index - 1].x, points[index].y - points[index - 1].y);
    lengths.push(length);
    totalLength += length;
  }
  const duration = Math.max(0.1, Number(animation.duration || 2));
  let elapsed = 0;

  return {
    actorId: actor.id,
    preview: Boolean(options.preview),
    done: totalLength <= 0,
    update(deltaSeconds) {
      if (this.done) {
        return;
      }
      elapsed += deltaSeconds;
      const targetDistance = totalLength * clamp(elapsed / duration, 0, 1);
      let walked = 0;
      for (let index = 0; index < lengths.length; index += 1) {
        const segmentLength = lengths[index];
        if (walked + segmentLength >= targetDistance) {
          const progress = segmentLength === 0 ? 1 : (targetDistance - walked) / segmentLength;
          moveActorDirectly(
            actor,
            points[index].x + (points[index + 1].x - points[index].x) * progress,
            points[index].y + (points[index + 1].y - points[index].y) * progress,
            deltaSeconds,
          );
          break;
        }
        walked += segmentLength;
      }
      if (elapsed >= duration) {
        moveActorDirectly(actor, points[points.length - 1].x, points[points.length - 1].y, deltaSeconds);
        if (options.restorePosition) {
          teleportActorTo(actor, options.restorePosition.x, options.restorePosition.y);
        }
        this.done = true;
      }
    },
  };
}

function startPenAnimationRunners() {
  for (const actor of state.items) {
    if (actor.penAnimation?.points?.length >= 2) {
      state.penAnimationRunners.push(createPenAnimationRunner(actor, actor.penAnimation));
    }
  }
}

function updatePenAnimationRunners(deltaSeconds) {
  for (const runner of state.penAnimationRunners) {
    runner.update(deltaSeconds);
  }
  state.penAnimationRunners = state.penAnimationRunners.filter((runner) => !runner.done);
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

function createConditionalChildrenRunner(predicate, actor, block, run) {
  let childRunner = null;
  return {
    done: false,
    update(deltaSeconds) {
      if (!predicate()) {
        this.done = true;
        return;
      }
      if (!childRunner) {
        childRunner = createSequenceRunner(actor, block.children || [], run);
      }
      childRunner.update(deltaSeconds);
      this.done = true;
    },
  };
}

function hexToRgb(hexColor) {
  const normalized = String(hexColor || "#ffffff").replace("#", "");
  const value = Number.parseInt(normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized, 16);
  if (!Number.isFinite(value)) {
    return { r: 255, g: 255, b: 255 };
  }
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("")}`;
}

function setSceneLighting(color, strength) {
  state.scene.lightingColor = color || "#fff7d6";
  state.scene.lightingStrength = clamp(Number(strength || 0) / 100, 0, 1);
  markProjectDirty();
}

function spawnScriptActor(block) {
  const item = createCharacterItem(block.params.actorSubtype || getCharacterDefs()[0].id, Number(block.params.x || state.stageWidth * 0.5), Number(block.params.y || state.stageHeight * 0.5));
  clampItemToStage(item);
  state.items.push(item);
  markProjectDirty();
}

function addScriptLight(block) {
  const set = getActiveSet();
  const light = {
    id: `light-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    x: state.stageWidth * 0.5,
    y: state.stageHeight * 0.35,
    type: block.params.lightType === "moon" ? "moon" : "sun",
    color: block.params.color || "#fff2a6",
    brightness: clamp(Number(block.params.brightness || 55) / 100, 0, 1),
  };
  set.lights.push(light);
  markProjectDirty();
  renderStageModule();
}

function changeActiveSet(setId) {
  if (!getStageSetById(setId)) {
    return;
  }
  state.activeSetId = setId;
  state.setSelectedItemId = null;
  state.setSelectedLightId = null;
  markProjectDirty();
  renderStageModule();
}

function transferActorToSet(actor, setId) {
  const targetSet = getStageSetById(setId);
  if (!actor || !targetSet) {
    return;
  }

  state.items = state.items.filter((item) => item.id !== actor.id);
  for (const set of state.sets) {
    set.items = set.items.filter((item) => item.id !== actor.id);
  }
  targetSet.items.push(actor);
  clampItemToStage(actor);
  state.selection.delete(actor.id);
  updateSelectionLabel();
  markProjectDirty();
  renderStageModule();
}

function removeActorFromScene(actor) {
  if (!actor) {
    return;
  }
  const idsToRemove = new Set(actor.groupId ? getGroupItems(actor.groupId).map((item) => item.id) : [actor.id]);
  state.items = state.items.filter((item) => !idsToRemove.has(item.id));
  for (const set of state.sets) {
    set.items = set.items.filter((item) => !idsToRemove.has(item.id));
  }
  for (const id of idsToRemove) {
    state.selection.delete(id);
  }
  if (idsToRemove.has(state.scriptTargetId)) {
    state.scriptTargetId = SCENE_TARGET_ID;
  }
  updateSelectionLabel();
  markProjectDirty();
  renderActiveScriptEditor();
  renderStageModule();
}

function createLightingFadeRunner(block) {
  const startRgb = hexToRgb(state.scene.lightingColor);
  const endRgb = hexToRgb(block.params.color || "#fff7d6");
  const startStrength = state.scene.lightingStrength;
  const endStrength = clamp(Number(block.params.strength || 0) / 100, 0, 1);
  const total = Math.max(0.1, Number(block.params.seconds || 1));
  let elapsed = 0;

  return {
    done: false,
    update(deltaSeconds) {
      elapsed += deltaSeconds;
      const progress = clamp(elapsed / total, 0, 1);
      const rgb = {
        r: startRgb.r + (endRgb.r - startRgb.r) * progress,
        g: startRgb.g + (endRgb.g - startRgb.g) * progress,
        b: startRgb.b + (endRgb.b - startRgb.b) * progress,
      };
      state.scene.lightingColor = rgbToHex(rgb);
      state.scene.lightingStrength = startStrength + (endStrength - startStrength) * progress;
      markProjectDirty();
      if (progress >= 1) {
        this.done = true;
      }
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

function actorMatchesKind(actor, kind) {
  return actor && actor.kind === kind;
}

function createRunnerForBlock(actor, block, run) {
  switch (block.type) {
    case "physics_on":
      return createInstantRunner(() => {
        state.physics.enabled = true;
        state.physics.accumulator = 0;
        state.physics.statusMessage = "Physics on. Place or drag stage actors to test collisions.";
        wakeMatchingPhysicsItems();
        markProjectDirty();
        renderPhysicsControls();
      });
    case "physics_off":
      return createInstantRunner(() => {
        state.physics.enabled = false;
        state.physics.statusMessage = "";
        resetAllPhysicsRuntime();
        markProjectDirty();
        renderPhysicsControls();
      });
    case "gravity_on":
      return createInstantRunner(() => {
        state.physics.gravityEnabled = true;
        wakeMatchingPhysicsItems((item) => item.physics.gravityAffected);
        markProjectDirty();
        renderPhysicsControls();
      });
    case "gravity_off":
      return createInstantRunner(() => {
        state.physics.gravityEnabled = false;
        markProjectDirty();
        renderPhysicsControls();
      });
    case "set_gravity_strength":
      return createInstantRunner(() => {
        state.physics.settings.gravityStrength = clamp(Number(block.params.strength || 0), 0, 3000);
        wakeMatchingPhysicsItems((item) => item.physics.gravityAffected);
        markProjectDirty();
        renderPhysicsControls();
      });
    case "set_gravity_direction":
      return createInstantRunner(() => {
        state.physics.settings.gravityDirection = PHYSICS_DIRECTION_OPTIONS.some((option) => option.value === block.params.direction)
          ? block.params.direction
          : "down";
        wakeMatchingPhysicsItems((item) => item.physics.gravityAffected);
        markProjectDirty();
        renderPhysicsControls();
      });
    case "enable_collision_between_layers":
      return createInstantRunner(() => {
        setGlobalLayerCollisionRule(block.params.layerA, block.params.layerB, true);
        renderPhysicsControls();
      });
    case "disable_collision_between_layers":
      return createInstantRunner(() => {
        setGlobalLayerCollisionRule(block.params.layerA, block.params.layerB, false);
        renderPhysicsControls();
      });
    case "set_scene_lighting":
      return createInstantRunner(() => setSceneLighting(block.params.color, block.params.strength));
    case "fade_scene_lighting":
      return createLightingFadeRunner(block);
    case "clear_scene_lighting":
      return createInstantRunner(() => setSceneLighting("#fff7d6", 0));
    case "change_light_color_brightness":
      return createInstantRunner(() => setSceneLighting(block.params.color, block.params.strength));
    case "spawn_actor":
      return createInstantRunner(() => spawnScriptActor(block));
    case "add_light_source":
      return createInstantRunner(() => addScriptLight(block));
    case "change_set":
      return createInstantRunner(() => changeActiveSet(block.params.setId));
    case "transfer_character_to_set":
      return createInstantRunner(() => transferActorToSet(actor, block.params.setId));
    case "move_right_seconds":
      if (!actor) return createInstantRunner(() => {});
      return createTimedMoveRunner(actor, STAGE_GRID_SIZE * 2 * Number(block.params.seconds || 1), 0, Number(block.params.seconds || 1));
    case "move_left_blocks": {
      if (!actor) return createInstantRunner(() => {});
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, -STAGE_GRID_SIZE * blocks, 0, Math.max(0.2, blocks * 0.45));
    }
    case "move_up_blocks": {
      if (!actor) return createInstantRunner(() => {});
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, 0, -STAGE_GRID_SIZE * blocks, Math.max(0.2, blocks * 0.45));
    }
    case "move_down_blocks": {
      if (!actor) return createInstantRunner(() => {});
      const blocks = Number(block.params.blocks || 1);
      return createTimedMoveRunner(actor, 0, STAGE_GRID_SIZE * blocks, Math.max(0.2, blocks * 0.45));
    }
    case "teleport_xy":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => teleportActorTo(actor, block.params.x, block.params.y));
    case "face_left":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.facing = -1;
        markProjectDirty();
      });
    case "face_right":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.facing = 1;
        markProjectDirty();
      });
    case "jump_blocks": {
      if (!actor) return createInstantRunner(() => {});
      const blocks = Number(block.params.blocks || 1);
      const total = Math.max(0.3, blocks * 0.28);
      actor.runtime.jump = {
        total,
        remaining: total,
        height: blocks * (STAGE_GRID_SIZE * 0.55),
      };
      return createWaitRunner(total);
    }
    case "return_to_spawn":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => teleportActorTo(actor, actor.spawnX ?? actor.x, actor.spawnY ?? actor.y));
    case "play_animation_chunk": {
      const chunk = state.animationChunks.find((candidate) => candidate.id === block.params.chunkId);
      if (!chunk) return createInstantRunner(() => {});
      if (chunk.kind === "pen") {
        if (!actor || !chunk.penAnimation) return createInstantRunner(() => {});
        return createPenAnimationRunner(actor, chunk.penAnimation);
      }
      return createSequenceRunner(actor, chunk.blocks || [], run);
    }
    case "play_wiggle":
      if (!actor) return createInstantRunner(() => {});
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "wiggle", seconds);
        return seconds;
      })());
    case "play_bounce":
      if (!actor) return createInstantRunner(() => {});
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "bounce", seconds);
        return seconds;
      })());
    case "play_stretch":
      if (!actor) return createInstantRunner(() => {});
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        setLoopAnimation(actor, "stretch", seconds);
        return seconds;
      })());
    case "stop_animation":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.runtime.animation = null;
      });
    case "change_size":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.sizePct = clamp(Number(block.params.percent || 100), 20, 300);
        clampItemToStage(actor);
        resyncPhysicsBodyAfterResize(actor);
        markProjectDirty();
      });
    case "rotate_by_degrees":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.rotation = (actor.rotation || 0) + (Number(block.params.degrees || 0) * Math.PI) / 180;
        markProjectDirty();
      });
    case "set_rotation_degrees":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.rotation = (Number(block.params.degrees || 0) * Math.PI) / 180;
        markProjectDirty();
      });
    case "flip_360":
      if (!actor) return createInstantRunner(() => {});
      return createWaitRunner((() => {
        const seconds = Number(block.params.seconds || 1);
        actor.runtime.flip = { total: seconds, remaining: seconds };
        return seconds;
      })());
    case "change_texture":
      if (!actor) return createInstantRunner(() => {});
      return createInstantRunner(() => {
        actor.textureId = block.params.textureId || null;
        markProjectDirty();
      });
    case "wait":
      return createWaitRunner(Number(block.params.seconds || 1));
    case "delay_seconds":
      return createWaitRunner(Number(block.params.seconds || 1));
    case "repeat":
      return createRepeatRunner(actor, block, run);
    case "forever_recording":
      return createForeverRunner(actor, block, run);
    case "parallel":
      return createParallelRunner(actor, block, run);
    case "sequence":
      return createSequenceRunner(actor, block.children, run);
    case "enable_object_physics":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorPhysicsEnabled(actor, true);
      });
    case "disable_object_physics":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorPhysicsEnabled(actor, false);
      });
    case "enable_character_physics":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorPhysicsEnabled(actor, true);
      });
    case "disable_character_physics":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorPhysicsEnabled(actor, false);
      });
    case "apply_force_object":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) applyPhysicsVector(actor, block.params.x, block.params.y, "force");
      });
    case "apply_force_character":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) applyPhysicsVector(actor, block.params.x, block.params.y, "force");
      });
    case "apply_impulse_object":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) applyPhysicsVector(actor, block.params.x, block.params.y, "impulse");
      });
    case "apply_impulse_character":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) applyPhysicsVector(actor, block.params.x, block.params.y, "impulse");
      });
    case "set_object_velocity":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorMomentum(actor, block.params.x, block.params.y);
      });
    case "set_character_velocity":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorMomentum(actor, block.params.x, block.params.y);
      });
    case "set_object_mass":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) {
          actor.physics.mass = clamp(Number(block.params.mass || 1), 0.1, 100);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_character_mass":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) {
          actor.physics.mass = clamp(Number(block.params.mass || 1), 0.1, 100);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_object_density":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) {
          actor.physics.density = clamp(Number(block.params.density || 1), 0.1, 10);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_character_density":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) {
          actor.physics.density = clamp(Number(block.params.density || 1), 0.1, 10);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_friction":
      return createInstantRunner(() => {
        if (getPhysicsScriptTarget(actor)) {
          actor.physics.friction = clamp(Number(block.params.amount || 0), 0, 1);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_bounciness":
      return createInstantRunner(() => {
        if (getPhysicsScriptTarget(actor)) {
          actor.physics.restitution = clamp(Number(block.params.amount || 0), 0, 1);
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "freeze_object":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorFrozen(actor, true);
      });
    case "freeze_character":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorFrozen(actor, true);
      });
    case "unfreeze_object":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorFrozen(actor, false);
      });
    case "unfreeze_character":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorFrozen(actor, false);
      });
    case "make_object_static":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorBodyType(actor, "static");
      });
    case "make_object_dynamic":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorBodyType(actor, "dynamic");
      });
    case "make_object_kinematic":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorBodyType(actor, "kinematic");
      });
    case "make_character_static":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorBodyType(actor, "static");
      });
    case "make_character_dynamic":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorBodyType(actor, "dynamic");
      });
    case "make_character_kinematic":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorBodyType(actor, "kinematic");
      });
    case "toggle_collision":
      return createInstantRunner(() => {
        if (getPhysicsScriptTarget(actor)) {
          actor.physics.collisionEnabled = block.params.enabled !== "off";
          wakePhysicsItem(actor);
          markProjectDirty();
        }
      });
    case "set_object_trigger_on":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorTriggerMode(actor, true);
      });
    case "set_object_trigger_off":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorTriggerMode(actor, false);
      });
    case "set_character_trigger_on":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorTriggerMode(actor, true);
      });
    case "set_character_trigger_off":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorTriggerMode(actor, false);
      });
    case "set_object_layer":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorPhysicsLayer(actor, block.params.layer);
      });
    case "set_character_layer":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorPhysicsLayer(actor, block.params.layer);
      });
    case "set_object_collision_mask":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) setActorCollisionMask(actor, block.params.mask);
      });
    case "set_character_collision_mask":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) setActorCollisionMask(actor, block.params.mask);
      });
    case "if_actor_overlapping_trigger":
      return createConditionalChildrenRunner(() => actorIsOverlappingTrigger(actor), actor, block, run);
    case "stop_object_momentum":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "object")) stopActorMomentum(actor);
      });
    case "stop_character_momentum":
      return createInstantRunner(() => {
        if (actorMatchesKind(actor, "character")) stopActorMomentum(actor);
      });
    case "play_sound":
      return createInstantRunner(() => playPlaceholderTone("sound", block.params.soundId));
    case "play_music":
      return createInstantRunner(() => playPlaceholderTone("music", block.params.musicId));
    case "stop_sound":
      return createInstantRunner(stopAllAudioNodes);
    case "remove_character":
      return createInstantRunner(() => {
        removeActorFromScene(actor);
        run.stopped = true;
      });
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

function startScriptRun(actor, rootBlock, scope = "actor") {
  const run = {
    id: createBlockId(),
    actorId: actor?.id ?? null,
    scope,
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

  if (actorId == null) {
    for (const rootBlock of state.sceneScripts) {
      if (eventName === "recording_start" && rootBlock.type === "when_recording_start") {
        startScriptRun(null, rootBlock, "scene");
      }
      if (eventName === "key_pressed" && rootBlock.type === "when_key_pressed") {
        if (normalizeScriptKey(rootBlock.params.key || "") === key) {
          startScriptRun(null, rootBlock, "scene");
        }
      }
    }
  }

  for (const actor of state.items) {
    if (actor.groupId && actor.groupScriptHostId && actor.groupScriptHostId !== actor.id) {
      continue;
    }
    const targets = actor.groupId ? getGroupItems(actor.groupId) : [actor];
    if (actorId != null && !targets.some((target) => target.id === actorId)) {
      continue;
    }

    for (const rootBlock of actor.scripts) {
      if (eventName === "recording_start" && rootBlock.type === "when_recording_start") {
        targets.forEach((target) => startScriptRun(target, rootBlock, "actor"));
      }
      if (eventName === "clicked" && rootBlock.type === "when_clicked") {
        targets.forEach((target) => startScriptRun(target, rootBlock, "actor"));
      }
      if (eventName === "key_pressed" && rootBlock.type === "when_key_pressed") {
        if (normalizeScriptKey(rootBlock.params.key || "") === key) {
          targets.forEach((target) => startScriptRun(target, rootBlock, "actor"));
        }
      }
      if (eventName === "trigger_enter" && rootBlock.type === "when_actor_enters_trigger") {
        targets.forEach((target) => startScriptRun(target, rootBlock, "actor"));
      }
      if (eventName === "trigger_exit" && rootBlock.type === "when_actor_exits_trigger") {
        targets.forEach((target) => startScriptRun(target, rootBlock, "actor"));
      }
    }
  }

  const activeSet = getActiveSet();
  for (const actor of activeSet.items) {
    if (actorId != null && actor.id !== actorId) {
      continue;
    }

    for (const rootBlock of actor.scripts) {
      if (eventName === "recording_start" && rootBlock.type === "when_recording_start") {
        startScriptRun(actor, rootBlock, "setActor");
      }
      if (eventName === "clicked" && rootBlock.type === "when_clicked") {
        startScriptRun(actor, rootBlock, "setActor");
      }
      if (eventName === "key_pressed" && rootBlock.type === "when_key_pressed") {
        if (normalizeScriptKey(rootBlock.params.key || "") === key) {
          startScriptRun(actor, rootBlock, "setActor");
        }
      }
    }
  }
}

function updateScripts(deltaSeconds) {
  for (const item of state.items) {
    updateItemTransientState(item, deltaSeconds);
  }
  for (const item of getAllSetItems()) {
    updateItemTransientState(item, deltaSeconds);
  }

  for (const run of state.scriptRunners) {
    if (run.stopped) {
      continue;
    }
    const actor = run.scope === "scene" ? null : run.scope === "setActor" ? getSetItemById(run.actorId)?.item : getItemById(run.actorId);
    if (run.scope !== "scene" && !actor) {
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

  updatePenAnimationRunners(deltaSeconds);
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
  state.stageSelectedDrawingId = null;
  if (ids.length === 1) {
    state.scriptTargetId = ids[0];
  }
  if (!ids.includes(state.physics.objectEditorItemId)) {
    state.physics.objectEditorItemId = null;
  }
  state.selectedScriptBlockId = null;
  state.selectedScriptBlockIds.clear();
  updateSelectionLabel();
  renderScriptEditor();
  renderScriptPalette();
  renderPhysicsControls();
}

function clearSelection() {
  state.selection.clear();
  state.stageSelectedDrawingId = null;
  state.physics.objectEditorItemId = null;
  state.selectedScriptBlockId = null;
  state.selectedScriptBlockIds.clear();
  updateSelectionLabel();
  renderScriptEditor();
  renderScriptPalette();
  renderPhysicsControls();
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
    case "draw":
      return "draw";
    case "audio":
      return "audio";
    default:
      return null;
  }
}

function updateSidebarTabs() {
  for (const button of elements.panelButtons) {
    const isScripts = button.dataset.panel === "scripts";
    const isStage = button.dataset.panel === "stage";
    button.classList.toggle(
      "active",
      isScripts
        ? state.scriptsModuleOpen
        : isStage
          ? state.stageModuleOpen
          : !state.scriptsModuleOpen && !state.stageModuleOpen && button.dataset.panel === state.activePanel,
    );
  }
}

function openScriptsModule() {
  state.scriptsModuleOpen = true;
  closeCharacterBuilder();
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

function openStageModule() {
  ensureDefaultScene();
  ensureDefaultSet();
  state.stageModuleOpen = true;
  state.scriptEditorMode = "main";
  elements.stageModule.classList.remove("hidden");
  closeScriptsModule();
  closeCharacterBuilder();
  updateSidebarTabs();
  renderStageModule();
  ensureCanvasSize();
}

function closeStageModule() {
  state.stageModuleOpen = false;
  state.setInteraction = null;
  hideSetActorContextMenu();
  hideSetDrawingContextMenu();
  closeSetMiniCodePanel();
  closeObjectPhysicsEditor();
  elements.stageModule.classList.add("hidden");
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
    closeStageModule();
    openScriptsModule();
    return;
  }
  if (panelName === "stage") {
    openStageModule();
    return;
  }

  const previousPanel = state.activePanel;
  state.activePanel = panelName;
  state.lastNonScriptPanel = panelName;

  closeScriptsModule();
  closeStageModule();
  closeCharacterBuilder();

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
  renderPhysicsControls();
}

function updateSelectionLabel() {
  const selectedItems = getSelectedItems();
  if (selectedItems.length === 0) {
    elements.selectionLabel.textContent = "No selection.";
    return;
  }

  if (selectedItems.length === 1) {
    const item = selectedItems[0];
    const source = item.kind === "character" ? getCharacterDef(item.subtype) : getObjectDef(item.subtype);
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
    elements.toolLabel.textContent = `Placement tool: ${getCharacterDef(state.activeTool.id).name}. Click the stage to place it.`;
    return;
  }

  if (state.activeTool.type === "object") {
    elements.toolLabel.textContent = `Placement tool: ${getObjectDef(state.activeTool.id).name}. Click the stage to place it.`;
    return;
  }

  if (state.activeTool.type === "texture") {
    elements.toolLabel.textContent = `Texture brush: ${getTextureDef(state.activeTool.id).name}. Drag over an item to apply it.`;
    return;
  }

  if (state.activeTool.type === "draw") {
    elements.toolLabel.textContent = "Drawing pen: drag on the stage to draw.";
    return;
  }

  if (state.activeTool.type === "bucket") {
    elements.toolLabel.textContent = "Paint bucket: click a closed pen shape to fill it.";
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
    closeStageModule();
    closeCharacterBuilder();
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
    spawnX: x,
    spawnY: y,
    w: 82,
    h: 136,
    textureId: null,
    physics: {
      ...createDefaultObjectPhysics("character"),
      friction: state.physics.settings.defaultFriction,
      restitution: state.physics.settings.defaultRestitution,
      linearDrag: state.physics.settings.airDrag,
    },
  });
}

function createObjectItem(objectId, x, y) {
  return normalizeItem({
    id: state.nextId++,
    kind: "object",
    subtype: objectId,
    x,
    y,
    spawnX: x,
    spawnY: y,
    w: 92,
    h: 92,
    textureId: null,
    physics: {
      ...createDefaultObjectPhysics("object"),
      friction: state.physics.settings.defaultFriction,
      restitution: state.physics.settings.defaultRestitution,
      linearDrag: state.physics.settings.airDrag,
    },
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

  pushUndoSnapshot();
  clampItemToStage(item);
  state.items.push(item);
  setSelection([item.id]);
  markProjectDirty();
}

function clampBuilderItem(item) {
  const size = getItemSize(item);
  item.x = clamp(item.x, size.w * 0.5 + 8, CHARACTER_BUILDER_WIDTH - size.w * 0.5 - 8);
  item.y = clamp(item.y, size.h * 0.5 + 8, CHARACTER_BUILDER_HEIGHT - size.h * 0.5 - 8);
}

function getCharacterBuilderPoint(event) {
  const rect = characterBuilderCanvas.getBoundingClientRect();
  return {
    x: clamp((event.clientX - rect.left) * (CHARACTER_BUILDER_WIDTH / Math.max(1, rect.width)), 0, CHARACTER_BUILDER_WIDTH),
    y: clamp((event.clientY - rect.top) * (CHARACTER_BUILDER_HEIGHT / Math.max(1, rect.height)), 0, CHARACTER_BUILDER_HEIGHT),
  };
}

function hitTestBuilderItem(point) {
  for (let index = state.characterBuilder.items.length - 1; index >= 0; index -= 1) {
    const item = state.characterBuilder.items[index];
    if (rectContainsPoint(getItemBounds(item), point.x, point.y)) {
      return item;
    }
  }
  return null;
}

function hitTestBuilderDrawing(point) {
  for (let index = state.characterBuilder.drawings.length - 1; index >= 0; index -= 1) {
    const drawing = state.characterBuilder.drawings[index];
    if (drawing.type === "image" && rectContainsPoint(getDrawingBounds(drawing), point.x, point.y)) {
      return drawing;
    }
    if (drawing.closed && pointInPolygon(point, drawing.points || [])) {
      return drawing;
    }
    for (let pointIndex = 1; pointIndex < (drawing.points?.length || 0); pointIndex += 1) {
      if (distanceToSegment(point, drawing.points[pointIndex - 1], drawing.points[pointIndex]) <= 8) {
        return drawing;
      }
    }
  }
  return null;
}

function setCharacterBuilderTool(tool, id = null) {
  state.characterBuilder.activeTool = tool;
  if (tool === "object" && id) {
    state.characterBuilder.toolSelection.object = id;
  }
  if (tool === "texture" && id) {
    state.characterBuilder.toolSelection.texture = id;
  }
  elements.characterBuilderSelectButton.classList.toggle("active", tool === "select");
  elements.characterBuilderPenButton.classList.toggle("active", tool === "pen");
  elements.characterBuilderBucketButton.classList.toggle("active", tool === "bucket");
  renderCharacterBuilderTools();
}

function renderCharacterBuilderTools() {
  elements.characterBuilderObjectList.innerHTML = "";
  elements.characterBuilderTextureList.innerHTML = "";

  const createBuilderCard = (definition, options, onClick) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tool-card";
    const preview = document.createElement("div");
    preview.className = options.previewClass;
    if (options.previewType === "background") {
      preview.style.background = definition.preview;
    } else {
      preview.textContent = definition.preview;
    }
    if (definition.imageData) {
      preview.textContent = "";
      preview.style.background = `center / contain no-repeat url("${definition.imageData}"), linear-gradient(135deg, #fff8ed, #f7ead7)`;
    }
    const title = document.createElement("div");
    title.className = "tool-card-title";
    title.textContent = definition.name;
    button.append(preview, title);
    button.addEventListener("click", onClick);
    return button;
  };

  for (const objectDef of getObjectDefs()) {
    const card = createBuilderCard(objectDef, {
      previewType: "text",
      previewClass: "object-preview",
    }, () => setCharacterBuilderTool("object", objectDef.id));
    card.classList.toggle(
      "active",
      state.characterBuilder.activeTool === "object" && state.characterBuilder.toolSelection.object === objectDef.id,
    );
    elements.characterBuilderObjectList.append(card);
  }

  for (const texture of getTextureDefs()) {
    const card = createBuilderCard(texture, {
      previewType: "background",
      previewClass: "texture-preview",
    }, () => setCharacterBuilderTool("texture", texture.id));
    card.classList.toggle(
      "active",
      state.characterBuilder.activeTool === "texture" && state.characterBuilder.toolSelection.texture === texture.id,
    );
    elements.characterBuilderTextureList.append(card);
  }
}

function openCharacterBuilder(characterId = null, assetType = "character") {
  const isObjectBuilder = assetType === "object";
  const assetList = isObjectBuilder ? state.customObjects : state.customCharacters;
  const asset = characterId ? assetList.find((candidate) => candidate.id === characterId) : null;
  const assetLabel = isObjectBuilder ? "Object" : "Character";
  state.characterBuilderOpen = true;
  state.characterBuilder.assetType = assetType;
  state.characterBuilder.editingId = asset?.id || null;
  state.characterBuilder.activeTool = "select";
  state.characterBuilder.selectedItemId = null;
  state.characterBuilder.selectedDrawingId = null;
  state.characterBuilder.interaction = null;
  state.characterBuilder.penColor = elements.characterBuilderPenColor.value;
  state.characterBuilder.fillColor = elements.characterBuilderFillColor.value;
  elements.characterBuilderTitle.textContent = `Create ${assetLabel}`;
  elements.characterBuilderNameLabel.textContent = `${assetLabel} name`;
  elements.saveCharacterBuilderButton.textContent = `Save ${assetLabel}`;
  elements.characterBuilderName.value = asset?.name || `Custom ${assetLabel}`;
  elements.characterBuilderLabel.textContent = asset
    ? `Editing ${asset.name}. Save to update this custom ${assetLabel.toLowerCase()} everywhere it is used.`
    : isObjectBuilder
      ? "Build a reusable object out of shapes, imported images, textures, pen drawings, and paint bucket fills."
      : "Build a reusable character out of props, imported images, textures, and pen drawings.";

  if (asset?.builderData) {
    state.characterBuilder.items = (asset.builderData.items || []).map(normalizeItem);
    state.characterBuilder.drawings = (asset.builderData.drawings || []).map(normalizeDrawing);
  } else if (asset?.imageData) {
    state.characterBuilder.items = [];
    state.characterBuilder.drawings = [normalizeDrawing({
      type: "image",
      imageData: asset.imageData,
      x: CHARACTER_BUILDER_WIDTH * 0.5,
      y: CHARACTER_BUILDER_HEIGHT * 0.5,
      w: CHARACTER_BUILDER_WIDTH * 0.62,
      h: CHARACTER_BUILDER_HEIGHT * 0.62,
      points: [],
    })];
  } else {
    state.characterBuilder.items = [];
    state.characterBuilder.drawings = [];
  }

  elements.characterBuilderModule.classList.remove("hidden");
  ensureCharacterBuilderCanvasSize();
  setCharacterBuilderTool("select");
}

function closeCharacterBuilder() {
  state.characterBuilderOpen = false;
  state.characterBuilder.interaction = null;
  state.characterBuilder.selectedItemId = null;
  state.characterBuilder.selectedDrawingId = null;
  elements.characterBuilderModule.classList.add("hidden");
}

function ensureCharacterBuilderCanvasSize() {
  if (characterBuilderCanvas.width !== CHARACTER_BUILDER_WIDTH) {
    characterBuilderCanvas.width = CHARACTER_BUILDER_WIDTH;
  }
  if (characterBuilderCanvas.height !== CHARACTER_BUILDER_HEIGHT) {
    characterBuilderCanvas.height = CHARACTER_BUILDER_HEIGHT;
  }
}

function drawCharacterBuilderContent(options = {}) {
  const { showSelection = true, showBackground = true } = options;
  if (showBackground) {
    ctx.clearRect(0, 0, CHARACTER_BUILDER_WIDTH, CHARACTER_BUILDER_HEIGHT);
    ctx.fillStyle = "#fffdfa";
    ctx.fillRect(0, 0, CHARACTER_BUILDER_WIDTH, CHARACTER_BUILDER_HEIGHT);
    ctx.save();
    ctx.strokeStyle = "rgba(189, 150, 114, 0.18)";
    ctx.lineWidth = 1;
    for (let x = 35; x < CHARACTER_BUILDER_WIDTH; x += 35) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, CHARACTER_BUILDER_HEIGHT);
      ctx.stroke();
    }
    for (let y = 35; y < CHARACTER_BUILDER_HEIGHT; y += 35) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(CHARACTER_BUILDER_WIDTH, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawSetDrawings({ drawings: state.characterBuilder.drawings });
  for (const item of state.characterBuilder.items) {
    drawObject(item);
  }

  if (!showSelection) {
    return;
  }

  const selectedItem = state.characterBuilder.items.find((item) => item.id === state.characterBuilder.selectedItemId);
  if (selectedItem) {
    drawSelectionOutline(selectedItem);
    drawResizeHandles(selectedItem);
    drawRotationHandle(selectedItem);
  }
  const selectedDrawing = state.characterBuilder.drawings.find((drawing) => drawing.id === state.characterBuilder.selectedDrawingId);
  if (selectedDrawing) {
    drawDrawingSelection(selectedDrawing);
    drawDrawingResizeHandles(selectedDrawing);
  }
}

function renderCharacterBuilder() {
  if (!state.characterBuilderOpen) {
    return;
  }
  ensureCharacterBuilderCanvasSize();
  withRenderTarget(characterBuilderCtx, patternCaches.builder, () => {
    drawCharacterBuilderContent({ showSelection: true, showBackground: true });
  });
}

function getCharacterBuilderContentBounds() {
  const bounds = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
  const includeBounds = (rect) => {
    if (!rect) return;
    bounds.left = Math.min(bounds.left, rect.left);
    bounds.top = Math.min(bounds.top, rect.top);
    bounds.right = Math.max(bounds.right, rect.right);
    bounds.bottom = Math.max(bounds.bottom, rect.bottom);
  };

  state.characterBuilder.items.forEach((item) => includeBounds(getItemBounds(item)));
  state.characterBuilder.drawings.forEach((drawing) => includeBounds(getDrawingBounds(drawing)));

  if (!Number.isFinite(bounds.left)) {
    return {
      left: CHARACTER_BUILDER_WIDTH * 0.3,
      top: CHARACTER_BUILDER_HEIGHT * 0.24,
      right: CHARACTER_BUILDER_WIDTH * 0.7,
      bottom: CHARACTER_BUILDER_HEIGHT * 0.76,
    };
  }

  return {
    left: clamp(bounds.left - 22, 0, CHARACTER_BUILDER_WIDTH - 1),
    top: clamp(bounds.top - 22, 0, CHARACTER_BUILDER_HEIGHT - 1),
    right: clamp(bounds.right + 22, 1, CHARACTER_BUILDER_WIDTH),
    bottom: clamp(bounds.bottom + 22, 1, CHARACTER_BUILDER_HEIGHT),
  };
}

function renderCharacterBuilderImage() {
  const bounds = getCharacterBuilderContentBounds();
  const width = Math.max(32, Math.ceil(bounds.right - bounds.left));
  const height = Math.max(32, Math.ceil(bounds.bottom - bounds.top));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const targetCtx = canvas.getContext("2d");
  withRenderTarget(targetCtx, new Map(), () => {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(-bounds.left, -bounds.top);
    drawCharacterBuilderContent({ showSelection: false, showBackground: false });
    ctx.restore();
  });
  return canvas.toDataURL("image/png");
}

function saveCharacterBuilder() {
  pushUndoSnapshot();
  const isObjectBuilder = state.characterBuilder.assetType === "object";
  const name = elements.characterBuilderName.value.trim() || (isObjectBuilder ? "Custom Object" : "Custom Character");
  const imageData = renderCharacterBuilderImage();
  const builderData = {
    items: state.characterBuilder.items.map(serializeItem),
    drawings: state.characterBuilder.drawings.map(serializeDrawing),
  };
  const assetList = isObjectBuilder ? state.customObjects : state.customCharacters;
  let asset = assetList.find((candidate) => candidate.id === state.characterBuilder.editingId);

  if (!asset) {
    asset = {
      id: `custom-${isObjectBuilder ? "object" : "character"}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name,
      preview: "IMG",
      copy: `Created in the ${isObjectBuilder ? "Object" : "Character"} Builder.`,
      imageData,
      builderData,
    };
    if (isObjectBuilder) {
      asset.baseColor = "#f4a261";
    }
    assetList.push(asset);
  } else {
    asset.name = name;
    asset.preview = "IMG";
    asset.copy = `Created in the ${isObjectBuilder ? "Object" : "Character"} Builder.`;
    asset.imageData = imageData;
    asset.builderData = builderData;
    if (isObjectBuilder) {
      asset.baseColor = asset.baseColor || "#f4a261";
    }
  }

  state.setToolSelection[isObjectBuilder ? "object" : "character"] = asset.id;
  setActiveTool(isObjectBuilder ? "object" : "character", asset.id);
  patternCaches.stage.clear();
  patternCaches.recording.clear();
  patternCaches.set.clear();
  patternCaches.builder.clear();
  populateToolLists();
  populateSetToolLists();
  markProjectDirty();
  saveProjectState();
  elements.toolLabel.textContent = `Saved custom ${isObjectBuilder ? "object" : "character"}: ${name}.`;
  closeCharacterBuilder();
}

function addImportedImageToCharacterBuilder(imageData) {
  state.characterBuilder.drawings.push(normalizeDrawing({
    id: `builder-image-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: "image",
    imageData,
    x: CHARACTER_BUILDER_WIDTH * 0.5,
    y: CHARACTER_BUILDER_HEIGHT * 0.5,
    w: CHARACTER_BUILDER_WIDTH * 0.45,
    h: CHARACTER_BUILDER_HEIGHT * 0.36,
    points: [],
  }));
  state.characterBuilder.selectedDrawingId = state.characterBuilder.drawings.at(-1).id;
  state.characterBuilder.selectedItemId = null;
  markProjectDirty();
}

function cloneDrawingForClipboard(drawing) {
  return serializeDrawing(normalizeDrawing(drawing));
}

function offsetDrawing(drawing, dx, dy) {
  if (drawing.type === "image") {
    drawing.x += dx;
    drawing.y += dy;
  } else {
    drawing.points = drawing.points.map((point) => ({ x: point.x + dx, y: point.y + dy }));
  }
}

function applyBuilderTexture(point) {
  const hit = hitTestBuilderItem(point);
  if (!hit) {
    return;
  }
  hit.textureId = state.characterBuilder.toolSelection.texture;
  state.characterBuilder.selectedItemId = hit.id;
  state.characterBuilder.selectedDrawingId = null;
  markProjectDirty();
}

function copyCharacterBuilderSelection() {
  const builder = state.characterBuilder;
  builder.clipboard = { items: [], drawings: [] };
  const selectedItem = builder.items.find((item) => item.id === builder.selectedItemId);
  if (selectedItem) {
    builder.clipboard.items = [serializeItem(selectedItem)];
    return;
  }
  const selectedDrawing = builder.drawings.find((drawing) => drawing.id === builder.selectedDrawingId);
  if (selectedDrawing) {
    builder.clipboard.drawings = [cloneDrawingForClipboard(selectedDrawing)];
  }
}

function pasteCharacterBuilderClipboard() {
  const builder = state.characterBuilder;
  if (!builder.clipboard.items.length && !builder.clipboard.drawings.length) {
    return;
  }
  pushUndoSnapshot();

  if (builder.clipboard.items.length > 0) {
    const template = builder.clipboard.items[0];
    const item = normalizeItem({
      ...template,
      id: state.nextId++,
      x: template.x + 24,
      y: template.y + 24,
      scripts: Array.isArray(template.scripts) ? template.scripts.map(deserializeBlock) : [],
    });
    clampBuilderItem(item);
    builder.items.push(item);
    builder.selectedItemId = item.id;
    builder.selectedDrawingId = null;
  } else {
    const drawing = normalizeDrawing(builder.clipboard.drawings[0]);
    drawing.id = `builder-drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    offsetDrawing(drawing, 24, 24);
    builder.drawings.push(drawing);
    builder.selectedDrawingId = drawing.id;
    builder.selectedItemId = null;
  }
  markProjectDirty();
}

function onCharacterBuilderPointerDown(event) {
  if (!state.characterBuilderOpen || event.button !== 0) {
    return;
  }
  const point = getCharacterBuilderPoint(event);
  characterBuilderCanvas.setPointerCapture?.(event.pointerId);

  if (state.characterBuilder.activeTool === "object") {
    pushUndoSnapshot();
    const item = createObjectItem(state.characterBuilder.toolSelection.object, point.x, point.y);
    clampBuilderItem(item);
    state.characterBuilder.items.push(item);
    state.characterBuilder.selectedItemId = item.id;
    state.characterBuilder.selectedDrawingId = null;
    markProjectDirty();
    return;
  }

  if (state.characterBuilder.activeTool === "texture") {
    pushUndoSnapshot();
    applyBuilderTexture(point);
    state.characterBuilder.interaction = { type: "paintTexture" };
    return;
  }

  if (state.characterBuilder.activeTool === "bucket") {
    pushUndoSnapshot();
    const item = hitTestBuilderItem(point);
    if (fillObjectColor(item, state.characterBuilder.fillColor)) {
      state.characterBuilder.selectedItemId = item.id;
      state.characterBuilder.selectedDrawingId = null;
      return;
    }
    const drawing = hitTestBuilderDrawing(point);
    if (drawing?.closed) {
      drawing.fillColor = state.characterBuilder.fillColor;
      state.characterBuilder.selectedDrawingId = drawing.id;
      state.characterBuilder.selectedItemId = null;
      markProjectDirty();
    }
    return;
  }

  if (state.characterBuilder.activeTool === "pen") {
    pushUndoSnapshot();
    const drawing = normalizeDrawing({
      id: `builder-drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type: "path",
      color: state.characterBuilder.penColor,
      closed: false,
      fillColor: null,
      points: [point],
    });
    state.characterBuilder.drawings.push(drawing);
    state.characterBuilder.selectedDrawingId = drawing.id;
    state.characterBuilder.selectedItemId = null;
    state.characterBuilder.interaction = { type: "draw", drawingId: drawing.id };
    markProjectDirty();
    return;
  }

  const selectedItem = state.characterBuilder.items.find((item) => item.id === state.characterBuilder.selectedItemId);
  const rotateHandle = hitTestRotationHandle(selectedItem, point);
  if (rotateHandle) {
    pushUndoSnapshot();
    state.characterBuilder.interaction = beginRotateInteraction(selectedItem, point);
    return;
  }
  const resizeHandle = hitTestResizeHandle(selectedItem, point);
  if (resizeHandle) {
    pushUndoSnapshot();
    state.characterBuilder.interaction = {
      type: "resize",
      itemId: selectedItem.id,
      handleId: resizeHandle.id,
      startBounds: getItemBounds(selectedItem),
    };
    return;
  }

  const selectedDrawing = state.characterBuilder.drawings.find((drawing) => drawing.id === state.characterBuilder.selectedDrawingId);
  const drawingResizeHandle = hitTestDrawingResizeHandle(selectedDrawing, point);
  if (drawingResizeHandle) {
    pushUndoSnapshot();
    state.characterBuilder.interaction = {
      type: "drawingResize",
      drawingId: selectedDrawing.id,
      handleId: drawingResizeHandle.id,
      startBounds: getDrawingBounds(selectedDrawing),
    };
    return;
  }

  const hitItem = hitTestBuilderItem(point);
  if (hitItem) {
    pushUndoSnapshot();
    state.characterBuilder.selectedItemId = hitItem.id;
    state.characterBuilder.selectedDrawingId = null;
    state.characterBuilder.interaction = { type: "dragItem", itemId: hitItem.id, start: point, x: hitItem.x, y: hitItem.y };
    return;
  }

  const hitDrawing = hitTestBuilderDrawing(point);
  if (hitDrawing) {
    pushUndoSnapshot();
    state.characterBuilder.selectedDrawingId = hitDrawing.id;
    state.characterBuilder.selectedItemId = null;
    state.characterBuilder.interaction = {
      type: "dragDrawing",
      drawingId: hitDrawing.id,
      start: point,
      x: hitDrawing.x,
      y: hitDrawing.y,
      points: hitDrawing.points?.map((drawingPoint) => ({ ...drawingPoint })) || [],
    };
    return;
  }

  state.characterBuilder.selectedItemId = null;
  state.characterBuilder.selectedDrawingId = null;
}

function onCharacterBuilderPointerMove(event) {
  if (!state.characterBuilderOpen || !state.characterBuilder.interaction) {
    return;
  }
  const point = getCharacterBuilderPoint(event);
  const interaction = state.characterBuilder.interaction;

  if (interaction.type === "paintTexture") {
    applyBuilderTexture(point);
    return;
  }

  if (interaction.type === "draw") {
    const drawing = state.characterBuilder.drawings.find((candidate) => candidate.id === interaction.drawingId);
    if (drawing) {
      drawing.points.push(point);
      markProjectDirty();
    }
    return;
  }

  if (interaction.type === "dragItem") {
    const item = state.characterBuilder.items.find((candidate) => candidate.id === interaction.itemId);
    if (item) {
      item.x = interaction.x + point.x - interaction.start.x;
      item.y = interaction.y + point.y - interaction.start.y;
      clampBuilderItem(item);
      markProjectDirty();
    }
    return;
  }

  if (interaction.type === "dragDrawing") {
    const drawing = state.characterBuilder.drawings.find((candidate) => candidate.id === interaction.drawingId);
    const dx = point.x - interaction.start.x;
    const dy = point.y - interaction.start.y;
    if (drawing?.type === "image") {
      drawing.x = interaction.x + dx;
      drawing.y = interaction.y + dy;
      markProjectDirty();
    } else if (drawing) {
      drawing.points = interaction.points.map((drawingPoint) => ({
        x: drawingPoint.x + dx,
        y: drawingPoint.y + dy,
      }));
      markProjectDirty();
    }
    return;
  }

  if (interaction.type === "resize") {
    const item = state.characterBuilder.items.find((candidate) => candidate.id === interaction.itemId);
    if (item) {
      applyResizeFromHandle(item, interaction.handleId, point, interaction.startBounds);
      clampBuilderItem(item);
    }
    return;
  }

  if (interaction.type === "rotate") {
    const item = state.characterBuilder.items.find((candidate) => candidate.id === interaction.itemId);
    if (item) {
      applyRotationFromPoint(item, interaction, point);
    }
    return;
  }

  if (interaction.type === "drawingResize") {
    const drawing = state.characterBuilder.drawings.find((candidate) => candidate.id === interaction.drawingId);
    if (drawing) {
      applyDrawingResizeFromHandle(drawing, interaction.handleId, point, interaction.startBounds);
    }
  }
}

function onCharacterBuilderPointerUp(event) {
  if (state.characterBuilder.interaction?.type === "draw") {
    const drawing = state.characterBuilder.drawings.find((candidate) => candidate.id === state.characterBuilder.interaction.drawingId);
    if (drawing && finalizeDrawingClosure(drawing)) {
      state.characterBuilder.selectedDrawingId = drawing.id;
    }
  }
  state.characterBuilder.interaction = null;
  if (event?.pointerId != null) {
    characterBuilderCanvas.releasePointerCapture?.(event.pointerId);
  }
}

function deleteCharacterBuilderSelection() {
  pushUndoSnapshot();
  const builder = state.characterBuilder;
  if (builder.selectedItemId != null) {
    builder.items = builder.items.filter((item) => item.id !== builder.selectedItemId);
    builder.selectedItemId = null;
    markProjectDirty();
    return true;
  }
  if (builder.selectedDrawingId != null) {
    builder.drawings = builder.drawings.filter((drawing) => drawing.id !== builder.selectedDrawingId);
    builder.selectedDrawingId = null;
    markProjectDirty();
    return true;
  }
  return false;
}

function createLight(x = state.stageWidth * 0.5, y = state.stageHeight * 0.36) {
  return {
    id: `light-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    x,
    y,
    type: elements.setLightType?.value === "moon" ? "moon" : "sun",
    color: elements.setLightColor?.value || "#fff2a6",
    brightness: clamp(Number(elements.setLightBrightness?.value || 55) / 100, 0, 1),
  };
}

function getSetCanvasPoint(event) {
  const rect = setCanvas.getBoundingClientRect();
  return {
    x: clamp((event.clientX - rect.left) * (state.stageWidth / Math.max(1, rect.width)), 0, state.stageWidth),
    y: clamp((event.clientY - rect.top) * (state.stageHeight / Math.max(1, rect.height)), 0, state.stageHeight),
  };
}

function hitTestSetItem(set, x, y) {
  for (let index = set.items.length - 1; index >= 0; index -= 1) {
    const item = set.items[index];
    if (rectContainsPoint(getItemBounds(item), x, y)) {
      return item;
    }
  }
  return null;
}

function hitTestSetLight(set, x, y) {
  for (let index = set.lights.length - 1; index >= 0; index -= 1) {
    const light = set.lights[index];
    const dx = light.x - x;
    const dy = light.y - y;
    if (Math.hypot(dx, dy) <= 18) {
      return light;
    }
  }
  return null;
}

function getSetSelectedItem() {
  const set = getActiveSet();
  return set.items.find((item) => item.id === state.setSelectedItemId) || null;
}

function getSetSelectedItems() {
  const set = getActiveSet();
  return set.items.filter((item) => state.setSelection.has(item.id));
}

function setSetSelection(ids) {
  state.setSelection = new Set(ids);
  state.setSelectedItemId = ids.length === 1 ? ids[0] : null;
  state.setSelectedDrawingId = null;
  state.setSelectedLightId = null;
  renderStageModule();
}

function clearSetSelection() {
  state.setSelection.clear();
  state.setSelectedItemId = null;
  state.setSelectedDrawingId = null;
  state.setSelectedLightId = null;
  renderStageModule();
}

function getResizeHandles(item) {
  const bounds = getItemBounds(item);
  return getResizeHandlesForBounds(bounds);
}

function getResizeHandlesForBounds(bounds) {
  const centerX = (bounds.left + bounds.right) * 0.5;
  const centerY = (bounds.top + bounds.bottom) * 0.5;
  return [
    { id: "nw", x: bounds.left, y: bounds.top },
    { id: "n", x: centerX, y: bounds.top },
    { id: "ne", x: bounds.right, y: bounds.top },
    { id: "e", x: bounds.right, y: centerY },
    { id: "se", x: bounds.right, y: bounds.bottom },
    { id: "s", x: centerX, y: bounds.bottom },
    { id: "sw", x: bounds.left, y: bounds.bottom },
    { id: "w", x: bounds.left, y: centerY },
  ];
}

function getItemsBounds(items) {
  if (!items.length) {
    return null;
  }
  return items.reduce(
    (bounds, item) => {
      const itemBounds = getItemBounds(item);
      bounds.left = Math.min(bounds.left, itemBounds.left);
      bounds.top = Math.min(bounds.top, itemBounds.top);
      bounds.right = Math.max(bounds.right, itemBounds.right);
      bounds.bottom = Math.max(bounds.bottom, itemBounds.bottom);
      return bounds;
    },
    { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity },
  );
}

function hitTestSelectionResizeHandle(point) {
  const selectedItems = getSelectedItems();
  if (selectedItems.length < 2) {
    return null;
  }
  const bounds = getItemsBounds(selectedItems);
  for (const handle of getResizeHandlesForBounds(bounds)) {
    if (Math.hypot(handle.x - point.x, handle.y - point.y) <= 13) {
      return handle;
    }
  }
  return null;
}

function hitTestResizeHandle(item, point) {
  if (!item) {
    return null;
  }

  for (const handle of getResizeHandles(item)) {
    if (Math.hypot(handle.x - point.x, handle.y - point.y) <= 13) {
      return handle;
    }
  }
  return null;
}

function getRotationHandle(item) {
  const bounds = getItemBounds(item);
  return {
    id: "rotate",
    x: (bounds.left + bounds.right) * 0.5,
    y: bounds.top - 34,
  };
}

function hitTestRotationHandle(item, point) {
  if (!item) {
    return null;
  }
  const handle = getRotationHandle(item);
  return Math.hypot(handle.x - point.x, handle.y - point.y) <= 14 ? handle : null;
}

function getPointerRotation(item, point) {
  return Math.atan2(point.y - item.y, point.x - item.x);
}

function beginRotateInteraction(item, point) {
  return {
    type: "rotate",
    itemId: item.id,
    startAngle: getPointerRotation(item, point),
    startRotation: item.rotation || 0,
  };
}

function applyRotationFromPoint(item, interaction, point) {
  item.rotation = interaction.startRotation + getPointerRotation(item, point) - interaction.startAngle;
  markProjectDirty();
}

function applyResizeFromHandle(item, handleId, point, startBounds) {
  const minSize = 18;
  const centerX = (startBounds.left + startBounds.right) * 0.5;
  const centerY = (startBounds.top + startBounds.bottom) * 0.5;
  let width = startBounds.right - startBounds.left;
  let height = startBounds.bottom - startBounds.top;

  if (handleId.includes("e") || handleId.includes("w")) {
    width = Math.max(minSize, Math.abs(point.x - centerX) * 2);
  }
  if (handleId.includes("n") || handleId.includes("s")) {
    height = Math.max(minSize, Math.abs(point.y - centerY) * 2);
  }

  if (handleId.length === 2) {
    const ratio = Math.max(width / Math.max(minSize, startBounds.right - startBounds.left), height / Math.max(minSize, startBounds.bottom - startBounds.top));
    width = Math.max(minSize, (startBounds.right - startBounds.left) * ratio);
    height = Math.max(minSize, (startBounds.bottom - startBounds.top) * ratio);
  }

  const baseScale = clamp((item.sizePct || 100) / 100, 0.2, 3);
  item.scaleX = clamp(width / Math.max(1, item.w * baseScale), 0.15, 8);
  item.scaleY = clamp(height / Math.max(1, item.h * baseScale), 0.15, 8);
  clampItemToStage(item);
  resyncPhysicsBodyAfterResize(item);
  markProjectDirty();
}

function applySelectionResizeFromHandle(handleId, point, startBounds, snapshots) {
  const minSize = 32;
  const centerX = (startBounds.left + startBounds.right) * 0.5;
  const centerY = (startBounds.top + startBounds.bottom) * 0.5;
  const startWidth = Math.max(minSize, startBounds.right - startBounds.left);
  const startHeight = Math.max(minSize, startBounds.bottom - startBounds.top);
  let width = startWidth;
  let height = startHeight;

  if (handleId.includes("e") || handleId.includes("w")) {
    width = Math.max(minSize, Math.abs(point.x - centerX) * 2);
  }
  if (handleId.includes("n") || handleId.includes("s")) {
    height = Math.max(minSize, Math.abs(point.y - centerY) * 2);
  }
  if (handleId.length === 2) {
    const ratio = Math.max(width / startWidth, height / startHeight);
    width = startWidth * ratio;
    height = startHeight * ratio;
  }

  const scaleX = width / startWidth;
  const scaleY = height / startHeight;
  for (const item of getSelectedItems()) {
    const snapshot = snapshots.get(item.id);
    if (!snapshot) {
      continue;
    }
    item.x = centerX + (snapshot.x - centerX) * scaleX;
    item.y = centerY + (snapshot.y - centerY) * scaleY;
    item.scaleX = clamp(snapshot.scaleX * scaleX, 0.15, 8);
    item.scaleY = clamp(snapshot.scaleY * scaleY, 0.15, 8);
    clampItemToStage(item);
    resyncPhysicsBodyAfterResize(item);
  }
  markProjectDirty();
}

function applyDrawingResizeFromHandle(drawing, handleId, point, startBounds) {
  const minSize = 24;
  const centerX = (startBounds.left + startBounds.right) * 0.5;
  const centerY = (startBounds.top + startBounds.bottom) * 0.5;
  let width = startBounds.right - startBounds.left;
  let height = startBounds.bottom - startBounds.top;

  if (handleId.includes("e") || handleId.includes("w")) {
    width = Math.max(minSize, Math.abs(point.x - centerX) * 2);
  }
  if (handleId.includes("n") || handleId.includes("s")) {
    height = Math.max(minSize, Math.abs(point.y - centerY) * 2);
  }
  if (handleId.length === 2) {
    const ratio = Math.max(width / Math.max(minSize, startBounds.right - startBounds.left), height / Math.max(minSize, startBounds.bottom - startBounds.top));
    width = Math.max(minSize, (startBounds.right - startBounds.left) * ratio);
    height = Math.max(minSize, (startBounds.bottom - startBounds.top) * ratio);
  }

  if (drawing.type === "image") {
    drawing.w = width;
    drawing.h = height;
  } else {
    const startWidth = Math.max(minSize, startBounds.right - startBounds.left);
    const startHeight = Math.max(minSize, startBounds.bottom - startBounds.top);
    const scaleX = width / startWidth;
    const scaleY = height / startHeight;
    drawing.points = (drawing.points || []).map((drawingPoint) => ({
      x: centerX + (drawingPoint.x - centerX) * scaleX,
      y: centerY + (drawingPoint.y - centerY) * scaleY,
    }));
  }
  markProjectDirty();
}

function getDrawingResizeHandles(drawing) {
  const bounds = getDrawingBounds(drawing);
  if (!bounds) {
    return [];
  }
  const centerX = (bounds.left + bounds.right) * 0.5;
  const centerY = (bounds.top + bounds.bottom) * 0.5;
  return [
    { id: "nw", x: bounds.left, y: bounds.top },
    { id: "n", x: centerX, y: bounds.top },
    { id: "ne", x: bounds.right, y: bounds.top },
    { id: "e", x: bounds.right, y: centerY },
    { id: "se", x: bounds.right, y: bounds.bottom },
    { id: "s", x: centerX, y: bounds.bottom },
    { id: "sw", x: bounds.left, y: bounds.bottom },
    { id: "w", x: bounds.left, y: centerY },
  ];
}

function hitTestDrawingResizeHandle(drawing, point) {
  if (!drawing) {
    return null;
  }
  for (const handle of getDrawingResizeHandles(drawing)) {
    if (Math.hypot(handle.x - point.x, handle.y - point.y) <= 13) {
      return handle;
    }
  }
  return null;
}

function getDrawingBounds(drawing) {
  if (drawing.type === "image") {
    return {
      left: drawing.x - drawing.w * 0.5,
      top: drawing.y - drawing.h * 0.5,
      right: drawing.x + drawing.w * 0.5,
      bottom: drawing.y + drawing.h * 0.5,
    };
  }
  if (!drawing.points?.length) {
    return null;
  }
  return drawing.points.reduce(
    (bounds, point) => ({
      left: Math.min(bounds.left, point.x),
      top: Math.min(bounds.top, point.y),
      right: Math.max(bounds.right, point.x),
      bottom: Math.max(bounds.bottom, point.y),
    }),
    { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity },
  );
}

function isDrawingCloseCandidate(drawing) {
  if (!drawing || drawing.type === "image" || drawing.closed || !Array.isArray(drawing.points) || drawing.points.length < 4) {
    return false;
  }
  const first = drawing.points[0];
  const last = drawing.points[drawing.points.length - 1];
  return Math.hypot(first.x - last.x, first.y - last.y) <= DRAWING_CLOSE_DISTANCE;
}

function finalizeDrawingClosure(drawing) {
  if (!isDrawingCloseCandidate(drawing)) {
    return false;
  }
  const first = drawing.points[0];
  drawing.points[drawing.points.length - 1] = { x: first.x, y: first.y };
  drawing.closed = true;
  return true;
}

function pointInPolygon(point, points) {
  let inside = false;
  for (let index = 0, previous = points.length - 1; index < points.length; previous = index, index += 1) {
    const currentPoint = points[index];
    const previousPoint = points[previous];
    const intersects =
      currentPoint.y > point.y !== previousPoint.y > point.y &&
      point.x < ((previousPoint.x - currentPoint.x) * (point.y - currentPoint.y)) / (previousPoint.y - currentPoint.y || 1) + currentPoint.x;
    if (intersects) {
      inside = !inside;
    }
  }
  return inside;
}

function distanceToSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (dx === 0 && dy === 0) {
    return Math.hypot(point.x - a.x, point.y - a.y);
  }
  const t = clamp(((point.x - a.x) * dx + (point.y - a.y) * dy) / (dx * dx + dy * dy), 0, 1);
  const closest = { x: a.x + dx * t, y: a.y + dy * t };
  return Math.hypot(point.x - closest.x, point.y - closest.y);
}

function hitTestSetDrawing(set, point) {
  for (let index = set.drawings.length - 1; index >= 0; index -= 1) {
    const drawing = set.drawings[index];
    if (drawing.type === "image") {
      if (rectContainsPoint(getDrawingBounds(drawing), point.x, point.y)) {
        return drawing;
      }
      continue;
    }
    if (drawing.closed && pointInPolygon(point, drawing.points || [])) {
      return drawing;
    }
    for (let pointIndex = 1; pointIndex < drawing.points.length; pointIndex += 1) {
      if (distanceToSegment(point, drawing.points[pointIndex - 1], drawing.points[pointIndex]) <= 8) {
        return drawing;
      }
    }
  }
  return null;
}

function hitTestStageDrawing(point) {
  return hitTestSetDrawing({ drawings: state.stageDrawings }, point);
}

function getSetMiniScriptTarget() {
  if (state.setMiniCodeItemId == null) {
    return null;
  }
  return getSetItemById(state.setMiniCodeItemId)?.item || null;
}

function setSetEditorTool(tool) {
  state.setEditorTool = tool;
  state.setSelection.clear();
  state.setSelectedLightId = null;
  state.setSelectedItemId = null;
  state.setSelectedDrawingId = null;
  state.setPointerMoved = false;
  hideSetDrawingContextMenu();
  renderStageModule();
}

function selectSetToolItem(type, id) {
  state.setToolSelection[type] = id;
  renderStageModule();
}

function renderSceneList() {
  ensureDefaultScene();
  elements.sceneList.innerHTML = "";
  for (const scene of state.scenes) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "set-card";
    button.classList.toggle("active", scene.id === state.activeSceneId);
    button.innerHTML = `<strong>${scene.name}</strong><span>${scene.items.length} actor${scene.items.length === 1 ? "" : "s"} | ${scene.drawings.length} drawing${scene.drawings.length === 1 ? "" : "s"}</span>`;
    button.addEventListener("click", () => selectSceneWorkspace(scene.id));
    elements.sceneList.append(button);
  }
}

function addSceneWorkspace() {
  pushUndoSnapshot();
  syncCurrentSceneToWorkspace();
  const scene = createSceneWorkspace(createSceneName());
  state.scenes.push(scene);
  loadSceneWorkspace(scene.id);
  markProjectDirty();
  renderStageModule();
}

function selectSceneWorkspace(sceneId) {
  if (sceneId === state.activeSceneId) {
    return;
  }
  syncCurrentSceneToWorkspace();
  loadSceneWorkspace(sceneId);
  markProjectDirty();
  renderStageModule();
}

function addStageSet() {
  pushUndoSnapshot();
  const nextSet = createStageSet(createSetName());
  state.sets.push(nextSet);
  state.activeSetId = nextSet.id;
  state.setSelection.clear();
  state.setSelectedItemId = null;
  state.setSelectedDrawingId = null;
  state.setSelectedLightId = null;
  state.setMiniCodeItemId = null;
  markProjectDirty();
  renderStageModule();
}

function selectStageSet(setId) {
  state.activeSetId = setId;
  state.sceneSetId = setId;
  state.setSelection.clear();
  state.setSelectedItemId = null;
  state.setSelectedDrawingId = null;
  state.setSelectedLightId = null;
  state.setMiniCodeItemId = null;
  hideSetActorContextMenu();
  closeObjectPhysicsEditor();
  state.scriptEditorMode = "main";
  markProjectDirty();
  renderStageModule();
}

function placeSetItem(point) {
  const set = getActiveSet();
  let item = null;
  if (state.setEditorTool === "character") {
    item = createCharacterItem(state.setToolSelection.character, point.x, point.y);
  } else if (state.setEditorTool === "object") {
    item = createObjectItem(state.setToolSelection.object, point.x, point.y);
  }
  if (!item) {
    return;
  }
  clampItemToStage(item);
  set.items.push(item);
  setSetSelection([item.id]);
  markProjectDirty();
}

function applySetTextureAtPoint(point) {
  const set = getActiveSet();
  const hit = hitTestSetItem(set, point.x, point.y);
  if (hit) {
    hit.textureId = state.setToolSelection.texture;
    state.setSelection = new Set([hit.id]);
    state.setSelectedItemId = hit.id;
    state.setSelectedDrawingId = null;
    markProjectDirty();
  }
}

function openSetMiniCodePanel(itemId) {
  state.setMiniCodeItemId = itemId;
  state.selectedScriptBlockId = null;
  state.scriptEditorMode = "set";
  state.setSelection = new Set([itemId]);
  state.setSelectedItemId = itemId;
  state.setSelectedDrawingId = null;
  state.setSelectedLightId = null;
  elements.setMiniCodePanel.classList.remove("hidden");
  renderSetMiniCodePanel();
}

function showSetActorContextMenu(item, event) {
  if (!item) {
    return;
  }
  state.setContextItemId = item.id;
  elements.setActorContextPhysicsToggleButton.textContent = item.physics?.enabled ? "Physics Off" : "Physics On";
  const panelRect = elements.stageModule.querySelector(".stage-module-shell").getBoundingClientRect();
  elements.setActorContextMenu.style.left = `${clamp(event.clientX - panelRect.left, 12, panelRect.width - 170)}px`;
  elements.setActorContextMenu.style.top = `${clamp(event.clientY - panelRect.top, 12, panelRect.height - 170)}px`;
  elements.setActorContextMenu.classList.remove("hidden");
}

function hideSetActorContextMenu() {
  state.setContextItemId = null;
  elements.setActorContextMenu.classList.add("hidden");
}

function showSetDrawingContextMenu(drawingId, event) {
  state.setContextDrawingId = drawingId;
  const panelRect = elements.stageModule.querySelector(".stage-module-shell").getBoundingClientRect();
  elements.setDrawingContextMenu.style.left = `${clamp(event.clientX - panelRect.left, 12, panelRect.width - 170)}px`;
  elements.setDrawingContextMenu.style.top = `${clamp(event.clientY - panelRect.top, 12, panelRect.height - 90)}px`;
  elements.setDrawingContextMenu.classList.remove("hidden");
}

function hideSetDrawingContextMenu() {
  state.setContextDrawingId = null;
  elements.setDrawingContextMenu.classList.add("hidden");
}

function deleteSetContextDrawing() {
  if (!state.setContextDrawingId) {
    return;
  }
  pushUndoSnapshot();
  const set = getActiveSet();
  set.drawings = set.drawings.filter((drawing) => drawing.id !== state.setContextDrawingId);
  if (state.setSelectedDrawingId === state.setContextDrawingId) {
    state.setSelectedDrawingId = null;
  }
  hideSetDrawingContextMenu();
  markProjectDirty();
  renderStageModule();
}

function closeSetMiniCodePanel() {
  state.setMiniCodeItemId = null;
  state.selectedScriptBlockId = null;
  state.scriptEditorMode = "main";
  elements.setMiniCodePanel.classList.add("hidden");
}

function deleteSelectedSetThing() {
  pushUndoSnapshot();
  const set = getActiveSet();
  if (state.setSelection.size > 0) {
    const deletedIds = new Set(state.setSelection);
    set.items = set.items.filter((item) => !deletedIds.has(item.id));
    if (deletedIds.has(state.setMiniCodeItemId)) {
      closeSetMiniCodePanel();
    }
    state.setSelection.clear();
    state.setSelectedItemId = null;
    markProjectDirty();
    renderStageModule();
    return true;
  }
  if (state.setSelectedDrawingId != null) {
    set.drawings = set.drawings.filter((drawing) => drawing.id !== state.setSelectedDrawingId);
    state.setSelectedDrawingId = null;
    markProjectDirty();
    renderStageModule();
    return true;
  }
  if (state.setSelectedLightId != null) {
    set.lights = set.lights.filter((light) => light.id !== state.setSelectedLightId);
    state.setSelectedLightId = null;
    markProjectDirty();
    renderStageModule();
    return true;
  }
  return false;
}

function copySetSelection() {
  const set = getActiveSet();
  state.setClipboard = {
    items: getSetSelectedItems().map(serializeItem),
    drawings: state.setSelectedDrawingId
      ? set.drawings
        .filter((drawing) => drawing.id === state.setSelectedDrawingId)
        .map((drawing) => JSON.parse(JSON.stringify(drawing)))
      : [],
  };
  elements.setEditorLabel.textContent = `Copied ${state.setClipboard.items.length + state.setClipboard.drawings.length} set item${state.setClipboard.items.length + state.setClipboard.drawings.length === 1 ? "" : "s"}.`;
}

function pasteSetClipboard() {
  const set = getActiveSet();
  pushUndoSnapshot();
  const newIds = [];
  for (const template of state.setClipboard.items) {
    const item = normalizeItem({
      ...template,
      id: state.nextId++,
      x: template.x + 28,
      y: template.y + 28,
      scripts: Array.isArray(template.scripts) ? template.scripts.map(deserializeBlock) : [],
    });
    clampItemToStage(item);
    set.items.push(item);
    newIds.push(item.id);
  }

  for (const template of state.setClipboard.drawings) {
    const drawing = JSON.parse(JSON.stringify(template));
    drawing.id = `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    if (drawing.type === "image") {
      drawing.x += 28;
      drawing.y += 28;
    } else {
      drawing.points = drawing.points.map((point) => ({ x: point.x + 28, y: point.y + 28 }));
    }
    set.drawings.push(drawing);
    state.setSelectedDrawingId = drawing.id;
  }

  if (newIds.length > 0) {
    setSetSelection(newIds);
  } else {
    state.setSelection.clear();
    state.setSelectedItemId = null;
    state.setSelectedLightId = null;
    renderStageModule();
  }
  markProjectDirty();
}

function updateSelectedSetLightControls() {
  const set = getActiveSet();
  const light = set.lights.find((candidate) => candidate.id === state.setSelectedLightId);
  if (!light) {
    return;
  }
  light.type = elements.setLightType.value === "moon" ? "moon" : "sun";
  light.color = elements.setLightColor.value;
  light.brightness = clamp(Number(elements.setLightBrightness.value) / 100, 0, 1);
  markProjectDirty();
}

function syncLightControls(light) {
  if (!light) {
    return;
  }
  elements.setLightType.value = light.type;
  elements.setLightColor.value = light.color;
  elements.setLightBrightness.value = Math.round(light.brightness * 100);
}

function fillSetDrawingAtPoint(point) {
  const set = getActiveSet();
  const item = hitTestSetItem(set, point.x, point.y);
  if (fillObjectColor(item, elements.setFillColor.value)) {
    state.setSelection = new Set([item.id]);
    state.setSelectedItemId = item.id;
    state.setSelectedLightId = null;
    state.setSelectedDrawingId = null;
    return;
  }
  const drawing = hitTestSetDrawing(set, point);
  if (!drawing?.closed) {
    elements.setEditorLabel.textContent = "The paint bucket fills objects and closed set drawings.";
    return;
  }
  drawing.fillColor = elements.setFillColor.value;
  state.setSelection.clear();
  state.setSelectedItemId = null;
  state.setSelectedLightId = null;
  state.setSelectedDrawingId = drawing.id;
  markProjectDirty();
}

function onSetPointerDown(event) {
  if (!state.stageModuleOpen || event.button !== 0) {
    return;
  }
  const point = getSetCanvasPoint(event);
  const set = getActiveSet();
  state.setPointerMoved = false;
  setCanvas.setPointerCapture?.(event.pointerId);
  hideSetActorContextMenu();
  hideSetDrawingContextMenu();

  if (state.setEditorTool === "character" || state.setEditorTool === "object") {
    pushUndoSnapshot();
    placeSetItem(point);
    return;
  }

  if (state.setEditorTool === "texture") {
    pushUndoSnapshot();
    applySetTextureAtPoint(point);
    state.setInteraction = { type: "paintTexture" };
    return;
  }

  if (state.setEditorTool === "pen") {
    pushUndoSnapshot();
    const drawing = {
      id: `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      color: state.setPenColor,
      closed: false,
      fillColor: null,
      points: [point],
    };
    set.drawings.push(drawing);
    state.setInteraction = { type: "draw", drawingId: drawing.id };
    markProjectDirty();
    return;
  }

  if (state.setEditorTool === "bucket") {
    pushUndoSnapshot();
    fillSetDrawingAtPoint(point);
    return;
  }

  if (state.setEditorTool === "light") {
    pushUndoSnapshot();
    const hitLight = hitTestSetLight(set, point.x, point.y);
    const light = hitLight || createLight(point.x, point.y);
    if (!hitLight) {
      set.lights.push(light);
    }
    state.setSelectedLightId = light.id;
    state.setSelectedItemId = null;
    state.setSelectedDrawingId = null;
    state.setSelection.clear();
    syncLightControls(light);
    state.setInteraction = { type: "dragLight", lightId: light.id, start: point, x: light.x, y: light.y };
    markProjectDirty();
    return;
  }

  const setSelectedItem = getSetSelectedItem();
  const rotateHandle = hitTestRotationHandle(setSelectedItem, point);
  if (rotateHandle) {
    pushUndoSnapshot();
    state.setInteraction = beginRotateInteraction(setSelectedItem, point);
    return;
  }

  const resizeHandle = hitTestResizeHandle(setSelectedItem, point);
  if (resizeHandle) {
    pushUndoSnapshot();
    state.setInteraction = {
      type: "resizeItem",
      itemId: setSelectedItem.id,
      start: point,
      handleId: resizeHandle.id,
      startBounds: getItemBounds(setSelectedItem),
    };
    return;
  }

  const selectedDrawing = set.drawings.find((drawing) => drawing.id === state.setSelectedDrawingId);
  const drawingResizeHandle = hitTestDrawingResizeHandle(selectedDrawing, point);
  if (drawingResizeHandle) {
    pushUndoSnapshot();
    state.setInteraction = {
      type: "resizeDrawing",
      drawingId: selectedDrawing.id,
      handleId: drawingResizeHandle.id,
      startBounds: getDrawingBounds(selectedDrawing),
    };
    return;
  }

  const light = hitTestSetLight(set, point.x, point.y);
  if (light) {
    pushUndoSnapshot();
    state.setSelectedLightId = light.id;
    state.setSelectedItemId = null;
    state.setSelectedDrawingId = null;
    state.setSelection.clear();
    syncLightControls(light);
    state.setInteraction = { type: "dragLight", lightId: light.id, start: point, x: light.x, y: light.y };
    renderStageModule();
    return;
  }

  const item = hitTestSetItem(set, point.x, point.y);
  if (item) {
    const wasAlreadySelected = state.setSelection.has(item.id);
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      if (state.setSelection.has(item.id)) {
        state.setSelection.delete(item.id);
      } else {
        state.setSelection.add(item.id);
      }
    } else if (!state.setSelection.has(item.id)) {
      state.setSelection = new Set([item.id]);
    }
    state.setSelectedItemId = state.setSelection.size === 1 ? [...state.setSelection][0] : null;
    state.setSelectedLightId = null;
    state.setSelectedDrawingId = null;
    const snapshot = new Map();
    for (const selectedItem of getSetSelectedItems()) {
      snapshot.set(selectedItem.id, { x: selectedItem.x, y: selectedItem.y });
    }
    pushUndoSnapshot();
    state.setInteraction = { type: "dragItem", itemId: item.id, start: point, snapshot, wasAlreadySelected };
    renderStageModule();
    return;
  }

  const drawing = hitTestSetDrawing(set, point);
  if (drawing) {
    state.setSelection.clear();
    state.setSelectedItemId = null;
    state.setSelectedLightId = null;
    state.setSelectedDrawingId = drawing.id;
    pushUndoSnapshot();
    const bounds = getDrawingBounds(drawing);
    state.setInteraction = {
      type: "dragDrawing",
      drawingId: drawing.id,
      start: point,
      x: drawing.x,
      y: drawing.y,
      points: drawing.points?.map((drawingPoint) => ({ ...drawingPoint })) || [],
      bounds,
    };
    renderStageModule();
    return;
  }

  clearSetSelection();
  state.setInteraction = { type: "setMarquee", start: point, current: point };
}

function onSetPointerMove(event) {
  if (!state.setInteraction) {
    return;
  }
  const point = getSetCanvasPoint(event);
  const set = getActiveSet();
  state.setPointerMoved = true;

  if (state.setInteraction.type === "draw") {
    const drawing = set.drawings.find((candidate) => candidate.id === state.setInteraction.drawingId);
    if (drawing) {
      drawing.points.push(point);
      markProjectDirty();
    }
    return;
  }

  if (state.setInteraction.type === "paintTexture") {
    applySetTextureAtPoint(point);
    return;
  }

  if (state.setInteraction.type === "dragItem") {
    const dx = point.x - state.setInteraction.start.x;
    const dy = point.y - state.setInteraction.start.y;
    for (const item of getSetSelectedItems()) {
      const snapshot = state.setInteraction.snapshot.get(item.id);
      if (!snapshot) {
        continue;
      }
      item.x = snapshot.x + dx;
      item.y = snapshot.y + dy;
      clampItemToStage(item);
      markProjectDirty();
    }
    return;
  }

  if (state.setInteraction.type === "dragDrawing") {
    const drawing = set.drawings.find((candidate) => candidate.id === state.setInteraction.drawingId);
    const dx = point.x - state.setInteraction.start.x;
    const dy = point.y - state.setInteraction.start.y;
    if (drawing?.type === "image") {
      drawing.x = state.setInteraction.x + dx;
      drawing.y = state.setInteraction.y + dy;
    } else if (drawing) {
      drawing.points = state.setInteraction.points.map((drawingPoint) => ({
        x: drawingPoint.x + dx,
        y: drawingPoint.y + dy,
      }));
    }
    markProjectDirty();
    return;
  }

  if (state.setInteraction.type === "setMarquee") {
    state.setInteraction.current = point;
    return;
  }

  if (state.setInteraction.type === "resizeItem") {
    const item = set.items.find((candidate) => candidate.id === state.setInteraction.itemId);
    if (item) {
      applyResizeFromHandle(item, state.setInteraction.handleId, point, state.setInteraction.startBounds);
    }
    return;
  }

  if (state.setInteraction.type === "rotate") {
    const item = set.items.find((candidate) => candidate.id === state.setInteraction.itemId);
    if (item) {
      applyRotationFromPoint(item, state.setInteraction, point);
    }
    return;
  }

  if (state.setInteraction.type === "resizeDrawing") {
    const drawing = set.drawings.find((candidate) => candidate.id === state.setInteraction.drawingId);
    if (drawing) {
      applyDrawingResizeFromHandle(drawing, state.setInteraction.handleId, point, state.setInteraction.startBounds);
    }
    return;
  }

  if (state.setInteraction.type === "dragLight") {
    const light = set.lights.find((candidate) => candidate.id === state.setInteraction.lightId);
    if (light) {
      light.x = clamp(state.setInteraction.x + point.x - state.setInteraction.start.x, 0, state.stageWidth);
      light.y = clamp(state.setInteraction.y + point.y - state.setInteraction.start.y, 0, state.stageHeight);
      markProjectDirty();
    }
  }
}

function onSetPointerUp(event) {
  if (state.setInteraction?.type === "draw") {
    const drawing = getActiveSet().drawings.find((candidate) => candidate.id === state.setInteraction.drawingId);
    if (drawing && finalizeDrawingClosure(drawing)) {
      state.setSelectedDrawingId = drawing.id;
    }
  }
  if (
    state.setInteraction?.type === "dragItem" &&
    state.setInteraction.wasAlreadySelected &&
    !state.setPointerMoved
  ) {
    clearSetSelection();
  }
  if (state.setInteraction?.type === "setMarquee") {
    const { start, current } = state.setInteraction;
    const marquee = {
      left: Math.min(start.x, current.x),
      top: Math.min(start.y, current.y),
      right: Math.max(start.x, current.x),
      bottom: Math.max(start.y, current.y),
    };
    if (Math.abs(current.x - start.x) > 4 || Math.abs(current.y - start.y) > 4) {
      setSetSelection(
        getActiveSet().items
          .filter((item) => rectContainsRect(marquee, getItemBounds(item)))
          .map((item) => item.id),
      );
    }
  }
  state.setInteraction = null;
  state.setPointerMoved = false;
  if (event?.pointerId != null) {
    setCanvas.releasePointerCapture?.(event.pointerId);
  }
}

function onSetContextMenu(event) {
  if (!state.stageModuleOpen) {
    return;
  }
  event.preventDefault();
  const point = getSetCanvasPoint(event);
  const item = hitTestSetItem(getActiveSet(), point.x, point.y);
  if (item) {
    setSetSelection([item.id]);
    hideSetDrawingContextMenu();
    showSetActorContextMenu(item, event);
    renderStageModule();
    return;
  }
  hideSetActorContextMenu();
  const drawing = hitTestSetDrawing(getActiveSet(), point);
  if (drawing) {
    state.setSelection.clear();
    state.setSelectedItemId = null;
    state.setSelectedLightId = null;
    state.setSelectedDrawingId = drawing.id;
    showSetDrawingContextMenu(drawing.id, event);
    renderStageModule();
    return;
  }
  hideSetDrawingContextMenu();
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
  const selectedItems = getSelectedItems();
  if (state.physics.enabled) {
    const blockedItem = selectedItems.find((item) => isPhysicsObject(item) && !item.physics.canGrab);
    if (blockedItem) {
      elements.toolLabel.textContent = "Manual grab is turned off for that object.";
      return;
    }
  }

  const snapshot = new Map();
  for (const item of selectedItems) {
    snapshot.set(item.id, { x: item.x, y: item.y });
    if (state.physics.enabled && isPhysicsObject(item) && item.physics.enabled) {
      const body = ensurePhysicsRuntime(item);
      body.dragging = true;
      wakePhysicsItem(item);
    }
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
  if (state.screen !== "studio" || state.characterBuilderOpen || event.button !== 0) {
    return;
  }

  const point = getCanvasPoint(event);
  state.lastPointer = { x: point.x, y: point.y, inside: true };
  stageCanvas.setPointerCapture?.(event.pointerId);
  hideActorContextMenu();
  hideDrawingContextMenu();

  if (state.penAnimation.actorId && state.penAnimation.tool) {
    startPenAnimationDrawing(point);
    return;
  }

  if (state.activeTool && (state.activeTool.type === "character" || state.activeTool.type === "object")) {
    placeItemFromTool(point);
    return;
  }

  if (state.activeTool && state.activeTool.type === "texture") {
    pushUndoSnapshot();
    state.dragPaintedIds = new Set();
    applyTextureAtPoint(point);
    state.interaction = { type: "paintTexture" };
    return;
  }

  if (state.activeTool && state.activeTool.type === "bucket") {
    pushUndoSnapshot();
    const item = hitTest(point.x, point.y);
    if (fillObjectColor(item, state.activeTool.id || elements.stageFillColor.value)) {
      setSelection([item.id]);
      elements.toolLabel.textContent = "Filled object color.";
      return;
    }
    const drawing = hitTestStageDrawing(point);
    if (drawing?.closed) {
      drawing.fillColor = state.activeTool.id || elements.stageFillColor.value;
      state.stageSelectedDrawingId = drawing.id;
      state.selection.clear();
      elements.toolLabel.textContent = "Filled closed drawing.";
      markProjectDirty();
    } else {
      elements.toolLabel.textContent = "The paint bucket fills objects and closed pen shapes.";
    }
    return;
  }

  if (state.activeTool && state.activeTool.type === "draw") {
    pushUndoSnapshot();
    const drawing = {
      id: `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type: "path",
      color: state.activeTool.id || elements.stagePenColor.value,
      closed: false,
      fillColor: null,
      points: [point],
    };
    state.stageDrawings.push(drawing);
    state.interaction = { type: "stageDraw", drawingId: drawing.id };
    markProjectDirty();
    return;
  }

  const selectionResizeHandle = hitTestSelectionResizeHandle(point);
  if (selectionResizeHandle) {
    pushUndoSnapshot();
    const snapshots = new Map();
    for (const item of getSelectedItems()) {
      snapshots.set(item.id, {
        x: item.x,
        y: item.y,
        scaleX: item.scaleX || 1,
        scaleY: item.scaleY || 1,
      });
    }
    state.interaction = {
      type: "selectionResize",
      handleId: selectionResizeHandle.id,
      startBounds: getItemsBounds(getSelectedItems()),
      snapshots,
    };
    return;
  }

  const selectedItem = getSingleSelectedItem();
  const rotateHandle = hitTestRotationHandle(selectedItem, point);
  if (rotateHandle) {
    pushUndoSnapshot();
    state.interaction = beginRotateInteraction(selectedItem, point);
    return;
  }
  const resizeHandle = hitTestResizeHandle(selectedItem, point);
  if (resizeHandle) {
    pushUndoSnapshot();
    state.interaction = {
      type: "resize",
      itemId: selectedItem.id,
      handleId: resizeHandle.id,
      startBounds: getItemBounds(selectedItem),
    };
    return;
  }

  const hit = hitTest(point.x, point.y);
  if (hit) {
    triggerScripts("clicked", { actorId: hit.id });
    if (!state.selection.has(hit.id)) {
      if (hit.groupId) {
        setSelection(state.items.filter((item) => item.groupId === hit.groupId).map((item) => item.id));
      } else {
        setSelection([hit.id]);
      }
    }
    pushUndoSnapshot();
    startDragSelection(point);
  } else {
    const drawing = hitTestStageDrawing(point);
    if (drawing) {
      pushUndoSnapshot();
      state.selection.clear();
      state.stageSelectedDrawingId = drawing.id;
      updateSelectionLabel();
      elements.selectionLabel.textContent = drawing.closed ? "Selected: closed pen shape" : "Selected: pen drawing";
      state.interaction = {
        type: "stageDragDrawing",
        drawingId: drawing.id,
        start: point,
        x: drawing.x,
        y: drawing.y,
        points: drawing.points?.map((drawingPoint) => ({ ...drawingPoint })) || [],
      };
    } else {
      clearSelection();
      beginMarquee(point);
    }
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
      const nextX = snapshot.x + dx;
      const nextY = snapshot.y + dy;
      if (state.physics.enabled && isPhysicsObject(item) && item.physics.enabled) {
        moveActorDirectly(item, nextX, nextY, 1 / 60);
        ensurePhysicsRuntime(item).dragging = true;
      } else {
        item.x = nextX;
        item.y = nextY;
        clampItemToStage(item);
      }
    }
    return;
  }

  if (state.interaction.type === "marquee") {
    state.interaction.current = point;
    return;
  }

  if (state.interaction.type === "resize") {
    const item = getItemById(state.interaction.itemId);
    if (item) {
      applyResizeFromHandle(item, state.interaction.handleId, point, state.interaction.startBounds);
      if (state.physics.enabled && isPhysicsObject(item)) {
        wakePhysicsItem(item);
      }
    }
    return;
  }

  if (state.interaction.type === "rotate") {
    const item = getItemById(state.interaction.itemId);
    if (item) {
      applyRotationFromPoint(item, state.interaction, point);
      if (state.physics.enabled && isPhysicsObject(item)) {
        wakePhysicsItem(item);
      }
    }
    return;
  }

  if (state.interaction.type === "selectionResize") {
    applySelectionResizeFromHandle(
      state.interaction.handleId,
      point,
      state.interaction.startBounds,
      state.interaction.snapshots,
    );
    return;
  }

  if (state.interaction.type === "paintTexture") {
    applyTextureAtPoint(point);
    return;
  }

  if (state.interaction.type === "stageDraw") {
    const drawing = state.stageDrawings.find((candidate) => candidate.id === state.interaction.drawingId);
    if (drawing) {
      drawing.points.push(point);
      markProjectDirty();
    }
    return;
  }

  if (state.interaction.type === "stageDragDrawing") {
    const drawing = state.stageDrawings.find((candidate) => candidate.id === state.interaction.drawingId);
    const dx = point.x - state.interaction.start.x;
    const dy = point.y - state.interaction.start.y;
    if (drawing?.type === "image") {
      drawing.x = state.interaction.x + dx;
      drawing.y = state.interaction.y + dy;
    } else if (drawing) {
      drawing.points = state.interaction.points.map((drawingPoint) => ({
        x: drawingPoint.x + dx,
        y: drawingPoint.y + dy,
      }));
    }
    markProjectDirty();
    return;
  }

  if (state.interaction.type === "penLine") {
    const actor = getItemById(state.interaction.actorId);
    if (actor) {
      state.penAnimation.draft = [state.interaction.startPoint, point];
    }
    return;
  }

  if (state.interaction.type === "penFreehand") {
    state.penAnimation.draft.push(point);
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

  if (state.interaction?.type === "penLine" || state.interaction?.type === "penFreehand") {
    saveDraftPenAnimation();
  }

  if (state.interaction?.type === "stageDraw") {
    const drawing = state.stageDrawings.find((candidate) => candidate.id === state.interaction.drawingId);
    if (drawing && finalizeDrawingClosure(drawing)) {
      state.stageSelectedDrawingId = drawing.id;
      elements.toolLabel.textContent = "Closed shape created. Use the paint bucket to fill it.";
    }
  }

  for (const item of state.items) {
    if (isPhysicsObject(item)) {
      ensurePhysicsRuntime(item).dragging = false;
    }
  }
  state.interaction = null;
  state.dragPaintedIds = new Set();
  if (event?.pointerId != null) {
    stageCanvas.releasePointerCapture?.(event.pointerId);
  }
  markProjectDirty();
}

function showActorContextMenu(actor, event) {
  state.contextActorId = actor.id;
  const selectedItems = getSelectedItems();
  const selectedObject = selectedItems.find((item) => item.kind === "object");
  const selectedGroupId = actor.groupId && selectedItems.every((item) => item.groupId === actor.groupId) ? actor.groupId : null;
  const canCodeSelection = selectedItems.length === 1 || Boolean(selectedGroupId);
  const characterDef = actor.kind === "character" ? getCharacterDef(actor.subtype) : null;
  elements.actorContextCodeButton.classList.toggle("hidden", !canCodeSelection);
  elements.actorContextPenButton.classList.toggle("hidden", selectedItems.length !== 1 || !isPhysicsObject(actor));
  elements.actorContextEditCharacterButton.classList.toggle("hidden", selectedItems.length !== 1 || !characterDef?.builderData);
  elements.actorContextPhysicsToggleButton.classList.toggle("hidden", !(selectedItems.length === 1 && isPhysicsObject(actor)));
  elements.actorContextPhysicsToggleButton.textContent = actor.physics?.enabled ? "Physics Off" : "Physics On";
  elements.actorContextPhysicsButton.classList.toggle("hidden", !(selectedItems.length === 1 && isPhysicsObject(actor)));
  elements.actorContextGroupButton.classList.toggle("hidden", selectedItems.length < 2);
  elements.actorContextUngroupButton.classList.toggle("hidden", !selectedItems.some((item) => item.groupId));
  elements.actorContextColor.parentElement.classList.toggle("hidden", !selectedObject);
  if (selectedObject) {
    elements.actorContextColor.value = selectedObject.color || getObjectDef(selectedObject.subtype).baseColor || "#f4a261";
  }
  const panelRect = elements.actorContextMenu.parentElement.getBoundingClientRect();
  elements.actorContextMenu.style.left = `${clamp(event.clientX - panelRect.left, 12, panelRect.width - 150)}px`;
  elements.actorContextMenu.style.top = `${clamp(event.clientY - panelRect.top, 12, panelRect.height - 188)}px`;
  elements.actorContextMenu.classList.remove("hidden");
}

function hideActorContextMenu() {
  elements.actorContextMenu.classList.add("hidden");
}

function showDrawingContextMenu(drawingId, event) {
  state.contextDrawingId = drawingId;
  const panelRect = elements.drawingContextMenu.parentElement.getBoundingClientRect();
  elements.drawingContextMenu.style.left = `${clamp(event.clientX - panelRect.left, 12, panelRect.width - 170)}px`;
  elements.drawingContextMenu.style.top = `${clamp(event.clientY - panelRect.top, 12, panelRect.height - 90)}px`;
  elements.drawingContextMenu.classList.remove("hidden");
}

function hideDrawingContextMenu() {
  state.contextDrawingId = null;
  elements.drawingContextMenu.classList.add("hidden");
}

function deleteContextDrawing() {
  if (!state.contextDrawingId) {
    return;
  }
  pushUndoSnapshot();
  state.stageDrawings = state.stageDrawings.filter((drawing) => drawing.id !== state.contextDrawingId);
  if (state.stageSelectedDrawingId === state.contextDrawingId) {
    state.stageSelectedDrawingId = null;
  }
  hideDrawingContextMenu();
  markProjectDirty();
}

function toggleActorPhysicsEnabled(actorId) {
  const actor = getItemById(actorId);
  if (!actor || !isPhysicsObject(actor)) {
    return;
  }
  pushUndoSnapshot();
  const nextEnabled = !actor.physics.enabled;
  actor.physics.enabled = nextEnabled;
  if (nextEnabled) {
    state.physics.enabled = true;
    state.physics.statusMessage = "Physics on. Place or drag stage actors to test collisions.";
    resetPhysicsBody(actor);
    wakePhysicsItem(actor);
  } else {
    resetPhysicsBody(actor);
  }
  markProjectDirty();
  renderPhysicsControls();
}

function openPenAnimationEditorForActor(actorId) {
  const actor = getItemById(actorId);
  if (!actor) {
    return;
  }
  state.penAnimation.actorId = actor.id;
  state.penAnimation.tool = null;
  state.penAnimation.drawing = false;
  state.penAnimation.draft = null;
  elements.penAnimationDuration.value = String(actor.penAnimation?.duration || 2);
  elements.penAnimationTitle.textContent = `Pen Animation: ${getActorDisplayName(actor)}`;
  elements.penAnimationPanel.classList.remove("hidden");
  hideActorContextMenu();
  hideSetActorContextMenu();
  updatePenAnimationUi();
}

function onStageContextMenu(event) {
  if (state.screen !== "studio" || state.stageModuleOpen || state.characterBuilderOpen) {
    return;
  }
  event.preventDefault();
  const point = getCanvasPoint(event);
  const actor = hitTest(point.x, point.y);
  if (!actor) {
    const drawing = hitTestStageDrawing(point);
    if (drawing) {
      hideActorContextMenu();
      state.selection.clear();
      state.stageSelectedDrawingId = drawing.id;
      updateSelectionLabel();
      showDrawingContextMenu(drawing.id, event);
      return;
    }
    hideActorContextMenu();
    hideDrawingContextMenu();
    return;
  }
  hideDrawingContextMenu();
  if (!state.selection.has(actor.id)) {
    if (actor.groupId) {
      setSelection(state.items.filter((item) => item.groupId === actor.groupId).map((item) => item.id));
    } else {
      setSelection([actor.id]);
    }
  }
  showActorContextMenu(actor, event);
}

function openContextActorCode() {
  const actor = getItemById(state.contextActorId);
  if (!actor) {
    return;
  }
  const host = getScriptTargetHost(actor);
  state.scriptTargetId = host.id;
  state.selectedScriptBlockId = null;
  setSelection(actor.groupId ? getGroupItems(actor.groupId).map((item) => item.id) : [actor.id]);
  hideActorContextMenu();
  openScriptsModule();
}

function openContextCharacterBuilder() {
  const actor = getItemById(state.contextActorId);
  if (!actor || actor.kind !== "character") {
    return;
  }
  hideActorContextMenu();
  openCharacterBuilder(actor.subtype);
}

function openPenAnimationEditor() {
  openPenAnimationEditorForActor(state.contextActorId);
}

function closePenAnimationEditor() {
  state.penAnimation.actorId = null;
  state.penAnimation.tool = null;
  state.penAnimation.drawing = false;
  state.penAnimation.draft = null;
  elements.penAnimationPanel.classList.add("hidden");
  updatePenAnimationUi();
}

function setPenAnimationTool(tool) {
  state.penAnimation.tool = tool;
  state.penAnimation.draft = null;
  updatePenAnimationUi();
}

function updatePenAnimationUi() {
  elements.penLineToolButton.classList.toggle("active", state.penAnimation.tool === "line");
  elements.penFreehandToolButton.classList.toggle("active", state.penAnimation.tool === "freehand");
}

function startPenAnimationDrawing(point) {
  const actor = getItemById(state.penAnimation.actorId);
  if (!actor) {
    return;
  }
  const startPoint = { x: actor.x, y: actor.y };
  if (state.penAnimation.tool === "line") {
    state.penAnimation.draft = [startPoint, point];
    state.interaction = { type: "penLine", actorId: actor.id, startPoint };
  } else {
    state.penAnimation.draft = [startPoint, point];
    state.interaction = { type: "penFreehand", actorId: actor.id, startPoint };
  }
}

function saveDraftPenAnimation() {
  const actor = getItemById(state.penAnimation.actorId);
  if (!actor || !state.penAnimation.draft || state.penAnimation.draft.length < 2) {
    return;
  }
  const penAnimation = normalizePenAnimation({
    type: state.penAnimation.tool === "line" ? "line" : "freehand",
    duration: Number(elements.penAnimationDuration.value || 2),
    points: state.penAnimation.draft,
  });
  const name = window.prompt("Name this pen animation:", `${getActorDisplayName(actor)} Path`);
  if (!name) {
    state.penAnimation.draft = null;
    return;
  }
  actor.penAnimation = penAnimation;
  state.animationChunks.push({
    id: `chunk-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    kind: "pen",
    blocks: [],
    penAnimation,
  });
  state.penAnimation.draft = null;
  renderScriptPalette();
  markProjectDirty();
}

function deletePenAnimation() {
  const actor = getItemById(state.penAnimation.actorId);
  if (!actor) {
    return;
  }
  actor.penAnimation = null;
  state.penAnimation.draft = null;
  markProjectDirty();
}

function previewPenAnimation() {
  const actor = getItemById(state.penAnimation.actorId);
  if (!actor?.penAnimation) {
    return;
  }
  state.penAnimationRunners = state.penAnimationRunners.filter((runner) => runner.actorId !== actor.id || !runner.preview);
  state.penAnimationRunners.push(createPenAnimationRunner(actor, actor.penAnimation, { preview: true, restorePosition: { x: actor.x, y: actor.y } }));
}

function groupSelection() {
  const selected = getSelectedItems();
  if (selected.length < 2) {
    return;
  }
  const groupId = `group-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const hostId = selected[0].id;
  for (const item of selected) {
    item.groupId = groupId;
    item.groupScriptHostId = hostId;
  }
  markProjectDirty();
  hideActorContextMenu();
}

function ungroupSelection() {
  const selected = getSelectedItems();
  const groupIds = new Set(selected.map((item) => item.groupId).filter(Boolean));
  for (const item of state.items) {
    if (groupIds.has(item.groupId)) {
      item.groupId = null;
      item.groupScriptHostId = null;
    }
  }
  markProjectDirty();
  hideActorContextMenu();
}

function changeSelectedObjectColor(color) {
  pushUndoSnapshot();
  for (const item of getSelectedItems()) {
    if (item.kind === "object") {
      item.color = color;
    }
  }
  markProjectDirty();
}

function fillObjectColor(item, color) {
  if (!item || item.kind !== "object") {
    return false;
  }
  item.color = color;
  markProjectDirty();
  return true;
}

function copySelection() {
  if (state.stageSelectedDrawingId != null) {
    const drawing = state.stageDrawings.find((candidate) => candidate.id === state.stageSelectedDrawingId);
    state.stageDrawingClipboard = drawing ? [cloneDrawingForClipboard(drawing)] : [];
    state.clipboard = [];
    elements.toolLabel.textContent = "Copied drawing. Press Ctrl+V to paste.";
    return;
  }

  const selected = getSelectedItems();
  if (selected.length === 0) {
    return;
  }

  state.stageDrawingClipboard = [];
  state.clipboard = selected.map((item) => ({
    ...serializeItem(item),
  }));
  elements.toolLabel.textContent = `Copied ${selected.length} item${selected.length === 1 ? "" : "s"}. Press Ctrl+V to paste.`;
}

function pasteClipboard() {
  if (state.stageDrawingClipboard.length > 0 && state.clipboard.length === 0) {
    pushUndoSnapshot();
    const drawing = normalizeDrawing(state.stageDrawingClipboard[0]);
    drawing.id = `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    offsetDrawing(drawing, 28, 28);
    state.stageDrawings.push(drawing);
    state.stageSelectedDrawingId = drawing.id;
    state.selection.clear();
    elements.selectionLabel.textContent = drawing.closed ? "Selected: closed pen shape" : "Selected: pen drawing";
    markProjectDirty();
    return;
  }

  if (state.clipboard.length === 0) {
    return;
  }
  pushUndoSnapshot();

  const bounds = state.clipboard.reduce(
    (accumulator, item) => {
      const scale = (item.sizePct || 100) / 100;
      const width = item.w * scale * (item.scaleX || 1);
      const height = item.h * scale * (item.scaleY || 1);
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
  const pastedGroupIds = new Map();
  const pastedGroupHosts = new Map();
  const oldToNewIds = new Map();
  for (const template of state.clipboard) {
    const item =
      template.kind === "character"
        ? createCharacterItem(template.subtype, template.x + dx, template.y + dy)
        : createObjectItem(template.subtype, template.x + dx, template.y + dy);

    oldToNewIds.set(template.id, item.id);
    item.w = template.w;
    item.h = template.h;
    item.textureId = template.textureId;
    item.imageData = template.imageData || null;
    item.facing = template.facing ?? 1;
    item.sizePct = template.sizePct ?? 100;
    item.scaleX = template.scaleX ?? 1;
    item.scaleY = template.scaleY ?? 1;
    item.rotation = template.rotation ?? 0;
    item.penAnimation = template.penAnimation ? normalizePenAnimation(template.penAnimation) : null;
    item.color = template.color || null;
    item.physics = normalizeObjectPhysics(template.physics, template.kind);
    resetPhysicsBody(item);
    if (template.groupId) {
      if (!pastedGroupIds.has(template.groupId)) {
        pastedGroupIds.set(template.groupId, `group-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`);
      }
      item.groupId = pastedGroupIds.get(template.groupId);
      if (!pastedGroupHosts.has(template.groupId)) {
        pastedGroupHosts.set(template.groupId, item.id);
      }
      item.groupScriptHostId = pastedGroupHosts.get(template.groupId);
    }
    item.scripts = Array.isArray(template.scripts) ? template.scripts.map(deserializeBlock) : [];
    clampItemToStage(item);
    state.items.push(item);
    newIds.push(item.id);
  }

  for (const item of state.items) {
    const template = state.clipboard.find((candidate) => oldToNewIds.get(candidate.id) === item.id);
    if (template?.groupScriptHostId && oldToNewIds.has(template.groupScriptHostId)) {
      item.groupScriptHostId = oldToNewIds.get(template.groupScriptHostId);
    }
  }

  setSelection(newIds);
  markProjectDirty();
}

function deleteSelection() {
  pushUndoSnapshot();
  if (state.stageSelectedDrawingId != null) {
    state.stageDrawings = state.stageDrawings.filter((drawing) => drawing.id !== state.stageSelectedDrawingId);
    state.stageSelectedDrawingId = null;
    elements.toolLabel.textContent = "Drawing deleted.";
    markProjectDirty();
    return;
  }
  if (state.selection.size === 0) {
    return;
  }

  const deletingPhysicsEditorItem = state.selection.has(state.physics.objectEditorItemId);
  state.items = state.items.filter((item) => !state.selection.has(item.id));
  if (deletingPhysicsEditorItem) {
    state.physics.objectEditorItemId = null;
  }
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
    if (state.characterBuilderOpen) {
      copyCharacterBuilderSelection();
      return;
    }
    if (state.stageModuleOpen) {
      copySetSelection();
      return;
    }
    copySelection();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && key === "v") {
    event.preventDefault();
    if (state.characterBuilderOpen) {
      pasteCharacterBuilderClipboard();
      return;
    }
    if (state.stageModuleOpen) {
      pasteSetClipboard();
      return;
    }
    pasteClipboard();
    return;
  }

  if (key === "backspace") {
    event.preventDefault();
    if (state.characterBuilderOpen) {
      deleteCharacterBuilderSelection();
      return;
    }
    if (!deleteSelectedScriptBlock()) {
      if (state.stageModuleOpen) {
        deleteSelectedSetThing();
        return;
      }
      deleteSelection();
    }
    return;
  }

  if (key === "escape") {
    hideBlockInfo();
    hideActorContextMenu();
    if (!elements.penAnimationPanel.classList.contains("hidden")) {
      closePenAnimationEditor();
      return;
    }
    if (state.stageModuleOpen && state.setMiniCodeItemId != null) {
      closeSetMiniCodePanel();
      return;
    }
    if (state.stageModuleOpen) {
      clearSetSelection();
      return;
    }
    if (state.characterBuilderOpen) {
      closeCharacterBuilder();
      return;
    }
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
    if (state.physics.enabled && isPhysicsObject(item) && item.physics.enabled) {
      moveActorDirectly(item, item.x + dx, item.y + dy, deltaSeconds);
    } else {
      item.x += dx;
      item.y += dy;
      clampItemToStage(item);
    }
  }
  markProjectDirty();
}

function prepareStageForRecording() {
  clearAllScriptRunners();
  stopAllAudioNodes();
  state.physics.accumulator = 0;
  state.physics.activeTriggerPairs = new Set();
  state.physics.pendingTriggerEvents = [];
  state.physics.debugTriggerPairs = [];
  state.physics.debugCollisionPairs = [];
  for (const item of getActiveStageActors()) {
    if (!isPhysicsObject(item) || !item.physics.enabled) {
      continue;
    }
    resetPhysicsBody(item);
    if (!item.physics.startAsleep) {
      wakePhysicsItem(item);
    }
  }
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
    for (const item of getAllSetItems()) {
      clampItemToStage(item);
    }
  }

  if (state.stageModuleOpen) {
    const setRect = setFrame.getBoundingClientRect();
    const setWidth = Math.max(1, Math.floor(setRect.width));
    const setHeight = Math.max(1, Math.floor(setRect.height));
    const dpr = window.devicePixelRatio || 1;
    if (setCanvas.width !== Math.floor(setWidth * dpr) || setCanvas.height !== Math.floor(setHeight * dpr)) {
      setCanvas.width = Math.floor(setWidth * dpr);
      setCanvas.height = Math.floor(setHeight * dpr);
      setCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      patternCaches.set.clear();
    }
  }
}

function buildPattern(textureId) {
  if (patternCache.has(textureId)) {
    return patternCache.get(textureId);
  }

  const customTexture = state.customTextures.find((texture) => texture.id === textureId);
  if (customTexture?.imageData) {
    const image = getImportedImage(customTexture.imageData);
    if (!image?.complete || image.naturalWidth === 0) {
      return null;
    }
    const pattern = ctx.createPattern(image, "repeat");
    patternCache.set(textureId, pattern);
    return pattern;
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

function drawPhysicsBadge(item) {
  if (!currentRenderFlags.showPhysicsBadges || !state.physics.enabled || !isPhysicsObject(item) || !item.physics.enabled) {
    return;
  }
  const bounds = getItemBounds(item);
  const layerMeta = getPhysicsLayerMeta(item.physics.layer);
  const label = item.physics.triggerMode ? "T" : item.physics.bodyType === "static" ? "S" : item.physics.bodyType === "kinematic" ? "K" : "D";
  ctx.save();
  ctx.fillStyle = item.physics.triggerMode
    ? "#ffd166"
    : item.physics.bodyType === "static"
      ? "#7d7d7d"
      : item.physics.bodyType === "kinematic"
        ? "#5d76db"
        : state.physics.gravityEnabled && item.physics.gravityAffected
          ? "#e56c3f"
          : "#2f8f83";
  ctx.strokeStyle = "#fffdfa";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(bounds.right - 8, bounds.top + 8, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#fffdfa";
  ctx.font = "900 10px Trebuchet MS";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, bounds.right - 8, bounds.top + 8.5);
  ctx.fillStyle = layerMeta.color;
  ctx.fillRect(bounds.left + 4, bounds.top + 3, 20, 4);
  ctx.restore();
}

function drawPhysicsDebugOverlay() {
  if (!state.physics.enabled || !currentRenderFlags.showPhysicsDebug) {
    return;
  }
  ctx.save();
  ctx.setLineDash([8, 6]);
  ctx.lineWidth = 2;
  for (const item of getActiveStageActors()) {
    if (!isPhysicsObject(item) || !item.physics.enabled) {
      continue;
    }
    const shape = getPhysicsShape(item);
    const layerMeta = getPhysicsLayerMeta(item.physics.layer);
    ctx.strokeStyle = state.physics.settings.layerDebugView
      ? layerMeta.color
      : item.physics.triggerMode
        ? "rgba(255, 209, 102, 0.9)"
        : item.physics.collisionEnabled
          ? "rgba(47, 143, 131, 0.8)"
          : "rgba(169, 47, 47, 0.8)";
    if (item.physics.triggerMode && state.physics.settings.triggerDebugView) {
      ctx.fillStyle = "rgba(255, 209, 102, 0.16)";
    } else if (state.physics.settings.layerDebugView) {
      ctx.fillStyle = `${layerMeta.color}22`;
    } else {
      ctx.fillStyle = "transparent";
    }
    if (shape.type === "circle") {
      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
      if (ctx.fillStyle !== "transparent") {
        ctx.fill();
      }
      ctx.stroke();
    } else {
      if (ctx.fillStyle !== "transparent") {
        ctx.fillRect(shape.x - shape.halfW, shape.y - shape.halfH, shape.halfW * 2, shape.halfH * 2);
      }
      ctx.strokeRect(shape.x - shape.halfW, shape.y - shape.halfH, shape.halfW * 2, shape.halfH * 2);
    }
  }
  if (state.physics.settings.overlapDebugView) {
    ctx.setLineDash([]);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "rgba(47, 143, 131, 0.55)";
    for (const [leftId, rightId] of state.physics.debugCollisionPairs) {
      const left = getItemById(leftId);
      const right = getItemById(rightId);
      if (!left || !right) {
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(255, 209, 102, 0.85)";
    for (const [leftId, rightId] of state.physics.debugTriggerPairs) {
      const left = getItemById(leftId);
      const right = getItemById(rightId);
      if (!left || !right) {
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawImportedImageItem(item, imageData, fallbackColor) {
  const image = getImportedImage(imageData);
  const size = getItemSize(item);
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  drawShadow(item);

  ctx.save();
  ctx.translate(item.x + visual.offsetX, item.y + visual.offsetY);
  ctx.rotate((item.rotation || 0) + visual.rotation);
  ctx.scale(item.facing * visual.scaleX, visual.scaleY);
  if (image?.complete && image.naturalWidth > 0) {
    ctx.drawImage(image, -size.w * 0.5, -size.h * 0.5, size.w, size.h);
  } else {
    drawFilledRoundedRect(ctx, -size.w * 0.5, -size.h * 0.5, size.w, size.h, 16, fallbackColor, "rgba(47, 28, 15, 0.7)");
  }
  if (item.textureId || item.color) {
    ctx.globalAlpha = 0.68;
    ctx.globalCompositeOperation = "source-atop";
    ctx.fillStyle = item.textureId ? resolveFill(item, fallbackColor) : item.color;
    ctx.fillRect(-size.w * 0.5, -size.h * 0.5, size.w, size.h);
  }
  ctx.restore();
  drawPhysicsBadge(item);
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
  const character = getCharacterDef(item.subtype);
  if (character.imageData) {
    drawImportedImageItem(item, character.imageData, "#dfe8f4");
    return;
  }
  const bodyFill = resolveFill(item, character.bodyColor);
  const scale = (item.sizePct || 100) / 100;
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  drawShadow(item);

  ctx.save();
  ctx.translate(item.x + visual.offsetX, item.y + visual.offsetY);
  ctx.rotate((item.rotation || 0) + visual.rotation);
  ctx.scale(scale * (item.scaleX || 1) * item.facing * visual.scaleX, scale * (item.scaleY || 1) * visual.scaleY);

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
    drawPhysicsBadge(item);
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
  drawPhysicsBadge(item);
}

function drawObject(item) {
  const objectDef = getObjectDef(item.subtype);
  if (objectDef.imageData) {
    drawImportedImageItem(item, objectDef.imageData, "#f4a261");
    return;
  }
  const fillStyle = resolveFill(item, item.color || objectDef.baseColor);
  const scale = (item.sizePct || 100) / 100;
  const visual = item.runtime?.visual ?? createItemRuntime().visual;
  drawShadow(item);

  ctx.save();
  ctx.translate(item.x + visual.offsetX, item.y + visual.offsetY);
  ctx.rotate((item.rotation || 0) + visual.rotation);
  ctx.scale(scale * (item.scaleX || 1) * item.facing * visual.scaleX, scale * (item.scaleY || 1) * visual.scaleY);
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
  drawPhysicsBadge(item);
}

function drawSelectionOutline(item) {
  const bounds = getItemBounds(item);
  ctx.save();
  ctx.strokeStyle = "#2f8f83";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([10, 7]);
  roundRectPath(ctx, bounds.left - 8, bounds.top - 8, bounds.right - bounds.left + 16, bounds.bottom - bounds.top + 16, 18);
  ctx.stroke();
  ctx.restore();
}

function drawResizeHandles(item) {
  drawResizeHandlesForBounds(getItemBounds(item));
}

function drawResizeHandlesForBounds(bounds) {
  ctx.save();
  ctx.setLineDash([]);
  for (const handle of getResizeHandlesForBounds(bounds)) {
    ctx.fillStyle = "#fffdfa";
    ctx.strokeStyle = "#2f8f83";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(handle.x, handle.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

function drawRotationHandle(item) {
  if (!item) {
    return;
  }
  const bounds = getItemBounds(item);
  const handle = getRotationHandle(item);
  ctx.save();
  ctx.setLineDash([]);
  ctx.strokeStyle = "#e56c3f";
  ctx.fillStyle = "#fffdfa";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo((bounds.left + bounds.right) * 0.5, bounds.top - 8);
  ctx.lineTo(handle.x, handle.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(handle.x, handle.y, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#e56c3f";
  ctx.font = "900 12px Trebuchet MS";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("R", handle.x, handle.y + 0.5);
  ctx.restore();
}

function drawDrawingResizeHandles(drawing) {
  ctx.save();
  ctx.setLineDash([]);
  for (const handle of getDrawingResizeHandles(drawing)) {
    ctx.fillStyle = "#fffdfa";
    ctx.strokeStyle = "#2f8f83";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(handle.x, handle.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
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

function drawSceneLighting() {
  if (!state.scene.lightingStrength) {
    return;
  }

  const { r, g, b } = hexToRgb(state.scene.lightingColor);
  ctx.save();
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${state.scene.lightingStrength})`;
  ctx.fillRect(0, 0, state.stageWidth, state.stageHeight);
  ctx.restore();
}

function drawSetDrawings(set) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
  for (const drawing of set.drawings) {
    if (drawing.type === "image") {
      const image = getImportedImage(drawing.imageData);
      if (image?.complete && image.naturalWidth > 0) {
        ctx.drawImage(image, drawing.x - drawing.w * 0.5, drawing.y - drawing.h * 0.5, drawing.w, drawing.h);
      }
      continue;
    }
    if (!drawing.points || drawing.points.length < 2) {
      continue;
    }
    const closeHint =
      state.interaction?.drawingId === drawing.id ||
      state.setInteraction?.drawingId === drawing.id ||
      state.characterBuilder.interaction?.drawingId === drawing.id;
    ctx.strokeStyle = closeHint && isDrawingCloseCandidate(drawing) ? "#ffd166" : drawing.color || "#2f8f83";
    ctx.beginPath();
    drawing.points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    if (drawing.closed) {
      ctx.closePath();
      if (drawing.fillColor) {
        ctx.fillStyle = drawing.fillColor;
        ctx.fill();
      }
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawDrawingSelection(drawing) {
  const bounds = getDrawingBounds(drawing);
  if (!bounds) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = "#2f8f83";
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 6]);
  ctx.strokeRect(bounds.left - 8, bounds.top - 8, bounds.right - bounds.left + 16, bounds.bottom - bounds.top + 16);
  ctx.restore();
}

function drawSetMarquee() {
  if (!state.setInteraction || state.setInteraction.type !== "setMarquee") {
    return;
  }
  const { start, current } = state.setInteraction;
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

function drawSetLights(set, showEditorHandles = false) {
  for (const light of set.lights) {
    const { r, g, b } = hexToRgb(light.color);
    const radius = light.type === "moon" ? 180 : 240;
    const gradient = ctx.createRadialGradient(light.x, light.y, 8, light.x, light.y, radius);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${clamp(light.brightness, 0, 1) * 0.42})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, state.stageWidth, state.stageHeight);
    ctx.restore();

    if (showEditorHandles) {
      ctx.save();
      ctx.fillStyle = light.type === "moon" ? "#d8ecff" : "#ffd166";
      ctx.strokeStyle = state.setSelectedLightId === light.id ? "#2f8f83" : "rgba(47, 28, 15, 0.68)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(light.x, light.y, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#2c1d14";
      ctx.font = "800 10px Trebuchet MS";
      ctx.textAlign = "center";
      ctx.fillText(light.type === "moon" ? "M" : "S", light.x, light.y + 4);
      ctx.restore();
    }
  }
}

function drawSetContent(set, options = {}) {
  const { showEditorHandles = false } = options;
  if (!set) {
    return;
  }

  drawSetDrawings(set);
  for (const item of set.items) {
    if (item.kind === "character") {
      drawCharacter(item);
    } else {
      drawObject(item);
    }
  }
  drawSetLights(set, showEditorHandles);

  if (showEditorHandles) {
    for (const item of set.items) {
      if (state.setSelection.has(item.id)) {
        drawSelectionOutline(item);
      }
    }
    if (state.setSelection.size === 1) {
      const selectedItem = getSetSelectedItem();
      if (selectedItem) {
        drawResizeHandles(selectedItem);
        drawRotationHandle(selectedItem);
      }
    }
    const selectedDrawing = set.drawings.find((drawing) => drawing.id === state.setSelectedDrawingId);
    if (selectedDrawing) {
      drawDrawingSelection(selectedDrawing);
      drawDrawingResizeHandles(selectedDrawing);
    }
    drawSetMarquee();
  }
}

function drawPath(points, color = "#2f8f83") {
  if (!points || points.length < 2) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.setLineDash([9, 6]);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.stroke();
  ctx.fillStyle = color;
  const end = points[points.length - 1];
  ctx.beginPath();
  ctx.arc(end.x, end.y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function getDisplayPenPath(item) {
  if (!item.penAnimation?.points?.length) {
    return null;
  }
  const first = item.penAnimation.points[0];
  const offsetX = item.x - first.x;
  const offsetY = item.y - first.y;
  return item.penAnimation.points.map((point) => ({ x: point.x + offsetX, y: point.y + offsetY }));
}

function drawPenAnimationEditor(actors = getActiveStageActors()) {
  if (state.recording) {
    return;
  }
  for (const item of actors) {
    if (item.penAnimation?.points?.length >= 2) {
      drawPath(getDisplayPenPath(item), "rgba(47, 143, 131, 0.82)");
    }
  }
  if (state.penAnimation.draft?.length >= 2) {
    drawPath(state.penAnimation.draft, "#e76f51");
  }
}

function drawStage(now, options = {}) {
  const {
    showSelectionOutlines = true,
    showEditorOverlays = true,
    showRecordingOverlay = true,
    showSetContent = true,
    showMainWorkspace = true,
  } = options;
  currentRenderFlags = {
    showPhysicsBadges: showEditorOverlays,
    showPhysicsDebug: showEditorOverlays && (
      state.physics.settings.debugView
      || state.physics.settings.triggerDebugView
      || state.physics.settings.layerDebugView
      || state.physics.settings.overlapDebugView
    ),
  };

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
  const sceneStageSet = state.sceneSetId ? getStageSetById(state.sceneSetId) : null;

  if (showMainWorkspace) {
    drawSetDrawings({ drawings: state.stageDrawings });
    const selectedStageDrawing = state.stageDrawings.find((drawing) => drawing.id === state.stageSelectedDrawingId);
    if (showSelectionOutlines && selectedStageDrawing) {
      drawDrawingSelection(selectedStageDrawing);
      drawDrawingResizeHandles(selectedStageDrawing);
    }
  }

  if (showSetContent && sceneStageSet) {
    drawSetContent(sceneStageSet, { showEditorHandles: false });
  }

  if (showMainWorkspace) {
    for (const item of state.items) {
      if (item.kind === "character") {
        drawCharacter(item);
      } else {
        drawObject(item);
      }
    }
    drawPhysicsDebugOverlay();
    drawSceneLighting();
  }

  if (showMainWorkspace && showSelectionOutlines) {
    for (const item of getSelectedItems()) {
      drawSelectionOutline(item);
    }
    if (state.selection.size === 1) {
      const selectedItem = getSingleSelectedItem();
      if (selectedItem) {
        drawResizeHandles(selectedItem);
        drawRotationHandle(selectedItem);
      }
    } else if (state.selection.size > 1) {
      const bounds = getItemsBounds(getSelectedItems());
      if (bounds) {
        ctx.save();
        ctx.strokeStyle = "#2f8f83";
        ctx.lineWidth = 2.5;
        ctx.setLineDash([12, 7]);
        ctx.strokeRect(bounds.left - 10, bounds.top - 10, bounds.right - bounds.left + 20, bounds.bottom - bounds.top + 20);
        ctx.restore();
        drawResizeHandlesForBounds(bounds);
      }
    }
  }

  if (showEditorOverlays) {
    drawPlacementPreview();
    drawMarquee();
    drawPenAnimationEditor();
  }

  if (showRecordingOverlay) {
    drawRecordingOverlay(now);
  }

  if (showMainWorkspace && state.items.length === 0 && (!sceneStageSet || (sceneStageSet.items.length === 0 && sceneStageSet.drawings.length === 0))) {
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

  if (state.stageModuleOpen) {
    withRenderTarget(setCtx, patternCaches.set, () => {
      const rect = setFrame.getBoundingClientRect();
      const scaleX = rect.width / Math.max(1, state.stageWidth);
      const scaleY = rect.height / Math.max(1, state.stageHeight);
      ctx.save();
      ctx.scale(scaleX, scaleY);
      drawStage(now, {
        showSelectionOutlines: false,
        showEditorOverlays: false,
        showRecordingOverlay: false,
        showSetContent: false,
        showMainWorkspace: false,
      });
      drawSetContent(getActiveSet(), { showEditorHandles: true });
      drawPenAnimationEditor(getActiveSet().items);
      ctx.restore();
    });
  }

  renderCharacterBuilder();
}

function animate(now) {
  const deltaSeconds = state.lastFrameTime ? Math.min(0.033, (now - state.lastFrameTime) / 1000) : 0;
  state.lastFrameTime = now;

  if (state.screen === "studio") {
    moveSelectionByKeys(deltaSeconds);
    updateScripts(deltaSeconds);
    if (!state.scriptsModuleOpen && !state.stageModuleOpen && !state.characterBuilderOpen) {
      updatePhysics(deltaSeconds);
      flushTriggerScriptEvents();
    }
    refreshPhysicsStatusLabel();
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

async function renameRecording(recordingId) {
  const recording = state.recordings.find((candidate) => candidate.id === recordingId);
  if (!recording) {
    return;
  }
  const nextName = window.prompt("Rename this video:", recording.name || "Take");
  if (!nextName?.trim()) {
    return;
  }
  await recordingStore.save({
    ...recording,
    name: nextName.trim(),
  });
  await loadRecordings();
  state.selectedRecordingId = recordingId;
  renderLibrary();
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

    const renameButton = document.createElement("button");
    renameButton.type = "button";
    renameButton.className = "ghost-button";
    renameButton.textContent = "Rename";
    renameButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      await renameRecording(recording.id);
    });

    actions.append(watchButton, renameButton, deleteButton);
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

  prepareStageForRecording();
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
    const defaultName = `Take ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })}`;
    const name = window.prompt("Name this video:", defaultName)?.trim() || defaultName;
    const recording = {
      id: `take-${Date.now()}`,
      name,
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
  renderStageViews(performance.now());
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
  for (const item of getAllSetItems()) {
    item.runtime.animation = null;
    item.runtime.flip = null;
    item.runtime.jump = null;
  }
  for (const item of state.items) {
    if (isPhysicsObject(item)) {
      item.runtime.physics.dragging = false;
    }
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
  pushUndoSnapshot();
  state.items = [];
  state.stageDrawings = [];
  state.sceneScripts = [];
  state.sceneSetId = null;
  state.scene = {
    lightingColor: "#fff7d6",
    lightingStrength: 0,
  };
  state.scriptTargetId = SCENE_TARGET_ID;
  closePenAnimationEditor();
  hideActorContextMenu();
  clearAllScriptRunners();
  stopAllAudioNodes();
  resetAllPhysicsRuntime();
  clearSelection();
  syncCurrentSceneToWorkspace();
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
  if (definition.imageData) {
    preview.textContent = "";
    preview.style.background = `center / contain no-repeat url("${definition.imageData}"), linear-gradient(135deg, #fff8ed, #f7ead7)`;
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
  elements.characterList.innerHTML = "";
  elements.textureList.innerHTML = "";
  elements.objectList.innerHTML = "";
  for (const character of getCharacterDefs()) {
    elements.characterList.append(
      buildToolCard(character, {
        toolType: "character",
        previewType: "text",
        previewClass: "character-preview",
      }),
    );
  }

  for (const texture of getTextureDefs()) {
    elements.textureList.append(
      buildToolCard(texture, {
        toolType: "texture",
        previewType: "background",
        previewClass: "texture-preview",
      }),
    );
  }

  for (const objectDef of getObjectDefs()) {
    elements.objectList.append(
      buildToolCard(objectDef, {
        toolType: "object",
        previewType: "text",
        previewClass: "object-preview",
      }),
    );
  }
}

function getPhysicsEditorItem() {
  const item = getItemById(state.physics.objectEditorItemId);
  return item && isPhysicsObject(item) ? item : null;
}

function closeObjectPhysicsEditor() {
  state.physics.objectEditorItemId = null;
  elements.objectPhysicsPanel.classList.add("hidden");
}

function refreshPhysicsStatusLabel() {
  elements.physicsStatusLabel.textContent = state.physics.statusMessage || (state.physics.enabled
    ? "World physics is on for this scene. Place or drag stage actors to test collisions."
    : "World physics is off. Turn it on to enable collisions, pushing, and gravity for stage actors.");
}

function renderPhysicsMaskEditor(item) {
  elements.objectPhysicsLayer.innerHTML = "";
  for (const option of PHYSICS_LAYER_OPTIONS) {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    elements.objectPhysicsLayer.append(optionElement);
  }
  elements.objectPhysicsLayer.value = item.physics.layer;

  elements.objectPhysicsMask.innerHTML = "";
  const currentMask = normalizePhysicsCollisionMask(item.physics.collisionMask);
  for (const option of PHYSICS_LAYERS) {
    const label = document.createElement("label");
    label.className = "physics-mask-item";
    label.textContent = option.label;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = option.value;
    checkbox.checked = currentMask.includes(option.value);
    checkbox.addEventListener("input", () => {
      const nextMask = Array.from(elements.objectPhysicsMask.querySelectorAll("input[type='checkbox']"))
        .filter((candidate) => candidate.checked)
        .map((candidate) => candidate.value);
      updatePhysicsEditorItem((physics) => {
        physics.collisionMask = normalizePhysicsCollisionMask(nextMask);
      });
    });
    label.append(checkbox);
    elements.objectPhysicsMask.append(label);
  }
}

function renderPhysicsLayerMatrix() {
  elements.physicsLayerMatrix.innerHTML = "";
  for (let index = 0; index < PHYSICS_LAYERS.length; index += 1) {
    for (let otherIndex = index; otherIndex < PHYSICS_LAYERS.length; otherIndex += 1) {
      const left = PHYSICS_LAYERS[index];
      const right = PHYSICS_LAYERS[otherIndex];
      const key = getPhysicsLayerRuleKey(left.value, right.value);
      const row = document.createElement("label");
      row.className = "physics-layer-rule";
      const title = document.createElement("span");
      title.className = "physics-layer-chip";
      title.innerHTML = `<span class="physics-layer-swatch" style="background:${left.color}"></span>${left.label} x <span class="physics-layer-swatch" style="background:${right.color}"></span>${right.label}`;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = state.physics.settings.layerRules[key] !== false;
      checkbox.addEventListener("input", () => {
        state.physics.settings.layerRules[key] = checkbox.checked;
        wakeMatchingPhysicsItems();
        markProjectDirty();
      });
      row.append(title, checkbox);
      elements.physicsLayerMatrix.append(row);
    }
  }
}

function renderPhysicsControls() {
  elements.physicsToggleButton.textContent = state.physics.enabled ? "Turn World Physics Off" : "Turn World Physics On";
  elements.gravityToggleButton.textContent = `Gravity: ${state.physics.gravityEnabled ? "On" : "Off"}`;
  elements.physicsToggleButton.className = `${state.physics.enabled ? "primary" : "secondary"}-button full-width`;
  elements.gravityToggleButton.className = `${state.physics.gravityEnabled ? "secondary" : "ghost"}-button full-width`;
  elements.physicsSettingsPanel.classList.toggle("hidden", !state.physics.showGlobalSettings);

  elements.physicsGravityStrength.value = String(state.physics.settings.gravityStrength);
  elements.physicsGravityDirection.value = state.physics.settings.gravityDirection;
  elements.physicsAirDrag.value = String(state.physics.settings.airDrag);
  elements.physicsBounceDefault.value = String(state.physics.settings.defaultRestitution);
  elements.physicsFrictionDefault.value = String(state.physics.settings.defaultFriction);
  elements.physicsTimeScale.value = String(state.physics.settings.timeScale);
  elements.physicsSolverIterations.value = String(state.physics.settings.solverIterations);
  elements.physicsSleeping.checked = state.physics.settings.sleeping;
  elements.physicsWorldBounds.checked = state.physics.settings.worldBounds;
  elements.physicsDebugView.checked = state.physics.settings.debugView;
  elements.physicsTriggerDebugView.checked = state.physics.settings.triggerDebugView;
  elements.physicsLayerDebugView.checked = state.physics.settings.layerDebugView;
  elements.physicsOverlapDebugView.checked = state.physics.settings.overlapDebugView;
  renderPhysicsLayerMatrix();
  refreshPhysicsStatusLabel();

  const item = getPhysicsEditorItem();
  if (!state.physics.enabled || !item) {
    closeObjectPhysicsEditor();
    return;
  }

  elements.objectPhysicsTitle.textContent = `${getActorDisplayName(item)} Physics`;
  elements.objectPhysicsEnabled.checked = item.physics.enabled;
  elements.objectPhysicsGravity.checked = item.physics.gravityAffected;
  elements.objectPhysicsBodyType.value = item.physics.bodyType;
  elements.objectPhysicsMass.value = String(item.physics.mass);
  elements.objectPhysicsDensity.value = String(item.physics.density);
  elements.objectPhysicsFriction.value = String(item.physics.friction);
  elements.objectPhysicsBounce.value = String(item.physics.restitution);
  elements.objectPhysicsLinearDrag.value = String(item.physics.linearDrag);
  elements.objectPhysicsAngularDrag.value = String(item.physics.angularDrag);
  elements.objectPhysicsLockRotation.checked = item.physics.rotationLocked;
  elements.objectPhysicsLockX.checked = item.physics.lockX;
  elements.objectPhysicsLockY.checked = item.physics.lockY;
  elements.objectPhysicsCollision.checked = item.physics.collisionEnabled;
  elements.objectPhysicsTrigger.checked = item.physics.triggerMode;
  elements.objectPhysicsCanGrab.checked = item.physics.canGrab;
  elements.objectPhysicsStartAsleep.checked = item.physics.startAsleep;
  elements.objectPhysicsGravityScale.value = String(item.physics.gravityScale);
  renderPhysicsMaskEditor(item);
  const layerMeta = getPhysicsLayerMeta(item.physics.layer);
  elements.objectPhysicsSummary.textContent = item.physics.triggerMode
    ? `${layerMeta.label} trigger: detects overlap without pushing actors. Layer masks and trigger events still work during recording.`
    : item.physics.bodyType === "static"
      ? `Static ${item.kind} on ${layerMeta.label}: holds position like a wall or floor and keeps its resized collision shape.`
      : item.physics.bodyType === "kinematic"
        ? `Kinematic ${item.kind} on ${layerMeta.label}: follows code, dragging, and Pen Animation while still pushing dynamic actors.`
        : `${item.kind === "character" ? "Dynamic characters" : "Dynamic objects"} on ${layerMeta.label} collide, push, fall, and keep their resized collision shape during recording.`;
  elements.objectPhysicsPanel.classList.remove("hidden");
}

function togglePhysicsEnabled() {
  pushUndoSnapshot();
  state.physics.enabled = !state.physics.enabled;
  state.physics.accumulator = 0;
  if (!state.physics.enabled) {
    state.physics.statusMessage = "";
    resetAllPhysicsRuntime();
    closeObjectPhysicsEditor();
  } else {
    state.physics.statusMessage = "World physics is on for this scene. Place or drag stage actors to test collisions.";
    for (const item of getActiveStageActors()) {
      if (isPhysicsObject(item) && item.physics.enabled) {
        wakePhysicsItem(item);
      }
    }
  }
  markProjectDirty();
  renderPhysicsControls();
}

function toggleGravityEnabled() {
  pushUndoSnapshot();
  state.physics.gravityEnabled = !state.physics.gravityEnabled;
  if (state.physics.gravityEnabled) {
    for (const item of getActiveStageActors()) {
      if (isPhysicsObject(item) && item.physics.enabled && item.physics.gravityAffected) {
        wakePhysicsItem(item);
      }
    }
  }
  markProjectDirty();
  renderPhysicsControls();
}

function updateGlobalPhysicsSettingsFromInputs() {
  state.physics.settings.gravityStrength = clamp(Number(elements.physicsGravityStrength.value || 0), 0, 3000);
  state.physics.settings.gravityDirection = elements.physicsGravityDirection.value;
  state.physics.settings.airDrag = clamp(Number(elements.physicsAirDrag.value || 0), 0, 4);
  state.physics.settings.defaultRestitution = clamp(Number(elements.physicsBounceDefault.value || 0), 0, 1);
  state.physics.settings.defaultFriction = clamp(Number(elements.physicsFrictionDefault.value || 0), 0, 1);
  state.physics.settings.timeScale = clamp(Number(elements.physicsTimeScale.value || 1), 0.25, 2);
  state.physics.settings.solverIterations = clamp(Math.round(Number(elements.physicsSolverIterations.value || 3)), 1, 8);
  state.physics.settings.sleeping = elements.physicsSleeping.checked;
  state.physics.settings.worldBounds = elements.physicsWorldBounds.checked;
  state.physics.settings.debugView = elements.physicsDebugView.checked;
  state.physics.settings.triggerDebugView = elements.physicsTriggerDebugView.checked;
  state.physics.settings.layerDebugView = elements.physicsLayerDebugView.checked;
  state.physics.settings.overlapDebugView = elements.physicsOverlapDebugView.checked;
  if (state.physics.enabled) {
    for (const item of getActiveStageActors()) {
      if (isPhysicsObject(item) && item.physics.enabled) {
        wakePhysicsItem(item);
      }
    }
  }
  markProjectDirty();
  renderPhysicsControls();
}

function openPhysicsEditorForActor(actorId) {
  const actor = getItemById(actorId);
  if (!actor || !isPhysicsObject(actor)) {
    return;
  }
  state.physics.enabled = true;
  state.physics.statusMessage = "World physics is on for this scene. Place or drag stage actors to test collisions.";
  state.physics.objectEditorItemId = actor.id;
  hideActorContextMenu();
  hideSetActorContextMenu();
  renderPhysicsControls();
}

function openContextPhysicsEditor() {
  openPhysicsEditorForActor(state.contextActorId);
}

function openSetContextPhysicsEditor() {
  openPhysicsEditorForActor(state.setContextItemId);
}

function updatePhysicsEditorItem(update) {
  const item = getPhysicsEditorItem();
  if (!item) {
    return;
  }
  pushUndoSnapshot();
  update(item.physics);
  if (item.physics.bodyType === "static") {
    item.physics.gravityAffected = false;
  }
  item.physics.layer = normalizePhysicsLayer(item.physics.layer, item.kind, item.physics.triggerMode);
  item.physics.collisionMask = normalizePhysicsCollisionMask(item.physics.collisionMask);
  if (item.physics.triggerMode && item.physics.layer === getDefaultPhysicsLayer(item.kind, false)) {
    item.physics.layer = "trigger";
  }
  if (!item.physics.triggerMode && item.physics.layer === "trigger") {
    item.physics.layer = getDefaultPhysicsLayer(item.kind, false);
  }
  if (item.physics.rotationLocked) {
    item.runtime.physics.angularVelocity = 0;
  }
  if (item.physics.startAsleep) {
    resetPhysicsBody(item);
  } else {
    wakePhysicsItem(item);
  }
  markProjectDirty();
  renderPhysicsControls();
}

function openSetContextActorCode() {
  if (state.setContextItemId == null) {
    return;
  }
  openSetMiniCodePanel(state.setContextItemId);
  hideSetActorContextMenu();
  renderStageModule();
}

function openSetContextPenAnimation() {
  if (state.setContextItemId == null) {
    return;
  }
  openPenAnimationEditorForActor(state.setContextItemId);
}

function toggleSetContextPhysics() {
  if (state.setContextItemId == null) {
    return;
  }
  toggleActorPhysicsEnabled(state.setContextItemId);
  hideSetActorContextMenu();
  renderStageModule();
}

function buildSetToolCard(definition, options) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tool-card";
  button.dataset.toolType = options.toolType;
  button.dataset.toolId = definition.id;

  const preview = document.createElement("div");
  preview.className = options.previewClass;
  if (options.previewType === "text") {
    preview.textContent = definition.preview;
  } else {
    preview.style.background = definition.preview;
  }
  if (definition.imageData) {
    preview.textContent = "";
    preview.style.background = `center / contain no-repeat url("${definition.imageData}"), linear-gradient(135deg, #fff8ed, #f7ead7)`;
  }

  const title = document.createElement("div");
  title.className = "tool-card-title";
  title.textContent = definition.name;

  const copy = document.createElement("div");
  copy.className = "tool-card-copy";
  copy.textContent = definition.copy;

  button.append(preview, title, copy);
  button.addEventListener("click", () => {
    selectSetToolItem(options.toolType, definition.id);
    setSetEditorTool(options.toolType);
  });
  return button;
}

function populateSetToolLists() {
  elements.setBaseColors.innerHTML = "";
  elements.setCharacterList.innerHTML = "";
  elements.setObjectList.innerHTML = "";
  elements.setTextureList.innerHTML = "";
  for (const color of SET_PEN_COLORS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "set-color-swatch";
    button.style.background = color;
    button.title = color;
    button.addEventListener("click", () => {
      state.setPenColor = color;
      elements.setPenColor.value = color;
      setSetEditorTool("pen");
    });
    elements.setBaseColors.append(button);
  }

  for (const character of getCharacterDefs()) {
    elements.setCharacterList.append(
      buildSetToolCard(character, {
        toolType: "character",
        previewType: "text",
        previewClass: "character-preview",
      }),
    );
  }

  for (const objectDef of getObjectDefs()) {
    elements.setObjectList.append(
      buildSetToolCard(objectDef, {
        toolType: "object",
        previewType: "text",
        previewClass: "object-preview",
      }),
    );
  }

  for (const texture of getTextureDefs()) {
    elements.setTextureList.append(
      buildSetToolCard(texture, {
        toolType: "texture",
        previewType: "background",
        previewClass: "texture-preview",
      }),
    );
  }
}

function renderSetList() {
  ensureDefaultSet();
  elements.setList.innerHTML = "";
  for (const set of state.sets) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "set-card";
    button.classList.toggle("active", set.id === state.activeSetId);
    button.innerHTML = `<strong>${set.name}</strong><span>${set.items.length} item${set.items.length === 1 ? "" : "s"} | ${set.lights.length} light${set.lights.length === 1 ? "" : "s"}</span>`;
    button.addEventListener("click", () => selectStageSet(set.id));
    elements.setList.append(button);
  }
}

function renderSetToolPanels() {
  for (const button of elements.setToolTabs) {
    const isPenFamily = button.dataset.setTool === "pen" && (state.setEditorTool === "pen" || state.setEditorTool === "bucket");
    button.classList.toggle("active", isPenFamily || button.dataset.setTool === state.setEditorTool);
  }
  elements.setCharacterList.classList.toggle("hidden", state.setEditorTool !== "character");
  elements.setObjectList.classList.toggle("hidden", state.setEditorTool !== "object");
  elements.setTextureList.classList.toggle("hidden", state.setEditorTool !== "texture");
  elements.setPenControls.classList.toggle("hidden", !(state.setEditorTool === "pen" || state.setEditorTool === "bucket"));
  elements.setLightControls.classList.toggle("hidden", state.setEditorTool !== "light");
  elements.setUsePenButton.classList.toggle("active", state.setEditorTool === "pen");
  elements.setUseBucketButton.classList.toggle("active", state.setEditorTool === "bucket");

  for (const card of elements.stageModule.querySelectorAll(".set-tool-grid .tool-card")) {
    const type = card.dataset.toolType;
    card.classList.toggle("active", state.setToolSelection[type] === card.dataset.toolId && state.setEditorTool === type);
  }
}

function renderSetMiniCodePanel() {
  const actor = getSetMiniScriptTarget();
  if (!actor) {
    elements.setMiniCodePanel.classList.add("hidden");
    return;
  }

  state.scriptEditorMode = "set";
  elements.setMiniCodeTitle.textContent = `${getActorDisplayName(actor)} in ${getSetItemById(actor.id)?.set.name || "Set"}`;
  elements.setMiniCodePalette.innerHTML = "";
  for (const block of SCRIPT_BLOCK_DEFS.filter((definition) => !definition.sceneOnly && isBlockAvailableForCurrentTarget(definition))) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-palette-button";
    button.draggable = true;
    button.textContent = getScriptBlockDisplayTitle(block);
    button.addEventListener("click", () => addBlockToSelectedActor(block.type));
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      showBlockInfo(block, event.clientX, event.clientY);
    });
    button.addEventListener("dragstart", (event) => {
      const payload = { source: "palette", blockType: block.type };
      setScriptDragState(payload);
      event.dataTransfer?.setData("application/json", JSON.stringify(payload));
      event.dataTransfer.effectAllowed = "copy";
    });
    button.addEventListener("dragend", clearScriptDragState);
    elements.setMiniCodePalette.append(button);
  }
  for (const chunk of state.animationChunks) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "script-palette-button";
    button.textContent = chunk.name;
    button.addEventListener("click", () => addAnimationChunkBlock(chunk.id));
    elements.setMiniCodePalette.append(button);
  }

  elements.setMiniCodeWorkspace.innerHTML = "";
  if (actor.scripts.length === 0) {
    elements.setMiniCodeWorkspace.append(
      createDropLine(
        { kind: "root", index: 0 },
        'Drop a block here. Action blocks auto-wrap in "When Recording Starts".',
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
    elements.setMiniCodeWorkspace.append(group);
  });
}

function renderStageModule() {
  ensureDefaultScene();
  ensureDefaultSet();
  renderSceneList();
  renderSetList();
  renderSetToolPanels();
  const set = getActiveSet();
  const scene = getActiveSceneWorkspace();
  elements.setEditorLabel.textContent = `${scene.name} | ${set.name}: ${set.items.length} item${set.items.length === 1 ? "" : "s"}, ${set.drawings.length} drawing${set.drawings.length === 1 ? "" : "s"}, ${set.lights.length} light${set.lights.length === 1 ? "" : "s"}.`;
  if (state.setMiniCodeItemId != null) {
    renderSetMiniCodePanel();
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function createImportedAssetName(file, fallback) {
  return file?.name ? file.name.replace(/\.[^.]+$/, "") : fallback;
}

async function importImageAsset(kind, file) {
  if (!file) {
    return;
  }
  pushUndoSnapshot();
  const imageData = await readFileAsDataUrl(file);
  const id = `custom-${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const name = createImportedAssetName(file, `Imported ${kind}`);

  if (kind === "character") {
    const builderData = {
      items: [],
      drawings: [serializeDrawing(normalizeDrawing({
        type: "image",
        imageData,
        x: CHARACTER_BUILDER_WIDTH * 0.5,
        y: CHARACTER_BUILDER_HEIGHT * 0.5,
        w: CHARACTER_BUILDER_WIDTH * 0.62,
        h: CHARACTER_BUILDER_HEIGHT * 0.62,
        points: [],
      }))],
    };
    state.customCharacters.push({
      id,
      name,
      preview: "IMG",
      copy: "Imported from your computer.",
      imageData,
      builderData,
    });
    state.setToolSelection.character = id;
    setActiveTool("character", id);
  } else if (kind === "object") {
    state.customObjects.push({
      id,
      name,
      preview: "IMG",
      copy: "Imported prop image.",
      imageData,
      baseColor: "#f4a261",
    });
    state.setToolSelection.object = id;
    setActiveTool("object", id);
  } else if (kind === "texture") {
    state.customTextures.push({
      id,
      name,
      copy: "Imported texture image.",
      preview: `center / cover no-repeat url("${imageData}")`,
      imageData,
    });
    state.setToolSelection.texture = id;
    setActiveTool("texture", id);
  } else if (kind === "stage") {
    const set = getActiveSet();
    const drawing = {
      id: `drawing-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type: "image",
      color: "#ffffff",
      imageData,
      x: state.stageWidth * 0.5,
      y: state.stageHeight * 0.5,
      w: state.stageWidth * 0.58,
      h: state.stageHeight * 0.46,
      points: [],
    };
    set.drawings.push(drawing);
    state.setSelectedDrawingId = drawing.id;
    state.setSelection.clear();
    state.setSelectedItemId = null;
    state.setSelectedLightId = null;
    renderStageModule();
  }

  populateToolLists();
  populateSetToolLists();
  patternCaches.builder.clear();
  updateToolButtons();
  renderScriptPalette();
  renderActiveScriptEditor();
  markProjectDirty();
  saveProjectState();
}

async function importMusicAsset(file, blockId = null) {
  if (!file) {
    return;
  }
  pushUndoSnapshot();
  const dataUrl = await readFileAsDataUrl(file);
  const value = `custom-music-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const label = createImportedAssetName(file, "Imported music");
  state.customMusic.push({ value, label, dataUrl, source: "imported" });
  if (blockId) {
    updateBlockParam(blockId, "musicId", value);
  }
  markProjectDirty();
  saveProjectState();
  renderActiveScriptEditor();
  renderAudioLibrary();
}

function renderMusicMakerGrid() {
  elements.musicMakerGrid.innerHTML = "";
  for (let row = 0; row < MUSIC_MAKER_ROWS; row += 1) {
    for (let column = 0; column < MUSIC_MAKER_COLUMNS; column += 1) {
      const track = MUSIC_MAKER_TRACKS[row];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "music-maker-note";
      button.classList.toggle("percussion", track.type !== "note");
      button.classList.toggle("active", Boolean(state.musicMaker.cells[row][column]));
      button.style.setProperty("--note-color", track.color);
      button.textContent = track.type === "snare" ? "▲" : track.type === "bass" ? "●" : "";
      button.title = `${track.label}, beat ${column + 1}`;
      button.addEventListener("click", () => {
        state.musicMaker.cells[row][column] = !state.musicMaker.cells[row][column];
        playMusicMakerCell(row);
        renderMusicMakerGrid();
      });
      elements.musicMakerGrid.append(button);
    }
  }
}

function cloneMusicPattern(pattern = state.musicMaker.cells) {
  return pattern.map((row) => row.map(Boolean));
}

function saveMusicMakerLoop() {
  pushUndoSnapshot();
  const label = elements.musicMakerName.value.trim() || "My Loop";
  const value = `custom-music-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  state.customMusic.push({
    value,
    label,
    source: "music-maker",
    pattern: cloneMusicPattern(),
  });
  markProjectDirty();
  saveProjectState();
  renderAudioLibrary();
  renderActiveScriptEditor();
}

function renameAudioItem(audioValue) {
  const audioItem = state.customMusic.find((candidate) => candidate.value === audioValue);
  if (!audioItem) {
    return;
  }
  const nextName = window.prompt("Rename this audio:", audioItem.label || "Audio");
  if (!nextName?.trim()) {
    return;
  }
  pushUndoSnapshot();
  audioItem.label = nextName.trim();
  if (audioItem.source === "music-maker") {
    elements.musicMakerName.value = audioItem.label;
  }
  markProjectDirty();
  saveProjectState();
  renderAudioLibrary();
  renderActiveScriptEditor();
}

function renderAudioLibrary() {
  if (!elements.audioLibraryList) {
    return;
  }
  elements.audioLibraryList.innerHTML = "";
  const audioItems = state.customMusic;
  if (audioItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "script-empty";
    empty.textContent = "No custom audio yet. Import, record, or save a loop.";
    elements.audioLibraryList.append(empty);
    return;
  }

  for (const audioItem of audioItems) {
    const card = document.createElement("div");
    card.className = "audio-library-card";
    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = audioItem.label || "Audio";
    const meta = document.createElement("span");
    meta.textContent = audioItem.source === "music-maker" ? "Music Maker loop" : audioItem.source === "mic" ? "Mic recording" : "Imported audio";
    text.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "library-card-actions";
    const playButton = document.createElement("button");
    playButton.type = "button";
    playButton.className = "ghost-button";
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playPlaceholderTone("music", audioItem.value));
    const renameButton = document.createElement("button");
    renameButton.type = "button";
    renameButton.className = "ghost-button";
    renameButton.textContent = "Rename";
    renameButton.addEventListener("click", () => renameAudioItem(audioItem.value));
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      state.customMusic = state.customMusic.filter((candidate) => candidate.value !== audioItem.value);
      markProjectDirty();
      saveProjectState();
      renderAudioLibrary();
      renderActiveScriptEditor();
    });
    actions.append(playButton, renameButton, deleteButton);
    card.append(text, actions);
    elements.audioLibraryList.append(card);
  }
}

function layoutExpandedMusicMaker(referenceRect = elements.musicMakerCard.getBoundingClientRect()) {
  const studioRect = elements.studioScreen.getBoundingClientRect();
  const right = Math.max(12, window.innerWidth - referenceRect.right);
  const top = clamp(referenceRect.top, 96, window.innerHeight - 320);
  const width = Math.min(Math.max(referenceRect.width + studioRect.width * 0.4, 520), Math.max(520, studioRect.width - 24));
  elements.musicMakerCard.style.top = `${top}px`;
  elements.musicMakerCard.style.right = `${right}px`;
  elements.musicMakerCard.style.width = `${width}px`;
}

function toggleMusicMakerExpanded() {
  const collapsedRect = elements.musicMakerCard.getBoundingClientRect();
  state.audio.musicMakerExpanded = !state.audio.musicMakerExpanded;
  elements.musicMakerCard.classList.toggle("expanded", state.audio.musicMakerExpanded);
  if (state.audio.musicMakerExpanded) {
    layoutExpandedMusicMaker(collapsedRect);
  } else {
    elements.musicMakerCard.style.top = "";
    elements.musicMakerCard.style.right = "";
    elements.musicMakerCard.style.width = "";
  }
  elements.expandMusicMakerButton.textContent = state.audio.musicMakerExpanded ? "Music Maker >>" : "Music Maker ->";
}

function setMicRecordingUi(recording, label = null) {
  elements.recordMicButton.disabled = recording;
  elements.stopMicButton.disabled = !recording;
  if (label) {
    elements.audioCountdownLabel.textContent = label;
  }
}

function startMicCountdown() {
  if (!navigator.mediaDevices?.getUserMedia || state.audio.micRecorder) {
    return;
  }
  let count = 3;
  setMicRecordingUi(true, `Recording starts in ${count}...`);
  state.audio.countdownTimer = window.setInterval(async () => {
    count -= 1;
    if (count > 0) {
      elements.audioCountdownLabel.textContent = `Recording starts in ${count}...`;
      return;
    }
    window.clearInterval(state.audio.countdownTimer);
    state.audio.countdownTimer = null;
    await beginMicRecording();
  }, 1000);
}

async function beginMicRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    state.audio.micStream = stream;
    state.audio.micRecorder = recorder;
    state.audio.micChunks = [];
    recorder.ondataavailable = (event) => {
      if (event.data?.size > 0) {
        state.audio.micChunks.push(event.data);
      }
    };
    recorder.onstop = async () => {
      const blob = new Blob(state.audio.micChunks, { type: recorder.mimeType || "audio/webm" });
      const dataUrl = await readFileAsDataUrl(blob);
      const label = window.prompt("Name this audio recording:", "Mic Recording") || "Mic Recording";
      state.customMusic.push({
        value: `custom-music-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        label,
        dataUrl,
        source: "mic",
      });
      state.audio.micStream?.getTracks().forEach((track) => track.stop());
      state.audio.micRecorder = null;
      state.audio.micStream = null;
      state.audio.micChunks = [];
      setMicRecordingUi(false, "Mic recording saved.");
      markProjectDirty();
      saveProjectState();
      renderAudioLibrary();
      renderActiveScriptEditor();
    };
    recorder.start();
    setMicRecordingUi(true, "Recording mic...");
  } catch {
    state.audio.micRecorder = null;
    state.audio.micStream = null;
    setMicRecordingUi(false, "Microphone unavailable.");
  }
}

function stopMicRecording() {
  if (state.audio.countdownTimer) {
    window.clearInterval(state.audio.countdownTimer);
    state.audio.countdownTimer = null;
    setMicRecordingUi(false, "Mic idle.");
    return;
  }
  if (state.audio.micRecorder && state.audio.micRecorder.state !== "inactive") {
    state.audio.micRecorder.stop();
  }
}

function openTextureEditor(textureId = null, options = {}) {
  const resolvedTextureId = textureId || (state.activeTool?.type === "texture" ? state.activeTool.id : state.setToolSelection.texture);
  const texture = resolvedTextureId ? getTextureDef(resolvedTextureId) : null;
  const isNewTexture = Boolean(options.createNew) || !texture;
  if (!isNewTexture && !texture) {
    elements.toolLabel.textContent = "Pick a texture first, then open the texture editor.";
    return;
  }
  state.textureEditor.textureId = isNewTexture ? null : resolvedTextureId;
  state.textureEditor.pendingName = options.name || (isNewTexture ? "Custom Texture" : texture.name);
  elements.textureEditorTitle.textContent = isNewTexture ? `Create Texture: ${state.textureEditor.pendingName}` : `Editing: ${texture.name}`;
  elements.textureEditorPanel.classList.remove("hidden");
  setupTextureEditorCanvas(isNewTexture ? null : texture);
}

function setupTextureEditorCanvas(texture) {
  const canvas = elements.textureEditorCanvas;
  canvas.width = 320;
  canvas.height = 320;
  textureEditorCtx.clearRect(0, 0, canvas.width, canvas.height);
  textureEditorCtx.fillStyle = "#fffdfa";
  textureEditorCtx.fillRect(0, 0, canvas.width, canvas.height);
  if (texture.imageData) {
    const image = getImportedImage(texture.imageData);
    const drawImage = () => {
      textureEditorCtx.clearRect(0, 0, canvas.width, canvas.height);
      textureEditorCtx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    if (image.complete && image.naturalWidth > 0) {
      drawImage();
    } else {
      image.onload = drawImage;
    }
  }
}

function closeTextureEditor() {
  state.textureEditor.textureId = null;
  state.textureEditor.drawing = false;
  state.textureEditor.pendingName = "";
  elements.textureEditorPanel.classList.add("hidden");
}

function getTextureEditorPoint(event) {
  const rect = elements.textureEditorCanvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (elements.textureEditorCanvas.width / Math.max(1, rect.width)),
    y: (event.clientY - rect.top) * (elements.textureEditorCanvas.height / Math.max(1, rect.height)),
  };
}

function startTextureEditorStroke(event) {
  if (!state.textureEditor.textureId) {
    return;
  }
  const point = getTextureEditorPoint(event);
  state.textureEditor.drawing = true;
  elements.textureEditorCanvas.setPointerCapture?.(event.pointerId);
  textureEditorCtx.strokeStyle = elements.textureEditorColor.value;
  textureEditorCtx.lineWidth = 8;
  textureEditorCtx.lineCap = "round";
  textureEditorCtx.lineJoin = "round";
  textureEditorCtx.beginPath();
  textureEditorCtx.moveTo(point.x, point.y);
}

function moveTextureEditorStroke(event) {
  if (!state.textureEditor.drawing) {
    return;
  }
  const point = getTextureEditorPoint(event);
  textureEditorCtx.lineTo(point.x, point.y);
  textureEditorCtx.stroke();
}

function endTextureEditorStroke(event) {
  state.textureEditor.drawing = false;
  if (event?.pointerId != null) {
    elements.textureEditorCanvas.releasePointerCapture?.(event.pointerId);
  }
}

function saveTextureEditor() {
  pushUndoSnapshot();
  const existingId = state.textureEditor.textureId;
  const imageData = elements.textureEditorCanvas.toDataURL("image/png");
  let texture = state.customTextures.find((candidate) => candidate.id === existingId);
  if (!texture) {
    const baseTexture = existingId ? getTextureDef(existingId) : null;
    texture = {
      id: `custom-texture-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: state.textureEditor.pendingName || `${baseTexture?.name || "Texture"} Drawing`,
      copy: "Drawn texture.",
      preview: `center / cover no-repeat url("${imageData}")`,
      imageData,
    };
    state.customTextures.push(texture);
  } else {
    texture.name = state.textureEditor.pendingName || texture.name;
    texture.imageData = imageData;
    texture.preview = `center / cover no-repeat url("${imageData}")`;
  }
  state.activeTool = { type: "texture", id: texture.id };
  state.setToolSelection.texture = texture.id;
  patternCaches.stage.clear();
  patternCaches.recording.clear();
  patternCaches.set.clear();
  patternCaches.builder.clear();
  populateToolLists();
  populateSetToolLists();
  updateToolButtons();
  markProjectDirty();
  saveProjectState();
  elements.toolLabel.textContent = `Saved texture drawing: ${texture.name}.`;
}

function bindEvents() {
  elements.playButton.addEventListener("click", goToStudio);
  elements.libraryButton.addEventListener("click", openLibrary);
  elements.menuButton.addEventListener("click", goToMenu);
  elements.studioLibraryButton.addEventListener("click", openLibrary);
  elements.libraryToStudioButton.addEventListener("click", goToStudio);
  elements.libraryMenuButton.addEventListener("click", goToMenu);
  elements.clearStageButton.addEventListener("click", clearStage);
  elements.globalUndoButton.addEventListener("click", undoLastAction);
  elements.recordButton.addEventListener("click", startRecording);
  elements.stopButton.addEventListener("click", stopRecording);
  elements.openLibraryButton.addEventListener("click", openLibrary);
  elements.scriptsModuleCloseButton.addEventListener("click", closeScriptsModule);
  elements.actorContextCodeButton.addEventListener("click", openContextActorCode);
  elements.actorContextPenButton.addEventListener("click", openPenAnimationEditor);
  elements.actorContextEditCharacterButton.addEventListener("click", openContextCharacterBuilder);
  elements.actorContextPhysicsToggleButton.addEventListener("click", () => {
    toggleActorPhysicsEnabled(state.contextActorId);
    hideActorContextMenu();
  });
  elements.actorContextPhysicsButton.addEventListener("click", openContextPhysicsEditor);
  elements.actorContextGroupButton.addEventListener("click", groupSelection);
  elements.actorContextUngroupButton.addEventListener("click", ungroupSelection);
  elements.actorContextColor.addEventListener("input", () => changeSelectedObjectColor(elements.actorContextColor.value));
  elements.drawingContextDeleteButton.addEventListener("click", deleteContextDrawing);
  elements.closeObjectPhysicsButton.addEventListener("click", closeObjectPhysicsEditor);
  elements.physicsToggleButton.addEventListener("click", togglePhysicsEnabled);
  elements.gravityToggleButton.addEventListener("click", toggleGravityEnabled);
  elements.physicsSettingsButton.addEventListener("click", () => {
    state.physics.showGlobalSettings = !state.physics.showGlobalSettings;
    renderPhysicsControls();
  });
  [
    elements.physicsGravityStrength,
    elements.physicsGravityDirection,
    elements.physicsAirDrag,
    elements.physicsBounceDefault,
    elements.physicsFrictionDefault,
    elements.physicsTimeScale,
    elements.physicsSolverIterations,
    elements.physicsSleeping,
    elements.physicsWorldBounds,
    elements.physicsDebugView,
    elements.physicsTriggerDebugView,
    elements.physicsLayerDebugView,
    elements.physicsOverlapDebugView,
  ].forEach((input) => input.addEventListener("input", updateGlobalPhysicsSettingsFromInputs));
  elements.objectPhysicsEnabled.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.enabled = elements.objectPhysicsEnabled.checked;
  }));
  elements.objectPhysicsGravity.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.gravityAffected = elements.objectPhysicsGravity.checked;
  }));
  elements.objectPhysicsBodyType.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.bodyType = ["static", "dynamic", "kinematic"].includes(elements.objectPhysicsBodyType.value) ? elements.objectPhysicsBodyType.value : "dynamic";
  }));
  elements.objectPhysicsMass.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.mass = clamp(Number(elements.objectPhysicsMass.value || 1), 0.1, 100);
  }));
  elements.objectPhysicsDensity.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.density = clamp(Number(elements.objectPhysicsDensity.value || 1), 0.1, 10);
  }));
  elements.objectPhysicsFriction.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.friction = clamp(Number(elements.objectPhysicsFriction.value || 0), 0, 1);
  }));
  elements.objectPhysicsBounce.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.restitution = clamp(Number(elements.objectPhysicsBounce.value || 0), 0, 1);
  }));
  elements.objectPhysicsLinearDrag.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.linearDrag = clamp(Number(elements.objectPhysicsLinearDrag.value || 0), 0, 6);
  }));
  elements.objectPhysicsAngularDrag.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.angularDrag = clamp(Number(elements.objectPhysicsAngularDrag.value || 0), 0, 12);
  }));
  elements.objectPhysicsLockRotation.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.rotationLocked = elements.objectPhysicsLockRotation.checked;
  }));
  elements.objectPhysicsLockX.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.lockX = elements.objectPhysicsLockX.checked;
  }));
  elements.objectPhysicsLockY.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.lockY = elements.objectPhysicsLockY.checked;
  }));
  elements.objectPhysicsCollision.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.collisionEnabled = elements.objectPhysicsCollision.checked;
  }));
  elements.objectPhysicsTrigger.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.triggerMode = elements.objectPhysicsTrigger.checked;
    if (physics.triggerMode && physics.layer === getDefaultPhysicsLayer(getPhysicsEditorItem()?.kind, false)) {
      physics.layer = "trigger";
    }
  }));
  elements.objectPhysicsLayer.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.layer = elements.objectPhysicsLayer.value;
  }));
  elements.objectPhysicsCanGrab.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.canGrab = elements.objectPhysicsCanGrab.checked;
  }));
  elements.objectPhysicsStartAsleep.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.startAsleep = elements.objectPhysicsStartAsleep.checked;
  }));
  elements.objectPhysicsGravityScale.addEventListener("input", () => updatePhysicsEditorItem((physics) => {
    physics.gravityScale = clamp(Number(elements.objectPhysicsGravityScale.value || 1), 0, 4);
  }));
  elements.penLineToolButton.addEventListener("click", () => setPenAnimationTool("line"));
  elements.penFreehandToolButton.addEventListener("click", () => setPenAnimationTool("freehand"));
  elements.previewPenAnimationButton.addEventListener("click", previewPenAnimation);
  elements.deletePenAnimationButton.addEventListener("click", deletePenAnimation);
  elements.closePenAnimationButton.addEventListener("click", closePenAnimationEditor);
  elements.penAnimationDuration.addEventListener("input", () => {
    const actor = getItemById(state.penAnimation.actorId);
    if (actor?.penAnimation) {
      actor.penAnimation.duration = clamp(Number(elements.penAnimationDuration.value || 2), 0.1, 60);
      markProjectDirty();
    }
  });
  elements.stageDrawButton.addEventListener("click", () => setActiveTool("draw", elements.stagePenColor.value));
  elements.stageBucketButton.addEventListener("click", () => setActiveTool("bucket", elements.stageFillColor.value));
  elements.stagePenColor.addEventListener("input", () => {
    if (state.activeTool?.type === "draw") {
      setActiveTool("draw", elements.stagePenColor.value);
    }
  });
  elements.stageFillColor.addEventListener("input", () => {
    if (state.activeTool?.type === "bucket") {
      setActiveTool("bucket", elements.stageFillColor.value);
    }
  });
  elements.importAudioButton.addEventListener("click", () => elements.importAudioInput.click());
  elements.importAudioInput.addEventListener("change", () => {
    importMusicAsset(elements.importAudioInput.files?.[0]);
    elements.importAudioInput.value = "";
  });
  elements.expandMusicMakerButton.addEventListener("click", toggleMusicMakerExpanded);
  elements.recordMicButton.addEventListener("click", startMicCountdown);
  elements.stopMicButton.addEventListener("click", stopMicRecording);
  elements.previewMusicMakerButton.addEventListener("click", () => playMusicPattern(cloneMusicPattern()));
  elements.saveMusicMakerButton.addEventListener("click", saveMusicMakerLoop);
  elements.createCharacterButton.addEventListener("click", () => openCharacterBuilder());
  elements.createObjectButton.addEventListener("click", () => openCharacterBuilder(null, "object"));
  elements.closeCharacterBuilderButton.addEventListener("click", closeCharacterBuilder);
  elements.saveCharacterBuilderButton.addEventListener("click", saveCharacterBuilder);
  elements.characterBuilderSelectButton.addEventListener("click", () => setCharacterBuilderTool("select"));
  elements.characterBuilderPenButton.addEventListener("click", () => setCharacterBuilderTool("pen"));
  elements.characterBuilderBucketButton.addEventListener("click", () => setCharacterBuilderTool("bucket"));
  elements.characterBuilderPenColor.addEventListener("input", () => {
    state.characterBuilder.penColor = elements.characterBuilderPenColor.value;
  });
  elements.characterBuilderFillColor.addEventListener("input", () => {
    state.characterBuilder.fillColor = elements.characterBuilderFillColor.value;
  });
  elements.characterBuilderImportButton.addEventListener("click", () => elements.characterBuilderImportInput.click());
  elements.characterBuilderImportInput.addEventListener("change", async () => {
    const file = elements.characterBuilderImportInput.files?.[0];
    if (file) {
      addImportedImageToCharacterBuilder(await readFileAsDataUrl(file));
    }
    elements.characterBuilderImportInput.value = "";
  });
  elements.importCharacterButton.addEventListener("click", () => elements.importCharacterInput.click());
  elements.importTextureButton.addEventListener("click", () => elements.importTextureInput.click());
  elements.createTextureButton.addEventListener("click", () => {
    const name = window.prompt("Name this texture:", "Custom Texture")?.trim() || "Custom Texture";
    openTextureEditor(null, { createNew: true, name });
  });
  elements.editTextureButton.addEventListener("click", openTextureEditor);
  elements.closeTextureEditorButton.addEventListener("click", closeTextureEditor);
  elements.saveTextureEditorButton.addEventListener("click", saveTextureEditor);
  elements.textureEditorCanvas.addEventListener("pointerdown", startTextureEditorStroke);
  elements.textureEditorCanvas.addEventListener("pointermove", moveTextureEditorStroke);
  elements.textureEditorCanvas.addEventListener("pointerup", endTextureEditorStroke);
  elements.textureEditorCanvas.addEventListener("pointercancel", endTextureEditorStroke);
  elements.importObjectButton.addEventListener("click", () => elements.importObjectInput.click());
  elements.importStageButton.addEventListener("click", () => elements.importStageInput.click());
  elements.importCharacterInput.addEventListener("change", () => {
    importImageAsset("character", elements.importCharacterInput.files?.[0]);
    elements.importCharacterInput.value = "";
  });
  elements.importTextureInput.addEventListener("change", () => {
    importImageAsset("texture", elements.importTextureInput.files?.[0]);
    elements.importTextureInput.value = "";
  });
  elements.importObjectInput.addEventListener("change", () => {
    importImageAsset("object", elements.importObjectInput.files?.[0]);
    elements.importObjectInput.value = "";
  });
  elements.importStageInput.addEventListener("change", () => {
    importImageAsset("stage", elements.importStageInput.files?.[0]);
    elements.importStageInput.value = "";
  });
  elements.importMusicInput.addEventListener("change", () => {
    importMusicAsset(elements.importMusicInput.files?.[0], elements.importMusicInput.dataset.blockId || null);
    elements.importMusicInput.value = "";
    elements.importMusicInput.dataset.blockId = "";
  });
  elements.stageModuleCloseButton.addEventListener("click", closeStageModule);
  elements.addSceneButton.addEventListener("click", addSceneWorkspace);
  elements.addSetButton.addEventListener("click", addStageSet);
  elements.setMiniCodeCloseButton.addEventListener("click", closeSetMiniCodePanel);
  elements.setPenColor.addEventListener("input", () => {
    state.setPenColor = elements.setPenColor.value;
    setSetEditorTool("pen");
  });
  elements.setUsePenButton.addEventListener("click", () => setSetEditorTool("pen"));
  elements.setUseBucketButton.addEventListener("click", () => setSetEditorTool("bucket"));
  elements.setFillColor.addEventListener("input", () => {
    if (!(state.setEditorTool === "bucket" || state.setEditorTool === "pen")) {
      return;
    }
    renderStageModule();
  });
  elements.setActorContextCodeButton.addEventListener("click", openSetContextActorCode);
  elements.setActorContextPenButton.addEventListener("click", openSetContextPenAnimation);
  elements.setActorContextPhysicsToggleButton.addEventListener("click", toggleSetContextPhysics);
  elements.setActorContextPhysicsButton.addEventListener("click", openSetContextPhysicsEditor);
  elements.setDrawingContextDeleteButton.addEventListener("click", deleteSetContextDrawing);
  elements.setAddLightButton.addEventListener("click", () => {
    setSetEditorTool("light");
    const set = getActiveSet();
    const light = createLight();
    set.lights.push(light);
    state.setSelectedLightId = light.id;
    syncLightControls(light);
    markProjectDirty();
    renderStageModule();
  });
  elements.setLightType.addEventListener("change", updateSelectedSetLightControls);
  elements.setLightColor.addEventListener("input", updateSelectedSetLightControls);
  elements.setLightBrightness.addEventListener("input", updateSelectedSetLightControls);

  for (const button of elements.setToolTabs) {
    button.addEventListener("click", () => setSetEditorTool(button.dataset.setTool));
  }

  for (const button of elements.panelButtons) {
    button.addEventListener("click", () => setActivePanel(button.dataset.panel));
  }

  stageCanvas.addEventListener("pointerdown", onPointerDown);
  stageCanvas.addEventListener("pointermove", onPointerMove);
  stageCanvas.addEventListener("pointerup", onPointerUp);
  stageCanvas.addEventListener("contextmenu", onStageContextMenu);
  characterBuilderCanvas.addEventListener("pointerdown", onCharacterBuilderPointerDown);
  characterBuilderCanvas.addEventListener("pointermove", onCharacterBuilderPointerMove);
  characterBuilderCanvas.addEventListener("pointerup", onCharacterBuilderPointerUp);
  characterBuilderCanvas.addEventListener("pointercancel", onCharacterBuilderPointerUp);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  stageCanvas.addEventListener("pointerleave", () => {
    state.lastPointer.inside = false;
  });
  setCanvas.addEventListener("pointerdown", onSetPointerDown);
  setCanvas.addEventListener("pointermove", onSetPointerMove);
  setCanvas.addEventListener("pointerup", onSetPointerUp);
  setCanvas.addEventListener("contextmenu", onSetContextMenu);

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("pointerdown", (event) => {
    if (!elements.scriptBlockInfo.contains(event.target)) {
      hideBlockInfo();
    }
    if (!elements.actorContextMenu.contains(event.target)) {
      hideActorContextMenu();
    }
    if (!elements.drawingContextMenu.contains(event.target)) {
      hideDrawingContextMenu();
    }
    if (!elements.setActorContextMenu.contains(event.target)) {
      hideSetActorContextMenu();
    }
    if (!elements.setDrawingContextMenu.contains(event.target)) {
      hideSetDrawingContextMenu();
    }
  });
  window.addEventListener("contextmenu", (event) => {
    if (!event.target.closest?.(".script-block, .script-palette-button")) {
      hideBlockInfo();
    }
  });
  window.addEventListener("resize", () => {
    ensureCanvasSize();
    if (state.audio.musicMakerExpanded) {
      layoutExpandedMusicMaker();
    }
  });
  window.addEventListener("beforeunload", saveProjectState);
}

async function init() {
  loadProjectState();
  populateToolLists();
  populateSetToolLists();
  renderMusicMakerGrid();
  renderAudioLibrary();
  renderScriptCategoryTabs();
  renderScriptPalette();
  bindEvents();
  setActivePanel("characters");
  renderPhysicsControls();
  updateSelectionLabel();
  updateToolLabel();
  renderScriptEditor();
  updateRecordingUi();
  await loadRecordings();
  requestAnimationFrame(animate);
}

init();
