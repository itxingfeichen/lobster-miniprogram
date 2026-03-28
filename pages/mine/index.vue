<template>
  <view class="container">
    <!-- 用户信息卡片 (暂时隐藏) -->
    <!-- <view class="user-card card">
      <view class="user-header">
        <image class="avatar" src="/static/images/default-avatar.png" mode="aspectFill"></image>
        <view class="user-info">
          <text class="nickname">{{ userInfo.nickname }}</text>
          <text class="user-id">ID: {{ userInfo.id }}</text>
        </view>
        <view class="vip-badge" v-if="userInfo.isVip">VIP</view>
      </view>
      <view class="user-stats">
        <view class="stat-item">
          <text class="stat-value">{{ stats.learnTime }}</text>
          <text class="stat-label">学习时长 (小时)</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">{{ stats.completedCourses }}</text>
          <text class="stat-label">完成课程</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">{{ stats.codeSnippets }}</text>
          <text class="stat-label">收藏代码</text>
        </view>
      </view> -->

    <!-- 学习数据 (暂时隐藏) -->
    <!-- <view class="section card">
      <view class="section-header">
        <text class="section-title">学习数据</text>
        <view class="refresh-btn" @click="refreshStats">
          <text class="refresh-icon">🔄</text>
        </view>
      </view>
      <view class="stats-chart">
        <view class="chart-item" v-for="(item, index) in weeklyStats" :key="index">
          <text class="chart-day">{{ item.day }}</text>
          <view class="chart-bar-wrapper">
            <view class="chart-bar" :style="{ height: item.percent + '%' }"></view>
          </view>
          <text class="chart-value">{{ item.minutes }}分钟</text>
        </view>
      </view>
    </view> -->

    <!-- 功能菜单 -->
    <!-- 全部功能暂时隐藏 -->
    <!-- 版本信息 -->
    <view class="version-info">
      <text class="version-text">版本 {{ appVersion }}</text>
      <text class="copyright">© 2024 OpenClaw 教程</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      appVersion: '1.0.0',
      userInfo: {
        nickname: '学习者',
        id: 'OC2024001',
        isVip: false,
        avatar: '/static/images/default-avatar.png'
      },
      stats: {
        learnTime: 12.5,
        completedCourses: 3,
        codeSnippets: 8,
        favorites: 5
      },
      weeklyStats: [
        { day: '一', minutes: 45, percent: 60 },
        { day: '二', minutes: 30, percent: 40 },
        { day: '三', minutes: 60, percent: 80 },
        { day: '四', minutes: 25, percent: 35 },
        { day: '五', minutes: 50, percent: 70 },
        { day: '六', minutes: 75, percent: 100 },
        { day: '日', minutes: 40, percent: 55 }
      ]
    }
  },
  onLoad() {
    console.log('个人中心加载完成')
    this.loadUserInfo()
  },
  onShow() {
    // 页面显示时刷新数据
    this.refreshStats()
  },
  methods: {
    loadUserInfo() {
      // 从本地存储加载用户信息
      const savedInfo = uni.getStorageSync('user_info')
      if (savedInfo) {
        this.userInfo = { ...this.userInfo, ...savedInfo }
      }
    },
    refreshStats() {
      // 模拟刷新统计数据
      uni.showLoading({ title: '刷新中...' })
      setTimeout(() => {
        uni.hideLoading()
        uni.showToast({
          title: '已更新',
          icon: 'success'
        })
      }, 1000)
    },
    navigateTo(page) {
      const pages = {
        'learning-record': '/pages/mine/learning-record',
        'favorites': '/pages/mine/favorites',
        'history': '/pages/mine/history',
        'settings': '/pages/mine/settings',
        'feedback': '/pages/mine/feedback'
      }
      
      if (pages[page]) {
        uni.navigateTo({
          url: pages[page],
          fail: () => {
            uni.showToast({
              title: '页面开发中',
              icon: 'none'
            })
          }
        })
      }
    },
    showAbout() {
      uni.showModal({
        title: '关于 OpenClaw 教程',
        content: `OpenClaw 教程小程序\n版本：${this.appVersion}\n\n这是一个帮助您学习使用 OpenClaw 智能体协作平台的教程应用。支持微信、QQ、支付宝多平台。\n\n功能特色：\n• 系统化学习课程\n• 代码片段库\n• 学习进度跟踪\n• 多平台同步`,
        showCancel: false,
        confirmText: '我知道了'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 15px;
  padding-bottom: 100px;
  background: #f8f8f8;
}

.user-card {
  padding: 25px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
}

.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin-right: 15px;
}

.user-info {
  flex: 1;
}

.nickname {
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.user-id {
  font-size: 12px;
  opacity: 0.8;
}

.vip-badge {
  background: #ffd700;
  color: #333;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: bold;
}

.user-stats {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 12px;
  opacity: 0.8;
}

.section {
  margin-top: 15px;
  padding: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.refresh-btn {
  padding: 5px;
}

.refresh-icon {
  font-size: 18px;
}

.stats-chart {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 120px;
  padding: 10px 0;
}

.chart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.chart-day {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.chart-bar-wrapper {
  width: 20px;
  height: 80px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.chart-bar {
  width: 100%;
  background: linear-gradient(180deg, #3cc51f 0%, #4cd964 100%);
  border-radius: 10px;
  transition: height 0.3s ease;
}

.chart-value {
  font-size: 10px;
  color: #999;
  margin-top: 8px;
}

.menu-section {
  margin-top: 15px;
}

.menu-group {
  padding: 0;
  overflow: hidden;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #f5f5f5;
  
  &:last-child {
    border-bottom: none;
  }
}

.menu-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-icon {
  font-size: 20px;
}

.menu-text {
  font-size: 16px;
  color: #333;
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.badge {
  background: #ff4d4f;
  color: #ffffff;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
}

.menu-arrow {
  font-size: 20px;
  color: #ccc;
}

.version-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
}

.version-text {
  font-size: 13px;
  color: #999;
  margin-bottom: 8px;
}

.copyright {
  font-size: 12px;
  color: #ccc;
}
</style>
