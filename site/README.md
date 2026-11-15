# Nestweb

A dependency-free, static showcase for the Nest Chess engine.

## Preview

From the workspace root or this directory, run `npm run dev`, then open http://localhost:4173.
Alternatively, open `dist/index.html` directly in a browser. Internet access is
needed for the Google Fonts stylesheet and Pexels footage/poster.

Run `npm run check` for JavaScript syntax checks. There is no build step;
`dist/` is the deployable site.

## Content and assets

- `dist/index.html`: page structure, copy, footer credits, and external links.
- `dist/styles.css`: palette roles, typography, responsive layouts, and motion preferences.
- `dist/app.js`: video playback and reduced-motion behavior.
- `dist/assets/`: original supplied logos. `logo1.svg` is the favicon.

Engine facts are sourced from https://github.com/valedictoria/nest-chess/blob/main/README.md.
Development links point to real project documents and commit history. No dated
milestone results were supplied, so none are invented. The Lichess destination
is `https://lichess.org/@/nest-chess`, per the user's account naming instruction;
its existence could not be independently verified in this environment.

Footage: Vlada Karpovich, Pexels, https://www.pexels.com/video/zoom-out-video-of-chess-pieces-in-a-chessboard-6134025/.
Pexels permits website use under https://www.pexels.com/license/.
The current video and poster use remote Pexels URLs. Before production release,
download suitable local versions and update the HTML source/poster and CSS
background URL. Funnel Display and Funnel Sans currently load from Google Fonts.

## Verification status

Completed: JS syntax checks; local asset and fragment resolution; unique IDs;
single primary heading and English language attribute; image alt attributes;
SVG XML parsing; unchanged favicon artwork; CSS brace balance; numeric text-color
contrast checks; video-control behavior checks in a mocked DOM.

Pending: rendered desktop/mobile review, keyboard traversal, actual media/font
loading and playback, favicon legibility at browser-tab sizes, and browser
console inspection. Browser/accessibility access was unavailable, and the user
asked to continue without it. The sandbox also denied opening a preview server.

## Hosting

A private, unpublished Sites project was registered and its ID is retained in
`.openai/hosting.json`. Publication failed because the shell could not resolve
the source-host domain. No deployed URL exists yet. Resume with this project ID;
do not create another project. No credentials are stored in the project.

Live Lichess game integration remains a later phase, as agreed.
