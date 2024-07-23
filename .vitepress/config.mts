import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Heaven",
  description: "Discover the best AI tools and resources",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {text: '🌍 Websites', link: '/Websites.md'},
      {text: '📚 Books', link: '/Books.md'},
      {text: '🖥️ Desktop Apps', link: '/DesktopApps.md'},
      {text: '📱 Mobile Apps', link: '/MobileApps.md'},
      {text: '🎬 Movies', link: '/Movies.md'},
      {text: '💻 Programming Libraries', link: '/ProgrammingLibraries.md'},
      {text: '📊 Benchmarks', link: '/Benchmarks.md'},
      {text: '💼 Careers', link: '/Careers.md'},
      {text: '📈 DataSets', link: '/DataSets.md'},
      {text: '📈 Models', link: '/Models.md'},
      {text: '📊 Algorithms', link: '/Algorithms.md'},
      {text: '🚀 Startups', link: '/Startups.md'},
      {text: '🛠️ Platforms', link: '/Platforms.md'},
      {text: '🔍 Productivity', link: '/Productivity.md'},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiheaven' }
    ]
  }
})
