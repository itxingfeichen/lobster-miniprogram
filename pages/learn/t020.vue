<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">QQ Bot</text>
        <text class="tag">集成</text>
      </view>
      <text class="title">OpenClaw 与 QQ Bot 集成指南</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-20</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">将 OpenClaw Agent 接入 QQ Bot，让 Agent 通过 QQ 为用户服务。QQ Bot 集成让 Agent 触手可及。</text>
      </view>

      <view class="section">
        <text class="section-title">一、前置准备</text>
        <view class="pre-list">
          <view class="pre-item">1. 运行 OpenClaw 的服务器</view>
          <view class="pre-item">2. QQ 开放平台开发者账号</view>
          <view class="pre-item">3. 已创建的 QQ 机器人应用</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、配置步骤</text>
        <view class="code-block">
          <text class="code">openclaw config set qqbot.appId "your-app-id"
openclaw config set qqbot.appSecret "your-app-secret"
openclaw config set qqbot.token "your-token"
openclaw gateway restart</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、消息处理流程</text>
        <view class="flow-box">
          <view class="flow-step">QQ 消息</view>
          <view class="flow-arrow">→</view>
          <view class="flow-step">Gateway</view>
          <view class="flow-arrow">→</view>
          <view class="flow-step">Agent 处理</view>
          <view class="flow-arrow">→</view>
          <view class="flow-step">回复</view>
          <view class="flow-arrow">→</view>
          <view class="flow-step">QQ 用户</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、富媒体支持</text>
        <view class="media-list">
          <view class="media-item">文本消息：普通对话</view>
          <view class="media-item">图片：&lt;qqimg&gt; 标签</view>
          <view class="media-item">语音：&lt;qqvoice&gt; 标签</view>
          <view class="media-item">文件：&lt;qqfile&gt; 标签</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">配置 QQ 开放平台应用信息</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">通过 Gateway 转发消息</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">支持文本、图片、语音、文件</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT019">
          <text class="related-arrow">←</text>
          <text class="related-text">19 安全最佳实践</text>
        </view>
        <view class="related-item" @click="goToT021">
          <text class="related-arrow">→</text>
          <text class="related-text">21 Node节点</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT019() {
      uni.redirectTo({ url: '/pages/learn/t019' })
    },
    goToT021() {
      uni.redirectTo({ url: '/pages/learn/t021' })
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

.pre-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .pre-item {
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

.flow-box {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  text-align: center;
  
  .flow-step {
    display: inline-block;
    padding: 12rpx 20rpx;
    background: $primary;
    color: #fff;
    border-radius: 20rpx;
    font-size: 24rpx;
    margin: 8rpx;
  }
  
  .flow-arrow {
    color: $primary;
    font-size: 24rpx;
  }
}

.media-list {
  background: #e8f5e9;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .media-item {
    font-size: 28rpx;
    color: $text-main;
    padding: 8rpx 0;
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
