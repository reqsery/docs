---
id: roblox-plugin
title: Roblox Studio Plugin
sidebar_label: Roblox Plugin
---

# Roblox Studio Plugin

The Revro Roblox Studio plugin lets you generate scripts and UI elements without leaving Roblox Studio. Type a prompt in the plugin panel and the generated code is inserted directly into your project.

---

## Installation

### Step 1 — Download the Plugin

1. Sign in to your Revro account at [revro.dev](https://revro.dev)
2. Go to **Dashboard → Downloads**
3. Click **Download Roblox Plugin**
4. Save the `.rbxm` file to your computer

### Step 2 — Install in Roblox Studio

1. Open Roblox Studio
2. In the top menu, click **Plugins**
3. Click **Plugins Folder** to open the plugins directory
4. Copy the `.rbxm` file you downloaded into that folder
5. Restart Roblox Studio

The **Revro** panel will appear in the Plugins toolbar.

---

## Setup

### Connect Your API Key

The plugin authenticates using your Revro API key — no separate login needed.

1. Click the **Revro** button in the Plugins toolbar to open the panel
2. In the **API Key** field, paste your API key
   - Your key was emailed to you on signup
   - You can also find it in Dashboard → Settings
3. Click **Connect**

A green status indicator confirms the connection is active.

:::warning
Your API key is stored locally in Studio's plugin settings. Never share your `.rbxm` file with the API key already entered.
:::

---

## Usage

### Generate a Script

1. Open the Revro panel (Plugins → Revro)
2. Make sure the connection status shows **Connected**
3. Type your prompt in the text box, for example:
   ```
   Create a door that opens when a player walks near it
   ```
4. Click **Generate** or press Enter
5. The generated script appears in the panel preview
6. Click **Insert** to add it to the selected location in the Explorer, or **Copy** to paste manually

### Generate UI

1. Select the type: **Script** or **UI**
2. For UI, describe the interface you want:
   ```
   Create a simple health bar that shows in the top-left corner
   ```
3. Click **Generate**
4. A `ScreenGui` with the layout and scripts is inserted into `StarterGui`

---

## How It Works

The plugin communicates with the Revro plugin server (a Node.js service deployed on Render). Here's the flow:

1. You submit a prompt in Studio
2. The plugin sends the request to the plugin server via HTTP
3. The plugin server forwards it to the Revro backend (Next.js on Vercel)
4. The backend calls the Claude AI model and returns the generated code
5. The plugin inserts the result into Studio

The plugin polls the server every ~3 seconds for responses, so there's a brief delay (typically 5–15 seconds) between submitting and receiving the result.

---

## Troubleshooting

### "API key invalid" or "Unauthorized"

- Double-check you copied the full API key with no extra spaces
- Verify your account is active at [revro.dev](https://revro.dev)
- Try regenerating your API key in Dashboard → Settings

### "Plugin server unavailable" (503 error)

- The plugin server may be starting up — wait 30 seconds and try again
- Check the [Discord server](https://discord.gg/vV2USr9phF) for any service announcements

### Plugin panel doesn't appear

- Ensure the `.rbxm` file is in the correct plugins folder
- Restart Roblox Studio after installing
- Make sure you're using a version of Roblox Studio from 2024 or later

### Generated code doesn't run

- Some generated scripts require `HttpService` to be enabled: **Game Settings → Security → Allow HTTP Requests**
- Check the Output window for error messages
- Try a simpler prompt to isolate the issue

### Credits aren't deducting

- If the generation failed silently, no credits are charged
- Check Dashboard → History to confirm whether the generation was recorded

---

## Requirements

- Roblox Studio (any recent version)
- A Revro account with a valid API key
- HTTP requests enabled in Game Settings (for some features)
- Active internet connection

:::tip
See the [API Reference](/revro/api-reference) if you want to build a custom integration instead of using the plugin.
:::
