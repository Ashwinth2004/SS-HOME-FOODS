# SS HOME FOODS — Namma Veetu Samayal 🏡🍛

A professional, mobile-friendly **static website** for **SS Home Foods**, a home-style South Indian meal service in Anna Nagar West Extension, Chennai.

**Live tagline:** *A taste of our tradition — fresh home food.*

## ✨ Features

- **3 pages** — Home, Menu, Contact
- **Menu** — served Monday → Saturday, **Veg daily** and **Non-Veg on Wednesdays** (lunch & dinner only) for **Breakfast, Lunch & Dinner**; menu rotates daily
- **Interactive menu** — Breakfast / Lunch / Dinner tabs + Veg/Non-Veg filter
- **Subscription pop-up** — auto-opens once, centre-screen, ₹4,999/month full-day plan (Breakfast + Lunch + Dinner)
- **Auto-sliding Google-style reviews** carousel (with prev/next + dots, pauses on hover)
- **Comparison table** vs other home-food services
- **Google Maps embed** of the kitchen location
- **Delivery info** — available within 3 km (extra charges)
- **Fully responsive** with hamburger navigation for mobile
- Official **brand logo** (`assets/logo.jpeg`) shown on a 1:1 white rounded tile

## 📍 Address

No.8, 1st Street, Collector Nagar, Anna Nagar West Extn, Chennai – 600 101

## 📂 Structure

```
.
├── index.html        # Home
├── menu.html         # Menu (Mon–Sat, Veg daily / Non-Veg Wed, B/L/D)
├── contact.html      # Contact + Google Map + enquiry form
├── assets/
│   └── logo.jpeg
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

- **Phone/email:** currently `+91 81226 29433` and `contact@sshomefoods.in` across the HTML files.
- **Logo:** swap `assets/logo.jpeg` with your real logo (keep the same filename, or update the `<img src>` references).
- **Prices / dishes:** edit the meal cards in `menu.html`.
- **Reviews:** edit the `.review` blocks in `index.html`.

---
© SS Home Foods · Namma Veetu Samayal
