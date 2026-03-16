
# Coastline Moving Co. — Website Plan

## Overview
A sleek, single-page scrolling website for **Coastline Moving Co.**, a small moving company serving the West Coast from Seattle to San Diego. The site uses bold typography, cool tones with Safety Orange accents, and AI-generated photos of moving scenes.

## Design System
- **Colors:** Deep navy foreground, cool off-white background, Safety Orange (`#F97316`) as primary accent
- **Typography:** Public Sans for headings/body, JetBrains Mono for stats/data
- **Cards:** Borderless with layered shadows, 16px radius
- **Motion:** Subtle slide-up entrances, hover lifts on cards

## Sections (Single Scrolling Page)

### 1. Hero
- AI-generated hero image: white rental truck on a coastal road, worker in navy/orange securing a motorcycle
- Headline: *"Small Moves. Big Care. Serving the West Coast."*
- CTA button: "Get a Flat-Rate Quote" (scrolls to quote form)

### 2. The Load (Services Grid)
- 3-column card layout with AI-generated photos:
  - **Furniture** — double-wrapped, zero scratches (worker wrapping furniture in blue blankets)
  - **Boxes** — organized, inventoried, secured (worker loading boxes into truck)
  - **Specialty** — from Ducatis to dinettes (motorcycle on a ramp)
- Each card has a short punchy description

### 3. The Route (Coverage Map)
- Minimalist SVG map of the West Coast with dots at Seattle, Portland, SF, LA, San Diego
- Copy: *"From the Sound to the Border."*

### 4. The Finish (Quote Form + Stats)
- Simple 3-field form: From Zip, To Zip, Move Date
- Stats bar below: "98.4% On-time delivery" and "0.02% Claim rate" in mono font
- The form is visual only (no backend), with a success toast on submit

### 5. Footer
- Company name, tagline, and simple nav links
- Logo/favicon from uploaded image

## Additional Details
- **Favicon** set to the uploaded logo
- **AI-generated images** created via Lovable AI (Gemini image model) through an edge function, saved as base64 or to storage
- **Responsive** — works on mobile and desktop
- **Fonts** loaded via Google Fonts (Public Sans + JetBrains Mono)
