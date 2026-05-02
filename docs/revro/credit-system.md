---
id: credit-system
title: Credit System
sidebar_label: Credit System
---

# Credit System

Credits are the currency used to generate content on Revro. Every AI generation — scripts, UI elements, Discord setups, and images — consumes a certain number of credits based on complexity.

---

## How Credits Work

- Credits are allocated at the start of each billing cycle
- They reset monthly (they do **not** roll over)
- You can view your remaining credits on the Dashboard
- If you run out, you can purchase a [credit top-up pack](/revro/pricing#credit-top-ups) or upgrade your plan

---

## Credit Costs by Generation Type

### Roblox Scripts

| Complexity | Description | Cost |
|------------|-------------|------|
| Simple | Single mechanic, under ~30 lines | 2–5 credits |
| Medium | Multi-part system, under ~100 lines | 5–10 credits |
| Complex | Full system with multiple scripts | 10–15 credits |
| Full system | Complete game mechanic with server/client split | 15–25 credits |

**Examples:**
- "Create a sprint toggle" → ~2 credits
- "Create a weapon damage system" → ~5–8 credits
- "Create a full inventory system with DataStore" → ~15–25 credits

### UI Elements

| Complexity | Description | Cost |
|------------|-------------|------|
| Simple | Single frame or widget | 5 credits |
| Medium | Multi-element UI with interaction | 10 credits |
| Advanced | Full screen with animations | 15–25 credits |

### Discord Server Setup

| Task | Cost |
|------|------|
| Add channels or roles | 1 credit each |
| Autorole configuration | 1 credit |
| Welcome / goodbye messages | 2 credits |
| Server planning / blueprint | 3–5 credits |
| Full server build | 5–10 credits |

### Images *(Pro/Studio only)*

| Type | Cost |
|------|------|
| Any AI-generated image | 2 credits |

---

## Checking Your Credit Balance

**From the Dashboard:**
1. Sign in at [revro.dev](https://revro.dev)
2. Your credit balance is shown in the top bar and on the Billing page
3. The Billing page shows credits used, credits remaining, and your next reset date

**Via the API:**

```bash
curl -H "x-api-key: YOUR_API_KEY" https://revro.dev/api/user/me
```

Response includes:
```json
{
  "user": {
    "credits_total": 500,
    "credits_used": 120,
    "billing_cycle_start": "2026-04-01T00:00:00Z"
  }
}
```

---

## Credit Reset Policy

- Credits reset on the **same day each month** — the anniversary of your subscription start
- Free plan credits also reset monthly, even without a paid subscription
- Top-up credits expire at the end of the current billing cycle (they are not carried forward)

---

## What Happens When You Run Out

When your credit balance hits zero:
1. Further generation requests return a **402 Insufficient Credits** error
2. You can purchase a top-up pack immediately — credits are added instantly after checkout
3. Or wait until your next billing cycle reset

You will also receive an email notification when your credits drop to a low level.

---

## Tips for Getting the Most from Your Credits

- **Be specific in your prompts** — detailed prompts usually produce correct output on the first attempt, saving you from re-generating
- **Use the Free plan to test** before upgrading for larger projects
- **Break large systems into parts** — generate each component separately for better control
- **Check the conversation history** (Starter+) — you can copy previous outputs without using extra credits

:::tip
The [Starter plan](/revro/pricing) gives 6× more credits than Free for $10/month — a significant upgrade for regular creators.
:::
