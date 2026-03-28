<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">实战</text>
        <text class="tag">Agent开发</text>
      </view>
      <text class="title">自定义 Agent 开发实战</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-02-22</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">从需求分析到最终部署，完整的自定义 Agent 开发流程。本教程通过代码审查 Agent 的案例，带你掌握 Agent 开发的全流程。</text>
      </view>

      <view class="section">
        <text class="section-title">一、项目目标</text>
        <text class="p">创建一个代码审查 Agent：分析代码质量、检查常见问题、提供改进建议。</text>
        <view class="feature-list">
          <view class="feature-item">✓ 代码风格检查</view>
          <view class="feature-item">✓ 逻辑正确性验证</view>
          <view class="feature-item">✓ 性能分析</view>
          <view class="feature-item">✓ 安全漏洞检测</view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、编写 AGENTS.md</text>
        <view class="code-block">
          <text class="code"># AGENTS.md - 代码审查 Agent

## 🎯 你的角色
代码审查专家 Agent。

## 审查标准
1. 代码风格 - 命名规范、格式一致性
2. 逻辑正确性 - 边界条件、错误处理
3. 性能 - 时间复杂度、内存使用
4. 安全性 - 输入验证
5. 可维护性 - 代码重复度</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、测试 Agent</text>
        <view class="command-list">
          <view class="cmd-item">
            <text class="cmd">openclaw chat "请审查 src/utils/helper.js"</text>
          </view>
          <view class="cmd-item">
            <text class="cmd">openclaw chat "请审查 src/ 目录下所有 JS 文件"</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、报告格式</text>
        <view class="code-block">
          <text class="code"># 代码审查报告
## 文件：src/utils/helper.js

### 🔴 必须修复
- 第 15 行：未处理 Promise rejection

### 🟡 建议改进
- 第 8 行：变量命名不够语义化

### ✅ 优点
- 函数职责单一</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">明确项目目标和审查标准</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">编写详细的 AGENTS.md 配置</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">定义标准化的输出报告格式</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT011">
          <text class="related-arrow">←</text>
          <text class="related-text">11 SOUL.md人格配置</text>
        </view>
        <view class="related-item" @click="goToT013">
          <text class="related-arrow">→</text>
          <text class="related-text">13 多Agent协作</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT011() {
      uni.redirectTo({ url: '/pages/learn/t011' })
    },
    goToT013() {
      uni.redirectTo({ url: '/pages/learn/t013' })
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

.feature-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 20rpx 24rpx;
  
  .feature-item {
    font-size: 28rpx;
    color: $text-main;
    padding: 8rpx 0;
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
  padding: 20rpx;
  
  .cmd-item {
    padding: 12rpx 0;
    
    .cmd {
      font-family: 'Menlo', monospace;
      font-size: 26rpx;
      color: $primary;
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
