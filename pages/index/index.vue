<template>
  <view class="page-home">
    <!-- Loading 遮罩 -->
    <view class="loading-mask" v-if="loading">
      <view class="loading-spinner anim-spin">⏳</view>
      <text class="loading-text">加载中...</text>
    </view>

    <!-- 主内容区 -->
    <view class="home-content" v-else>
      <!-- 1. 搜索入口区 -->
      <view class="search-bar anim-fadeIn" @click="handleSearchClick">
        <view class="search-inner">
          <text class="search-icon">🔍</text>
          <text class="search-placeholder">搜索 OpenClaw 教程...</text>
        </view>
      </view>

      <!-- 2. Banner 轮播区 -->
      <view class="banner-section anim-slideUp" v-if="recommendList.length">
        <swiper
          class="banner-swiper"
          :indicator-dots="true"
          :autoplay="true"
          :interval="4000"
          :duration="500"
          :circular="true"
          indicator-color="rgba(255,255,255,0.4)"
          indicator-active-color="#ffffff"
        >
          <swiper-item
            v-for="(item, index) in recommendList"
            :key="item.id"
            @click="handleBannerClick(item)"
          >
            <view class="banner-item" :class="'banner-bg-' + (index % 3)">
              <view class="banner-content">
                <view class="banner-tag">{{ getDifficultyLabel(item.difficulty) }}</view>
                <text class="banner-title">{{ item.title }}</text>
                <text class="banner-summary">{{ item.summary }}</text>
              </view>
              <view class="banner-decoration">
                <text class="banner-emoji">{{ getBannerEmoji(index) }}</text>
              </view>
            </view>
          </swiper-item>
        </swiper>
      </view>

      <!-- 3. 快速入口区 -->
      <view class="quick-entry-section anim-slideUp">
        <view class="section-header">
          <text class="section-title">快速入口</text>
        </view>
        <view class="entry-grid">
          <view
            class="entry-item"
            v-for="entry in quickEntries"
            :key="entry.id"
            @click="handleEntryClick(entry)"
          >
            <view class="entry-icon-wrapper" :class="'entry-bg-' + entry.color">
              <text class="entry-icon">{{ entry.icon }}</text>
            </view>
            <text class="entry-name">{{ entry.name }}</text>
          </view>
        </view>
      </view>

      <!-- 4. 学习进度概览 -->
      <view class="progress-section anim-slideUp" v-if="learnProgress">
        <view class="section-header">
          <text class="section-title">学习进度</text>
          <text class="section-extra">{{ learnProgress.completionRate }}%</text>
        </view>
        <view class="progress-card">
          <view class="progress-stats">
            <view class="progress-stat-item">
              <text class="stat-value">{{ learnProgress.completedTutorials }}</text>
              <text class="stat-label">已完成</text>
            </view>
            <view class="progress-divider"></view>
            <view class="progress-stat-item">
              <text class="stat-value">{{ learnProgress.totalTutorials }}</text>
              <text class="stat-label">总课程</text>
            </view>
            <view class="progress-divider"></view>
            <view class="progress-stat-item">
              <text class="stat-value">{{ learnProgress.savedSnippets }}</text>
              <text class="stat-label">已收藏</text>
            </view>
          </view>
          <view class="progress-bar-wrapper">
            <view class="progress-bar-bg">
              <view
                class="progress-bar-fill"
                :style="{ width: learnProgress.completionRate + '%' }"
              ></view>
            </view>
            <text class="progress-bar-text">
              已完成 {{ learnProgress.completedTutorials }}/{{ learnProgress.totalTutorials }} 课程
            </text>
          </view>
          <view class="continue-btn" @click="handleContinueLearn">
            <text class="continue-btn-text">继续学习</text>
            <text class="continue-btn-arrow">→</text>
          </view>
        </view>
      </view>

      <!-- 5. 热门教程列表 -->
      <view class="hot-section anim-slideUp" v-if="hotList.length">
        <view class="section-header">
          <text class="section-title">🔥 热门教程</text>
        </view>
        <view class="tutorial-list">
          <view
            class="tutorial-card"
            v-for="item in hotList"
            :key="item.id"
            @click="handleTutorialClick(item)"
          >
            <view class="tutorial-card-body">
              <view class="tutorial-info">
                <text class="tutorial-title">{{ item.title }}</text>
                <text class="tutorial-summary">{{ item.summary }}</text>
              </view>
              <view class="tutorial-meta">
                <view
                  class="difficulty-tag"
                  :class="'difficulty-' + item.difficulty"
                >
                  <text class="difficulty-text">{{ getDifficultyLabel(item.difficulty) }}</text>
                </view>
                <view class="read-count">
                  <text class="read-icon">👁️</text>
                  <text class="read-num">{{ formatReadCount(item.readCount) }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 6. 查看更多按钮 -->
      <view class="more-section anim-fadeIn">
        <view class="more-btn" @click="handleViewAll">
          <text class="more-btn-text">查看全部教程</text>
          <text class="more-btn-arrow">→</text>
        </view>
      </view>

      <!-- 底部安全区 -->
      <view class="bottom-safe"></view>
    </view>
  </view>
</template>

<script>
import { getRecommended, getHotTutorials } from '@/api/tutorial'
import { getLearnProgress } from '@/api/user'

export default {
  data() {
    return {
      loading: true,
      recommendList: [],
      hotList: [],
      learnProgress: null,
      quickEntries: [
        { id: 'getting-started', name: '入门教程', icon: '📚', color: 'blue' },
        { id: 'core-concepts', name: '核心概念', icon: '💡', color: 'yellow' },
        { id: 'agent-dev', name: 'Agent 开发', icon: '🤖', color: 'green' },
        { id: 'deployment', name: '代码库', icon: '💻', color: 'purple' }
      ]
    }
  },
  onLoad() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        const [recommended, hot, progress] = await Promise.all([
          getRecommended(5),
          getHotTutorials(5),
          getLearnProgress()
        ])
        this.recommendList = recommended || []
        this.hotList = hot || []
        this.learnProgress = progress || null
      } catch (e) {
        console.error('首页数据加载失败:', e)
        uni.showToast({ title: '数据加载失败', icon: 'none' })
      } finally {
        this.loading = false
      }
    },

    // 搜索点击
    handleSearchClick() {
      uni.showToast({
        title: '搜索功能开发中',
        icon: 'none'
      })
    },

    // Banner 点击
    handleBannerClick(item) {
      console.log('Banner clicked:', item.id, item.title)
      uni.showToast({
        title: '教程详情开发中',
        icon: 'none'
      })
    },

    // 快速入口点击
    handleEntryClick(entry) {
      if (entry.id === 'deployment') {
        // 代码库跳转到代码 Tab
        uni.switchTab({ url: '/pages/code/index' })
      } else {
        // 其他跳转到学习中心
        uni.switchTab({ url: '/pages/learn/index' })
      }
    },

    // 继续学习
    handleContinueLearn() {
      uni.switchTab({ url: '/pages/learn/index' })
    },

    // 教程卡片点击
    handleTutorialClick(item) {
      console.log('Tutorial clicked:', item.id, item.title)
      uni.showToast({
        title: '教程详情开发中',
        icon: 'none'
      })
    },

    // 查看全部教程
    handleViewAll() {
      uni.switchTab({ url: '/pages/learn/index' })
    },

    // 难度标签文本
    getDifficultyLabel(difficulty) {
      const map = {
        beginner: '入门',
        intermediate: '进阶',
        advanced: '高级'
      }
      return map[difficulty] || difficulty
    },

    // Banner 装饰 emoji
    getBannerEmoji(index) {
      const emojis = ['🚀', '🧠', '🛠️', '☁️', '⚡']
      return emojis[index % emojis.length]
    },

    // 格式化阅读数
    formatReadCount(count) {
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + 'w'
      } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k'
      }
      return String(count)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.page-home {
  min-height: 100vh;
  background: $gray-1;
}

/* ========== Loading ========== */
.loading-mask {
  @include flex-center;
  @include flex-column;
  min-height: 100vh;
}

.loading-spinner {
  font-size: 64rpx;
  margin-bottom: $spacing-md;
}

.loading-text {
  font-size: $font-base;
  color: $gray-5;
}

/* ========== 主内容 ========== */
.home-content {
  padding: $spacing-base;
  padding-bottom: 160rpx;
}

/* ========== 搜索栏 ========== */
.search-bar {
  margin-bottom: $spacing-base;
}

.search-inner {
  @include flex-center;
  background: #fff;
  border-radius: $radius-round;
  padding: $spacing-sm $spacing-md;
  box-shadow: $shadow-sm;
  height: 80rpx;
}

.search-icon {
  font-size: $font-lg;
  margin-right: $spacing-sm;
}

.search-placeholder {
  font-size: $font-base;
  color: $gray-4;
  flex: 1;
}

/* ========== Banner 轮播 ========== */
.banner-section {
  margin-bottom: $spacing-base;
}

.banner-swiper {
  height: 320rpx;
  border-radius: $radius-lg;
  overflow: hidden;
}

.banner-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: $spacing-md $spacing-lg;
  border-radius: $radius-lg;
  box-sizing: border-box;
}

.banner-bg-0 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.banner-bg-1 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.banner-bg-2 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.banner-content {
  flex: 1;
  @include flex-column;
  padding-right: $spacing-md;
}

.banner-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: $font-xs;
  padding: 4rpx 16rpx;
  border-radius: $radius-round;
  margin-bottom: $spacing-sm;
  align-self: flex-start;
}

.banner-title {
  font-size: $font-xl;
  font-weight: bold;
  color: #fff;
  margin-bottom: $spacing-xs;
  @include text-ellipsis(1);
}

.banner-summary {
  font-size: $font-sm;
  color: rgba(255, 255, 255, 0.85);
  @include text-ellipsis(2);
}

.banner-decoration {
  @include flex-center;
  width: 120rpx;
  height: 120rpx;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  flex-shrink: 0;
}

.banner-emoji {
  font-size: 60rpx;
}

/* ========== 快速入口 ========== */
.quick-entry-section {
  margin-bottom: $spacing-base;
}

.section-header {
  @include flex-between;
  margin-bottom: $spacing-base;
}

.section-title {
  font-size: $font-lg;
  font-weight: bold;
  color: $gray-7;
}

.section-extra {
  font-size: $font-xl;
  font-weight: bold;
  color: $brand-primary;
}

.entry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-sm;
  @include card-base;
}

.entry-item {
  @include flex-center;
  @include flex-column;
  padding: $spacing-base $spacing-xs;
}

.entry-icon-wrapper {
  @include flex-center;
  width: 96rpx;
  height: 96rpx;
  border-radius: $radius-lg;
  margin-bottom: $spacing-sm;
}

.entry-icon {
  font-size: 44rpx;
}

.entry-bg-blue {
  background: #e3f2fd;
}

.entry-bg-yellow {
  background: #fff8e1;
}

.entry-bg-green {
  background: #e8f5e9;
}

.entry-bg-purple {
  background: #f3e5f5;
}

.entry-name {
  font-size: $font-sm;
  color: $gray-6;
}

/* ========== 学习进度 ========== */
.progress-section {
  margin-bottom: $spacing-base;
}

.progress-card {
  @include card-base;
}

.progress-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: $spacing-md;
}

.progress-stat-item {
  @include flex-center;
  @include flex-column;
}

.stat-value {
  font-size: $font-xxl;
  font-weight: bold;
  color: $brand-primary;
  margin-bottom: 4rpx;
}

.stat-label {
  font-size: $font-xs;
  color: $gray-5;
}

.progress-divider {
  width: 1rpx;
  height: 60rpx;
  background: $gray-3;
}

.progress-bar-wrapper {
  margin-bottom: $spacing-md;
}

.progress-bar-bg {
  height: 16rpx;
  background: $gray-2;
  border-radius: $radius-round;
  overflow: hidden;
  margin-bottom: $spacing-xs;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, $brand-primary, #4cd964);
  border-radius: $radius-round;
  transition: width 0.6s ease;
}

.progress-bar-text {
  font-size: $font-xs;
  color: $gray-5;
}

.continue-btn {
  @include flex-center;
  background: $brand-primary;
  color: #fff;
  height: 80rpx;
  border-radius: $radius-base;
}

.continue-btn-text {
  font-size: $font-base;
  font-weight: bold;
}

.continue-btn-arrow {
  font-size: $font-lg;
  margin-left: $spacing-xs;
}

/* ========== 热门教程 ========== */
.hot-section {
  margin-bottom: $spacing-base;
}

.tutorial-list {
  @include flex-column;
}

.tutorial-card {
  @include card-base;
  margin-bottom: $spacing-sm;
}

.tutorial-card-body {
  @include flex-column;
}

.tutorial-info {
  margin-bottom: $spacing-sm;
}

.tutorial-title {
  display: block;
  font-size: $font-md;
  font-weight: bold;
  color: $gray-7;
  margin-bottom: $spacing-xs;
  @include text-ellipsis(1);
}

.tutorial-summary {
  display: block;
  font-size: $font-sm;
  color: $gray-5;
  @include text-ellipsis(2);
}

.tutorial-meta {
  @include flex-between;
}

.difficulty-tag {
  display: inline-flex;
  align-items: center;
  padding: 4rpx 16rpx;
  border-radius: $radius-round;
  font-size: $font-sm;
}

.difficulty-text {
  font-size: $font-sm;
}

/* 难度颜色 */
.difficulty-beginner {
  color: #07c160;
  background: rgba(7, 193, 96, 0.1);
  border: 1rpx solid rgba(7, 193, 96, 0.3);
}

.difficulty-intermediate {
  color: #1989fa;
  background: rgba(25, 137, 250, 0.1);
  border: 1rpx solid rgba(25, 137, 250, 0.3);
}

.difficulty-advanced {
  color: #ff9900;
  background: rgba(255, 153, 0, 0.1);
  border: 1rpx solid rgba(255, 153, 0, 0.3);
}

.read-count {
  display: flex;
  align-items: center;
}

.read-icon {
  font-size: $font-sm;
  margin-right: 4rpx;
}

.read-num {
  font-size: $font-sm;
  color: $gray-5;
}

/* ========== 查看更多 ========== */
.more-section {
  margin-bottom: $spacing-lg;
}

.more-btn {
  @include flex-center;
  @include card-base;
  height: 88rpx;
  border: 2rpx dashed $gray-3;
  background: #fff;
}

.more-btn-text {
  font-size: $font-base;
  color: $gray-6;
}

.more-btn-arrow {
  font-size: $font-lg;
  color: $brand-primary;
  margin-left: $spacing-xs;
}

/* ========== 底部安全区 ========== */
.bottom-safe {
  height: 40rpx;
  @include safe-area-bottom;
}
</style>
