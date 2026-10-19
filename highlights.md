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
  <p>当开发者同时使用 Claude Code、Codex、Gemini CLI、Qwen Code、TRAE、TRAE CN、Hermes Agent、Mimo Code、WorkBuddy 或 ZCode 一类工具时，MCP Server 和 Skills 往往会被复制到不同目录。AI Toolkit 将这些重复动作统一为选择、同步和更新。</p>
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
      <p>识别 Homebrew、npm、curl、winget、scoop 等常见安装位置，只依据真实安装证据判定可同步目标。</p>
    </article>
    <article class="highlight-card">
      <h3>跨平台持续完善</h3>
      <p>macOS 已完整支持，Windows 已覆盖 MCP 与 Skills 管理，Linux 正在推进。</p>
    </article>
  </div>
</section>

<section class="doc-band">
  <h2>把高频操作变成稳定路径</h2>
  <p>AI Toolkit 不只展示配置，它还处理连接测试、后台检测、局部刷新、原子写入这类容易影响体验的细节。</p>
  <div class="image-pair">
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/mcp-panel.png')" alt="AI Toolkit MCP 服务器管理界面" width="1800" height="1200" loading="lazy">
      <figcaption>MCP 服务器列表、搜索、统计与目标工具同步状态集中展示。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/add-server.png')" alt="AI Toolkit 添加 MCP 服务器界面" width="1800" height="1200" loading="lazy">
      <figcaption>添加弹窗展示内置 JSON 示例，并可选择需要同步的目标工具。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/skills-panel.png')" alt="AI Toolkit Skills 管理界面" width="1800" height="1200" loading="lazy">
      <figcaption>Skills 列表、同步状态、导入和添加技能入口保持统一的 Apple 风格设计。</figcaption>
    </figure>
  </div>
</section>

<section class="doc-band">
  <h2>平台积分与模型连接参数集中可见</h2>
  <p>连接 WorkBuddy、TRAE CN、Qoder 后，分别查看原生额度与领取状态；在本地代理页复制 Base URL、代理 API Key 和模型 ID，接入支持 OpenAI 或 Anthropic 协议的客户端。</p>
  <div class="image-pair">
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/credits-panel.png')" alt="账户与积分界面，账号身份信息已打码" width="1800" height="1200" loading="lazy">
      <figcaption>账户昵称与 ID 已打码，余额与领取状态是截图时的账户快照。</figcaption>
    </figure>
    <figure class="screen-frame">
      <img :src="withBase('/screenshots/proxy-panel.png')" alt="本地模型代理连接参数" width="1800" height="1200" loading="lazy">
      <figcaption>本地代理页展示运行状态和连接参数，API Key 使用复制入口。</figcaption>
    </figure>
  </div>
</section>

<section class="doc-band">
  <h2>v2.1.2：模型信息与最大上下文</h2>
  <p>模型信息卡展示通道参数、能力及目录公开的底层模型 ID，缺失的新增参数保持未知；优先使用通道最大上下文，Qoder 显式选择最大可用档位，并修复 TRAE 部署统计覆盖模型身份的问题。完整变更与验证范围见更新文档。</p>
  <div class="release-card">
    <h3>更新文档来自 change.md</h3>
    <p>站点导航中的“更新文档”直接指向根目录 <code>change.md</code>，发布时可以继续用这份文件作为唯一更新来源。</p>
    <p><a :href="withBase('/change')">查看更新文档</a></p>
  </div>
</section>
