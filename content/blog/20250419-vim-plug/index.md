+++
title = "Installing the vim-plug in gVim"
date = 2025-04-19
updated = 2025-04-19
description = "Two days ago, I continued learning about gVim by practicing the installation of the vim-plug plugin."

[taxonomies]
tags = ["gVim", "plugins"]

[extra]
footnote_backlinks = true
+++

This week, I wanted to continue learning about gVim by practicing in one of my GitHub projects. First I wondered if there was an easy way to manage my gVim plugins instead of installing them manually. I found a plugin called vim-plug and I read the installation instructions in the official vim-plug GitHub repository for my Windows 10 machine.

![vim_plug](./vim_plug.png)

First, I deleted the folders of the plugins I had previously downloaded manually, to avoid conflicts when using vim-plug.

Then, I followed the instructions using the PowerShell command shown in the documentation on the vim-plug GitHub repository.

I opened gVim and executed the command `:e $MYVIMRC`, then added the following lines at the top of the file before the existing `set nocompatible` line.

I should mention that I needed to use the line `set shell=cmd.exe` because the vim-plug for windows had problems with other shells, so I added this line to prevent the errors shown by vim-plug.


```bash

set nocompatible # this line was already there. It’s the first line on my _vimrc file

set shell=cmd.exe 

call plug#begin('~/vimfiles/plugged')

Plug 'tpope/vim-fugitive'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'dracula/vim', { 'as': 'dracula' }
Plug 'szw/vim-maximizer'

call plug#end()
```

As you can see, I installed four plugins:
dracula: for the color scheme
vim-fugitive: for managing Git inside gVim
ctrlp: for simulating the vscode ctrl+p
vim-maximizer: to temporarily maximize a window while working with multiple windows, and then restore it.

I will talk about these plugins in future posts.

Currently, my complete `_vimrc` file look like this (I’m using gVim 9.1.821 on my Windows 10 machine):

```bash
set nocompatible

" Needed for vim-plug to manage Windows paths
set shell=cmd.exe 

call plug#begin('~/vimfiles/plugged')

Plug 'tpope/vim-fugitive'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'dracula/vim', { 'as': 'dracula' }
Plug 'szw/vim-maximizer'

call plug#end()

syntax enable
set termguicolors
set guifont=Consolas:h14
colorscheme dracula
set relativenumber

let mapleader = "\\"

let g:netrw_browse_split="v"
let g:netrw_altv=1
let g:netrw_winsize=30
let g:netrw_liststyle=3

nnoremap <Leader>e :Lexplore<CR>
nnoremap <Leader>e :Lexplore<CR>
vnoremap <C-c> "+y
nnoremap <C-v> "+p
inoremap <C-v> <Esc>"+pa

filetype plugin indent on
set autoindent
set expandtab
set tabstop=4
set backspace=2

language messages en_US.UTF-8
set langmenu=en_US.UTF-8

set noswapfile

" Configuration for fugitive
set statusline=%f\ %h%w%m%r\ %{FugitiveStatusline()}\ %=%(%y\ %{&fileencoding?&fileencoding:&encoding}\ %l/%L:%c\ %)
set laststatus=2

" Other shortcuts for fugitive
nnoremap <Leader>gs :Git<CR>
nnoremap <Leader>gc :Git commit<CR>

```


