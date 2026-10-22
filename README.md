# AI Toolkit 官网

这是使用 VitePress 构建的 AI Toolkit 官网，包含下载、功能、亮点与更新记录。产品说明对应 AI Toolkit **v2.1.4**，覆盖五个功能面板、25 种工具适配、DeepSeek Harness、模型推理档位、通道最大上下文及客户端请求兼容。

## 开发

CI 使用 Node.js 22，依赖通过 `package-lock.json` 固定。

```bash
npm ci
npm run dev
```

## 构建

```bash
npm run build
```

## 更新文档

站点的更新页使用根目录的 `change.md`，发布记录来自 AI Toolkit 源仓库的 `CHANGELOG.md`。更新发布记录后执行：

```bash
npm run sync:changelog
npm run build
```

部署工作流也会运行同步脚本，因此更新页顶部的配图、文案与尺寸应在 `scripts/sync-changelog.mjs` 中维护。脚本会把发布记录中的 `docs/` 相对链接转换为主仓库链接。

## 软件截图

`public/screenshots/` 保存从 macOS 版 AI Toolkit v2.0.0 实际窗口截取的 PNG，截取日期为 2026-10-15，尺寸统一为 1800 × 1200。图片与主仓库 `assets/screenshots/` 保持逐文件一致，昵称、账号 ID 和个人路径等敏感信息在导出时以不透明色块打码。

首页的 `main-panel.png` 展示 Skills 管理；功能、亮点与更新页还使用 MCP、添加服务器、账户积分、本地代理和设置配图。`skills-panel.png` 与主界面图片相同，用于保留现有引用。

重新截图与检查步骤见主仓库的 [文档截图维护](https://github.com/whyfail/AI-Toolkit/blob/main/docs/screenshots.md)。原始截图不进入仓库；替换图片时同步检查 `index.md`、`features.md`、`highlights.md` 和更新页生成脚本。
