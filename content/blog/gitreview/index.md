+++
title = "Git review"
date = 2024-07-26
updated = 2024-07-26
description = "A review of Git commands."

[taxonomies]
tags = ["Git"]

[extra]
footnote_backlinks = true
+++

This is a review of Git commands

## Git commands review

### Basics

- View user name / email: `git config user.name` / `git config user.email`
- Set globally user / email: `git config --global user.name "My name"` / `git config --global user.email "myemail@providermail.com"`
- View the current status: `git status`
- Initialize repository: `git init`
- Add files to the staged area / Add all: `git add file1.txt file2.txt` / `git add .`
- Commit with a message: `git commit -m "start creating two sample files"`
- Display a list of the commits: `git log`
  - In one line `git log --oneline`
- Amend:
  - Amend without editing the message `git commit --amend --no-edit`
  - Amend the message `git commit --amend -m "my new message"`

## GUIs

- [GitKraken](https://www.gitkraken.com/)
