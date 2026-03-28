<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">云端</text>
        <text class="tag">部署</text>
      </view>
      <text class="title">云端部署：让 Agent 7x24 在线</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-08</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">将 OpenClaw 部署到云服务器，实现 Agent 的全天候服务。</text>
      </view>

      <view class="section">
        <text class="section-title">一、服务器要求</text>
        <view class="table-box">
          <view class="table-header">
            <text class="th">配置</text>
            <text class="th">最低</text>
            <text class="th">推荐</text>
          </view>
          <view class="table-row">
            <text class="td">CPU</text>
            <text class="td">1 核</text>
            <text class="td">2 核+</text>
          </view>
          <view class="table-row">
            <text class="td">内存</text>
            <text class="td">1 GB</text>
            <text class="td">2 GB+</text>
          </view>
          <view class="table-row">
            <text class="td">磁盘</text>
            <text class="td">20 GB</text>
            <text class="td">40 GB+</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、部署步骤</text>
        
        <view class="step-item">
          <text class="step-num">1</text>
          <view class="step-content">
            <text class="step-title">准备服务器</text>
            <view class="code-block small">
              <text class="code">sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git build-essential</text>
            </view>
          </view>
        </view>
        
        <view class="step-item">
          <text class="step-num">2</text>
          <view class="step-content">
            <text class="step-title">安装 OpenClaw</text>
            <view class="code-block small">
              <text class="code">curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm && pnpm add -g openclaw</text>
            </view>
          </view>
        </view>
        
        <view class="step-item">
          <text class="step-num">3</text>
          <view class="step-content">
            <text class="step-title">配置 systemd 服务</text>
            <view class="code-block small">
              <text class="code">[Unit]
Description=OpenClaw Gateway
After=network.target

[Service]
Type=simple
User=openclaw
ExecStart=openclaw gateway start --foreground
Restart=always

[Install]
WantedBy=multi-user.target</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、Nginx 反向代理 + SSL</text>
        <text class="p">配置 Nginx 实现 HTTPS 访问和负载均衡。</text>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">云端部署实现 7x24 在线服务</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">systemd 守护进程保证稳定性</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">Nginx + SSL 实现安全访问</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT017">
          <text class="related-arrow">←</text>
          <text class="related-text">17 本地部署指南</text>
        </view>
        <view class="related-item" @click="goToT019">
          <text class="related-arrow">→</text>
          <text class="related-text">19 安全最佳实践</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT017() {
      uni.navigateTo({ url: '/pages/learn/t017' })
    },
    goToT019() {
      uni.navigateTo({ url: '/pages/learn/t019' })
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
  }
}

.table-box {
  background: #f8f9fa;
  border-radius: 12rpx;
  overflow: hidden;
  
  .table-header {
    display: flex;
    background: $primary;
    
    .th {
      flex: 1;
      padding: 16rpx;
      font-size: 26rpx;
      font-weight: 600;
      color: #fff;
      text-align: center;
    }
  }
  
  .table-row {
    display: flex;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .td {
      flex: 1;
      padding: 16rpx;
      font-size: 26rpx;
      color: $text-main;
      text-align: center;
    }
  }
}

.step-item {
  display: flex;
  margin-bottom: 24rpx;
  
  .step-num {
    width: 48rpx;
    height: 48rpx;
    background: $primary;
    color: #fff;
    font-size: 26rpx;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .step-content {
    flex: 1;
    margin-left: 16rpx;
    
    .step-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 8rpx;
    }
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 8rpx;
  padding: 16rpx;
  
  &.small .code {
    font-size: 20rpx;
  }
  
  .code {
    font-family: 'Menlo', monospace;
    color: #d4d4d4;
    line-height: 1.6;
    white-space: pre-wrap;
    display: block;
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
