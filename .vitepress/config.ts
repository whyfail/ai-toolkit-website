import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: 'AI Toolkit',
  description: '通用 MCP Server 与 Skills 管理工具',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}icon.png` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}icon.png` }],
    ['meta', { name: 'theme-color', content: '#0f766e' }],
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
