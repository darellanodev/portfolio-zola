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
- Basic workflow

  - 1: add
    - Add specific files to the staged area: `git add file1.txt file2.txt`
    - Or add all: `git add .`
  - 2: Commit:
    - Commit with a message: `git commit -m "start creating two sample files"`
  - Also we can add everything and commit with message in one command: `git commit -am "first commit"`

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

    - 1: Move to other branch: `git switch main`
    - 2: Delete the branch: `git branch -d bugfix`

  - Rename a branch:

    - 1: Switch to the branch: `git switch bugfix`
    - 2: Rename it: `git branch -m errorfix`

  - Merge a branch:

    - 1: Go to the receiving branch: `git switch main`
    - 2: Merge the desired branch into the actual branch: `git merge bugfix`

- See changes:

  - In the working directory that are not staged: `git diff`
  - Since the last commit (no matters if staged or not): `git diff HEAD`
  - For the staged: `git diff --staged`
  - We can add a filename to the previous commands to limit to a specific file:
    - `git diff HEAD colors.txt`
  - List the changes between the tip of branch1 and branch2: `git diff branch1 branch2`
  - List the changes between two commits: `git diff 45bdd51 f3eaa49`

- Stash:

  - For save: `git stash`
  - Restore and remove from the stash: `git stash pop`
  - Other stash commands that are less used:
    - Restore but keep a copy in the stash (for example to apply the stash to multiples branches) `git stash apply`
    - If we keep more than one stashed thing: `git stash list`
    - Apply a specific stash: `git stash apply stash@{1}`
    - Delete a specific stash: `git stash drop stash@{1}`
    - Delete all the stash: `git stash clear`

- Travel to make changes:

  - 1: move HEAD to a specific commit `git checkout <commit-hash>`
  - 2: then make a branch that starts for this commit, and we can make changes in a new branch
  - Other method to move the head:

    - to move one time back the HEAD to the previous commit `git checkout HEAD~1`
    - ... two times back `git checkout HEAD~2`
    - ... three times back`git checkout HEAD~3`
    - ...

  - After move HEAD to a specific commit we can return to the last commit of the branch using: `git switch -`
  - Discarding modified changes:
    - `git checkout HEAD file1.txt`
    - other method: `git checkout -- file1.txt`

- Restoring things:

  - Git restore (same to the previous git commands)
    - `git restore file1.txt`
  - To restore a file to what it was in a specific commit:
    - 1: we can do (we can put the commit hash instead of HEAD~1): `git restore --source HEAD~1 file1.txt`
    - 2: then we can also go back to the last commit of the file`git restore file1.txt`
  - Unstaging files
    - `git restore --staged file1.txt`
  - Git reset
    - remove the commits but not the changes: `git reset <commit-hash>`
      - this is useful when we had made changes in the incorrect branch. First we delete the commits without loosing the changes and then we create a new branch.
    - remove the commits and the changes: `git reset --hard <commit-hash>`
  - Git revert
    - Is similar to reset but it creates a new commit without removing any previous commits.
    - It's good because it does not alter the git history specially when we are collaborating with other persons.
    - It can produce conflicts and then you have to resolve to make the new commit
    - `git revert <bad-commit-hash-that-we-want-to-revert>`

- Working with the remote

  - Git remote:
    - View the actual remotes: `git remote -v`
    - Add a remote with the name origin: `git remote add origin <repo-url>`
    - Rename the branch where we are to: `git branch -M main`
    - Push a branch: `git push origin main`
    - Set the upstream:
      - 1: remember that the main branch of my local repo is connected with the main branch of the origin: `git push -u origin main`
      - 2: then we can do `git push`
    - View remote branches: `git branch -r`
    - To get locally a branch that is in remote but not in local (if the branch name exists in remote it will get the branch): `git switch branchname`
  - Fetch:
    - Download the last changes of a branch without messing up the working directory: `git fetch` or `git fetch origin`
    - You can indicate a specific branch: `git fetch origin/responsivegui`
    - Then we can travel to it: `git checkout origin/responsivegui`
  - Pull (is like a fetch and then a merge):
    - `git pull origin responsivegui`
    - A tipically workflow when doing a pull cause conflicts is: resolve conflicts, and then push the fixed conflicts
    - Short syntax: `git pull` (by default is origin, and the current branch)

## GUIs

- VSCode:
  - Git Graph extension
- [GitKraken](https://www.gitkraken.com/)

## Other interesting links

- <https://about.gitlab.com/blog/2018/08/08/git-happens/>

## Other common scenarios

### When you put something to ignore but it is commited previously and now I want to ignore it

    Source: <https://stackoverflow.com/questions/7527982/applying-gitignore-to-committed-files>

    After editing .gitignore to match the ignored files, you can do git ls-files -ci --exclude-standard to see the files that are included in the exclude lists; you can then do

        Linux/MacOS:
            git ls-files -ci --exclude-standard -z | xargs -0 git rm --cached
        Windows (PowerShell):
            git ls-files -ci --exclude-standard | % { git rm --cached "$_" }
        Windows (cmd.exe):
            for /F "tokens=*" %a in ('git ls-files -ci --exclude-standard') do @git rm --cached "%a"

    to remove them from the repository (without deleting them from disk).
