/**
 * 用户 API
 * 目前使用 Mock 数据，后续替换为真实 API 调用
 */

const { isMockEnabled, mockAsync, tutorials, codeSnippets } = require('../mock/index')
const { get, post } = require('../utils/request')

var mockUserInfo = {
  id: 'u001',
  nickname: 'OpenClaw 学习者',
  avatar: '/static/images/default-avatar.png',
  level: 3,
  levelName: '进阶学员',
  joinDate: '2026-01-15',
  totalLearnDays: 45,
  totalLearnMinutes: 1260,
  continuousLearnDays: 7,
  badges: [
    { id: 'b001', name: '初来乍到', icon: '🌱', desc: '完成第一篇教程' },
    { id: 'b002', name: '勤学苦练', icon: '📚', desc: '连续学习 7 天' },
    { id: 'b003', name: '代码收集者', icon: '💎', desc: '收藏 10 个代码片段' }
  ]
}

var mockLearnProgress = {
  totalTutorials: 22,
  completedTutorials: 8,
  completionRate: 36,
  totalSnippets: 32,
  savedSnippets: 12,
  categoryProgress: [
    { category: 'getting-started', name: '入门教程', total: 5, completed: 4, rate: 80 },
    { category: 'core-concepts', name: '核心概念', total: 6, completed: 3, rate: 50 },
    { category: 'agent-dev', name: 'Agent 开发', total: 6, completed: 1, rate: 17 },
    { category: 'deployment', name: '部署配置', total: 5, completed: 0, rate: 0 }
  ],
  recentActivity: [
    { type: 'tutorial', id: 't004', title: 'OpenClaw 基本命令速查', action: 'read', date: '2026-03-24' },
    { type: 'tutorial', id: 't006', title: 'Agent 架构深度解析', action: 'read', date: '2026-03-23' },
    { type: 'code', id: 'c011', title: 'uni-app 网络请求封装', action: 'favorite', date: '2026-03-23' },
    { type: 'tutorial', id: 't010', title: '技能机制', action: 'complete', date: '2026-03-22' },
    { type: 'code', id: 'c017', title: '一键部署脚本', action: 'favorite', date: '2026-03-21' }
  ],
  weeklyLearnMinutes: [30, 45, 60, 25, 50, 40, 35]
}

var mockFavoriteTutorials = ['t001', 't004', 't006', 't010', 't017']
var mockFavoriteSnippets = ['c001', 'c006', 'c011', 'c017', 'c025']

function getUserInfo() {
  if (isMockEnabled('user')) return mockAsync(mockUserInfo)
  return get('/api/user/info')
}

function getLearnProgress() {
  if (isMockEnabled('user')) return mockAsync(mockLearnProgress)
  return get('/api/user/progress')
}

function getFavorites(params) {
  params = params || {}
  if (isMockEnabled('user')) {
    var type = params.type || 'all'
    var page = params.page || 1
    var pageSize = params.pageSize || 10
    var list = []

    if (type === 'all' || type === 'tutorial') {
      tutorials
        .filter(function(t) { return mockFavoriteTutorials.indexOf(t.id) !== -1 })
        .forEach(function(t) { list.push(Object.assign({}, t, { favoriteType: 'tutorial' })) })
    }
    if (type === 'all' || type === 'code') {
      codeSnippets
        .filter(function(c) { return mockFavoriteSnippets.indexOf(c.id) !== -1 })
        .forEach(function(c) { list.push(Object.assign({}, c, { favoriteType: 'code' })) })
    }

    var total = list.length
    var start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return mockAsync({ list: list, total: total })
  }
  return get('/api/user/favorites', params)
}

function toggleFavorite(type, id) {
  if (isMockEnabled('user')) {
    var favorited = false
    var arr = type === 'tutorial' ? mockFavoriteTutorials : mockFavoriteSnippets
    var idx = arr.indexOf(id)
    if (idx > -1) {
      arr.splice(idx, 1)
      favorited = false
    } else {
      arr.push(id)
      favorited = true
    }
    return mockAsync({ favorited: favorited })
  }
  return post('/api/user/favorite', { type: type, id: id })
}

module.exports = {
  getUserInfo: getUserInfo,
  getLearnProgress: getLearnProgress,
  getFavorites: getFavorites,
  toggleFavorite: toggleFavorite
}
