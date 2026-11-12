import { writeFileSync } from 'node:fs'
import { defineConfig, type UserConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'
// Absolute origin used for canonical, sitemap and social preview URLs.
const siteUrl = 'https://whyfail.github.io'

// VitePress's built-in sitemap depends on an optional dependency that is not
// reliably present in CI, so write sitemap.xml ourselves.
const writeSitemap: UserConfig['buildEnd'] = (site) => {
  const urls = site.pages
    .filter((page) => !page.endsWith('404.md'))
    .map((page) =>
      `${siteUrl}${base}${page.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}`
    )
  const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')
  writeFileSync(
    `${site.outDir}/sitemap.xml`,
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
  )
}

export default defineConfig({
  title: 'AI Toolkit',
  description: '四大平台积分自动领取，本地模型代理一站接入；统一管理 AI 编程工具的 MCP、Skills、平台积分与模型代理',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  buildEnd: writeSitemap,
  // Maintainer docs stay in the repo but are not published as site pages.
  srcExclude: ['README.md', 'DESIGN.md'],
  // Docs follow the app: light by default, system-aware, with a manual toggle.
  appearance: true,
  transformHead({ pageData }) {
    // Google and Bing prefer an absolute canonical; a relative one is ignored.
    if (pageData.relativePath.endsWith('404.md')) return []
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')
    return [['link', { rel: 'canonical', href: `${siteUrl}${base}${path}` }]]
  },
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}icon-32.png` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}icon-180.png` }],
    ['meta', { name: 'theme-color', content: '#fbfbfd', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0c0e12', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'AI Toolkit' }],
    ['meta', { property: 'og:title', content: 'AI Toolkit — AI 编程工具统一控制台' }],
    ['meta', { property: 'og:description', content: '统一管理 25 款 AI 编程工具的 MCP Server、Skills 技能、平台积分与本地模型代理。' }],
    ['meta', { property: 'og:image', content: 'https://whyfail.github.io/ai-toolkit-website/icon-512.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large' }],
    ['link', { rel: 'alternate', type: 'text/markdown', href: `${base}llms.txt` }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AI Toolkit',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'macOS, Windows, Linux',
      description: '统一管理 AI 编程工具的 MCP、Skills、平台积分与本地模型代理。',
      url: `${siteUrl}${base}`,
      downloadUrl: `${siteUrl}${base}download`,
    })],
  ],
  markdown: {
    lineNumbers: false,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/icon-192.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '功能', link: '/features' },
      { text: '亮点', link: '/highlights' },
      { text: '更新日志', link: '/change' },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '下载与安装', link: '/download' },
        ],
      },
      {
        text: '产品',
        items: [
          { text: '功能总览', link: '/features' },
          { text: '设计亮点', link: '/highlights' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: '更新日志', link: '/change' },
          { text: '源码仓库', link: 'https://github.com/whyfail/AI-Toolkit' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '展开详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
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
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },
})
