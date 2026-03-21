

# Lumina — AI-Native Creative Agency Website

## Overview
A premium single-page website for Lumina, an AI-native performance creative agency for DTC e-commerce brands. Editorial design aesthetic with generous whitespace, scroll-triggered animations, and a floating navbar.

## Design System
- **Fonts**: Instrument Serif (headlines, editorial), Inter (body, UI)
- **Colors**: White (#FFFFFF) primary bg, #E5ECFF alternate sections, #C5D2F8 accent, #111111 text, #555555 secondary text
- **Style**: No shadows, no gradients, 4px border-radius everywhere, 1px #E0E0E0 borders only when needed
- **Spacing**: 120–160px section padding, generous whitespace throughout

## Pages & Sections (single-page with anchor nav)

### Floating Navbar
- Fixed, 5px from top/left/right edges, glassmorphic blur background
- Logo "Lumina" (Instrument Serif) left, nav links right, "Book a call" CTA accent button

### 1. Hero Section
- Full viewport, left-aligned headline (Instrument Serif italic, 64px): "Your next best-performing ad doesn't need a camera, a studio, or a 4-week timeline."
- Subheadline, two CTAs, decorative blurred #C5D2F8 circle behind text
- Below fold: infinite horizontal marquee ticker with capability words

### 2. Problem Section — "The old model is breaking"
- #E5ECFF background, editorial opening line
- Three pain point cards (Slow, Expensive, Low volume) with white bg and subtle borders
- Large pull quote stat about creative driving 85% of ad performance

### 3. Solution Section — "We replaced the studio with an engine"
- Asymmetric layout: large headline left, body text right
- Two large stats: "48h" delivery time, "10x" more variations

### 4. Capabilities Section — "What we produce"
- #E5ECFF background, 6-card grid
- Cards: Cinematic video ads, Product hero shots, Lifestyle scenes, High-volume variations, UGC-style, Motion graphics
- Placeholder image blocks in #C5D2F8

### 5. Process Section — "How it works"
- Vertical editorial timeline with large step numbers (80px, #C5D2F8)
- 6 steps from briefing through continuous optimization

### 6. The Difference — "Why this works"
- #E5ECFF background, two-column before/after comparison
- Visual weight making "With Lumina" column feel brighter

### 7. About Section
- Full company story, founded in Paris 2026
- Clean "Founded in Paris · Serving European DTC brands" note

### 8. Social Proof / Numbers
- #E5ECFF, 4 large stats in a row: 48h, 50+, 0 cameras, 24/7

### 9. CTA Section
- Compelling headline, strategy call booking button linking to cal.com
- "No commitment" reassurance text

### 10. Footer
- Dark #111111 background, three-column layout
- Logo + tagline, nav links, location/contact
- Bottom bar with copyright and "Built without cameras"

## Animations & Interactions
- IntersectionObserver-powered fade-in-up on all sections with 100ms stagger
- Hero text line-by-line reveal animation
- Parallax decorative element in hero
- Infinite CSS marquee ticker between hero and problem sections
- Smooth scroll for anchor navigation
- Subtle hover transitions on all interactive elements

## Responsive Design
- Desktop (1440px), Tablet (768px), Mobile (375px)
- Scaled typography, stacked layouts on mobile, adjusted padding

