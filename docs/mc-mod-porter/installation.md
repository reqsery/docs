---
id: installation
title: Installation
sidebar_label: Installation
---

# MC Mod Porter — Installation

MC Mod Porter is an open-source CLI tool for porting Minecraft Java Edition mods across versions. This guide covers how to get it set up on your machine.

---

## Requirements

Before you begin, check your Java version. The `auto-porter` JAR itself requires **Java 21+** to run (regardless of which Minecraft version you're porting).

| Minecraft Version | Java Required for Gameplay |
|-------------------|---------------------------|
| 1.16 – 1.17.x | Java 16 |
| 1.18 – 1.20.4 | Java 17 |
| 1.20.5 – 1.21.11 | Java 21 |
| 26.1+ | Java 25 (LTS) |

:::info
The Java requirement listed above is for building and running your mod, not for running the porter tool itself. The porter always requires Java 21+.
:::

### Check Your Java Version

```bash
java -version
```

If you don't have Java 21, download it from [Adoptium](https://adoptium.net) (recommended) or [Oracle](https://www.oracle.com/java/technologies/downloads/).

---

## Installation

### Step 1 — Clone the Repository

```bash
git clone https://github.com/reqsery/mc-mod-porter.git
cd mc-mod-porter
```

### Step 2 — Build the auto-porter

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mac-linux" label="macOS / Linux" default>

```bash
cd auto-porter
./gradlew build
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```bat
cd auto-porter
gradlew.bat build
```

  </TabItem>
</Tabs>

The build produces the executable JAR at:
```
auto-porter/build/libs/auto-porter-1.0.0.jar
```

### Step 3 — Verify the Installation

```bash
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar --list-versions
```

You should see a list of all supported Minecraft versions.

---

## Folder Structure

After cloning, the repository contains:

```
auto-porter/         CLI tool — ports a mod folder to a target MC version
visual-tester/       Fabric mod for automated in-game UI testing
deep-debugger/       Static analyzer and fuzz-test generator
scripts/             Utility scripts (wrappers, validators)

knowledge-base/
  minecraft/         One file per adjacent version hop (e.g. 1.20.4_to_1.20.5.md)
  loaders/
    fabric/          Fabric Loader + API version table
    neoforge/        NeoForge version table

patterns/
  method-renames.md  Verified method rename table (all versions)
  class-moves.md     Verified class move/rename table
  signatures.md      Before/after code for common signature changes

java/                Java version requirement notes (17, 21, 25)
docs/                CONTRIBUTING.md, TROUBLESHOOTING.md, FAQ.md
templates/           Template for adding a new version entry
```

---

## AI-Assisted Setup (Recommended)

The easiest way to use MC Mod Porter is to let an AI agent run it for you. These tools run locally on your PC, can read your mod folder, execute the porter, and fix remaining errors automatically:

| Tool | Notes |
|------|-------|
| [Claude Code](https://claude.ai/claude-code) | Terminal agent. Best for autonomous multi-step porting. Max plan handles large mods. |
| [Cursor](https://cursor.sh) | AI-powered VS Code fork. Open your mod folder and chat with it directly. |
| [Windsurf](https://codeium.com/windsurf) | Similar to Cursor. Good free tier. |
| [GitHub Copilot](https://github.com/features/copilot) | Built into VS Code/JetBrains. Best for fixing individual files. |

See [Usage — AI Workflow](/mc-mod-porter/usage#ai-assisted-workflow) for exact instructions.

---

## Next Steps

- [Usage guide](/mc-mod-porter/usage) — how to run the porter
- [Supported versions](/mc-mod-porter/supported-versions) — full compatibility matrix
- [Troubleshooting](/mc-mod-porter/troubleshooting) — common build errors and fixes

:::tip
Star and watch the [GitHub repo](https://github.com/reqsery/mc-mod-porter) to get notified when new Minecraft versions are added to the knowledge base.
:::
