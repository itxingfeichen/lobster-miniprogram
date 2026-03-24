<template>
  <view class="container">
    <!-- 搜索和筛选 -->
    <view class="search-section card">
      <view class="search-input-wrapper">
        <text class="search-icon">🔍</text>
        <input 
          class="search-input" 
          type="text" 
          placeholder="搜索代码片段..." 
          v-model="searchKeyword"
          @confirm="handleSearch"
        />
      </view>
      <view class="filter-tags">
        <view 
          class="filter-tag" 
          :class="{ active: currentLanguage === item.id }"
          v-for="(item, index) in languages" 
          :key="index"
          @click="selectLanguage(item.id)"
        >
          {{ item.name }}
        </view>
      </view>
    </view>

    <!-- 代码片段列表 -->
    <view class="code-section">
      <view class="section-header">
        <text class="section-title">代码库</text>
        <view class="action-buttons">
          <view class="action-btn" @click="showAddCode">
            <text class="btn-icon">➕</text>
            <text class="btn-text">添加</text>
          </view>
        </view>
      </view>

      <view class="code-list">
        <view 
          class="code-card card" 
          v-for="(snippet, index) in filteredSnippets" 
          :key="index"
          @click="viewCodeDetail(snippet)"
        >
          <view class="code-header">
            <view class="code-info">
              <text class="code-title">{{ snippet.title }}</text>
              <view class="code-meta">
                <text class="language-tag">{{ snippet.language }}</text>
                <text class="update-time">{{ snippet.updateTime }}</text>
              </view>
            </view>
            <view class="code-actions">
              <view class="action-icon" @click.stop="copyCode(snippet)">📋</view>
              <view class="action-icon" @click.stop="favoriteCode(snippet)">
                {{ snippet.favorite ? '⭐' : '☆' }}
              </view>
            </view>
          </view>
          
          <view class="code-preview" :class="snippet.language">
            <text class="code-content">{{ snippet.preview }}</text>
          </view>
          
          <view class="code-footer">
            <view class="tag-list">
              <text class="tag" v-for="(tag, tIndex) in snippet.tags" :key="tIndex">{{ tag }}</text>
            </view>
            <text class="view-count">👁 {{ snippet.views }}</text>
          </view>
        </view>
      </view>

      <!-- 空状态 -->
      <view class="empty-state" v-if="filteredSnippets.length === 0">
        <text class="empty-icon">💻</text>
        <text class="empty-text">暂无代码片段</text>
        <text class="empty-hint">点击上方"添加"按钮创建代码片段</text>
      </view>
    </view>

    <!-- 代码详情弹窗 -->
    <view class="code-modal" v-if="showModal" @click="closeModal">
      <view class="modal-content" @click.stop>
        <view class="modal-header">
          <text class="modal-title">{{ currentSnippet?.title }}</text>
          <view class="close-btn" @click="closeModal">✕</view>
        </view>
        <view class="modal-body">
          <view class="code-full" :class="currentSnippet?.language">
            <text class="code-full-content">{{ currentSnippet?.fullCode }}</text>
          </view>
        </view>
        <view class="modal-footer">
          <view class="modal-btn copy-btn" @click="copyFullCode">
            <text class="btn-icon">📋</text>
            <text class="btn-text">复制代码</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// PrismJS 代码高亮（小程序环境需要适配）
// #ifdef H5
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
// #endif

export default {
  data() {
    return {
      searchKeyword: '',
      currentLanguage: 'all',
      showModal: false,
      currentSnippet: null,
      languages: [
        { id: 'all', name: '全部' },
        { id: 'javascript', name: 'JavaScript' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'python', name: 'Python' },
        { id: 'json', name: 'JSON' },
        { id: 'bash', name: 'Shell' }
      ],
      snippets: [
        {
          id: 1,
          title: '创建子 Agent 示例',
          description: '演示如何使用 subagents 工具创建和管理子任务',
          language: 'JavaScript',
          preview: 'const subagent = await createSubagent({\n  task: "代码开发",\n  agent: "coder"...',
          fullCode: `// 创建子 Agent 示例
const subagent = await createSubagent({
  task: "代码开发",
  agent: "coder",
  deadline: "2024-12-31",
  context: {
    project: "my-project",
    requirements: "实现用户登录功能"
  }
})

// 等待子 Agent 完成
const result = await subagent.waitForCompletion()
console.log('子任务完成:', result)`,
          tags: ['subagent', '协作', '任务管理'],
          views: 128,
          favorite: true,
          updateTime: '2024-01-15'
        },
        {
          id: 2,
          title: '文件读写操作',
          description: '使用 read/write/edit 工具进行文件操作',
          language: 'JavaScript',
          preview: '// 读取文件内容\nconst content = await read({\n  path: "./config.json"...',
          fullCode: `// 读取文件
const content = await read({
  path: "./config.json"
})

// 写入文件
await write({
  path: "./output.txt",
  content: "Hello World"
})

// 编辑文件
await edit({
  path: "./config.json",
  oldText: "old value",
  newText: "new value"
})`,
          tags: ['文件操作', '基础工具'],
          views: 256,
          favorite: false,
          updateTime: '2024-01-14'
        },
        {
          id: 3,
          title: '网络搜索示例',
          description: '使用 web_search 工具进行信息检索',
          language: 'JavaScript',
          preview: 'const results = await web_search({\n  query: "OpenClaw 教程",\n  count: 5...',
          fullCode: `// 基本搜索
const results = await web_search({
  query: "OpenClaw 教程",
  count: 5
})

// 限定地区搜索
const cnResults = await web_search({
  query: "AI 智能体",
  country: "CN",
  search_lang: "zh"
})

// 最新内容搜索
const freshResults = await web_search({
  query: "OpenClaw 更新",
  freshness: "pw" // 过去一周
})`,
          tags: ['web_search', '信息检索'],
          views: 189,
          favorite: true,
          updateTime: '2024-01-13'
        },
        {
          id: 4,
          title: '浏览器自动化',
          description: '使用 browser 工具进行网页操作',
          language: 'JavaScript',
          preview: 'await browser({\n  action: "open",\n  url: "https://example.com"...',
          fullCode: `// 打开网页
await browser({
  action: "open",
  url: "https://example.com"
})

// 截取快照
const snapshot = await browser({
  action: "snapshot",
  refs: "aria"
})

// 点击操作
await browser({
  action: "act",
  kind: "click",
  ref: "e12"
})

// 输入文本
await browser({
  action: "act",
  kind: "type",
  ref: "e15",
  text: "搜索内容"
})`,
          tags: ['browser', '自动化', '网页操作'],
          views: 312,
          favorite: false,
          updateTime: '2024-01-12'
        },
        {
          id: 5,
          title: '消息发送示例',
          description: '使用 message 工具发送通知和消息',
          language: 'JavaScript',
          preview: 'await message({\n  action: "send",\n  channel: "general",\n  message: "任务完成"...',
          fullCode: `// 发送普通消息
await message({
  action: "send",
  channel: "general",
  message: "任务已完成"
})

// 发送带附件的消息
await message({
  action: "send",
  channel: "reports",
  message: "周报",
  filePath: "./weekly-report.pdf"
})

// 发送广播消息
await message({
  action: "broadcast",
  message: "系统维护通知",
  targets: ["channel1", "channel2"]
})`,
          tags: ['message', '通知', '广播'],
          views: 167,
          favorite: false,
          updateTime: '2024-01-11'
        }
      ]
    }
  },
  computed: {
    filteredSnippets() {
      let result = this.snippets
      
      // 语言筛选
      if (this.currentLanguage !== 'all') {
        result = result.filter(snippet => 
          snippet.language.toLowerCase().includes(this.currentLanguage.toLowerCase())
        )
      }
      
      // 搜索筛选
      if (this.searchKeyword.trim()) {
        const keyword = this.searchKeyword.toLowerCase()
        result = result.filter(snippet => 
          snippet.title.toLowerCase().includes(keyword) ||
          snippet.description.toLowerCase().includes(keyword) ||
          snippet.tags.some(tag => tag.toLowerCase().includes(keyword))
        )
      }
      
      return result
    }
  },
  onLoad() {
    console.log('代码库加载完成')
  },
  methods: {
    selectLanguage(languageId) {
      this.currentLanguage = languageId
    },
    handleSearch() {
      console.log('搜索:', this.searchKeyword)
    },
    viewCodeDetail(snippet) {
      this.currentSnippet = snippet
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.currentSnippet = null
    },
    copyCode(snippet) {
      uni.setClipboardData({
        data: snippet.fullCode,
        success: () => {
          uni.showToast({
            title: '已复制',
            icon: 'success'
          })
        }
      })
    },
    copyFullCode() {
      if (this.currentSnippet) {
        uni.setClipboardData({
          data: this.currentSnippet.fullCode,
          success: () => {
            uni.showToast({
              title: '已复制',
              icon: 'success'
            })
          }
        })
      }
    },
    favoriteCode(snippet) {
      snippet.favorite = !snippet.favorite
      uni.showToast({
        title: snippet.favorite ? '已收藏' : '已取消收藏',
        icon: 'none'
      })
    },
    showAddCode() {
      uni.showToast({
        title: '添加功能开发中',
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 15px;
  padding-bottom: 100px;
}

.search-section {
  padding: 15px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 10px 15px;
  margin-bottom: 12px;
}

.search-icon {
  margin-right: 10px;
  font-size: 16px;
}

.search-input {
  flex: 1;
  font-size: 14px;
  background: transparent;
}

.filter-tags {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
}

.filter-tag {
  padding: 6px 14px;
  background: #f5f5f5;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
  transition: all 0.3s;
}

.filter-tag.active {
  background: #3cc51f;
  color: #ffffff;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: #3cc51f;
  color: #ffffff;
  border-radius: 20px;
  font-size: 12px;
}

.btn-icon {
  font-size: 14px;
}

.code-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.code-card {
  padding: 15px;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.code-info {
  flex: 1;
}

.code-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 6px;
}

.code-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-tag {
  font-size: 11px;
  padding: 2px 8px;
  background: #e3f2fd;
  color: #2196f3;
  border-radius: 8px;
}

.update-time {
  font-size: 11px;
  color: #999;
}

.code-actions {
  display: flex;
  gap: 8px;
}

.action-icon {
  font-size: 18px;
  padding: 5px;
}

.code-preview {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
  overflow-x: auto;
}

.code-content {
  font-size: 12px;
  font-family: 'Courier New', monospace;
  color: #24292e;
  white-space: pre-wrap;
  word-break: break-all;
}

.code-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag-list {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  font-size: 11px;
  padding: 3px 8px;
  background: #f5f5f5;
  color: #666;
  border-radius: 10px;
}

.view-count {
  font-size: 12px;
  color: #999;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 60px;
  margin-bottom: 20px;
}

.empty-text {
  font-size: 16px;
  color: #999;
  margin-bottom: 10px;
}

.empty-hint {
  font-size: 13px;
  color: #ccc;
}

/* 代码详情弹窗 */
.code-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-height: 80%;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
}

.modal-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.close-btn {
  font-size: 20px;
  color: #999;
  padding: 5px;
}

.modal-body {
  flex: 1;
  overflow: auto;
  padding: 20px;
}

.code-full {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 15px;
  overflow-x: auto;
}

.code-full-content {
  font-size: 13px;
  font-family: 'Courier New', monospace;
  color: #24292e;
  white-space: pre-wrap;
  word-break: break-all;
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid #e5e5e5;
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: #3cc51f;
  color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
}
</style>
