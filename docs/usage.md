# Usage and Customization

## Running locally

- Open `index.html` directly in a browser, or
- Use a static server for better routing and reloads (e.g., VS Code Live Server extension). A `.vscode/settings.json` is included for convenience.

## Adding a new carousel slide (index.html)

1. Duplicate a `.carousel-slide` block inside `#carouselTrack` and edit its contents.
2. Add a corresponding `.dot` with the next `data-slide` index.
3. No code changes are required; the script reads slides/dots at runtime.

Example slide:
```html
<div class="carousel-slide">
  <div class="project-showcase">
    <div class="project-image">🧠</div>
    <div class="project-info">
      <h3>New Experience</h3>
      <p>Describe the new slide here...</p>
      <div class="project-tech">
        <span class="tech-tag">HTML</span>
        <span class="tech-tag">CSS</span>
      </div>
    </div>
  </div>
</div>
```

## Adjusting carousel behavior

- Auto-play interval: change `setInterval(nextSlide, 10000)` to your desired duration (milliseconds)
- Disable auto-play: remove or guard the `setInterval(...)` call
- Programmatic control: call `nextSlide()` / `prevSlide()` or set `currentSlide` and call `updateCarousel()`

## Adding a new project card and filter (projects.html)

1. Create a new `.project-card` and set `data-category` to your category (e.g., `ml`).
2. Add a new `.filter-btn` with `data-filter="ml"` so users can filter to that category.

Example card:
```html
<div class="project-card" data-category="ml">
  <div class="project-image">🤖<div class="project-status">Live</div></div>
  <div class="project-content">
    <h3>Model Explorer</h3>
    <p>Browse and compare models and metrics.</p>
    <div class="project-tech">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">FastAPI</span>
    </div>
  </div>
</div>
```

## Editing mobile navigation

- Keep `#hamburger`, `#mobileNav`, and `#overlay` element IDs intact
- Call `toggleMobileMenu()` to open/close programmatically if needed

## Smooth scrolling links

- Any anchor link with `href="#sectionId"` will animate to that section.
- Ensure the target section exists (e.g., `<section id="contact">`).

## Assets

- Images live in `images/` and are referenced relatively (e.g., `./images/background.png`). Optimize large images for faster loads.

## Deployment

- This is a static site; you can deploy on any static host (e.g., GitHub Pages, Netlify, Vercel, S3/CloudFront).
- Ensure the custom domain (via `CNAME`) is correctly configured if using GitHub Pages.