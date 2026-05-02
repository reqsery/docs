---
id: getting-started
title: Getting Started with Revro
sidebar_label: Getting Started
---

# Getting Started with Revro

Revro is an AI-powered platform for Roblox and Discord creators. This guide walks you through creating an account, getting your API key, and making your first generation.

---

## 1. Create an Account

1. Go to [revro.dev](https://revro.dev)
2. Click **Get Started for Free**
3. Enter your email address and a password (minimum 8 characters)
4. Click **Sign Up**

You'll receive a welcome email containing your **API key** — keep it safe. New accounts start on the **Free plan** with **25 credits per month**.

:::info
You can also sign in at any time via the [login page](https://revro.dev/login).
:::

---

## 2. Explore the Dashboard

After signing in, you'll land on the Dashboard. From here you can:

| Section | Description |
|---------|-------------|
| **Chat** | Generate scripts, UI elements, and Discord setups |
| **History** | Browse your previous generations |
| **Assets** | View and download saved outputs |
| **Downloads** | Get the Roblox Studio plugin |
| **Billing** | Manage your plan and credits |

---

## 3. Make Your First Generation

### Generate a Roblox Script

1. Open **Chat** from the sidebar
2. Select the **Roblox** tab
3. Type a description, for example: `Create a health regeneration script that restores 5 HP every 3 seconds`
4. Press **Enter** or click **Send**

The AI will return a complete, commented Lua script ready to paste into Roblox Studio.

### Generate a Discord Server Setup

1. Open **Chat** and select the **Discord** tab
2. Describe the server you want: `Set up a gaming community server with roles and announcement channels`
3. The AI generates a full server configuration including channels, roles, and permissions

---

## 4. Get Your API Key

Your API key was emailed to you on signup. You can also find it in the Dashboard settings.

Use this key to:
- Authenticate API requests (see [API Reference](/revro/api-reference))
- Connect the Roblox Studio plugin (see [Roblox Plugin](/revro/roblox-plugin))

```
x-api-key: your_api_key_here
```

:::warning Keep your key private
Do not share your API key publicly or commit it to source control. Anyone with your key can use your credits.
:::

---

## 5. Install the Roblox Plugin (Optional)

The Roblox Studio plugin lets you generate scripts and UI elements without leaving Studio.

➡️ Full setup guide: [Roblox Plugin](/revro/roblox-plugin)

---

## What's Next?

- [Features overview](/revro/features) — everything Revro can do
- [Credit system](/revro/credit-system) — how credits work and what each generation costs
- [Pricing](/revro/pricing) — compare plans
- [API Reference](/revro/api-reference) — build your own integrations

:::tip Need Help?
Join our [Discord server](https://discord.gg/vV2USr9phF) or email [support@revro.dev](mailto:support@revro.dev).
:::
