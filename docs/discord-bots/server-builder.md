---
id: server-builder
title: Server Builder Bot
sidebar_label: Server Builder
---

# Server Builder Bot

The Revro Server Builder bot connects your Discord server to the Revro AI platform and executes server configurations automatically. Instead of manually creating channels and roles, you describe what you want and the AI builds it.

---

## How It Works

1. You add the bot to your Discord server
2. You connect your server to Revro via the dashboard
3. You open the **Discord** tab in Revro Chat and describe the server you want
4. Revro AI generates a full server blueprint
5. You click **Apply** — the bot executes the setup in real time

The bot receives instructions from the Revro backend via a secure internal API. It never acts on its own — every action is triggered by you through the dashboard.

---

## What the Bot Can Do

The bot supports a full range of Discord server management actions:

### Channels
- Create text, voice, stage, announcement, forum, and media channels
- Organize channels into categories
- Set channel topics and descriptions
- Configure permission overwrites per channel

### Roles
- Create roles with custom names and colors
- Set role permissions
- Assign role hierarchy (position in the role list)

### Members
- Assign roles to members (autorole for new joiners)
- Send welcome messages to new members

### Server Settings
- Update server name, icon, and description
- Set verification level and content filter
- Configure default notification settings
- Set up welcome and system channels

### Messages
- Send announcements or welcome messages to specific channels

---

## Required Permissions

When you add the bot to your server, grant these permissions for full functionality:

| Permission | Needed For |
|-----------|------------|
| Manage Channels | Creating/editing channels |
| Manage Roles | Creating roles and assigning permissions |
| Manage Server | Updating server settings |
| Send Messages | Sending welcome/announcement messages |
| Manage Messages | (Optional) Message management |
| View Audit Log | (Optional) Monitoring actions |

The bot uses OAuth when added from the Revro dashboard, which walks you through the permission grant.

---

## Adding the Bot

1. Sign in to [revro.dev](https://revro.dev)
2. Open the **Discord** tab in Chat
3. Click **Connect Server**
4. Select your Discord server from the OAuth prompt
5. Review and approve the permissions
6. The bot joins your server and is ready

When the bot joins, it sends an introduction message to your system channel (or the first available text channel) with a link to the Revro dashboard.

---

## Scanning Your Server

Before generating a setup, Revro scans your server to understand its current structure. This scan reads:

- Existing channels (names, types, categories, positions)
- Existing roles (names, permissions, positions)
- Server settings (verification level, etc.)

The AI uses this context to generate changes that complement your existing setup rather than overwriting everything.

---

## Applying a Blueprint

After the AI generates a server configuration in chat:

1. Review the proposed channels, roles, and settings in the response
2. If it looks good, click **Apply to Server** (or equivalent button in the dashboard)
3. The Revro backend sends the blueprint to the bot
4. The bot executes each action sequentially
5. You receive a summary of what was created/updated

If something doesn't look right, you can refine the prompt and regenerate before applying.

---

## Troubleshooting

### "Bot is not in this server"

The bot needs to be in your server before you can apply blueprints. Re-run the **Connect Server** flow from the Revro dashboard.

### "Missing permissions" errors

The bot needs the permissions listed above. Go to **Server Settings → Roles → Revro Bot** and verify it has the required permissions.

### Bot went offline

The bot is hosted on a cloud service and may have a brief cold-start delay. Wait 30–60 seconds and try again. If the issue persists, report it in the [Discord server](https://discord.gg/vV2USr9phF).

### Setup only partially applied

If the bot stops mid-execution (network issue, permission error), some actions may have applied and others not. You can re-run the blueprint — the bot will skip channels/roles that already exist.

---

:::tip
For best results, describe your server's purpose and audience in the prompt. The more context you give, the better the AI can tailor the channel structure and role hierarchy.
:::
