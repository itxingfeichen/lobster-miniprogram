# 更新日志

All notable changes to this project will be documented in this file.

## [2026-03-28]

### 新增
- 教程详情页 `pages/learn/detail.vue`
  - Markdown 内容渲染
  - 点赞、收藏功能
  - 标记已读功能
  - 相关文章推荐
  - 分享功能
  - UI 美化优化
- 代码详情页 `pages/code/detail.vue`
- 学习记录页 `pages/mine/learning-record.vue`
- 收藏页 `pages/mine/favorites.vue`
- 浏览历史页 `pages/mine/history.vue`
- 设置页 `pages/mine/settings.vue`
- 意见反馈页 `pages/mine/feedback.vue`
- Markdown 解析工具 `utils/markdown.js`

### 修复
- uview-ui 路径配置错误 (`vite.config.js`)
- uni.scss 中的 SCSS 导入路径
- API 文件从 CommonJS 转换为 ES Module
- 底部导航图标（SVG 转 PNG 格式）
- 首页 Banner 和教程卡片跳转逻辑

### 优化
- 教程详情页 UI 美化
  - 渐变背景头部
  - 深色代码块主题
  - 毛玻璃效果底部栏
  - 绿色强调样式
- 修复页面找不到的错误

### 隐藏/移除
- 首页学习进度板块
- 个人中心全部功能
- 底部"我的"导航栏

---

## 更新日志格式

```
## [版本号/日期]

### 新增
- 新功能描述

### 修复
- 问题修复描述

### 优化
- 性能或体验改进

### 移除/隐藏
- 移除的功能描述
```
