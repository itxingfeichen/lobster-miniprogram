<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">环境搭建</text>
        <text class="tag">入门</text>
        <text class="tag">AI Agent</text>
      </view>
      <text class="title">OpenClaw环境搭建指南：从零构建你的第一个AI Agent</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-01-15</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">本文将带你在30分钟内完成OpenClaw开发环境搭建，通过详细的步骤说明和环境配置指南，帮助开发者快速入门AI Agent开发，掌握从环境准备到首个Agent运行的完整流程。</text>
      </view>

      <view class="section">
        <text class="section-title">一、为什么选择OpenClaw</text>
        <text class="p">在AI Agent开发领域，OpenClaw以其独特的架构设计脱颖而出。作为一个开源的智能体协作平台，它提供了灵活的Agent定义能力和丰富的工具生态系统。</text>
        
        <view class="feature-grid">
          <view class="feature-item">
            <text class="feature-icon">🏗</text>
            <text class="feature-title">架构灵活性</text>
            <text class="feature-desc">采用分层Agent设计，主Agent负责协调，子Agent执行具体任务</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">🔧</text>
            <text class="feature-title">工具扩展性</text>
            <text class="feature-desc">通过Skill技能系统和MCP协议，轻松集成外部工具和API</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">🌐</text>
            <text class="feature-title">多渠道接入</text>
            <text class="feature-desc">支持CLI、Web UI、QQ Bot、飞书等多种接入方式</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、环境准备</text>
        <text class="p">在开始安装之前，确认开发环境满足以下基本要求：</text>
        
        <view class="req-table">
          <view class="table-header">
            <text class="th">配置项</text>
            <text class="th">最低要求</text>
            <text class="th">推荐配置</text>
          </view>
          <view class="table-row">
            <text class="td">操作系统</text>
            <text class="td">macOS 12 / Ubuntu 20.04</text>
            <text class="td">最新LTS版本</text>
          </view>
          <view class="table-row">
            <text class="td">CPU</text>
            <text class="td">1核心</text>
            <text class="td">4核心以上</text>
          </view>
          <view class="table-row">
            <text class="td">内存</text>
            <text class="td">4GB</text>
            <text class="td">8GB以上</text>
          </view>
          <view class="table-row">
            <text class="td">磁盘空间</text>
            <text class="td">10GB可用</text>
            <text class="td">20GB以上</text>
          </view>
        </view>

        <view class="tip-box">
          <text class="tip-title">Windows用户建议</text>
          <text class="tip-text">强烈建议使用WSL2（Windows Subsystem for Linux），可以避免大量路径和权限问题，获得原生的Linux开发体验。</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、安装Node.js</text>
        <text class="p">OpenClaw基于Node.js构建，因此Node.js是唯一的运行时依赖。我们推荐使用nvm（Node Version Manager）来管理Node.js版本。</text>
        
        <view class="step-box">
          <text class="step-num">3.1</text>
          <view class="step-content">
            <text class="step-title">安装nvm</text>
            <text class="p">在macOS或Linux系统中，打开终端执行以下命令：</text>
            <view class="code-block">
              <text class="code"># 下载并安装nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 配置环境变量
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.zshrc

# 重新加载配置
source ~/.zshrc

# 验证安装
nvm --version</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">3.2</text>
          <view class="step-content">
            <text class="step-title">安装Node.js 22</text>
            <view class="code-block">
              <text class="code"># 安装LTS版本的Node.js 22
nvm install 22

# 设置为默认版本
nvm alias default 22

# 切换到Node.js 22
nvm use 22

# 验证安装
node -v    # 应输出 v22.x.x
npm -v      # 应输出 10.x.x</text>
            </view>
          </view>
        </view>

        <view class="tip-box">
          <text class="tip-title">实践要点</text>
          <text class="tip-text">建议配置npm镜像以加速国内下载：</text>
          <view class="code-block inline-code">
            <text class="code">npm config set registry https://registry.npmmirror.com</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、安装pnpm</text>
        <text class="p">pnpm是一个高效的Node.js包管理器，相比npm具有更快的安装速度和更节省磁盘空间的优点。</text>
        <view class="code-block">
          <text class="code"># 使用npm全局安装pnpm
npm install -g pnpm

# 验证安装
pnpm --version</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、安装OpenClaw CLI</text>
        <view class="code-block">
          <text class="code"># 全局安装OpenClaw
pnpm add -g openclaw

# 验证安装
openclaw --version</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">六、初始化工作空间</text>
        <text class="p">安装完成后，初始化一个工作空间来存放Agent的配置文件：</text>
        <view class="code-block">
          <text class="code"># 创建工作目录
mkdir -p ~/openclaw-workspace
cd ~/openclaw-workspace

# 初始化OpenClaw
openclaw init</text>
        </view>
        <text class="p">初始化完成后，你会看到以下文件结构：</text>
        <view class="file-tree">
          <text class="tree-item">my-first-agent/</text>
          <text class="tree-item">  .env          # 环境变量</text>
          <text class="tree-item">  AGENTS.md     # Agent角色定义</text>
          <text class="tree-item">  SOUL.md       # Agent人格配置</text>
          <text class="tree-item">  TOOLS.md       # 工具配置</text>
          <text class="tree-item">  USER.md        # 用户偏好</text>
          <text class="tree-item">  skills/       # 技能目录</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">七、配置API Key</text>
        
        <view class="step-box">
          <text class="step-num">7.1</text>
          <view class="step-content">
            <text class="step-title">OpenAI配置</text>
            <text class="p">访问 platform.openai.com 创建API Key：</text>
            <view class="code-block">
              <text class="code">export OPENAI_API_KEY="sk-xxxxxxxxxxxx"</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">7.2</text>
          <view class="step-content">
            <text class="step-title">硅基流动配置（推荐国内用户）</text>
            <text class="p">访问 cloud.siliconflow.cn 获取API Key：</text>
            <view class="code-block">
              <text class="code">export SILICONFLOW_API_KEY="sk-xxxxxxxxxxxx"
export SILICONFLOW_BASE_URL="https://api.siliconflow.cn/v1"</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">八、启动Gateway服务</text>
        <text class="p">Gateway是OpenClaw的核心服务，负责管理Agent的生命周期和消息路由。</text>
        <view class="code-block">
          <text class="code"># 启动Gateway
openclaw gateway start

# 查看运行状态
openclaw gateway status</text>
        </view>
        <view class="success-box">
          <text class="success-title">启动成功</text>
          <text class="success-text">OpenClaw Gateway 运行中</text>
          <text class="success-text">地址: http://localhost:3000</text>
          <text class="success-text">版本: v1.0.0</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">九、验证安装</text>
        <view class="code-block">
          <text class="code"># 进入工作目录
cd ~/openclaw-workspace

# 启动对话
openclaw chat "你好，请介绍一下你自己"</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">十、常见问题</text>
        
        <view class="faq-item">
          <text class="faq-q">Q1: Gateway启动失败，提示端口被占用？</text>
          <view class="code-block">
            <text class="code"># 查看占用端口的进程
lsof -i :3000

# 杀掉占用进程
kill -9 &lt;PID&gt;

# 或者使用其他端口
openclaw gateway start --port 8080</text>
          </view>
        </view>

        <view class="faq-item">
          <text class="faq-q">Q2: 提示找不到node命令？</text>
          <view class="code-block">
            <text class="code"># 检查node位置
which node

# 如果找不到，刷新nvm
nvm use 22
source ~/.zshrc</text>
          </view>
        </view>

        <view class="faq-item">
          <text class="faq-q">Q3: 模型调用超时？</text>
          <text class="p">- 检查网络连接是否正常\n- 尝试使用国内模型服务商（硅基流动）\n- 确认API Key配置正确且余额充足</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <text class="p">通过本文的学习，你应该掌握以下三个核心技能：</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">环境搭建能力：能够在30分钟内完成从零开始的完整环境配置</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">版本管理技巧：掌握nvm进行Node.js版本管理，解决多项目版本冲突问题</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">故障排查能力：具备独立解决常见安装和运行问题的能力</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT002">
          <text class="related-arrow">→</text>
          <text class="related-text">02 Hello World：你的第一个OpenClaw Agent</text>
        </view>
        <view class="related-item" @click="goToT003">
          <text class="related-arrow">→</text>
          <text class="related-text">03 AGENTS.md配置文件完全解读</text>
        </view>
        <view class="related-item" @click="goToT004">
          <text class="related-arrow">→</text>
          <text class="related-text">04 OpenClaw命令速查</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT002() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t002' })
    },
    goToT003() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t003' })
    },
    goToT004() {
      uni.navigateTo({ url: '/pages/learn/detail?id=t004' })
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #3cb371;
$text-main: #1a1a1a;
$text-secondary: #666;

.article-container {
  min-height: 100vh;
  background: #fff;
}

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

.article-body {
  padding: 32rpx;
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

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24rpx;
  margin-top: 24rpx;
  
  .feature-item {
    background: #f8f9fa;
    padding: 28rpx;
    border-radius: 12rpx;
    
    .feature-icon {
      font-size: 40rpx;
      display: block;
      margin-bottom: 12rpx;
    }
    
    .feature-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: $text-main;
      margin-bottom: 8rpx;
    }
    
    .feature-desc {
      font-size: 26rpx;
      color: $text-secondary;
      line-height: 1.5;
    }
  }
}

.req-table {
  background: #f8f9fa;
  border-radius: 12rpx;
  overflow: hidden;
  margin: 24rpx 0;
  
  .table-header {
    display: flex;
    background: $primary;
    padding: 20rpx 0;
    
    .th {
      flex: 1;
      text-align: center;
      font-size: 26rpx;
      font-weight: 600;
      color: #fff;
    }
  }
  
  .table-row {
    display: flex;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
    
    .td {
      flex: 1;
      text-align: center;
      font-size: 24rpx;
      color: $text-secondary;
    }
  }
}

.tip-box {
  background: rgba(60, 179, 113, 0.08);
  padding: 24rpx;
  border-radius: 12rpx;
  margin-top: 24rpx;
  
  .tip-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $primary;
    margin-bottom: 12rpx;
  }
  
  .tip-text {
    font-size: 28rpx;
    color: $text-secondary;
    line-height: 1.6;
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
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 24rpx;
    color: #d4d4d4;
    line-height: 1.7;
    white-space: pre-wrap;
    display: block;
  }
  
  &.inline-code {
    background: rgba(60, 179, 113, 0.1);
    padding: 16rpx 24rpx;
    
    .code {
      color: $primary;
    }
  }
}

.file-tree {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 16rpx 0;
  
  .tree-item {
    display: block;
    font-family: 'Menlo', 'Monaco', monospace;
    font-size: 24rpx;
    color: $text-secondary;
    line-height: 1.8;
  }
}

.success-box {
  background: rgba(60, 179, 113, 0.1);
  border: 2rpx solid $primary;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 24rpx;
  
  .success-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $primary;
    margin-bottom: 16rpx;
  }
  
  .success-text {
    display: block;
    font-family: 'Menlo', monospace;
    font-size: 26rpx;
    color: $text-main;
    line-height: 1.6;
  }
}

.faq-item {
  margin-bottom: 32rpx;
  
  .faq-q {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 16rpx;
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
      font-weight: 600;
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
      
      &:last-child {
        border-bottom: none;
      }
      
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
