---
layout: page
pageClass: landing-page
title: AI Toolkit
description: 通用 MCP Server 与 Skills 管理工具
---

<script setup>
import { withBase } from 'vitepress'
</script>

<main class="landing-shell">
  <section class="hero-stage" aria-labelledby="hero-title">
    <img
      class="hero-shot"
      :src="withBase('/screenshots/main-panel.png')"
      alt="AI Toolkit 主界面截图"
      width="1200"
      height="800"
      fetchpriority="high"
    >
    <div class="hero-scrim" aria-hidden="true"></div>
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-content">
      <p class="eyebrow">Universal MCP & Skills Manager</p>
      <h1 id="hero-title">AI Toolkit</h1>
      <p class="hero-subtitle">为 AI 编程工具准备的统一控制台。集中管理 MCP Server、Skills、工具安装更新与 Agent 启动，把散落在 JSON、TOML 和终端里的配置变成可见的工作流。</p>
      <div class="hero-actions" aria-label="主要操作">
        <a class="action-primary" href="download">立即下载</a>
        <a class="action-secondary" href="features">查看功能</a>
        <a class="action-ghost" href="https://github.com/whyfail/AI-Toolkit" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
    <div class="hero-dock" aria-label="AI Toolkit 概览">
      <div>
        <span>11+</span>
        <strong>AI 编程工具</strong>
      </div>
      <div>
        <span>MCP</span>
        <strong>服务器集中维护</strong>
      </div>
      <div>
        <span>Skills</span>
        <strong>安装、同步、更新</strong>
      </div>
      <div>
        <span>Tauri 2</span>
        <strong>跨平台桌面应用</strong>
      </div>
    </div>
  </section>

  <section class="landing-section system-section" aria-labelledby="system-title">
    <div class="section-copy">
      <p class="section-label">Designed for multi-agent workflows</p>
      <h2 id="system-title">让多个 AI CLI 共用同一套能力。</h2>
      <p>AI Toolkit 面向经常在 Qwen Code、Claude Code、Codex、Gemini CLI、OpenCode、Trae、Qoder、CodeBuddy 等工具之间切换的开发者。它把工具检测、配置路径、Skills 同步和终端启动串成一条稳定路径。</p>
    </div>
    <div class="tool-matrix" aria-label="支持的工具">
      <span>Qwen Code</span>
      <span>Claude Code</span>
      <span>OpenAI Codex</span>
      <span>Gemini CLI</span>
      <span>OpenCode</span>
      <span>Trae</span>
      <span>Trae CN</span>
      <span>TRAE SOLO CN</span>
      <span>Qoder</span>
      <span>Qoder CLI</span>
      <span>CodeBuddy</span>
    </div>
  </section>

  <section class="landing-section workflow-section" aria-labelledby="workflow-title">
    <div class="workflow-copy">
      <p class="section-label">Configuration without file hunting</p>
      <h2 id="workflow-title">从粘贴 JSON 到同步配置，一次完成。</h2>
      <p>复制 MCP 配置、粘贴识别、连接测试、选择目标工具，然后让 AI Toolkit 写入对应配置文件。它保留可视化控制，也把原子写入、路径识别和状态刷新这些细节藏在后台。</p>
      <div class="mini-points">
        <div><strong>少改文件</strong><span>自动识别配置路径，减少手工编辑 JSON/TOML。</span></div>
        <div><strong>同步更稳</strong><span>开关状态实时写入，并通过临时文件保护配置。</span></div>
        <div><strong>启动更快</strong><span>应用内直接启动 Agent，保留终端偏好。</span></div>
      </div>
    </div>
    <figure class="product-frame">
      <img
        :src="withBase('/screenshots/add-server.png')"
        alt="AI Toolkit 添加 MCP 服务器界面"
        width="1088"
        height="734"
        loading="lazy"
      >
    </figure>
  </section>

  <section class="landing-section capability-section" aria-labelledby="capability-title">
    <div class="section-copy centered">
      <p class="section-label">Core capabilities</p>
      <h2 id="capability-title">覆盖从配置到运行的完整日常。</h2>
    </div>
    <div class="capability-grid">
      <article>
        <span class="card-index">01</span>
        <h3>MCP 服务器管理</h3>
        <p>在单一界面中新增、编辑、删除 MCP Server，并实时同步到对应 AI 工具配置文件。</p>
      </article>
      <article>
        <span class="card-index">02</span>
        <h3>Skills 技能中心</h3>
        <p>支持 Git 仓库安装、在线搜索、精选推荐、批量同步和一键更新。</p>
      </article>
      <article>
        <span class="card-index">03</span>
        <h3>工具安装与更新</h3>
        <p>自动检测工具版本和安装方式，提供安装向导、官方文档入口、并发更新与卸载能力。</p>
      </article>
      <article>
        <span class="card-index">04</span>
        <h3>应用更新与分享</h3>
        <p>启动时自动检查新版本，设置页可一键复制 GitHub 仓库地址，方便分享给其他开发者。</p>
      </article>
    </div>
  </section>

  <section class="landing-section release-section" aria-labelledby="release-title">
    <div>
      <p class="section-label">Release notes</p>
      <h2 id="release-title">更新文档直接引用 change.md。</h2>
      <p>当前官网的更新页直接使用根目录 <code>change.md</code>。后续发布时只要同步这份文件，站点导航里的更新文档就会随之更新。</p>
    </div>
    <div class="release-actions">
      <a class="action-primary compact" href="download">下载最新版</a>
      <a class="action-secondary compact subtle" href="change">查看更新文档</a>
    </div>
  </section>
</main>
