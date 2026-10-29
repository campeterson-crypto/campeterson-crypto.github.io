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

**Seeing old styles after a change?** Browsers cache `style.css` and `site.js`. When you change either one, bump the `?v=6` at the end of their links in every `.html` file (to `?v=7` and so on).

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
