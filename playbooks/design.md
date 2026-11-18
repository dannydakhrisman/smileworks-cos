# Playbook: design

For app screens, flows, prototypes and visual design, Nafas or freelance.
Building a website or landing page? Use `website.md` instead.

The steps here are the same for every project. Each project's look lives in
its own `CLAUDE.md`.

## 1. Understand
- Read the project's `CLAUDE.md` for its look: fonts, colors, design system,
  brand rules. Missing? Ask h0ney once and write the answers into that
  `CLAUDE.md`.
- Nafas app: load `nafas-design-system-guideline`. Motion goes through
  `nafas-animation-guideline`, copy in other languages through
  `nafas-translation-guideline`.
- Input can be a PRD, a Discovery doc prototype (PM step 7), a sketch or a
  reference. New flow? Run `/in-your-own-words` first.
- Decide up front: platform (iOS, Android, both, web) and languages
  (right-to-left too, if Arabic).

## 2. Plan (wait for h0ney's yes)
- List the screens in journey order, one line each, with an ID:
  2 letters for the journey + 2 digits (ON-01 onboarding, HM-01 home).
  Never reuse a number. Use the same IDs in the PRD, screen names and
  tickets.
- Small change (a fix or tweak)? Skip the plan.

## 3. Design
- Bar: Apple and Jony Ive. Easy, beautiful, careful with details. Users
  should think "I need this", not "another AI app".
  - Native structure: large titles, back labels, grouped lists, sheets that
    keep context.
  - One primary action per screen. Content first, with real previews.
  - 1 or 2 delight moments at most, where they are earned.
- Don't:
  - put a border on every card
  - put icons in tinted circles
  - use sparkle icons for AI
  - put a colored banner on every message
  - stack full-width buttons
  - add "Step 1 of 3" labels
  - fill screens with tiny grey captions
  - use big-icon empty states
  - use purple gradients, glows or emoji as icons
- When h0ney rejects a look, add the reason to the "Don't" list above.
- Defaults (a project's `CLAUDE.md` can override). When a brand skill
  exists (e.g. `nafas-design-system-guideline`), its look rules win over
  these defaults:
  - One typeface.
  - Every delete: a centered pop-up with a red icon, "Delete ...?",
    "You can't restore it.", a red Delete button and Cancel.
  - Apps on iOS and Android say "phone", never "iPhone".
  - Color and icons: same rules as `website.md`.
- Draw the other states too: empty, loading, error, offline. Edge cases in
  the PRD get their own screens.
- Motion: write the spec (what moves, duration, easing), not code.
- When h0ney asks for a change:
  - Move means move. Don't redesign it.
  - Fix every instance on every screen, not only the one they pointed at.

## 4. Check before showing h0ney
- [ ] Every screen has an ID and matches the plan
- [ ] Nothing looks AI-made
- [ ] Empty, error and offline states drawn where they apply
- [ ] Real copy, no lorem ipsum. Unknown numbers marked, e.g. [PRICE]
- [ ] Text readable. App tap targets at least 44 pt (Apple's guideline).
      Websites use the button sizes in `website.md`
- [ ] PRD and screens match. If one fell behind, update it and tell h0ney

## 5. Show h0ney → wait for yes
- Send the link and screenshots. Nothing ships without their yes.
- Write the link into the project's `CLAUDE.md` so the next session
  finds it.
