# robertomadrid.com — deployment guide (GitHub Pages)

## 1. Create the GitHub repo
1. Go to github.com and create a new **public** repository — name doesn't matter much, e.g. `robertomadrid-site`.
2. Upload these files to the repo root (`index.html`, `off-duty.html`, `css/`, `js/`), either by dragging them into the GitHub web UI or via git:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

## 2. Turn on GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. GitHub will give you a URL like `https://<your-username>.github.io/<repo-name>/` — confirm the site loads there first.

## 3. Point robertomadrid.com at it
In the repo root, add a file called `CNAME` (no extension) containing exactly:
```
robertomadrid.com
```
Commit and push it. This tells GitHub Pages which custom domain to serve.

Then, at your domain registrar (wherever you bought robertomadrid.com), set these DNS records:

**A records** (for the apex domain `robertomadrid.com`) — point to GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record** (for `www.robertomadrid.com`):
```
www.robertomadrid.com → <your-username>.github.io
```

DNS changes can take anywhere from a few minutes to ~24 hours to propagate.

## 4. Enforce HTTPS
Back in **Settings → Pages**, once the custom domain is verified, check **Enforce HTTPS**. GitHub issues the certificate automatically — this can take a little while to become available after DNS propagates.

## Before you go live
- Swap the placeholder contact links in `index.html` (`mailto:you@robertomadrid.com`, LinkedIn, GitHub) for your real ones.
- Everything else pulls from real background/certs/lab info — update it as things change (new certs, lab additions, etc).
