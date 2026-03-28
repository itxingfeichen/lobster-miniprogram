<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">技能</text>
        <text class="tag">ClawHub</text>
      </view>
      <text class="title">技能机制：Agent 的即插即用能力</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-18</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">技能是 OpenClaw 的扩展机制。安装技能后，Agent 获得特定领域的专业能力。技能系统让 OpenClaw 的能力无限扩展。</text>
      </view>

      <view class="section">
        <text class="section-title">一、什么是技能？</text>
        <text class="p">技能是 OpenClaw 的扩展机制。安装技能后，Agent 获得特定领域的专业能力。</text>
      </view>

      <view class="section">
        <text class="section-title">二、技能结构</text>
        <view class="code-block">
          <text class="code">my-skill/
├── SKILL.md      # 技能描述
├── scripts/      # 脚本文件
├── references/   # 参考资料
└── assets/       # 资源文件</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、发现与安装</text>
        <view class="command-list">
          <view class="command-item">
            <text class="cmd">clawhub search "weather"</text>
            <text class="desc">搜索技能市场</text>
          </view>
          <view class="command-item">
            <text class="cmd">clawhub install @openclaw/weather</text>
            <text class="desc">安装指定技能</text>
          </view>
          <view class="command-item">
            <text class="cmd">clawhub list</text>
            <text class="desc">查看已安装技能</text>
          </view>
          <view class="command-item">
            <text class="cmd">clawhub update @openclaw/weather</text>
            <text class="desc">更新技能</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、自动激活</text>
        <view class="key-point">
          <text class="point-text">OpenClaw 自动扫描技能描述，用户请求匹配时自动激活对应技能。</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">技能是 Agent 能力的即插即用扩展</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">SKILL.md 定义技能描述和触发条件</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">ClawHub 社区共享技能，能力无限扩展</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT009">
          <text class="related-arrow">←</text>
          <text class="related-text">09 记忆系统</text>
        </view>
        <view class="related-item" @click="goToT011">
          <text class="related-arrow">→</text>
          <text class="related-text">11 SOUL.md人格配置</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT009() {
      uni.navigateTo({ url: '/pages/learn/t009' })
    },
    goToT011() {
      uni.navigateTo({ url: '/pages/learn/t011' })
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

.command-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  overflow: hidden;
  
  .command-item {
    padding: 20rpx 24rpx;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .cmd {
      display: block;
      font-family: 'Menlo', monospace;
      font-size: 26rpx;
      color: $primary;
      margin-bottom: 4rpx;
    }
    
    .desc {
      font-size: 24rpx;
      color: $text-secondary;
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
