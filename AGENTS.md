# AGENTS.md - 项目知识库

## 项目概述

- **项目名称**: lobster-miniprogram
- **类型**: 跨平台小程序 (uni-app + Vue 3)
- **支持平台**: 微信小程序、QQ 小程序、支付宝小程序
- **描述**: OpenClaw 智能体协作平台教程小程序

## 技术栈

| 技术 | 版本 |
|------|------|
| uni-app | ^3.0.0 |
| Vue | ^3.4.21 |
| Vite | ^5.2.8 |
| uView UI | ^2.0.36 (占位) |
| SCSS | - |

## 项目结构

```
├── pages/              # 页面
│   ├── index/         # 首页
│   ├── learn/         # 学习中心
│   │   └── detail.vue # 教程详情 (已实现)
│   └── code/          # 代码库
├── api/               # API 接口 (ES Module)
├── mock/              # Mock 数据 (ES Module)
├── utils/             # 工具函数
│   ├── request.js    # 网络请求
│   ├── storage.js   # 本地存储
│   ├── format.js    # 格式化
│   ├── validate.js  # 验证
│   └── markdown.js  # Markdown 解析
├── static/           # 静态资源
├── styles/           # 全局样式
├── uni_modules/      # uni-app 模块
├── pages.json         # 页面路由配置
├── uni.scss          # 全局 SCSS 变量
└── vite.config.js   # Vite 配置
```

## 当前分支

`feature/hide-progress` - 开发中，隐藏进度相关功能

## 核心功能

### 已实现
- 首页 Banner + 推荐课程
- 学习中心：教程列表、分类筛选、搜索
- 代码库：代码片段、语言筛选
- 教程详情页：Markdown 渲染、点赞、收藏、标记已读、相关文章

### 已屏蔽（待开发）
- 首页学习进度
- 个人中心全部功能
- 底部"我的"导航

## 常用命令

```bash
# 开发
npm run dev:mp-weixin   # 微信小程序
npm run dev:mp-qq       # QQ 小程序
npm run dev:mp-alipay   # 支付宝小程序

# 构建
npm run build:mp-weixin
npm run build:mp-qq
npm run build:mp-alipay
```

## 开发注意事项

1. **API 模块使用 ES Module** - 导入使用 `import { xxx } from '@/api/xxx'`
2. **Mock 数据** - 通过 `mock/index.js` 的 `isMockEnabled()` 控制
3. **页面路径** - uni-app 目录结构，pages.json 中配置路由
4. **TabBar 图标** - 必须是 PNG 格式 (81x81)
5. **SCSS 变量** - 在 `uni.scss` 中定义，全局可用

## Git

- 已配置永久凭证
- 远程: https://github.com/itxingfeichen/lobster-miniprogram.git
