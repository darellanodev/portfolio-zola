# Darellanodev made with zola and tabi

This is my personal porfolio made with zola and tabi.

## Tasks

- [ ] Add node script into utils folder to update playable demos
  - [x] gif tower defense demo
  - [x] jsconcepts
  - [ ] minijetpack
  - [ ] Also copy them to D:\xampp\htdocs\proyectos\darellanodev.github.io\playablegames\

## Playable demos updater util

- For updating the playable demos updater:
  - First you must update the typescript files "D:\xampp\htdocs\proyectos\portfolio-zola\utils\playable_demos"
  - Then use the `run_tsc.sh`
  - Finally the `run_update_demos.sh`

## Requires

You need to download zola.exe in the root

## Customize keybindings.json in VSCode

You can use this settings into VSCode `keybindings.json`:

```json
  {
    "key": "ctrl+r",
    "command": "workbench.action.terminal.sendSequence",
    "args": {
      "text": "./run.sh\u000D"
    },
  },
```
