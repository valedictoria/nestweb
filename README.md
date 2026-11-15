# Nestweb

Website showcasing the Nest Chess engine.

## Run locally

From this repository's root:

```sh
npm run dev
```

Then open http://localhost:4173.

No dependency installation or build step is required. Run `npm run check` for
JavaScript syntax checks. The static site source is in `site/dist/`.

## Vercel

Deploy from the repository root with `npm run build` and Output Directory
`dist`. The build checks JavaScript and copies the static site into `dist/`.
These settings are declared in `vercel.json`. No development server is needed
in production. Deploy the latest main commit after changing project settings.

See [site/README.md](site/README.md) for content sources, media dependencies,
and verification status, and [PLAN.md](PLAN.md) for the design plan.
