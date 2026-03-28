<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">Canvas</text>
        <text class="tag">可视化</text>
      </view>
      <text class="title">Canvas 画布：可视化 Agent 输出</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-15</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习使用 OpenClaw Canvas 功能创建可视化的 Agent 输出界面。Canvas 让 Agent 输出不再局限于文字。</text>
      </view>

      <view class="section">
        <text class="section-title">一、什么是 Canvas？</text>
        <text class="p">Canvas 是 OpenClaw 的可视化输出功能，允许 Agent 呈现 HTML/CSS/JavaScript 构建的交互式界面。</text>
      </view>

      <view class="section">
        <text class="section-title">二、基本用法</text>
        
        <view class="op-item">
          <text class="op-title">呈现内容</text>
          <view class="code-block small">
            <text class="code">canvas({ action: "present", url: "data:text/html,<h1>Hello!</h1>" })</text>
          </view>
        </view>
        
        <view class="op-item">
          <text class="op-title">执行 JavaScript</text>
          <view class="code-block small">
            <text class="code">canvas({ action: "eval", javaScript: "document.title = 'Updated'" })</text>
          </view>
        </view>
        
        <view class="op-item">
          <text class="op-title">获取快照</text>
          <view class="code-block small">
            <text class="code">canvas({ action: "snapshot" })</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、实战：数据看板</text>
        <view class="code-block">
          <text class="code"><div class="dashboard">
  <div class="card"><h3>今日学习</h3><div>3 篇</div></div>
  <div class="card"><h3>代码片段</h3><div>12 个</div></div>
  <div class="card"><h3>完成进度</h3><div>67%</div></div>
</div></text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、A2UI</text>
        <view class="key-point">
          <text class="point-text">A2UI 允许 Agent 通过 JSONL 指令增量更新 Canvas 内容。</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">Canvas 提供交互式可视化输出能力</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">支持 HTML/CSS/JS 呈现</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">A2UI 实现增量更新</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT015">
          <text class="related-arrow">←</text>
          <text class="related-text">15 浏览器工具</text>
        </view>
        <view class="related-item" @click="goToT017">
          <text class="related-arrow">→</text>
          <text class="related-text">17 本地部署指南</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT015() {
      uni.redirectTo({ url: '/pages/learn/t015' })
    },
    goToT017() {
      uni.redirectTo({ url: '/pages/learn/t017' })
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

.key-point {
  background: #e8f5e9;
  padding: 24rpx;
  border-radius: 12rpx;
  
  .point-text {
    font-size: 28rpx;
    color: $text-main;
    line-height: 1.7;
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
