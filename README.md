# Ray Elkins — Personal Portfolio Website

This is a Vite-powered Vanilla HTML/CSS/JS implementation of the Ray Elkins Personal Portfolio according to PRD v1.3.

## Blog Activation (v1.1)

The site is built with a blog-ready architecture (Feature F-10). To activate the writing section when content is ready:

1. **Uncomment Navigation Link:**
   In `index.html`, locate the Desktop navigation links and uncomment:
   `<!-- <a href="#writing" class="nav-link">Writing</a> -->`
   *(Do the same in the Mobile Menu block.)*

2. **Uncomment Section Stub:**
   In `index.html`, locate the `BLOG SECTION` comment and uncomment the `<section id="writing">` block.

3. **Populate Content & Styles:**
   The base class `.section--writing` is ready in `style.css`. Feed your markdown or static content into the `.container` block.

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Build for production
npm run build
```
