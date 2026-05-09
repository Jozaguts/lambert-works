# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React landing page project. The app entry point is `src/main.jsx`, global styles live in `index.css`, and routing is defined in `src/routes/Router.jsx`. Page-level composition starts in `src/pages/Home.jsx` and shared layout code is in `src/layouts/Main.jsx`.

Feature UI is organized under `src/components/` by section, for example `contact/`, `projects/`, `testimonial/`, `blog/`, and `common/`. Static assets used by components live in `src/assets/`; public assets that should be served directly live in `public/`.

## Build, Test, and Development Commands

Use `pnpm` because the repository includes `pnpm-lock.yaml`.

- `pnpm install`: install dependencies.
- `pnpm dev`: start the Vite dev server.
- `pnpm build`: create a production build in `dist/`.
- `pnpm preview`: preview the production build locally.
- `pnpm lint`: run ESLint across the project.
- `pnpm deploy`: build and publish `dist/` through `gh-pages`.

The Vite dev server proxies `/api` requests to `http://localhost:5000`; update `vite.config.js` if the backend runs elsewhere.

## Coding Style & Naming Conventions

Write React components in JSX using function components. Component files and exported component names use PascalCase, such as `Contact.jsx` and `WorkTogether.jsx`. Keep section-specific styles beside the related component when that pattern already exists, for example `src/components/blog/blog.css`.

Follow the existing two-space indentation style in JavaScript config files. Prefer double quotes and semicolons, matching the current codebase. Run `pnpm lint` before submitting changes; ESLint enforces recommended JavaScript rules, React Hooks rules, and React Refresh export constraints.

## Testing Guidelines

No test runner is currently configured in `package.json`. For now, verify changes with `pnpm lint`, `pnpm build`, and a manual check in `pnpm dev`. If tests are added later, colocate component tests near the component or place integration tests under a clear `tests/` directory, and add the command to `package.json`.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so no repository-specific commit convention can be inferred. Use concise, imperative commit messages such as `Update contact form layout` or `Fix projects image sizing`.

Pull requests should include a short summary, screenshots for visual changes, notes about any asset updates, and the verification commands run. Link related issues when available.

## Security & Configuration Tips

Keep local secrets in `.env.local` and do not commit production credentials. Review generated assets before committing large binaries, and prefer optimized web images for landing-page performance.

## profesional email
hello@lambertworks.us
## address
Plymouth meeting, bluebell, Skippack areas