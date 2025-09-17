
# Linkly

> Full-stack URL shortener with custom domain support, real-time analytics, secure redirection.  
> Deployed on **Render** (backend), **Netlify** (frontend with custom domain), and **Neon** (PostgreSQL).

---

## 🚀 Features

- 🔗 Shorten long URLs with unique short codes  
- 🌐 Custom domain support for branded links  
- 📊 Real-time analytics: click count, referrer, device, location  
- 🔒 Secure redirection (sanitized URLs, no open redirects)  
- ☁️ Deployed on cloud platforms (Render, Netlify, Neon)  

---

## 🏗️ System Design & Architecture

### Components

- **Frontend (React)** → User dashboard to create/manage links & view analytics  
- **Backend API (Node.js/Express)** → URL creation, validation, redirection, analytics logging  
- **Database (PostgreSQL @ Neon)** → Stores mappings, users, analytics  
- **Deployment** → Render (backend), Netlify (frontend), Neon (DB)

### Data Models

**ShortLink**
- `id`, `user_id`, `short_code`, `target_url`, `custom_domain`, `created_at`, `is_active`

**ClickAnalytics**
- `id`, `short_link_id`, `timestamp`, `ip`, `referrer`, `device`, `browser`

### Flow

1. User enters a long URL → API validates & generates short code → stored in DB  
2. Short URL served via app/custom domain  
3. On click → API logs analytics (async) → redirects to target  

### Performance Optimizations

- Redis cache for hot URLs  
- Async logging with queue for analytics  
- CDN/edge routing for faster redirects  
- Fail-safe: redirects still work if analytics store is down  

---

## 📂 Project Structure

```

Linkly/
├── url-shortener-react/   # Frontend (React app)
├── url-shortener-sb/      # Storybook / UI components
├── .gitignore
└── README.md

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18  
- PostgreSQL (or Neon DB)  
- npm or yarn

### Installation

```bash
git clone https://github.com/Saransh1524/Linkly.git
cd Linkly
````

**Frontend**

```bash
cd url-shortener-react
npm install
npm start
```

**Backend**

```bash
cd api   # (if backend folder exists)
npm install
npm run dev
```

### Environment Variables

Create `.env`:

```
DATABASE_URL=postgres://user:pass@host:port/db
DOMAIN=yourdomain.com
SECRET_KEY=your_secret
PORT=4000
```

---

## 🌍 Deployment

* **Frontend (Netlify)**: Connect `url-shortener-react` → set custom domain → enable HTTPS
* **Backend (Render)**: Deploy API server → set environment variables
* **Database (Neon)**: Create Postgres DB → update `DATABASE_URL`

---

## 🔐 Security

* Input validation & sanitization
* HTTPS enforced for all domains
* Rate limiting (prevent abuse)
* Prevent open redirect vulnerabilities

---

## 📈 Analytics & Monitoring

* Track clicks, unique visitors, device/browser, referrers
* Dashboards for users
* Logs & error monitoring for admins

---

## ⚖️ Trade-offs & Challenges

* **Short code collisions** → resolved via base62 + uniqueness check
* **Analytics vs latency** → async logging used to keep redirects fast
* **Custom domains** → requires SSL/TLS management and DNS setup

---

## 🛠️ Future Enhancements

* Expiry & password-protected links
* Advanced analytics (geo heatmaps, trends)
* API SDKs & integrations
* Edge-based redirection (Cloudflare Workers / Vercel Edge)

---

## 🤝 Contributing

1. Fork the repo
2. Create branch: `git checkout -b feature/YourFeature`
3. Commit changes & push
4. Open PR

---

## 📜 License

MIT License – see [LICENSE](LICENSE).

---

## 👤 Author

**Saransh Naole**

* GitHub: [@Saransh1524](https://github.com/Saransh1524)
