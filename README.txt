Shiva Rezvani — portfolio (production build)
============================================

Static site: no server code, no database.

RUN IT LOCALLY
--------------
Pages use real URLs (/case/gold-zero-to-one), so double-clicking index.html
will NOT work — it must be served over http, in SPA mode:

    npx serve -s .

PUT IT ONLINE
-------------
Drag this folder onto Netlify, Vercel or Cloudflare Pages. Deep links work
out of the box:

    _redirects    Netlify, Cloudflare Pages
    vercel.json   Vercel
    404.html      GitHub Pages, Surge

The only rule a host needs: serve index.html for any path that is not a file.

IMAGES
------
    images/c01/   33 files      images/c03/   12 files
    images/c02/    7 files      images/c04/   19 files

Every figure is filled except Visual 14 in case study 03 (home page and the
3D system) — four labelled slots, still waiting on artwork.

THE TWO THEMES
--------------
The two dots in the top nav switch between them; the choice is remembered.

    Warm      your Figma identity — #faf9f6, gold, Instrument Serif
    Neutral   the LaunchFolio palette — white, black, Switzer
