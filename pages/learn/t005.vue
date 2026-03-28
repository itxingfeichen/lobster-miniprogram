<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">入门</text>
        <text class="tag">实战</text>
        <text class="tag">多功能</text>
      </view>
      <text class="title">创建你的第一个多功能 Agent</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-01</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">学习如何创建一个具备文件操作、网络搜索等多种能力的实用 Agent。通过本教程，你将掌握配置多权限 Agent 的方法。</text>
      </view>

      <view class="section">
        <text class="section-title">一、设计目标</text>
        <text class="p">创建一个能够读写文件、搜索网络、执行命令和管理待办的 Agent。</text>
        <view class="feature-list">
          <view class="feature-item">
            <text class="feature-icon">📁</text>
            <text class="feature-text">文件读写能力</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">🌐</text>
            <text class="feature-text">网络搜索能力</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">⚡</text>
            <text class="feature-text">Shell命令执行</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、配置 AGENTS.md</text>
        <view class="code-block">
          <text class="code"># AGENTS.md - 多功能助手

## 🎯 你的角色
你是多功能助手 Agent。

### 权限范围
| 权限 | 状态 |
|:-----|:-----|
| 文件读写 | ✅ 开启 |
| 网络搜索 | ✅ 开启 |
| Shell 命令 | ✅ 开启 |
| 浏览器 | ❌ 关闭 |</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、配置 SOUL.md</text>
        <view class="code-block">
          <text class="code"># SOUL.md

## 核心信念
**效率优先，安全第一。**

## 性格特征
- 高效、专业
- 安全意识强
- 简洁明了</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、配置 TOOLS.md</text>
        <view class="code-block">
          <text class="code"># TOOLS.md

## 可用工具
- read/write/edit - 文件操作
- exec - Shell 命令
- web_search - 网络搜索
- web_fetch - 网页内容提取</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、测试 Agent</text>
        <view class="test-cases">
          <view class="test-item">
            <text class="test-label">测试1：文件操作</text>
            <text class="test-input">帮我创建一个 TODO.md 文件</text>
          </view>
          <view class="test-item">
            <text class="test-label">测试2：网络搜索</text>
            <text class="test-input">搜索最新的 Node.js 版本</text>
          </view>
          <view class="test-item">
            <text class="test-label">测试3：系统命令</text>
            <text class="test-input">查看当前目录下的文件</text>
          </view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">AGENTS.md 定义 Agent 角色和权限范围</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">SOUL.md 定义 Agent 行为风格和信念</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">TOOLS.md 配置可用工具列表</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT004">
          <text class="related-arrow">←</text>
          <text class="related-text">04 OpenClaw命令速查</text>
        </view>
        <view class="related-item" @click="goToT006">
          <text class="related-arrow">→</text>
          <text class="related-text">06 Agent架构深度解析</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT004() {
      uni.navigateTo({ url: '/pages/learn/t004' })
    },
    goToT006() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t006' })
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

.feature-list {
  margin-top: 24rpx;
  
  .feature-item {
    display: flex;
    align-items: center;
    padding: 16rpx 0;
    
    .feature-icon {
      font-size: 32rpx;
      margin-right: 16rpx;
    }
    
    .feature-text {
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

.test-cases {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 16rpx;
  
  .test-item {
    padding: 16rpx 0;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .test-label {
      display: block;
      font-size: 28rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 8rpx;
    }
    
    .test-input {
      display: block;
      font-size: 26rpx;
      color: $primary;
      font-family: 'Menlo', monospace;
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
