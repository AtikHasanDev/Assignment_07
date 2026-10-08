# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**
BazarDor is a Bangla-first market price tracker for Bangladesh. It shows today's prices of everyday essentials — rice, lentils, oil, vegetables, fish, meat, eggs/dairy and spices — with day-to-day changes and a market-by-market comparison across 12 bazars in 6 divisions.

🔗 **Live:** _add your Vercel link here_  
📦 **Repository:** https://github.com/AtikHasanDev/Assignment_07

---

## ✨ Key Features

1. **Live price ticker** — an infinite scrolling strip under the navbar showing every product's price and ▲/▼ change (pauses on hover, respects reduced-motion).
2. **Today's movers** — "আজ দাম বেড়েছে ▲" and "আজ দাম কমেছে ▼" sections highlight the top 6 risers and fallers.
3. **Category browsing with smart sorting** — 8 categories with a sort dropdown (ডিফল্ট / দাম: কম থেকে বেশি / দাম: বেশি থেকে কম) that sorts by numeric value, correctly handling Bengali numerals (১,৮৫০ → 1850).
4. **Detailed product pages (login required)** — min / max / average price, the cheapest and most expensive market, yesterday / last-week / last-month comparison, and a full market-wise price table.
5. **Authentication with BetterAuth** — email/password sign up & sign in plus Google and GitHub login, protected routes with redirect-back, and toast feedback for every action.
6. **Profile management** — profile page with avatar and account info, and a separate route to update your name.
7. **Fully Bangla UI** — Hind Siliguri font, Bengali digits everywhere (prices, percentages, dates), and a Bangla date in the navbar.
8. **Responsive & polished** — mobile, tablet and desktop layouts, skeleton loaders while data loads, custom 404 page and empty states.

## 🛠️ Technologies Used

| Purpose | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Cache Components, Turbopack) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS v4 + [DaisyUI 5](https://daisyui.com) (custom `bazardor` theme) |
| Authentication | [BetterAuth](https://better-auth.com) — email/password, Google, GitHub |
| Database | MongoDB (via `@better-auth/mongo-adapter`) |
| Notifications | react-hot-toast |
| Font | Hind Siliguri (Google Fonts via `next/font`) |
| Data | Bazardor REST API (`/products`, `/categories`) |
| Deployment | Vercel |

## 📄 Pages

| Route | Description | Auth |
|---|---|---|
| `/` | Hero, today's risers & fallers, all products grid | Public |
| `/category/[slug]` | Category products with sorting, skeleton & empty state | Public |
| `/product/[slug]` | Price summary + market-wise price table | 🔒 Login |
| `/signin`, `/signup` | Email/password + Google/GitHub login | Public |
| `/profile` | Account info, sign out | 🔒 Login |
| `/profile/update` | Update your name | 🔒 Login |
| any other URL | Custom 404 with "হোম পেজে ফিরে যান" | — |

## 🚀 Run Locally

```bash
git clone https://github.com/AtikHasanDev/Assignment_07.git
cd Assignment_07
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

Open http://localhost:3000.

### Environment variables

See [`.env.example`](./.env.example):

| Variable | What it is |
|---|---|
| `BETTER_AUTH_SECRET` | Random secret (`npx @better-auth/cli secret`) |
| `BETTER_AUTH_URL` | Site URL — `http://localhost:3000` locally, your Vercel URL in production |
| `BETTER_AUTH_MONGODB_URL` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth app |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth app |

OAuth callback URLs: `<BETTER_AUTH_URL>/api/auth/callback/google` and `<BETTER_AUTH_URL>/api/auth/callback/github`.

## 📁 Project Structure

```
src/
├── app/                 # routes (home, category, product, signin, signup, profile, api/auth)
├── components/          # navbar, ticker, home sections, product card, auth forms, profile
├── lib/                 # api.ts (data), auth.ts / auth-client.ts (BetterAuth), format.ts (Bangla formatting)
└── proxy.ts             # protects /product/* and /profile/*
```

---

_সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।_
