+++
title = "Installing Impeccable skill for OpenCode"
date = 2026-04-10
updated = 2026-04-10
description = "A basic guide to install and use the Impeccable skill in OpenCode to audit and improve web pages"

[taxonomies]
tags = ["OpenCode", "Tools", "AI"]

[extra]
footnote_backlinks = true
+++

I was testing the Impeccable skill in OpenCode to improve the design of a website, taking into account aspects such as accessibility, responsive design, antipatterns, and more. I really liked it and wanted to share it with the whole community. I hope to apply it to more personal projects to continue improving my web designs.

![impeccable-skill-opencode](./impeccable-skill-opencode.png)

Below, I'll show you how to install the Impeccable skill for OpenCode.

We start in a terminal in the project directory where we want to use this skill.

First, we go to the GitHub repo [pbakaus/impeccable](https://github.com/pbakaus/impeccable) and access its website that's linked in the GitHub repo ([impeccable.style](https://impeccable.style/)). In Get Started, we'll go to the section that shows the npx command to install it.

In the terminal of the project directory, we run:

- `npx skills add pbakaus/impeccable`

We follow the installer instructions. We select all skills, and then another question appears asking if we want to install any AI agent that doesn't appear in the universal installation list. Since the universal installation already supports OpenCode, we just press Enter to continue.

![screenshot1](./screenshot1.png)

After installing it, we open OpenCode and run the /audit command. In my case, I had an index.html that I wanted to audit, so I ran `/audit index.html`

OpenCode runs the skill, and after a while, it presents a report with different areas with scores and suggestions for improvement.

![screenshot2](./screenshot2.png)

Next, we run the combined commands `/normalize /polish` and press Enter, and after a while, corrections are made to the web design.

Finally, we run `/audit index.html` to see if the score has improved after the corrections made.

![screenshot3](./screenshot3.png)

Video on YouTube explaining the process (audio in Spanish): [https://youtu.be/n8jSHo_PQbM](https://youtu.be/n8jSHo_PQbM)
