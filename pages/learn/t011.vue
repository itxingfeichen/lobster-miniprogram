<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">入门</text>
        <text class="tag">SOUL.md</text>
        <text class="tag">人格配置</text>
      </view>
      <text class="title">SOUL.md 人格配置艺术</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-20</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">AGENTS.md 定义"能做什么"，SOUL.md 定义"怎么做"。它塑造 Agent 的性格、价值观和行为风格。好的 SOUL.md 让 Agent 有温度。</text>
      </view>

      <view class="section">
        <text class="section-title">一、SOUL.md 的作用</text>
        <view class="compare-box">
          <view class="compare-item">
            <text class="compare-label">AGENTS.md</text>
            <text class="compare-desc">定义"能做什么"</text>
          </view>
          <view class="compare-item">
            <text class="compare-label">SOUL.md</text>
            <text class="compare-desc">定义"怎么做"</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、核心组成</text>
        
        <view class="component-item">
          <text class="comp-num">1</text>
          <view class="comp-content">
            <text class="comp-title">核心信念</text>
            <text class="comp-desc">决策的基石，影响模糊场景下的选择</text>
          </view>
        </view>
        
        <view class="component-item">
          <text class="comp-num">2</text>
          <view class="comp-content">
            <text class="comp-title">性格特质</text>
            <text class="comp-desc">定义 Agent 的行为风格</text>
          </view>
        </view>
        
        <view class="component-item">
          <text class="comp-num">3</text>
          <view class="comp-content">
            <text class="comp-title">决策原则</text>
            <text class="comp-desc">在不同场景下的行为指导</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、不同风格示例</text>
        
        <view class="style-box">
          <text class="style-title">严谨技术风</text>
          <view class="code-block small">
            <text class="code">## 核心信念
代码是给人读的，顺便给机器执行。

## 性格
严谨、注重细节、用数据说话</text>
          </view>
        </view>
        
        <view class="style-box">
          <text class="style-title">温暖教练风</text>
          <view class="code-block small">
            <text class="code">## 核心信念
每个人都能学会编程。

## 性格
温暖、有耐心、善于用比喻</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、调优技巧</text>
        <view class="tips-list">
          <view class="tip-item">✓ 具体而非抽象</view>
          <view class="tip-item">✓ 场景化描述</view>
          <view class="tip-item">✓ 与 AGENTS.md 风格匹配</view>
          <view class="tip-item">✓ 根据效果持续调整</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">SOUL.md 定义 Agent 的行为风格和决策方式</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">三大核心：信念、性格、决策原则</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">好的 SOUL.md 让 Agent 有温度</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT010">
          <text class="related-arrow">←</text>
          <text class="related-text">10 技能机制</text>
        </view>
        <view class="related-item" @click="goToT012">
          <text class="related-arrow">→</text>
          <text class="related-text">12 自定义Agent开发</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT010() {
      uni.redirectTo({ url: '/pages/learn/t010' })
    },
    goToT012() {
      uni.redirectTo({ url: '/pages/learn/t012' })
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

.compare-box {
  display: flex;
  gap: 16rpx;
  
  .compare-item {
    flex: 1;
    background: #f8f9fa;
    padding: 24rpx;
    border-radius: 12rpx;
    text-align: center;
    
    .compare-label {
      display: block;
      font-size: 28rpx;
      font-weight: 600;
      color: $primary;
      margin-bottom: 8rpx;
    }
    
    .compare-desc {
      font-size: 24rpx;
      color: $text-secondary;
    }
  }
}

.component-item {
  display: flex;
  align-items: flex-start;
  padding: 20rpx;
  background: #f8f9fa;
  border-radius: 12rpx;
  margin-bottom: 16rpx;
  
  .comp-num {
    width: 44rpx;
    height: 44rpx;
    background: $primary;
    color: #fff;
    font-size: 24rpx;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 16rpx;
  }
  
  .comp-content {
    flex: 1;
    
    .comp-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 4rpx;
    }
    
    .comp-desc {
      font-size: 26rpx;
      color: $text-secondary;
    }
  }
}

.style-box {
  margin-bottom: 20rpx;
  
  .style-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 12rpx;
  }
  
  .code-block {
    background: #1e1e1e;
    border-radius: 12rpx;
    padding: 20rpx;
    
    &.small .code {
      font-size: 22rpx;
    }
    
    .code {
      font-family: 'Menlo', monospace;
      color: #d4d4d4;
      line-height: 1.7;
      white-space: pre-wrap;
      display: block;
    }
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
