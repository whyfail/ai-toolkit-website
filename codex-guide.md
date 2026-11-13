---
pageClass: product-doc
---

# Codex 下载安装指南

本文整理 OpenAI 官方桌面应用中 Codex 工作模式的下载与安装方式，覆盖 Windows、macOS Apple Silicon 和 macOS Intel，并补充 Windows 企业/离线部署入口，最后说明如何用 AI Toolkit 把本地模型代理接入 Codex。

> 本文最后核对时间：`2026-08-13`
>
> OpenAI 当前官方文档使用的产品名称是 **ChatGPT desktop app（ChatGPT 桌面应用）**。Codex 已集成在该桌面应用中，不再只是一个单独命名的 GUI 客户端。安装后可在应用内选择 ChatGPT 或 Codex。

建议只从 OpenAI、Microsoft 等官方渠道下载。不要使用第三方下载站提供的“完整版”“绿色版”“破解版”，避免账号、代码仓库和本地文件泄露。

## 一、先确认你要安装什么

本文主要介绍带图形界面的 **ChatGPT 桌面应用及其中的 Codex**，不是单独的 Codex CLI 命令行工具。

桌面应用支持项目和并行任务、Git 与 worktree、内置终端和浏览器、文件预览、插件、技能、定时任务等工作流。Windows 版可以使用原生 PowerShell 和 Windows 沙箱，也可以切换到 WSL2。

官方文档：

- [ChatGPT 桌面应用 / Codex App](https://developers.openai.com/codex/app)
- [Windows 桌面应用](https://developers.openai.com/codex/app/windows)
- [快速开始](https://developers.openai.com/codex/quickstart)

## 二、官方下载入口

### 1. macOS Apple Silicon

适用于 M1、M2、M3、M4、M5 等 Apple 芯片 Mac。

[下载官方 DMG（Apple Silicon）](https://persistent.oaistatic.com/codex-app-prod/Codex.dmg)

安装方法：

1. 下载并打开 `Codex.dmg`。
2. 将应用拖入“应用程序（Applications）”文件夹。
3. 从“应用程序”中打开 ChatGPT。
4. 登录后选择 Codex，或创建/打开项目目录开始使用。

### 2. macOS Intel

适用于 Intel 处理器 Mac。可在“苹果菜单 > 关于本机”中查看芯片或处理器类型。

[下载官方 DMG（Intel）](https://persistent.oaistatic.com/codex-app-prod/Codex-latest-x64.dmg)

安装方法与 Apple Silicon 版相同。两种 DMG 的架构不同，不要混用。

### 3. Windows：普通用户推荐方式

OpenAI 面向普通用户提供的是 Microsoft 签名的网页安装器：

[下载 Windows 官方网页安装器](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi)

截至本文核对时间，该链接下载的文件名是 `ChatGPT Installer.exe`，大小约 1.4 MB。它是引导安装器，不是完整离线安装包；安装或更新过程中可能会调用 Microsoft Store 相关组件，但通常不需要用户手动打开商店页面。

也可以在 PowerShell 或 Windows 终端中执行官方文档给出的命令：

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

其中 `9PLM9XGG6VKS` 是 ChatGPT 桌面应用的 Microsoft Store 产品 ID。

## 三、Windows 无法使用 Microsoft Store 时

### 1. 先尝试网页安装器

直接运行官方 [`ChatGPT Installer.exe`](https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi)。用户不需要浏览 Microsoft Store，但安装和自动更新仍可能使用 Microsoft 的应用分发组件。

### 2. 再尝试 winget

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
```

如果 `msstore` 源异常，可以先检查并重置来源：

```powershell
winget source list
winget source reset --force
```

然后重新执行安装命令。

### 2.5 用链接生成器直接下载 Store 完整包（不打开商店、不用引导安装器）

如果引导安装器和 winget 都不可用，可以通过 [store.rg-adguard.net](https://store.rg-adguard.net/) 生成 Microsoft Store 服务器的直链，直接下载完整安装包：

1. 打开 [store.rg-adguard.net](https://store.rg-adguard.net/)。
2. 左侧下拉框选择 **ProductID**。
3. 输入 ChatGPT 桌面应用的商店产品 ID：`9PLM9XGG6VKS`，右侧渠道保持 `RP`（Retail，正式版）。
4. 点对勾按钮，等待提示 "The links were successfully received from the Microsoft Store server"。
5. 按设备架构下载对应的 `.msix` 文件（截至最近一次核对：x64 版约 905 MB，arm64 版约 975 MB）。列表中的 `.BlockMap` 是校验辅助文件，不用下载。

下载完成后双击 `.msix` 即可安装（Windows 10/11 默认支持；如提示不受信任，确认文件确实来自 Microsoft 分发服务器再继续）。

**安全提醒**：rg-adguard 是第三方网页工具，但它生成的链接直接指向 Microsoft 官方分发服务器（`*.delivery.mp.microsoft.com`），拿到的是与商店同款的签名包。文件名中带有完整版本号（如 `OpenAI.Codex_26.1013.3656.0_x64`），下载前可与商店页面显示的版本号核对；直链有时效（数小时内过期），失效后重新生成即可。本方法适合商店被禁、安装器装不上的场景，普通用户仍建议优先使用前文的官方方式。

### 3. 官方 MSIX：企业、受管设备或离线部署

这部分是相较旧版指南最重要的变化。OpenAI 现已提供最新的 **Store 签名 MSIX**，用于无法通过 Microsoft 应用分发服务完成初次安装的环境：

- [下载 Windows x64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-x64.msix)：适用于绝大多数 Intel/AMD Windows 电脑
- [下载 Windows Arm64 MSIX](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-arm64.msix)：适用于 Snapdragon 等 Arm64 Windows 设备
- [下载离线许可证 ChatGPT-License.xml](https://persistent.oaistatic.com/codex-app-prod/ChatGPT-License.xml)：离线部署流程需要许可证文件时使用

这些稳定链接始终指向 OpenAI 最新发布的 Store 签名包。官方主要将它们用于 Microsoft Intune、MDM 或其他企业软件部署平台；普通个人用户仍应优先使用网页安装器或 `winget`。

企业管理员应根据设备架构选择对应 MSIX，并按组织的 MDM/软件分发平台要求导入 MSIX 和（需要时）离线许可证。完成初次安装后，只要设备可访问 `persistent.oaistatic.com`，应用即可按组织的更新策略获取后续更新。

详细说明见：[Windows 应用企业部署文档](https://developers.openai.com/codex/enterprise/windows-deployment)。

## 四、安装后的首次使用

1. 打开 ChatGPT 桌面应用。
2. 使用 ChatGPT 账号登录。桌面应用、Codex CLI 和 IDE 扩展的本地工作也支持 API Key 登录。
3. 新建聊天、创建项目，或打开一个本地文件夹。
4. 在应用中选择 ChatGPT 或 Codex；使用 Codex 时，从 `New chat` 开始并描述要完成的任务。

使用 ChatGPT 登录时，Codex 权限、用量和数据控制取决于你的 ChatGPT 套餐及工作区策略。使用 API Key 时，费用按 OpenAI Platform 的标准 API 价格结算，依赖 ChatGPT 工作区或云服务的部分功能可能受限或不可用。

认证方式详见：[OpenAI authentication](https://developers.openai.com/codex/auth)。

## 五、Windows 原生与 WSL2 怎么选

Windows 桌面应用默认使用 Windows 原生 Codex agent，并在 PowerShell 中运行命令。也可以在设置中切换为 WSL，但切换后需要重启应用才会生效。

- 使用 Windows 原生 agent：项目优先放在 Windows 文件系统中；从 WSL 访问时使用 `/mnt/<盘符>/...`。
- 使用 WSL2 agent：可通过“添加新项目”打开 `\\wsl$\` 下 Linux 发行版中的目录。
- WSL1：从 Codex `0.115` 起不再受支持，应使用 WSL2。

在发送任务前，可在输入框下方选择 `Ask for approval` 以启用相应沙箱保护。`Full access` 会扩大 Codex 可访问的范围，应只在明确理解风险时使用。

详见：[Windows 桌面应用与 WSL2](https://developers.openai.com/codex/app/windows)。

## 六、不要把桌面应用和 Codex CLI 混淆

如果你需要图形界面，请使用第二节的 DMG、Windows 网页安装器或 MSIX。

如果你需要的是终端中的 **Codex CLI**，请以官方 CLI 页面当前显示的安装方式为准。例如：

```bash
npm install -g @openai/codex
```

安装后在项目目录运行：

```bash
codex
```

CLI 与桌面应用是不同的使用入口，安装 CLI 不等于安装 Windows/macOS 图形界面客户端。官方 CLI 文档：[Codex CLI](https://developers.openai.com/codex/cli)。

## 七、用 AI Toolkit 接入免费额度与本地模型代理

装好 Codex 之后，如果没有 ChatGPT 订阅也不想买 API 额度，可以用 AI Toolkit 把 WorkBuddy、TRAE CN、Qoder、MiniMax Code 这些平台送的免费积分接进 Codex 等编程工具。AI Toolkit 是跨平台的桌面管理器（Tauri 2，支持 macOS / Windows / Linux），同一套界面里管理平台积分、本地模型代理、MCP Server 与 Skills，也能检测本机已安装的 Codex 等工具。

### 1. 免费积分自动领，不放过每一天

<div class="feature-grid">
  <article class="feature-card">
    <h3>多平台积分总览</h3>
    <p>在一个面板里查看 WorkBuddy、TRAE CN、Qoder、MiniMax Code 的原生积分、更新时间和额度包。</p>
    <ul>
      <li>支持官方授权登录，也支持 Token / 凭据 JSON 导入</li>
      <li>TRAE CN 可一键导入本机桌面登录态</li>
      <li>凭据保存在系统凭据库，界面不展示已保存凭据</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>自动领取，不靠记性</h3>
    <p>自动领取默认关闭，开启后在应用运行期间按北京时间每天 10:30 检查。</p>
    <ul>
      <li>下次启动可补做错过的检查，已领取任务自动跳过</li>
      <li>只处理平台明确可领的积分任务，优惠券等奖励单独显示</li>
      <li>保留最近领取记录与失败原因</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>按平台组织任务</h3>
    <p>不同平台的发放规则不同，AI Toolkit 按各平台实际能力处理。</p>
    <ul>
      <li>Qoder 只处理实时可领取的积分任务</li>
      <li>MiniMax Code 根据实时七日面板领取</li>
      <li>WorkBuddy 国际活跃奖励由平台自动结算</li>
    </ul>
  </article>
  <article class="feature-card">
    <h3>国内与国际账号分开</h3>
    <p>国内、国际账号独立存储与调度，积分、USD 和请求次数按原生单位分项展示。</p>
    <ul>
      <li>国际版适配仍在推进，开放范围见功能页的支持矩阵</li>
      <li>登录过期、余额未知等状态有明确提示</li>
      <li>旧数据迁移前会先创建备份</li>
    </ul>
  </article>
</div>

### 2. 本地代理：把各家免费额度接进 Codex 等工具

- 手动开启本地代理后得到一个统一入口（默认 `http://127.0.0.1:17860/v1`），同时兼容 OpenAI Chat Completions 和 Anthropic Messages 两种协议。
- 各家送的额度可以直接喂给 Codex CLI、Claude Code、ZCode、TRAE 等编程工具，不用在好几家客户端之间来回切。
- 模型 ID 带平台前缀（如 `workbuddy/glm-5.3-flash`）用于指定平台；已确认相同型号可使用通用别名，别名可在多个免费账号间自动调度，优先消耗快到期的积分。
- 填写错误的模型 ID 会明确报错；具体型号与工具调用能力以账户目录和验证结果为准。
- 代理使用独立的 API Key，与平台账号无关，随时可以轮换；代理跟随 AI Toolkit 运行，应用退出后停止。

**四步上手**：添加账户并登录（支持 Token/JSON 导入，TRAE CN 可一键导入本机凭据）→ 开启本地代理 → 复制 Base URL、代理 API Key、模型 ID 三件套 → 把三件套接入客户端并测试。

### 3. Codex 需要借助 cc-switch 写入配置

Codex 属于“切换模式”客户端，配置需由 [cc-switch](https://github.com/farion1231/cc-switch) 统一管理：

1. 在 cc-switch 侧边栏选择 Codex。
2. 点 “+” 添加自定义提供商，填入 AI Toolkit 代理的 Base URL、API Key、模型 ID。
3. 点 Enable 一键写入 Codex 配置，首次改写前会自动备份到 `~/.cc-switch/backups/`。

cc-switch 还支持本地路由（默认 `127.0.0.1:15721`）做协议转换，例如在 Codex 里使用 Claude 格式的服务。Codex 改动配置后需完全重启才生效。

AI Toolkit 也已识别本机安装的 Codex（CLI、桌面版和 IDE 扩展共用一个入口），MCP 配置会写到 `~/.codex/config.toml`，可以和上面的代理配置一起使用。

### 薅之前要心里有数

- 凭据存进系统凭据库（macOS Keychain / Windows 凭据管理器 / Linux Secret Service），界面不展示已保存凭据。
- 免费积分始终留在来源平台，Token 消耗不直接等于积分扣减，以平台实际结算为准；模型目录里能看到不等于实测可用。
- 平台接口与账户权限决定余额、领取与推理的实际可用性，未支持的能力会显示状态。
- 多开免费账号薅积分有被平台风控的风险，建议以官方正常发放的免费额度为主。

想了解完整功能，见 [功能总览](/features)；安装 AI Toolkit 见 [下载](/download)。

## 八、常见问题

### Windows 安装器为什么只有约 1.4 MB？

因为它是网页引导安装器，会在安装过程中获取完整应用。需要企业或离线部署时，请改用与设备架构匹配的官方 MSIX。

### Windows x64 和 Arm64 应该选哪个？

大多数 Intel 或 AMD 处理器电脑选择 x64；Snapdragon 等 Arm Windows 设备选择 Arm64。可在“设置 > 系统 > 系统信息 > 系统类型”中确认。

### macOS 应该选 Apple Silicon 还是 Intel？

在“苹果菜单 > 关于本机”中查看：显示 Apple M 系列芯片时选择 Apple Silicon；显示 Intel 处理器时选择 Intel。

### Microsoft Store 被公司禁用，还能安装吗？

可以先试网页安装器。若 Microsoft 应用分发服务整体不可用，组织管理员可使用 OpenAI 官方 Store 签名 MSIX 和离线许可证，经 Intune、MDM 或软件部署平台分发。

### 能否使用 API Key 登录？

可以。API Key 适用于本地 Codex 工作，但按 API 用量计费，且部分依赖 ChatGPT 工作区或云服务的功能会受限。日常个人使用通常优先选择 ChatGPT 账号登录。

## 九、官方来源与安全校验

本文只使用以下官方域名：

- `developers.openai.com`：OpenAI 官方 Codex 文档
- `learn.chatgpt.com`：OpenAI 官方 ChatGPT / Codex 文档的当前站点
- `persistent.oaistatic.com`：OpenAI 官方安装包静态资源
- `get.microsoft.com`：Microsoft 官方网页安装器
- `chatgpt.com`：ChatGPT 与 Codex 官方服务
- `github.com/openai/codex`：OpenAI Codex 开源仓库

核心官方页面：

- [ChatGPT 桌面应用](https://developers.openai.com/codex/app)
- [Windows 桌面应用](https://developers.openai.com/codex/app/windows)
- [Windows 企业部署](https://developers.openai.com/codex/enterprise/windows-deployment)
- [Codex 快速开始](https://developers.openai.com/codex/quickstart)
- [Codex 认证](https://developers.openai.com/codex/auth)
- [Codex CLI](https://developers.openai.com/codex/cli)
- [Codex GitHub 仓库](https://github.com/openai/codex)

不要从来源不明的网站下载“绿色版”“破解版”“免登录版”或重新打包的安装程序。Codex 可以访问本地项目和执行命令，篡改过的客户端可能造成登录凭证、源代码和本地文件泄露。
