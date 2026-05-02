---
id: troubleshooting
title: MC Mod Porter Troubleshooting
sidebar_label: Troubleshooting
---

# MC Mod Porter Troubleshooting

Solutions to common build errors and setup issues.

---

## Setup Issues

### `UnsupportedClassVersionError` when running auto-porter

**Cause:** The porter JAR was compiled with Java 21 but you're running it with an older JVM.

**Fix:** Ensure `java -version` shows Java 21 or higher. If you have multiple JDKs installed, set `JAVA_HOME` explicitly:

```bash
# macOS / Linux
export JAVA_HOME="/path/to/jdk-21"
java -jar auto-porter.jar ...

# Windows
set JAVA_HOME=C:\Program Files\Java\jdk-21
java -jar auto-porter.jar ...
```

### `./gradlew: Permission denied`

**Fix (macOS / Linux):**

```bash
chmod +x auto-porter/gradlew
```

### Gradle can't find the NeoForge artifact

**Cause:** NeoForge versions before 21.4.121 use a `-beta` suffix. From 21.4.121+, the suffix is dropped.

**Fix:** Check the exact version at:
```
https://maven.neoforged.net/releases/net/neoforged/neoforge/
```

---

## Build Errors After Porting

### `error: cannot find symbol — KeyEvent`

**Cause:** `net.minecraft.client.input.KeyEvent` was added in 1.21.9 (Fabric) / 1.21.10 (NeoForge). It does not exist in 1.21.4 or earlier.

**Fix:** Replace `keyPressed(KeyEvent event)` with the old signature:

```java
// Before (1.21.10+)
@Override
public boolean keyPressed(KeyEvent event) {
  int key = event.key();
  ...
}

// After (1.21.4 and earlier)
@Override
public boolean keyPressed(int keyCode, int scanCode, int modifiers) {
  // use keyCode directly
  ...
}
```

---

### `error: cannot find symbol — MouseButtonEvent`

**Cause:** `MouseButtonEvent` was added in 1.21.10. Not present in 1.21.4 or earlier.

**Fix:** Replace `mouseClicked(MouseButtonEvent event, boolean dragging)` with:

```java
@Override
public boolean mouseClicked(double mouseX, double mouseY, int button) {
  // remove event.x() / event.y() calls, use mouseX / mouseY directly
}
```

---

### `error: cannot find symbol — KeyMapping.Category`

**Cause:** `KeyMapping.Category` inner class added in 1.21.10. In 1.21.4 and earlier, `KeyMapping` takes a plain `String` category.

**Fix:**

```java
// Before (1.21.10+)
KeyMapping.Category CATEGORY = KeyMapping.Category.register("key.categories.mymod", 10);

// After (1.21.4 and earlier)
String CATEGORY = "key.categories.misc";
```

---

### `error: no suitable method found for blit(...)`

**Cause:** `GuiGraphics.blit` signature changed in 1.21.10.

**Fix:**

```java
// 1.21.4 and earlier — RenderType first, pixel UV
graphics.blit(RenderType::guiTextured, texture, x, y, uPixel, vPixel, width, height, texWidth, texHeight);

// 1.21.10+ — no RenderType, fractional UV
graphics.blit(texture, x, y, width, height, u0, v0, u1, v1);
```

---

### `error: cannot find symbol — PlayerSkin` (wrong package)

**Cause:** `PlayerSkin` moved between 1.21.4 and 1.21.10.

| Version | Package |
|---------|---------|
| 1.21.4 and earlier | `net.minecraft.client.resources.PlayerSkin` |
| 1.21.10+ | `net.minecraft.world.entity.player.PlayerSkin` |

Also: `.texture()` in 1.21.4 became `.body().texturePath()` in 1.21.10+.

---

### `error: cannot find symbol — FMLEnvironment.getDist()`

**Cause:** NeoForge changed `getDist()` method to `dist` field in 21.10.x.

**Fix:**

```java
// Before
FMLEnvironment.getDist()

// After
FMLEnvironment.dist
```

---

### `error: package net.minecraftforge does not exist`

**Cause:** NeoForge forked from Forge at 1.20.2. The package was renamed.

**Fix:** Find and replace everywhere in your mod (imports, annotations, strings):

```
net.minecraftforge  →  net.neoforged
```

---

### `error: PacketByteBuf cannot be resolved`

**Cause:** `PacketByteBuf` was removed in 1.20.5 and replaced by `RegistryFriendlyByteBuf`.

**Fix:** Replace the class name and import:

```java
// Before
import net.minecraft.network.PacketByteBuf;

// After
import net.minecraft.network.RegistryFriendlyByteBuf;
```

---

### `error: ResourceLocation cannot be resolved` (Fabric, 1.21.11)

**Cause:** In 1.21.11, Fabric renamed `ResourceLocation` to `Identifier`.

**Fix:** Replace all occurrences:

```java
// Before
ResourceLocation id = new ResourceLocation("modid", "item");

// After
Identifier id = Identifier.of("modid", "item");
```

---

## Mapping Issues

### Loom plugin not found (26.x)

**Cause:** The Fabric Loom plugin was renamed in 26.1.

**Fix:** Update `build.gradle`:

```groovy
// Before (1.21.11 and earlier)
id 'fabric-loom' version '1.x.x'

// After (26.1+)
id 'dev.architectury.loom' version '1.15.+'
// or check loaders/fabric/versions.md for the exact version
```

**Note:** From 26.1+, Yarn mappings are no longer required — remove the `mappings` line entirely.

---

## General Advice

1. **Always dry-run first** — `--dry-run` shows exactly what will change
2. **Port one version at a time** for large jumps (e.g., 1.18 → 1.19 → 1.20 → 1.21)
3. **Check the knowledge base** — `knowledge-base/minecraft/X.XX_to_Y.YY.md` has documented fixes for most errors
4. **Use AI for remaining errors** — paste the error + the knowledge base file into Claude Code, Cursor, or similar

---

## Still Stuck?

- Check [docs/FAQ.md](https://github.com/reqsery/mc-mod-porter/blob/main/docs/FAQ.md) in the repository
- Open an [issue on GitHub](https://github.com/reqsery/mc-mod-porter/issues)
- Ask in the [Discord server](https://discord.gg/vV2USr9phF)
