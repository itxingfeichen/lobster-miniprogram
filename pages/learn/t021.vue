<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">Node</text>
        <text class="tag">跨设备</text>
      </view>
      <text class="title">Node 节点：跨设备 Agent 协作</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-18</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">了解 OpenClaw 的节点系统，实现手机、电脑等多设备间的 Agent 协作。节点系统让 OpenClaw 从单机工具变成跨设备智能平台。</text>
      </view>

      <view class="section">
        <text class="section-title">一、什么是节点？</text>
        <text class="p">节点（Node）代表一个配对的设备。通过节点系统，Agent 可以跨设备操作。</text>
      </view>

      <view class="section">
        <text class="section-title">二、节点能力</text>
        
        <view class="capability-item">
          <text class="cap-icon">📸</text>
          <view class="cap-content">
            <text class="cap-title">相机控制</text>
            <view class="code-block small">
              <text class="code">nodes({ action: "camera_snap", node: "my-phone", facing: "back" })</text>
            </view>
          </view>
        </view>
        
        <view class="capability-item">
          <text class="cap-icon">📍</text>
          <view class="cap-content">
            <text class="cap-title">位置获取</text>
            <view class="code-block small">
              <text class="code">nodes({ action: "location_get", node: "my-phone" })</text>
            </view>
          </view>
        </view>
        
        <view class="capability-item">
          <text class="cap-icon">🔔</text>
          <view class="cap-content">
            <text class="cap-title">通知推送</text>
            <view class="code-block small">
              <text class="code">nodes({ action: "notify", node: "my-phone", title: "提醒", body: "任务完成" })</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、应用场景</text>
        <view class="scenario-list">
          <view class="scenario-item">1. 远程监控</view>
          <view class="scenario-item">2. 位置追踪</view>
          <view class="scenario-item">3. 跨设备通知</view>
          <view class="scenario-item">4. 多屏协作</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">节点代表配对的设备，实现跨设备操作</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">支持相机、位置、通知等能力</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">从单机工具变为跨设备智能平台</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT020">
          <text class="related-arrow">←</text>
          <text class="related-text">20 QQ Bot集成</text>
        </view>
        <view class="related-item" @click="goToT022">
          <text class="related-arrow">→</text>
          <text class="related-text">22 技能商店</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT020() {
      uni.redirectTo({ url: '/pages/learn/t020' })
    },
    goToT022() {
      uni.redirectTo({ url: '/pages/learn/t022' })
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

.capability-item {
  display: flex;
  align-items: flex-start;
  padding: 20rpx;
  background: #f8f9fa;
  border-radius: 12rpx;
  margin-bottom: 16rpx;
  
  .cap-icon {
    font-size: 36rpx;
    margin-right: 16rpx;
  }
  
  .cap-content {
    flex: 1;
    
    .cap-title {
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
  padding: 12rpx;
  
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

.scenario-list {
  background: #e8f5e9;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .scenario-item {
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
