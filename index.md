---
layout: page
sidebar: false
pageClass: landing-page
title: AI Toolkit
description: 四大平台积分自动领取，本地模型代理一站接入；统一管理 AI 编程工具的 MCP、Skills、平台积分与模型代理
---

<script setup>
import { withBase } from 'vitepress'

const platforms = [
  {
    index: '01',
    name: 'WorkBuddy',
    icon: 'workbuddy.svg',
    region: '国内 · 国际',
    unit: '平台积分',
    claim: '签到奖励与活动积分，按实时领取资格处理。',
    status: '国内版已实测；国际版余额与目录只读查询通过'
  },
  {
    index: '02',
    name: 'TRAE',
    icon: 'trae.png',
    region: '国内 · 国际',
    unit: 'SG / US / USTTP 原生额度',
    claim: '国内签到经官方 UG 网关领取，支持一键导入本机凭据。',
    status: '国内版签到与领取已实测；国际模型代理未开放'
  },
  {
    index: '03',
    name: 'Qoder',
    icon: 'qoder.svg',
    region: '国内 · 国际',
    unit: 'Credits',
    claim: '每日 100 Credits 活动，直接调用官方活动接口领取。',
    status: '国内版契约已核对；真实到账待验收'
  },
  {
    index: '04',
    name: 'MiniMax Code',
    icon: 'minimax-code.png',
    region: '国内 · 国际',
    unit: '平台积分',
    claim: '每日签到，按实时七日面板领取，金额不重复累计。',
    status: '国内版身份与余额已实测；国际账号未实测'
  }
]

const tools = [
  { name: 'Claude Code', icon: 'claude.png' },
  { name: 'OpenAI Codex', icon: 'codex.png' },
  { name: 'OpenCode', icon: 'opencode.png' },
  { name: 'TRAE', icon: 'trae.png' },
  { name: 'Qoder', icon: 'qoder.svg' },
  { name: 'WorkBuddy', icon: 'workbuddy.svg' },
  { name: 'ZCode', icon: 'zcode.png' },
  { name: 'Kimi Code', icon: 'kimi-code.png' },
  { name: 'MiniMax Code', icon: 'minimax-code.png' },
  { name: 'DeepSeek Harness', icon: 'deepseek-harness.svg' },
  { name: 'Qwen Code', glyph: 'Q' },
  { name: 'Gemini CLI', glyph: 'G' },
  { name: 'Cursor', glyph: 'C' },
  { name: 'Windsurf', glyph: 'W' },
  { name: 'Cline', glyph: 'C' },
  { name: 'Roo Code', glyph: 'R' },
  { name: 'Kilo Code', glyph: 'K' },
  { name: 'Continue', glyph: 'C' },
  { name: 'Goose', glyph: 'G' },
  { name: 'Kiro', glyph: 'K' },
  { name: 'CodeBuddy', glyph: 'C' },
  { name: 'Hermes Agent', glyph: 'H' },
  { name: 'Mimo Code', glyph: 'M' },
  { name: 'TRAE CN', icon: 'trae.png' },
  { name: 'Qoder CLI', icon: 'qoder.svg' }
]
</script>

<main class="landing-shell">
  <section class="hero" aria-labelledby="hero-title">
    <p class="hero-badge">v2.2.4 · 四大平台积分 · 本地模型代理 · MCP · SKILLS</p>
    <img class="hero-logo" :src="withBase('/icon-192.png')" alt="AI Toolkit 图标" width="68" height="68">
    <h1 id="hero-title">AI Toolkit</h1>
    <p class="hero-tagline">四大平台积分自动领取，模型经本地代理接入。</p>
    <p class="hero-desc">在 WorkBuddy、TRAE、Qoder、MiniMax Code 之间统一查看额度、一键领取积分；再把它们的模型通过 OpenAI 与 Anthropic 双协议开放给任意客户端。</p>
    <div class="hero-actions" aria-label="主要操作">
      <a class="action-primary" :href="withBase('download')">立即下载</a>
      <a class="action-secondary" :href="withBase('features')">查看功能</a>
      <a class="action-ghost" href="https://github.com/whyfail/AI-Toolkit" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </section>

  <section class="stats-band" aria-label="AI Toolkit 概览">
    <div class="stat-item">
      <span class="stat-num">4</span>
      <span class="stat-label">平台积分查询与自动领取</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">2</span>
      <span class="stat-label">代理协议：OpenAI · Anthropic</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">25</span>
      <span class="stat-label">AI 编程工具适配</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">本地</span>
      <span class="stat-label">配置集中存储，凭据使用系统凭据库</span>
    </div>
  </section>

  <section class="landing-section" aria-labelledby="credits-title">
    <div class="section-copy centered">
      <p class="section-label">Four platforms, one claim button</p>
      <h2 id="credits-title">四大平台积分，一处看全，一键领走。</h2>
      <p>分别连接 WorkBuddy、TRAE、Qoder、MiniMax Code 账户，原生额度按各自单位展示。刷新余额会同时查询实时领取资格，可用任务由「一键领取积分」逐账号处理，兑换券单独列出、不计为积分。</p>
    </div>
    <div class="platform-grid">
      <article class="platform-card" v-for="platform in platforms" :key="platform.name">
        <header class="platform-head">
          <img class="platform-logo" :src="withBase(`/agents/${platform.icon}`)" alt="" width="36" height="36" loading="lazy">
          <div class="platform-ident">
            <h3>{{ platform.name }}</h3>
            <span class="platform-region">{{ platform.region }}</span>
          </div>
          <span class="platform-idx">{{ platform.index }}</span>
        </header>
        <p class="platform-unit">{{ platform.unit }}</p>
        <p class="platform-claim">{{ platform.claim }}</p>
        <p class="platform-status">{{ platform.status }}</p>
      </article>
    </div>
    <p class="platform-note">可选自动领取默认关闭，开启后在应用运行期间按北京时间每天 10:30 检查；临时故障按账户 1、2、5、15、30 分钟退避，限流遵守 <code>Retry-After</code>，每次领取前后各核对一次余额。</p>
    <p class="platform-note">领取资格以平台实时返回为准；国际版适配仍为实验性，范围与验证边界见<a :href="withBase('/features#international-credits')">国际版支持矩阵</a>。</p>
  </section>

  <section class="landing-section workflow-section" aria-labelledby="proxy-title">
    <div class="workflow-copy">
      <p class="section-label">One local gateway, every client</p>
      <h2 id="proxy-title">本地模型代理，双协议直连。</h2>
      <p>手动开启本地网关，即可在支持自定义模型提供商的客户端中使用已接入平台的模型。代理跟随 AI Toolkit 运行，界面只提供 API Key 复制入口，不展示实际密钥。</p>
      <div class="mini-points">
        <div><strong>Base URL</strong><span><code>http://127.0.0.1:17860/v1</code>，OpenAI 请求 <code>/chat/completions</code>，Anthropic 请求 <code>/messages</code>。</span></div>
        <div><strong>双协议</strong><span>OpenAI Chat Completions 与 Anthropic Messages 均支持 JSON 与 SSE、文本、图片和工具调用历史，正文上限 32 MiB。</span></div>
        <div><strong>平台前缀</strong><span><code>workbuddy/</code>、<code>traework/</code>、<code>qoder/</code>、<code>minimax-code/</code> 指定来源平台，国际账号使用对应的 <code>-intl/</code> 前缀。</span></div>
        <div><strong>请求记录</strong><span>保存来源账号、模型、耗时、上游 Token 数与失败阶段，不保存请求正文和密钥。</span></div>
      </div>
    </div>
    <figure class="product-frame">
      <img
        :src="withBase('/screenshots/webp/proxy-panel.webp')"
        alt="AI Toolkit 本地模型代理的连接参数与协议"
        width="1800"
        height="1200"
        loading="lazy"
      >
    </figure>
  </section>

  <section class="landing-section" aria-labelledby="endpoints-title">
    <div class="section-copy">
      <p class="section-label">Endpoints</p>
      <h2 id="endpoints-title">四个端点，复制即可接入。</h2>
    </div>
    <div class="endpoint-list">
      <div class="endpoint-row">
        <span class="endpoint-method">GET</span>
        <code>/health</code>
        <span class="endpoint-desc">代理运行状态</span>
      </div>
      <div class="endpoint-row">
        <span class="endpoint-method">GET</span>
        <code>/v1/models</code>
        <span class="endpoint-desc">实际模型目录，含上下文与输出上限</span>
      </div>
      <div class="endpoint-row">
        <span class="endpoint-method">POST</span>
        <code>/v1/chat/completions</code>
        <span class="endpoint-desc">OpenAI 协议</span>
      </div>
      <div class="endpoint-row">
        <span class="endpoint-method">POST</span>
        <code>/v1/messages</code>
        <span class="endpoint-desc">Anthropic 协议</span>
      </div>
    </div>
    <div class="proxy-quickstart">
      <ClientOnly>
        <div class="language-bash vp-adaptive-theme"><button title="复制代码" class="copy"></button><span class="lang">bash</span>
          <pre class="shiki shiki-themes github-light github-dark" tabindex="0"><code><span class="line"><span style="color:#6A737D"># OpenAI Chat Completions</span></span>
<span class="line"><span style="color:#24292E">curl http://127.0.0.1:17860/v1/chat/completions \</span></span>
<span class="line"><span style="color:#24292E">  -H </span><span style="color:#032F62">"Authorization: Bearer {代理 API Key}"</span><span style="color:#24292E"> \</span></span>
<span class="line"><span style="color:#24292E">  -H </span><span style="color:#032F62">"Content-Type: application/json"</span><span style="color:#24292E"> \</span></span>
<span class="line"><span style="color:#24292E">  -d </span><span style="color:#032F62">'{"model":"workbuddy/glm-5.3-flash","messages":[{"role":"user","content":"你好"}]}'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># Anthropic Messages（也接受 x-api-key 认证）</span></span>
<span class="line"><span style="color:#24292E">curl http://127.0.0.1:17860/v1/messages \</span></span>
<span class="line"><span style="color:#24292E">  -H </span><span style="color:#032F62">"Authorization: Bearer {代理 API Key}"</span><span style="color:#24292E"> \</span></span>
<span class="line"><span style="color:#24292E">  -H </span><span style="color:#032F62">"Content-Type: application/json"</span><span style="color:#24292E"> \</span></span>
<span class="line"><span style="color:#24292E">  -d </span><span style="color:#032F62">'{"model":"minimax-code/MiniMax-M3","max_tokens":256,"messages":[{"role":"user","content":"你好"}]}'</span></span></code></pre>
        </div>
      </ClientOnly>
    </div>
    <p class="endpoint-note">Base URL、API Key 与目录模型 ID 均可在应用「本地代理」页复制；完整参数与错误码见<a :href="withBase('features')">功能总览</a>。</p>
  </section>

  <section class="landing-section workflow-section" aria-labelledby="mcp-title">
    <div class="workflow-copy">
      <p class="section-label">Configuration without file hunting</p>
      <h2 id="mcp-title">MCP 配置：粘贴、测试、同步。</h2>
      <p>复制 MCP 配置、粘贴识别、连接测试、选择目标工具，然后由 AI Toolkit 写入对应配置文件。路径识别、原子写入与状态刷新都在后台完成。</p>
      <div class="mini-points">
        <div><strong>先测后存</strong><span>内置连接测试，服务器配置有效后再保存。</span></div>
        <div><strong>自动识别</strong><span>按真实安装证据识别各工具的配置路径，减少手工编辑 JSON/TOML。</span></div>
        <div><strong>原子写入</strong><span>通过临时文件加重命名写入，避免半写状态损坏配置文件。</span></div>
      </div>
    </div>
    <figure class="product-frame">
      <img
        :src="withBase('/screenshots/webp/add-server.webp')"
        alt="AI Toolkit 添加 MCP 服务器界面"
        width="1800"
        height="1200"
        loading="lazy"
      >
    </figure>
  </section>

  <section class="landing-section workflow-section reversed" aria-labelledby="skills-title">
    <figure class="product-frame">
      <img
        :src="withBase('/screenshots/webp/skills-panel.webp')"
        alt="AI Toolkit Skills 管理界面"
        width="1800"
        height="1200"
        loading="lazy"
      >
    </figure>
    <div class="workflow-copy">
      <p class="section-label">One skill library, every agent</p>
      <h2 id="skills-title">一套 Skills，同步到所有 Agent。</h2>
      <p>技能集中放在中心仓库，再按目标工具同步：Git 仓库安装、skills.sh 在线搜索、批量勾选同步、更新一键拉取。</p>
      <div class="mini-points">
        <div><strong>Git 安装</strong><span>粘贴仓库地址自动解析结构，安装到中心 Skills 目录。</span></div>
        <div><strong>批量同步</strong><span>多技能 × 多工具一次勾选完成，冲突可选重命名、跳过或覆盖。</span></div>
        <div><strong>一键更新</strong><span>自动检测 Git 来源技能的新版本，快速拉取并重新同步。</span></div>
      </div>
    </div>
  </section>

  <section class="landing-section" aria-labelledby="tools-title">
    <div class="section-copy centered">
      <p class="section-label">Designed for multi-agent workflows</p>
      <h2 id="tools-title">让多个 AI CLI 共用同一套能力。</h2>
      <p>面向经常在不同 AI 编程工具之间切换的开发者：工具检测、配置路径和 Skills 同步走同一条稳定路径，积分与代理面板连接四大平台额度。</p>
    </div>
    <div class="tool-wall" role="list" aria-label="支持的工具">
      <span class="tool-chip" role="listitem" v-for="tool in tools" :key="tool.name">
        <img v-if="tool.icon" :src="withBase(`/agents/${tool.icon}`)" alt="" loading="lazy">
        <span v-else class="tool-chip-glyph" aria-hidden="true">{{ tool.glyph }}</span>
        {{ tool.name }}
      </span>
    </div>
    <p class="tool-wall-note">启动时自动扫描本机安装，检测到的工具才会成为同步目标 — 不改动未安装工具的任何配置。</p>
  </section>

  <section class="landing-section" aria-labelledby="capability-title">
    <div class="section-copy centered">
      <p class="section-label">And everything in between</p>
      <h2 id="capability-title">剩下的细节，也都安排好了。</h2>
    </div>
    <div class="capability-grid">
      <article data-index="01">
        <h3>自动发现工具</h3>
        <p>启动时扫描本地已安装的 CLI、桌面应用与 IDE 扩展，只依据真实安装证据判定同步目标。</p>
      </article>
      <article data-index="02">
        <h3>凭据安全</h3>
        <p>凭据保存在系统凭据库，启动、后台刷新与代理请求均不触发授权弹窗，不退回明文文件。</p>
      </article>
      <article data-index="03">
        <h3>托盘常驻</h3>
        <p>关闭主窗口后留在系统托盘，已开启的模型代理与后台任务继续运行。</p>
      </article>
      <article data-index="04">
        <h3>更新与分享</h3>
        <p>启动时自动检查新版本并弹窗确认，设置页可一键复制官网地址分享给其他开发者。</p>
      </article>
    </div>
  </section>

  <footer class="landing-footer">
    <span class="footer-brand">
      <img :src="withBase('/icon-32.png')" alt="" width="18" height="18">
      AI Toolkit
    </span>
    <p>Made with ❤️ for AI Developers · Released under the MIT License</p>
  </footer>

</main>
