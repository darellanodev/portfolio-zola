# Darellanodev made with zola and tabi

This is my personal porfolio made with zola and tabi.

## Requires

You need to download `zola.exe` in the root

## Tasks

- [x] Add node script into utils folder to update playable demos
  - [x] gif tower defense demo
  - [x] jsconcepts
  - [x] minijetpack
  - [x] Also copy them to D:\xampp\htdocs\proyectos\darellanodev.github.io\playablegames\

## Playable demos updater util

- For updating the playable demos updater:
  - First you must update the typescript files `D:\xampp\htdocs\proyectos\portfolio-zola\utils\playable_demos`
  - Then use the `run_utils_update_demos.sh` to compile the typescript files into javascript files in `utils/dist` directory and then it will copy from the demo projects to this project, and also to the `darellanodev.github.io project`

## Build

- For updating the darellanodev.github.io:
  - Execute `./run_build.sh`
  - Execute `./run_copy_build_except_demos.sh` to copy public directory into darellanodev.github.io without the `playablegames` directory

## Darellanodev animated svg logo

- Inside `static/js` there is `vivus.min.js` and `logo_animation.js` but these files are not in the git version control of this repo. If you need to see them look in the `darellanodev.github.io` repo.
- The stroke animation is done thanks to `vivusjs` library. The gradients animations are done inside the svg file. Also, inside the svg file, there is a fade in animation from transparent to full opaque for each letter.

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
