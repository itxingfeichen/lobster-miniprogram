<template>
  <view class="article-container">
    <view class="article-header">
      <view class="tag-row">
        <text class="tag">进阶</text>
        <text class="tag">AGENTS.md</text>
        <text class="tag">配置文件</text>
      </view>
      <text class="title">AGENTS.md配置文件完全解读</text>
      <view class="meta">
        <text class="meta-item">龙虾教程组</text>
        <text class="meta-item">2026-01-22</text>
      </view>
    </view>

    <view class="article-body">
      <view class="intro-section">
        <text class="intro-title">核心观点</text>
        <text class="intro-text">AGENTS.md是OpenClaw的核心配置文件，通过掌握其完整的配置语法和最佳实践，可以精确控制Agent的角色定位、能力边界和行为流程，实现高度定制化的AI Agent。</text>
      </view>

      <!-- 配置层次结构图 -->
      <view class="section">
        <text class="section-title">一、配置文件的层次结构</text>
        <text class="p">OpenClaw 使用多层次配置文件来定义 Agent，每层配置文件有其特定作用：</text>
        
        <view class="hierarchy-diagram">
          <view class="hierarchy-layer top">
            <text class="layer-name">IDENTITY.md</text>
            <text class="layer-desc">Agent 身份标识</text>
          </view>
          <view class="hierarchy-arrow">↓</view>
          <view class="hierarchy-layer">
            <text class="layer-name">AGENTS.md</text>
            <text class="layer-desc">角色定义 & 能力</text>
          </view>
          <view class="hierarchy-arrow">↓</view>
          <view class="hierarchy-layer">
            <text class="layer-name">SOUL.md</text>
            <text class="layer-desc">人格 & 行为风格</text>
          </view>
          <view class="hierarchy-arrow">↓</view>
          <view class="hierarchy-layer">
            <text class="layer-name">TOOLS.md</text>
            <text class="layer-desc">工具权限配置</text>
          </view>
          <view class="hierarchy-arrow">↓</view>
          <view class="hierarchy-layer bottom">
            <text class="layer-name">USER.md</text>
            <text class="layer-desc">用户偏好记忆</text>
          </view>
        </view>
        <view class="image-caption">图1-1：配置文件层次结构</view>
        
        <text class="p" style="margin-top: 32rpx;">各配置文件的加载顺序和时机：</text>
        <view class="timeline">
          <view class="timeline-item">
            <text class="time-num">1</text>
            <text class="time-text">Agent 启动时加载 AGENTS.md 确定角色</text>
          </view>
          <view class="timeline-item">
            <text class="time-num">2</text>
            <text class="time-text">加载 SOUL.md 匹配人格特征</text>
          </view>
          <view class="timeline-item">
            <text class="time-num">3</text>
            <text class="time-text">加载 TOOLS.md 获取可用工具列表</text>
          </view>
          <view class="timeline-item">
            <text class="time-num">4</text>
            <text class="time-text">运行时加载 USER.md 了解用户偏好</text>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">二、技术背景：为什么分离配置文件？</text>
        
        <view class="challenge-item">
          <text class="challenge-title">统一配置的问题</text>
          <text class="challenge-desc">将所有配置放在单一文件中会导致：
1. 难以维护：角色、人格、工具混在一起
2. 无法复用：不同 Agent 无法共享相同的人格配置
3. 更新困难：修改一处可能影响其他功能</text>
        </view>
        
        <view class="challenge-item">
          <text class="challenge-title">分离配置的优势</text>
          <text class="challenge-desc">OpenClaw 的分离式设计：
- 职责清晰：每个文件只管一件事
- 灵活组合：不同 AGENTS + 不同 SOUL = 不同性格的 Agent
- 易于测试：单独修改和调试每个配置</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">三、AGENTS.md的核心地位</text>
        <text class="p">AGENTS.md是定义Agent"做什么"和"怎么做"的核心配置文件。它采用Markdown格式，通过结构化的配置项来描述Agent的各项属性。</text>
        <view class="feature-list">
          <view class="feature-item">
            <text class="feature-icon">1</text>
            <text class="feature-text">可读性强：Markdown格式人类友好</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">2</text>
            <text class="feature-text">结构清晰：层次化配置便于管理</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">3</text>
            <text class="feature-text">与LLM天然契合：配置即系统提示</text>
          </view>
        </view>
        <view class="key-insight">
          <text class="insight-label">关键洞察</text>
          <text class="insight-text">AGENTS.md本质上是给LLM看的"使用说明书"。写好这份说明书，是开发优质AI Agent的第一步。</text>
        </view>
      </view>

      <view class="section">
        <text class="section-title">四、文件结构总览</text>
        
        <view class="step-box">
          <text class="step-num">2.1</text>
          <view class="step-content">
            <text class="step-title">必选配置项</text>
            <text class="p">AGENTS.md的核心结构包含以下几个必选配置：</text>
            <view class="code-block">
              <text class="code"># Agent角色定义

## 基础信息
- 名称：[Agent名称]
- 版本：[版本号]
- 作者：[创建者]

## 角色描述
[Agent的角色定位和主要职责]

## 核心能力
- [能力1]
- [能力2]

## 权限范围
| 权限 | 状态 | 说明 |
|:-----|:-----|:-----|
| xxx | 开启/关闭 | 说明

## 工作流程
1. 步骤1
2. 步骤2</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">2.2</text>
          <view class="step-content">
            <text class="step-title">可选配置项</text>
            <view class="code-block">
              <text class="code">## 约束条件
[Agent需要遵守的约束和限制]

## 输出格式
[响应的标准格式要求]

## 上下文模板
[常用的上下文示例]

## 例子
[典型交互示例]</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、基础配置详解</text>
        
        <view class="step-box">
          <text class="step-num">3.1</text>
          <view class="step-content">
            <text class="step-title">基础信息</text>
            <view class="code-block">
              <text class="code">## 基础信息
- 名称：CodeReviewer
- 版本：1.0.0
- 作者：DevTeam
- 维护者：openai@example.com</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">3.2</text>
          <view class="step-content">
            <text class="step-title">角色描述（核心部分）</text>
            <view class="code-block">
              <text class="code">## 角色描述
你叫CodeReviewer，是一个专业的代码审查助手。
你的主要职责是帮助开发者发现代码中的问题，
提供改进建议，并确保代码质量。

你擅长：
- 代码性能和优化建议
- 安全漏洞检测
- 代码风格统一

你不喜欢：
- 过度设计
- 不必要的复杂性</text>
            </view>
            <view class="key-points">
              <text class="point-label">编写要点</text>
              <text class="point-text">明确身份、定义范围、展示个性、避免模糊</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">3.3</text>
          <view class="step-content">
            <text class="step-title">核心能力</text>
            <view class="code-block">
              <text class="code">## 核心能力
- 代码审查：分析代码并提供改进建议
- 漏洞检测：识别潜在的安全问题
- 性能分析：评估代码性能并提出优化方案
- 文档生成：自动生成代码注释和文档</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">六、权限配置详解</text>
        
        <view class="step-box">
          <text class="step-num">4.1</text>
          <view class="step-content">
            <text class="step-title">权限表格</text>
            <view class="code-block">
              <text class="code">## 权限范围
| 权限 | 状态 | 说明 |
|:-----|:-----|:-----|
| 聊天 | 开启 | 响应用户消息 |
| 文件读取 | 开启 | 读取指定目录代码 |
| 文件写入 | 关闭 | 不允许修改文件 |
| Shell命令 | 关闭 | 不允许执行命令 |
| 网络访问 | 关闭 | 不允许访问外部URL |</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">4.2</text>
          <view class="step-content">
            <text class="step-title">权限粒度控制</text>
            <view class="code-block">
              <text class="code">### 文件操作
- 读取路径限制：./src/**, ./tests/**
- 文件类型限制：.js, .ts, .py, .go
- 最大文件大小：1MB

### 网络访问
- 允许的域名：无
- 超时设置：30秒</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">4.3</text>
          <view class="step-content">
            <text class="step-title">权限安全原则</text>
            <view class="principle-list">
              <view class="principle-item">
                <text class="principle-num">1</text>
                <text class="principle-text">最小权限原则：只开启绝对必要的权限</text>
              </view>
              <view class="principle-item">
                <text class="principle-num">2</text>
                <text class="principle-text">明确边界：清晰定义权限的适用范围</text>
              </view>
              <view class="principle-item">
                <text class="principle-num">3</text>
                <text class="principle-text">风险评估：考虑每个权限的安全风险</text>
              </view>
              <view class="principle-item">
                <text class="principle-num">4</text>
                <text class="principle-text">日志记录：关键操作需要审计日志</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">五、工作流程配置</text>
        
        <view class="step-box">
          <text class="step-num">5.1</text>
          <view class="step-content">
            <text class="step-title">标准工作流程</text>
            <view class="code-block">
              <text class="code">## 工作流程
1. 接收代码文件路径
2. 读取并解析代码内容
3. 执行静态分析
4. 识别问题和建议
5. 生成审查报告
6. 返回审查结果</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">5.2</text>
          <view class="step-content">
            <text class="step-title">条件分支</text>
            <view class="code-block">
              <text class="code">### 场景1：安全漏洞检测
如果检测到安全漏洞：
1. 立即标记为"严重"
2. 提供详细风险说明
3. 给出修复建议和示例代码

### 场景2：性能问题
如果检测到性能问题：
1. 评估影响范围
2. 提供优化建议
3. 给出优化前后对比</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">六、高级配置技巧</text>
        
        <view class="step-box">
          <text class="step-num">6.1</text>
          <view class="step-content">
            <text class="step-title">上下文模板</text>
            <text class="p">使用上下文模板提供清晰的交互示例：</text>
            <view class="code-block">
              <text class="code">## 上下文模板
### 用户请求示例
请帮我审查 src/utils/helper.js

### Agent响应示例
## 代码审查报告
- 文件：src/utils/helper.js
- 行数：156
- 问题数：3</text>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">6.2</text>
          <view class="step-content">
            <text class="step-title">输出格式控制</text>
            <view class="code-block">
              <text class="code">## 输出格式
### JSON格式
{
  "file": "文件路径",
  "issues": [
    {
      "severity": "critical|major|minor",
      "line": 行号,
      "message": "问题描述"
    }
  ]
}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="section">
        <text class="section-title">七、最佳实践</text>
        
        <view class="step-box">
          <text class="step-num">7.1</text>
          <view class="step-content">
            <text class="step-title">配置原则</text>
            <view class="check-list">
              <view class="check-item">
                <text class="check-icon">✓</text>
                <text class="check-text">具体明确：避免模糊描述</text>
              </view>
              <view class="check-item">
                <text class="check-icon">✓</text>
                <text class="check-text">层次清晰：合理使用标题层级</text>
              </view>
              <view class="check-item">
                <text class="check-icon">✓</text>
                <text class="check-text">一致性：确保各配置项一致</text>
              </view>
              <view class="check-item">
                <text class="check-icon">✓</text>
                <text class="check-text">可维护性：添加注释说明</text>
              </view>
            </view>
          </view>
        </view>

        <view class="step-box">
          <text class="step-num">7.2</text>
          <view class="step-content">
            <text class="step-title">常见错误</text>
            <view class="error-box">
              <text class="error-label">错误1：角色描述过于笼统</text>
              <view class="code-block small">
                <text class="code"># 错误示例
你是一个AI助手，帮助用户解决问题。

# 正确示例
你叫TechHelper，是专注于编程问题
的技术助手。擅长JavaScript、Python开发。</text>
              </view>
            </view>
            <view class="error-box">
              <text class="error-label">错误2：权限配置过于宽松</text>
              <view class="code-block small">
                <text class="code"># 错误示例
权限范围：全部开启

# 正确示例
权限范围：
- 聊天：开启
- 文件读取：仅src目录
- Shell命令：关闭</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="section summary-section">
        <text class="section-title">总结</text>
        <view class="summary-list">
          <view class="summary-item">
            <text class="summary-num">1</text>
            <text class="summary-text">AGENTS.md核心结构：基础信息、角色描述、核心能力、权限配置、工作流程</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">2</text>
            <text class="summary-text">权限配置方法：权限表格、粒度控制、安全原则</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">3</text>
            <text class="summary-text">工作流程设计：标准流程、条件分支、错误处理</text>
          </view>
          <view class="summary-item">
            <text class="summary-num">4</text>
            <text class="summary-text">高级配置技巧：上下文模板、输出格式、约束条件</text>
          </view>
        </view>
      </view>
    </view>

    <view class="related-section">
      <text class="related-title">相关教程</text>
      <view class="related-list">
        <view class="related-item" @click="goToT002">
          <text class="related-arrow">←</text>
          <text class="related-text">02 Hello World Agent</text>
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
      uni.redirectTo({ url: '/pages/learn/t002' })
    },
    goToT004() {
      uni.redirectTo({ url: '/pages/learn/t004' })
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

.hierarchy-diagram {
  background: linear-gradient(180deg, #f8faf8 0%, #fff 100%);
  border: 2rpx solid #e0e8e0;
  border-radius: 16rpx;
  padding: 24rpx;
  margin: 24rpx 0;
  
  .hierarchy-layer {
    text-align: center;
    padding: 16rpx;
    background: rgba(60, 179, 113, 0.1);
    border-radius: 12rpx;
    margin: 8rpx 0;
    
    &.top {
      background: rgba(60, 179, 113, 0.2);
    }
    &.bottom {
      background: rgba(60, 179, 113, 0.05);
    }
    
    .layer-name {
      display: block;
      font-size: 28rpx;
      font-weight: 600;
      color: $primary;
    }
    
    .layer-desc {
      font-size: 22rpx;
      color: $text-secondary;
    }
  }
  
  .hierarchy-arrow {
    text-align: center;
    color: $primary;
    font-size: 24rpx;
  }
}

.image-caption {
  text-align: center;
  font-size: 24rpx;
  color: $text-secondary;
  margin-top: 16rpx;
  font-style: italic;
}

.timeline {
  background: #f8f9fa;
  border-radius: 12rpx;
  padding: 24rpx;
  margin-top: 16rpx;
  
  .timeline-item {
    display: flex;
    align-items: center;
    padding: 12rpx 0;
    
    .time-num {
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
      flex-shrink: 0;
    }
    
    .time-text {
      font-size: 26rpx;
      color: $text-main;
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

.key-insight {
  background: linear-gradient(135deg, #fef8e8 0%, #fff 100%);
  padding: 24rpx;
  border-radius: 12rpx;
  border-left: 6rpx solid #f0ad4e;
  margin-top: 24rpx;
  
  .insight-label {
    display: block;
    font-size: 26rpx;
    font-weight: 600;
    color: #f0ad4e;
    margin-bottom: 8rpx;
  }
  
  .insight-text {
    font-size: 28rpx;
    color: $text-main;
    line-height: 1.7;
  }
}

.key-points {
  background: #f0f7f4;
  padding: 20rpx;
  border-radius: 8rpx;
  margin-top: 16rpx;
  
  .point-label {
    display: block;
    font-size: 24rpx;
    font-weight: 600;
    color: $primary;
    margin-bottom: 8rpx;
  }
  
  .point-text {
    font-size: 26rpx;
    color: $text-secondary;
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

.principle-list {
  .principle-item {
    display: flex;
    align-items: flex-start;
    padding: 12rpx 0;
    
    .principle-num {
      width: 36rpx;
      height: 36rpx;
      background: #f0ad4e;
      color: #fff;
      font-size: 22rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16rpx;
      flex-shrink: 0;
    }
    
    .principle-text {
      font-size: 28rpx;
      color: $text-secondary;
      line-height: 1.6;
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
  
  &.small {
    padding: 16rpx;
  }
  
  .code {
    font-family: 'Menlo', 'Monaco', monospace;
    font-size: 24rpx;
    color: #d4d4d4;
    line-height: 1.7;
    white-space: pre-wrap;
    display: block;
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

.error-box {
  margin-top: 20rpx;
  
  .error-label {
    display: block;
    font-size: 28rpx;
    font-weight: 600;
    color: #e74c3c;
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
