<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">入门</text>
        <text class="tag">部署</text>
        <text class="tag">本地</text>
      </view>
      <text class="title">OpenClaw 本地部署完全指南</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-05</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">详细的本地部署教程，包括各种操作系统的配置方法和常见问题解决。本地部署是最快的上手方式。</text>
      </view>

      <view class="section">
        <text class="section-title">一、支持的系统</text>
        <view class="os-list">
          <view class="os-item">macOS 12+ (Intel / Apple Silicon)</view>
          <view class="os-item">Ubuntu 20.04+</view>
          <view class="os-item">Debian 11+</view>
          <view class="os-item">Windows (WSL2)</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、macOS 部署</text>
        <view class="code-block">
          <text class="code">brew install node@22
npm install -g pnpm
pnpm add -g openclaw
mkdir ~/openclaw-workspace && cd ~/openclaw-workspace
openclaw init
openclaw gateway start</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、Linux 部署</text>
        <view class="code-block">
          <text class="code">curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm
pnpm add -g openclaw</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、验证部署</text>
        <view class="code-block">
          <text class="code">openclaw gateway status
openclaw chat "你好，OpenClaw！"</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、常见问题</text>
        <view class="faq-item">
          <text class="faq-q">Gateway 启动失败？</text>
          <text class="faq-a">检查端口：lsof -i :3000</text>
        </view>
        <view class="faq-item">
          <text class="faq-q">模型调用超时？</text>
          <text class="faq-a">检查网络和 API 密钥</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">支持 macOS/Linux/Windows(WSL2)</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">Node.js 22 + pnpm + openclaw</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">本地部署是最快的上手方式</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT016">
          <text class="related-arrow">←</text>
          <text class="related-text">16 Canvas画布</text>
        </view>
        <view class="related-item" @click="goToT018">
          <text class="related-arrow">→</text>
          <text class="related-text">18 云端部署</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT016() {
      uni.redirectTo({ url: '/pages/learn/t016' })
    },
    goToT018() {
      uni.redirectTo({ url: '/pages/learn/t018' })
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
}

.os-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .os-item {
    font-size: 28rpx;
    color: $text-main;
    padding: 8rpx 0;
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 16rpx 0;
  
  .code {
    font-family: 'Menlo', monospace;
    font-size: 24rpx;
    color: #d4d4d4;
    line-height: 1.7;
    white-space: pre-wrap;
    display: block;
  }
}

.faq-item {
  background: #f8f9fa;
  padding: 16rpx 20rpx;
  border-radius: 8rpx;
  margin-bottom: 12rpx;
  
  .faq-q {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 4rpx;
  }
  
  .faq-a {
    font-size: 26rpx;
    color: $text-secondary;
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
