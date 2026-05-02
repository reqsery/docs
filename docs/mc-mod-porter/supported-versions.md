---
id: supported-versions
title: Supported Versions
sidebar_label: Supported Versions
---

# Supported Versions

MC Mod Porter supports porting between all versions in the ranges below. Both Fabric and NeoForge mod loaders are supported.

---

## Supported Minecraft Versions

### 1.x Format (Classic versioning)

| Version | Java Required | Notable API Changes |
|---------|--------------|---------------------|
| 1.16 – 1.16.5 | Java 16 | Baseline |
| 1.17.1 | Java 16 | `KeyMapping` renamed, `addRenderableWidget`, SLF4J logging |
| 1.18 – 1.18.2 | Java 17 | Java 17 required from this version |
| 1.19 – 1.19.4 | Java 17 | Chat signing introduced (1.19.1), `Button.builder` (1.19.3), `EditBox.setHint` |
| 1.20 – 1.20.1 | Java 17 | `GuiGraphics` introduced |
| 1.20.2 | Java 17 | NeoForge fork: `net.minecraftforge` → `net.neoforged` |
| 1.20.3 – 1.20.6 | Java 17 / 21* | `RegistryFriendlyByteBuf` (1.20.5), Java 21 required from 1.20.5 |
| 1.21 – 1.21.1 | Java 21 | `DeltaTracker` in HUD callbacks |
| 1.21.2 – 1.21.9 | Java 21 | `PlayerSkin` moved (1.21.9), `KeyEvent` added (1.21.9) |
| 1.21.10 – 1.21.11 | Java 21 | `ResourceLocation` → `Identifier` (Fabric), `KeyMapping.Category` |

*Java 21 required from 1.20.5 onwards.

### 26.x Format (Calendar versioning, from 2026)

| Version | Java Required | Notable Changes |
|---------|--------------|-----------------|
| 26.1 | Java 25 | Code fully unobfuscated, Loom plugin renamed, Java 25 required |
| 26.1.1 | Java 25 | Hotfix only — no API changes |
| 26.1.2 | Java 25 | Hotfix only — no API changes |

:::info Why did the version format change?
Mojang announced a calendar-based versioning system in December 2025. The new format is `YY.drop.hotfix`:
- `YY` = last two digits of the year (26 = 2026)
- `drop` = content drop number within the year
- `hotfix` = hotfix number (omitted if 0)

See the [FAQ](https://github.com/reqsery/mc-mod-porter/blob/main/docs/FAQ.md) in the repo for more details.
:::

---

## Java Version Requirements

| Minecraft Versions | Java Required |
|--------------------|--------------|
| 1.16 – 1.17.x | Java 16 |
| 1.18 – 1.20.4 | Java 17 |
| 1.20.5 – 1.21.11 | Java 21 |
| 26.1+ | Java 25 (LTS) |

:::warning 26.x requires recompilation
26.1 removed code obfuscation entirely. All mods from 1.21.11 and earlier are incompatible with 26.x binary format — there is **no binary compatibility**. Even a mod with zero API usage must be fully recompiled against 26.1.
:::

---

## Loader Support

### Fabric

The porter supports Fabric Loader + Fabric API across all supported Minecraft versions. Loader version tables are in `knowledge-base/loaders/fabric/versions.md`.

- **Fabric Loader** is largely version-agnostic (e.g. `0.18.6` works across many MC versions)
- **Fabric API** is tied to the Minecraft version (e.g. `0.116.9+1.21.1`)
- From 26.1+, Yarn mappings are no longer required — official names are available directly

### NeoForge

NeoForge was forked from Forge at Minecraft 1.20.2. If you're porting **from** 1.20.1 or earlier, package renames apply:

```
net.minecraftforge  →  net.neoforged
```

NeoForge version tables are in `knowledge-base/loaders/neoforge/versions.md`.

---

## Version Hop Knowledge Base

The knowledge base contains one file per adjacent version hop. Each file documents:
- Breaking API changes with before/after code
- Method renames and class moves
- Java version requirements
- Verified sources for every change

Files are located at `knowledge-base/minecraft/`:

```
1.16_to_1.17.md
1.17.1_to_1.18.md
1.18_to_1.18.1.md
...
1.21.10_to_1.21.11.md
1.21.11_to_26.1.md
26.1_to_26.1.1.md
26.1.1_to_26.1.2.md
```

---

## Checking What Versions Are Currently Supported

Always check the live list in the CLI:

```bash
java -jar auto-porter/build/libs/auto-porter-1.0.0.jar --list-versions
```

Or browse the knowledge base directly on [GitHub](https://github.com/reqsery/mc-mod-porter/tree/main/knowledge-base/minecraft).

---

## Requesting a New Version

If a Minecraft version you need isn't supported yet:

1. Check the [GitHub Issues](https://github.com/reqsery/mc-mod-porter/issues) to see if it's already being tracked
2. Open a new issue with the version pair you need
3. Or contribute it yourself — see [Contributing](/mc-mod-porter/contributing)
