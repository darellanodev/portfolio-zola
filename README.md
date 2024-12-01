# Darellanodev made with zola and tabi

This is my personal porfolio made with zola and tabi.

## Github repository

- <https://github.com/darellanodev/portfolio-zola>

## Requires

You need to download `zola.exe` in the root

## Utility for update the playable demos

If you make changes to the files in `D:\xampp\htdocs\proyectos\portfolio-zola\utils\playable_demos`, use the `run_utils_update_demos.sh` script to compile the typescript files into javascript files in the `utils/dist` directory. This script will also copy the updated files from the demo projects to this project, as well as to the `darellanodev.github.io` project.

### How to use the playable demos updater

- First generate the build versions of each demo:
  - For use the `run_build_web.sh` script to regenerate the `jetpackgame.wasm` file
  - For giftowerdefense, delete all inside the `dist` folder and then use the `run.sh` script to regenerate the files in the `dist` folder
- Finally use the `run_utils_update_demos.sh` script
- Enter to the `darellanodev.github.io` project, make a commit and it push to GitHub.
- Clear the cache of the web browser and reload the demos to see the changes.

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
