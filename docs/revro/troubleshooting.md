---
id: troubleshooting
title: Revro Troubleshooting
sidebar_label: Troubleshooting
---

# Revro Troubleshooting

Solutions to the most common issues encountered when using Revro.

---

## Account & Login

### "User already exists" on signup
You already have an account with that email. Go to [revro.dev/login](https://revro.dev/login) to sign in, or use the password reset option.

### Forgot my password
Currently, password reset is handled via support. Email [support@revro.dev](mailto:support@revro.dev) with your account email and we'll help you reset it.

### I didn't receive my welcome email
- Check your spam/junk folder
- Allow up to 5 minutes for delivery
- Make sure you signed up with the correct email
- Contact [support@revro.dev](mailto:support@revro.dev) if still missing — we can resend it manually

### I lost my API key
Your API key is shown in the welcome email. If you no longer have it, contact [support@revro.dev](mailto:support@revro.dev) to retrieve or regenerate it.

---

## Credits & Billing

### My credits didn't reset
Credits reset on the same day of the month as your billing cycle start. If more than 24 hours have passed since your expected reset date, contact support.

### I was charged but my plan didn't upgrade
Payments are processed via Lemon Squeezy. There can be a short delay (usually under 5 minutes). If your plan still hasn't updated after 10 minutes, email [support@revro.dev](mailto:support@revro.dev) with your order confirmation.

### "402 Insufficient Credits" error
You've run out of credits for this billing cycle. Options:
1. **Purchase a top-up pack** — available on the [Billing page](https://revro.dev/dashboard/billing), credits are added instantly
2. **Upgrade your plan** — for more monthly credits
3. **Wait for the next cycle** — credits reset automatically

### Top-up credits disappeared
Top-up credits expire at the end of your billing cycle and do not roll over. If your cycle reset recently, your top-up credits have expired as expected.

### I want a refund
Refunds are handled case-by-case. Email [support@revro.dev](mailto:support@revro.dev) with your order number and reason.

---

## AI Generation

### The generated code has errors
AI-generated code occasionally has bugs, especially for very complex prompts. Try:

1. **Re-generate with a more specific prompt** — add details about the expected behavior
2. **Break it into smaller pieces** — generate each component separately
3. **Describe the error in a follow-up** — continue the conversation and paste the error message

### The AI ignored part of my prompt
This can happen with very long or multi-part prompts. Tips:
- Keep prompts focused on one thing at a time
- Use numbered requirements: "1. Do X. 2. Do Y."
- Starter+ users can continue the conversation for follow-up corrections

### Generation takes too long / times out
- The Free plan has lower priority — wait times may be longer during peak hours
- Try again in a few minutes
- Check the [Discord server](https://discord.gg/vV2USr9phF) for any service announcements

### "AI generation failed" (500 error)
The AI model encountered an internal error. This is rare. Try again — if it persists for more than 10 minutes, report it in the Discord server.

---

## API

### "401 Unauthorized"
- Check that you're sending the `x-api-key` header (not `Authorization`)
- Make sure there are no leading/trailing spaces in your key
- Verify your account is active at [revro.dev](https://revro.dev)

```bash
# Correct
curl -H "x-api-key: YOUR_KEY" https://revro.dev/api/user/me

# Wrong — missing header name
curl -H "YOUR_KEY" https://revro.dev/api/user/me
```

### "429 Too Many Requests"
You've exceeded your plan's rate limit. Wait the number of seconds indicated in the error response. For higher limits, upgrade your plan.

| Plan | Limit |
|------|-------|
| Free | 10 req/min |
| Starter | 30 req/min |
| Pro | 60 req/min |
| Studio | 120 req/min |

### "503 Service Unavailable" on plugin endpoint
The Roblox plugin server is temporarily unavailable. Wait 30 seconds and retry. The plugin server restarts automatically — it may take up to 60 seconds to come back online after a cold start.

---

## Roblox Plugin

### Plugin panel doesn't appear in Studio
1. Confirm the `.rbxm` file is in the correct plugins folder (Plugins → Plugins Folder)
2. Restart Roblox Studio after placing the file
3. Check that plugins are not disabled in Studio settings

### "Plugin server unavailable"
See [503 error](#503-service-unavailable-on-plugin-endpoint) above.

### Generated code inserts in the wrong location
Select the target `Script`, `LocalScript`, or folder in the Explorer **before** clicking Insert in the plugin panel.

### HTTP requests blocked error in Studio output
Go to **Game Settings → Security** and enable **Allow HTTP Requests**.

---

## When to Contact Support

**Self-resolvable (no need to contact us):**
- Out of credits → buy a top-up or wait for reset
- Rate limit hit → wait and retry
- Generated code has a bug → re-generate or continue the conversation
- Plugin panel missing → reinstall (instructions above)

**Contact support:**
- Payment processed but plan not updated after 10 minutes
- Lost API key
- Account locked or inaccessible
- Billing dispute or refund request
- Persistent 500 errors (more than 10 minutes)

---

## Contact Support

| Channel | Best for |
|---------|----------|
| [Discord server](https://discord.gg/vV2USr9phF) | Fast responses, community help |
| [support@revro.dev](mailto:support@revro.dev) | Billing, account, sensitive issues |
| [GitHub Issues](https://github.com/reqsery) | Bug reports (public repos only) |
