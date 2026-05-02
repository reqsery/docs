---
id: features
title: Revro Features
sidebar_label: Features
---

# Revro Features

Revro provides AI-powered tools for Roblox developers and Discord server owners. Here's a full breakdown of what the platform can do.

---

## Roblox Script Generation

Generate production-ready Lua scripts from plain English descriptions. Revro understands Roblox's API, services, and best practices.

**What you can generate:**
- Gameplay mechanics (combat, movement, inventory, quests)
- Admin and moderation systems
- GUI scripts (buttons, menus, HUDs)
- DataStore save/load systems
- Remote events and server-client communication
- Tween animations and visual effects
- NPC AI behavior

**Example prompt:**
```
Create a double-jump system that works on all platforms and plays a sound effect
```

**Credit cost:** 2–15 credits depending on complexity ([see Credit System](/revro/credit-system))

---

## UI Element Creation

Describe the UI you want and Revro generates the full LocalScript + ScreenGui layout, including frame positioning, colors, fonts, and animations.

**What you can create:**
- HUD displays (health bars, ammo counters, minimaps)
- Main menus and pause screens
- Inventory and shop interfaces
- Loading screens and cutscene frames
- Custom dialogs and notification popups

**Example prompt:**
```
Create a shop menu with a grid of items, each with an icon, name, and buy button
```

**Credit cost:** 5–25 credits depending on complexity

---

## Discord Server Builder

Design and automatically deploy a full Discord server configuration using AI. Describe the community you're building and the AI creates everything — channels, categories, roles, permissions, and welcome messages.

**What it can configure:**
- Text and voice channels, organized into categories
- Role hierarchy with permission sets
- Welcome and goodbye messages
- Autorole assignment for new members
- Channel topics and descriptions

This feature requires the [Revro Discord Bot](/discord-bots/server-builder) to be added to your server first.

**Example prompt:**
```
Create a Roblox development server with sections for showcase, help, and off-topic
```

**Credit cost:** 1–10 credits depending on scope

---

## Image Generation

*(Pro and Studio plans only)*

Generate game-ready images and assets using AI. Useful for UI icons, loading screens, thumbnails, and concept art.

**Monthly quota:**
- Pro plan: 50 images/month
- Studio plan: 150 images/month

**Credit cost:** 2 credits per image

---

## Roblox Studio Plugin

The official Revro plugin integrates directly into Roblox Studio, letting you generate scripts and UI without switching windows.

**Plugin features:**
- Send prompts and receive generated code directly in Studio
- One-click insertion of generated scripts into the Explorer
- API key authentication (no login required in Studio)

➡️ Full setup guide: [Roblox Plugin](/revro/roblox-plugin)

---

## Conversation History

All your generations are saved to your account history (Starter plan and above). You can:
- Browse past conversations by type (Roblox / Discord)
- Copy or re-use previous outputs
- Continue a conversation with follow-up prompts

Free plan users do not have saved history.

---

## AI Models by Plan

Different subscription tiers use different underlying AI models, which affects output quality and the complexity of tasks the AI can handle:

| Plan | AI Model | Description |
|------|----------|-------------|
| Free | Claude Sonnet 4.5 | Standard — great for simple to medium tasks |
| Starter | Claude Sonnet 4.6 | Advanced — handles complex multi-part scripts |
| Pro | Claude Opus 4.6 | Premium — best quality, reasoning, and detail |
| Studio | Claude Opus 4.6 | Premium — same as Pro, more credits and images |

---

## Upcoming Features

- Webhook notifications for low credits and subscription changes
- SDK libraries for JavaScript and Python
- More image generation styles

:::tip Feature requests?
Post them in the [Discord server](https://discord.gg/vV2USr9phF) — Beta Testers get early access to new features.
:::
