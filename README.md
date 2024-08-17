# Darellanodev made with zola and tabi

This is my personal porfolio made with zola and tabi.

## Requires

You need to download `zola.exe` in the root

## Playable demos updater util

- For updating the playable demos updater:
  - First you must update the typescript files `D:\xampp\htdocs\proyectos\portfolio-zola\utils\playable_demos`
  - Then use the `run_utils_update_demos.sh` to compile the typescript files into javascript files in `utils/dist` directory and then it will copy from the demo projects to this project, and also to the `darellanodev.github.io project`

## Build

- For updating the darellanodev.github.io:
  - Execute `./run_build.sh`
  - Execute `./run_copy_build_except_demos.sh` to copy public directory into darellanodev.github.io without the `playablegames` directory

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
