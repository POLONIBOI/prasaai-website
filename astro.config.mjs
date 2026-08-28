import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prasaai.co.za',
  output: 'static',
  // 'directory' emits /about/index.html, which every static host serves at
  // /about with no host-specific config. (The old 'file' format emitted
  // /about.html and relied on an Nginx `try_files $uri $uri.html` rule that
  // lived only on the server — if that rule was missing, every internal link
  // 404'd while the homepage still looked fine.)
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
