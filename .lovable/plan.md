

# GhostPrice - Product Bridge Website Plan

## Overview
A premium, mobile-first product comparison website that exposes "Money Pit" products vs. "Buy It For Life" alternatives, designed to drive affiliate sales from YouTube Shorts traffic.

---

## 🎨 Design System Setup

### Theme Configuration
- **Dark base:** `#0f172a` (slate-900)
- **Gradient header:** Purple gradient from `#667eea` to `#764ba2`
- **Accent colors:**
  - Warning/Trap: Vibrant Red `#ef4444`
  - Savings/BIFL: Neon Green `#22c55e`
- **Typography:** Inter font family
- **Effects:** Glassmorphism cards with `backdrop-blur-md` and `bg-white/10`

### Assets
- Copy the uploaded GhostPrice ghost logo to the project
- Configure custom Tailwind colors and animations

---

## 📱 Page 1: Landing Page (/)

### Hero Section
- Full-screen purple gradient background
- Centered headline: **"Stop Buying Money Pits."**
- Subtext explaining the value proposition
- The GhostPrice ghost logo prominently displayed

### Search Input (Visual)
- Large, beautiful glassmorphism search bar
- Placeholder: "Paste Amazon Product URL..."
- Search icon and decorative glow effects

### Demo CTA
- Pulsing animated button: **"See Live Analysis"**
- Links to `/analyze` page
- Glowing green accent to draw attention

---

## 📊 Page 2: Analysis Page (/analyze)

### Header
- GhostPrice logo + "Analysis" text
- Clean, minimal navigation

### TCO Showdown Section
Two comparison cards displayed side-by-side (stacked on mobile):

**Left Card - "The Trap" (Red Theme)**
- Product: Levoit Core 300 - $99.99
- Consumable: $30 filter every 4 months
- 5-Year Total Cost: **$549**
- Red glow border, warning badge "⚠️ High Maintenance"

**Right Card - "The Winner" (Green Theme)**
- Product: Winix 5500-2 - $159.99
- Consumable: $40 filter every 12 months
- 5-Year Total Cost: **$359**
- Green glow border, badge "✅ BIFL Choice"

### Truth Graph
- Animated bar chart comparing costs at Year 1, Year 3, and Year 5
- Uses Recharts library (already installed)
- Clear visual showing cost divergence over time

### The Verdict Section
- Summary text: "You break even in 14 months. Over 5 years, the Winix saves you **$190**."
- Savings amount highlighted in green

### Mobile Sticky CTA
- Fixed bottom button: **"Buy on Amazon"**
- High z-index, always visible on mobile
- External link icon

### Redirect Overlay
- When clicking "Buy on Amazon," show full-screen spinner
- Message: "Finding best price..."
- 1.5 second delay simulation before redirect

---

## ⚡ Animations & Interactions

### CountUp Effect
- Price numbers animate from 0 to final value on page load
- Smooth easing for premium feel

### Progress Bars
- "Longevity Score" bars animate filling left-to-right
- Staggered animation timing

### Hover Effects
- Cards scale slightly on hover
- Glow effects intensify
- Buttons have smooth transitions

### Page Transitions
- Fade-in animations when content loads
- Staggered reveal for comparison cards

---

## 📦 Technical Implementation

### New Dependencies
- **Framer Motion** - for animations (CountUp, transitions, hover effects)

### File Structure
```
src/
├── pages/
│   ├── Landing.tsx
│   └── Analyze.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── SearchInput.tsx
│   ├── ProductCard.tsx
│   ├── CostComparisonChart.tsx
│   ├── VerdictSection.tsx
│   ├── StickyBottomCTA.tsx
│   └── RedirectOverlay.tsx
├── assets/
│   └── ghostprice_logo.jpg
└── lib/
    └── mockData.ts
```

### Mobile-First Approach
- All styles start with mobile breakpoints
- Touch-friendly tap targets (min 44px)
- Swipeable card layout on small screens
- Sticky bottom CTA only visible on mobile

---

## 🎯 Key User Flows

1. **Discovery Flow:** User lands on homepage → Sees compelling headline → Clicks "See Live Analysis"

2. **Analysis Flow:** User views comparison → Scrolls through cost breakdown → Sees clear winner → Clicks sticky CTA

3. **Conversion Flow:** Clicks "Buy on Amazon" → Sees premium loading overlay → Redirects to affiliate link

