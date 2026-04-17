+++
title = "Security plugins for OpenCode"
date = 2026-04-17
updated = 2026-04-17
description = "I share my experience testing security plugins for OpenCode: Claude Code Safety Net and Envsitter Guard"

[taxonomies]
tags = ["OpenCode", "Tools", "AI"]

[extra]
footnote_backlinks = true
+++

I've been testing some plugins to improve OpenCode's security.

![security-plugins-opencode](./security-plugins-opencode.png)

## Claude Code Safety Net

The first one is called [Claude Code Safety Net](https://github.com/kenryu42/claude-code-safety-net) and intercepts dangerous git and filesystem commands before they execute.

The GitHub documentation covers interesting topics like:

- Why use it instead of denial permission rules
- Permission rules have known ways to bypass them
- Safety Net can handle things patterns can't

Let's install it manually by adding the plugin to the opencode.jsonc file:

Here's how the plugin was added to the existing plugins list:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": [
    "@tarquinen/opencode-dcp@latest",
    "@rtk/opencode-plugin@latest",
    "cc-safety-net"
  ]
}
```

We can run a diagnostic using:

```bash
npx cc-safety-net doctor
```

We can also see why a specific command gets blocked (for example "git reset --hard") using:

```bash
npx cc-safety-net explain "git reset --hard"
```

We can test it inside OpenCode in a test project with a README.md that has changes, by asking the agent to execute the dangerous command:

```bash
git checkout -- README.md
```

![screenshot1](./screenshot1.png)

## Envsitter Guard

Another security tool I've tested is [envsitter-guard](https://github.com/boxpositron/envsitter-guard). Its purpose is to prevent agents and tools from exposing sensitive .env file information that could leak in logs, sessions, screenshots, etc.

To install it, add to the plugins array in opencode.jsonc:

```json
"envsitter-guard@latest"
```

If OpenCode is open, close it and reopen it.

We can also check in OpenCode if the plugin loaded by pressing Ctrl+P and selecting "view status" in the System category. There we can also see the active plugins.

To test it, we can ask OpenCode to read a .env file.

![screenshot2](./screenshot2.png)

You can see the process I followed in [this video](https://youtu.be/dsU2_kJXaLE) (Spanish audio).
