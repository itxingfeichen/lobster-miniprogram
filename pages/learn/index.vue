<template>
  <view class="container">
    <!-- 搜索栏 -->
    <view class="search-box card">
      <view class="search-input">
        <text class="search-icon">🔍</text>
        <input 
          class="input" 
          type="text" 
          placeholder="搜索课程..." 
          v-model="searchKeyword"
          @confirm="handleSearch"
        />
      </view>
    </view>

    <!-- 分类筛选 -->
    <view class="category-section card">
      <view class="category-list">
        <view 
          class="category-item" 
          :class="{ active: currentCategory === item.id }"
          v-for="(item, index) in categories" 
          :key="index"
          @click="selectCategory(item.id)"
        >
          {{ item.name }}
        </view>
      </view>
    </view>

    <!-- 课程列表 -->
    <view class="course-section">
      <view class="section-header">
        <text class="section-title">课程列表</text>
        <text class="section-count">共 {{ filteredCourses.length }} 门课程</text>
      </view>
      
      <view class="course-list">
        <view 
          class="course-card card" 
          v-for="(course, index) in filteredCourses" 
          :key="index"
          @click="goToCourseDetail(course)"
        >
          <view class="course-header">
            <view class="course-badge" :class="course.level">{{ course.levelText }}</view>
            <text class="course-duration">⏱ {{ course.duration }}</text>
          </view>
          <text class="course-title">{{ course.title }}</text>
          <text class="course-description">{{ course.description }}</text>
          <view class="course-footer">
            <view class="course-progress">
              <view class="progress-bar-mini">
                <view class="progress-fill-mini" :style="{ width: course.progress + '%' }"></view>
              </view>
              <text class="progress-text">{{ course.progress }}%</text>
            </view>
            <text class="course-status" :class="{ completed: course.progress === 100 }">
              {{ course.progress === 100 ? '已完成' : (course.progress > 0 ? '学习中' : '未开始') }}
            </text>
          </view>
        </view>
      </view>

      <!-- 空状态 -->
      <view class="empty-state" v-if="filteredCourses.length === 0">
        <text class="empty-icon">📚</text>
        <text class="empty-text">暂无相关课程</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
      currentCategory: 'all',
      categories: [
        { id: 'all', name: '全部' },
        { id: 'basic', name: '基础入门' },
        { id: 'advanced', name: '进阶实战' },
        { id: 'skill', name: '技能开发' },
        { id: 'integration', name: '集成应用' }
      ],
      courses: [
        {
          id: 1,
          title: 'OpenClaw 快速入门',
          description: '5 分钟了解 OpenClaw 的核心功能和使用方法',
          level: 'basic',
          levelText: '入门',
          duration: '5 分钟',
          progress: 100,
          category: 'basic'
        },
        {
          id: 2,
          title: '智能体协作基础',
          description: '学习主协调者与子智能体的协作模式',
          level: 'basic',
          levelText: '入门',
          duration: '15 分钟',
          progress: 60,
          category: 'basic'
        },
        {
          id: 3,
          title: '技能开发实战',
          description: '从零开始开发你的第一个 Agent Skill',
          level: 'advanced',
          levelText: '进阶',
          duration: '30 分钟',
          progress: 0,
          category: 'skill'
        },
        {
          id: 4,
          title: '工具集成指南',
          description: '学习如何集成外部工具和 API',
          level: 'advanced',
          levelText: '进阶',
          duration: '25 分钟',
          progress: 0,
          category: 'integration'
        },
        {
          id: 5,
          title: '多平台小程序开发',
          description: '使用 uni-app 开发跨平台小程序',
          level: 'advanced',
          levelText: '进阶',
          duration: '45 分钟',
          progress: 0,
          category: 'skill'
        },
        {
          id: 6,
          title: '健康数据管理',
          description: '集成华为健康数据进行健康管理',
          level: 'advanced',
          levelText: '进阶',
          duration: '20 分钟',
          progress: 0,
          category: 'integration'
        }
      ]
    }
  },
  computed: {
    filteredCourses() {
      let result = this.courses
      
      // 分类筛选
      if (this.currentCategory !== 'all') {
        result = result.filter(course => course.category === this.currentCategory)
      }
      
      // 搜索筛选
      if (this.searchKeyword.trim()) {
        const keyword = this.searchKeyword.toLowerCase()
        result = result.filter(course => 
          course.title.toLowerCase().includes(keyword) ||
          course.description.toLowerCase().includes(keyword)
        )
      }
      
      return result
    }
  },
  onLoad() {
    console.log('学习中心加载完成')
  },
  onPullDownRefresh() {
    // 模拟刷新
    setTimeout(() => {
      uni.stopPullDownRefresh()
      uni.showToast({
        title: '刷新完成',
        icon: 'success'
      })
    }, 1000)
  },
  methods: {
    selectCategory(categoryId) {
      this.currentCategory = categoryId
    },
    handleSearch() {
      console.log('搜索:', this.searchKeyword)
    },
    goToCourseDetail(course) {
      uni.showToast({
        title: '课程详情开发中',
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

.search-box {
  padding: 10px 15px;
}

.search-input {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 10px 15px;
}

.search-icon {
  margin-right: 10px;
  font-size: 16px;
}

.input {
  flex: 1;
  font-size: 14px;
  background: transparent;
}

.category-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
}

.category-item {
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}

.category-item.active {
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

.section-count {
  font-size: 12px;
  color: #999;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.course-card {
  padding: 20px;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.course-badge {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  
  &.basic {
    background: #e3f2fd;
    color: #2196f3;
  }
  
  &.advanced {
    background: #fff3e0;
    color: #ff9800;
  }
}

.course-duration {
  font-size: 12px;
  color: #999;
}

.course-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 8px;
}

.course-description {
  font-size: 13px;
  color: #666;
  display: block;
  margin-bottom: 15px;
  line-height: 1.5;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.progress-bar-mini {
  flex: 1;
  height: 6px;
  background: #e5e5e5;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill-mini {
  height: 100%;
  background: #3cc51f;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #999;
  min-width: 35px;
}

.course-status {
  font-size: 12px;
  color: #999;
  
  &.completed {
    color: #3cc51f;
  }
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
}
</style>
