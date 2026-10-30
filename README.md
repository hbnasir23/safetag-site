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
| `src/components/` | Header and footer (`Layout`), device drawing, FAQ |
| `src/styles.css` | The look of every page |
| `public/img/` | Photographs, from Pexels (free to use, no credit required) |
| `public/video/` | The two videos on the home page and their poster images |
| `vercel.json` | Build settings and page routing |

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
