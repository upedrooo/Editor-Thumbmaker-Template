# 🎬 Video Editor & Thumbmaker Portfolio Template

A clean, straightforward portfolio webpage built for video editors and thumbnail designers to showcase their work. Made with pure **HTML, CSS, and JavaScript** — no frameworks, no dependencies, and no build step. Just open and customize.

## ✨ Features

- **Loading screen** featuring a spinning 3D cube that slides up to reveal the page.
- **Profile section**: photo, name, and short bio.
- **Portfolio** organized into three categories:
  - **Long Videos** — 4 horizontal (16:9) YouTube videos.
  - **Shorts** — 4 vertical (9:16) YouTube Shorts.
  - **Thumbnails** — 4 showcase images.
- **On-demand video embeds**: the page displays only a cover image and play button until clicked, loading the YouTube iframe lazily so the page stays fast and lightweight.
- **"Commissions: ON" badge** showing whether you are open for work.
- **Contact section** with icon links for Instagram, X (Twitter), LinkedIn, and email.
- **Scroll reveal animations** as visitors scroll down the page.
- **Responsive design**: dedicated mobile layout and mobile background image.

## 📁 Project Structure

```
Editor-Thumbmaker-Template/
├── index.html      → Page content (copy, videos, links)
├── style.css       → Styling (colors, fonts, layout, animations)
├── script.js       → Behavior (preloader, scroll animations, YouTube player)
├── favicon.ico     → Browser tab icon
├── fonts/          → Custom fonts used on the site
└── media/          → Images: profile photo, backgrounds, video covers, and thumbnails
```

## 🚀 Getting Started

1. **Download the project**: click **Code → Download ZIP** here on GitHub and extract the folder (or run `git clone`).
2. **Open `index.html`** in your browser.

> **⚠️ Important tip:** some browsers block or throw errors on YouTube embeds when opening a page directly from disk (`file://`). If videos fail to play, serve the folder over a local server:
> - In **VS Code**, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**; or
> - With Python installed, open a terminal in the project folder, run `python -m http.server 8000`, and visit `http://localhost:8000`.

## 🛠️ How to Customize

All customization lives in three places: `index.html` (content), the `media/` folder (images), and `style.css` (look and feel). You don't need to touch `script.js` for typical use.

### 1. Profile (photo, name, and bio)

In `index.html`, find the `<!-- SECTION: PROFILE -->` block:

```html
<img src="media/profile.jpg" alt="Profile Photo" class="profile-photo">
<h1 class="name">Your Name</h1>
<p class="description">
    Your bio goes here,<br>
    use &lt;br&gt; for line breaks.
</p>
```

- To swap the photo, replace `media/profile.jpg` with your own image **using the same filename**, or update the `src` attribute.
- Use a **square** image for best results (it is cropped into a circle).

### 2. Long Videos and Shorts

Videos are embedded from **YouTube** using each video's **ID** — the code at the end of the URL:

```
https://www.youtube.com/watch?v=SZKalHAfhU4
                                └── this is the ID
```

For Shorts (`https://www.youtube.com/shorts/BBjZoYEQxRo`), the ID is the code after `/shorts/`.

In `index.html`, each video uses this markup:

```html
<div class="video-card">
    <button type="button" class="video-overlay" data-video-id="SZKalHAfhU4" aria-label="Play long video 1">
        <img src="media/long1.jpg" alt="" loading="lazy" decoding="async">
        <span class="play-btn-outline" aria-hidden="true"></span>
    </button>
    <div class="iframe-container"></div>
</div>
```

To replace a video, change **two things**:

1. The ID inside `data-video-id="..."`.
2. The cover image (`src="media/long1.jpg"`) — replace the file in `media/` or point to a new one.

`script.js` handles everything else automatically: any button with `data-video-id` loads the YouTube player on click.

Shorts work the exact same way (`short-card` blocks using `short1` through `short4`).

**Adding more videos:** duplicate an entire `video-card` or `short-card` block inside the same grid. Long videos render in 2 columns and Shorts in 4 columns (1 column on mobile).

**Removing a video:** delete its card block.

> 💡 About cover images: you can use the YouTube thumbnail itself or a custom graphic. Use 16:9 images for long videos and 9:16 for Shorts — they are automatically cropped to fill the card.

### 3. Thumbnails

Under `<!-- THUMBNAILS -->`, each thumbnail is a simple image card:

```html
<div class="thumb-card"><img src="media/thumb1.png" alt="Thumbnail 1"></div>
```

Replace `thumb1.png` through `thumb4.png` in `media/` with your own work, or add/remove lines to change the count.

### 4. Contact & Social Links

In `<!-- SECTION: CONTACT -->`, update the links on each icon:

```html
<a href="https://www.instagram.com/YOUR_HANDLE" target="_blank" aria-label="Instagram">
<a href="https://x.com/YOUR_HANDLE" target="_blank" aria-label="X">
<a href="https://www.linkedin.com/in/YOUR_PROFILE/" target="_blank" aria-label="LinkedIn">
<a href="mailto:you@example.com" aria-label="Email">
```

To remove a platform, delete its entire `<a>...</a>` block (including the `<svg>`).

### 5. "Commissions" Badge

To indicate that you are **not** currently taking work, change `COMMISSIONS: ON` to `COMMISSIONS: OFF` in `index.html`. You can also adjust the status dot color in `style.css` under `.dot` (green is `#27ae60`, via `--green`).

### 6. Copy, Tab Title, and Footer

In `index.html`:

- **Browser tab title:** update `<title>Video Editing Portfolio</title>` in `<head>`.
- **Section headings & CTA:** `PORTFOLIO`, `LONG VIDEOS`, `SHORTS`, `THUMBNAILS`, `LET'S WORK TOGETHER!`, etc. — edit directly in the HTML.
- **Footer:** at the bottom of the file, update the copyright notice and **remove or replace the `A FALL Studios® Creation` line**, which credits the original creator.

### 7. Colors

The main palette lives in CSS variables at the top of `style.css`:

```css
:root {
    --bg-color: #050505;    /* dark background (and preloader) */
    --text-color: #ffffff;  /* primary text color */
    --text-muted: #c4c4c4;  /* secondary text color */
    --accent-color: #ffffff;/* borders and accents */
}
```

Updating these variables updates the whole site.

### 8. Background Image

- **Desktop:** replace `media/bg.jpeg`.
- **Mobile:** replace `media/bg-mobile.jpeg` (used on screens up to 768px wide).

To darken or lighten the background overlay, tweak the opacity in `style.css` under `.bg-fixed::after`:

```css
background-color: rgba(0, 0, 0, 0.4); /* 0.6 = darker | 0.2 = lighter */
```

### 9. Fonts

Fonts live in `fonts/` and are loaded via `@font-face` rules at the top of `style.css`. The active typeface across the page is **Providence**. `ACRealAdult` and `Network` are declared as extras but unused by default.

To switch fonts, drop your `.ttf` file into `fonts/`, declare it with `@font-face`, and update `font-family` on `body`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### 10. Preloader Duration

At the top of `script.js`, `PRELOADER_DELAY` (in milliseconds) controls how long the cube spins before revealing the page:

```js
const PRELOADER_DELAY = 1500;
```

Lower it for a snappier entry or raise it for a longer intro. To remove the preloader altogether, delete `<div id="preloader">...</div>` from `index.html`.

## 🌐 Deploying Your Site (GitHub Pages)

Once customized, you can host the portfolio for free:

1. Push the project files to your own GitHub repository (with `index.html` at the root).
2. Open **Settings → Pages** in your repository.
3. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and click **Save**.
4. Wait a few minutes: your site will go live at `https://your-username.github.io/your-repo-name/`.

Other free static hosts that work out of the box: **Netlify**, **Vercel**, and **Cloudflare Pages**.

## ⚠️ Before Publishing as Your Own

This template ships with the author's sample content. Before going live, **replace all personal assets and details**:

- Name, bio, profile photo, and contact links (Instagram, X, LinkedIn, email);
- YouTube video IDs, cover images, and thumbnails;
- Copyright line and studio credit in the footer;
- Background images, if you prefer your own.

The **fonts** in `fonts/` may carry their own licenses (some free versions restrict commercial use). Check each font's license before using it commercially.

## 🧰 Built With

- HTML5
- CSS3 (Grid, Flexbox, animations, and custom properties)
- Vanilla JavaScript (Intersection Observer for scroll reveal animations)
- YouTube Embed (lazy-loaded iframe on click)

---

## Connect With Me

<p align="left">
  <a href="https://pedrosilva.space" target="_blank">
    <img src="https://img.shields.io/badge/-pedrosilva.space-333333?style=flat&logo=google-chrome&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/pedro-lucas-silva-6b1678358/" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://x.com/pfiuzzzz" target="_blank">
    <img src="https://img.shields.io/badge/-X-000000?style=flat&logo=x&logoColor=white" alt="X" />
  </a>
  <a href="https://www.instagram.com/pfiuz" target="_blank">
    <img src="https://img.shields.io/badge/-Instagram-E4405F?style=flat&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
  <a href="mailto:contato@upedrooo.dev">
    <img src="https://img.shields.io/badge/-pedrol09872@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
