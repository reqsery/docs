---
id: usage
title: Usage
sidebar_label: Usage
---

# MC Mod Porter — Usage

How to port a Minecraft mod from one version to another, both manually and with AI assistance.

---

## Quick Start

```bash
# Preview changes (recommended first step)
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar /path/to/mymod 1.20.4 1.20.5 --dry-run

# Apply the port
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar /path/to/mymod 1.20.4 1.20.5
```

---

## Manual Workflow

### Step 1 — Check Supported Versions

```bash
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar --list-versions
```

This lists every Minecraft version pair the porter supports. Make sure both your source and target versions are listed.

### Step 2 — Dry Run First (Always)

A dry run shows you exactly what the porter would change without touching any files:

```bash
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar /path/to/mymod 1.19.4 1.20.0 --dry-run
```

Review the output to confirm the changes make sense before proceeding.

### Step 3 — Port Your Mod

```bash
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar /path/to/mymod 1.19.4 1.20.0
```

:::info
Your original mod folder is **never modified**. The porter creates a copy at `/path/to/mymod-ported-1_20_0`.
:::

### What the Porter Does

The auto-porter automatically applies these changes:

1. Updates `build.gradle` plugin versions
2. Updates `gradle.properties` dependency versions
3. Patches Java source files (class renames, import changes, method signature updates)
4. Updates `fabric.mod.json` / `mods.toml` metadata
5. Attempts a Gradle build and reports remaining errors

### Step 4 — Fix Remaining Errors

The auto-porter handles all **mechanical** changes (renames, imports, moves). Anything that requires **logic rewrites** shows up as a build error.

For each error:
1. Open `knowledge-base/minecraft/X.XX_to_Y.YY.md` for the relevant version hop
2. Look up the failing class or method
3. Apply the migration notes manually

Or use the AI workflow described below.

---

## AI-Assisted Workflow

AI tools are the recommended way to handle the remaining errors after running the auto-porter, especially for larger mods.

### With Claude Code

1. Install [Claude Code](https://claude.ai/claude-code) in your terminal
2. Navigate to the ported mod folder
3. Paste the build errors and the relevant knowledge-base file into the chat:

```
Here are my build errors after porting from 1.20.4 to 1.20.5:
[paste errors here]

Here's the migration guide:
[paste contents of knowledge-base/minecraft/1.20.4_to_1.20.5.md]

Please fix the remaining errors.
```

Claude Code can read your mod files, apply the fixes, and re-run the build in a loop until it compiles.

### With Cursor / Windsurf

1. Open the ported mod folder in Cursor or Windsurf
2. Open the relevant knowledge-base file as context
3. Ask: "Fix the build errors using the migration guide in the chat"

---

## CLI Reference

```
Usage: java -jar auto-porter.jar <mod-path> <from-version> <to-version> [options]

Arguments:
  <mod-path>        Absolute or relative path to the mod source folder
  <from-version>    Source Minecraft version (e.g. 1.20.4)
  <to-version>      Target Minecraft version (e.g. 1.20.5)

Options:
  --dry-run         Preview changes without modifying any files
  --list-versions   Print all supported version pairs and exit
  --help            Show this help message
```

### Examples

```bash
# Fabric mod: 1.19.2 → 1.20.1
java -jar auto-porter.jar ~/projects/my-fabric-mod 1.19.2 1.20.1

# NeoForge mod: 1.20.4 → 1.20.6 (dry run)
java -jar auto-porter.jar C:/mods/my-neoforge-mod 1.20.4 1.20.6 --dry-run

# Multi-version jump: 1.18.2 → 1.21.1
# Note: multi-hop ports are less reliable — prefer porting one version at a time
java -jar auto-porter.jar /mods/legacy-mod 1.18.2 1.21.1
```

### Output

The ported output is always placed in a new folder next to the original:

```
my-fabric-mod/                # original — untouched
my-fabric-mod-ported-1_20_1/  # ported copy
```

---

## Multi-Version Jumps

For large version jumps (e.g. 1.18 → 1.21), it's more reliable to port **one major version at a time**:

```bash
java -jar auto-porter.jar ./mymod 1.18.2 1.19.4
java -jar auto-porter.jar ./mymod-ported-1_19_4 1.19.4 1.20.4
java -jar auto-porter.jar ./mymod-ported-1_20_4 1.20.4 1.21.1
```

This makes each step easier to debug and ensures the knowledge base for each hop is applied correctly.

---

## How It Works

1. The porter checks `knowledge-base/minecraft/` for all breaking API changes between the two versions
2. It checks `patterns/` for method rename and class move tables
3. It checks `knowledge-base/loaders/` for the correct loader dependency versions
4. It applies all mechanical changes automatically
5. It runs a Gradle build and reports errors that require manual review

The knowledge base is the single source of truth — every change the porter makes is backed by a verified source. See [Contributing](/mc-mod-porter/contributing) for how the knowledge base is maintained.
