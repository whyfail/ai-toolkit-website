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

const body = changelog
  .replace(/^#\s+Changelog\s*/i, '')
  .trimStart()
  .replace(/\]\((docs\/[^)\s]+)\)/g, (_, path) => `](https://github.com/whyfail/AI-Toolkit/blob/main/${path})`)

const latestVersion = body.match(/^##\s+(v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?)/m)?.[1]
if (!latestVersion) {
  throw new Error('Changelog does not contain a release version')
}

const page = `---
pageClass: product-doc release-doc
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 更新日志

<!-- Generated from ${sourceUrl}. Keep page chrome here; edit release notes in AI-Toolkit/CHANGELOG.md. -->

<section class="release-gallery">
  <div>
    <p class="section-label">${latestVersion} release notes</p>
    <h2>Skills、MCP 与积分代理，集中在同一个桌面工作台</h2>
    <p>当前版本 ${latestVersion}，提供 Skills 管理、MCP 服务器、积分与代理、设置、关于五个面板。以下配图保留 2026-10-15 从 macOS v2.0.0 实际窗口截取的界面，昵称、账号 ID 等敏感信息已打码；积分和模型状态是当时的账户快照。</p>
  </div>
  <div class="image-pair">
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/main-panel.webp')" alt="AI Toolkit Skills 管理主界面" width="1800" height="1200" loading="lazy">
      <figcaption>Skills 管理页展示来源筛选、批量同步与目标工具状态。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/mcp-panel.webp')" alt="AI Toolkit MCP 服务器管理界面" width="1800" height="1200" loading="lazy">
      <figcaption>MCP 服务器页展示搜索、工具统计与启用状态。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/credits-panel.webp')" alt="账户与积分界面，账号身份信息已打码" width="1800" height="1200" loading="lazy">
      <figcaption>分别查看 WorkBuddy、TRAE CN、Qoder 的原生额度与领取状态。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/proxy-panel.webp')" alt="本地模型代理连接参数" width="1800" height="1200" loading="lazy">
      <figcaption>复制连接参数，使用 OpenAI 或 Anthropic 协议接入客户端。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/add-server.webp')" alt="AI Toolkit 添加 MCP 服务器界面" width="1800" height="1200" loading="lazy">
      <figcaption>添加弹窗展示内置 JSON 示例与目标工具选择。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/webp/settings-panel.webp')" alt="AI Toolkit 设置界面" width="1800" height="1200" loading="lazy">
      <figcaption>设置页集中提供外观切换、软件更新与官网分享。</figcaption>
    </figure>
  </div>
</section>

${body}
`

await import('node:fs/promises').then(({ writeFile }) => writeFile('change.md', page))
