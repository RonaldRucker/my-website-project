# JavaScript API Reference

All scripts are inline within `index.html` and `projects.html`. Functions declared at the top level are accessible via `window`.

## Global functions (index.html)

### updateCarousel()
- Purpose: Syncs the carousel UI with the current slide index.
- Parameters: none
- Returns: void
- Side effects:
  - Translates `#carouselTrack` via CSS transform
  - Toggles `.active` on `.dot` indicators and `.carousel-slide`
- Usage:
```html
<script>
  // after updating `currentSlide`, call:
  updateCarousel();
</script>
```

### nextSlide()
- Purpose: Advance to the next slide (wraps around at the end)
- Parameters: none
- Returns: void
- Usage:
```html
<button onclick="nextSlide()">Next</button>
```

### prevSlide()
- Purpose: Go to the previous slide (wraps around at the beginning)
- Parameters: none
- Returns: void
- Usage:
```html
<button onclick="prevSlide()">Prev</button>
```

### toggleMobileMenu()
- Purpose: Toggle the mobile navigation panel and page overlay; locks body scroll while open
- Parameters: none
- Returns: void
- Depends on: `#mobileNav`, `#overlay`
- Usage:
```html
<button id="menuToggle" onclick="toggleMobileMenu()">Menu</button>
```

## Event-driven behaviors (index.html)

- Smooth scrolling for in-page anchors (`a[href^="#"]`)
  - Clicking any in-page link scrolls smoothly and closes the mobile menu if open.
  - Usage: simply use anchor links like `<a href="#projects">Projects</a>`.

- Header styling on scroll
  - When `window.scrollY > 100`, the header background becomes more opaque and a shadow is applied.

- Carousel controls
  - Click `#nextBtn` → `nextSlide()`
  - Click `#prevBtn` → `prevSlide()`
  - Click a `.dot[data-slide]` → jump to that slide
  - Keyboard: `ArrowLeft` → previous, `ArrowRight` → next
  - Auto-play: `setInterval(nextSlide, 10000)` advances every 10 seconds

Example: disable auto-play
```html
<script>
  // Replace the interval with no-op by clearing it or commenting it out in the source.
  // Alternatively, wrap in a flag:
  const enableAutoplay = false;
  if (enableAutoplay) {
    setInterval(nextSlide, 10000);
  }
</script>
```

Example: change auto-play interval to 5s
```html
<script>
  setInterval(nextSlide, 5000);
</script>
```

## Projects page behaviors (projects.html)

- Filter buttons (`.filter-btn[data-filter]`)
  - Clicking a filter toggles the `active` class on the button and applies/removes `.hidden` on cards based on matching `data-category` against the selected `data-filter`.

Programmatically set a filter (simulate click):
```html
<script>
  // Select a filter button and dispatch a click
  const apiFilterBtn = document.querySelector('.filter-btn[data-filter="api"]');
  apiFilterBtn?.click();
</script>
```

- IntersectionObserver powered reveal animations
  - Options:
    - `threshold: 0.1`
    - `rootMargin: '0px 0px -50px 0px'`
  - Each `.project-card` starts with `opacity: 0` and a lowered transform; when observed, styles transition to visible.

Customize intersection behavior:
```html
<script>
  const observerOptions = { threshold: 0.25, rootMargin: '0px 0px -20px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
</script>
```

## DOM Contracts (required IDs/classes)

- Carousel: `#carouselTrack`, `.carousel-slide`, `.dot[data-slide]`, `#prevBtn`, `#nextBtn`
- Mobile menu: `#hamburger`, `#mobileNav`, `#overlay`
- Filters: `.filter-btn[data-filter]`, `.project-card[data-category]`, `.hidden`