---
pageClass: product-doc
---

# 功能

AI Toolkit 是面向 AI 编程工具重度用户的桌面管理器。它的核心不是替代某一个 Agent，而是把多个 Agent 共同依赖的 MCP、Skills、安装状态和启动方式统一起来。

## MCP 服务器管理

<div class="feature-grid">
  <article class="feature-card">
    <h3>集中维护</h3>
    <p>在一个界面里添加、编辑、删除 MCP Server，避免为不同工具重复维护配置。</p>
    <ul>
      <li>支持服务名称、命令、参数、环境变量等常见配置项</li>
      <li>支持通过开关控制每个工具是否启用对应 MCP Server</li>
      <li>点击工具名称可快速打开对应配置文件</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>JSON 粘贴模式</h3>
    <p>从 MCP 介绍页复制配置后直接粘贴，AI Toolkit 会识别配置内容并填入表单。</p>
    <ul>
      <li>减少手动输入和格式错误</li>
      <li>适合快速接入第三方 MCP 服务</li>
      <li>保存前可执行连接测试</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>实时同步</h3>
    <p>启用或关闭某个 MCP Server 后，变更会同步到目标工具的配置文件。</p>
    <ul>
      <li>支持 JSON 与 TOML 配置路径</li>
      <li>自动识别多个工具的配置位置</li>
      <li>通过临时文件加重命名的方式降低配置损坏风险</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>自动发现工具</h3>
    <p>启动时自动检测系统中的 AI 编程工具，新工具出现时可以提示同步 MCP。</p>
    <ul>
      <li>支持 CLI 与部分 GUI 应用检测</li>
      <li>适配 macOS 与 Windows 常见安装路径</li>
      <li>减少首次配置的查找成本</li>
    </ul>
  </article>
</div>

## Skills 技能管理

<div class="feature-grid">
  <article class="feature-card">
    <h3>独立 Skills 面板</h3>
    <p>集中查看、安装、更新和同步已管理的 Skills。</p>
    <ul>
      <li>支持本地 Skills 导入</li>
      <li>支持 GitHub、GitLab 仓库安装</li>
      <li>支持多 Skills 仓库的选择性安装</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>批量同步</h3>
    <p>一次选择多个 Skills，并同步到多个目标 AI 工具。</p>
    <ul>
      <li>适合新机器初始化</li>
      <li>适合统一团队工作流</li>
      <li>减少跨工具目录复制</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>在线搜索与精选推荐</h3>
    <p>从 skills.sh 搜索热门 Skills，也可以浏览精选列表。</p>
    <ul>
      <li>展示安装量和星标信息</li>
      <li>快速发现可用技能</li>
      <li>降低从零搭建 Skills 集合的成本</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>一键更新</h3>
    <p>自动检测 Git 来源 Skills 是否有更新，并支持快速拉取最新版本。</p>
    <ul>
      <li>保留集中仓库管理方式</li>
      <li>减少手动进入每个仓库检查更新</li>
      <li>同步状态更清晰</li>
    </ul>
  </article>
</div>

## Agent 快速启动

AI Toolkit 可以直接从应用内启动已安装的 AI 工具，并支持设置默认终端偏好。

<div class="feature-grid">
  <article class="feature-card">
    <h3>一键启动</h3>
    <p>从工具列表直接启动 Agent，减少打开终端、切换目录、输入命令的重复动作。</p>
  </article>
  <article class="feature-card">
    <h3>终端偏好</h3>
    <p>macOS 支持 Terminal、iTerm、Warp、Ghostty，Windows 支持 Windows Terminal、PowerShell、Command Prompt。</p>
  </article>
</div>

## 工具管理

<div class="feature-grid">
  <article class="feature-card">
    <h3>安装向导</h3>
    <p>展示 Homebrew、npm、curl 脚本等安装方式，帮助用户快速补齐缺失工具。</p>
  </article>
  <article class="feature-card">
    <h3>版本检测</h3>
    <p>自动检测已安装工具版本，并在后台扫描最新版本，首屏体验更轻。</p>
  </article>
  <article class="feature-card">
    <h3>一键更新</h3>
    <p>快速更新已安装工具，并只刷新当前工具卡片，避免整个列表闪烁。</p>
  </article>
  <article class="feature-card">
    <h3>工具卸载</h3>
    <p>支持通过 brew、npm、winget、scoop 卸载检测到安装方式的工具。</p>
  </article>
</div>

## 支持的工具与配置路径

<div class="path-list">
  <div class="path-row"><strong>Qwen Code</strong><code>~/.qwen/settings.json</code></div>
  <div class="path-row"><strong>Claude Code</strong><code>~/.claude.json</code></div>
  <div class="path-row"><strong>OpenAI Codex</strong><code>~/.codex/config.toml</code></div>
  <div class="path-row"><strong>Google Gemini CLI</strong><code>~/.gemini/settings.json</code></div>
  <div class="path-row"><strong>OpenCode</strong><code>~/.config/opencode/opencode.json</code></div>
  <div class="path-row"><strong>Qoder</strong><code>~/Library/Application Support/Qoder/SharedClientCache/mcp.json</code></div>
  <div class="path-row"><strong>Qoder CLI</strong><code>~/.qodercli/settings.json</code></div>
  <div class="path-row"><strong>Trae</strong><code>~/Library/Application Support/Trae/User/mcp.json</code></div>
  <div class="path-row"><strong>Trae CN</strong><code>~/Library/Application Support/Trae CN/User/mcp.json</code></div>
  <div class="path-row"><strong>TRAE SOLO CN</strong><code>~/Library/Application Support/TRAE SOLO CN/User/mcp.json</code></div>
  <div class="path-row"><strong>CodeBuddy</strong><code>~/.codebuddy/mcp.json</code></div>
</div>

## 系统支持

| 系统 | 状态 | 说明 |
| --- | --- | --- |
| macOS 12+ | 已支持 | 完整功能支持 |
| Windows 10+ | 已支持 | MCP、Skills、工具启动与终端偏好已支持 |
| Linux | 开发中 | 基础功能可用 |

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 前端 | React 18、TypeScript、Vite、TailwindCSS、TanStack Query |
| 桌面端 | Tauri 2 |
| 后端 | Rust、SQLite |
