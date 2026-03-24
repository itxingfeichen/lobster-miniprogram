/**
 * Mock 代码片段数据
 * 包含 OpenClaw 常见用法的代码示例
 */

const codeSnippets = [
  {
    "id": "c001",
    "title": "基础 AGENTS.md 模板",
    "description": "标准的 AGENTS.md 配置文件模板。",
    "language": "yaml",
    "code": "# AGENTS.md - 智能助手\n\n## 🎯 你的角色\n你是 **智能助手 Agent**，负责帮助用户完成日常任务。\n\n## 核心能力\n### 你擅长的\n- 📋 任务管理与规划\n- 🔍 信息搜索与整理\n- 📁 文件管理与编辑\n\n### 权限范围\n| 权限 | 状态 | 说明 |\n|------|------|------|\n| **聊天** | ✅ 开启 | 直接沟通 |\n| **文件读写** | ✅ 开启 | 读取/更新文档 |\n| **Shell 命令** | ⚠️ 受限 | 白名单命令 |\n| **网络搜索** | ✅ 开启 | 搜索信息 |\n\n## 工作流程\n1. 理解用户意图\n2. 选择最佳方案\n3. 使用工具完成\n4. 返回结构化结果",
    "tags": [
      "AGENTS.md",
      "配置",
      "模板",
      "入门"
    ],
    "favoriteCount": 342,
    "createdAt": "2026-01-10"
  },
  {
    "id": "c002",
    "title": "多 Agent 协作配置",
    "description": "配置主 Agent 与多个子 Agent 的协作关系。",
    "language": "yaml",
    "code": "# AGENTS.md - 主协调者\n\n## 🎯 你的角色\n你是**主协调者 Agent**，负责任务拆分、分配、汇总。\n\n## 子 Agent 列表\n| Agent | 专长 |\n|-------|------|\n| product_manager | 产品需求、PRD |\n| coder | 技术开发、代码 |\n| health_agent | 健康数据、建议 |\n\n## 任务分配决策树\n- 产品需求 → product_manager\n- 代码开发 → coder\n- 健康管理 → health_agent\n- 综合项目 → 拆分后分别分配\n\n## 协作规则\n- 给子 Agent 足够上下文\n- 不轮询状态，等待推送\n- 结果汇总后向用户呈现",
    "tags": [
      "多Agent",
      "协作",
      "配置",
      "架构"
    ],
    "favoriteCount": 256,
    "createdAt": "2026-01-15"
  },
  {
    "id": "c003",
    "title": "代码审查 Agent 配置",
    "description": "专门用于代码审查的 Agent 配置。",
    "language": "yaml",
    "code": "# AGENTS.md - 代码审查 Agent\n\n## 🎯 你的角色\n你是 **代码审查专家 Agent**。\n\n## 审查标准\n### 🔴 严重问题（必须修复）\n- 安全漏洞（SQL注入、XSS等）\n- 未处理的异常和错误\n- 内存泄漏风险\n\n### 🟡 中等问题（建议修复）\n- 代码重复（DRY 原则）\n- 命名不规范\n- 缺少注释\n\n### 🟢 轻微问题\n- 格式不一致\n- 建议使用更现代的语法\n\n## 报告格式\n# 代码审查报告\n## 概要\n- 文件数：X | 问题数：Y | 严重：Z",
    "tags": [
      "代码审查",
      "Agent",
      "配置",
      "质量"
    ],
    "favoriteCount": 189,
    "createdAt": "2026-01-20"
  },
  {
    "id": "c004",
    "title": "SOUL.md 基础模板",
    "description": "通用的 SOUL.md 人格配置模板。",
    "language": "yaml",
    "code": "# SOUL.md - Agent 的灵魂\n\n## 核心信念\n**用户的成功就是我的成功。**\n\n## 你的性格\n- **专业** - 准确可靠的信息\n- **友善** - 温和清晰\n- **主动** - 预见需求并建议\n- **诚实** - 不确定时坦率承认\n\n## 决策原则\n| 场景 | 原则 |\n|------|------|\n| 信息不足 | 询问而非猜测 |\n| 多个方案 | 列出优劣让用户选 |\n| 出现错误 | 承认并立即纠正 |\n| 复杂任务 | 拆解为可管理步骤 |\n\n## 禁止行为\n- ❌ 不编造不确定的信息\n- ❌ 不执行可能有害的操作\n- ❌ 不泄露敏感配置信息",
    "tags": [
      "SOUL.md",
      "人格",
      "配置",
      "模板"
    ],
    "favoriteCount": 298,
    "createdAt": "2026-01-12"
  },
  {
    "id": "c005",
    "title": "严谨技术风格 SOUL.md",
    "description": "适合技术型 Agent 的人格配置。",
    "language": "yaml",
    "code": "# SOUL.md - 技术专家的灵魂\n\n## 核心信念\n**代码是给人读的，顺便给机器执行。**\n\n## 你的性格\n- **严谨** - 每个细节要准确\n- **系统化** - 结构化分析问题\n- **务实** - 选择经过验证的方案\n- **耐心** - 不急于给出结论\n\n## 代码审美\n- 变量命名要有语义\n- 函数职责要单一\n- 注释解释\"为什么\"\n- 错误处理要完善\n\n## 技术立场\n- TypeScript > JavaScript\n- 函数式编程风格\n- 测试驱动开发",
    "tags": [
      "SOUL.md",
      "技术风格",
      "严谨",
      "专家"
    ],
    "favoriteCount": 167,
    "createdAt": "2026-01-18"
  },
  {
    "id": "c006",
    "title": "文件读写操作示例",
    "description": "使用 read/write/edit 工具进行文件操作。",
    "language": "javascript",
    "code": "// OpenClaw 文件操作示例\n\n// 1. 读取文件\nread({ path: '/path/to/file.js', offset: 1, limit: 50 })\n\n// 2. 写入文件（自动创建父目录）\nwrite({\n  path: '/path/to/new-file.js',\n  content: 'const greeting = \"Hello, OpenClaw!\";\\nconsole.log(greeting);'\n})\n\n// 3. 精确编辑文件\nedit({\n  path: '/path/to/file.js',\n  old_string: 'const greeting = \"Hello, OpenClaw!\";',\n  new_string: 'const greeting = \"Hello, World!\";'\n})\n\n// 4. 读取图片文件（jpg, png, gif, webp）\nread({ path: '/path/to/screenshot.png' })",
    "tags": [
      "文件操作",
      "read",
      "write",
      "edit",
      "工具"
    ],
    "favoriteCount": 234,
    "createdAt": "2026-01-22"
  },
  {
    "id": "c007",
    "title": "Shell 命令执行示例",
    "description": "使用 exec 工具执行 Shell 命令。",
    "language": "javascript",
    "code": "// Shell 命令执行示例\n\n// 基础命令\nexec({ command: 'ls -la /home/user', workdir: '/home/user' })\n\n// 带超时\nexec({ command: 'npm install', workdir: '/project', timeout: 60 })\n\n// 后台运行\nexec({ command: 'node server.js', background: true })\n\n// 带环境变量\nexec({\n  command: 'node app.js',\n  env: { NODE_ENV: 'production', PORT: '3000' }\n})\n\n// 管理后台进程\nprocess({ action: 'list' })\nprocess({ action: 'log', sessionId: 'id', limit: 100 })",
    "tags": [
      "exec",
      "Shell",
      "命令",
      "后台",
      "工具"
    ],
    "favoriteCount": 198,
    "createdAt": "2026-01-25"
  },
  {
    "id": "c008",
    "title": "网络搜索与内容提取",
    "description": "使用 web_search 和 web_fetch 工具。",
    "language": "javascript",
    "code": "// 网络操作示例\n\n// 网络搜索\nweb_search({\n  query: 'OpenClaw AI Agent 教程',\n  count: 5,\n  country: 'CN',\n  search_lang: 'zh',\n  freshness: 'pm'\n})\n\n// 提取网页内容（Markdown）\nweb_fetch({\n  url: 'https://docs.example.com/guide',\n  extractMode: 'markdown',\n  maxChars: 10000\n})\n\n// 提取网页内容（纯文本）\nweb_fetch({\n  url: 'https://api.example.com/docs',\n  extractMode: 'text',\n  maxChars: 5000\n})",
    "tags": [
      "web_search",
      "web_fetch",
      "搜索",
      "爬取",
      "工具"
    ],
    "favoriteCount": 176,
    "createdAt": "2026-01-28"
  },
  {
    "id": "c009",
    "title": "子 Agent 管理示例",
    "description": "使用 subagents 工具管理子 Agent。",
    "language": "javascript",
    "code": "// 子 Agent 管理示例\n\n// 查看活跃的子 Agent\nsubagents({ action: 'list', recentMinutes: 30 })\n\n// 向子 Agent 发送指导\nsubagents({\n  action: 'steer',\n  target: 'subagent-session-id',\n  message: '请优先完成数据库模块'\n})\n\n// 终止子 Agent\nsubagents({ action: 'kill', target: 'subagent-session-id' })\n\n// 注意：\n// - 完成后自动推送，不需要轮询\n// - 用 steer 调整方向而非重建\n// - 深度限制通常 1-2 层",
    "tags": [
      "subagents",
      "子Agent",
      "管理",
      "协作"
    ],
    "favoriteCount": 145,
    "createdAt": "2026-02-01"
  },
  {
    "id": "c010",
    "title": "浏览器自动化操作",
    "description": "使用 browser 工具进行网页自动化。",
    "language": "javascript",
    "code": "// 浏览器自动化示例\n\n// 打开网页\nbrowser({ action: 'open', url: 'https://github.com', profile: 'openclaw' })\n\n// 获取页面快照\nbrowser({ action: 'snapshot', refs: 'aria' })\n\n// 点击元素\nbrowser({ action: 'act', kind: 'click', ref: 'e12' })\n\n// 输入文本\nbrowser({ action: 'act', kind: 'type', ref: 'e15', text: 'OpenClaw' })\n\n// 截图\nbrowser({ action: 'screenshot', type: 'png', fullPage: true })\n\n// 导航\nbrowser({ action: 'navigate', url: 'https://github.com/search' })",
    "tags": [
      "browser",
      "浏览器",
      "自动化",
      "截图",
      "工具"
    ],
    "favoriteCount": 212,
    "createdAt": "2026-02-05"
  },
  {
    "id": "c011",
    "title": "uni-app 网络请求封装",
    "description": "基于 uni.request 的网络请求封装。",
    "language": "javascript",
    "code": "const BASE_URL = 'https://api.example.com'\n\nfunction getToken() {\n  return uni.getStorageSync('access_token') || ''\n}\n\nexport function request(options) {\n  return new Promise((resolve, reject) => {\n    uni.request({\n      url: BASE_URL + options.url,\n      method: options.method || 'GET',\n      data: options.data || {},\n      header: {\n        'Content-Type': 'application/json',\n        'Authorization': getToken() ? 'Bearer ' + getToken() : '',\n        ...options.header\n      },\n      timeout: 10000,\n      success: (res) => {\n        if (res.statusCode === 200 && res.data.code === 0) {\n          resolve(res.data.data)\n        } else if (res.statusCode === 401) {\n          uni.navigateTo({ url: '/pages/login/index' })\n          reject(res)\n        } else {\n          uni.showToast({ title: '请求失败', icon: 'none' })\n          reject(res)\n        }\n      },\n      fail: (err) => {\n        uni.showToast({ title: '网络连接失败', icon: 'none' })\n        reject(err)\n      }\n    })\n  })\n}\n\nexport const get = (url, data) => request({ url, method: 'GET', data })\nexport const post = (url, data) => request({ url, method: 'POST', data })",
    "tags": [
      "uni-app",
      "请求封装",
      "HTTP",
      "API"
    ],
    "favoriteCount": 289,
    "createdAt": "2026-02-08"
  },
  {
    "id": "c012",
    "title": "Gateway 健康检查脚本",
    "description": "定期检查 Gateway 状态，支持自动重启。",
    "language": "shell",
    "code": "#!/bin/bash\n# Gateway 健康检查脚本\nLOG=\"/var/log/openclaw-healthcheck.log\"\nMAX_RETRIES=3\n\nlog() { echo \"[$( date '+%Y-%m-%d %H:%M:%S' )] $1\" | tee -a \"$LOG\"; }\n\ncheck() { openclaw gateway status > /dev/null 2>&1; }\n\nrestart() {\n  for i in $(seq 1 $MAX_RETRIES); do\n    log \"尝试重启 Gateway (第 $i 次)...\"\n    openclaw gateway restart\n    sleep 10\n    check && { log \"✅ 重启成功\"; return 0; }\n  done\n  log \"❌ 重启失败\"; return 1\n}\n\ncheck && log \"✅ 运行正常\" || {\n  log \"⚠️ 异常，开始重启...\"\n  restart || log \"🚨 需要人工介入！\"\n}",
    "tags": [
      "健康检查",
      "Shell",
      "运维",
      "自动重启"
    ],
    "favoriteCount": 156,
    "createdAt": "2026-02-10"
  },
  {
    "id": "c013",
    "title": "systemd 服务配置",
    "description": "将 Gateway 注册为 systemd 服务。",
    "language": "shell",
    "code": "# /etc/systemd/system/openclaw-gateway.service\n[Unit]\nDescription=OpenClaw Gateway Service\nAfter=network-online.target\n\n[Service]\nType=simple\nUser=openclaw\nWorkingDirectory=/home/openclaw/.openclaw/workspace\nExecStart=/usr/local/bin/openclaw gateway start --foreground\nRestart=always\nRestartSec=10\nNoNewPrivileges=true\nPrivateTmp=true\nLimitNOFILE=65536\nMemoryMax=2G\nEnvironment=NODE_ENV=production\nEnvironmentFile=-/home/openclaw/.openclaw/.env\n\n[Install]\nWantedBy=multi-user.target\n\n# sudo systemctl daemon-reload\n# sudo systemctl enable openclaw-gateway\n# sudo systemctl start openclaw-gateway",
    "tags": [
      "systemd",
      "服务",
      "部署",
      "自启动"
    ],
    "favoriteCount": 178,
    "createdAt": "2026-02-12"
  },
  {
    "id": "c014",
    "title": "Nginx 反向代理配置",
    "description": "为 Gateway 配置 Nginx 反向代理。",
    "language": "shell",
    "code": "upstream openclaw_backend {\n    server 127.0.0.1:3000;\n    keepalive 32;\n}\n\nserver {\n    listen 80;\n    server_name openclaw.yourdomain.com;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name openclaw.yourdomain.com;\n\n    ssl_certificate /etc/letsencrypt/live/openclaw.yourdomain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/openclaw.yourdomain.com/privkey.pem;\n\n    location / {\n        proxy_pass http://openclaw_backend;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"upgrade\";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_read_timeout 86400;\n    }\n}",
    "tags": [
      "Nginx",
      "反向代理",
      "HTTPS",
      "WebSocket"
    ],
    "favoriteCount": 201,
    "createdAt": "2026-02-15"
  },
  {
    "id": "c015",
    "title": "SKILL.md 技能描述模板",
    "description": "标准的 SKILL.md 模板。",
    "language": "yaml",
    "code": "# Weather Skill - 天气查询技能\n\n## 描述\n获取全球任意城市的当前天气和天气预报。\n\n## 触发条件\n用户提到天气、温度、下雨、天气预报等关键词时激活。\n\n## 使用方法\n1. 识别城市名\n2. 调用 wttr.in API\n3. 解析 JSON 数据\n4. 格式化输出\n\n## 输出格式\n🌤️ [城市] 天气\n温度：XX°C\n湿度：XX%\n风速：XX km/h\n\n## 依赖\n- curl 命令行工具\n- 网络访问权限",
    "tags": [
      "SKILL.md",
      "技能",
      "模板",
      "天气"
    ],
    "favoriteCount": 134,
    "createdAt": "2026-02-18"
  },
  {
    "id": "c016",
    "title": "Markdown 转 HTML 脚本",
    "description": "技能脚本示例。",
    "language": "javascript",
    "code": "#!/usr/bin/env node\nconst fs = require('fs')\n\nfunction parseMarkdown(md) {\n  return md\n    .replace(/^### (.*$)/gm, '<h3>$1</h3>')\n    .replace(/^## (.*$)/gm, '<h2>$1</h2>')\n    .replace(/^# (.*$)/gm, '<h1>$1</h1>')\n    .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')\n    .replace(/\\*(.+?)\\*/g, '<em>$1</em>')\n    .replace(/`(.+?)`/g, '<code>$1</code>')\n    .replace(/^- (.*$)/gm, '<li>$1</li>')\n}\n\nconst input = process.argv[2]\nif (!input) { console.error('用法: node md2html.js <input.md>'); process.exit(1) }\nconst md = fs.readFileSync(input, 'utf-8')\nconst html = '<!DOCTYPE html><html><head><meta charset=\"UTF-8\">' +\n  '<style>body{font-family:sans-serif;max-width:800px;margin:0 auto;padding:20px}' +\n  'code{background:#f5f5f5;padding:2px 6px;border-radius:3px}</style></head>' +\n  '<body>' + parseMarkdown(md) + '</body></html>'\nconst output = process.argv[3] || input.replace(/\\.md$/, '.html')\nfs.writeFileSync(output, html)\nconsole.log('✅ 转换成功:', output)",
    "tags": [
      "技能脚本",
      "Markdown",
      "HTML",
      "转换"
    ],
    "favoriteCount": 123,
    "createdAt": "2026-02-20"
  },
  {
    "id": "c017",
    "title": "一键部署 OpenClaw 脚本",
    "description": "自动化安装和配置 OpenClaw。",
    "language": "shell",
    "code": "#!/bin/bash\nset -euo pipefail\n\nlog_info() { echo -e \"\\033[0;32m[INFO]\\033[0m $1\"; }\nlog_error() { echo -e \"\\033[0;31m[ERROR]\\033[0m $1\"; }\n\ncheck_system() {\n  [[ -f /etc/debian_version ]] || { log_error \"仅支持 Debian/Ubuntu\"; exit 1; }\n}\n\ninstall_nodejs() {\n  command -v node &>/dev/null && { log_info \"Node.js: $(node -v)\"; return; }\n  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -\n  sudo apt-get install -y nodejs\n}\n\ninstall_openclaw() {\n  npm install -g pnpm\n  pnpm add -g openclaw\n  log_info \"OpenClaw 安装完成\"\n}\n\ninit_workspace() {\n  local ws=\"$HOME/.openclaw/workspace\"\n  [[ -d \"$ws\" ]] && return 0\n  mkdir -p \"$ws\" && cd \"$ws\" && openclaw init\n}\n\necho \"==== OpenClaw 一键部署 ====\"\ncheck_system && install_nodejs && install_openclaw && init_workspace\nlog_info \"🎉 部署完成！运行: openclaw gateway start\"",
    "tags": [
      "部署",
      "一键安装",
      "Shell",
      "自动化"
    ],
    "favoriteCount": 267,
    "createdAt": "2026-02-22"
  },
  {
    "id": "c018",
    "title": "Docker Compose 部署",
    "description": "使用 Docker Compose 部署 OpenClaw。",
    "language": "yaml",
    "code": "version: '3.8'\n\nservices:\n  openclaw-gateway:\n    image: node:22-slim\n    container_name: openclaw-gateway\n    volumes:\n      - openclaw-data:/home/openclaw/.openclaw\n    environment:\n      - NODE_ENV=production\n      - TZ=Asia/Shanghai\n    env_file: [.env]\n    command: sh -c \"npm i -g pnpm && pnpm add -g openclaw && openclaw gateway start --foreground\"\n    restart: always\n    networks: [openclaw-net]\n    healthcheck:\n      test: [\"CMD\", \"openclaw\", \"gateway\", \"status\"]\n      interval: 30s\n      retries: 3\n\n  nginx:\n    image: nginx:alpine\n    ports: [\"80:80\", \"443:443\"]\n    volumes: [./nginx.conf:/etc/nginx/conf.d/default.conf:ro]\n    depends_on:\n      openclaw-gateway: { condition: service_healthy }\n    restart: always\n    networks: [openclaw-net]\n\nvolumes:\n  openclaw-data:\n\nnetworks:\n  openclaw-net:",
    "tags": [
      "Docker",
      "Compose",
      "部署",
      "容器"
    ],
    "favoriteCount": 234,
    "createdAt": "2026-02-25"
  },
  {
    "id": "c019",
    "title": "日志分析脚本",
    "description": "Python 日志分析工具。",
    "language": "python",
    "code": "#!/usr/bin/env python3\n\"\"\"OpenClaw Gateway 日志分析\"\"\"\nimport re, sys\nfrom collections import Counter\n\ndef analyze(log_file):\n    levels = Counter()\n    errors = []\n    total = 0\n    with open(log_file) as f:\n        for line in f:\n            total += 1\n            m = re.match(r'\\[(.*?)\\] (\\w+) (.+)', line.strip())\n            if not m: continue\n            levels[m.group(2)] += 1\n            if m.group(2) == 'ERROR':\n                errors.append(f\"  [{m.group(1)}] {m.group(3)[:80]}\")\n    \n    print(f\"总行数: {total}\")\n    for lv, cnt in levels.most_common():\n        print(f\"  {lv}: {cnt} ({cnt/total*100:.1f}%)\")\n    if errors:\n        print(f\"\\n最近错误:\")\n        for e in errors[-5:]: print(e)\n\nif __name__ == '__main__':\n    analyze(sys.argv[1] if len(sys.argv) > 1 else '/var/log/openclaw.log')",
    "tags": [
      "日志分析",
      "Python",
      "监控",
      "运维"
    ],
    "favoriteCount": 145,
    "createdAt": "2026-02-28"
  },
  {
    "id": "c020",
    "title": "TOOLS.md 工具清单模板",
    "description": "标准的 TOOLS.md 配置模板。",
    "language": "yaml",
    "code": "# TOOLS.md - Agent 工具清单\n\n## 子 Agent 列表\n| Agent | 专长 |\n|-------|------|\n| product_manager | 产品需求、PRD |\n| coder | 技术开发 |\n\n## 进度跟踪\n| ID | 描述 | Agent | 状态 |\n|----|------|-------|------|\n| T-001 | 项目初始化 | coder | ✅ 完成 |\n| T-002 | API 服务层 | coder | 🔄 进行中 |\n\n## 工具优先级\n1. 小改动 → edit\n2. 新文件 → write\n3. 查看 → read\n\n## 安全级别\n- 🟢 安全：git, npm, node, ls\n- 🟡 谨慎：rm, mv, chmod\n- 🔴 禁止：sudo rm -rf",
    "tags": [
      "TOOLS.md",
      "工具清单",
      "配置",
      "模板"
    ],
    "favoriteCount": 189,
    "createdAt": "2026-03-01"
  },
  {
    "id": "c021",
    "title": "Git 工作流脚本",
    "description": "自动化 Git 分支管理和提交。",
    "language": "shell",
    "code": "#!/bin/bash\n# 用法: ./git-flow.sh <task-id> <description>\nset -euo pipefail\n\nTASK_ID=\"$1\"; DESC=\"$2\"; MAIN=\"main\"\n\necho \"📥 更新 main...\"\ngit checkout \"$MAIN\" && git pull origin \"$MAIN\" --rebase\n\nBRANCH=\"feat/$TASK_ID-$(echo \"$DESC\" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')\"\necho \"🌿 创建分支: $BRANCH\"\ngit checkout -b \"$BRANCH\"\n\necho \"✅ 分支创建成功！\"\necho \"  git add . && git commit -m 'feat: $DESC'\"\necho \"  git push origin $BRANCH\"\necho \"  gh pr create --title 'feat: TASK-$TASK_ID $DESC' --base $MAIN\"",
    "tags": [
      "Git",
      "工作流",
      "自动化",
      "Shell"
    ],
    "favoriteCount": 178,
    "createdAt": "2026-03-03"
  },
  {
    "id": "c022",
    "title": "USER.md 用户信息模板",
    "description": "记录用户偏好和项目背景。",
    "language": "yaml",
    "code": "# USER.md - 关于你的服务用户\n\n## 用户信息\n| 字段 | 内容 |\n|------|------|\n| 称呼 | 小明 |\n| 身份 | 全栈开发者 |\n| 偏好 | 简洁直接 |\n\n## 技术栈\n- 前端：Vue.js 3 / uni-app\n- 后端：Node.js / Python\n- 工具：VS Code / Git / Docker\n\n## 当前项目\n| 字段 | 内容 |\n|------|------|\n| 名称 | OpenClaw 教程小程序 |\n| 类型 | uni-app 小程序 |\n| 阶段 | 开发中 |",
    "tags": [
      "USER.md",
      "用户信息",
      "配置",
      "个性化"
    ],
    "favoriteCount": 112,
    "createdAt": "2026-03-05"
  },
  {
    "id": "c023",
    "title": "IDENTITY.md 身份配置",
    "description": "Agent 身份配置模板。",
    "language": "yaml",
    "code": "# IDENTITY.md - Who Am I?\n\n- **Name:** 龙虾助手 (Lobster)\n- **Creature:** AI Agent - 数字龙虾 🦞\n- **Vibe:** 热情、专业、略带幽默\n- **Emoji:** 🦞\n- **Avatar:** avatars/lobster.png\n\n## 自我认知\n我是龙虾助手，运行在 OpenClaw 上的 AI Agent。\n使命是帮助用户学习 OpenClaw。\n\n## 口头禅\n- \"让我们探索代码的海洋！🦞\"\n- \"每行代码都通向解决方案。\"",
    "tags": [
      "IDENTITY.md",
      "身份",
      "人格",
      "配置"
    ],
    "favoriteCount": 98,
    "createdAt": "2026-03-07"
  },
  {
    "id": "c024",
    "title": "Canvas 数据看板",
    "description": "Canvas 数据看板 HTML 模板。",
    "language": "javascript",
    "code": "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body { font-family: -apple-system, sans-serif; background: #f5f7fa; padding: 20px; }\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }\n    .card { background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }\n    .label { font-size: 13px; color: #888; }\n    .value { font-size: 28px; font-weight: 700; margin-top: 8px; }\n    .trend { font-size: 12px; color: #22c55e; margin-top: 4px; }\n  </style>\n</head>\n<body>\n  <h1 style=\"text-align:center;margin-bottom:24px\">🦞 学习数据看板</h1>\n  <div class=\"grid\" id=\"cards\"></div>\n  <script>\n    [\n      { label: '已学教程', value: 12, trend: '+3' },\n      { label: '收藏片段', value: 28, trend: '+5' },\n      { label: '学习时长', value: '6.5h', trend: '+1.2h' },\n      { label: '完成进度', value: '67%', trend: '+8%' },\n    ].forEach(d => {\n      cards.innerHTML += '<div class=\"card\"><div class=\"label\">' + d.label +\n        '</div><div class=\"value\">' + d.value +\n        '</div><div class=\"trend\">' + d.trend + ' 本周</div></div>';\n    });\n  </script>\n</body>\n</html>",
    "tags": [
      "Canvas",
      "看板",
      "HTML",
      "可视化"
    ],
    "favoriteCount": 167,
    "createdAt": "2026-03-08"
  },
  {
    "id": "c025",
    "title": "环境变量配置模板",
    "description": "OpenClaw .env 配置文件模板。",
    "language": "shell",
    "code": "# .env - OpenClaw 环境变量（不要提交到 Git！）\n\n# AI 模型\nMODEL_PROVIDER=openai\nMODEL_NAME=gpt-4\nMODEL_API_KEY=sk-xxxxxxxxxxxxxxxx\n\n# Gateway\nGATEWAY_PORT=3000\nGATEWAY_HOST=0.0.0.0\n\n# QQ Bot\nQQBOT_APP_ID=your-app-id\nQQBOT_APP_SECRET=your-app-secret\nQQBOT_TOKEN=your-token\n\n# 安全\nEXEC_SECURITY=allowlist\nEXEC_ALLOWLIST=git,npm,node,pnpm,ls,cat,head,tail,grep\n\n# 其他\nTZ=Asia/Shanghai\nNODE_ENV=production",
    "tags": [
      "环境变量",
      ".env",
      "配置",
      "安全"
    ],
    "favoriteCount": 223,
    "createdAt": "2026-03-10"
  },
  {
    "id": "c026",
    "title": "package.json 项目配置",
    "description": "uni-app 小程序 package.json。",
    "language": "json",
    "code": "{\n  \"name\": \"openclaw-tutorial-miniprogram\",\n  \"version\": \"1.0.0\",\n  \"description\": \"OpenClaw 教程学习小程序\",\n  \"scripts\": {\n    \"dev:mp-weixin\": \"uni -p mp-weixin\",\n    \"build:mp-weixin\": \"uni build -p mp-weixin\",\n    \"dev:h5\": \"uni\",\n    \"build:h5\": \"uni build\",\n    \"lint\": \"eslint --ext .js,.vue src/\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"vue\": \"^3.4.0\",\n    \"pinia\": \"^2.1.0\",\n    \"uview-ui\": \"^2.0.0\"\n  },\n  \"devDependencies\": {\n    \"@dcloudio/uni-app\": \"^3.0.0\",\n    \"eslint\": \"^8.50.0\",\n    \"sass\": \"^1.69.0\"\n  },\n  \"engines\": { \"node\": \">=18.0.0\" }\n}",
    "tags": [
      "package.json",
      "uni-app",
      "项目配置",
      "npm"
    ],
    "favoriteCount": 156,
    "createdAt": "2026-03-12"
  },
  {
    "id": "c027",
    "title": "Crontab 定时任务配置",
    "description": "OpenClaw 相关定时任务。",
    "language": "shell",
    "code": "# OpenClaw Crontab 定时任务\n\n# 健康检查（每 5 分钟）\n*/5 * * * * /home/openclaw/scripts/healthcheck.sh >> /var/log/cron.log 2>&1\n\n# 工作空间备份（每天 2 点）\n0 2 * * * tar -czf /backup/openclaw-$(date +\\%Y\\%m\\%d).tar.gz ~/.openclaw/workspace\n\n# 日志清理（每天 3 点，保留 30 天）\n0 3 * * * find /var/log/openclaw-*.log -mtime +30 -delete\n\n# SSL 续期（每月 1 日）\n0 0 1 * * certbot renew --quiet --post-hook \"systemctl reload nginx\"\n\n# Git 自动备份（每天 4 点）\n0 4 * * * cd ~/.openclaw/workspace && git add -A && git commit -m \"backup\" 2>/dev/null || true",
    "tags": [
      "Crontab",
      "定时任务",
      "备份",
      "运维"
    ],
    "favoriteCount": 134,
    "createdAt": "2026-03-14"
  },
  {
    "id": "c028",
    "title": "Vue 3 教程卡片组件",
    "description": "uni-app 教程卡片组件。",
    "language": "javascript",
    "code": "<template>\n  <view class=\"tutorial-card\" @click=\"goToDetail\">\n    <view class=\"card-header\">\n      <text class=\"difficulty\" :class=\"tutorial.difficulty\">\n        {{ difficultyMap[tutorial.difficulty] }}\n      </text>\n    </view>\n    <text class=\"title\">{{ tutorial.title }}</text>\n    <text class=\"summary\">{{ tutorial.summary }}</text>\n    <view class=\"tags\">\n      <text v-for=\"tag in tutorial.tags\" :key=\"tag\" class=\"tag\">{{ tag }}</text>\n    </view>\n    <view class=\"footer\">\n      <text>👁️ {{ formatCount(tutorial.readCount) }}</text>\n      <text>👍 {{ formatCount(tutorial.likeCount) }}</text>\n    </view>\n  </view>\n</template>\n\n<script setup>\nconst props = defineProps({ tutorial: { type: Object, required: true } })\nconst difficultyMap = { beginner: '入门', intermediate: '进阶', advanced: '高级' }\nconst formatCount = n => n >= 1000 ? (n/1000).toFixed(1) + 'k' : String(n)\nconst goToDetail = () => uni.navigateTo({ url: '/pages/tutorial/detail?id=' + props.tutorial.id })\n</script>\n\n<style scoped>\n.tutorial-card { background: #fff; border-radius: 12px; padding: 16px; margin-bottom: 12px; }\n.title { font-size: 16px; font-weight: 600; display: block; margin: 8px 0; }\n.summary { font-size: 13px; color: #666; }\n.tag { background: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin-right: 6px; }\n</style>",
    "tags": [
      "Vue 3",
      "uni-app",
      "组件",
      "卡片"
    ],
    "favoriteCount": 189,
    "createdAt": "2026-03-16"
  },
  {
    "id": "c029",
    "title": "Mock 数据开关管理器",
    "description": "统一管理 Mock 数据开关。",
    "language": "javascript",
    "code": "/**\n * Mock 数据管理器\n */\nconst MOCK_CONFIG = {\n  enabled: true,\n  modules: { tutorial: true, code: true, user: true },\n  delay: 300,\n  failureRate: 0,\n}\n\nfunction isMockEnabled(module) {\n  if (!MOCK_CONFIG.enabled) return false\n  if (module && MOCK_CONFIG.modules[module] !== undefined)\n    return MOCK_CONFIG.modules[module]\n  return MOCK_CONFIG.enabled\n}\n\nfunction mockRequest(data) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() < MOCK_CONFIG.failureRate)\n        return reject(new Error('Mock: 模拟请求失败'))\n      resolve({ code: 0, message: 'success', data })\n    }, MOCK_CONFIG.delay)\n  })\n}\n\nfunction setMockConfig(config) { Object.assign(MOCK_CONFIG, config) }\n\nmodule.exports = { isMockEnabled, mockRequest, setMockConfig, MOCK_CONFIG }",
    "tags": [
      "Mock",
      "数据管理",
      "开关",
      "开发工具"
    ],
    "favoriteCount": 156,
    "createdAt": "2026-03-18"
  },
  {
    "id": "c030",
    "title": "GitHub Actions CI/CD",
    "description": "GitHub Actions 配置。",
    "language": "yaml",
    "code": "name: CI/CD Pipeline\n\non:\n  push: { branches: [main] }\n  pull_request: { branches: [main] }\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '22', cache: 'npm' }\n      - run: npm ci\n      - run: npm run lint\n\n  test:\n    needs: lint\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '22', cache: 'npm' }\n      - run: npm ci && npm test -- --coverage\n\n  build:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '22', cache: 'npm' }\n      - run: npm ci && npm run build:mp-weixin\n      - uses: actions/upload-artifact@v4\n        with: { name: mp-weixin-dist, path: dist/build/mp-weixin/ }",
    "tags": [
      "GitHub Actions",
      "CI/CD",
      "自动化",
      "部署"
    ],
    "favoriteCount": 201,
    "createdAt": "2026-03-20"
  },
  {
    "id": "c031",
    "title": "小程序页面路由配置",
    "description": "pages.json 路由配置。",
    "language": "json",
    "code": "{\n  \"pages\": [\n    { \"path\": \"pages/index/index\", \"style\": { \"navigationBarTitleText\": \"OpenClaw 教程\" } },\n    { \"path\": \"pages/learn/index\", \"style\": { \"navigationBarTitleText\": \"学习中心\" } },\n    { \"path\": \"pages/code/index\", \"style\": { \"navigationBarTitleText\": \"代码片段\" } },\n    { \"path\": \"pages/mine/index\", \"style\": { \"navigationBarTitleText\": \"我的\" } },\n    { \"path\": \"pages/tutorial/detail\", \"style\": { \"navigationBarTitleText\": \"教程详情\" } }\n  ],\n  \"globalStyle\": {\n    \"navigationBarTextStyle\": \"black\",\n    \"navigationBarTitleText\": \"OpenClaw\",\n    \"backgroundColor\": \"#f5f7fa\"\n  },\n  \"tabBar\": {\n    \"color\": \"#999\",\n    \"selectedColor\": \"#1890ff\",\n    \"list\": [\n      { \"pagePath\": \"pages/index/index\", \"text\": \"首页\" },\n      { \"pagePath\": \"pages/learn/index\", \"text\": \"学习\" },\n      { \"pagePath\": \"pages/code/index\", \"text\": \"代码\" },\n      { \"pagePath\": \"pages/mine/index\", \"text\": \"我的\" }\n    ]\n  }\n}",
    "tags": [
      "pages.json",
      "路由",
      "uni-app",
      "tabBar"
    ],
    "favoriteCount": 145,
    "createdAt": "2026-03-22"
  },
  {
    "id": "c032",
    "title": "Pinia 状态管理示例",
    "description": "使用 Pinia 管理学习状态。",
    "language": "javascript",
    "code": "import { defineStore } from 'pinia'\n\nexport const useLearningStore = defineStore('learning', {\n  state: () => ({\n    completedTutorials: [],\n    readHistory: [],\n    favoriteTutorials: [],\n    favoriteSnippets: [],\n    preferences: { fontSize: 16, theme: 'light' }\n  }),\n  getters: {\n    completionRate: s => Math.round((s.completedTutorials.length / 22) * 100),\n    isFavorited: s => (type, id) => {\n      const list = type === 'tutorial' ? s.favoriteTutorials : s.favoriteSnippets\n      return list.includes(id)\n    },\n    learningDays: s => new Set(s.readHistory.map(r => r.date)).size\n  },\n  actions: {\n    completeTutorial(id) {\n      if (!this.completedTutorials.includes(id)) {\n        this.completedTutorials.push(id)\n        this.save()\n      }\n    },\n    toggleFavorite(type, id) {\n      const list = type === 'tutorial' ? this.favoriteTutorials : this.favoriteSnippets\n      const idx = list.indexOf(id)\n      idx > -1 ? list.splice(idx, 1) : list.push(id)\n      this.save()\n    },\n    addHistory(tutorialId) {\n      this.readHistory.unshift({ tutorialId, date: new Date().toISOString().split('T')[0] })\n      if (this.readHistory.length > 100) this.readHistory.length = 100\n      this.save()\n    },\n    save() {\n      uni.setStorageSync('learning', {\n        completedTutorials: this.completedTutorials,\n        favoriteTutorials: this.favoriteTutorials,\n        favoriteSnippets: this.favoriteSnippets,\n        readHistory: this.readHistory,\n        preferences: this.preferences\n      })\n    },\n    load() {\n      const s = uni.getStorageSync('learning')\n      if (s) Object.assign(this, s)\n    }\n  }\n})",
    "tags": [
      "Pinia",
      "状态管理",
      "Vue 3",
      "小程序"
    ],
    "favoriteCount": 178,
    "createdAt": "2026-03-24"
  }
]

const languages = [
  {
    "id": "javascript",
    "name": "JavaScript",
    "icon": "🟨",
    "count": 10
  },
  {
    "id": "yaml",
    "name": "YAML / Markdown",
    "icon": "📄",
    "count": 8
  },
  {
    "id": "shell",
    "name": "Shell / Bash",
    "icon": "🖥️",
    "count": 7
  },
  {
    "id": "json",
    "name": "JSON",
    "icon": "📋",
    "count": 4
  },
  {
    "id": "python",
    "name": "Python",
    "icon": "🐍",
    "count": 3
  }
]

module.exports = {
  codeSnippets,
  languages
}
