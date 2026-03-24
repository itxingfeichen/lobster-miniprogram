# 技术栈说明和开发环境配置

## 📋 项目概述

**项目名称**: OpenClaw 教程微信小程序  
**技术框架**: uni-app + Vue 3  
**支持平台**: 微信小程序、QQ 小程序、支付宝小程序  
**UI 组件库**: uView UI 3.x  
**代码高亮**: PrismJS  

---

## 🛠 技术栈

### 核心框架
| 技术 | 版本 | 说明 |
|------|------|------|
| uni-app | 3.x | 跨平台应用开发框架 |
| Vue | 3.4+ | 渐进式 JavaScript 框架 |
| Vite | 5.x | 下一代前端构建工具 |

### UI 与样式
| 技术 | 版本 | 说明 |
|------|------|------|
| uView UI | 3.x | 多平台快速开发 UI 框架 |
| SCSS | - | CSS 预处理器 |

### 工具库
| 技术 | 版本 | 说明 |
|------|------|------|
| PrismJS | 1.29+ | 代码语法高亮库 |

---

## 💻 开发环境配置

### 1. 系统要求

- **操作系统**: Windows 10+ / macOS 10.15+ / Linux
- **Node.js**: v16.0+ (推荐 v18+)
- **npm**: v8.0+ 或 yarn v1.22+

### 2. 安装 Node.js

#### Windows/macOS
1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS 版本安装包
3. 运行安装程序，按提示完成安装

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 验证安装
```bash
node -v  # 应显示 v16.x 或更高版本
npm -v   # 应显示 v8.x 或更高版本
```

### 3. 安装 HBuilderX (推荐)

uni-app 官方推荐开发工具：

1. 访问 [HBuilderX 官网](https://www.dcloud.io/hbuilderx.html)
2. 下载对应系统版本
3. 安装并启动 HBuilderX

#### HBuilderX 插件配置
- 打开 HBuilderX
- 菜单 → 工具 → 插件安装
- 确保安装以下插件：
  - uni-app 插件
  - 小程序模拟器插件

### 4. 项目依赖安装

#### 使用 npm
```bash
cd /home/admin/.openclaw/workspace/projects/lobster-miniprogram
npm install
```

#### 使用 yarn
```bash
cd /home/admin/.openclaw/workspace/projects/lobster-miniprogram
yarn install
```

### 5. 小程序开发者工具

#### 微信小程序
1. 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 安装并登录（需要微信小程序账号）
3. 导入项目：选择 `dist/dev/mp-weixin` 目录

#### QQ 小程序
1. 下载 [QQ 小程序开发者工具](https://q.qq.com/wiki/develop/miniprogram/frame/工具/工具下载.html)
2. 安装并登录
3. 导入项目：选择 `dist/dev/mp-qq` 目录

#### 支付宝小程序
1. 下载 [支付宝开发者工具](https://opendocs.alipay.com/mini/ide/download)
2. 安装并登录
3. 导入项目：选择 `dist/dev/mp-alipay` 目录

---

## 🚀 运行项目

### 开发模式

#### 微信小程序
```bash
npm run dev:mp-weixin
```

#### QQ 小程序
```bash
npm run dev:mp-qq
```

#### 支付宝小程序
```bash
npm run dev:mp-alipay
```

### 生产构建

#### 微信小程序
```bash
npm run build:mp-weixin
```

#### QQ 小程序
```bash
npm run build:mp-qq
```

#### 支付宝小程序
```bash
npm run build:mp-alipay
```

### 使用 HBuilderX 运行

1. 用 HBuilderX 打开项目目录
2. 菜单 → 运行 → 运行到小程序模拟器
3. 选择目标平台（微信/QQ/ 支付宝）

---

## 📁 项目结构

```
lobster-miniprogram/
├── pages/                  # 页面目录
│   ├── index/             # 首页
│   ├── learn/             # 学习中心
│   ├── code/              # 代码库
│   └── mine/              # 个人中心
├── components/            # 公共组件
├── utils/                 # 工具函数
├── static/                # 静态资源
│   ├── images/           # 图片资源
│   └── icons/            # 图标资源
├── styles/                # 全局样式
├── App.vue               # 应用配置
├── main.js               # 入口文件
├── manifest.json         # 应用配置
├── pages.json            # 页面配置
├── uni.scss              # 全局样式变量
└── package.json          # 项目依赖
```

---

## ⚙️ 配置说明

### manifest.json

配置小程序的 appId、权限、各平台特有配置。

**重要配置项**:
- `mp-weixin.appid`: 微信小程序 AppID
- `mp-qq.appid`: QQ 小程序 AppID
- `mp-alipay.appid`: 支付宝小程序 AppID

### pages.json

配置页面路由、导航栏样式、TabBar 等。

**TabBar 配置**:
- 4 个 Tab 页面：首页、学习、代码、我的
- 需要准备对应的图标文件（普通状态和选中状态）

### uni.scss

定义全局样式变量，包括：
- 主题色
- 文字颜色
- 背景颜色
- 尺寸变量
- 字体大小
- 圆角设置

---

## 🔧 常见问题

### 1. 依赖安装失败
```bash
# 清除缓存后重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 2. 小程序预览失败
- 检查是否已安装对应平台的开发者工具
- 确认 AppID 配置正确
- 检查网络连接

### 3. 样式不生效
- 确认使用的是 `<style lang="scss" scoped>`
- 检查 uni.scss 变量是否正确引用
- 清除编译缓存后重新运行

### 4. uView UI 组件不显示
- 确认已在 main.js 中引入并注册 uView
- 检查 App.vue 中是否引入 uView 样式
- 确认组件使用方式符合 uView 文档

---

## 📚 参考文档

- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [uView UI 文档](https://www.uviewui.com/)
- [PrismJS 文档](https://prismjs.com/)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [QQ 小程序开发文档](https://q.qq.com/wiki/)
- [支付宝小程序开发文档](https://opendocs.alipay.com/mini/)

---

## 📞 技术支持

如遇到问题，请查阅：
1. 本项目 DEVELOPMENT-GUIDE.md 开发规范
2. 各框架官方文档
3. GitHub Issues
