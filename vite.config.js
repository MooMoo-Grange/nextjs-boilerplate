// This config prevents the Vite crash loop in the sandbox environment.
// The actual app runs on Next.js (see package.json scripts).
export default {
  server: {
    open: false,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
};
