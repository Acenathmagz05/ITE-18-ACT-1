import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // Keep the compatibilityDate line that already exists in YOUR nuxt.config.ts
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
