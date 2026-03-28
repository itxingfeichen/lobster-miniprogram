<template>
  <view class="favorites-container">
    <view class="tabs">
      <view 
        class="tab" 
        :class="{ active: currentTab === 'all' }"
        @click="switchTab('all')"
      >
        全部
      </view>
      <view 
        class="tab" 
        :class="{ active: currentTab === 'tutorial' }"
        @click="switchTab('tutorial')"
      >
        教程
      </view>
      <view 
        class="tab" 
        :class="{ active: currentTab === 'code' }"
        @click="switchTab('code')"
      >
        代码
      </view>
    </view>

    <view v-if="loading" class="loading-wrapper">
      <view class="loading-icon"></view>
    </view>

    <view v-else-if="filteredList.length === 0" class="empty-state">
      <text class="empty-icon">⭐</text>
      <text class="empty-title">暂无收藏</text>
      <text class="empty-desc">收藏的内容会显示在这里</text>
    </view>

    <view v-else class="content-list">
      <view 
        class="content-item card" 
        v-for="(item, index) in filteredList" 
        :key="index"
        @click="goToDetail(item)"
      >
        <view class="item-header">
          <view class="item-type">
            <text class="type-tag">{{ item.favoriteType === 'tutorial' ? '📖 教程' : '💻 代码' }}</text>
          </view>
          <view class="item-action" @click.stop="removeFavorite(item)">
            <text>❤️</text>
          </view>
        </view>
        <text class="item-title">{{ item.title }}</text>
        <text class="item-summary">{{ item.summary || item.preview }}</text>
        <view class="item-footer">
          <text class="item-meta" v-if="item.author">{{ item.author }}</text>
          <text class="item-meta" v-if="item.language">{{ item.language }}</text>
          <text class="item-meta" v-if="item.readCount">{{ item.readCount }} 阅读</text>
          <text class="item-meta" v-if="item.views">{{ item.views }} 浏览</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getFavorites, toggleFavorite } from '@/api/user'

export default {
  data() {
    return {
      currentTab: 'all',
      favorites: [],
      loading: true
    }
  },
  
  computed: {
    filteredList() {
      if (this.currentTab === 'all') {
        return this.favorites
      }
      return this.favorites.filter(item => item.favoriteType === this.currentTab)
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
    switchTab(tab) {
      this.currentTab = tab
    },
    
    async loadData() {
      this.loading = true
      try {
        const res = await getFavorites({ type: this.currentTab })
        this.favorites = res.list || []
      } catch (err) {
        console.error('加载收藏失败:', err)
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        })
      } finally {
        this.loading = false
      }
    },
    
    goToDetail(item) {
      if (item.favoriteType === 'tutorial') {
        uni.navigateTo({
          url: '/pages/learn/detail?id=' + item.id
        })
      } else {
        uni.navigateTo({
          url: '/pages/code/detail?id=' + item.id
        })
      }
    },
    
    async removeFavorite(item) {
      try {
        const type = item.favoriteType || (item.content ? 'tutorial' : 'code')
        await toggleFavorite(type, item.id)
        uni.showToast({
          title: '已取消收藏',
          icon: 'none'
        })
        this.loadData()
      } catch (err) {
        console.error('取消收藏失败:', err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-container {
  min-height: 100vh;
  background: $gray-1;
  padding-bottom: 120rpx;
}

.tabs {
  display: flex;
  background: #fff;
  padding: $spacing-sm $spacing-base;
  border-bottom: 1rpx solid $gray-2;
  
  .tab {
    flex: 1;
    text-align: center;
    padding: $spacing-sm 0;
    font-size: $font-base;
    color: $gray-5;
    position: relative;
    
    &.active {
      color: $brand-primary;
      font-weight: bold;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40rpx;
        height: 4rpx;
        background: $brand-primary;
        border-radius: 2rpx;
      }
    }
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

.content-list {
  padding: $spacing-base;
  
  .content-item {
    margin-bottom: $spacing-base;
  }
  
  .item-header {
    @include flex-between;
    margin-bottom: $spacing-sm;
    
    .type-tag {
      font-size: $font-xs;
      color: $brand-primary;
    }
    
    .item-action {
      font-size: 32rpx;
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
    margin-bottom: $spacing-sm;
  }
  
  .item-footer {
    display: flex;
    gap: $spacing-sm;
    
    .item-meta {
      font-size: $font-xs;
      color: $gray-4;
    }
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
