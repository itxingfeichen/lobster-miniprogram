<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">技能商店</text>
        <text class="tag">ClawHub</text>
      </view>
      <text class="title">从零搭建 Agent 技能商店</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-22</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习如何创建、发布和管理 Agent 技能，为社区贡献力量。为社区贡献技能，让 OpenClaw 生态更丰富！</text>
      </view>

      <view class="section">
        <text class="section-title">一、创建技能</text>
        <view class="code-block">
          <text class="code">mkdir my-awesome-skill
cd my-awesome-skill
touch SKILL.md
mkdir scripts references assets</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、SKILL.md 模板</text>
        <view class="code-block">
          <text class="code"># My Awesome Skill

## 描述
一句话描述功能。

## 触发条件
何时激活。

## 使用方法
具体操作说明。

## 依赖
- Node.js 18+</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、测试技能</text>
        <view class="code-block">
          <text class="code">cp -r my-awesome-skill ~/.openclaw/workspace/skills/
openclaw gateway restart
openclaw chat "触发技能的消息"</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、发布到 ClawHub</text>
        <view class="code-block">
          <text class="code">clawhub login
clawhub publish ./my-awesome-skill</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、质量清单</text>
        <view class="checklist">
          <view class="check-item">✓ SKILL.md 描述清晰</view>
          <view class="check-item">✓ 包含使用示例</view>
          <view class="check-item">✓ 脚本经过测试</view>
          <view class="check-item">✓ 无敏感信息</view>
          <view class="check-item">✓ 依赖声明完整</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">创建技能目录结构：SKILL.md + scripts + references</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">本地测试后再发布到 ClawHub</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">遵循质量清单，确保技能可用性</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT021">
          <text class="related-arrow">←</text>
          <text class="related-text">21 Node节点</text>
        </view>
        <view class="related-item" @click="goToT001">
          <text class="related-arrow">→</text>
          <text class="related-text">01 环境搭建（重学）</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT021() {
      uni.redirectTo({ url: '/pages/learn/t021' })
    },
    goToT001() {
      uni.redirectTo({ url: '/pages/learn/t001' })
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

.checklist {
  background: #e8f5e9;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .check-item {
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
