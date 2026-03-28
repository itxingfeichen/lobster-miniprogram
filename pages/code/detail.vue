<template>
  <view class="code-detail-container">
    <view v-if="loading" class="loading-wrapper">
      <view class="loading-icon"></view>
    </view>
    
    <view v-else-if="!snippet" class="empty-state">
      <text class="empty-title">代码片段不存在</text>
      <button class="btn-primary mt-lg" @click="goBack">返回</button>
    </view>
    
    <view v-else class="detail-content">
      <view class="detail-header card">
        <text class="code-title">{{ snippet.title }}</text>
        <view class="code-meta">
          <text class="language-tag">{{ snippet.language }}</text>
          <text class="update-time">{{ snippet.updateTime }}</text>
        </view>
        <view class="tag-list">
          <text class="tag" v-for="(tag, index) in snippet.tags" :key="index">{{ tag }}</text>
        </view>
        <view class="stat-row">
          <text class="stat-item">👁 {{ snippet.views }} 浏览</text>
          <text class="stat-item">⭐ {{ snippet.favoriteCount }} 收藏</text>
        </view>
      </view>
      
      <view class="code-section card">
        <view class="section-header">
          <text class="section-title">代码</text>
          <view class="action-btns">
            <view class="action-btn" @click="copyCode">
              <text>📋 复制</text>
            </view>
          </view>
        </view>
        <view class="code-block">
          <text class="code-content">{{ snippet.code }}</text>
        </view>
      </view>
      
      <view class="detail-footer">
        <view class="action-bar">
          <view class="action-item" @click="handleFavorite">
            <text class="action-icon">{{ favorited ? '⭐' : '☆' }}</text>
            <text class="action-text">{{ favorited ? '已收藏' : '收藏' }}</text>
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
import { getCodeDetail } from '@/api/code'
import { toggleFavorite } from '@/api/user'

export default {
  data() {
    return {
      snippet: null,
      loading: true,
      favorited: false
    }
  },
  
  onLoad(options) {
    if (options.id) {
      this.loadDetail(options.id)
      this.addToHistory(options.id)
    }
  },
  
  methods: {
    async loadDetail(id) {
      this.loading = true
      try {
        const res = await getCodeDetail(id)
        this.snippet = res
        this.favorited = res.favorite || false
      } catch (err) {
        console.error('加载代码详情失败:', err)
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        })
      } finally {
        this.loading = false
      }
    },
    
    addToHistory(id) {
      let history = uni.getStorageSync('browse_history') || []
      const existing = history.findIndex(h => h.id === id && h.type === 'code')
      if (existing > -1) {
        history.splice(existing, 1)
      }
      if (this.snippet) {
        history.unshift({
          id: id,
          type: 'code',
          title: this.snippet.title,
          preview: this.snippet.preview,
          date: new Date().toISOString().split('T')[0]
        })
      }
      uni.setStorageSync('browse_history', history.slice(0, 100))
    },
    
    copyCode() {
      uni.setClipboardData({
        data: this.snippet.code,
        success: () => {
          uni.showToast({
            title: '已复制',
            icon: 'success'
          })
        }
      })
    },
    
    async handleFavorite() {
      try {
        const res = await toggleFavorite('code', this.snippet.id)
        this.favorited = res.favorited
        uni.showToast({
          title: this.favorited ? '已收藏' : '取消收藏',
          icon: 'none'
        })
      } catch (err) {
        console.error('收藏失败:', err)
      }
    },
    
    goBack() {
      uni.navigateBack()
    }
  },
  
  onShareAppMessage() {
    return {
      title: this.snippet?.title || 'OpenClaw 代码片段',
      path: '/pages/code/detail?id=' + this.snippet?.id
    }
  }
}
</script>

<style lang="scss" scoped>
.code-detail-container {
  min-height: 100vh;
  background: $gray-1;
  padding: $spacing-base;
  padding-bottom: 160rpx;
}

.loading-wrapper {
  @include flex-center;
  padding: 120rpx 0;
  
  .loading-icon {
    width: 64rpx;
    height: 64rpx;
    border: 4rpx solid $gray-3;
    border-top-color: $brand-primary;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
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
}

.detail-content {
  .detail-header {
    margin-bottom: $spacing-base;
    
    .code-title {
      display: block;
      font-size: $font-xl;
      font-weight: bold;
      color: $gray-7;
      margin-bottom: $spacing-sm;
    }
    
    .code-meta {
      display: flex;
      gap: $spacing-sm;
      margin-bottom: $spacing-sm;
      
      .language-tag {
        padding: 4rpx 16rpx;
        background: $brand-primary-light;
        color: $brand-primary;
        border-radius: $radius-sm;
        font-size: $font-xs;
      }
      
      .update-time {
        font-size: $font-sm;
        color: $gray-5;
      }
    }
    
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-xs;
      margin-bottom: $spacing-sm;
      
      .tag {
        padding: 4rpx 12rpx;
        background: $gray-2;
        color: $gray-6;
        border-radius: $radius-sm;
        font-size: $font-xs;
      }
    }
    
    .stat-row {
      display: flex;
      gap: $spacing-md;
      
      .stat-item {
        font-size: $font-sm;
        color: $gray-5;
      }
    }
  }
  
  .code-section {
    .section-header {
      @include flex-between;
      margin-bottom: $spacing-sm;
      
      .section-title {
        font-size: $font-base;
        font-weight: bold;
        color: $gray-7;
      }
      
      .action-btn {
        padding: $spacing-xs $spacing-sm;
        background: $brand-primary-light;
        color: $brand-primary;
        border-radius: $radius-sm;
        font-size: $font-sm;
      }
    }
    
    .code-block {
      background: $code-bg-color;
      border-radius: $radius-base;
      padding: $spacing-base;
      overflow-x: auto;
      
      .code-content {
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: $font-sm;
        color: $code-text-color;
        white-space: pre;
        line-height: 1.6;
      }
    }
  }
}

.detail-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: $spacing-sm $spacing-base;
  padding-bottom: calc(#{$spacing-sm} + env(safe-area-inset-bottom));
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
}

.action-bar {
  display: flex;
  justify-content: center;
  gap: $spacing-xl;
}

.action-item, .share-btn {
  @include flex-center;
  @include flex-column;
  background: none;
  border: none;
  padding: $spacing-xs $spacing-md;
  
  .action-icon {
    font-size: 40rpx;
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
