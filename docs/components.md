# Components and Markup Contracts

This site is built with semantic HTML and CSS. Interactivity depends on specific classes/IDs in the markup. Keep these contracts intact when customizing.

### Header and Navigation (Desktop/Mobile)

- Key elements:
  - `header > nav.container`
  - Desktop links: `.nav-links`
  - Mobile toggle: `#hamburger`
  - Mobile menu: `#mobileNav`
  - Overlay backdrop: `#overlay`

Example:
```html
<header>
  <nav class="container">
    <div class="logo"><a href="#home">Ronnie Rucker</a></div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </nav>
</header>
<ul class="mobile-nav" id="mobileNav"> ... </ul>
<div class="overlay" id="overlay"></div>
```

- Behavior:
  - Clicking `#hamburger` toggles the mobile menu by adding/removing `open` on `#mobileNav` and `active` on `#overlay` and locks body scroll.

### Hero

- Section: `#home.hero`
- Content container: `.hero-content`
- CTA: `.cta-button`

### Skills Grid

- Section: `#skills.skills`
- Grid: `.skills-grid`
- Card: `.skill-card`

Example card:
```html
<div class="skill-card">
  <div class="skill-icon">🌐</div>
  <h3>Frontend Development</h3>
  <p>Python, React, JavaScript, TypeScript, HTML5, CSS3</p>
</div>
```

### Projects Carousel (Home page)

- Section: `#projects.projects`
- Container: `.carousel-container`
- Wrapper: `.carousel-wrapper`
- Track: `#carouselTrack.carousel-track`
- Slide: `.carousel-slide`
- Dots: `.dot[data-slide]`
- Controls: `#prevBtn.carousel-btn.prev`, `#nextBtn.carousel-btn.next`

Required structure:
```html
<div class="carousel-container">
  <div class="carousel-wrapper">
    <div class="carousel-track" id="carouselTrack">
      <div class="carousel-slide active"> ... </div>
      <div class="carousel-slide"> ... </div>
      <div class="carousel-slide"> ... </div>
    </div>
  </div>
  <button class="carousel-btn prev" id="prevBtn">❮</button>
  <button class="carousel-btn next" id="nextBtn">❯</button>
  <div class="carousel-dots">
    <span class="dot active" data-slide="0"></span>
    <span class="dot" data-slide="1"></span>
    <span class="dot" data-slide="2"></span>
  </div>
</div>
```

Notes:
- Each `.carousel-slide` is 100% width of the track viewport; the script translates the track by `-currentSlide * 100%`.
- Ensure the number of `.dot` elements matches the number of slides and uses `data-slide` starting from 0.

### Projects Gallery and Filters (`projects.html`)

- Filter buttons: `.filter-btn[data-filter]` where `data-filter` is one of `all`, `web`, `mobile`, `api`, `design` (or your custom values)
- Project cards: `.project-card[data-category]`
- Hidden state: `.hidden` is applied/removed by the filter logic

Example filter + card:
```html
<div class="filter-container">
  <button class="filter-btn active" data-filter="all">All Projects</button>
  <button class="filter-btn" data-filter="web">Web Apps</button>
  <button class="filter-btn" data-filter="api">APIs</button>
</div>

<div class="projects-grid">
  <div class="project-card" data-category="web">
    <div class="project-image">🚀<div class="project-status">Live</div></div>
    <div class="project-content">
      <h3>Project Name</h3>
      <p>Short description...</p>
      <div class="project-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
      </div>
    </div>
  </div>
</div>
```

### Contact & Social Links

- Section: `#contact.contact`
- Social container: `.social-links`
- Social item: `.social-link.github|.twitter|.instagram` with accessible labels

### Footer

- Simple footer with copyright

---

Accessibility notes:
- Use `aria-label` on interactive icons and provide discernible link text.
- Maintain keyboard access to carousel controls and filter buttons (they are `<button>` elements in the provided markup).