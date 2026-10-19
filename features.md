---
pageClass: product-doc
---

<script setup>
import { withBase } from 'vitepress'
</script>

# 功能

AI Toolkit 是面向 AI 编程工具重度用户的桌面管理器，将 MCP、Skills、已安装工具检测以及平台积分与本地模型代理集中管理。

当前版本 **v2.1.2** 包含 Skills 管理、MCP 服务器、积分与代理、设置、关于五个面板。配图保留 2026-10-15 截取的 macOS v2.0.0 实机界面，昵称、账号 ID 等敏感信息已打码。

## v2.1.2 更新

- 模型信息卡展示通道上下文、最大输出、输入能力、调用 ID 和目录公开的底层模型 ID；新增参数缺失时保持未知，不根据名称推测能力或版本。
- 优先读取各通道目录声明的最大上下文，Qoder 请求显式选择最大可用档位，保留客户端输出 Token 预算；超限错误说明请求值与通道上限。
- 修复 TRAE 部署统计覆盖流式模型身份的问题，保留型号校验；同账户重复模型条目按目录优先级去重。

## v2.1.1 基础改进

- TRAE 工具流的后续分片携带空字符串或 `null` ID 时，保留先前的真实调用 ID，兼容 JSON 与 Messages SSE；全程缺少 ID 的调用仍返回明确错误。
- 热门 Skills 改用 skills.sh 累计安装榜前 20 项，展示实际安装量；加载失败显示具体原因并支持重试，打开添加弹窗的在线页时才启用请求。

## v2.1.0 基础能力

- 两种模型代理协议支持 32 MiB 请求正文，兼容较长的图片与工具历史，并保留无签名思考内容；超限、JSON 和 Content-Type 错误分别返回明确状态。
- Skills 安装、更新、同步、重命名与删除统一校验名称、目录归属和来源身份，替换失败恢复旧内容，Git 缓存与文件处理增加资源预算。
- WebView 限制可信来源导航，外链交由系统浏览器；OAuth 加强 state、PKCE 与回环请求校验，数据库与缓存使用受限文件权限。
- 更新 Tauri、Vite、PostCSS 等依赖，前端构建不再暴露原生签名环境变量。验证范围和剩余事项见 [安全加固记录](https://github.com/whyfail/AI-Toolkit/blob/main/docs/security-hardening.md)。

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

<figure class="screen-frame">
  <img :src="withBase('/screenshots/mcp-panel.png')" alt="MCP 服务器列表及各工具启用状态" width="1800" height="1200" loading="lazy">
  <figcaption>服务器列表、工具统计与启用状态在同一页面展示。</figcaption>
</figure>

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
    <h3>在线搜索与热门推荐</h3>
    <p>从 skills.sh 搜索 Skills，或浏览累计安装榜前 20 项及实际安装量；列表加载失败时显示原因并支持重试。</p>
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

<figure class="screen-frame">
  <img :src="withBase('/screenshots/skills-panel.png')" alt="Skills 管理与 Git 来源筛选" width="1800" height="1200" loading="lazy">
  <figcaption>按来源与同步状态筛选 Skills，并选择目标工具批量同步。</figcaption>
</figure>

## 积分与模型代理

<div class="feature-grid">
  <article class="feature-card">
    <h3>多平台账户与余额</h3>
    <p>连接 WorkBuddy、TRAE CN、Qoder 账户，分别查看平台原生积分、更新时间及额度包。</p>
    <ul>
      <li>支持官方授权入口与已有 Token / 凭据 JSON 导入</li>
      <li>TRAE CN 支持一键导入本机桌面登录态，兼容 CLI 钥匙串凭据</li>
      <li>账户凭据保存在系统凭据库，界面不展示已保存凭据</li>
      <li>登录过期、余额未知和历史缓存显示明确状态</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>积分一键领取</h3>
    <p>批量领取符合条件的积分任务，逐项展示结果，并将优惠券等其他奖励单独显示。</p>
    <ul>
      <li>保留最近领取记录与失败原因</li>
      <li>自动领取默认关闭，开启后在应用运行期间按北京时间每天 10:30 检查</li>
      <li>下次启动可补做错过的检查，已领取任务跳过</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>本地模型代理</h3>
    <p>手动开启兼容 OpenAI Chat Completions 与 Anthropic Messages 的本地代理，在其他客户端使用通过验证的平台模型。</p>
    <ul>
      <li>默认地址为 http://127.0.0.1:17860/v1，使用独立的代理 API Key</li>
      <li>展示实际模型目录、验证状态、请求平台与用量</li>
      <li>代理跟随 AI Toolkit 运行，应用退出后停止</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>通用客户端接入</h3>
    <p>复制连接参数，在支持自定义模型提供商的客户端中配置代理。</p>
    <ul>
      <li>提供名称、Base URL、代理 API Key 与目录模型 ID</li>
      <li>支持 OpenAI Chat Completions 与 Anthropic Messages 协议</li>
      <li>平台前缀模型 ID 指定平台，已确认相同型号可使用通用别名</li>
      <li>具体 GLM 型号与工具调用能力以账户目录和验证结果为准</li>
    </ul>
  </article>
</div>

<div class="image-pair">
  <figure class="screen-frame">
    <img :src="withBase('/screenshots/credits-panel.png')" alt="账户与积分面板，昵称和账号 ID 已打码" width="1800" height="1200" loading="lazy">
    <figcaption>各平台分别展示原生额度、领取状态和模型目录；账号身份信息已打码。</figcaption>
  </figure>
  <figure class="screen-frame">
    <img :src="withBase('/screenshots/proxy-panel.png')" alt="本地模型代理的连接参数与协议" width="1800" height="1200" loading="lazy">
    <figcaption>在本地代理页复制客户端所需的连接参数，界面不展示实际密钥。</figcaption>
  </figure>
</div>

平台接口及账户权限决定余额、领取与推理的实际可用性，未支持的能力会显示状态。截图中的积分和模型状态只代表截取时的账户状态，真实账户联调仍是平台接入的验收条件。配置步骤见 [积分与模型代理说明](https://github.com/whyfail/AI-Toolkit/blob/main/docs/credits-proxy.md)。

## 已安装工具检测

AI Toolkit 启动时自动扫描本地已安装的 CLI、桌面应用和 IDE 扩展，检测结果作为 MCP 与 Skills 可同步目标的判定依据，不提供工具下载、安装、更新或卸载。

<div class="feature-grid">
  <article class="feature-card">
    <h3>安装证据可信</h3>
    <p>安装状态来自可执行文件、应用包或 IDE 扩展安装清单，残留的配置与 Skills 目录不会被误判为已安装。</p>
  </article>
  <article class="feature-card">
    <h3>共用统一入口</h3>
    <p>Codex CLI、桌面版和 IDE 扩展共用一个 Codex 入口；WorkBuddy 国内版与国际版共用一个 WorkBuddy 入口。</p>
  </article>
  <article class="feature-card">
    <h3>覆盖 24 种工具</h3>
    <p>包含 Kimi Code、MiniMax Code 的桌面应用与 CLI 识别、官方图标、MCP 和 Skills 同步。</p>
  </article>
  <article class="feature-card">
    <h3>路径与来源透明</h3>
    <p>各工具的检测路径、Skills 目录与官方来源见 Agent 适配说明，方便核对与排查。</p>
  </article>
</div>

## 应用更新与分享

<div class="feature-grid">
  <article class="feature-card">
    <h3>启动检查更新</h3>
    <p>应用首次打开时自动检查 GitHub Releases，新版本可用时弹窗提示，由用户决定是否下载安装。</p>
  </article>
  <article class="feature-card">
    <h3>一键分享</h3>
    <p>设置页可复制官网地址，方便把 AI Toolkit 推荐给其他开发者或团队成员。</p>
  </article>
</div>

<figure class="screen-frame">
  <img :src="withBase('/screenshots/settings-panel.png')" alt="设置中的外观、更新和官网分享" width="1800" height="1200" loading="lazy">
  <figcaption>设置页集中提供外观切换、软件更新与官网分享。</figcaption>
</figure>

## 托盘与后台运行

关闭主窗口后应用留在系统托盘，已开启的代理和后台任务继续运行。通过托盘菜单可以恢复主窗口；选择「退出应用（停止代理）」才会完全退出并停止代理，macOS 的 `Cmd+Q` 同样会退出。

## 支持的工具与配置路径

<div class="path-list">
  <div class="path-row"><strong>Qwen Code</strong><code>~/.qwen/settings.json</code></div>
  <div class="path-row"><strong>Claude Code</strong><code>~/.claude.json</code></div>
  <div class="path-row"><strong>OpenAI Codex</strong><code>~/.codex/config.toml</code></div>
  <div class="path-row"><strong>Google Gemini CLI</strong><code>~/.gemini/settings.json</code></div>
  <div class="path-row"><strong>OpenCode</strong><code>~/.config/opencode/opencode.json</code></div>
  <div class="path-row"><strong>Qoder</strong><code>~/Library/Application Support/Qoder/SharedClientCache/mcp.json</code></div>
  <div class="path-row"><strong>Qoder CLI</strong><code>~/.qodercli/settings.json</code></div>
  <div class="path-row"><strong>TRAE（国际版）</strong><code>~/Library/Application Support/Trae/User/mcp.json</code></div>
  <div class="path-row"><strong>TRAE CN（国内版）</strong><code>~/Library/Application Support/Trae CN/User/mcp.json</code></div>
  <div class="path-row"><strong>CodeBuddy</strong><code>~/.codebuddy/mcp.json</code></div>
  <div class="path-row"><strong>Hermes Agent</strong><code>~/.hermes/config.yaml</code></div>
  <div class="path-row"><strong>Mimo Code</strong><code>~/.config/mimocode/mimocode.json</code></div>
  <div class="path-row"><strong>Kimi Code</strong><code>~/.kimi-code/mcp.json</code></div>
  <div class="path-row"><strong>MiniMax Code</strong><code>~/.minimax/mcp.json</code></div>
  <div class="path-row"><strong>WorkBuddy / WorkBuddy CN</strong><code>~/.workbuddy/.mcp.json</code></div>
  <div class="path-row"><strong>ZCode</strong><code>~/.zcode/cli/config.json</code></div>
  <div class="path-row"><strong>Cursor</strong><code>~/.cursor/mcp.json</code></div>
  <div class="path-row"><strong>Windsurf</strong><code>~/.codeium/windsurf/mcp_config.json</code> / <code>~/.config/devin/mcp_config.json</code></div>
  <div class="path-row"><strong>Cline</strong><code>~/.cline/data/settings/cline_mcp_settings.json</code></div>
  <div class="path-row"><strong>Roo Code</strong><code>&lt;IDE User&gt;/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json</code></div>
  <div class="path-row"><strong>Kilo Code</strong><code>~/.config/kilo/kilo.json</code> / <code>kilo.jsonc</code></div>
  <div class="path-row"><strong>Continue</strong><code>~/.continue/config.yaml</code></div>
  <div class="path-row"><strong>Goose</strong><code>~/.config/goose/config.yaml</code> / <code>~/Library/Application Support/Block/goose/config.yaml</code></div>
  <div class="path-row"><strong>Kiro</strong><code>~/.kiro/settings/mcp.json</code></div>
</div>

完整路径说明（含环境变量覆盖与 Windows 路径）见主仓库的 [Agent 适配说明](https://github.com/whyfail/AI-Toolkit/blob/main/docs/agent-adapters.md)。

TRAE 按国际版与国内版统一展示两个入口，新版同地区的 Agent 与 IDE 共用本地 MCP 配置和 Skills 目录（国际版 `~/.trae/skills`，国内版 `~/.trae-cn/skills`）。旧 `TRAE Work`、`TRAE Work CN`、`TRAE SOLO CN` 安装与配置保留检测兼容，可预览并迁移到新版；已有 Skills 同步记录兼容读取，不重复同步到 Work。本次适配管理本地配置，不管理云端 Agent。

MCP 页提供“迁移旧 TRAE”入口，可选择旧配置、改名处理冲突，迁移前自动备份并支持撤销。Windows 旧 `%APPDATA%\Trae\skills`、`%APPDATA%\Trae CN\skills` 作为 Skills 页的只读来源展示，手动导入后可同步到新版；原文件保留。

## 系统支持

| 系统 | 状态 | 说明 |
| --- | --- | --- |
| macOS 12+ | 已支持 | 完整功能支持 |
| Windows 10+ | 已支持 | MCP 与 Skills 管理已支持 |
| Linux | 开发中 | 基础功能可用 |

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 前端 | React 18、TypeScript、Vite、TailwindCSS、TanStack Query |
| 桌面端 | Tauri 2 |
| 后端 | Rust、SQLite |
