<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">会话管理</text>
        <text class="tag">核心概念</text>
      </view>
      <text class="title">会话管理与上下文控制</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-12</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">了解 OpenClaw 的会话机制，学会管理对话上下文和会话状态。掌握上下文注入和控制技巧，提升 Agent 交互质量。</text>
      </view>

      <view class="section">
        <text class="section-title">一、会话的概念</text>
        <text class="p">会话（Session）是 Agent 与用户交互的基本单位。每个会话维护独立的上下文。</text>
      </view>

      <view class="section">
        <text class="section-title">二、上下文注入</text>
        <text class="p">OpenClaw 自动将以下文件注入到上下文：</text>
        <view class="file-list">
          <view class="file-item">
            <text class="file-icon">📋</text>
            <text class="file-name">AGENTS.md</text>
            <text class="file-desc">角色和能力</text>
          </view>
          <view class="file-item">
            <text class="file-icon">💫</text>
            <text class="file-name">SOUL.md</text>
            <text class="file-desc">人格和风格</text>
          </view>
          <view class="file-item">
            <text class="file-icon">🔧</text>
            <text class="file-name">TOOLS.md</text>
            <text class="file-desc">工具指南</text>
          </view>
          <view class="file-item">
            <text class="file-icon">👤</text>
            <text class="file-name">USER.md</text>
            <text class="file-desc">用户偏好</text>
          </view>
          <view class="file-item">
            <text class="file-icon">🎭</text>
            <text class="file-name">IDENTITY.md</text>
            <text class="file-desc">Agent 身份</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、上下文管理技巧</text>
        
        <view class="tip-box">
          <text class="tip-title">📌 控制上下文长度</text>
          <text class="tip-text">使用 read 的 offset/limit 参数，避免加载大文件，使用摘要传递信息</text>
        </view>
        
        <view class="tip-box">
          <text class="tip-title">📌 跨会话状态</text>
          <text class="tip-text">使用文件系统持久化，利用 USER.md 记录偏好，通过工作空间共享信息</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、多渠道支持</text>
        <text class="p">OpenClaw 支持多种接入渠道：</text>
        <view class="channel-list">
          <view class="channel-item">QQ Bot</view>
          <view class="channel-item">飞书</view>
          <view class="channel-item">命令行</view>
          <view class="channel-item">Web 界面</view>
        </view>
        <text class="p">每个渠道创建独立会话，共享同一工作空间。</text>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">会话是 Agent 与用户交互的基本单位，维护独立上下文</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">5个核心配置文件自动注入：AGENTS/SOUL/TOOLS/USER/IDENTITY</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">多渠道独立会话，共享工作空间</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT007">
          <text class="related-arrow">←</text>
          <text class="related-text">07 工具系统</text>
        </view>
        <view class="related-item" @click="goToT009">
          <text class="related-arrow">→</text>
          <text class="related-text">09 记忆系统</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT007() {
      uni.navigateTo({ url: '/pages/learn/t007' })
    },
    goToT009() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t009' })
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #3cb371;
$text-main: #1a1a1a;
$text-secondary: #666;

.article-container { min-height: 100vh; background: #fff; }

.article-header {
  padding: 40rpx 32rpx;
  background: linear-gradient(180deg, #f0f7f4 0%, #fff 100%);
  
  .tag-row {
    display: flex;
    gap: 16rpx;
    margin-bottom: 24rpx;
    
    .tag {
      padding: 8rpx 20rpx;
      background: rgba(60, 179, 113, 0.1);
      color: $primary;
      font-size: 22rpx;
      border-radius: 20rpx;
    }
  }
  
  .title {
    display: block;
    font-size: 44rpx;
    font-weight: 700;
    color: $text-main;
    line-height: 1.3;
    margin-bottom: 24rpx;
  }
  
  .meta {
    display: flex;
    gap: 32rpx;
    
    .meta-item {
      font-size: 24rpx;
      color: $text-secondary;
    }
  }
}

.article-body { padding: 32rpx; }

.intro-section {
  background: linear-gradient(135deg, rgba(60, 179, 113, 0.08) 0%, rgba(60, 179, 113, 0.02) 100%);
  padding: 32rpx;
  border-radius: 16rpx;
  border-left: 8rpx solid $primary;
  margin-bottom: 48rpx;
  
  .intro-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $primary;
    margin-bottom: 16rpx;
  }
  
  .intro-text {
    font-size: 30rpx;
    color: $text-main;
    line-height: 1.7;
  }
}

.section {
  margin-bottom: 56rpx;
  
  .section-title {
    display: block;
    font-size: 36rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 24rpx;
    padding-bottom: 16rpx;
    border-bottom: 2rpx solid #eee;
  }
  
  .p {
    font-size: 30rpx;
    color: $text-secondary;
    line-height: 1.8;
    margin-bottom: 20rpx;
  }
}

.file-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx;
  
  .file-item {
    display: flex;
    align-items: center;
    padding: 16rpx 0;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .file-icon {
      font-size: 32rpx;
      margin-right: 16rpx;
    }
    
    .file-name {
      font-size: 28rpx;
      font-weight: 600;
      color: $text-main;
      margin-right: 16rpx;
      font-family: 'Menlo', monospace;
    }
    
    .file-desc {
      font-size: 24rpx;
      color: $text-secondary;
    }
  }
}

.tip-box {
  background: #e8f5e9;
  padding: 20rpx;
  border-radius: 8rpx;
  margin-bottom: 16rpx;
  
  .tip-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 8rpx;
  }
  
  .tip-text {
    font-size: 26rpx;
    color: $text-secondary;
  }
}

.channel-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin: 16rpx 0;
  
  .channel-item {
    padding: 12rpx 24rpx;
    background: rgba(60, 179, 113, 0.1);
    color: $primary;
    border-radius: 24rpx;
    font-size: 26rpx;
  }
}

.summary-section {
  background: linear-gradient(135deg, rgba(60, 179, 113, 0.05) 0%, #fff 100%);
  padding: 32rpx;
  border-radius: 16rpx;
  margin-top: 48rpx;
}

.summary-list {
  margin-top: 24rpx;
  
  .summary-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20rpx;
    
    .summary-num {
      width: 40rpx;
      height: 40rpx;
      background: $primary;
      color: #fff;
      font-size: 24rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-right: 16rpx;
      margin-top: 4rpx;
    }
    
    .summary-text {
      flex: 1;
      font-size: 28rpx;
      color: $text-secondary;
      line-height: 1.6;
    }
  }
}

.related-section {
  padding: 40rpx 32rpx;
  background: #f8f9fa;
  
  .related-title {
    display: block;
    font-size: 32rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 24rpx;
  }
  
  .related-list {
    .related-item {
      display: flex;
      align-items: center;
      padding: 24rpx 0;
      border-bottom: 1rpx solid #eee;
      
      &:last-child { border-bottom: none; }
      
      .related-arrow {
        font-size: 32rpx;
        color: $primary;
        margin-right: 16rpx;
      }
      
      .related-text {
        flex: 1;
        font-size: 30rpx;
        color: $text-main;
      }
    }
  }
}
</style>
