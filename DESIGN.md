---
name: Design Innovation Centre, Panjab University
description: A warm-paper institutional site that leads with clinical and patent proof, one working-blue accent, serif headlines and mono catalogue tags.
colors:
  paper: "#FAF9F6"
  white-card: "#FFFFFF"
  soft-paper: "#F3F1EC"
  ink: "#16181D"
  slate: "#3A404B"
  muted-slate: "#5B6371"
  hairline: "#E7E3DB"
  hairline-strong: "#D9D4C9"
  working-blue: "#2453C4"
  working-blue-deep: "#1B3F99"
  blue-wash: "#E8EEFB"
  sage: "#4F7F42"
  sage-deep: "#2F5A25"
  sage-wash: "#E9F1E4"
  sand: "#9A5B2E"
  theme-violet: "#5A4CA8"
  sand-wash: "#F5ECDF"
  error: "#C2410C"
typography:
  display:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 1.4rem + 4.2vw, 4.9rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 1.3rem + 2.4vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.01em"
  tag:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  chip: "6px"
  pill: "8px"
  button: "10px"
  field: "12px"
  tile: "16px"
  card: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "clamp(80px, 9vw, 136px)"
components:
  button-primary:
    backgroundColor: "{colors.working-blue}"
    textColor: "{colors.white-card}"
    rounded: "{rounded.button}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.working-blue-deep}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white-card}"
    rounded: "{rounded.button}"
    padding: "14px 24px"
  button-line:
    backgroundColor: "{colors.white-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 24px"
  filter-pill:
    backgroundColor: "{colors.white-card}"
    textColor: "{colors.slate}"
    rounded: "{rounded.pill}"
    height: "44px"
  filter-pill-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white-card}"
  chip:
    backgroundColor: "{colors.soft-paper}"
    textColor: "{colors.slate}"
    rounded: "{rounded.chip}"
    padding: "6px 13px"
  card-project:
    backgroundColor: "{colors.white-card}"
    rounded: "{rounded.card}"
    padding: "12px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
  stat-tile:
    backgroundColor: "{colors.soft-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "28px 24px"
  stat-tile-accent:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.working-blue-deep}"
---

# Design System: Design Innovation Centre, Panjab University

## Overview

**Creative North Star: "The Prototype Bench"**

A university workshop that ships to the hospital. The surface is warm paper, the headlines are set in a human serif, and the one saturated colour is a working blue that appears only where something can be done or chosen. Everything else is a step of warm neutral held apart by hairlines.

The site persuades by proof, so the system stays quiet and lets objects and numbers lead: the bionic arm, the workshop photograph, big serif figures with plain labels, and catalogue and patent numbers set in a mono face like tags on a bench. It should read as credible, precise, warm and ambitious to an industry or clinical partner deciding whether to start a conversation.

**Key Characteristics:**
- Warm neutral paper surfaces with hairline borders, never pure grey or a white page.
- One accent, Working Blue, used rarely; status colours (sage, sand) appear only in patent chips.
- Fraunces for headlines and big figures, Inter for everything read or clicked, IBM Plex Mono for catalogue and patent numbers.
- Quiet, exact components: radius by size, colour change on hover, no lift, glow or gradient.
- Flat at rest; shadow only on the selected tab, the contact form and the detail drawer.

## Colors

A warm neutral ramp does almost all the work; one blue and two status colours do the rest.

### Primary
- **Working Blue** (#2453C4): the single accent. Primary buttons, the selected state, the focus ring and ring-shadow on fields, and colour emphasis inside headlines. Hover and pressed deepen to **Deep Working Blue** (#1B3F99). **Blue Wash** (#E8EEFB) tints the one accent stat tile, the hub card in the network, and date badges.

### Secondary
- **Trial Sage** (#4F7F42) with **Sage Wash** (#E9F1E4) and **Deep Sage** (#2F5A25) text: the Granted chip, and the Energy Harvesting theme dot.

### Tertiary
- **Filed Sand** (#9A5B2E) with **Sand Wash** (#F5ECDF): the Filed chip, and the Transparent Ceramics theme dot.
- **Theme Violet** (#5A4CA8): the AI Enabled Technologies theme dot only. The four theme dots (Working Blue, Theme Violet, Trial Sage, Filed Sand) are a small series palette that tells research themes apart in the filters and card badges.

### Neutral
- **Warm Paper** (#FAF9F6): the page.
- **Soft Paper** (#F3F1EC): alternate section backgrounds, chips, neutral stat tiles, image placeholders.
- **Card White** (#FFFFFF): cards, the contact form, the drawer, the nav tray, filter pills.
- **Bench Ink** (#16181D): primary text, the dark button, the active nav item. **Slate** (#3A404B) is secondary text; **Muted Slate** (#5B6371) is tertiary text and the lightest permitted.
- **Hairline** (#E7E3DB) and **Hairline Strong** (#D9D4C9): borders and dividers.
- **Form Error** (#C2410C): invalid field border and message.

### Named Rules
**The One Blue Rule.** Working Blue marks the primary action, the selection, and at most one key figure per screen. It never fills a surface larger than a stat tile.

**The Warm Paper Rule.** Every surface is a step of the warm neutral ramp (Warm Paper, Soft Paper, Card White). No cool greys and no pure-white page.

## Typography

**Display Font:** Fraunces (with Georgia, Times New Roman, serif)
**Body Font:** Inter (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, Menlo)

**Character:** A human serif for headlines and big figures against a neutral sans for everything read or clicked, with a mono face for tags. The pairing reads as editorial, but the numbers and tags keep it technical.

### Hierarchy
- **Display** (400, clamp(2.6rem, 1.4rem + 4.2vw, 4.9rem), 1.02, -0.035em): the hero headline only.
- **Headline** (400, clamp(2rem, 1.3rem + 2.4vw, 3.1rem), 1.1, -0.02em): section headings. Stat figures use Fraunces 400 at 2.1 to 3.4rem.
- **Title** (500, 1.08rem, 1.35): card and column headings; project titles in cards use Fraunces 500 at 1.2rem.
- **Body** (400, 1rem, 1.65): paragraphs, capped near 65 to 75 characters; the hero lead is 1.15rem at 1.7.
- **Label** (500, 0.8rem, 0.01em, sentence case): kickers, roles, meta.
- **Tag** (IBM Plex Mono 400, 0.8rem): catalogue numbers ("No. 20") and patent numbers.

### Named Rules
**The Two Weights Rule.** Type uses weights 400 and 500 only. Hierarchy comes from size, family and colour, never from bold.

**The Bench Tag Rule.** Catalogue numbers ("No. 20") and patent numbers are set in IBM Plex Mono at 12.8px; they are the one signature detail.

## Layout

One centred column, `min(100% - 48px, 1240px)` wide (24px side gutters, 16px on phones), with sections separated by `clamp(80px, 9vw, 136px)` of vertical padding and alternating between Warm Paper and Soft Paper. Spacing runs on a 4px grid (4, 8, 12, 16, 20, 24, 32). The hero is a two-column split: text on the left, a four-tile bento on the right (workshop photo, accent stat, bionic arm, wide neutral stat). Other recurring grids: five-column hub-and-spokes network, a 360px tab column beside a fluid panel for the research themes, a five-step pipeline, a three-column project grid with one two-column featured card, a 340px sticky side column beside the patent timeline, and a two-column contact block. Breakpoints are 1180px, 980px and 640px; below 980px grids stack in reading order and the nav collapses into a 44px menu button.

## Elevation & Depth

Flat at rest. Depth comes from hairline borders and one step of surface tone, not shadow.

### Shadow Vocabulary
- **Selected tab** (`box-shadow: 0 1px 2px rgba(22,24,29,.04), 0 8px 24px -12px rgba(22,24,29,.12)`): the active theme tab.
- **Panel** (`box-shadow: 0 24px 60px -24px rgba(22,24,29,.25)`): the contact form and the detail drawer.
- **Primary button** (`box-shadow: 0 1px 2px rgba(22,24,29,.16)`): a neutral edge, never a coloured glow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest and separated by hairlines. Shadow appears only on the selected theme tab, the contact form and the detail drawer.

## Shapes

Small, exact corners that grow with the object. Borders are 1px hairlines; media inside cards is clipped to its own rounded rectangle. Circles are reserved for icon buttons, step numbers and the status dot.

### Named Rules
**The Radius By Size Rule.** Radius follows size: 6px chips, 8px pills and nav links, 10px buttons, 12px fields and the nav tray, 16px tiles, 24px cards and panels. Only icon buttons and step numbers are circles.

## Components

Quiet and exact: hairline borders, a colour or border change on hover, a 2px Working Blue focus ring, no lift or scale.

### Buttons
- **Shape:** gently rounded (10px).
- **Primary:** Working Blue on white text, 14px 24px padding, Inter 500 0.95rem. Hover deepens to Deep Working Blue. Pressed scales to 0.98 for 100ms.
- **Dark:** Bench Ink on white (the header "Work with us"); hover goes to black.
- **Line (secondary):** Card White with a Hairline Strong border; hover darkens the border to Bench Ink.

### Chips and filter pills
- **Chip:** Soft Paper background, Slate text, 6px radius, 0.8rem; used for prototype lists and team members.
- **Filter pill:** Card White with a Hairline Strong border, 8px radius, 44px minimum height, 0.88rem 500; the pressed state is Bench Ink with white text. A small count follows the label at 55% opacity.
- **Status chip:** 6px radius, 0.8rem 500: Granted (Sage Wash, Deep Sage), Published (Blue Wash, Deep Working Blue), Filed (Sand Wash, Filed Sand), Prototype (Soft Paper, Muted Slate).

### Cards / Containers
- **Corner Style:** 24px for project cards and panels, 16px for tiles and network cards.
- **Background:** Card White on a Hairline border; neutral stat tiles use Soft Paper, the single accent tile uses Blue Wash.
- **Shadow Strategy:** none at rest; hover changes the border to Hairline Strong.
- **Internal Padding:** 12px around a 4:3 image with 16px radius for project cards; 24 to 28px for tiles.

### Inputs / Fields
- **Style:** Warm Paper fill, Hairline Strong border, 12px radius, 14px 16px padding.
- **Focus:** border to Working Blue, background to white, 4px ring at 12% Working Blue.
- **Error / Disabled:** Form Error border on the field group; the message is plain text beneath the button.

### Navigation
- **Style:** a Card White tray (12px radius, 4px padding, hairline border) of 8px-radius links in Slate 0.9rem 500.
- **States:** hover is a Soft Paper fill; the section in view is Bench Ink with white text.
- **Mobile:** the tray collapses into a 44px menu button that opens a serif list.

### Project card with bench tag (signature)
A project card whose image is missing or still loading shows its catalogue number in IBM Plex Mono ("No. 20") at the bottom left of a Soft Paper tile; once the image loads it covers the tag.

## Do's and Don'ts

### Do:
- **Do** keep text at 4.5:1 or better: Muted Slate (#5B6371) is the lightest text colour on any surface.
- **Do** size tap targets at 44px (filter pills, burger, inline links padded to 44px).
- **Do** write labels in sentence case at 12.8px with no tracking.
- **Do** put proof before prose: big Fraunces figures with a plain Inter label.
- **Do** give hover a colour or border change only, and keep a visible 2px Working Blue focus ring.
- **Do** keep spacing on the 4px grid and sections at clamp(80px, 9vw, 136px) vertical padding.

### Don't:
- **Don't** add gradients, glows, coloured shadows, blurred backdrops, emoji or decorative icons.
- **Don't** use uppercase tracked labels or italic for emphasis; emphasis in a headline is Working Blue colour only.
- **Don't** introduce a second accent hue; sage and sand appear only in patent status chips and the theme dots, violet only in its theme dot.
- **Don't** lift, scale or animate layout properties on hover; no looping motion.
- **Don't** add claims, numbers or testimonials the owner has not confirmed (see PRODUCT.md).
