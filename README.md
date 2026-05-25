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
- Dark road grid with sidewalks, side streets, alleys, and neon lane lines
- Blocky buildings with varied heights, glowing windows, skyline silhouettes, signs, and billboards
- Non-interactive shop exteriors: Gun Shop, Upgrade Clinic, Repair Garage, Black Market Door, Neon Diner, Pawn Shop, Arcade Shop, and Mod Shop
- Wandering visual NPCs: civilians, mob workers, vendors, robot pedestrians, and mutant weirdos
- Parked cars, street lamps, vending machines, trash cans, crates, sewer grates, barriers, rooftop antennas, and other city props
- All 30 mob base locations represented as visible locked/active landmarks
- One playable Robot Factory interior
- Simple room/hallway layout with cover blocks
- Mob Soldier and Robot Guard enemy placeholders
- Physical pickup gun that can be grabbed with either Quest side grip
- Visible neon bullets fired from the held gun
- Left-stick smooth locomotion
- Right-stick 30 degree snap turning
- Five-heart player health with a simple death/restart state
- Base clear condition
- Choice panel after clearing the Robot Factory
- Return portal back to the city
- City state label updated by the selected choice

Only the Robot Factory is playable right now. The other 29 base landmarks are visual locked entrances for the full city map prototype.

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

## Randomized City

The city uses a lightweight seeded generator in `main.js`. On each page load it shuffles base slots within broad zones, varies building heights/window patterns, changes prop/NPC placement, and rotates billboard/sign content.

Zones currently include downtown, industrial, entertainment, underground/sewer, rooftop/high-rise, weird/secret, and waterfront/docks areas. This is still a visual prototype, not the full roguelike city simulation.

## Hosting

This is a static website. Put the files at the root of a static host, or enable
GitHub Pages for the repository.

Quest Browser requires a secure hosted page for full WebXR support. Use HTTPS
when deploying publicly.
