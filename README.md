# SafeTag website

A small site that explains SafeTag and offers the latest Android test build
for download. It is a stopgap until the app is on the Play Store.

Built with React, Vite and React Router. Hosted on Vercel, which rebuilds and
redeploys on every push to `main`.

Live: https://safetag-site.vercel.app

## Working on it

```
npm install        # once
npm run dev        # local preview at http://localhost:5173, updates as you edit
npm run build      # production build into dist/
```

## Where things are

| Path | What it is |
|------|------------|
| `src/content/site.js` | Team, supervisors, prices, the contact form key: the text most likely to change |
| `src/pages/` | One file per page: Home, Pricing, About, Contact, Privacy, Terms |
| `src/components/` | Header and footer (`Layout`), download buttons, device drawing, FAQ |
| `src/styles.css` | The look of every page |
| `public/img/` | Photographs, from Pexels (free to use, no credit required) |
| `public/SafeTag.apk` | The build people download (arm64, for modern phones) |
| `public/version.json` | Version, build date and size shown under the download buttons |
| `vercel.json` | Build settings, page routing, and the APK's download headers |
| `publish.ps1` | Puts a new build on the site |

## Contact form

Messages are emailed to the team's inbox by Web3Forms (free plan, 250 a
month). The access key in `src/content/site.js` is public by design. To change
where messages go, sign in at web3forms.com.

## Still to fill in

- Team roles, bios and photos: `TEAM` and `SUPERVISORS` in
  `src/content/site.js`. Put photos in `public/img/team/` and set `photo`.
- Prices on the pricing page are planning figures (`PLANS` in the same file).
- The privacy policy and terms are a first draft and have not been reviewed
  by a lawyer.

## Putting a new build up

```
cd C:\fyp\safetag
flutter build apk --release --split-per-abi

cd C:\fyp\safetag-site
powershell -ExecutionPolicy Bypass -File publish.ps1
```

The script copies the APK into `public/`, updates `public/version.json`,
commits and pushes. The site shows the new build a minute or two later.

## Notes

- The APK is the arm64 build, about 24 MB. Nearly every Android phone from
  the last several years uses it. A very old or unusual phone may refuse to
  install it; the universal build (`app-release.apk`, about 63 MB) works on
  those.
- Every published build stays in the git history, so the repository grows by
  the size of the APK each time.
