# Netlify configuration repair

The Netlify error means the `netlify.toml` currently committed in the GitHub repository begins with `<!doctype html>`. Netlify expects TOML configuration there, not the contents of `index.html`.

Replace the repository-root `netlify.toml` with this exact content:

```toml
[build]
  command = "npm install --legacy-peer-deps && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Important:
- `index.html` must remain in the repository root as the Vite HTML entry file.
- `netlify.toml` must be a separate plain-text TOML file in the repository root.
- Do not rename `index.html` to `netlify.toml` or paste HTML into `netlify.toml`.
- In GitHub, open `netlify.toml` → Edit → replace all contents → Commit changes.
- Then trigger a new Netlify deploy.

The TOML file included in this archive was parsed successfully with Python's TOML parser.
