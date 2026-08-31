# Documentation

This repository contains the source for a static personal website with lightweight, framework-free JavaScript for interactivity.

- `index.html`: Home page (hero, about, skills, projects carousel, contact, mobile navigation)
- `projects.html`: Projects gallery with category filters and scroll-in animations
- `images/`: Static assets

Use the documents below to understand the public components, DOM contracts, and JavaScript APIs.

## Quick links

- Components and markup contracts: `docs/components.md`
- JavaScript API reference: `docs/js-api.md`
- Usage and customization guides: `docs/usage.md`

## What’s considered “public” here?

- Any globally accessible function declared in inline scripts (e.g., `nextSlide`, `prevSlide`, `toggleMobileMenu`)
- Markup and class/ID contracts that script logic relies on (e.g., `#carouselTrack`, `.carousel-slide`, `.filter-btn[data-filter]`, `.project-card[data-category]`)

## Contributing

Edits are welcome. Keep markup contracts and IDs consistent with the documented expectations in order not to break existing behavior.