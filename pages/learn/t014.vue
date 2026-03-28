<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">高级</text>
        <text class="tag">工具集成</text>
        <text class="tag">API</text>
      </view>
      <text class="title">工具集成开发指南</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-03-01</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习如何为 Agent 集成外部工具和 API，扩展 Agent 的能力边界。</text>
      </view>

      <view class="section">
        <text class="section-title">一、集成方式</text>
        
        <view class="method-item">
          <text class="method-title">方式一：通过技能脚本</text>
          <text class="method-desc">在技能 scripts 目录编写脚本，Agent 通过 exec 调用</text>
        </view>
        
        <view class="method-item">
          <text class="method-title">方式二：通过 MCP Server</text>
          <text class="method-desc">MCP（Model Context Protocol）是标准化的工具集成协议</text>
        </view>
        
        <view class="method-item">
          <text class="method-title">方式三：通过浏览器自动化</text>
          <text class="method-desc">使用 browser 工具进行网页自动化</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、MCP Server 示例</text>
        <view class="code-block">
          <text class="code">const { Server } = require("@modelcontextprotocol/sdk");
const server = new Server({ name: "my-tool", version: "1.0.0" });

server.addTool({
  name: "get_stock_price",
  description: "获取股票价格",
  parameters: { symbol: { type: "string" } },
  handler: async ({ symbol }) => {
    const price = await fetchStockPrice(symbol);
    return { price, currency: "USD" };
  }
});

server.start();</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、安全考虑</text>
        <view class="tips-list">
          <view class="tip-item">✓ API 密钥用环境变量存储</view>
          <view class="tip-item">✓ 严格验证输入</view>
          <view class="tip-item">✓ 避免频繁调用外部 API</view>
          <view class="tip-item">✓ 优雅处理服务不可用</view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">三种集成方式：技能脚本、MCP Server、浏览器自动化</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">MCP 是标准化的工具集成协议</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">安全第一：密钥管理、输入验证、容错处理</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT013">
          <text class="related-arrow">←</text>
          <text class="related-text">13 多Agent协作</text>
        </view>
        <view class="related-item" @click="goToT015">
          <text class="related-arrow">→</text>
          <text class="related-text">15 浏览器工具</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT013() {
      uni.navigateTo({ url: '/pages/learn/t013' })
    },
    goToT015() {
      uni.navigateTo({ url: '/pages/learn/t015' })
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

.method-item {
  background: #f8f9fa;
  padding: 20rpx;
  border-radius: 12rpx;
  margin-bottom: 16rpx;
  
  .method-title {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 8rpx;
  }
  
  .method-desc {
    font-size: 26rpx;
    color: $text-secondary;
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 16rpx 0;
  
  .code {
    font-family: 'Menlo', monospace;
    font-size: 22rpx;
    color: #d4d4d4;
    line-height: 1.7;
    white-space: pre-wrap;
    display: block;
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
