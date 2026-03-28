<template>
  <view class="history-container">
    <view v-if="historyList.length > 0" class="history-header">
      <text class="history-count">共 {{ historyList.length }} 条浏览记录</text>
      <text class="clear-btn" @click="clearHistory">清空</text>
    </view>

    <view v-if="loading" class="loading-wrapper">
      <view class="loading-icon"></view>
    </view>

    <view v-else-if="historyList.length === 0" class="empty-state">
      <text class="empty-icon">📜</text>
      <text class="empty-title">暂无浏览历史</text>
      <text class="empty-desc">浏览的教程和代码会显示在这里</text>
    </view>

    <view v-else class="history-list">
      <view 
        class="history-item card" 
        v-for="(item, index) in historyList" 
        :key="index"
        @click="goToDetail(item)"
      >
        <view class="item-header">
          <view class="item-type">
            <text class="type-tag">{{ item.type === 'tutorial' ? '📖 教程' : '💻 代码' }}</text>
          </view>
          <text class="item-date">{{ item.date }}</text>
        </view>
        <text class="item-title">{{ item.title }}</text>
        <text class="item-summary">{{ item.summary || item.preview }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { get } from '@/utils/request'

export default {
  data() {
    return {
      historyList: [],
      loading: true
    }
  },
  
  onLoad() {
    this.loadData()
  },
  
  onPullDownRefresh() {
    this.loadData().finally(() => {
      uni.stopPullDownRefresh()
    })
  },
  
  methods: {
    async loadData() {
      this.loading = true
      try {
        const history = uni.getStorageSync('browse_history') || []
        this.historyList = history
      } catch (err) {
        console.error('加载历史记录失败:', err)
        this.historyList = []
      } finally {
        this.loading = false
      }
    },
    
    goToDetail(item) {
      if (item.type === 'tutorial') {
        uni.navigateTo({
          url: '/pages/learn/detail?id=' + item.id
        })
      } else {
        uni.navigateTo({
          url: '/pages/code/detail?id=' + item.id
        })
      }
    },
    
    clearHistory() {
      uni.showModal({
        title: '提示',
        content: '确定清空所有浏览历史吗？',
        success: (res) => {
          if (res.confirm) {
            uni.removeStorageSync('browse_history')
            this.historyList = []
            uni.showToast({
              title: '已清空',
              icon: 'none'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.history-container {
  min-height: 100vh;
  background: $gray-1;
  padding-bottom: 120rpx;
}

.history-header {
  @include flex-between;
  padding: $spacing-sm $spacing-base;
  background: #fff;
  border-bottom: 1rpx solid $gray-2;
  
  .history-count {
    font-size: $font-sm;
    color: $gray-5;
  }
  
  .clear-btn {
    font-size: $font-sm;
    color: $color-error;
  }
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
  
  .empty-icon {
    font-size: 120rpx;
    margin-bottom: $spacing-md;
  }
  
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

.history-list {
  padding: $spacing-base;
  
  .history-item {
    margin-bottom: $spacing-base;
  }
  
  .item-header {
    @include flex-between;
    margin-bottom: $spacing-sm;
    
    .type-tag {
      font-size: $font-xs;
      color: $color-info;
    }
    
    .item-date {
      font-size: $font-xs;
      color: $gray-4;
    }
  }
  
  .item-title {
    display: block;
    font-size: $font-base;
    font-weight: bold;
    color: $gray-7;
    margin-bottom: $spacing-xs;
  }
  
  .item-summary {
    display: block;
    font-size: $font-sm;
    color: $gray-5;
    @include text-ellipsis(2);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
