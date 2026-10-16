import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'AI Toolkit',
  description: '统一管理 AI 编程工具的 MCP、Skills、平台积分与本地模型代理',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}icon-32.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}icon-180.png` }],
    ['meta', { name: 'theme-color', content: '#0b0c10' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'AI Toolkit' }],
    ['meta', { property: 'og:title', content: 'AI Toolkit — AI 编程工具统一控制台' }],
    ['meta', { property: 'og:description', content: '统一管理 24 款 AI 编程工具的 MCP Server、Skills 技能、平台积分与本地模型代理。' }],
    ['meta', { property: 'og:image', content: 'https://whyfail.github.io/ai-toolkit-website/icon-512.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '功能', link: '/features' },
      { text: '亮点', link: '/highlights' },
      { text: '更新文档', link: '/change' },
      { text: 'GitHub', link: 'https://github.com/whyfail/AI-Toolkit' },
    ],
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/whyfail/AI-Toolkit' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 whyfail',
    },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
  },
})
