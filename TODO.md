# TODO: Remove Next.js and Simplify Project to Vite-based React App

## Steps to Complete

- [x] Delete Next.js-specific files and directories: `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `components.json`, `app/`, `components/`, `hooks/`, `lib/`, `styles/`, `.next/`, `pnpm-lock.yaml`
- [x] Update `package.json`: Remove Next.js and shadcn/ui dependencies; add Vite, React, and basic scripts
- [x] Create `index.html` in the root for Vite entry point, linking to `src/styles/index.css`
- [x] Create `vite.config.js` for Vite configuration
- [x] Regenerate lockfile and install dependencies
- [x] Test the app with `npm run dev`
