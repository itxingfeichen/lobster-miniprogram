<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">多Agent</text>
        <text class="tag">协作</text>
      </view>
      <text class="title">多 Agent 协作：团队式任务处理</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-25</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习如何设计多 Agent 协作系统，让不同专长的 Agent 协同完成复杂任务。多 Agent 协作是 OpenClaw 的高级特性。</text>
      </view>

      <view class="section">
        <text class="section-title">一、协作架构</text>
        <view class="arch-diagram">
          <view class="center-node">主 Agent (协调者)</view>
          <view class="arrow">│</view>
          <view class="branch-row">
            <view class="branch">product</view>
            <view class="branch">coder</view>
            <view class="branch">health</view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、协作实战</text>
        <text class="p">假设用户说"我需要一个天气查询小程序"：</text>
        <view class="phase-list">
          <view class="phase-item">
            <text class="phase-num">阶段一</text>
            <text class="phase-desc">主 Agent → product_manager → 输出 PRD</text>
          </view>
          <view class="phase-item">
            <text class="phase-num">阶段二</text>
            <text class="phase-desc">主 Agent → coder → 根据 PRD 编写代码</text>
          </view>
          <view class="phase-item">
            <text class="phase-num">阶段三</text>
            <text class="phase-desc">主 Agent 整合输出，向用户呈现</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、注意事项</text>
        <view class="tips-list">
          <view class="tip-item">
            <text class="tip-icon">1</text>
            <text class="tip-text">上下文传递 - 给子 Agent 足够背景</text>
          </view>
          <view class="tip-item">
            <text class="tip-icon">2</text>
            <text class="tip-text">避免循环依赖 - Agent 之间不互相等待</text>
          </view>
          <view class="tip-item">
            <text class="tip-icon">3</text>
            <text class="tip-text">错误处理 - 失败时有降级方案</text>
          </view>
          <view class="tip-item">
            <text class="tip-icon">4</text>
            <text class="tip-text">结果验证 - 主 Agent 检查输出质量</text>
          </view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">主 Agent 负责协调，子 Agent 专注执行</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">通过 Push 机制通信，结果自动推送</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">多 Agent 协作处理复杂任务</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT012">
          <text class="related-arrow">←</text>
          <text class="related-text">12 自定义Agent开发</text>
        </view>
        <view class="related-item" @click="goToT014">
          <text class="related-arrow">→</text>
          <text class="related-text">14 工具集成开发</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT012() {
      uni.navigateTo({ url: '/pages/learn/t012' })
    },
    goToT014() {
      uni.navigateTo({ url: '/pages/learn/t014' })
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

.arch-diagram {
  text-align: center;
  padding: 24rpx;
  background: #f8f9fa;
  border-radius: 12rpx;
  
  .center-node {
    display: inline-block;
    padding: 16rpx 32rpx;
    background: $primary;
    color: #fff;
    border-radius: 24rpx;
    font-size: 28rpx;
    font-weight: 600;
  }
  
  .arrow {
    font-size: 32rpx;
    color: $primary;
    margin: 8rpx 0;
  }
  
  .branch-row {
    display: flex;
    justify-content: center;
    gap: 24rpx;
    
    .branch {
      padding: 12rpx 24rpx;
      background: #e8f5e9;
      color: $primary;
      border-radius: 20rpx;
      font-size: 26rpx;
    }
  }
}

.phase-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx;
  
  .phase-item {
    padding: 16rpx 0;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .phase-num {
      display: block;
      font-size: 26rpx;
      font-weight: 600;
      color: $primary;
      margin-bottom: 4rpx;
    }
    
    .phase-desc {
      font-size: 26rpx;
      color: $text-secondary;
    }
  }
}

.tips-list {
  .tip-item {
    display: flex;
    align-items: center;
    padding: 16rpx 0;
    
    .tip-icon {
      width: 40rpx;
      height: 40rpx;
      background: #f0ad4e;
      color: #fff;
      font-size: 24rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16rpx;
    }
    
    .tip-text {
      font-size: 28rpx;
      color: $text-main;
    }
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
