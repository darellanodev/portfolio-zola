+++
title = "Croac Vim"
description = "A game for learning VIM made in Python and Pygame CE"
weight = 50

[extra]
local_image = "projects/croacvim/logo.png"
+++

**Croac Vim** is a game for learning VIM made in Python and Pygame CE.

![Croac Vim Banner](https://github.com/darellanodev/croac-vim/blob/main/github_readme/banner.png?raw=true)

## THIS APPLICATION IS IN AN EARLY STAGE OF DEVELOPMENT

## Try it online

<https://darellanodev.github.io/croac-vim/>

## Github repository

- <https://github.com/darellanodev/croac-vim>

## Technologies

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: .8em">
    <a href="https://www.python.org">
        <img src="https://img.shields.io/badge/python-%233776AB.svg?style=flat&logo=python&logoColor=white" alt="Python">
    </a>
    <a href="https://github.com/pygame-community/pygame-ce">
        <img src="https://img.shields.io/badge/pygame--ce-%230C2D48.svg?style=flat&logo=pygame&logoColor=white" alt="Pygame CE">
    </a>
    <a href="https://github.com/pygame-web/pygbag">
        <img src="https://img.shields.io/badge/pygbag-%230C2D48.svg?style=flat&logo=python&logoColor=white" alt="Pygbag">
    </a>
</div>

## Requirements

I made this application using Python 3.14.0 in Windows 10 using CMD console and VSCode. I also use the Microsoft Black Formatter extension in VSCode.

## Installation

- Clone this repo and go into the cloned folder
- Create the virtual environment with `python -m venv .venv`
- Activate it:
  - `.venv\Scripts\activate` in CMD
  - or select the `Python: select Interpreter` option in VSCode, kill terminal if it's opened and open it again.
- Install dependencies `python -m pip install -r requirements.txt`
- Execute `run.sh` or `python main.py`

## Execute the unit tests

- Activate the virtual environment (see Install section)
- Execute `pytest`
