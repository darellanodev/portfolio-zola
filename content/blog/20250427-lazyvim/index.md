+++
title = "Installing LazyVim in Neovim"
date = 2025-04-27
updated = 2025-04-27
description = "This week, I wanted to try LazyVim, which is a configuration for Neovim."

[taxonomies]
tags = ["LazyVim", "Neovim"]

[extra]
footnote_backlinks = true
+++

Last week, I wanted to try LazyVim. I followed these steps to install it on my Windows 10 machine.

![lazyvim](./lazyvim.png)

First, I downloaded the latest stable release of Neovim:
<https://github.com/neovim/neovim/releases/latest/download/nvim-win64.msi>

Then, I created the nvim folder in my user directory, since it didn't exist before:
`C:\Users\Administrador\AppData\Local\nvim`

Inside this folder, I cloned the LazyVim starter:

```powershell
cd C:\Users\Administrador\AppData\Local\nvim
git clone https://github.com/LazyVim/starter .
```

Make sure it does not create a starter subfolder. If it does, move all the contents into the `nvim` folder so the `init.lua` file is directly inside `nvim`.

Next, I opened a terminal and ran the `nvim` command. Neovim started downloading and installing the plugins, but I got some errors saying that a C compiler was not found.

I closed Neovim and installed MinGW:

First, I installed Chocolatey by following the instructions on the official site, using PowerShell.

Then, I ran `choco install mingw` in a terminal.

Finally, I opened Neovim again, and all the plugins were installed successfully.

Since Telescope wasn't working, I needed to install `fd` and `ripgrep` using choco:

```powershell
choco install fd ripgrep
```
