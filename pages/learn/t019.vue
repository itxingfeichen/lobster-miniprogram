<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">安全</text>
        <text class="tag">部署</text>
      </view>
      <text class="title">OpenClaw 安全最佳实践</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-12</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">了解 OpenClaw 的安全机制，学习如何安全地配置和运行 Agent。安全是 Agent 可靠运行的基石。</text>
      </view>

      <view class="section">
        <text class="section-title">一、安全原则</text>
        <view class="principle-list">
          <view class="principle-item">
            <text class="principle-icon">1</text>
            <text class="principle-text">最小权限 - 只给必要权限</text>
          </view>
          <view class="principle-item">
            <text class="principle-icon">2</text>
            <text class="principle-text">人类监督 - 关键操作需确认</text>
          </view>
          <view class="principle-item">
            <text class="principle-icon">3</text>
            <text class="principle-text">透明可审计 - 操作可追溯</text>
          </view>
          <view class="principle-item">
            <text class="principle-icon">4</text>
            <text class="principle-text">安全优先 - 安全 > 任务完成</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、权限控制</text>
        <text class="p">在 AGENTS.md 中明确权限范围。</text>
      </view>

      <view class="section">
        <text class="section-title">三、API 密钥管理</text>
        <view class="code-block">
          <text class="code">export OPENAI_API_KEY="sk-xxxxx"
echo "*.env" >> .gitignore</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、网络安全</text>
        <view class="code-block">
          <text class="code">sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、定期安全检查</text>
        <view class="key-point">
          <text class="point-text">使用 healthcheck 技能进行安全审计。</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">四大安全原则：最小权限、人类监督、可审计、安全优先</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">API 密钥用环境变量，不提交到 Git</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">防火墙保护，端口最小化</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT018">
          <text class="related-arrow">←</text>
          <text class="related-text">18 云端部署</text>
        </view>
        <view class="related-item" @click="goToT020">
          <text class="related-arrow">→</text>
          <text class="related-text">20 QQ Bot集成</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT018() {
      uni.navigateTo({ url: '/pages/learn/t018' })
    },
    goToT020() {
      uni.navigateTo({ url: '/pages/learn/t020' })
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

.principle-list {
  .principle-item {
    display: flex;
    align-items: center;
    padding: 16rpx 0;
    
    .principle-icon {
      width: 44rpx;
      height: 44rpx;
      background: #f0ad4e;
      color: #fff;
      font-size: 24rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16rpx;
    }
    
    .principle-text {
      font-size: 28rpx;
      color: $text-main;
    }
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
