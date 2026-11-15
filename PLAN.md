# PLAN.md
Corresponding file for leaving implementation plans or related information.
# Nestweb design and implementation plan

## Purpose and audience

Build a public showcase for the Nest Chess engine. Welcome casual readers, first-time visitors, and people interested in the engine's development. Explain what Nest is, show real development progress, and provide a route to seeing it play on Lichess.

The agreed identity is warm and curious, with technical depth available further down the page.

## Scope

First release: a responsive showcase homepage with a video hero, engine introduction, development updates, Lichess link, and project credits.

Later phase: display an actual live Lichess game. Do not present a simulated board, fabricated activity, or an ordinary development update as live information.

## Page structure

1. Header navigation: Nest brand, About and Development section links, and a Lichess link. Keep navigation compact on mobile.
2. Hero: use the requested chess footage as the header/hero background, with a legible overlay, short engine introduction, and primary action leading into the showcase. Keep text as HTML over the footage.
3. Meet Nest: explain the engine and its distinguishing ideas in accessible language. Verify technical claims against project material before publishing them.
4. Development: show dated, genuine milestones and current work. Establish a simple content format for updates before adding automation.
5. See Nest play: introduce its Lichess presence and link to the account. Allow this section to grow into the live-game experience later.
6. Footer: credit the Stockfish project; link to the Nest GitHub repository and Lichess account; include a discreet footage credit.

## Visual system

### Color

- Use `.context/color_science.png` as the palette and role reference.
- Deep navy provides the canvas; blue surfaces support the site identity.
- Within a group of ideas or functions, use blue when one item should stand out.
- For equally important ideas or functions, do not use blue as an emphasis color. Yellow, green, and purple can distinguish peers without implying a preferred option.
- Cyan is the primary interaction accent where appropriate. Its use must follow the same blue hierarchy rule; equally ranked controls should receive equivalent treatments.
- Reserve red, orange, and light blue for real-time information, per the reference. Accompany status colors with text or icons.
- The SVG logos explicitly contain blue `#00316A` and yellow `#FFFF4D`. Resolve differences between logo values and PNG swatches when defining final tokens; do not assume screenshot samples are canonical.
- Define neutral text, muted text, borders, and focus tokens. Verify contrast for the actual color pairs used.

### Typography

- Funnel Display: page titles and expressive subtitles.
- Funnel Sans: section headings, navigation, body text, controls, and data.
- Starting scale: 14px labels, 16px body, 20–24px section headings, 36–48px page titles. Allow a larger desktop hero title if the composition supports it.
- Body line height around 1.5; constrain long text to roughly 60–70 characters per line.
- Load only required font weights, with suitable fallbacks.

### Layout, spacing, and shape

- Center content within an approximately 1200px maximum width; let hero footage span the viewport.
- Use a 4px spacing base with 8, 12, 16, 24, 32, 48, 64, and 96px steps.
- Starting gutters: 24px mobile and 32–48px desktop, reducing where needed on narrow screens.
- Separate major sections by 64–96px, adjusted for mobile.
- Start with 24px panel padding, 8px control radii, and 12px panel radii.
- Prefer open compositions and fine dividers; use cards for distinct content units.
- Keep one dominant action per section. Use restrained motion and clear hover, focus, and selected states.

### Brand assets and hero media

- Use `.context/logo1.svg` as the favicon, as requested. Check at 16px and 32px; preserve the supplied artwork unless a small-size adaptation is discussed.
- Retain both supplied SVGs. Select the header logo treatment during composition review; logo2 is available for a larger graphic treatment if useful.
- Hero footage: https://www.pexels.com/video/zoom-out-video-of-chess-pieces-in-a-chessboard-6134025/
- The Pexels page credits Vlada Karpovich. Obtain the actual video asset and check its license/download conditions during media preparation.
- Use an optimized local video with a poster image, muted playback, inline playback, and a pause control. Avoid downloading the video before it is needed.
- Respect reduced-motion preferences by displaying the poster; retain a readable fallback if video playback fails. Check crop and text contrast on desktop and mobile.

## Footer destinations and content checks

- Stockfish credit: https://stockfishchess.org/ — acknowledge the project without implying endorsement. Verify Nest's relationship to Stockfish before choosing wording such as "based on" or "powered by."
- Nest source: https://github.com/valedictoria/nest-chess
- Lichess account: user said it is named the same as the engine/repository; provisionally use `nest-chess`, https://lichess.org/@/nest-chess. Verify the exact account before publishing. Do not infer that the GitHub owner is the bot account.
- Footage credit: link to the supplied Pexels page and credit its creator.
- Do not invent engine ratings, speed claims, testimonials, release numbers, milestones, or live status.

## Work sequence

1. Confirm source content: read available engine documentation, verify the Lichess account, and establish factual introductory copy and development entries.
2. Prepare assets and design tokens: finalize palette roles, font weights, logos, video, and poster.
3. Review a homepage composition at desktop and mobile widths, focusing on hero legibility, hierarchy, spacing, and equal-priority color treatments.
4. Implement the responsive showcase using a lightweight setup appropriate to a mostly static site. Select the stack at implementation time; no stack is chosen yet.
5. Verify and refine the finished page before delivery.

## Verification and completion criteria

Apply `.agents/skills/verify.md` (output-verification). `.agents/skills/ui-design.md` was empty when this plan was prepared; recheck it before implementation.

- Verify each agreed section, credit, asset, and link against this plan.
- Inspect desktop and narrow mobile renders; check overflow, navigation, text wrapping, hero cropping, and spacing.
- Verify keyboard navigation, visible focus, heading order, accessible link names, color contrast, and reduced-motion behavior.
- Check favicon legibility, video loading/fallback/pause behavior, font loading, and browser console errors.
- Run the chosen stack's relevant build, lint, and type checks where provided. Review the final changes for accidental scope expansion.
- Clearly identify any unverified factual content or external destination before publication.

## Later: live Lichess games

Investigate supported Lichess embedding or streaming options when this phase begins. Define active-game, idle, loading, disconnected, and finished-game states. Show real data with clear update status and accessible game information; keep connection failures from disrupting the showcase.


## Implementation status — 2026-11-15

- First static implementation is in `site/dist/`, with `site/server.mjs` for local preview.
- Added supplied logos, favicon, remote Pexels hero footage/poster, Funnel fonts, responsive sections, development-source links, Lichess links, and Stockfish/footage credits.
- README retrieved through the GitHub connector confirms C++20, UCI, NNUE, and multi-threaded search. Development results are not fabricated; dated milestone content remains to be supplied.
- Syntax and structural checks passed. Visual/browser verification is pending: accessibility/browser tools unavailable, user cannot enable accessibility now, and sandbox denied server binding.
- Sites registration succeeded; source synchronization/publication failed on DNS resolution. Reuse the retained ID.
- See `site/README.md` for commands, media dependencies, and remaining checks.
