<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">架构</text>
        <text class="tag">核心概念</text>
      </view>
      <text class="title">OpenClaw Agent 架构深度解析</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-05</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">深入了解 OpenClaw 的 Agent 架构，理解主 Agent、子 Agent 的协作机制，掌握多 Agent 系统的设计原理。</text>
      </view>

      <view class="section">
        <text class="section-title">一、架构概览</text>
        <text class="p">OpenClaw 采用分层 Agent 架构：</text>
        <view class="arch-list">
          <view class="arch-item">
            <text class="arch-icon">🎯</text>
            <view class="arch-content">
              <text class="arch-title">主 Agent（Main Agent）</text>
              <text class="arch-desc">任务协调和分配</text>
            </view>
          </view>
          <view class="arch-item">
            <text class="arch-icon">🔧</text>
            <view class="arch-content">
              <text class="arch-title">子 Agent（Sub Agent）</text>
              <text class="arch-desc">具体任务执行</text>
            </view>
          </view>
          <view class="arch-item">
            <text class="arch-icon">🔌</text>
            <view class="arch-content">
              <text class="arch-title">工具层（Tool Layer）</text>
              <text class="arch-desc">底层能力提供</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、主 Agent 的角色</text>
        <view class="flow-box">
          <text class="flow-text">用户请求 → 主 Agent 解析 → 任务拆分 → 子 Agent 分配 → 结果汇总 → 返回用户</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、子 Agent 的生命周期</text>
        <view class="step-box">
          <text class="step-num">1</text>
          <view class="step-content">
            <text class="step-title">创建</text>
            <text class="p">主 Agent 通过 subagents 工具创建</text>
          </view>
        </view>
        <view class="step-box">
          <text class="step-num">2</text>
          <view class="step-content">
            <text class="step-title">初始化</text>
            <text class="p">接收任务描述和上下文</text>
          </view>
        </view>
        <view class="step-box">
          <text class="step-num">3</text>
          <view class="step-content">
            <text class="step-title">执行</text>
            <text class="p">使用工具完成具体任务</text>
          </view>
        </view>
        <view class="step-box">
          <text class="step-num">4</text>
          <view class="step-content">
            <text class="step-title">报告</text>
            <text class="p">将结果自动推送回主 Agent</text>
          </view>
        </view>
        <view class="step-box">
          <text class="step-num">5</text>
          <view class="step-content">
            <text class="step-title">销毁</text>
            <text class="p">任务完成后被回收</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、通信机制</text>
        <view class="key-insight">
          <text class="insight-label">推送机制</text>
          <text class="insight-text">Agent 之间通过推送（Push-based）机制通信，子 Agent 完成任务后自动通知主 Agent，不需要轮询检查状态。</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、实际案例</text>
        <text class="p">假设用户请求"帮我写一个天气查询功能"：</text>
        <view class="case-flow">
          <view class="case-item">主 Agent 识别为技术开发任务</view>
          <view class="case-arrow">↓</view>
          <view class="case-item">创建 coder 子 Agent</view>
          <view class="case-arrow">↓</view>
          <view class="case-item">coder 编写代码</view>
          <view class="case-arrow">↓</view>
          <view class="case-item">自动报告结果</view>
          <view class="case-arrow">↓</view>
          <view class="case-item">主 Agent 汇总展示</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">分层架构：主 Agent 协调 + 子 Agent 执行 + 工具层赋能</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">生命周期：创建→初始化→执行→报告→销毁</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">通信机制：Push-based 推送，无需轮询</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT005">
          <text class="related-arrow">←</text>
          <text class="related-text">05 创建多功能Agent</text>
        </view>
        <view class="related-item" @click="goToT007">
          <text class="related-arrow">→</text>
          <text class="related-text">07 工具系统</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT005() {
      uni.navigateTo({ url: '/pages/learn/t005' })
    },
    goToT007() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t007' })
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
    font-size: 48rpx;
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

.arch-list {
  .arch-item {
    display: flex;
    align-items: center;
    padding: 24rpx;
    background: #f8f9fa;
    border-radius: 12rpx;
    margin-bottom: 16rpx;
    
    .arch-icon {
      font-size: 40rpx;
      margin-right: 20rpx;
    }
    
    .arch-content {
      .arch-title {
        display: block;
        font-size: 30rpx;
        font-weight: 600;
        color: $text-main;
        margin-bottom: 4rpx;
      }
      
      .arch-desc {
        font-size: 26rpx;
        color: $text-secondary;
      }
    }
  }
}

.flow-box {
  background: linear-gradient(135deg, #e8f5e9 0%, #fff 100%);
  padding: 24rpx;
  border-radius: 12rpx;
  border-left: 6rpx solid $primary;
  
  .flow-text {
    font-size: 28rpx;
    color: $text-main;
    line-height: 1.8;
  }
}

.step-box {
  display: flex;
  margin-top: 20rpx;
  
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
      margin-bottom: 4rpx;
    }
    
    .p {
      font-size: 26rpx;
      color: $text-secondary;
    }
  }
}

.key-insight {
  background: linear-gradient(135deg, #fef8e8 0%, #fff 100%);
  padding: 24rpx;
  border-radius: 12rpx;
  border-left: 6rpx solid #f0ad4e;
  
  .insight-label {
    display: block;
    font-size: 26rpx;
    font-weight: 600;
    color: #f0ad4e;
    margin-bottom: 8rpx;
  }
  
  .insight-text {
    font-size: 28rpx;
    color: $text-main;
    line-height: 1.7;
  }
}

.case-flow {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 16rpx;
  
  .case-item {
    padding: 12rpx 0;
    font-size: 28rpx;
    color: $text-main;
    text-align: center;
  }
  
  .case-arrow {
    text-align: center;
    color: $primary;
    font-size: 24rpx;
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
