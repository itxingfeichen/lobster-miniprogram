<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">工具系统</text>
        <text class="tag">核心概念</text>
      </view>
      <text class="title">工具系统：让 Agent 拥有超能力</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-08</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">工具（Tools）是 Agent 与外部世界交互的接口。没有工具，Agent 只能对话；有了工具，可以读写文件、执行命令、搜索网络等。</text>
      </view>

      <view class="section">
        <text class="section-title">一、内置工具分类</text>
        
        <view class="tool-category">
          <text class="category-title">📁 文件操作</text>
          <view class="tool-list">
            <text class="tool-item">read - 读取文件</text>
            <text class="tool-item">write - 写入文件</text>
            <text class="tool-item">edit - 编辑文件</text>
          </view>
        </view>
        
        <view class="tool-category">
          <text class="category-title">⚡ 系统操作</text>
          <view class="tool-list">
            <text class="tool-item">exec - 执行命令</text>
            <text class="tool-item">process - 进程管理</text>
          </view>
        </view>
        
        <view class="tool-category">
          <text class="category-title">🌐 网络操作</text>
          <view class="tool-list">
            <text class="tool-item">web_search - 网络搜索</text>
            <text class="tool-item">web_fetch - 网页提取</text>
            <text class="tool-item">browser - 浏览器控制</text>
          </view>
        </view>
        
        <view class="tool-category">
          <text class="category-title">🤖 Agent 管理</text>
          <view class="tool-list">
            <text class="tool-item">subagents - 子 Agent 管理</text>
            <text class="tool-item">message - 消息发送</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、工具调用流程</text>
        <view class="flow-box">
          <view class="flow-step">Agent 决策</view>
          <view class="flow-arrow">↓</view>
          <view class="flow-step">选择工具</view>
          <view class="flow-arrow">↓</view>
          <view class="flow-step">构造参数</view>
          <view class="flow-arrow">↓</view>
          <view class="flow-step">调用工具</view>
          <view class="flow-arrow">↓</view>
          <view class="flow-step">处理结果</view>
          <view class="flow-arrow">↓</view>
          <view class="flow-step">继续决策</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、工具策略配置</text>
        <view class="code-block">
          <text class="code"># TOOLS.md
## 可用工具
- read/write/edit: 文件操作
- exec: Shell 命令
- web_search: 网络搜索

## 使用策略
- 文件操作：仅限于项目目录
- Shell 命令：禁止 rm -rf 等危险操作
- 网络请求：每日限流 100 次</text>
        </view>
        <view class="key-point">
          <text class="point-text">通过 TOOLS.md 配置工具使用策略，控制 Agent 可以使用哪些工具，这是确保安全性的重要机制。</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">工具是 Agent 与外部世界交互的桥梁</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">内置工具覆盖文件、网络、系统、Agent 管理</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">TOOLS.md 配置工具策略确保安全</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT006">
          <text class="related-arrow">←</text>
          <text class="related-text">06 Agent架构深度解析</text>
        </view>
        <view class="related-item" @click="goToT008">
          <text class="related-arrow">→</text>
          <text class="related-text">08 会话管理与上下文</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT006() {
      uni.redirectTo({ url: '/pages/learn/t006' })
    },
    goToT008() {
      uni.redirectTo({ url: '/pages/learn/t008' })
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

.tool-category {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 16rpx;
  
  .category-title {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 12rpx;
  }
  
  .tool-list {
    .tool-item {
      display: block;
      font-size: 26rpx;
      color: $text-secondary;
      padding: 8rpx 0;
      font-family: 'Menlo', monospace;
    }
  }
}

.flow-box {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  text-align: center;
  
  .flow-step {
    font-size: 28rpx;
    color: $text-main;
    padding: 12rpx;
  }
  
  .flow-arrow {
    color: $primary;
    font-size: 24rpx;
  }
}

.code-block {
  background: #1e1e1e;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 16rpx 0;
  overflow-x: auto;
  
  .code {
    font-family: 'Menlo', 'Monaco', monospace;
    font-size: 24rpx;
    color: #d4d4d4;
    line-height: 1.7;
    white-space: pre-wrap;
    display: block;
  }
}

.key-point {
  background: #e8f5e9;
  padding: 20rpx;
  border-radius: 8rpx;
  margin-top: 16rpx;
  
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
