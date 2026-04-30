---
pageClass: product-doc
---

# 亮点

<script setup>
import { withBase } from 'vitepress'
</script>

AI Toolkit 的价值在于把“多工具共存”的复杂度压到一个稳定工作台里。它更像开发者的 AI 工具管家：知道工具在哪里、配置写到哪里、Skills 应该同步到哪里，也知道什么时候该轻量刷新而不是全量重扫。

<section class="doc-band">
  <h2>为多 Agent 工作流设计</h2>
  <p>当开发者同时使用 Claude Code、Codex、Gemini CLI、Qwen Code 或 Trae 一类工具时，MCP Server 和 Skills 往往会被复制到不同目录。AI Toolkit 将这些重复动作统一为选择、同步和更新。</p>
  <div class="highlight-grid">
    <article class="highlight-card">
      <h3>一次配置，多处同步</h3>
      <p>同一个 MCP Server 可以按工具启用，状态变更直接同步到对应配置文件。</p>
    </article>
    <article class="highlight-card">
      <h3>Skills 不再散落</h3>
      <p>集中仓库管理 Skills，再按目标工具同步，方便迁移、更新和排查冲突。</p>
    </article>
    <article class="highlight-card">
      <h3>支持真实安装环境</h3>
      <p>兼容 Homebrew、npm、curl、winget、scoop 等安装方式，降低版本管理和卸载成本。</p>
    </article>
    <article class="highlight-card">
      <h3>跨平台持续完善</h3>
      <p>macOS 已完整支持，Windows 已覆盖 MCP、Skills、工具启动与终端偏好，Linux 正在推进。</p>
    </article>
  </div>
</section>

<section class="doc-band">
  <h2>把高频操作变成稳定路径</h2>
  <p>AI Toolkit 不只展示配置，它还处理连接测试、后台检测、局部刷新、原子写入这类容易影响体验的细节。</p>
  <div class="image-pair">
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/scan-agents.png')" alt="AI Toolkit 扫描 Agent 工具界面" width="1088" height="734" loading="lazy">
      <figcaption>自动检测已安装工具，新工具发现后可继续同步配置。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/add-server.png')" alt="AI Toolkit 添加 MCP 服务器界面" width="1088" height="734" loading="lazy">
      <figcaption>JSON 粘贴、表单编辑和连接测试集中在同一流程里。</figcaption>
    </figure>
  </div>
</section>

<section class="doc-band">
  <h2>近期更新聚焦体验和可靠性</h2>
  <p>v1.4.0 新增工具卸载功能，改进 nvmd shim 检测，并把安装、更新、卸载后的状态刷新收窄到当前工具卡片。完整记录见更新文档。</p>
  <div class="release-card">
    <h3>更新文档来自 change.md</h3>
    <p>站点导航中的“更新文档”直接指向根目录 <code>change.md</code>，发布时可以继续用这份文件作为唯一更新来源。</p>
    <p><a :href="withBase('/change')">查看更新文档</a></p>
  </div>
</section>
