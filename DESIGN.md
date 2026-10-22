# AI Toolkit 官网设计规范

这套规范定义 AI Toolkit 文档站（`AI-Toolkit-Docs`）的视觉语言。它不是通用落地页模板，而是从应用本身的外观推导出来的：**文档站应该看起来像产品的一部分，而不是产品的广告**。

所有样式实现集中在 `.vitepress/theme/custom.css`，配置在 `.vitepress/config.ts`。

---

## 1. 方向：产品同源的素色文档（Product Native）

应用界面是浅色、偏冷的 macOS 风格：近白底、白色卡片、柔和圆角、单一蓝色强调。网站过去使用的是深色霓虹渐变（发光按钮、渐变大字、网格底纹），与产品语言相反，也与“文档”这一用途不匹配。

现在的方向可以概括为：

- **浅色优先**：默认浅色，跟随系统，可手动切换；深色是安静的对应版本，不是霓虹主题。
- **一个强调色**：主蓝只用于链接、选中态、主按钮。每屏不超过 3 次。
- **结构靠留白与发丝线**：1px 边框、分隔线、字号层级建立秩序，不靠阴影和发光。
- **系统字体**：零网络字体。中文走系统的 PingFang SC / Noto Sans SC，英文走 SF Pro / Segoe UI。

参考谱系：Apple HIG（浅色、系统字体）、Astro Starlight（三栏文档壳）、Linear / Vercel（安静深色变体）。

## 2. 设计令牌

### 浅色（默认）

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--canvas` | `#fbfbfd` | 页面底色 |
| `--canvas-alt` | `#f5f6f9` | 侧栏、次级面 |
| `--surface` | `#ffffff` | 卡片、截图框 |
| `--surface-2` | `#f2f4f7` | 内联代码、代码块、悬停 |
| `--ink` | `#15181d` | 标题（约 17:1） |
| `--body` | `#414855` | 正文（约 8.9:1） |
| `--muted` | `#5f6775` | 次要文案（约 5.5:1） |
| `--faint` | `#6b7381` | 说明与元信息（约 4.6:1） |
| `--border` / `--border-strong` | `#e2e5ea` / `#d3d8e0` | 卡片边框 / 输入框、悬停边框 |
| `--divider` | `#ebedf1` | 分隔线、表格行线 |
| `--accent` | `#2f6fe0` | 链接、选中态（约 4.5:1） |
| `--accent-fill` | `#2f6fe0` | 主按钮底色（白字约 4.7:1） |
| `--accent-soft` | `rgba(47,111,224,.09)` | 选中背景、提示块 |
| `--warn` | `#8f540b` | 唯一的暖色信号（未签名提示） |

### 深色（安静变体）

| 令牌 | 值 |
| --- | --- |
| `--canvas` | `#0c0e12` |
| `--canvas-alt` | `#090b0e` |
| `--surface` | `#14181f` |
| `--surface-2` | `#191e26` |
| `--ink` / `--body` / `--muted` | `#e7e9ee` / `#b6bdc8` / `#8d95a2` |
| `--border` | `#242a34` |
| `--accent`（链接） | `#7aa2ff` |
| `--accent-fill`（按钮） | `#2f6fe0` |

> 深色下链接偏亮（`#7aa2ff`），填充按钮仍用深蓝（`#2f6fe0`）配白字。两者的对比度都过 AA；不要反过来用亮蓝填充配白字。

## 3. 字体与排版

- 正文字体：`-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif`
- 等宽字体：`ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`
- 正文 16px / 行高 1.8（中文 1.82，字距 `0.01em`）
- 页面标题 34px（移动端 28px）
- 区块标题 21px，卡片标题 15～16.5px
- 正文测量宽度：688px（带目录）/ 728px（无目录），不要超过 760px —— 中文每行 40 字左右最舒适

标题字重 600～680，不使用渐变文字。中文不加负字距。

## 4. 布局

- 三栏文档壳：侧栏 248px（`--vp-sidebar-width`）、正文 688px、右侧目录 224px
- 顶栏 56px（`--vp-nav-height`），底部 1px 分隔线；半透明 + `backdrop-filter` 模糊
- 首页不显示侧栏（`sidebar: false`），版心 1120px
- 区块之间用 `border-top: 1px solid var(--divider)` 分隔，间距 48～72px

## 5. 组件规则

| 组件 | 规则 |
| --- | --- |
| 卡片 | 白色 `--surface` + 1px `--border` + 10px 圆角；**无阴影、无悬停位移**，悬停只加深边框 |
| 按钮 | 主按钮实心主蓝、次按钮白底描边；圆角 7px；无渐变、无发光 |
| 截图框 | 1px 边框 + 10px 圆角 + 极轻阴影；图注 12.5px `--faint`，上方发丝线；**页面引用 `screenshots/webp/`，不直接引源 PNG** |
| 工具标签 | 白底描边、13px；图标 20px 圆角 5px |
| 配置路径 | 发丝线分隔的两栏列表（名称 / 等宽路径），**不要做成卡片堆** |
| 安装步骤 | 竖向编号列表，编号用等宽字体；命令行占满正文宽度 |
| 能力网格 | 四列，用竖发丝线切分，编号 `01–04`；不使用图标块和盒子 |
| 表格 | 只保留水平线，表头 12.5px `--faint`，单元格 14px |
| 内联代码 | `--surface-2` 底、1px 边框、5px 圆角、0.85em |
| 提示块 | 1px 边框 + 浅底；`tip` 用主蓝色调，`warning` 用 `--warn` |

## 6. 动效

- 过渡 140ms，`cubic-bezier(.2,.7,.3,1)`，只用于颜色、边框、背景
- 不使用入场动画、悬停位移、缩放
- `prefers-reduced-motion` 下全部降级为 0.01ms

## 7. 可访问性

- 正文对比度 ≥ 4.5:1，已验证：正文 8.9、次要 5.5、说明 4.6、链接 4.5、主按钮白字 4.7
- 焦点环：2px 主蓝 + 2px 偏移
- 不依赖颜色单独表达状态（当前项同时改变字重/背景）
- 触控目标 ≥ 44px（主按钮）

## 8. 图片管线

- 母版：`public/screenshots/*.png`（1800×1200，与主仓库 `assets/screenshots/` 逐文件一致，只作源文件）
- 站点实际加载：`public/screenshots/webp/*.webp`（1800px、质量 82），体积 3.2 MB → 352 KB（约 −89%）
- 重新生成：`python3 scripts/build-images.py`（需 Pillow）
- 替换截图后必须重跑生成脚本，并同步检查 `index.md`、`features.md`、`highlights.md`、`scripts/sync-changelog.mjs`

## 9. 不要这样做

- 不要加回渐变文字、发光阴影、网格底纹、玻璃拟态
- 不要用 20px 以上的圆角，不要卡片悬停上浮
- 不要引入网络字体（尤其是整包中文 webfont，体积 3–8MB）
- 不要为了“科技感”把页面锁成纯深色
- 不要在文档页复用营销页的大字标题；文档页的层级应由正文结构承担

## 10. 后续可选增强

- 文档页加“编辑此页”链接（`themeConfig.editLink`，需先确认文档仓库地址）
- 输出 `llms.txt` 与“复制为 Markdown”
- 404 页与搜索弹层的品牌化微调

## 11. 验收记录（2026-10-22）

| 项 | 结果 |
| --- | --- |
| 构建 | `npm run build` 通过，产物仅 6 个页面（index / download / features / highlights / change / 404） |
| 生产一致性 | `vitepress preview` 截图与 dev 一致（SFC 样式顺序无差异） |
| 对比度 | 浅色 7/7、深色 6/6 组合全部 ≥ 4.5:1（正文 8.9 / 10.2，说明 4.6 / 4.9，链接 4.5 / 7.8） |
| 字体 | 0 个 `@font-face`、0 个 woff2（改用 `vitepress/theme-without-fonts`，产物减重 628 KB） |
| 功能页传输量 | 429 KB（HTML 29 + CSS 130 + 图片 261），改版前约 3.4 MB |
| 截图体积 | 源 PNG 3.2 MB → WebP 352 KB（−89%） |
| 功能页高度 | 11,143 px → 8,039 px（收敛重复的发布记录） |
| 响应式 | 390 / 1440 两档实测通过；320–1920 无横向滚动 |
