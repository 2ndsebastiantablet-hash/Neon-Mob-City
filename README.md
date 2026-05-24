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

## Phase 1 Features

- Compact generated-feeling neon city hub
- Three mob base entrances: Robot Factory, Mutant Lab, and Neon Casino
- One playable Robot Factory interior
- Simple room/hallway layout with cover blocks
- Mob Soldier and Robot Guard enemy placeholders
- Basic raycast shooting from the right VR controller, desktop click, or Space
- Base clear condition
- Choice panel after clearing the Robot Factory
- Return portal back to the city
- City state label updated by the selected choice

## Controls

- Meta Quest Browser: press the A-Frame `Enter VR` button.
- Move: left thumbstick, right thumbstick, or desktop `W A S D`.
- Shoot/interact: controller trigger, desktop click, or Space.
- Enter/return portals: walk into the glowing doorway/portal or shoot/click it.

## Hosting

This is a static website. Put the files at the root of a static host, or enable
GitHub Pages for the repository.

Quest Browser requires a secure hosted page for full WebXR support. Use HTTPS
when deploying publicly.
