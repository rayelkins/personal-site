import { defineConfig } from 'vite'

export default defineConfig({
    // This ensures all asset paths are relative so the site can be opened
    // simply by double-clicking index.html directly from a computer folder
    // without needing to run a web server. Perfect for emailing ZIP files!
    base: './',
})
