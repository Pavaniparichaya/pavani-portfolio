# Publish Pavani's Portfolio with GitHub Pages — Beginner Guide

This guide takes you from a brand-new GitHub repository to a live website **without installing any software**. You will use a separate `website-v1` branch first, merge it into `main`, and then publish `main`.

> **Your site is not published until you finish the GitHub steps.** GitHub Pages is free for a public repository on GitHub Free. This portfolio is a static HTML/CSS/JS site and does not require npm, React, a build pipeline, or a paid hosting plan.

## Part A — Create the repository

1. Sign in to [github.com](https://github.com) using **Pavani's** account. If she has no account, choose **Sign up** and verify her email address.
2. Click the **+** icon in the upper-right corner → **New repository** (or visit [github.com/new](https://github.com/new)).
3. Set the repository name to **`pavani-portfolio`**. This guide assumes that exact name.
4. Set visibility to **Public** (required for GitHub Pages on the free plan).
5. Enable **Add a README file**. That makes the initial `main` branch immediately available.
6. Click **Create repository**. You should now see the repository's **Code** page with `README.md` on the `main` branch.

### Example

If her username is `pavani123` (example only), the repository will be:

`https://github.com/pavani123/pavani-portfolio`

The published site URL will be:

`https://pavani123.github.io/pavani-portfolio/`

Use **her real GitHub username** instead of `pavani123`.

## Part B — Create the website branch

7. On the repository's **Code** tab, click the branch selector (it should display `main`).
8. Type **`website-v1`** in the field **Find or create a branch...**.
9. Click **Create branch: website-v1 from main**.
10. Check the branch selector again: it should display **`website-v1`**, not `main`.

`main` = public/published version; `website-v1` = where you upload and review the updated website.

## Part C — Upload the website files to the new branch

11. Download `Pavani_B_Studio_Portfolio.zip` and extract/unzip it on your computer.
12. Open the extracted `Pavani_B_Studio_Portfolio` folder. You should see the files below:

```text
index.html
styles.css
script.js
assets/
  pavani-portrait.webp
  Pavani_B_CV.pdf
  favicon.svg
  social-preview.jpg
.nojekyll
README.md
GITHUB_PAGES_GUIDE.md
```

13. **Important:** Upload the **contents** of this folder to the repository root, **not the ZIP** and **not an extra enclosing folder**. After publishing, `index.html` must appear directly at the top level of the repository.
14. On GitHub, verify you are still on branch **`website-v1`**, then click **Add file → Upload files**.
15. Drag **`index.html`**, **`styles.css`**, **`script.js`**, **the entire `assets` folder**, and **`GITHUB_PAGES_GUIDE.md`** into the GitHub upload area. You can also add `.nojekyll` if hidden files are visible. (It is optional for this site.)
16. **Don't upload the packaged `README.md` yet** if GitHub already created one, to avoid accidental overwriting. You can update it later if desired.
17. Wait until the upload list finishes displaying all files, including the assets in their `assets/` subfolder.
18. Enter commit message **`Add Pavani portfolio website`**. Commit changes to the current `website-v1` branch.

After the upload, confirm that `website-v1` contains:

- `index.html` at root
- `styles.css` and `script.js` at root
- `assets/pavani-portrait.webp` and `assets/Pavani_B_CV.pdf`

**Common mistake:** If the path says `Pavani_B_Studio_Portfolio/index.html`, the folder is nested one level too deep. Move the site contents up to repository root before publishing.

## Part D — Merge the website into `main`

19. Return to your repository's **Code** tab while viewing `website-v1`. GitHub normally shows a banner **Compare & pull request**. Click it.
20. If you do not see the banner, choose **Pull requests → New pull request**.
21. Set **base: `main`** and **compare: `website-v1`**.
22. Check the changed files, set the title to **`Launch Pavani portfolio website`**, and click **Create pull request**.
23. Click **Merge pull request** → **Confirm merge**. If these buttons are not available, check for merge conflicts or repository restrictions.
24. Return to **Code**, change the branch selector to **`main`**, and verify that `index.html`, `styles.css`, `script.js`, and `assets` are present there.

## Part E — Turn on GitHub Pages

25. In the repository top menu, click **Settings**.
26. In the left sidebar under **Code and automation**, choose **Pages**.
27. Under **Build and deployment → Source**, choose **Deploy from a branch**.
28. Under **Branch**, select **`main`** and **`/(root)`**, then click **Save**.
29. GitHub will deploy the static site. You can check **Actions** for the Pages build status or go back to **Settings → Pages** to see the **Visit site** link once ready.
30. Visit `https://YOUR_USERNAME.github.io/pavani-portfolio/` (replace `YOUR_USERNAME` with Pavani's actual GitHub username).

### What if the page says 404?

- Check that `index.html` is in the **root of the `main` branch**, not inside another folder.
- Check that **Pages** is set to **Deploy from a branch → main → /(root)**.
- Check the repository name and exact URL for typos. A project site uses **`/pavani-portfolio/`** after the `.github.io` domain.
- Check **Actions** for a failed deployment, then recheck Pages settings. GitHub Pages publishing is not necessarily instantaneous.
- Make sure a verified email address and repository permission allow publishing.

### What if the photo or résumé link doesn't work?

- Check filenames **exactly**, including capitalization:
  - `assets/pavani-portrait.webp`
  - `assets/Pavani_B_CV.pdf`
- These file paths are case-sensitive on GitHub Pages.
- Make sure the `assets` folder is in the **same directory** as `index.html`.

## Part F — Update the website later

1. On GitHub, start from the `main` branch.
2. Create another branch named, for example, `edit-about-section`.
3. Make edits or upload new files in that branch.
4. Commit your changes; create a pull request; merge into `main`.
5. GitHub Pages automatically republishes the merged changes from `main`.

### Change the text or theme

- All professional bio, experience, project and contact wording is in `index.html`.
- Main colors are at the top of `styles.css` inside `:root { ... }`.
- The mobile navigation logic is in `script.js`; no edits needed for content changes.
- Photo: replace `assets/pavani-portrait.webp` with a WebP file with the **same filename** (or update `index.html` if you use a different filename).
- Résumé: replace `assets/Pavani_B_CV.pdf` with the updated PDF; keep the filename.
- Her LinkedIn or project GitHub links should only be added after her real URLs are known.

## Alternative: personal root GitHub Pages URL

If Pavani wants the shorter URL `https://YOUR_USERNAME.github.io/` without `/pavani-portfolio/`, create a repository named **`YOUR_USERNAME.github.io`** under the same user account instead, then follow the same branch/merge/Pages process. `YOUR_USERNAME` must match the real GitHub username exactly, including case-insensitive spelling. There is only one such root site per user; if it already exists, do not overwrite it without deciding what to do with the current site.

## Command-line version (optional for later)

With Git installed, you can also update a repository from Terminal:

```bash
git clone https://github.com/YOUR_USERNAME/pavani-portfolio.git
cd pavani-portfolio
git switch -c website-v1
# Copy the contents of Pavani_B_Studio_Portfolio into this directory.
git add .
git commit -m "Add Pavani portfolio website"
git push -u origin website-v1
```

Then use the GitHub website to make a pull request from `website-v1` into `main`, merge it, and configure Pages as above. GitHub will request authentication through your configured Git credential helper or other supported login method, not a normal account password.

## Official GitHub references

- [Creating a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Managing branches](https://docs.github.com/en/pull-requests/how-tos/commit-changes/managing-branches-within-your-repository)
- [Uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Creating a pull request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)
- [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

---

**Privacy and accuracy reminder:** This portfolio contains an email address, an AI-enhanced portrait supplied for this project, and a downloadable résumé that may contain a phone number. Obtain Pavani's approval before making the site public. Verify that the generated portrait resembles her actual appearance. The résumé and experience descriptions should be updated whenever her information changes.
