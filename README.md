<div align="center">

# Video Editor & Thumbmaker Portfolio Template

**A clean, zero-dependency portfolio template for video editors and thumbnail designers.**

Built with pure HTML, CSS, and JavaScript — no frameworks, no package installs, and no build step. Open, customize, and deploy.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Zero Dependencies](https://img.shields.io/badge/dependencies-none-2b7a4b)

</div>

---

## Features

- **3D cube preloader:** dark loading overlay with a spinning CSS 3D cube that slides up to reveal the page.
- **Profile header:** circular profile photo, name, and short bio.
- **Categorized portfolio:**
  - **Long Videos** — 4 horizontal (16:9) YouTube videos.
  - **Shorts** — 4 vertical (9:16) YouTube Shorts.
  - **Thumbnails** — 4 showcase cards.
- **On-demand YouTube embeds:** displays a static cover image and play button until clicked, loading the YouTube iframe lazily to keep initial page load fast.
- **Availability badge:** customizable `"COMMISSIONS: ON"` indicator with a pulsing status dot.
- **Contact section:** icon links for Instagram, X (Twitter), LinkedIn, and email.
- **Scroll reveal & accessibility:** Intersection Observer fade-in animations, `prefers-reduced-motion` support, keyboard focus handling, and a `<noscript>` fallback.
- **Responsive layout:** dedicated mobile grid and mobile background image (`<= 768px`).

## Project Structure

```
Editor-Thumbmaker-Template/
├── index.html      page markup (copy, video IDs, links)
├── style.css       design variables, layout, responsive rules, and animations
├── script.js       preloader timing, scroll observer, and lazy YouTube embed loader
├── favicon.ico     browser tab icon
├── fonts/          bundled fonts
└── media/          profile photo, desktop/mobile backgrounds, video covers, and thumbnails
```

## Getting Started

1. Download the repository (**Code → Download ZIP**) and extract it, or run `git clone`.
2. Open `index.html` in a browser.

> **Note:** some browsers restrict YouTube embeds when a page is opened directly via `file://`. If videos do not load locally, serve the directory with a local HTTP server:
> - In **VS Code**, install **Live Server**, right-click `index.html`, and select **Open with Live Server**; or
> - Run `python -m http.server 8000` in the project directory and open `http://localhost:8000`.

## Customization

All customization happens in `index.html` (content), `media/` (images), and `style.css` (styling). No changes to `script.js` are required for standard use.

### 1. Profile (Photo, Name, and Bio)

In `index.html`, locate `<!-- SECTION: PROFILE -->`:

```html
<img src="media/profile.jpg" alt="Profile Photo" class="profile-photo">
<h1 class="name">Your Name</h1>
<p class="description">
    Your bio goes here,<br>
    use &lt;br&gt; for line breaks.
</p>
```

- Replace `media/profile.jpg` with your own image using the same filename, or update the `src` attribute.
- Use a square image for the best crop inside the circular frame.

### 2. Long Videos and Shorts

Videos are embedded from **YouTube** using the video **ID** from the URL:

```
https://www.youtube.com/watch?v=SZKalHAfhU4
                                └── video ID
```

For Shorts (`https://www.youtube.com/shorts/BBjZoYEQxRo`), the ID is the segment after `/shorts/`.

Each video card in `index.html` follows this structure:

```html
<div class="video-card">
    <button type="button" class="video-overlay" data-video-id="SZKalHAfhU4" aria-label="Play long video 1">
        <img src="media/long1.jpg" alt="" loading="lazy" decoding="async">
        <span class="play-btn-outline" aria-hidden="true"></span>
    </button>
    <div class="iframe-container"></div>
</div>
```

To swap a video, update two values:

1. `data-video-id="..."` with your YouTube video ID.
2. `src="media/long1.jpg"` (or replace the corresponding image in `media/`).

`script.js` automatically binds any button with `data-video-id` to load the YouTube player on click. Shorts use the same pattern via `short-card` blocks (`short1` through `short4`).

- **Add more videos:** duplicate a `video-card` or `short-card` block inside the same grid (2 columns for long videos, 4 columns for Shorts; 1 column on mobile).
- **Remove a video:** delete the corresponding card block.

> **Tip:** use 16:9 covers for long videos and 9:16 covers for Shorts. Images are automatically cropped with `object-fit: cover`.

### 3. Thumbnails

Under `<!-- THUMBNAILS -->`, each item is an image card:

```html
<div class="thumb-card"><img src="media/thumb1.png" alt="Thumbnail 1"></div>
```

Replace `thumb1.png` through `thumb4.png` in `media/`, or add/remove `thumb-card` elements as needed.

### 4. Contact and Social Links

In `<!-- SECTION: CONTACT -->`, replace the URLs on each anchor:

```html
<a href="https://www.instagram.com/YOUR_HANDLE" target="_blank" aria-label="Instagram">
<a href="https://x.com/YOUR_HANDLE" target="_blank" aria-label="X">
<a href="https://www.linkedin.com/in/YOUR_PROFILE/" target="_blank" aria-label="LinkedIn">
<a href="mailto:you@example.com" target="_blank" aria-label="Email">
```

To remove a platform, delete its entire `<a>...</a>` block (including the inline `<svg>`).

### 5. Commissions Badge

To mark commissions as closed, change `COMMISSIONS: ON` to `COMMISSIONS: OFF` in `index.html`. You can also update the indicator color in `style.css` via the `--green` variable (default `#27ae60`) or `.dot`.

### 6. Copy, Page Title, and Footer

In `index.html`:

- **Browser tab title:** edit `<title>Video Editing Portfolio</title>` inside `<head>`.
- **Headings & call to action:** edit `PORTFOLIO`, `LONG VIDEOS`, `SHORTS`, `THUMBNAILS`, and `LET'S WORK TOGETHER!` directly.
- **Footer:** update the copyright line and remove or replace `A FALL Studios® Creation`.

### 7. Colors

Theme tokens are defined at the top of `style.css`:

```css
:root {
    --bg-color: #050505;     /* dark background & preloader */
    --text-color: #ffffff;   /* primary text */
    --text-muted: #c4c4c4;   /* secondary text */
    --accent-color: #ffffff; /* borders and accents */
}
```

### 8. Background Images

- **Desktop:** replace `media/bg.jpeg`.
- **Mobile (`<= 768px`):** replace `media/bg-mobile.jpeg`.

To adjust background overlay darkness, change the alpha value in `style.css` under `.bg-fixed::after`:

```css
background-color: rgba(0, 0, 0, 0.4); /* 0.6 = darker | 0.2 = lighter */
```

### 9. Fonts

Fonts live in `fonts/` and are declared with `@font-face` at the top of `style.css`. The default typeface is **Providence** (`ACRealAdult` and `Network` are included as unused extras).

To use a different font, place the `.ttf` file in `fonts/`, add a `@font-face` rule, and update `font-family` on `body`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### 10. Preloader Timing

At the top of `script.js`, `PRELOADER_DELAY` (in milliseconds) sets how long the preloader stays visible:

```js
const PRELOADER_DELAY = 1500;
```

Adjust the value as desired, or remove `<div id="preloader">...</div>` from `index.html` to disable the preloader completely.

## Deployment (GitHub Pages)

1. Push the repository to your GitHub account with `index.html` at the root.
2. Open **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
4. Once built, your site will be available at `https://your-username.github.io/your-repo-name/`.

The template also deploys cleanly as a static site on **Netlify**, **Vercel**, or **Cloudflare Pages**.

## Before Publishing

This repository contains the author's sample content. Before deploying as your own portfolio, replace:

- Name, bio, profile photo, and social/email links;
- YouTube video IDs, video cover images, and thumbnails;
- Footer copyright notice and studio credit;
- Background images, if desired.

Check the individual licenses of the fonts in `fonts/` before commercial use, as some free font builds restrict commercial redistribution.

## Tech Stack

- **Markup:** semantic HTML5 with ARIA labels and `<noscript>` fallback
- **Styling:** CSS3 (Grid, Flexbox, custom properties, keyframe animations, `prefers-reduced-motion`)
- **Behavior:** vanilla JavaScript (Intersection Observer, click-to-load YouTube embeds)

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
