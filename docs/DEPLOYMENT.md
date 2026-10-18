# GridCraft production deployment

- Site: https://gridcraft.me
- Git repository: https://github.com/zyrliuwei-sys/gridcraft
- Cloudflare Worker: `gridcraft`
- Production branch: `main`
- D1 database: `gridcraft`, bound as `DB`

## Automatic deployment

Cloudflare Workers Builds is connected directly to the GitHub repository.
Commit changes and push to `main`; Cloudflare installs dependencies, builds,
and deploys automatically. Local edits alone do not trigger a deployment.
Build status and logs are available under the Worker's Deployments tab.

Build command: `pnpm cf:ci:build`

Deploy command: `pnpm exec wrangler deploy`

Root directory: `/`. Watch paths: `*`.
Node and pnpm versions are pinned by `.node-version` and `package.json`.
`scripts/prepare-cloudflare-ci.mjs` recreates the ignored `wrangler.jsonc`
and `.env.production` from the tracked `wrangler.production.json` before building.
Change the tracked production config when changing production settings.

## Secrets and database

`AUTH_SECRET` and `CONFIG_ENCRYPTION_KEY` are stored as Cloudflare Worker
secrets. They are not committed to GitHub and persist across deployments.
Keep the encryption key stable to preserve access to encrypted settings.
Provider credentials can be configured at https://gridcraft.me/admin/settings.

The existing D1 schema, RBAC seed, and administrator account are preserved.
Code deployments do not reset or automatically migrate the database.
For future schema changes, generate migration SQL, review it, then apply
approved migrations to production separately before deploying dependent code.
Do not use `db:push` against production.

## Manual deployment

With Wrangler authenticated to the correct Cloudflare account:

```sh
node scripts/prepare-cloudflare-ci.mjs
pnpm run cf:deploy
```

The deployment config owns the `gridcraft.me` custom domain and D1 binding.
