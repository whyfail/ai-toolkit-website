---
pageClass: product-doc download-page
---

# 下载

AI Toolkit 当前通过 GitHub Releases 分发安装包。下载前请先看完下方注意事项，尤其是 macOS 未签名应用的首次运行授权步骤。

<section class="download-hero">
  <div>
    <p class="section-label">Latest release</p>
    <h2>从 GitHub Releases 获取最新安装包。</h2>
    <p>建议优先进入最新 Release 页面，根据你的系统选择对应安装包。GitHub 会始终把这个入口跳转到当前最新版本。</p>
    <div class="download-actions">
      <a class="action-primary compact" href="https://github.com/whyfail/AI-Toolkit/releases/latest" target="_blank" rel="noreferrer">打开最新 Release</a>
      <a class="action-secondary compact subtle" href="https://github.com/whyfail/AI-Toolkit" target="_blank" rel="noreferrer">查看源码仓库</a>
    </div>
  </div>
  <div class="download-panel">
    <strong>下载建议</strong>
    <span>macOS 选择 <code>.dmg</code> 或 <code>.app.tar.gz</code></span>
    <span>Windows 选择 <code>.msi</code></span>
    <span>Linux 当前仍在开发中，基础功能可用</span>
  </div>
</section>

## 下载注意事项

<div class="notice-grid">
  <article class="notice-card important">
    <h3>没有安全证书</h3>
    <p>当前版本尚未进行 Apple 代码签名和公证，macOS 首次打开时可能提示“无法验证开发者”或“文件已损坏”。这不是安装包一定损坏，而是系统拦截未签名应用。</p>
  </article>
  <article class="notice-card">
    <h3>需要手动授权</h3>
    <p>如果 macOS 阻止启动，需要通过终端清理隔离属性、右键打开，或在系统设置的隐私与安全性中手动放行。</p>
  </article>
  <article class="notice-card">
    <h3>只从官方仓库下载</h3>
    <p>请从 <a href="https://github.com/whyfail/AI-Toolkit/releases/latest" target="_blank" rel="noreferrer">whyfail/AI-Toolkit Releases</a> 下载，避免使用第三方转存包。</p>
  </article>
  <article class="notice-card">
    <h3>更新由用户确认</h3>
    <p>应用会在启动时检查 GitHub Releases；发现新版本后会弹窗提示，由用户决定是否下载安装。</p>
  </article>
</div>

## macOS 首次运行授权

<div class="install-steps">
  <article>
    <span>01</span>
    <h3>拖入 Applications</h3>
    <p>下载并打开 <code>.dmg</code> 后，将 <code>AI Toolkit.app</code> 拖入 <code>/Applications</code>。</p>
  </article>
  <article>
    <span>02</span>
    <h3>执行授权命令</h3>
    <p>打开终端，执行下方命令清理 macOS 隔离属性。</p>
    <pre><code>sudo xattr -cr "/Applications/AI Toolkit.app"</code></pre>
  </article>
  <article>
    <span>03</span>
    <h3>再次打开应用</h3>
    <p>输入开机密码完成命令后，双击打开 AI Toolkit。如果仍被拦截，可右键应用图标选择“打开”。</p>
  </article>
</div>

## 其他放行方式

| 方式 | 操作 |
| --- | --- |
| 右键打开 | 在访达中右键或按住 `Control` 点击 `AI Toolkit.app`，选择“打开”，再在系统警告框中确认“打开”。 |
| 系统设置放行 | 打开“系统设置” → “隐私与安全性”，找到 AI Toolkit 被阻止的提示，点击“仍要打开”。 |
| Windows SmartScreen | 如果 Windows 出现 SmartScreen 提示，请确认来源为官方 GitHub Release 后，再选择继续运行。 |

## 平台支持

| 系统 | 状态 | 下载说明 |
| --- | --- | --- |
| macOS 12+ | 已支持 | 优先下载 Apple Silicon 的 `.dmg` 安装包。 |
| Windows 10+ | 已支持 | 下载 `.msi` 安装包。 |
| Linux | 开发中 | 当前以基础功能可用为主，正式安装包以 Release 页面为准。 |
