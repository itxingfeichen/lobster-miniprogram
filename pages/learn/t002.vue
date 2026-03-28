<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">入门</text>
        <text class="tag">Hello World</text>
        <text class="tag">第一个Agent</text>
      </view>
      <text class="title">Hello World：你的第一个OpenClaw Agent</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-01-18</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">通过创建第一个Hello World Agent，快速掌握OpenClaw的核心概念和配置方法，理解Agent从定义到运行的完整生命周期。</text>
      </view>

      <!-- 架构图 -->
      <view class="section">
        <text class="section-title">一、Hello Agent 工作流程</text>
        <text class="p">当用户发送消息时，OpenClaw 内部经历了以下处理流程：</text>
        <view class="flow-diagram">
          <view class="flow-row">
            <view class="flow-step">用户发送"你好"</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">Gateway 接收</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">路由到 Agent</view>
          </view>
          <view class="flow-row">
            <view class="flow-step">加载配置</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">解析意图</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">调用 LLM</view>
          </view>
          <view class="flow-row">
            <view class="flow-step">LLM 生成回复</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">返回给 Gateway</view>
            <view class="flow-arrow">→</view>
            <view class="flow-step">推送回复</view>
          </view>
        </view>
        <view class="image-caption">图1-1：消息处理流程</view>
        
        <text class="p" style="margin-top: 32rpx;">配置文件在其中的作用：</text>
        <view class="config-flow">
          <view class="config-item">
            <text class="config-icon">📋</text>
            <text class="config-name">AGENTS.md</text>
            <text class="config-role">定义"做什么"</text>
          </view>
          <view class="config-item">
            <text class="config-icon">💫</text>
            <text class="config-name">SOUL.md</text>
            <text class="config-role">定义"怎么做"</text>
          </view>
          <view class="config-item">
            <text class="config-icon">🔧</text>
            <text class="config-name">TOOLS.md</text>
            <text class="config-role">定义"用什么做"</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、技术背景：为什么需要配置文件？</text>
        <text class="p">在传统 AI 对话系统中，模型的行为完全由系统提示词控制。但这种方法存在以下问题：</text>
        
        <view class="challenge-item">
          <text class="challenge-title">传统方式的痛点</text>
          <text class="challenge-desc">1. 提示词难以维护：随着功能增加，系统提示词变得臃肿
2. 角色切换困难：无法灵活定义多个不同角色的 Agent
3. 权限控制粗粒度：无法精确控制 Agent 能做什么、不能做什么</text>
        </view>
        
        <view class="challenge-item">
          <text class="challenge-title">OpenClaw 的解决方案</text>
          <text class="challenge-desc">通过分离的配置文件实现：
- AGENTS.md：角色定义，明确 Agent 的身份和能力
- SOUL.md：人格配置，控制 Agent 的行为风格
- TOOLS.md：工具限制，确保安全可控</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、为什么从Hello World开始</text>
        <text class="p">每个开发者的学习之旅都从"Hello World"开始。在OpenClaw的世界里，创建第一个Agent不仅是入门练习，更是理解整个平台运作机制的关键一步。</text>
        <text class="p">通过这个简单的案例，你将掌握：</text>
        <view class="feature-list">
          <view class="feature-item">
            <text class="feature-icon">1</text>
            <text class="feature-text">Agent的创建流程</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">2</text>
            <text class="feature-text">AGENTS.md和SOUL.md的核心作用</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">3</text>
            <text class="feature-text">配置文件的编写规范</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">4</text>
            <text class="feature-text">Agent的启动和交互方式</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、前置条件</text>
        <text class="p">在开始创建Agent之前，请确保已完成OpenClaw环境搭建（参考t001教程）。</text>
        <view class="check-list">
          <view class="check-item">
            <text class="check-icon">✓</text>
            <text class="check-text">Node.js 18+ 已安装</text>
          </view>
          <view class="check-item">
            <text class="check-icon">✓</text>
            <text class="check-text">pnpm 已安装</text>
          </view>
          <view class="check-item">
            <text class="check-icon">✓</text>
            <text class="check-text">OpenClaw CLI 已安装</text>
          </view>
          <view class="check-item">
            <text class="check-icon">✓</text>
            <text class="check-text">Gateway 服务已启动</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、创建你的第一个Agent</text>
        
        <view class="step-box">
          <text class="step-num">3.1</text>
          <view class="step-content">
            <text class="step-title">初始化工作空间</text>
            <view class="code-block">
              <text class="code"># 创建工作目录
mkdir -p ~/hello-agent
cd ~/hello-agent

# 初始化OpenClaw项目
openclaw init</text>
            </view>
            <text class="p">初始化完成后，会生成以下文件结构：</text>
            <view class="file-tree">
              <text class="tree-item">hello-agent/</text>
              <text class="tree-item">  .env          # 环境变量</text>
              <text class="tree-item">  AGENTS.md     # Agent角色定义</text>
              <text class="tree-item">  SOUL.md       # Agent人格配置</text>
              <text class="tree-item">  TOOLS.md       # 工具配置</text>
              <text class="tree-item">  USER.md        # 用户偏好</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">3.2</text>
          <view class="step-content">
            <text class="step-title">编写AGENTS.md</text>
            <text class="p">AGENTS.md是Agent的核心配置文件：</text>
            <view class="code-block">
              <text class="code"># AGENTS.md - 我的第一个Agent

## 你的角色
你是一个友好的助手Agent，名叫HelloBot。

## 核心能力
- 响应用户问候
- 进行友好对话
- 回答简单问题

## 权限范围
| 权限 | 状态 |
|------|------|
| 聊天 | 开启 |
| 文件读写 | 关闭 |
| Shell命令 | 关闭 |</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">3.3</text>
          <view class="step-content">
            <text class="step-title">编写SOUL.md</text>
            <view class="code-block">
              <text class="code"># SOUL.md - HelloBot的灵魂

## 核心信念
友善是最好的开始。

## 性格
- 热情
- 耐心
- 幽默

## 交流风格
- 使用友好的称谓
- 保持积极乐观
- 回答简洁明了</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">六、启动并测试</text>
        
        <view class="step-box">
          <text class="step-num">4.1</text>
          <view class="step-content">
            <text class="step-title">启动对话</text>
            <view class="code-block">
              <text class="code"># 进入工作目录
cd ~/hello-agent

# 启动对话模式
openclaw chat</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">4.2</text>
          <view class="step-content">
            <text class="step-title">测试用例</text>
            <view class="test-cases">
              <view class="test-item">
                <text class="test-label">测试1：基本问候</text>
                <text class="test-input">输入：你好！</text>
                <text class="test-output">期望：友好的问候语</text>
              </view>
              <view class="test-item">
                <text class="test-label">测试2：询问身份</text>
                <text class="test-input">输入：你是谁？</text>
                <text class="test-output">期望：介绍自己是HelloBot</text>
              </view>
              <view class="test-item">
                <text class="test-label">测试3：简单问题</text>
                <text class="test-input">输入：今天星期几？</text>
                <text class="test-output">期望：坦诚说明无法获取实时信息</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、常见问题</text>
        
        <view class="faq-item">
          <text class="faq-q">Q1: 对话没有回复？</text>
          <text class="p">检查Gateway是否运行：openclaw gateway status</text>
          <text class="p">检查API Key配置：cat .env</text>
        </view>

        <view class="faq-item">
          <text class="faq-q">Q2: 回复不符合预期？</text>
          <text class="p">优化AGENTS.md角色描述</text>
          <text class="p">调整SOUL.md人格配置</text>
        </view>

        <view class="faq-item">
          <text class="faq-q">Q3: 如何修改配置？</text>
          <text class="p">直接编辑配置文件后重启对话即可生效</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">Agent创建流程：从工作空间初始化到配置文件编写</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">AGENTS.md核心语法：角色定义、权限配置</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">SOUL.md人格配置：性格特征、交流风格</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT001">
          <text class="related-arrow">←</text>
          <text class="related-text">01 OpenClaw环境搭建指南</text>
        </view>
        <view class="related-item" @click="goToT003">
          <text class="related-arrow">→</text>
          <text class="related-text">03 AGENTS.md配置文件完全解读</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT001() {
      uni.redirectTo({ url: '/pages/learn/t001' })
    },
    goToT003() {
      uni.redirectTo({ url: '/pages/learn/t003' })
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

.flow-diagram {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 24rpx 0;
  
  .flow-row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12rpx 0;
    flex-wrap: wrap;
    
    .flow-step {
      padding: 12rpx 20rpx;
      background: $primary;
      color: #fff;
      border-radius: 20rpx;
      font-size: 22rpx;
      margin: 4rpx;
    }
    
    .flow-arrow {
      color: $primary;
      font-size: 24rpx;
      margin: 4rpx;
    }
  }
}

.image-caption {
  text-align: center;
  font-size: 24rpx;
  color: $text-secondary;
  margin-top: 16rpx;
  font-style: italic;
}

.config-flow {
  display: flex;
  justify-content: space-around;
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 16rpx;
  
  .config-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .config-icon {
      font-size: 40rpx;
      margin-bottom: 8rpx;
    }
    
    .config-name {
      font-size: 26rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 4rpx;
    }
    
    .config-role {
      font-size: 22rpx;
      color: $text-secondary;
    }
  }
}

.challenge-item {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-bottom: 20rpx;
  border-left: 6rpx solid $primary;
  
  .challenge-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 12rpx;
  }
  
  .challenge-desc {
    font-size: 26rpx;
    color: $text-secondary;
    line-height: 1.7;
  }
}

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
      width: 40rpx;
      height: 40rpx;
      background: $primary;
      color: #fff;
      font-size: 24rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16rpx;
    }
    
    .feature-text {
      font-size: 28rpx;
      color: $text-main;
    }
  }
}

.check-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 24rpx;
  
  .check-item {
    display: flex;
    align-items: center;
    padding: 12rpx 0;
    
    .check-icon {
      color: $primary;
      margin-right: 16rpx;
      font-size: 28rpx;
    }
    
    .check-text {
      font-size: 28rpx;
      color: $text-secondary;
    }
  }
}

.step-box {
  display: flex;
  margin-top: 32rpx;
  
  .step-num {
    width: 56rpx;
    height: 56rpx;
    background: $primary;
    color: #fff;
    font-size: 28rpx;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .step-content {
    flex: 1;
    margin-left: 20rpx;
    
    .step-title {
      display: block;
      font-size: 32rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 16rpx;
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

.file-tree {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 16rpx 0;
  
  .tree-item {
    display: block;
    font-family: 'Menlo', monospace;
    font-size: 24rpx;
    color: $text-secondary;
    line-height: 1.8;
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
    
    .test-input, .test-output {
      display: block;
      font-size: 26rpx;
      color: $text-secondary;
      line-height: 1.6;
    }
  }
}

.faq-item {
  margin-bottom: 32rpx;
  
  .faq-q {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 12rpx;
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
