Lumina agency website: minimalist redesign with Instrument Sans + Serif font play, dark sections, horizontal scroll.

## Design Tokens
- Primary accent: --primary (225 82.5% 87.1%) = #C5D2F8
- Secondary bg: --secondary (0 0% 6.7%) = #111111 (dark, white text)
- Foreground: --foreground (0 0% 6.7%) = #111111
- Border radius: 7px everywhere. No borders. No shadows. No gradients.
- Buttons: bg-foreground text-background (dark buttons)

## Fonts
- Body/Headlines: font-sans-display (Instrument Sans)
- Emphasis/Italic words: font-serif-display (Instrument Serif)
- Pattern: Sans for general text, Serif italic for key words in headings
- Loaded via Google Fonts in index.html

## Style
- Minimalist: less text, stretched full-width layouts, no boxes
- Dark sections (#111) with white text for secondary bg
- Horizontal scroll section for capabilities (vertical scroll → horizontal movement)
- Low padding, visual-based, contrarian layout
- Labels: 10px uppercase tracking-[0.12em] text-foreground/30

## Structure
Single-page: Hero → Problem → Solution → Capabilities (h-scroll) → Process → Difference → About → Stats → CTA → Footer

## Custom CSS vars
- --text-secondary, --text-muted, --text-footer-muted, --text-footer-dim, --accent-hover
