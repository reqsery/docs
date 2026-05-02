---
id: api-reference
title: API Reference
sidebar_label: API Reference
---

# Revro API Reference

The Revro API lets you integrate AI generation capabilities into your own tools, bots, and workflows.

**Base URL:** `https://revro.dev`

---

## Authentication

Revro supports two authentication methods:

### API Key (Recommended for external integrations)

Include your API key in the `x-api-key` header:

```
x-api-key: your_api_key_here
```

### JWT Token (Web dashboard / session-based)

Include the JWT in the `Authorization` header:

```
Authorization: Bearer your_jwt_token
```

Your API key is available from the Revro dashboard. JWT tokens are returned from the login endpoint.

---

## Rate Limits

Rate limits apply per user per minute on AI generation endpoints:

| Plan | Limit |
|------|-------|
| Free | 10 requests/minute |
| Starter | 30 requests/minute |
| Pro | 60 requests/minute |
| Studio | 120 requests/minute |

Authentication endpoints are limited to **5 requests/minute per IP**.

When rate limited, the API returns `429 Too Many Requests`:
```json
{ "error": "Rate limit exceeded. Try again in 30 seconds." }
```

Rate limit headers are included on every response:
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1234567890
```

---

## Endpoints

### Authentication

#### `POST /api/auth/signup`

Create a new user account.

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "displayName": "John Doe"
}
```

**Response `201`:**
```json
{
  "message": "Account created successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "displayName": "John Doe"
  },
  "apiKey": "k8x2P9mT4vL7nQ3wR6yB5cE1aF8dH0j"
}
```

**Errors:** `400` email/password missing · `400` password too short · `400` user already exists

**Notes:** Automatically generates an API key and sends a welcome email. New users start on the Free plan with 25 credits.

---

#### `POST /api/auth/login`

Log in to an existing account.

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response `200`:**
```json
{
  "message": "Login successful",
  "user": { "id": "uuid", "email": "user@example.com" },
  "session": {
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "expires_at": 1234567890
  }
}
```

**Errors:** `401` invalid credentials

---

### User

#### `GET /api/user/me`

Get the current user's profile and credit balance.

**Auth:** Required

**Response `200`:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "display_name": "John Doe",
    "plan": "pro",
    "credits_total": 500,
    "credits_used": 120,
    "images_generated": 5,
    "billing_cycle_start": "2026-04-01T00:00:00Z",
    "created_at": "2026-03-01T00:00:00Z"
  }
}
```

**Errors:** `401` unauthorized · `404` user not found

---

#### `GET /api/user/usage`

Get detailed usage statistics.

**Auth:** Required

**Query parameters:**

| Parameter | Values | Default |
|-----------|--------|---------|
| `period` | `month` \| `week` \| `all` | `month` |

**Response `200`:**
```json
{
  "usage": {
    "credits_used": 120,
    "credits_total": 500,
    "credits_remaining": 380,
    "percentage_used": 24,
    "scripts_generated": 80,
    "ui_elements_created": 15,
    "images_generated": 5,
    "discord_setups": 20,
    "period": "month",
    "billing_cycle_start": "2026-04-01T00:00:00Z",
    "billing_cycle_end": "2026-05-01T00:00:00Z"
  }
}
```

---

### AI Generation

#### `POST /api/chat/roblox`

Generate a Roblox script or UI element.

**Auth:** Required

**Request body:**

| Field | Type | Values | Required |
|-------|------|--------|----------|
| `prompt` | string | Your description | Yes |
| `type` | string | `"script"` or `"ui"` | Yes |

```json
{
  "prompt": "Create a health regeneration script that restores 5 HP every 3 seconds",
  "type": "script"
}
```

**Response `200`:**
```json
{
  "response": {
    "code": "-- Health Regeneration Script\nlocal Players = game:GetService('Players')\n...",
    "explanation": "This script handles health regeneration...",
    "credits_used": 5,
    "credits_remaining": 375
  },
  "conversation_id": "uuid",
  "message_id": "uuid"
}
```

**Errors:** `400` prompt required · `400` invalid type · `401` unauthorized · `402` insufficient credits · `500` AI generation failed

**Credit costs:** Simple 2–5 · Medium 5–10 · Complex 10–25

---

#### `POST /api/chat/discord`

Generate a Discord server configuration.

**Auth:** Required

**Request body:**

| Field | Type | Values | Required |
|-------|------|--------|----------|
| `prompt` | string | Your description | Yes |
| `type` | string | `"setup"` \| `"planning"` \| `"blueprint"` | Yes |

```json
{
  "prompt": "Create a gaming community server with roles and announcement channels",
  "type": "setup"
}
```

**Response `200`:**
```json
{
  "response": {
    "config": {
      "channels": [
        { "name": "general", "type": "text" },
        { "name": "announcements", "type": "announcement" }
      ],
      "roles": [
        { "name": "Member", "permissions": [] },
        { "name": "Moderator", "permissions": ["MANAGE_MESSAGES"] }
      ],
      "welcome_message": "Welcome to the server!"
    },
    "explanation": "This setup creates...",
    "credits_used": 5,
    "credits_remaining": 370
  }
}
```

---

#### `GET /api/chat/conversations`

Retrieve your conversation history (Starter+ plans).

**Auth:** Required

**Query parameters:**

| Parameter | Default | Max |
|-----------|---------|-----|
| `limit` | 20 | 100 |
| `offset` | 0 | — |

---

### Plugin

#### `POST /api/plugin/task`

Submit a generation task from the Roblox Studio plugin.

**Auth:** API key required

**Request body:**
```json
{
  "type": "script",
  "prompt": "Create a door that opens when touched",
  "pluginVersion": "1.0.0"
}
```

**Response `200`:**
```json
{
  "taskId": "uuid",
  "status": "queued"
}
```

The plugin polls for the result every 3 seconds until the task completes.

**Errors:** `400` invalid task type · `401` unauthorized · `503` plugin server unavailable

---

## Error Reference

All errors follow this format:

```json
{ "error": "Descriptive error message" }
```

| Code | Meaning |
|------|---------|
| `200` | Success |
| `201` | Created |
| `400` | Bad request — check your request body |
| `401` | Unauthorized — missing or invalid API key / token |
| `402` | Insufficient credits |
| `404` | Resource not found |
| `429` | Rate limit exceeded |
| `500` | Internal server error |
| `503` | Service unavailable (plugin server) |

---

## Code Examples

### cURL

```bash
# Get your profile
curl -H "x-api-key: YOUR_KEY" https://revro.dev/api/user/me

# Generate a script
curl -X POST https://revro.dev/api/chat/roblox \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_KEY" \
  -d '{"prompt": "Create a sprint toggle script", "type": "script"}'

# Get usage stats
curl -H "x-api-key: YOUR_KEY" "https://revro.dev/api/user/usage?period=month"
```

### JavaScript / TypeScript

```typescript
const BASE_URL = "https://revro.dev";
const API_KEY = "your_api_key";

// Generate a Roblox script
async function generateScript(prompt: string) {
  const response = await fetch(`${BASE_URL}/api/chat/roblox`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({ prompt, type: "script" }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}

// Check credits
async function getCredits() {
  const response = await fetch(`${BASE_URL}/api/user/me`, {
    headers: { "x-api-key": API_KEY },
  });
  const { user } = await response.json();
  return user.credits_total - user.credits_used;
}
```

### Python

```python
import requests

BASE_URL = "https://revro.dev"
API_KEY = "your_api_key"
HEADERS = {"x-api-key": API_KEY}

def generate_script(prompt: str) -> dict:
    response = requests.post(
        f"{BASE_URL}/api/chat/roblox",
        headers=HEADERS,
        json={"prompt": prompt, "type": "script"},
    )
    response.raise_for_status()
    return response.json()

def get_credits() -> int:
    response = requests.get(f"{BASE_URL}/api/user/me", headers=HEADERS)
    user = response.json()["user"]
    return user["credits_total"] - user["credits_used"]
```

### Lua (Roblox)

```lua
local HttpService = game:GetService("HttpService")

local API_KEY = "your_api_key"
local BASE_URL = "https://revro.dev"

local function generateScript(prompt)
  local response = HttpService:RequestAsync({
    Url = BASE_URL .. "/api/chat/roblox",
    Method = "POST",
    Headers = {
      ["Content-Type"] = "application/json",
      ["x-api-key"] = API_KEY,
    },
    Body = HttpService:JSONEncode({ prompt = prompt, type = "script" }),
  })

  if response.Success then
    return HttpService:JSONDecode(response.Body)
  else
    error("API error: " .. response.StatusCode)
  end
end
```

---

:::tip Support
API questions? Email [support@revro.dev](mailto:support@revro.dev) or ask in the [Discord server](https://discord.gg/vV2USr9phF).
:::
