<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">记忆系统</text>
        <text class="tag">核心概念</text>
      </view>
      <text class="title">记忆系统：让 Agent 记住你</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-15</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">探索 OpenClaw 的记忆机制，了解如何让 Agent 具备长期记忆能力。记忆系统让 Agent 从"工具"进化为"伙伴"。</text>
      </view>

      <view class="section">
        <text class="section-title">一、记忆层次</text>
        
        <view class="memory-level">
          <text class="level-num">1</text>
          <view class="level-content">
            <text class="level-title">短期记忆（会话内）</text>
            <text class="level-desc">当前会话的对话历史，会话结束后失效</text>
          </view>
        </view>
        
        <view class="memory-level">
          <text class="level-num">2</text>
          <view class="level-content">
            <text class="level-title">工作记忆（文件系统）</text>
            <text class="level-desc">通过 AGENTS.md、SOUL.md 等文件持久化，跨会话可用</text>
          </view>
        </view>
        
        <view class="memory-level">
          <text class="level-num">3</text>
          <view class="level-content">
            <text class="level-title">用户记忆（USER.md）</text>
            <text class="level-desc">记录用户的偏好、技术栈、项目背景等信息，Agent 可主动更新</text>
          </view>
        </view>
        
        <view class="memory-level">
          <text class="level-num">4</text>
          <view class="level-content">
            <text class="level-title">项目记忆（工作空间文件）</text>
            <text class="level-desc">项目文档、代码、配置等，Agent 可以主动记录重要信息</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、最佳实践</text>
        
        <view class="practice-list">
          <view class="practice-item">
            <text class="practice-icon">✓</text>
            <text class="practice-text">及时记录 - 用户提供的重要信息立即写入</text>
          </view>
          <view class="practice-item">
            <text class="practice-icon">✓</text>
            <text class="practice-text">结构化存储 - 使用清晰的格式</text>
          </view>
          <view class="practice-item">
            <text class="practice-icon">✓</text>
            <text class="practice-text">定期整理 - 清理过时信息</text>
          </view>
          <view class="practice-item">
            <text class="practice-icon">✓</text>
            <text class="practice-text">隐私尊重 - 只记录必要信息</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、记忆进化</text>
        <view class="evolution-box">
          <text class="evolution-text">工具 → 助手 → 伙伴</text>
          <text class="evolution-desc">记忆系统让 Agent 从简单的"工具"进化为懂你的"伙伴"</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">4层记忆体系：短期、工作、用户、项目记忆</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">USER.md 是用户记忆的核心载体</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">记忆系统让 Agent 具备个性化能力</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT008">
          <text class="related-arrow">←</text>
          <text class="related-text">08 会话管理与上下文</text>
        </view>
        <view class="related-item" @click="goToT010">
          <text class="related-arrow">→</text>
          <text class="related-text">10 技能机制</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT008() {
      uni.navigateTo({ url: '/pages/learn/t008' })
    },
    goToT010() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t010' })
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

.memory-level {
  display: flex;
  align-items: flex-start;
  padding: 20rpx;
  background: #f8f9fa;
  border-radius: 12rpx;
  margin-bottom: 16rpx;
  
  .level-num {
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
    margin-right: 16rpx;
  }
  
  .level-content {
    flex: 1;
    
    .level-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 4rpx;
    }
    
    .level-desc {
      font-size: 26rpx;
      color: $text-secondary;
    }
  }
}

.practice-list {
  background: #e8f5e9;
  border-radius: 12rpx;
  padding: 24rpx;
  
  .practice-item {
    display: flex;
    align-items: center;
    padding: 12rpx 0;
    
    .practice-icon {
      color: $primary;
      margin-right: 12rpx;
      font-size: 28rpx;
    }
    
    .practice-text {
      font-size: 28rpx;
      color: $text-main;
    }
  }
}

.evolution-box {
  background: linear-gradient(135deg, #e8f5e9 0%, #fff 100%);
  padding: 32rpx;
  border-radius: 12rpx;
  text-align: center;
  border: 2rpx solid $primary;
  
  .evolution-text {
    display: block;
    font-size: 36rpx;
    font-weight: 700;
    color: $primary;
    margin-bottom: 12rpx;
  }
  
  .evolution-desc {
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
