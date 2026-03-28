<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">浏览器</text>
        <text class="tag">自动化</text>
      </view>
      <text class="title">使用浏览器工具进行网页自动化</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-10</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习如何使用 OpenClaw 的 browser 工具实现网页自动化操作。</text>
      </view>

      <view class="section">
        <text class="section-title">一、基本操作</text>
        
        <view class="op-item">
          <text class="op-title">打开网页</text>
          <view class="code-block small">
            <text class="code">browser({ action: "open", url: "https://example.com" })</text>
          </view>
        </view>
        
        <view class="op-item">
          <text class="op-title">获取快照</text>
          <view class="code-block small">
            <text class="code">browser({ action: "snapshot", refs: "aria" })</text>
          </view>
        </view>
        
        <view class="op-item">
          <text class="op-title">点击元素</text>
          <view class="code-block small">
            <text class="code">browser({ action: "act", kind: "click", ref: "e12" })</text>
          </view>
        </view>
        
        <view class="op-item">
          <text class="op-title">输入文本</text>
          <view class="code-block small">
            <text class="code">browser({ action: "act", kind: "type", ref: "e15", text: "Hello" })</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、Chrome 扩展</text>
        <view class="steps-list">
          <view class="step-item">1. 安装 OpenClaw Browser Relay 扩展</view>
          <view class="step-item">2. 在目标页面点击扩展图标</view>
          <view class="step-item">3. Agent 即可操作该标签页</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、注意事项</text>
        <view class="tips-list">
          <view class="tip-item">✓ 遵守网站规则</view>
          <view class="tip-item">✓ 控制请求频率</view>
          <view class="tip-item">✓ 错误重试机制</view>
          <view class="tip-item">✓ 不在不受信任网站输入敏感信息</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">browser 工具支持打开、点击、输入等操作</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">Chrome 扩展实现页面控制</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">遵守规则，安全自动化</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT014">
          <text class="related-arrow">←</text>
          <text class="related-text">14 工具集成开发</text>
        </view>
        <view class="related-item" @click="goToT016">
          <text class="related-arrow">→</text>
          <text class="related-text">16 Canvas画布</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT014() {
      uni.redirectTo({ url: '/pages/learn/t014' })
    },
    goToT016() {
      uni.redirectTo({ url: '/pages/learn/t016' })
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

.op-item {
  margin-bottom: 24rpx;
  
  .op-title {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 8rpx;
  }
  
  .code-block {
    background: #1e1e1e;
    border-radius: 8rpx;
    padding: 16rpx;
    
    &.small .code {
      font-size: 22rpx;
    }
    
    .code {
      font-family: 'Menlo', monospace;
      color: #d4d4d4;
      line-height: 1.6;
      white-space: pre-wrap;
      display: block;
    }
  }
}

.steps-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  
  .step-item {
    font-size: 28rpx;
    color: $text-main;
    padding: 8rpx 0;
  }
}

.tips-list {
  background: #e8f5e9;
  border-radius: 12rpx;
  padding: 24rpx;
  
  .tip-item {
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
