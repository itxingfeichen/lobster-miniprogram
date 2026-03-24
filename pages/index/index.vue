<template>
  <view class="container">
    <!-- 顶部欢迎区域 -->
    <view class="header card">
      <view class="welcome-text">
        <text class="title">欢迎学习 OpenClaw</text>
        <text class="subtitle">智能体协作平台使用教程</text>
      </view>
      <image class="logo" src="/static/images/logo.png" mode="aspectFit"></image>
    </view>

    <!-- 快速入口 -->
    <view class="quick-access card">
      <view class="section-title">快速开始</view>
      <view class="grid-menu">
        <view class="menu-item" @click="navigateTo('learn')">
          <view class="menu-icon bg-blue">📚</view>
          <text class="menu-text">开始学习</text>
        </view>
        <view class="menu-item" @click="navigateTo('code')">
          <view class="menu-icon bg-green">💻</view>
          <text class="menu-text">查看代码</text>
        </view>
        <view class="menu-item" @click="navigateTo('mine')">
          <view class="menu-icon bg-orange">👤</view>
          <text class="menu-text">个人中心</text>
        </view>
        <view class="menu-item" @click="showAbout">
          <view class="menu-icon bg-purple">ℹ️</view>
          <text class="menu-text">关于</text>
        </view>
      </view>
    </view>

    <!-- 学习进度 -->
    <view class="progress-section card">
      <view class="section-title">学习进度</view>
      <view class="progress-info">
        <text class="progress-text">已完成 {{ progress.completed }} / {{ progress.total }} 课程</text>
        <text class="progress-percent">{{ progressPercent }}%</text>
      </view>
      <view class="progress-bar">
        <view class="progress-fill" :style="{ width: progressPercent + '%' }"></view>
      </view>
      <view class="continue-btn" @click="navigateTo('learn')">继续学习</view>
    </view>

    <!-- 推荐课程 -->
    <view class="recommend-section card">
      <view class="section-title">推荐课程</view>
      <view class="course-list">
        <view class="course-item" v-for="(course, index) in recommendCourses" :key="index" @click="goToCourse(course)">
          <view class="course-info">
            <text class="course-title">{{ course.title }}</text>
            <text class="course-desc">{{ course.description }}</text>
          </view>
          <view class="course-tag">{{ course.tag }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: {
        completed: 3,
        total: 12
      },
      recommendCourses: [
        {
          id: 1,
          title: 'OpenClaw 入门指南',
          description: '了解 OpenClaw 的基本概念和使用方法',
          tag: '新手必读'
        },
        {
          id: 2,
          title: '智能体协作基础',
          description: '学习如何与 AI 智能体高效协作',
          tag: '基础课程'
        },
        {
          id: 3,
          title: '技能开发实战',
          description: '动手开发你的第一个 Agent Skill',
          tag: '实战演练'
        }
      ]
    }
  },
  computed: {
    progressPercent() {
      return Math.round((this.progress.completed / this.progress.total) * 100)
    }
  },
  onLoad() {
    console.log('首页加载完成')
  },
  methods: {
    navigateTo(page) {
      const pages = {
        'learn': '/pages/learn/index',
        'code': '/pages/code/index',
        'mine': '/pages/mine/index'
      }
      if (pages[page]) {
        uni.switchTab({
          url: pages[page]
        })
      }
    },
    goToCourse(course) {
      uni.showToast({
        title: '即将推出',
        icon: 'none'
      })
    },
    showAbout() {
      uni.showModal({
        title: '关于 OpenClaw 教程',
        content: '这是一个帮助您学习使用 OpenClaw 智能体协作平台的教程小程序。支持微信、QQ、支付宝多平台。',
        showCancel: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  padding-bottom: 100px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
}

.welcome-text {
  flex: 1;
}

.title {
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  opacity: 0.9;
}

.logo {
  width: 80px;
  height: 80px;
  margin-left: 15px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.grid-menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
}

.menu-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 8px;
}

.bg-blue { background: #e3f2fd; }
.bg-green { background: #e8f5e9; }
.bg-orange { background: #fff3e0; }
.bg-purple { background: #f3e5f5; }

.menu-text {
  font-size: 12px;
  color: #666;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.progress-text {
  font-size: 14px;
  color: #666;
}

.progress-percent {
  font-size: 18px;
  font-weight: bold;
  color: #3cc51f;
}

.progress-bar {
  height: 8px;
  background: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3cc51f, #4cd964);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.continue-btn {
  background: #3cc51f;
  color: #ffffff;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.course-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f8f8f8;
  border-radius: 8px;
}

.course-info {
  flex: 1;
}

.course-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

.course-desc {
  font-size: 12px;
  color: #999;
}

.course-tag {
  font-size: 12px;
  color: #3cc51f;
  background: #e8f5e9;
  padding: 4px 10px;
  border-radius: 12px;
  margin-left: 10px;
}
</style>
