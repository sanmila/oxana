# Version History & Development Roadmap
Project: Oksana Ivanova - Psychologist Portfolio
Repository: https://github.com/sanmila/oxana
Live Preview: http://preview-oxana.sanjay.ru

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
- [ ] **Technical SEO**: Generate and upload `sitemap.xml` and `robots.txt` for search engine indexing.
- [ ] **Meta Updates**: Add distinct meta titles and descriptions dynamically depending on the selected language (JS meta update loop).
- [ ] **Structured Data**: Implement JSON-LD schema markup (LocalBusiness or MedicalBusiness) to improve rich results in Google.

### Phase 3: Functionality & Analytics
- [ ] **Contact Form Integration**: Connect the current static booking form to a backend script (e.g. PHP Mailer, Node.js API, or Telegram Bot API) to capture actual user requests.
- [ ] **Analytics Tracking**: Install Yandex.Metrika or Google Analytics tags for traffic monitoring.

### Phase 4: Performance & Polish
- [ ] **Minification**: Introduce a build step to minify HTML, CSS, and JS before deploying to the VPS.
- [ ] **CDN / Caching**: Set up Cloudflare or Nginx aggressive caching rules for static assets.
