<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">入门</text>
        <text class="tag">CLI</text>
        <text class="tag">命令速查</text>
      </view>
      <text class="title">OpenClaw 基本命令速查</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-01-25</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro_section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">快速掌握 OpenClaw CLI 的常用命令，提升日常操作效率。本页涵盖 Gateway 管理，会话管理，技能管理等核心命令。</text>
      </view>

      <!-- 技术背景 -->
      <view class="section">
        <text class="section-title">一、为什么需要 CLI？</text>
        <text class="p">OpenClaw CLI 是整个平台的入口，理解其架构有助于更好地使用：</text>
        
        <view class="arch-diagram">
          <view class="arch-item">
            <text class="arch-icon">🔰</text>
            <text class="arch-name">CLI 入口</text>
            <text class="arch-desc">命令行交互入口</text>
          </view>
          <view class="arch-item">
            <text class="arch-icon">⚙️</text>
            <text class="arch-name">Gateway</text>
            <text class="arch-desc">核心服务组件</text>
          </view>
          <view class="arch-item">
            <text class="arch-icon">🤖</text>
            <text class="arch-name">Agent 引擎</text>
            <text class="arch-desc">任务执行核心</text>
          </view>
          <view class="arch-item">
            <text class="arch-icon">🧠</text>
            <text class="arch-name">LLM</text>
            <text class="arch-desc">大模型能力</text>
          </view>
        </view>
        <view class="image-caption">图1-1：CLI 与核心组件关系</view>
        
        <view class="tip-box">
          <text class="tip-title">💡 CLI vs 其他接入方式</text>
          <text class="tip-text">CLI 是最直接的方式，适合开发和调试；生产环境通常使用 Web UI 或 Bot 接入。</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、Gateway 管理</text>
        <view class="command-list">
          <view class="command-item">
            <text class="cmd-name">openclaw gateway start</text>
            <text class="cmd-desc">启动 Gateway 服务</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw gateway stop</text>
            <text class="cmd-desc">停止 Gateway 服务</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw gateway restart</text>
            <text class="cmd-desc">重启 Gateway 服务</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw gateway status</text>
            <text class="cmd-desc">查看 Gateway 运行状态</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、会话管理</text>
        <view class="command-list">
          <view class="command-item">
            <text class="cmd-name">openclaw chat "消息"</text>
            <text class="cmd-desc">开始与 Agent 对话</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw sessions list</text>
            <text class="cmd-desc">查看所有会话列表</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw sessions show &lt;id&gt;</text>
            <text class="cmd-desc">查看指定会话详情</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、技能管理</text>
        <view class="command-list">
          <view class="command-item">
            <text class="cmd-name">clawhub search &lt;keyword&gt;</text>
            <text class="cmd-desc">搜索技能市场</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">clawhub install @openclaw/xxx</text>
            <text class="cmd-desc">安装指定技能</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">clawhub list</text>
            <text class="cmd-desc">查看已安装技能</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">clawhub update @openclaw/xxx</text>
            <text class="cmd-desc">更新指定技能</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、工作空间管理</text>
        <view class="command-list">
          <view class="command-item">
            <text class="cmd-name">openclaw init</text>
            <text class="cmd-desc">初始化工作空间</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw info</text>
            <text class="cmd-desc">查看工作空间信息</text>
          </view>
          <view class="command-item">
            <text class="cmd-name">openclaw validate</text>
            <text class="cmd-desc">验证配置文件</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、实用技巧</text>
        <view class="tip-box">
          <text class="tip-title">💡 Tab 补全</text>
          <text class="tip-text">大多数命令支持 Tab 键自动补全</text>
        </view>
        <view class="tip-box">
          <text class="tip-title">💡 帮助信息</text>
          <text class="tip-text">在任何命令后加 --help 查看详细用法</text>
        </view>
        <view class="tip-box">
          <text class="tip-title">💡 日志调试</text>
          <text class="tip-text">使用 --verbose 查看详细日志</text>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">Gateway 管理：start/stop/restart/status 控制服务</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">会话管理：chat 对话、sessions 查看历史</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">技能管理：search/install/list/update 扩展能力</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">4</text>
            <text class="summary-text">工作空间：init 初始化、validate 验证配置</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT003">
          <text class="related-arrow">←</text>
          <text class="related-text">03 AGENTS.md完全解读</text>
        </view>
        <view class="related-item" @click="goToT005">
          <text class="related-arrow">→</text>
          <text class="related-text">05 创建多功能Agent</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToT003() {
      uni.redirectTo({ url: '/pages/learn/t003' })
    },
    goToT005() {
      uni.redirectTo({ url: '/pages/learn/t005' })
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

.arch-diagram {
  display: flex;
  justify-content: space-around;
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin: 24rpx 0;
  
  .arch-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .arch-icon {
      font-size: 40rpx;
      margin-bottom: 8rpx;
    }
    
    .arch-name {
      font-size: 24rpx;
      font-weight: 600;
      color: $text-main;
    }
    
    .arch-desc {
      font-size: 20rpx;
      color: $text-secondary;
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

.tip-box {
  background: #e8f5e9;
  padding: 20rpx;
  border-radius: 12rpx;
  margin-top: 24rpx;
  
  .tip-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 8rpx;
  }
  
  .tip-text {
    font-size: 26rpx;
    color: $text-secondary;
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
}

.command-list {
  background: #f8f9fa;
  border-radius: 12rpx;
  overflow: hidden;
  
  .command-item {
    padding: 24rpx;
    border-bottom: 1rpx solid #eee;
    
    &:last-child { border-bottom: none; }
    
    .cmd-name {
      display: block;
      font-family: 'Menlo', 'Monaco', monospace;
      font-size: 28rpx;
      color: $primary;
      font-weight: 600;
      margin-bottom: 8rpx;
    }
    
    .cmd-desc {
      font-size: 26rpx;
      color: $text-secondary;
    }
  }
}

.tip-box {
  background: linear-gradient(135deg, #fef8e8 0%, #fff 100%);
  padding: 20rpx 24rpx;
  border-radius: 12rpx;
  margin-bottom: 16rpx;
  border-left: 6rpx solid #f0ad4e;
  
  .tip-title {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 8rpx;
  }
  
  .tip-text {
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
