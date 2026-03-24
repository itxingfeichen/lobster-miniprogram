# 开发规范指南

## 📋 目录

1. [代码规范](#代码规范)
2. [Vue 组件规范](#vue-组件规范)
3. [样式规范](#样式规范)
4. [Git 规范](#git 规范)
5. [提交规范](#提交规范)
6. [测试规范](#测试规范)
7. [性能优化](#性能优化)
8. [安全规范](#安全规范)

---

## 代码规范

### JavaScript/Vue 规范

#### 1. 使用 ES6+ 语法
```javascript
// ✅ 推荐
const getUserInfo = (id) => {
  return { id, name: 'User' }
}

// ❌ 不推荐
var getUserInfo = function(id) {
  return { id: id, name: 'User' }
}
```

#### 2. 使用解构赋值
```javascript
// ✅ 推荐
const { name, age } = userInfo

// ❌ 不推荐
const name = userInfo.name
const age = userInfo.age
```

#### 3. 使用模板字符串
```javascript
// ✅ 推荐
const greeting = `Hello, ${name}!`

// ❌ 不推荐
const greeting = 'Hello, ' + name + '!'
```

#### 4. 箭头函数
```javascript
// ✅ 推荐
const add = (a, b) => a + b

// ❌ 不推荐
function add(a, b) {
  return a + b
}
```

### 命名规范

#### 变量命名
```javascript
// 小驼峰命名
const userName = 'John'
const isLoading = false
const MAX_COUNT = 100  // 常量使用大写

// 布尔值使用 is/has/can 前缀
const isVisible = true
const hasPermission = false
const canEdit = true
```

#### 函数命名
```javascript
// 动词 + 名词
const getUserInfo = () => {}
const updateCourse = () => {}
const deleteItem = () => {}

// 事件处理函数使用 handle 前缀
const handleClick = () => {}
const handleSubmit = () => {}
```

#### 组件命名
```javascript
// 大驼峰命名 (PascalCase)
export default {
  name: 'CourseCard'  // 组件名
}
```

---

## Vue 组件规范

### 组件结构顺序

```vue
<template>
  <!-- 1. 模板 -->
</template>

<script>
// 2. 脚本
export default {
  name: 'ComponentName',
  
  // 选项顺序
  components: {},      // 组件注册
  props: {},          // 属性定义
  data() {},          // 数据
  computed: {},       // 计算属性
  watch: {},          // 监听器
  methods: {},        // 方法
  onLoad() {},        // 生命周期
  onShow() {}
}
</script>

<style lang="scss" scoped>
/* 3. 样式 */
</style>
```

### Props 定义规范

```javascript
// ✅ 推荐：完整定义
props: {
  title: {
    type: String,
    required: true,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  },
  itemList: {
    type: Array,
    default: () => []
  }
}

// ❌ 不推荐：简写
props: ['title', 'count']
```

### 事件命名规范

```javascript
// 使用 kebab-case 发送事件
this.$emit('update-data', data)

// 使用 on 前缀监听
<child-component @update-data="handleUpdateData" />
```

### 生命周期使用

```javascript
export default {
  // 页面加载时调用一次
  onLoad(options) {
    console.log('页面加载', options)
  },
  
  // 页面显示时调用（每次）
  onShow() {
    console.log('页面显示')
  },
  
  // 页面隐藏时调用
  onHide() {
    console.log('页面隐藏')
  },
  
  // 页面卸载时调用
  onUnload() {
    console.log('页面卸载')
  }
}
```

---

## 样式规范

### SCSS 使用规范

#### 1. 使用变量
```scss
// ✅ 推荐
.title {
  color: $uni-color-primary;
  font-size: $uni-font-size-lg;
}

// ❌ 不推荐
.title {
  color: #3cc51f;
  font-size: 16px;
}
```

#### 2. 嵌套层级不超过 3 层
```scss
// ✅ 推荐
.card {
  .header {
    .title {
      // 3 层
    }
  }
}

// ❌ 不推荐
.card {
  .header {
    .title {
      .text {
        // 4 层，过深
      }
    }
  }
}
```

#### 3. 使用 BEM 命名（复杂组件）
```scss
.card { }                    // Block
.card__header { }            // Element
.card--highlighted { }       // Modifier
```

### 响应式适配

```scss
// 使用 uni-app 的 rpx 单位
.container {
  width: 750rpx;  // 满屏宽度
  padding: 30rpx;
}

// 或使用百分比
.container {
  width: 100%;
  padding: 5%;
}
```

### 样式隔离

```vue
<!-- 使用 scoped 避免样式污染 -->
<style lang="scss" scoped>
.title {
  color: red;  // 只作用于当前组件
}
</style>
```

---

## Git 规范

### 分支管理

```
main          # 主分支（生产环境）
├── develop   # 开发分支
│   ├── feature/user-login      # 功能分支
│   ├── feature/course-detail   # 功能分支
│   └── fix/login-bug          # 修复分支
```

### 分支命名

| 分支类型 | 命名格式 | 示例 |
|---------|---------|------|
| 功能分支 | `feature/<description>` | `feature/user-auth` |
| 修复分支 | `fix/<description>` | `fix/login-error` |
| 文档分支 | `docs/<description>` | `docs/api-update` |
| 重构分支 | `refactor/<description>` | `refactor/code-structure` |

---

## 提交规范

### Commit Message 格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 Bug |
| `docs` | 文档更新 |
| `style` | 样式调整（不影响功能） |
| `refactor` | 代码重构 |
| `test` | 测试相关 |
| `chore` | 构建/工具/配置 |

### 提交示例

```bash
# 新功能
git commit -m "feat(learn): 添加课程搜索功能"

# 修复 Bug
git commit -m "fix(code): 修复代码复制功能在 iOS 上的兼容性问题"

# 文档更新
git commit -m "docs: 更新开发环境配置说明"

# 样式调整
git commit -m "style(home): 优化首页卡片间距"
```

### 提交前检查清单

- [ ] 代码通过 ESLint 检查
- [ ] 功能已自测
- [ ] 无 console.log 遗留
- [ ] 注释清晰准确
- [ ] 提交信息符合规范

---

## 测试规范

### 功能自测

#### 页面加载测试
```javascript
// 在页面中添加
onLoad() {
  console.log('页面加载完成')
  // 检查数据是否正常加载
}
```

#### 交互测试
- 按钮点击响应
- 表单提交验证
- 页面跳转正常
- 数据刷新正确

### 兼容性测试

| 平台 | 测试项 |
|------|------|
| 微信 | 基础功能、支付、分享 |
| QQ | 基础功能、登录 |
| 支付宝 | 基础功能、授权 |

### 性能测试

- 首屏加载时间 < 3 秒
- 页面切换流畅无卡顿
- 内存占用合理
- 网络请求优化

---

## 性能优化

### 1. 图片优化

```javascript
// ✅ 推荐：使用合适的图片格式和大小
<image 
  src="/static/images/logo.png" 
  mode="aspectFit"
  lazy-load  // 懒加载
/>

// 图片大小控制
// TabBar 图标：81x81px
// 列表图片：200x200px
// Banner 图片：750x400px
```

### 2. 数据优化

```javascript
// ✅ 推荐：分页加载数据
data() {
  return {
    courseList: [],
    page: 1,
    pageSize: 10,
    hasMore: true
  }
},
methods: {
  async loadMore() {
    if (!this.hasMore) return
    const data = await this.fetchData(this.page)
    this.courseList.push(...data.list)
    this.hasMore = data.hasMore
    this.page++
  }
}
```

### 3. 组件优化

```vue
<!-- ✅ 推荐：使用 computed 缓存计算结果 -->
computed: {
  filteredList() {
    return this.list.filter(item => item.status === 'active')
  }
}

<!-- ❌ 不推荐：在模板中直接计算 -->
<view v-for="item in list.filter(i => i.status === 'active')">
```

### 4. 网络优化

```javascript
// ✅ 推荐：请求防抖和缓存
const requestCache = new Map()

async function fetchData(url) {
  // 检查缓存
  if (requestCache.has(url)) {
    return requestCache.get(url)
  }
  
  // 发起请求
  const data = await uni.request({ url })
  
  // 缓存结果（5 分钟）
  requestCache.set(url, { data, time: Date.now() })
  
  return data
}
```

---

## 安全规范

### 1. 数据安全

```javascript
// ✅ 推荐：敏感数据加密存储
const encryptData = (data) => {
  // 加密逻辑
  return encrypted
}

uni.setStorageSync('user_token', encryptData(token))

// ❌ 不推荐：明文存储敏感信息
uni.setStorageSync('password', '123456')
```

### 2. 输入验证

```javascript
// ✅ 推荐：表单验证
methods: {
  validateForm() {
    if (!this.username || this.username.length < 3) {
      uni.showToast({ title: '用户名至少 3 个字符', icon: 'none' })
      return false
    }
    
    if (!this.password || this.password.length < 6) {
      uni.showToast({ title: '密码至少 6 个字符', icon: 'none' })
      return false
    }
    
    return true
  }
}
```

### 3. 请求安全

```javascript
// ✅ 推荐：添加请求头验证
uni.request({
  url: '/api/data',
  header: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})

// ❌ 不推荐：无验证请求
uni.request({
  url: '/api/data'
})
```

### 4. 代码安全

```javascript
// ✅ 推荐：避免 eval 和动态代码执行
const result = JSON.parse(jsonString)

// ❌ 不推荐：使用 eval
const result = eval('(' + jsonString + ')')
```

---

## 调试技巧

### 1. 控制台输出

```javascript
// 开发环境输出
// #ifdef DEV
console.log('调试信息', data)
// #endif
```

### 2. 真机调试

#### 微信小程序
1. 微信开发者工具 → 真机调试
2. 扫码连接
3. 查看 Console 面板

#### QQ 小程序
1. QQ 小程序开发者工具 → 真机调试
2. 扫码连接

### 3. 网络请求调试

```javascript
// 添加请求日志
uni.request({
  url,
  success: (res) => {
    console.log('请求成功', res)
  },
  fail: (err) => {
    console.error('请求失败', err)
  }
})
```

---

## 常见问题排查

### 1. 页面不显示
- 检查 pages.json 路由配置
- 检查组件导入路径
- 查看 Console 错误信息

### 2. 样式不生效
- 确认使用 scoped
- 检查样式优先级
- 清除编译缓存

### 3. 数据不更新
- 检查数据响应式
- 使用 this.$forceUpdate() 强制更新
- 检查异步数据加载时机

### 4. 小程序包过大
- 使用分包加载
- 压缩图片资源
- 按需引入组件

---

## 📚 参考资源

- [Vue 3 风格指南](https://vuejs.org/style-guide/)
- [uni-app 最佳实践](https://uniapp.dcloud.net.cn/tutorial/best-practice.html)
- [uView UI 使用规范](https://www.uviewui.com/components/intro.html)
- [微信小程序开发规范](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

---

## 📞 团队约定

- 每日提交代码前执行自测
- 功能完成后更新文档
- 遇到问题先查文档后提问
- 代码审查关注可读性和性能

---

_好的代码是自己最好的文档。_
