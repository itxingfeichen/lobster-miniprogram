<template>
  <view class="learn-container">
    <!-- 搜索栏 -->
    <view class="search-bar">
      <view class="search-input-wrap">
        <text class="search-icon">🔍</text>
        <input
          class="search-input"
          type="text"
          placeholder="搜索教程..."
          :value="searchKeyword"
          @input="onSearchInput"
          @confirm="onSearchConfirm"
          confirm-type="search"
        />
        <text
          v-if="searchKeyword"
          class="search-clear"
          @click="clearSearch"
        >✕</text>
      </view>
    </view>

    <!-- 分类 Tab -->
    <view class="category-bar">
      <scroll-view
        class="category-scroll"
        scroll-x
        :scroll-left="scrollLeft"
        scroll-with-animation
      >
        <view class="category-list">
          <view
            v-for="(cat, idx) in categoryTabs"
            :key="cat.id"
            class="category-tab"
            :class="{ active: currentCategory === cat.id }"
            @click="switchCategory(cat.id, idx)"
          >
            <text class="category-tab-text">{{ cat.name }}</text>
            <view v-if="currentCategory === cat.id" class="category-tab-line"></view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 排序行 -->
    <view class="sort-bar">
      <view
        v-for="item in sortOptions"
        :key="item.value"
        class="sort-item"
        :class="{ active: currentSort === item.value }"
        @click="switchSort(item.value)"
      >
        <text class="sort-text">{{ item.label }}</text>
      </view>
      <view class="sort-bar-right">
        <text class="total-count">共 {{ totalCount }} 篇</text>
      </view>
    </view>

    <!-- 加载骨架屏 -->
    <view v-if="loading && tutorialList.length === 0" class="skeleton-wrap">
      <view v-for="i in 4" :key="i" class="skeleton-card">
        <view class="skeleton-title"></view>
        <view class="skeleton-summary"></view>
        <view class="skeleton-summary short"></view>
        <view class="skeleton-footer">
          <view class="skeleton-tag"></view>
          <view class="skeleton-info"></view>
        </view>
      </view>
    </view>

    <!-- 教程列表 -->
    <view v-else-if="filteredList.length > 0" class="tutorial-list">
      <view
        v-for="(item, index) in filteredList"
        :key="item.id"
        class="tutorial-card anim-slideUp"
        :style="{ animationDelay: (index % 10) * 0.05 + 's' }"
        @click="goToDetail(item)"
      >
        <view class="card-body">
          <view class="card-title-wrap">
            <text class="card-title">{{ item.title }}</text>
          </view>
          <view class="card-summary-wrap">
            <text class="card-summary">{{ item.summary }}</text>
          </view>
          <view class="card-footer">
            <view
              class="difficulty-tag"
              :class="'difficulty-' + item.difficulty"
            >
              {{ difficultyLabel(item.difficulty) }}
            </view>
            <view class="card-stats">
              <text class="stat-item">👁 {{ formatCount(item.readCount) }}</text>
              <text class="stat-item">❤ {{ formatCount(item.likeCount) }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 加载更多状态 -->
      <view class="load-more">
        <view v-if="loadingMore" class="loading-indicator">
          <view class="loading-spinner"></view>
          <text class="loading-text">加载中...</text>
        </view>
        <text v-else-if="noMore" class="no-more-text">已经到底了~</text>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-else class="empty-state">
      <image
        class="empty-img"
        src="/static/images/empty-state.png"
        mode="aspectFit"
      ></image>
      <text class="empty-title">暂无相关教程</text>
      <text class="empty-desc" v-if="searchKeyword">
        换个关键词试试吧
      </text>
      <text class="empty-desc" v-else>
        该分类下暂无教程内容
      </text>
    </view>
  </view>
</template>

<script>
import { getTutorialList, getCategories } from '@/api/tutorial'

export default {
  data() {
    return {
      // 搜索
      searchKeyword: '',
      searchTimer: null,

      // 分类
      categories: [],
      currentCategory: '',
      scrollLeft: 0,

      // 排序
      sortOptions: [
        { label: '最新', value: 'newest' },
        { label: '最热', value: 'hottest' },
        { label: '推荐', value: 'recommended' }
      ],
      currentSort: 'newest',

      // 列表
      tutorialList: [],
      page: 1,
      pageSize: 10,
      totalCount: 0,
      loading: false,
      loadingMore: false,
      noMore: false
    }
  },

  computed: {
    categoryTabs() {
      return [{ id: '', name: '全部', icon: '📋' }, ...this.categories]
    },

    filteredList() {
      if (!this.searchKeyword.trim()) {
        return this.tutorialList
      }
      const kw = this.searchKeyword.toLowerCase()
      return this.tutorialList.filter(item =>
        item.title.toLowerCase().includes(kw) ||
        item.summary.toLowerCase().includes(kw)
      )
    }
  },

  onLoad() {
    this.initData()
  },

  onPullDownRefresh() {
    this.refreshList()
  },

  onReachBottom() {
    this.loadMore()
  },

  methods: {
    // ========== 初始化 ==========
    async initData() {
      await this.loadCategories()
      await this.loadTutorials()
    },

    async loadCategories() {
      try {
        const data = await getCategories()
        this.categories = data || []
      } catch (e) {
        console.error('加载分类失败:', e)
      }
    },

    // ========== 教程列表加载 ==========
    async loadTutorials(append = false) {
      if (!append) {
        this.loading = true
      }

      try {
        const params = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.currentSort
        }
        if (this.currentCategory) {
          params.category = this.currentCategory
        }

        const data = await getTutorialList(params)

        if (append) {
          this.tutorialList = [...this.tutorialList, ...(data.list || [])]
        } else {
          this.tutorialList = data.list || []
        }

        this.totalCount = data.total || 0
        this.noMore = this.tutorialList.length >= this.totalCount
      } catch (e) {
        console.error('加载教程失败:', e)
        uni.showToast({ title: '加载失败，请重试', icon: 'none' })
      } finally {
        this.loading = false
        this.loadingMore = false
      }
    },

    // ========== 下拉刷新 ==========
    async refreshList() {
      this.page = 1
      this.noMore = false
      await this.loadTutorials()
      uni.stopPullDownRefresh()
    },

    // ========== 上拉加载 ==========
    async loadMore() {
      if (this.loadingMore || this.noMore || this.loading) return

      this.loadingMore = true
      this.page++
      await this.loadTutorials(true)
    },

    // ========== 分类切换 ==========
    switchCategory(categoryId, idx) {
      if (this.currentCategory === categoryId) return
      this.currentCategory = categoryId
      this.page = 1
      this.noMore = false
      this.tutorialList = []
      // 滚动到对应 tab 位置
      this.scrollLeft = Math.max(0, idx * 160 - 200)
      this.loadTutorials()
    },

    // ========== 排序切换 ==========
    switchSort(sortValue) {
      if (this.currentSort === sortValue) return
      this.currentSort = sortValue
      this.page = 1
      this.noMore = false
      this.tutorialList = []
      this.loadTutorials()
    },

    // ========== 搜索 ==========
    onSearchInput(e) {
      this.searchKeyword = e.detail.value
      // 防抖：本地过滤不需要请求，但若需要服务端搜索可在此处理
      clearTimeout(this.searchTimer)
      this.searchTimer = setTimeout(() => {
        // 本地过滤在 computed 中自动处理
      }, 300)
    },

    onSearchConfirm() {
      // 确认搜索时也触发本地过滤（已由 computed 自动处理）
    },

    clearSearch() {
      this.searchKeyword = ''
    },

    // ========== 跳转详情 ==========
    goToDetail(item) {
      uni.navigateTo({
        url: '/pages/learn/detail?id=' + item.id
      })
    },

    // ========== 工具方法 ==========
    difficultyLabel(difficulty) {
      const map = {
        beginner: '入门',
        intermediate: '进阶',
        advanced: '高级'
      }
      return map[difficulty] || difficulty
    },

    formatCount(count) {
      if (!count) return '0'
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + 'w'
      }
      if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k'
      }
      return String(count)
    }
  }
}
</script>

<style lang="scss" scoped>
.learn-container {
  min-height: 100vh;
  background: $gray-1;
  padding-bottom: 120rpx;
}

// ========== 搜索栏 ==========
.search-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  padding: $spacing-sm $spacing-md;
  box-shadow: $shadow-sm;
}

.search-input-wrap {
  @include flex-center;
  background: $gray-1;
  border-radius: $radius-round;
  padding: $spacing-xs $spacing-md;
  height: 72rpx;
}

.search-icon {
  font-size: $font-lg;
  margin-right: $spacing-sm;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  font-size: $font-base;
  color: $gray-7;
  background: transparent;
}

.search-clear {
  font-size: $font-sm;
  color: $gray-5;
  padding: $spacing-xs;
  flex-shrink: 0;
}

// ========== 分类 Tab ==========
.category-bar {
  background: #fff;
  @include hairline-bottom;
}

.category-scroll {
  white-space: nowrap;
}

.category-list {
  display: inline-flex;
  padding: $spacing-sm $spacing-md;
  gap: $spacing-lg;
}

.category-tab {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: $spacing-xs 0;
  flex-shrink: 0;
}

.category-tab-text {
  font-size: $font-base;
  color: $gray-6;
  transition: color 0.2s;
}

.category-tab.active .category-tab-text {
  color: $brand-primary;
  font-weight: bold;
}

.category-tab-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40rpx;
  height: 6rpx;
  border-radius: $radius-round;
  background: $brand-primary;
}

// ========== 排序行 ==========
.sort-bar {
  @include flex-between;
  padding: $spacing-sm $spacing-md;
  background: #fff;
  margin-bottom: $spacing-sm;
  box-shadow: $shadow-sm;
}

.sort-item {
  padding: $spacing-xs $spacing-sm;
}

.sort-text {
  font-size: $font-sm;
  color: $gray-5;
  transition: color 0.2s;
}

.sort-item.active .sort-text {
  color: $brand-primary;
  font-weight: bold;
}

.sort-bar-right {
  margin-left: auto;
}

.total-count {
  font-size: $font-xs;
  color: $gray-4;
}

// ========== 骨架屏 ==========
.skeleton-wrap {
  padding: $spacing-sm $spacing-md;
}

.skeleton-card {
  @include card-base;
  margin-bottom: $spacing-sm;
  padding: $spacing-md;
}

.skeleton-title {
  @include skeleton-block(70%, 36rpx);
  margin-bottom: $spacing-sm;
}

.skeleton-summary {
  @include skeleton-block(100%, 28rpx);
  margin-bottom: $spacing-xs;

  &.short {
    @include skeleton-block(60%, 28rpx);
  }
}

.skeleton-footer {
  @include flex-between;
  margin-top: $spacing-md;
}

.skeleton-tag {
  @include skeleton-block(80rpx, 40rpx);
  border-radius: $radius-round;
}

.skeleton-info {
  @include skeleton-block(160rpx, 28rpx);
}

// ========== 教程列表 ==========
.tutorial-list {
  padding: 0 $spacing-md;
}

.tutorial-card {
  @include card-base;
  margin-bottom: $spacing-sm;
  padding: $spacing-md;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.98);
  }
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-title-wrap {
  margin-bottom: $spacing-xs;
}

.card-title {
  font-size: $font-lg;
  font-weight: bold;
  color: $gray-7;
  @include text-ellipsis(2);
  line-height: 1.4;
}

.card-summary-wrap {
  margin-bottom: $spacing-md;
}

.card-summary {
  font-size: $font-sm;
  color: $gray-5;
  line-height: 1.6;
  @include text-ellipsis(2);
}

.card-footer {
  @include flex-between;
  align-items: center;
}

.difficulty-tag {
  display: inline-flex;
  align-items: center;
  padding: 4rpx 16rpx;
  border-radius: $radius-round;
  font-size: $font-xs;
}

.difficulty-beginner {
  color: $color-success;
  background: rgba($color-success, 0.1);
  border: 1rpx solid rgba($color-success, 0.3);
}

.difficulty-intermediate {
  color: $color-info;
  background: rgba($color-info, 0.1);
  border: 1rpx solid rgba($color-info, 0.3);
}

.difficulty-advanced {
  color: $brand-secondary;
  background: rgba($brand-secondary, 0.1);
  border: 1rpx solid rgba($brand-secondary, 0.3);
}

.card-stats {
  display: flex;
  gap: $spacing-md;
}

.stat-item {
  font-size: $font-xs;
  color: $gray-5;
}

// ========== 加载更多 ==========
.load-more {
  padding: $spacing-lg 0;
  text-align: center;
}

.loading-indicator {
  @include flex-center;
  gap: $spacing-sm;
}

.loading-spinner {
  width: 32rpx;
  height: 32rpx;
  border: 4rpx solid $gray-3;
  border-top-color: $brand-primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-text {
  font-size: $font-sm;
  color: $gray-5;
}

.no-more-text {
  font-size: $font-sm;
  color: $gray-4;
}

// ========== 空状态 ==========
.empty-state {
  @include flex-column;
  align-items: center;
  justify-content: center;
  padding: 160rpx $spacing-lg 80rpx;
}

.empty-img {
  width: 320rpx;
  height: 320rpx;
  margin-bottom: $spacing-lg;
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
</style>
