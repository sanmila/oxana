# Version History & Development Roadmap
Project: Oksana Ivanova - Psychologist Portfolio
Repository: https://github.com/sanmila/oxana
Live Preview: http://preview-oxana.sanjay.ru

## [1.3.0] - 2026-04-23
### SEO Optimization & Deployment Protocol

#### SEO & Content Updates
- **Technical SEO**: Added `robots.txt` and `sitemap.xml` for correct search engine indexing.
- **Dynamic Meta Tags**: Updated `script.js` to automatically swap `<meta name="description">` content depending on the active language (RU/EN).
- **Structured Data**: Injected `MedicalBusiness` JSON-LD schema into `index.html`, `blog.html`, and `certificates.html` to enhance Google Rich Results.
- **Contact Links**: Updated Telegram handle to `@oksana_feya_krestnaya`. Converted both Telegram and Email text into clickable links (`href="https://t.me/..."` and `href="mailto:..."`) with hover transition effects.
- **Bug Fix**: Fixed a `TypeError` in `blog.html` and `certificates.html` caused by missing mobile language toggles. Added safe DOM checks to ensure `renderArticles()` executes properly.

#### Deployment Protocol (Bitwarden SSH Bypass)
- **Issue**: Deploying via `scp` or `ssh` was instantly failing with `Permission denied (publickey)`. This happened because the Bitwarden SSH Agent (`SSH_AUTH_SOCK`) was bombarding the VPS with unrelated keys (e.g., from the Oko project), hitting the server's `MaxAuthTries` limit before the correct key could be offered.
- **Solution**: Deployed successfully by strictly bypassing the SSH Agent using the `-o IdentitiesOnly=yes` flag and explicitly pointing to the correct private key (`vps_begit`).
- **Standard Deploy Command**: 
  ```powershell
  scp -r -o IdentitiesOnly=yes -i C:\Users\Sanjay\.ssh\vps_begit index.html blog.html certificates.html script.js styles.css robots.txt sitemap.xml HISTORY.md articles assets certificates root@31.128.41.93:/var/www/oxana/
  ```

---

## [1.2.0] - 2026-04-22
### Data-Driven Blog with Article Images

#### Architecture
- **`articles/data.js`** — Lightweight JS article index. All 4 existing articles migrated.
  Each article is one object with: `id`, `date`, `tag`, `title`, `excerpt`, `points`, `image`, `accent`.
  Adding a new article = append one object to the top of the array. No HTML editing needed.
- **`articles/images/`** — Drop cover images here as `NN.webp` (e.g. `05.webp`). Matched by `id`.
- **`blog.html`** — Fully JS-rendered from `data.js`. Sorted newest-first automatically.

#### Visual Features
- Each article card has a **16:7 cover image** area — uses the `articles/images/NN.webp` file if present.
- **Gradient fallback**: if no image exists (or fails to load), a premium CSS gradient + unique SVG geometric deco shows instead. 5 accent themes: `gold`, `sage`, `rose`, `slate`, `indigo`.
- Article number and date overlaid on card visual.
- **"Read more" expand button** — first 3 points shown; tap to reveal all (CSS-controlled, zero extra JS weight).
- Hover: card lifts + image subtle zoom.

#### To publish a new weekly article
1. Add object at the **top** of `ARTICLES` array in `articles/data.js`
2. (Optional) Drop `NN.webp` in `articles/images/`
3. Commit & push — done.

---

## [1.1.0] - 2026-04-21
### Client Corrections & New Pages

#### Content Corrections (from client screenshots & corrections.md)
- **Contact Info**: Changed city Москва → Санкт-Петербург across all sections.
- **Contact Info**: Removed phone number; added Telegram `@oksanaivanova_0904` as primary contact.
- **Contact Info**: Updated email → `oksanaivanova_0904@icloud.com`.
- **Forms**: Added `Развод` option before `Другое` in both contact form and booking modal selects.
- **"Кому я помогаю" section**: Updated lead paragraph to include семейные пары на грани развода.
- **Card #06**: Corrected wording — `паттернах и в том,` → `и понять,` (matches Telegram copy).
- **Work item #03**: Corrected — `или, наоборот,` → `или наоборот,`; `Мы найдём корень паттерна` → `Мы найдем причину`.
- **About stats**: Fixed `5 000+` number wrapping using `&nbsp;` + `white-space: nowrap`.

#### New Pages
- **`certificates.html`**: Separate credentials page displaying all 4 diplomas/certificates from `certificates/` folder with zoomable lightbox, stats row (4 docs, 1200hrs, МАП), and CTA.
- **`blog.html`**: Blog page with all 4 articles from Telegram channel — complete point lists:
  - Article 1: 10 reasons for inaction (all 10 reasons with tips)
  - Article 2: 6 stages of relationships (each stage individually)
  - Article 3: 8 hidden self-punishment patterns
  - Article 4: 5-step therapy method with real client case

#### Navigation & Homepage
- **Nav updated**: Replaced `Кабинет` / `Подход` with `Дипломы` and `Блог` links in desktop nav, mobile menu, and footer.
- **Blog teaser section**: Added to homepage (after Testimonials) — 4 article cards linking to `blog.html` + CTA button.
- **Credentials strip**: Added to homepage — stats + "Посмотреть документы" link to `certificates.html`.

---

## [1.0.1] - 2026-04-12
### Added
- **Version History**: Added `HISTORY.md` to track project evolution and roadmap.

## [1.0.0] - 2026-04-12
### Initial Release & Infrastructure Setup
- **Core Layout**: Initialized HTML/CSS/JS structure with fully responsive design.
- **Multilingual System**: Built-in RU/EN vocabulary toggles.
- **Asset Optimization**: Converted heavy images (`about-section`, `atmosphere`, `hero`, `with-client-1`) from PNG/JPEG to WebP format to dramatically improve page load performance.
- **Social Sharing**: Maintained `hero.png` as fallback specifically for Open Graph / Twitter Cards to ensure high-quality previews on social networks (WhatsApp, Telegram, Twitter). Added `<meta property="og:image">` tags.
- **Source Control**: Initialized Git repository and pushed to `sanmila/oxana` on GitHub.
- **VPS Deployment**:
  - Automatically pushed website files via SFTP to `/var/www/oxana` on host `31.128.41.93`.
  - Configured Nginx file `/etc/nginx/sites-available/preview-oxana.sanjay.ru` and linked it to `sites-enabled`.
  - Nginx service reloaded to make site visible natively inside the custom VPS Management Dashboard.

---

## 🚀 Roadmap for Further Development

### Phase 2: Security & SEO (Next Steps)
- [ ] **SSL Provisioning**: Secure `preview-oxana.sanjay.ru` using Let's Encrypt / Certbot via the VPS Dashboard.
- [x] **Technical SEO**: Generate and upload `sitemap.xml` and `robots.txt` for search engine indexing.
- [x] **Meta Updates**: Add distinct meta titles and descriptions dynamically depending on the selected language (JS meta update loop).
- [x] **Structured Data**: Implement JSON-LD schema markup (LocalBusiness or MedicalBusiness) to improve rich results in Google.

### Phase 3: Functionality & Analytics
- [ ] **Contact Form Integration**: Connect the current static booking form to a backend script (e.g. PHP Mailer, Node.js API, or Telegram Bot API) to capture actual user requests.
- [ ] **Analytics Tracking**: Install Yandex.Metrika or Google Analytics tags for traffic monitoring.

### Phase 4: Performance & Polish
- [ ] **Minification**: Introduce a build step to minify HTML, CSS, and JS before deploying to the VPS.
- [ ] **CDN / Caching**: Set up Cloudflare or Nginx aggressive caching rules for static assets.
- [ ] **Blog SEO Restructuring**: Convert the dynamically JS-rendered `blog.html` into individual static HTML pages for each article to improve search engine indexing and provide unique URLs for sharing.
