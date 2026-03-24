# 项目目录结构说明

## 📁 完整目录结构

```
lobster-miniprogram/
│
├── 📄 package.json              # 项目配置和依赖管理
├── 📄 manifest.json             # 小程序应用配置（三端配置）
├── 📄 pages.json                # 页面路由和 TabBar 配置
├── 📄 uni.scss                  # 全局样式变量
├── 📄 App.vue                   # 应用入口和全局样式
├── 📄 main.js                   # Vue 应用入口
│
├── 📂 pages/                    # 页面目录
│   ├── 📂 index/               # 首页
│   │   ├── index.vue           # 首页组件
│   │   └── index.scss          # 首页样式（可选）
│   │
│   ├── 📂 learn/               # 学习中心
│   │   ├── index.vue           # 学习中心组件
│   │   └── index.scss          # 学习中心样式（可选）
│   │
│   ├── 📂 code/                # 代码库
│   │   ├── index.vue           # 代码库组件
│   │   └── index.scss          # 代码库样式（可选）
│   │
│   └── 📂 mine/                # 个人中心
│       ├── index.vue           # 个人中心组件
│       └── index.scss          # 个人中心样式（可选）
│
├── 📂 components/               # 公共组件目录
│   ├── 📂 CourseCard/          # 课程卡片组件
│   │   └── CourseCard.vue
│   ├── 📂 CodeSnippet/         # 代码片段组件
│   │   └── CodeSnippet.vue
│   └── 📂 ProgressBar/         # 进度条组件
│       └── ProgressBar.vue
│
├── 📂 utils/                    # 工具函数目录
│   ├── request.js              # 网络请求封装
│   ├── storage.js              # 本地存储封装
│   ├── validate.js             # 数据验证工具
│   └── format.js               # 数据格式化工具
│
├── 📂 static/                   # 静态资源目录
│   ├── 📂 images/              # 图片资源
│   │   ├── logo.png            # 应用 Logo
│   │   ├── default-avatar.png  # 默认头像
│   │   └── banner-*.png        # 轮播图
│   │
│   └── 📂 icons/               # TabBar 图标
│       ├── home.png            # 首页图标（未选中）
│       ├── home-active.png     # 首页图标（选中）
│       ├── learn.png           # 学习图标（未选中）
│       ├── learn-active.png    # 学习图标（选中）
│       ├── code.png            # 代码图标（未选中）
│       ├── code-active.png     # 代码图标（选中）
│       ├── mine.png            # 我的图标（未选中）
│       └── mine-active.png     # 我的图标（选中）
│
├── 📂 styles/                   # 全局样式目录
│   ├── variables.scss          # SCSS 变量定义
│   ├── mixins.scss             # SCSS 混入
│   └── common.scss             # 公共样式类
│
├── 📂 uni_modules/              # uni-app 模块目录（自动创建）
│   └── 📂 uview-ui/            # uView UI 组件库
│
├── 📂 dist/                     # 编译输出目录（自动创建）
│   ├── 📂 dev/                 # 开发环境编译输出
│   │   ├── 📂 mp-weixin/       # 微信小程序
│   │   ├── 📂 mp-qq/           # QQ 小程序
│   │   └── 📂 mp-alipay/       # 支付宝小程序
│   │
│   └── 📂 build/               # 生产环境编译输出
│       ├── 📂 mp-weixin/
│       ├── 📂 mp-qq/
│       └── 📂 mp-alipay/
│
├── 📄 TECH-SETUP.md            # 技术栈说明和开发环境配置
├── 📄 PROJECT-STRUCTURE.md     # 项目目录结构说明（本文件）
└── 📄 DEVELOPMENT-GUIDE.md     # 开发规范指南
```

---

## 📄 核心配置文件

### package.json
**作用**: 项目元信息和依赖管理

**关键字段**:
```json
{
  "name": "lobster-miniprogram",
  "version": "1.0.0",
  "scripts": {
    "dev:mp-weixin": "uni -p mp-weixin",
    "build:mp-weixin": "uni build -p mp-weixin"
  },
  "dependencies": {
    "uview-ui": "^3.0.0",
    "prismjs": "^1.29.0"
  }
}
```

### manifest.json
**作用**: 小程序应用配置，包含三端（微信/QQ/ 支付宝）配置

**主要配置**:
- `name`: 应用名称
- `appid`: 各平台 AppID
- `versionName`: 版本名称
- `versionCode`: 版本号
- 各平台特有配置（权限、设置等）

### pages.json
**作用**: 页面路由配置和全局样式

**主要配置**:
- `pages`: 页面路由数组
- `globalStyle`: 全局窗口表现
- `tabBar`: 底部导航栏配置

### uni.scss
**作用**: 全局 SCSS 变量定义

**变量分类**:
- 主题色 (`$uni-color-primary`)
- 文字颜色 (`$uni-text-color`)
- 背景颜色 (`$uni-bg-color`)
- 尺寸变量 (`$uni-spacing-base`)
- 字体大小 (`$uni-font-size-base`)
- 圆角 (`$uni-border-radius-base`)

---

## 📂 目录详细说明

### pages/ - 页面目录

每个页面一个独立目录，包含：
- `index.vue`: 页面组件（必需）
- `index.scss`: 页面样式（可选，推荐内联在 vue 文件中）

**页面命名规范**:
- 使用小写字母
- 多个单词用中划线连接
- 例：`user-center`、`course-detail`

**页面结构**:
```vue
<template>
  <!-- 页面模板 -->
</template>

<script>
export default {
  data() { return {} },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
/* 页面样式 */
</style>
```

### components/ - 公共组件目录

存放可复用的业务组件。

**组件命名规范**:
- 大驼峰命名 (PascalCase)
- 例：`CourseCard`、`CodeSnippet`

**组件结构**:
```
ComponentName/
├── ComponentName.vue    # 组件主体
├── ComponentName.scss   # 组件样式（可选）
└── README.md            # 组件使用说明（可选）
```

### utils/ - 工具函数目录

存放纯 JavaScript 工具函数。

**常用工具**:
- `request.js`: 网络请求封装（uni.request 封装）
- `storage.js`: 本地存储封装（uni.setStorage 封装）
- `validate.js`: 表单验证工具
- `format.js`: 日期、数字格式化

**使用示例**:
```javascript
import { formatDate } from '@/utils/format'
import { request } from '@/utils/request'

const date = formatDate(new Date())
const data = await request({ url: '/api/data' })
```

### static/ - 静态资源目录

存放图片、图标等静态资源。

**资源规范**:
- 图片格式：PNG（透明背景）、JPG（照片）
- 图标尺寸：81x81px（TabBar 图标推荐）
- 文件大小：单文件不超过 200KB
- 命名：使用小写字母和中划线

### styles/ - 全局样式目录

存放全局 SCSS 样式文件。

**文件说明**:
- `variables.scss`: SCSS 变量（颜色、尺寸等）
- `mixins.scss`: SCSS 混入（常用样式组合）
- `common.scss`: 公共样式类（工具类）

---

## 🔄 编译输出

### dist/dev/ - 开发环境

开发模式编译输出，包含：
- 未压缩的代码
- Source Map
- 调试信息

### dist/build/ - 生产环境

生产构建编译输出，包含：
- 压缩后的代码
- 优化的资源
- 无调试信息

---

## 📝 文件命名规范

### 通用规范
- 使用小写字母
- 多个单词用中划线连接（kebab-case）
- 例：`user-info.vue`、`course-list.scss`

### Vue 组件
- 页面组件：`index.vue`
- 业务组件：大驼峰命名，例 `CourseCard.vue`

### 工具函数
- 小驼峰命名，例 `formatDate.js`、`validateForm.js`

### 样式文件
- 与对应组件同名
- 例：`CourseCard.vue` → `CourseCard.scss`

---

## 🎯 最佳实践

### 1. 组件拆分
- 单个文件不超过 500 行
- 复杂功能拆分为子组件
- 保持组件单一职责

### 2. 样式管理
- 优先使用 uni.scss 变量
- 避免硬编码颜色值
- 使用 SCSS 混入复用样式

### 3. 代码组织
- 相关功能放在同一目录
- 及时清理无用代码
- 保持目录结构清晰

### 4. 资源优化
- 图片压缩后使用
- 使用 WebP 格式（如支持）
- 按需加载大图

---

## 📊 目录大小参考

| 目录 | 建议大小 | 说明 |
|------|---------|------|
| pages/ | < 5MB | 页面代码 |
| components/ | < 3MB | 组件代码 |
| static/ | < 10MB | 静态资源（注意小程序包大小限制） |
| utils/ | < 500KB | 工具函数 |

**注意**: 小程序主包限制 2MB，需合理使用分包加载。

---

## 🔗 相关文档

- [TECH-SETUP.md](./TECH-SETUP.md) - 技术栈说明和开发环境配置
- [DEVELOPMENT-GUIDE.md](./DEVELOPMENT-GUIDE.md) - 开发规范指南
