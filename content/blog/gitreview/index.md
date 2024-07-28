+++
title = "Git review"
date = 2024-07-26
updated = 2024-07-28
description = "A review of Git commands."

[taxonomies]
tags = ["Git"]

[extra]
footnote_backlinks = true
+++

This is a review of Git commands

## Git commands review

### Basics

- Configuration:

  - View user name / email: `git config user.name` / `git config user.email`
  - Set globally user / email: `git config --global user.name "My name"` / `git config --global user.email "myemail@providermail.com"`

- View the current status: `git status`
- Initialize repository: `git init`
- Add files to the staged area / Add all: `git add file1.txt file2.txt` / `git add .`
- Commit:
  - Commit with a message: `git commit -m "start creating two sample files"`
  - Add everything and commit with message `git commit -am "first commit"`
- View log:

  - Display a list of the commits: `git log`
  - In one line `git log --oneline`

- Amend:

  - Amend without editing the message `git commit --amend --no-edit`
  - Amend the message `git commit --amend -m "my new message"`

- Branches:

  - View all branches: `git branch`
  - Create / Switch:

    - Create a branch: `git branch bugfix`
    - Switch to a branch: `git switch bugfix`
    - Create and switch to a branch: `git switch -c bugfix`
    - Old command: `git checkout -b bugfix`

  - Delete a branch:

    - 1: move to other branch: `git switch main`
    - 2: delete the branch: `git branch -d bugfix`

  - Rename a branch:

    - 1: Switch to the branch: `git switch bugfix`
    - 2: Rename it: `git branch -m errorfix`

  - Merge a branch:

    - 1: go to the receiving branch: `git switch main`
    - 2: merge the desired branch into the actual branch: `git merge bugfix`

  - See changes:

    - in the working directory that are not staged: `git diff`
    - since the last commit (no matters if staged or not): `git diff HEAD`
    - for the staged: `git diff --staged`
    - we can add a filename to the previous commands to limit to a specific file:
      - `git diff HEAD colors.txt`
    - list the changes between the tip of branch1 and branch2: `git diff branch1 branch2`
    - list the changes between two commits: `git diff 45bdd51 f3eaa49`

## GUIs

- VSCode:
  - Git Graph extension
- [GitKraken](https://www.gitkraken.com/)
