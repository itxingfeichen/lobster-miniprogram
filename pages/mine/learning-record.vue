<template>
  <view class="learning-record-container">
    <view class="summary-card card">
      <view class="summary-item">
        <text class="summary-value">{{ progress.completedTutorials }}</text>
        <text class="summary-label">已完成教程</text>
      </view>
      <view class="summary-divider"></view>
      <view class="summary-item">
        <text class="summary-value">{{ progress.completionRate }}%</text>
        <text class="summary-label">完成率</text>
      </view>
      <view class="summary-divider"></view>
      <view class="summary-item">
        <text class="summary-value">{{ progress.totalLearnMinutes }}</text>
        <text class="summary-label">学习分钟</text>
      </view>
    </view>

    <view class="section">
      <text class="section-title">分类进度</text>
      <view class="category-list">
        <view class="category-item card" v-for="(item, index) in progress.categoryProgress" :key="index">
          <view class="category-header">
            <text class="category-name">{{ item.name }}</text>
            <text class="category-rate">{{ item.completed }}/{{ item.total }}</text>
          </view>
          <view class="progress-bar">
            <view class="progress-fill" :style="{ width: item.rate + '%' }"></view>
          </view>
        </view>
      </view>
    </view>

    <view class="section">
      <text class="section-title">最近学习</text>
      <view class="activity-list">
        <view class="activity-item card" v-for="(item, index) in progress.recentActivity" :key="index">
          <view class="activity-icon">
            <text v-if="item.action === 'read'">📖</text>
            <text v-else-if="item.action === 'complete'">✅</text>
            <text v-else-if="item.action === 'favorite'">⭐</text>
            <text v-else>📝</text>
          </view>
          <view class="activity-content">
            <text class="activity-title">{{ item.title }}</text>
            <text class="activity-date">{{ item.date }}</text>
          </view>
          <view class="activity-action">
            <text v-if="item.action === 'read'">学习了</text>
            <text v-else-if="item.action === 'complete'">完成了</text>
            <text v-else-if="item.action === 'favorite'">收藏了</text>
            <text v-else>操作了</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getLearnProgress } from '@/api/user'

export default {
  data() {
    return {
      progress: {
        completedTutorials: 0,
        completionRate: 0,
        totalLearnMinutes: 0,
        categoryProgress: [],
        recentActivity: []
      },
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
        const res = await getLearnProgress()
        this.progress = res
      } catch (err) {
        console.error('加载学习记录失败:', err)
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.learning-record-container {
  min-height: 100vh;
  background: $gray-1;
  padding: $spacing-base;
  padding-bottom: 120rpx;
}

.summary-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: $spacing-base;
}

.summary-item {
  @include flex-center;
  @include flex-column;
  flex: 1;
  
  .summary-value {
    font-size: $font-xxl;
    font-weight: bold;
    color: $brand-primary;
  }
  
  .summary-label {
    font-size: $font-sm;
    color: $gray-5;
    margin-top: $spacing-xs;
  }
}

.summary-divider {
  width: 1rpx;
  height: 60rpx;
  background: $gray-2;
}

.section {
  margin-bottom: $spacing-base;
  
  .section-title {
    display: block;
    font-size: $font-lg;
    font-weight: bold;
    color: $gray-7;
    margin-bottom: $spacing-sm;
  }
}

.category-list {
  .category-item {
    margin-bottom: $spacing-sm;
  }
  
  .category-header {
    @include flex-between;
    margin-bottom: $spacing-sm;
    
    .category-name {
      font-size: $font-base;
      color: $gray-7;
    }
    
    .category-rate {
      font-size: $font-sm;
      color: $gray-5;
    }
  }
  
  .progress-bar {
    height: 12rpx;
    background: $gray-2;
    border-radius: 6rpx;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: $brand-primary;
    border-radius: 6rpx;
    transition: width 0.3s ease;
  }
}

.activity-list {
  .activity-item {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-sm;
  }
  
  .activity-icon {
    font-size: 40rpx;
    margin-right: $spacing-sm;
  }
  
  .activity-content {
    flex: 1;
    min-width: 0;
    
    .activity-title {
      display: block;
      font-size: $font-base;
      color: $gray-7;
      @include text-ellipsis(1);
    }
    
    .activity-date {
      font-size: $font-sm;
      color: $gray-4;
    }
  }
  
  .activity-action {
    font-size: $font-sm;
    color: $gray-5;
  }
}
</style>
