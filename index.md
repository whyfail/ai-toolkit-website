---
layout: page
sidebar: false
pageClass: landing-page
title: AI Toolkit
description: 统一管理 AI 编程工具的 MCP、Skills、平台积分与本地模型代理
---

<script setup>
import { withBase } from 'vitepress'

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
    <p class="hero-badge">v2.1.7 · MCP · SKILLS · 积分 · 模型代理</p>
    <img class="hero-logo" :src="withBase('/icon-192.png')" alt="AI Toolkit 图标" width="68" height="68">
    <h1 id="hero-title">AI Toolkit</h1>
    <p class="hero-tagline">为 AI 编程工具准备的统一控制台</p>
    <p class="hero-desc">集中管理 25 款 AI 编程工具的 MCP、Skills、平台积分与本地模型代理。</p>
    <div class="hero-actions" aria-label="主要操作">
      <a class="action-primary" :href="withBase('download')">立即下载</a>
      <a class="action-secondary" :href="withBase('features')">查看功能</a>
      <a class="action-ghost" href="https://github.com/whyfail/AI-Toolkit" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </section>

  <section class="stats-band" aria-label="AI Toolkit 概览">
    <div class="stat-item">
      <span class="stat-num">25</span>
      <span class="stat-label">AI 编程工具适配</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">6</span>
      <span class="stat-label">功能面板：Skills · MCP · 积分代理</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">3</span>
      <span class="stat-label">平台积分查询与一键领取</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">本地</span>
      <span class="stat-label">配置集中存储，凭据使用系统凭据库</span>
    </div>
  </section>

  <section class="landing-section" aria-labelledby="tools-title">
    <div class="section-copy centered">
      <p class="section-label">Designed for multi-agent workflows</p>
      <h2 id="tools-title">让多个 AI CLI 共用同一套能力。</h2>
      <p>AI Toolkit 面向经常在不同 AI 编程工具之间切换的开发者。它把工具检测、配置路径和 Skills 同步串成一条稳定路径，并用积分面板连接 WorkBuddy、TRAE CN、Qoder 平台额度。</p>
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

  <section class="landing-section workflow-section" aria-labelledby="workflow-title">
    <div class="workflow-copy">
      <p class="section-label">Configuration without file hunting</p>
      <h2 id="workflow-title">从粘贴 JSON 到同步配置，一次完成。</h2>
      <p>复制 MCP 配置、粘贴识别、连接测试、选择目标工具，然后让 AI Toolkit 写入对应配置文件。它保留可视化控制，也把原子写入、路径识别和状态刷新这些细节藏在后台。</p>
      <div class="mini-points">
        <div><strong>少改文件</strong><span>自动识别配置路径，减少手工编辑 JSON/TOML。</span></div>
        <div><strong>同步更稳</strong><span>开关状态实时写入，并通过临时文件保护配置。</span></div>
        <div><strong>先测后存</strong><span>内置连接测试，服务器配置有效后再保存。</span></div>
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
      <p>技能集中放在中心仓库，再按目标工具同步：Git 仓库安装、skills.sh 在线搜索、批量勾选同步、更新一键拉取。迁移新机器或统一团队工作流，不再逐个目录复制。</p>
      <div class="mini-points">
        <div><strong>Git 安装</strong><span>粘贴仓库地址自动解析结构，安装到中心 Skills 目录。</span></div>
        <div><strong>批量同步</strong><span>多技能 × 多工具一次勾选完成，冲突可选重命名、跳过或覆盖。</span></div>
        <div><strong>一键更新</strong><span>自动检测 Git 来源技能的新版本，快速拉取并重新同步。</span></div>
      </div>
    </div>
  </section>

  <section class="landing-section workflow-section" aria-labelledby="credits-title">
    <div class="workflow-copy">
      <p class="section-label">Credits visible, models on tap</p>
      <h2 id="credits-title">积分可见可领，模型一键接入。</h2>
      <p>连接 WorkBuddy、TRAE CN、Qoder 账户，分别查看原生额度、额度包与领取资格，一键检查并领取可用积分；本地网关再把这些平台的模型以标准协议开放给任意客户端。</p>
      <div class="mini-points">
        <div><strong>多平台账户</strong><span>官方授权入口或凭据 JSON 导入，凭据保存在系统凭据库。</span></div>
        <div><strong>一键领取</strong><span>批量检查并领取可用积分，可选每日定时，结果逐项记录。</span></div>
        <div><strong>本地模型代理</strong><span>127.0.0.1:17860/v1 提供 OpenAI 与 Anthropic 协议，支持 32 MiB 请求和图片、工具历史。</span></div>
      </div>
    </div>
    <figure class="product-frame">
      <img
        :src="withBase('/screenshots/webp/credits-panel.webp')"
        alt="AI Toolkit 账户与积分界面"
        width="1800"
        height="1200"
        loading="lazy"
      >
    </figure>
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
        <h3>原子写入</h3>
        <p>配置通过临时文件加重命名机制写入，避免半写状态损坏 JSON/TOML 配置文件。</p>
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
