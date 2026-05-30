# SS HOME FOODS — Namma Veetu Samayal 🏡🍛

A professional, mobile-friendly **static website** for **SS Home Foods**, a home-style South Indian meal service in Anna Nagar West Extension, Chennai.

**Live tagline:** *A taste of our tradition — fresh home food.*

## ✨ Features

- **3 pages** — Home, Weekly Menu, Contact
- **Weekly menu** — Monday → Friday, with **Veg & Non-Veg** options for **Breakfast, Lunch & Dinner** (Indian thali / meals style)
- **Interactive menu** — day tabs + Veg/Non-Veg filter
- **Subscription pop-up** — auto-opens once, centre-screen, ₹9,999/month full-day plan (Breakfast + Lunch + Dinner)
- **Auto-sliding Google-style reviews** carousel (with prev/next + dots, pauses on hover)
- **Comparison table** vs other home-food services
- **Google Maps embed** of the kitchen location
- **Delivery info** — free up to 3 km
- **Fully responsive** with hamburger navigation for mobile
- Custom **SVG logo** recreated to match the brand (green house + plate)

## 📍 Address

8, 1st St, near MMM Hospital, Collector Nagar, J J Nagar, Anna Nagar West Extension, Chennai, Tamil Nadu 600037

## 📂 Structure

```
.
├── index.html        # Home
├── menu.html         # Weekly menu (Mon–Fri, Veg/Non-Veg, B/L/D)
├── contact.html      # Contact + Google Map + enquiry form
├── assets/
│   └── logo.svg
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 🚀 Run locally

It's a static site — just open `index.html` in any browser, or serve it:

```bash
# Python
python -m http.server 8080
# then open http://localhost:8080
```

## 🌐 Deploy (GitHub Pages)

1. Push to GitHub (already configured).
2. Repo **Settings → Pages → Source: `main` branch / root**.
3. Your site goes live at `https://<username>.github.io/SS-HOME-FOODS/`.

## 🔧 To customise

- **Phone/email:** replace `+91 00000 00000` and `hello@sshomefoods.in` across the HTML files.
- **Logo:** swap `assets/logo.svg` with your real logo (keep the same filename, or update the `<img src>` references).
- **Prices / dishes:** edit the meal cards in `menu.html`.
- **Reviews:** edit the `.review` blocks in `index.html`.

---
© SS Home Foods · Namma Veetu Samayal
