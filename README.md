# OpenClaw 教程微信小程序

> 🦞 多平台小程序教程应用 - 学习 OpenClaw 智能体协作平台

## 📱 项目简介

这是一个帮助您学习使用 OpenClaw 智能体协作平台的教程小程序，支持**微信**、**QQ**、**支付宝**三端运行。

### 功能特色

- 📚 **系统化课程** - 从入门到进阶的完整学习路径
- 💻 **代码片段库** - 实用的代码示例和模板
- 📊 **学习进度跟踪** - 实时查看学习数据和完成情况
- 🎨 **精美 UI 设计** - 基于 uView UI 的现代化界面
- 🌐 **多平台支持** - 一次开发，多端运行

## 🚀 快速开始

### 环境要求

- Node.js v16+
- HBuilderX（推荐）或 uni-app CLI
- 小程序开发者工具（微信/QQ/ 支付宝）

### 安装依赖

```bash
cd lobster-miniprogram
npm install
```

### 运行项目

```bash
# 微信小程序
npm run dev:mp-weixin

# QQ 小程序
npm run dev:mp-qq

# 支付宝小程序
npm run dev:mp-alipay
```

### 生产构建

```bash
# 微信小程序
npm run build:mp-weixin

# QQ 小程序
npm run build:mp-qq

# 支付宝小程序
npm run build:mp-alipay
```

## 📁 项目结构

```
lobster-miniprogram/
├── pages/              # 页面目录
│   ├── index/         # 首页
│   ├── learn/         # 学习中心
│   ├── code/          # 代码库
│   └── mine/          # 个人中心
├── components/        # 公共组件
├── utils/             # 工具函数
├── static/            # 静态资源
├── uni_modules/       # uni-app 模块
├── App.vue            # 应用入口
├── main.js            # 入口文件
├── manifest.json      # 应用配置
├── pages.json         # 页面配置
└── uni.scss           # 全局样式
```

## 📖 文档

- [技术栈说明和开发环境配置](./TECH-SETUP.md)
- [项目目录结构说明](./PROJECT-STRUCTURE.md)
- [开发规范指南](./DEVELOPMENT-GUIDE.md)

## 🛠 技术栈

- **框架**: uni-app + Vue 3
- **UI**: uView UI 3.x
- **构建**: Vite 5.x
- **代码高亮**: PrismJS
- **样式**: SCSS

## 📦 核心页面

| 页面 | 路径 | 功能 |
|------|------|------|
| 首页 | `/pages/index/index` | 欢迎页、快速入口、学习进度、推荐课程 |
| 学习中心 | `/pages/learn/index` | 课程列表、分类筛选、搜索、进度跟踪 |
| 代码库 | `/pages/code/index` | 代码片段、语言筛选、复制收藏 |
| 个人中心 | `/pages/mine/index` | 用户信息、学习数据、功能菜单 |

## 🔧 开发工具

### 推荐 IDE

- [HBuilderX](https://www.dcloud.io/hbuilderx.html) - uni-app 官方推荐
- [VS Code](https://code.visualstudio.com/) + uni-app 插件

### 小程序开发者工具

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [QQ 小程序开发者工具](https://q.qq.com/wiki/develop/miniprogram/frame/工具/工具下载.html)
- [支付宝开发者工具](https://opendocs.alipay.com/mini/ide/download)

## 📝 开发规范

请参考 [DEVELOPMENT-GUIDE.md](./DEVELOPMENT-GUIDE.md)

### 代码提交规范

```bash
# 新功能
git commit -m "feat(page): 添加课程详情页面"

# 修复 Bug
git commit -m "fix(code): 修复代码复制功能"

# 文档更新
git commit -m "docs: 更新 README 说明"
```

## 🤝 贡献指南

欢迎贡献代码、提交 Issue 或 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

MIT License

## 📞 联系方式

- 项目地址：[GitHub](https://github.com/your-repo/lobster-miniprogram)
- 问题反馈：[Issues](https://github.com/your-repo/lobster-miniprogram/issues)

---

_让学习 OpenClaw 变得更简单！_ 🦞
