# Neon Mob City

Phase 1 Meta Quest WebXR prototype for a retro neon cyberpunk VR roguelike shooter.

The project keeps the basic static A-Frame/WebXR setup from the previous
`simple-vr-scene` template work:

- `index.html`
- `main.js`
- `styles.css`
- no framework
- no bundler
- no npm install
- no server required for hosting

## Current Prototype Features

- Randomized neon city hub generated on each page load
- Dark road grid with clear streets, sidewalks, side streets, alleys, and neon lane lines
- Blocky regular buildings placed on lots behind sidewalks, with varied heights and glowing windows
- Non-interactive shop exteriors: Gun Shop, Upgrade Clinic, Repair Garage, Black Market Door, Neon Diner, Pawn Shop, Arcade Shop, and Mod Shop
- 3D blocky walking NPCs: civilians, mob workers, vendors, robot pedestrians, and mutant weirdos
- Looping traffic cars that stay on road lanes
- Street lamps, vending machines, trash cans, crates, sewer grates, barriers, rooftop antennas, and other city props
- Simple player collision against buildings, cars, major props, NPCs, and landmarks
- Four-sided purple skyline panels plus distant silhouette buildings around the whole city
- Border billboards with support frames placed around the city perimeter
- All 30 mob base locations represented as visible locked/active landmarks
- Street Tax Office is the active first mob base
- Generated Street Tax Office interior assembled from premade room chunks
- Guaranteed Front Lobby start chunk and Tax Vault end chunk
- Randomized middle chunks and optional side chunks on each level entry/reload
- Future-use markers for enemy spawns, item spawns, secrets, mini-boss rooms, and exits
- Physical pickup gun that can be grabbed with either Quest side grip
- Visible neon bullets fired from the held gun
- Left-stick smooth locomotion
- Right-stick 30 degree snap turning
- Five-heart player health with a simple death/restart state
- Return portal from the Street Tax Office back to the city

Only the Street Tax Office is active right now. The other 29 base landmarks are visual locked entrances for the full city map prototype.

## Controls

- Meta Quest Browser: press the A-Frame `Enter VR` button.
- Move: left thumbstick or desktop `W A S D`.
- Snap turn: right thumbstick left/right.
- Pick up gun: press side grip near the gun with either hand.
- Drop gun: release side grip.
- Shoot: hold the gun, then press that hand's trigger.
- Enter/return portals: walk into the glowing doorway/portal, or desktop-click it while testing.
- Restart after death: press `R` on desktop, or reload the page in Quest Browser.

The gun starts in front of the player. It is not attached to a hand until grabbed.
Debug logs print `Gun grabbed left`, `Gun grabbed right`, and `Gun released` for controller grip testing.

## Street Tax Office

The Street Tax Office is a first pass at the mob-base map generator. It is a map/layout prototype only: no enemies, bosses, combat encounters, choices, dialogue, shops, or upgrades are added to this level yet.

Each entry builds a semi-linear office route from reusable chunks:

- Front Lobby always appears first.
- Tax Vault always appears last.
- Four to seven middle chunks are randomly selected from security, cubicles, hallways, records, payment, manager office, call center, printer room, audit chamber, collection room, and stairwell pieces.
- One to three optional side chunks can attach to the main path.
- Small colored markers show future enemy, item, secret, mini-boss, and exit locations.

For quick desktop QA, open `index.html#street-tax-office` to load directly into the generated office. The normal game flow is to enter the Street Tax Office landmark from the city hub.

## Randomized City

The city uses a lightweight seeded generator in `main.js`. On each page load it shuffles base slots within broad zones, places regular buildings only on valid lots, varies building heights/window patterns, changes prop/NPC placement, loops car traffic on road lanes, and rotates perimeter billboard content.

Zones currently include downtown, industrial, entertainment, underground/sewer, rooftop/high-rise, weird/secret, and waterfront/docks areas. This is still a visual prototype, not the full roguelike city simulation.

## Hosting

This is a static website. Put the files at the root of a static host, or enable
GitHub Pages for the repository.

Quest Browser requires a secure hosted page for full WebXR support. Use HTTPS
when deploying publicly.
