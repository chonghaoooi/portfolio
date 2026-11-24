# Ooi Chong Hao portfolio

Next.js, TypeScript and Tailwind CSS. Light by default, with a dark mode toggle.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm run lint
npm run typecheck
```

- All text and links: `src/data/portfolio.ts`. Set `enabled: true` on a link to show it.
- Photo: replace `public/profile.jpg` with a square image.

Cloudflare Pages builds the `main` branch with `npm run build` and serves the `out` directory at [ooichonghao.com](https://ooichonghao.com).
