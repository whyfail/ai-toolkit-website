const sourceUrl =
  process.env.CHANGELOG_SOURCE_URL ||
  'https://raw.githubusercontent.com/whyfail/AI-Toolkit/main/CHANGELOG.md'

const response = await fetch(sourceUrl, {
  headers: {
    'User-Agent': 'ai-toolkit-website-build'
  }
})

if (!response.ok) {
  throw new Error(`Failed to fetch changelog: ${response.status} ${response.statusText}`)
}

let changelog = await response.text()
changelog = changelog.replace(/^\uFEFF/, '').trim()
changelog = changelog.replace(/^---[\s\S]*?---\s*/, '').trim()

const body = changelog.replace(/^#\s+Changelog\s*/i, '').trimStart()

const page = `---
pageClass: product-doc release-doc
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Changelog

<!-- Generated from ${sourceUrl}. Keep page chrome here; edit release notes in AI-Toolkit/CHANGELOG.md. -->

<section class="release-gallery">
  <div>
    <p class="section-label">v1.5.0 visual refresh</p>
    <h2>全新 Glassmorphism 界面预览</h2>
    <p>AI Toolkit v1.5.0 对工具管理、MCP 服务器、Skills 管理、设置、关于、弹窗和侧边栏做了统一视觉升级。下方配图使用当前源仓库最新截图。</p>
  </div>
  <div class="image-pair">
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/main-panel.png')" alt="AI Toolkit 全新样式主界面" width="1410" height="800" loading="lazy">
      <figcaption>主界面升级为浅色玻璃拟态风格，工具卡片、侧边栏和状态展示更统一。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/mcp-panel.png')" alt="AI Toolkit MCP 服务器管理新样式界面" width="1410" height="800" loading="lazy">
      <figcaption>MCP 服务器页展示搜索、统计标签和服务卡片，新版留白与阴影更柔和。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/skills-panel.png')" alt="AI Toolkit Skills 管理新样式界面" width="1410" height="800" loading="lazy">
      <figcaption>Skills 管理页展示批量同步状态、导入和添加技能入口。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/add-server.png')" alt="AI Toolkit 添加 MCP 服务器新样式界面" width="1410" height="800" loading="lazy">
      <figcaption>MCP 添加弹窗保留 JSON 粘贴、目标工具选择和连接测试流程。</figcaption>
    </figure>
  </div>
</section>

${body}
`

await import('node:fs/promises').then(({ writeFile }) => writeFile('change.md', page))
