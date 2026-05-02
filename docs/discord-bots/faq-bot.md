---
id: faq-bot
title: FAQ Bot
sidebar_label: FAQ Bot
---

# FAQ Bot

The FAQ Bot automatically answers common questions in the Revro Discord server by monitoring ticket channels and forum posts and matching questions against a curated knowledge base.

---

## How It Works

1. A user posts a message in a **ticket channel** or **forum post**
2. The FAQ bot reads the message
3. It checks the message against 38+ pre-written FAQs using Gemini AI
4. If a match is found (above a confidence threshold), the bot responds automatically
5. If no match is found, the message is left for a human moderator

The FAQ bot **only monitors ticket channels and forum posts** — it does not read general chat.

---

## Knowledge Base

The bot's knowledge base covers questions across all Revro projects:

| Category | Topics |
|----------|--------|
| **Revro** | Getting started, credits, features, pricing, plugin, API |
| **MC Mod Porter** | Installation, usage, supported versions, errors |
| **Discord Bots** | How they work, commands, setup |
| **Community** | Server rules, roles, support channels, contact info |

The knowledge base currently contains **38 FAQs**. New entries are added as common questions emerge.

---

## Slash Commands

The FAQ bot provides slash commands for admins to manage the knowledge base:

### Admin Commands

| Command | Description |
|---------|-------------|
| `/faq list` | Show all FAQs in the knowledge base |
| `/faq add <question> <answer>` | Add a new FAQ entry |
| `/faq remove <id>` | Remove a FAQ entry by ID |
| `/faq edit <id> <answer>` | Update an existing FAQ answer |
| `/faq test <question>` | Test how the bot would respond to a question |

:::note
Admin commands require the **Admin** or **Moderator** role.
:::

---

## What the FAQ Bot Answers

Examples of questions the bot can handle automatically:

**Revro:**
- "How do I get my API key?"
- "Why are my credits not resetting?"
- "What's the difference between Pro and Studio?"
- "How does the Roblox plugin work?"
- "I got a 402 error — what does that mean?"

**MC Mod Porter:**
- "What Java version do I need?"
- "How do I port a mod from 1.20.4 to 1.20.5?"
- "Why can't the porter find the NeoForge artifact?"

**Community:**
- "How do I get the Beta Tester role?"
- "Where can I report a bug?"
- "What's the support email?"

---

## Limitations

- The bot does **not** monitor general chat — only tickets and forums
- It only responds when confidence in the match is high enough to avoid wrong answers
- Account-specific questions (e.g., "where are my credits?") require a human — the bot will note this and defer to staff
- The bot cannot take any actions — it can only send text responses

---

## Feedback

If the FAQ bot gave an incorrect answer or failed to answer something it should know:
1. Reply in the same channel noting the issue
2. A moderator will correct the response and update the FAQ if needed

To suggest a new FAQ entry, post it in the [Discord server](https://discord.gg/vV2USr9phF) support channel.
