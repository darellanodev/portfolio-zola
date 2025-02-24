# Darellanodev made with zola and tabi

This is my personal porfolio made with zola and tabi.

## Github repository

- <https://github.com/darellanodev/portfolio-zola>

## Technologies

[![Zola](https://img.shields.io/badge/Zola-9B59B6?style=flat&logo=zola&logoColor=white)](https://www.getzola.org)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220)](https://pnpm.io)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io)

## Requires

You need to download `zola.exe` in the root

## Utility for update the playable demos

If you make changes to the files in `D:\xampp\htdocs\proyectos\portfolio-zola\utils\playable_demos`, use the `./run_utils_update_demos.sh` script to compile the typescript files into javascript files in the `utils/dist` directory. This script will also copy the updated files from the demo projects to this project, as well as to the `darellanodev.github.io` project.

### How to use the playable demos updater

- First generate the build versions of each demo:
  - For jetpackgame: use the `./run_build_web.sh` script to regenerate the `jetpackgame.wasm` file
  - For giftowerdefense: delete the `dist` folder and then use the `./run_build.sh` script to regenerate the files in the `dist` folder
  - For dailyboostcalendar: run the `./run_build.sh`
- Finally use the `./run_utils_update_demos.sh` script
- Enter to the `darellanodev.github.io` project, make a commit and it push to GitHub.
- Clear the cache of the web browser and reload the demos to see the changes.

## Build

- For updating the darellanodev.github.io:
  - Execute `./run_build.sh`
  - Execute `./run_copy_build_except_demos.sh` to copy public directory into darellanodev.github.io without the `tryitonline` directory

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
