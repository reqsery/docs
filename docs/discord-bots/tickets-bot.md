---
id: tickets-bot
title: Tickets Bot
sidebar_label: Tickets Bot
---

# Tickets Bot

The Tickets Bot manages support requests in the Revro Discord server by creating private channels for each user, keeping conversations organized, and saving transcripts when tickets are resolved.

---

## How It Works

1. A user clicks the **Open Ticket** button in the support channel
2. The bot creates a private text channel visible only to that user and the support team
3. The user describes their issue; moderators/helpers respond
4. When resolved, a moderator closes the ticket
5. The bot saves a full transcript and deletes the private channel

This keeps the main server channels clean while giving each user a dedicated space for their issue.

---

## Opening a Ticket

**For users:**
1. Go to the **#support** channel in the [Revro Discord server](https://discord.gg/vV2USr9phF)
2. Click the **Open Ticket** button
3. A private channel is created for you — it will appear in the channel list
4. Describe your issue and wait for a response from the team

---

## Managing Tickets (Staff)

Staff members with the Moderator, Trial Mod, or Helper role can see and respond to all open ticket channels.

### Closing a Ticket

Once an issue is resolved:
1. Use the **Close Ticket** button inside the ticket channel
2. The bot saves a transcript of the conversation
3. The private channel is deleted

### Viewing Transcripts

Ticket transcripts are saved automatically and accessible to admins and moderators. Ask an Admin in the server if you need to retrieve a specific transcript.

---

## Auto-Close (Queue Full)

When the ticket queue reaches capacity, the bot automatically closes the oldest inactive tickets to make room for new ones. Users whose tickets are auto-closed receive a notification message before the channel is removed.

If your ticket was auto-closed before your issue was resolved, simply open a new one.

---

## Priority Handling

Tickets are generally handled in the order they're opened. Response times vary by team availability. For urgent billing or account issues, you can also email [support@revro.dev](mailto:support@revro.dev) directly for faster escalation.

---

## Tips

- **Include your username and plan** when opening a ticket for account/billing issues
- **Paste error messages** rather than describing them — exact text helps diagnose faster
- **One issue per ticket** — open separate tickets for separate problems
- **Check the FAQ bot first** — it may answer your question instantly without waiting for staff

---

:::tip
The [FAQ Bot](/discord-bots/faq-bot) monitors ticket channels and may automatically respond with a solution before staff even replies.
:::
