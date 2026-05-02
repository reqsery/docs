---
id: contributing
title: Contributing
sidebar_label: Contributing
---

# Contributing to MC Mod Porter

MC Mod Porter is open source under the MIT license. Contributions to the knowledge base — version migration docs, method renames, and class moves — are the most valuable thing you can add.

**GitHub:** [github.com/reqsery/mc-mod-porter](https://github.com/reqsery/mc-mod-porter)

---

## Core Rule

> **No guessing. No hallucinations. Source required.**

Every entry in the knowledge base must link to an official, verifiable source. If you cannot provide one, do not add the entry.

---

## What to Contribute

The most needed contributions are:

- **New version entries** — when a new Minecraft version drops
- **Missing API changes** — a method rename or class move that wasn't documented
- **Bug fixes** — correcting an entry that was wrong or incomplete
- **New patterns** — method/class changes that appear in `patterns/`

The auto-porter source code itself (`auto-porter/`) is also open to contributions, but changes there must be consistent with the knowledge base.

---

## How to Add a New Version Entry

1. Copy `templates/version-template.md`
2. Save it as `knowledge-base/minecraft/X.XX_to_Y.YY.md`
3. Fill in only what you have verified — delete any template sections you can't fill
4. Add a source URL to every individual entry

### File Header Format

```markdown
## Version: X.XX → Y.YY

> **Java requirement:** Java XX
> **Source:** [URL to Mojang/Fabric/NeoForge release notes]
```

### Entry Format

```markdown
- old: `ClassName.methodName(params)`
- new: `NewClass.newMethod(params)`
- source: https://github.com/...
```

### Class Move Format

```markdown
- old: `net.minecraft.old.package.ClassName`
- new: `net.minecraft.new.package.ClassName`
- source: https://...
```

---

## Accepted Sources

| Source | Acceptable |
|--------|-----------|
| `https://minecraft.wiki/w/Java_Edition_X.XX` | ✓ |
| `https://fabricmc.net/...` | ✓ |
| `https://docs.fabricmc.net/...` | ✓ |
| `https://neoforged.net/news/...` | ✓ |
| GitHub commits/PRs from `minecraft/minecraft`, `FabricMC/fabric`, `neoforged/neoforge` | ✓ |
| Yarn mappings diffs | ✓ |
| "Verified via compile" with mod name | ✓ (see below) |
| Reddit posts | ✗ |
| Unofficial wikis | ✗ |
| "I think" / "probably" | ✗ |
| Other mods compiling successfully | ✗ |

### "Verified via compile" Entries

If you actually ported a mod and confirmed it compiles, you may use:

```
source: Verified via compile (MyModName, MC 1.20.4 → 1.20.5)
```

Include the mod name for traceability.

---

## What NOT to Add

- Loader version changes — keep those in `loaders/`
- Java language features — keep those in `java/`
- Mod-specific code that isn't a Minecraft/loader API change
- Hotfix releases with no API changes (just note "no API changes" in the file)

---

## Pull Request Process

1. **Fork** the repository on GitHub
2. **Create a branch**: `git checkout -b add-1.21.12-to-26.1`
3. **Add your changes** — one version hop per PR when possible
4. **Test your entry** by running the porter on a real mod, if possible
5. **Submit a PR** with a clear description of what was added/fixed and your sources

### PR Checklist

- [ ] Every entry has a source URL
- [ ] No speculative or unverified entries
- [ ] File named correctly (`X.XX_to_Y.YY.md`)
- [ ] Header includes Java requirement and source
- [ ] Loader-specific changes are in `loaders/`, not in the version file

---

## Updating Existing Entries

- If an entry is **wrong**: fix it and update the source
- If an entry applies to a **version range**: add a note like `(applies to 1.19.0 – 1.19.4)`
- Do **not** delete entries that were true for older versions — mark them with their valid range

---

## Opening Issues

If you find:
- A bug in the auto-porter
- A missing version entry
- An incorrect entry in the knowledge base

Open an issue at [github.com/reqsery/mc-mod-porter/issues](https://github.com/reqsery/mc-mod-porter/issues) with:
- The Minecraft version pair
- What's wrong or missing
- A source URL if available

:::tip Questions?
Ask in the [Discord server](https://discord.gg/vV2USr9phF) — the community can help verify entries before you submit a PR.
:::
