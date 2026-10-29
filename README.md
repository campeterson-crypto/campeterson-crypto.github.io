# Cameron Peterson — personal site

Live at **https://campeterson-crypto.github.io**, hosted free on GitHub Pages. Every change pushed to the `main` branch goes live within a minute or two.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `projects.html` | Projects, including the AI Prompting Toolkit |
| `toolkit.html` | Prompt Builder (12 task types) |
| `cover-letter.html` | Cover Letter Builder |
| `budget.html` | Budget Planner: income, expenses, savings goals, emergency fund, debt payoff (saved in the visitor's browser only) |
| `ski.html` | Ski Pass Calculator: Ikon vs. Epic vs. day tickets by resort, with friend tickets |
| `private-credit.html` | Interactive explainer of how a private credit fund, its waterfall and carry work |
| `sandwich.html` | Sandwich Shop of the Week: a new SF or Berkeley shop every Monday, from the list in `sandwiches.js` |
| `sports.html` | Live ESPN headlines, records and next games for the Chargers, Nuggets, Avalanche and Buffs |
| `cv.html` | CV: about, experience, education, skills |
| `essays.html` | Essays (hidden from the menu until there's at least one) |
| `404.html` | Shown for any address that doesn't exist |

## Editing your info

Almost everything personal is in **`site.js`**, in the `SITE` block at the top. Edit it right on github.com: open the file, click the pencil icon, make the change, and click **Commit changes**.

- `intro` is the large sentence on the home page.
- `about`, `experience`, `education` and `skills` fill the CV page. An empty list (`[]`) hides that section.
- `essays` and `projects` work the same way. Adding an essay also adds "Essays" to the menu.

Example experience entry:

```js
experience:[
  {role:"Business Analyst Intern", org:"Company Name", where:"Honolulu, HI", when:"Jun – Aug 2025",
   points:["Built a weekly sales dashboard used by 12 managers","Cut reporting time 40%"]}
],
```

Page titles, descriptions and link previews are in the `<head>` at the top of each `.html` file.

**Seeing old styles after a change?** Browsers cache `style.css` and `site.js`. When you change either one, bump the `?v=9` at the end of their links in every `.html` file (to `?v=10` and so on).

**Home page decorations:** the moving fintech, ski and CU designs in the side margins are in `decor.js` (styles under "scroll decorations" in `style.css`). They only appear on screens 1300px or wider.

**Sandwich Shop of the Week:** shops live in `sandwiches.js`, one per week starting Oct 26, 2026, switching every Monday at midnight Pacific. The list of 21 runs out on Mar 22, 2027, after which it starts over. Add new shops to the END of the list (each needs name, city, neighborhood, address, lat/lon, background, favorite items and an optional tip) so past weeks stay the same.

**Ski Pass Calculator:** pass prices (`PRICES`), friend tickets (`FRIEND`) and each resort's day-ticket estimate and pass access (`REGIONS`) are at the top of the script in `ski.html`. Update them each season; prices there are as of Oct 10, 2026.

**Sports:** teams are the `TEAMS` list in `sports.html` (ESPN sport path + team id). News comes from ESPN's public site API, which is unofficial and could change.

**Budget Planner:** the expense categories and their default line items are the `CATS` list near the top of the script in `budget.html`; the example budget's amounts are in `EX` and `example()` just below it. Visitors' budgets live only in their own browser (`localStorage`), and they can save or open them as a `.json` file.

## Images

- `headshot-sq.jpg`: profile photo (square, 640×640)
- `og-image.png`: the 1200×630 preview card shown when the link is shared on LinkedIn, iMessage, Slack and so on
- `favicon.svg` and `apple-touch-icon.png`: browser tab and phone home-screen icons

LinkedIn caches previews. After changing `og-image.png`, paste your URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh it.

## Using a custom domain (like cameronpeterson.com)

1. **Buy the domain** from a registrar such as Cloudflare, Porkbun or Namecheap (about $10–20 a year).
2. **Add DNS records** in the registrar's DNS settings:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `campeterson-crypto.github.io` |

   Delete any existing "parking" A or CNAME records for `@` and `www` first. On Cloudflare, set these records to **DNS only** (grey cloud) until HTTPS is working.
3. **Tell GitHub:** in this repository go to **Settings → Pages → Custom domain**, enter `cameronpeterson.com` and click **Save**. GitHub adds a `CNAME` file to the repo for you.
4. **Wait** for the DNS check to pass (minutes to a few hours), then tick **Enforce HTTPS**.
5. **Update the site's own links:** replace `https://campeterson-crypto.github.io` with your new domain in every `.html` file's `<head>`, in `sitemap.xml` and in `robots.txt`.
6. **Optional but recommended:** under your GitHub account's **Settings → Pages**, add and verify the domain. This stops anyone else from claiming it on GitHub.

Don't add a `CNAME` file before you own the domain; it would break the current address.
