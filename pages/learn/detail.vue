<template>
  <view class="detail-container">
    <view v-if="loading" class="loading-wrapper">
      <view class="loading-icon"></view>
      <text class="loading-text">加载中...</text>
    </view>
    
    <view v-else-if="!tutorial" class="empty-state">
      <text class="empty-title">教程不存在</text>
      <text class="empty-desc">该教程可能已被删除</text>
      <button class="btn-primary mt-lg" @click="goBack">返回</button>
    </view>
    
    <view v-else class="detail-content">
      <view class="detail-header">
        <view class="tags">
          <text class="tag tag-beginner">{{ difficultyText }}</text>
          <text class="tag tag-plain">{{ categoryText }}</text>
        </view>
        <text class="title">{{ tutorial.title }}</text>
        <view class="meta">
          <text class="meta-item">{{ tutorial.author }}</text>
          <text class="meta-item">{{ tutorial.readCount }} 阅读</text>
          <text class="meta-item">{{ tutorial.likeCount }} 点赞</text>
        </view>
      </view>
      
      <view class="divider"></view>
      
      <view class="detail-body">
        <rich-text :nodes="parsedContent"></rich-text>
      </view>
      
      <!-- 相关文章 -->
      <view class="related-section" v-if="relatedList.length > 0">
        <view class="section-header">
          <text class="section-title">相关文章</text>
        </view>
        <view class="related-list">
          <view 
            class="related-item" 
            v-for="item in relatedList" 
            :key="item.id"
            @click="goToRelated(item.id)"
          >
            <text class="related-title">{{ item.title }}</text>
            <text class="related-meta">{{ item.readCount }} 阅读</text>
          </view>
        </view>
      </view>
      
      <view class="detail-footer">
        <view class="action-bar">
          <view class="action-item" @click="handleLike">
            <text class="action-icon">{{ liked ? '❤️' : '🤍' }}</text>
            <text class="action-text">{{ tutorial.likeCount }}</text>
          </view>
          <view class="action-item" @click="handleFavorite">
            <text class="action-icon">{{ favorited ? '⭐' : '☆' }}</text>
            <text class="action-text">{{ favorited ? '已收藏' : '收藏' }}</text>
          </view>
          <view class="action-item" @click="markAsRead">
            <text class="action-icon">✅</text>
            <text class="action-text">{{ isRead ? '已读完' : '标记已读' }}</text>
          </view>
          <button class="share-btn" open-type="share">
            <text class="action-icon">📤</text>
            <text class="action-text">分享</text>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getTutorialDetail, getTutorialList } from '@/api/tutorial'
import { toggleFavorite } from '@/api/user'
import { parseMarkdown } from '@/utils/markdown'

export default {
  data() {
    return {
      tutorial: null,
      relatedList: [],
      loading: true,
      liked: false,
      favorited: false,
      isRead: false
    }
  },
  
  computed: {
    parsedContent() {
      return this.tutorial ? parseMarkdown(this.tutorial.content) : ''
    },
    difficultyText() {
      const map = {
        beginner: '入门',
        intermediate: '进阶',
        advanced: '高级'
      }
      return map[this.tutorial?.difficulty] || '入门'
    },
    categoryText() {
      const map = {
        'getting-started': '入门教程',
        'core-concepts': '核心概念',
        'agent-dev': 'Agent 开发',
        'deployment': '部署配置'
      }
      return map[this.tutorial?.category] || '教程'
    }
  },
  
  onLoad(options) {
    // 先重置状态，避免残留
    this.loading = true
    this.tutorial = null
    
    if (!options.id) {
      // 没有id则返回上一页
      uni.navigateBack({
        delta: 1
      })
      return
    }
    
    if (options.id) {
      // t001-t022使用独立静态页面（使用redirectTo关闭当前页）
      if (options.id === 't001') {
        uni.redirectTo({
          url: '/pages/learn/t001'
        })
        return
      }
      if (options.id === 't002') {
        uni.redirectTo({
          url: '/pages/learn/t002'
        })
        return
      }
      if (options.id === 't003') {
        uni.redirectTo({
          url: '/pages/learn/t003'
        })
        return
      }
      if (options.id === 't004') {
        uni.redirectTo({
          url: '/pages/learn/t004'
        })
        return
      }
      if (options.id === 't005') {
        uni.redirectTo({
          url: '/pages/learn/t005'
        })
        return
      }
      if (options.id === 't006') {
        uni.redirectTo({
          url: '/pages/learn/t006'
        })
        return
      }
      if (options.id === 't007') {
        uni.redirectTo({
          url: '/pages/learn/t007'
        })
        return
      }
      if (options.id === 't008') {
        uni.redirectTo({
          url: '/pages/learn/t008'
        })
        return
      }
      if (options.id === 't009') {
        uni.redirectTo({
          url: '/pages/learn/t009'
        })
        return
      }
      if (options.id === 't010') {
        uni.redirectTo({
          url: '/pages/learn/t010'
        })
        return
      }
      if (options.id === 't011') {
        uni.redirectTo({
          url: '/pages/learn/t011'
        })
        return
      }
      if (options.id === 't012') {
        uni.redirectTo({
          url: '/pages/learn/t012'
        })
        return
      }
      if (options.id === 't013') {
        uni.redirectTo({
          url: '/pages/learn/t013'
        })
        return
      }
      if (options.id === 't014') {
        uni.redirectTo({
          url: '/pages/learn/t014'
        })
        return
      }
      if (options.id === 't015') {
        uni.redirectTo({
          url: '/pages/learn/t015'
        })
        return
      }
      if (options.id === 't016') {
        uni.redirectTo({
          url: '/pages/learn/t016'
        })
        return
      }
      if (options.id === 't017') {
        uni.redirectTo({
          url: '/pages/learn/t017'
        })
        return
      }
      if (options.id === 't018') {
        uni.redirectTo({
          url: '/pages/learn/t018'
        })
        return
      }
      if (options.id === 't019') {
        uni.redirectTo({
          url: '/pages/learn/t019'
        })
        return
      }
      if (options.id === 't020') {
        uni.redirectTo({
          url: '/pages/learn/t020'
        })
        return
      }
      if (options.id === 't021') {
        uni.redirectTo({
          url: '/pages/learn/t021'
        })
        return
      }
      if (options.id === 't022') {
        uni.redirectTo({
          url: '/pages/learn/t022'
        })
        return
      }
      this.loadDetail(options.id)
    }
  },
  
  methods: {
    async loadDetail(id) {
      this.loading = true
      try {
        const res = await getTutorialDetail(id)
        this.tutorial = res
        this.loadRelatedList(id, res.category)
        this.checkReadStatus(id)
        this.addToHistory(id, res)
      } catch (err) {
        console.error('加载教程详情失败:', err)
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        })
      } finally {
        this.loading = false
      }
    },
    
    checkReadStatus(id) {
      const readList = uni.getStorageSync('read_tutorials') || []
      this.isRead = readList.includes(id)
    },
    
    addToHistory(id, tutorial) {
      let history = uni.getStorageSync('browse_history') || []
      const existing = history.findIndex(h => h.id === id && h.type === 'tutorial')
      if (existing > -1) {
        history.splice(existing, 1)
      }
      history.unshift({
        id: id,
        type: 'tutorial',
        title: tutorial.title,
        summary: tutorial.summary,
        date: new Date().toISOString().split('T')[0]
      })
      uni.setStorageSync('browse_history', history.slice(0, 100))
    },
    
    async loadRelatedList(currentId, category) {
      try {
        const res = await getTutorialList({ category, pageSize: 5 })
        this.relatedList = (res.list || []).filter(t => t.id !== currentId).slice(0, 3)
      } catch (err) {
        console.error('加载相关文章失败:', err)
      }
    },
    
    goToRelated(id) {
      uni.redirectTo({
        url: '/pages/learn/detail?id=' + id
      })
    },
    
    handleLike() {
      this.liked = !this.liked
      uni.showToast({
        title: this.liked ? '已点赞' : '取消点赞',
        icon: 'none'
      })
    },
    
    async handleFavorite() {
      try {
        const res = await toggleFavorite('tutorial', this.tutorial.id)
        this.favorited = res.favorited
        uni.showToast({
          title: this.favorited ? '已收藏' : '取消收藏',
          icon: 'none'
        })
      } catch (err) {
        console.error('收藏失败:', err)
      }
    },
    
    markAsRead() {
      if (this.isRead) return
      
      const id = this.tutorial.id
      let readList = uni.getStorageSync('read_tutorials') || []
      if (!readList.includes(id)) {
        readList.push(id)
        uni.setStorageSync('read_tutorials', readList)
        this.isRead = true
        uni.showToast({
          title: '已标记为已读',
          icon: 'success'
        })
      }
    },
    
    goBack() {
      uni.navigateBack()
    }
  },
  
  onShareAppMessage() {
    return {
      title: this.tutorial?.title || 'OpenClaw 教程',
      path: '/pages/learn/detail?id=' + this.tutorial?.id
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-container {
  min-height: 100vh;
  background: $gray-1;
  padding-bottom: 120rpx;
}

.loading-wrapper {
  @include flex-center;
  @include flex-column;
  padding: 120rpx 0;
  
  .loading-icon {
    width: 64rpx;
    height: 64rpx;
    border: 4rpx solid $gray-3;
    border-top-color: $brand-primary;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  .loading-text {
    margin-top: $spacing-sm;
    font-size: $font-sm;
    color: $gray-5;
  }
}

.empty-state {
  @include flex-center;
  @include flex-column;
  padding: 160rpx $spacing-lg;
  
  .empty-title {
    font-size: $font-lg;
    color: $gray-6;
    margin-bottom: $spacing-sm;
  }
  
  .empty-desc {
    font-size: $font-sm;
    color: $gray-4;
  }
}

.detail-content {
  background: #fff;
}

.detail-header {
  padding: $spacing-lg $spacing-lg 40rpx;
  background: linear-gradient(135deg, #f8faf5 0%, #ffffff 100%);
  
  .tags {
    display: flex;
    gap: $spacing-sm;
    margin-bottom: $spacing-md;
    
    .tag {
      padding: 8rpx 20rpx;
      border-radius: 24rpx;
      font-size: 22rpx;
      font-weight: 500;
    }
    
    .tag-beginner {
      background: rgba(60, 197, 31, 0.1);
      color: $brand-primary;
    }
    
    .tag-plain {
      background: $gray-2;
      color: $gray-5;
    }
  }
  
  .title {
    display: block;
    font-size: 44rpx;
    font-weight: 700;
    color: $gray-8;
    line-height: 1.35;
    margin-bottom: $spacing-md;
  }
  
  .meta {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    font-size: 24rpx;
    color: $gray-4;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 8rpx;
    }
  }
}

.divider {
  height: 16rpx;
  background: $gray-1;
}

.detail-body {
  padding: $spacing-md $spacing-lg;
  font-size: $font-base;
  line-height: 1.9;
  color: $gray-6;
  
  :deep(h1) {
    font-size: 44rpx;
    font-weight: 600;
    margin: 48rpx 0 32rpx;
    color: $gray-8;
    padding-bottom: 16rpx;
    border-bottom: 2rpx solid $gray-2;
  }
  
  :deep(h2) {
    font-size: 36rpx;
    font-weight: 600;
    margin: 40rpx 0 24rpx;
    color: $gray-7;
  }
  
  :deep(h3) {
    font-size: 32rpx;
    font-weight: 600;
    margin: 32rpx 0 16rpx;
    color: $gray-7;
  }
  
  :deep(p) {
    margin-bottom: 24rpx;
    text-align: justify;
  }
  
  :deep(.inline) {
    background: rgba(60, 197, 31, 0.1);
    color: $brand-primary;
    padding: 4rpx 12rpx;
    border-radius: 6rpx;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 24rpx;
  }
  
  :deep(pre) {
    background: #1e1e1e;
    border-radius: 16rpx;
    overflow: hidden;
    margin: 24rpx 0;
    
    code {
      display: block;
      padding: 24rpx;
      color: #d4d4d4;
      font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
      font-size: 24rpx;
      line-height: 1.7;
      white-space: pre;
      overflow-x: auto;
    }
  }
  
  :deep(ul) {
    margin: 16rpx 0;
    padding-left: 40rpx;
    
    li {
      margin-bottom: 12rpx;
      position: relative;
      padding-left: 16rpx;
      
      &::before {
        content: '•';
        position: absolute;
        left: -16rpx;
        color: $brand-primary;
      }
    }
  }
  
  :deep(ol) {
    margin: 16rpx 0;
    padding-left: 40rpx;
    
    li {
      margin-bottom: 12rpx;
      counter-increment: list;
    }
  }
  
  :deep(strong) {
    font-weight: 600;
    color: $gray-7;
    background: linear-gradient(to bottom, transparent 60%, rgba(60, 197, 31, 0.2) 60%);
  }
  
  :deep(em) {
    color: $brand-secondary;
    font-style: italic;
  }
  
  :deep(del) {
    color: $gray-4;
    text-decoration: line-through;
  }
  
  :deep(a) {
    color: $brand-primary;
    text-decoration: none;
    border-bottom: 1rpx solid $brand-primary;
  }
  
  :deep(.markdown-image) {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 32rpx 0;
    border-radius: 12rpx;
  }
}

.related-section {
  background: linear-gradient(to bottom, #fafafa, #fff);
  margin-top: $spacing-lg;
  padding: $spacing-lg;
  border-top: 1rpx solid $gray-2;
  
  .section-header {
    margin-bottom: $spacing-md;
    
    .section-title {
      font-size: 32rpx;
      font-weight: 600;
      color: $gray-7;
      padding-left: 20rpx;
      border-left: 6rpx solid $brand-primary;
    }
  }
  
  .related-list {
    .related-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-sm 0;
      border-bottom: 1rpx solid $gray-2;
      
      &:last-child {
        border-bottom: none;
      }
      
      .related-title {
        flex: 1;
        font-size: $font-base;
        color: $gray-7;
        @include text-ellipsis(1);
      }
      
      .related-meta {
        font-size: $font-xs;
        color: $gray-4;
        margin-left: $spacing-sm;
      }
    }
  }
}

.detail-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20rpx $spacing-lg 24rpx;
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.08);
}

.action-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.action-item, .share-btn {
  @include flex-center;
  @include flex-column;
  background: none;
  border: none;
  padding: 12rpx 32rpx;
  
  .action-icon {
    font-size: 44rpx;
  }
  
  .action-text {
    font-size: $font-xs;
    color: $gray-5;
    margin-top: 4rpx;
  }
}

.share-btn {
  line-height: 1;
}

.btn-primary {
  background: $brand-primary;
  color: #fff;
  border: none;
  border-radius: $radius-base;
  padding: 12px 40rpx;
  font-size: $font-base;
}

.mt-lg {
  margin-top: $spacing-lg;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
