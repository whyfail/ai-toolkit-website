import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Toolkit',
  description: '通用 MCP Server 与 Skills 管理工具',
  lang: 'zh-CN',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
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
