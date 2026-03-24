/**
 * 教程 API
 * 目前使用 Mock 数据，后续替换为真实 API 调用
 */

const { isMockEnabled, mockAsync, tutorials, categories } = require('../mock/index')
const { get } = require('../utils/request')

function getTutorialList(params) {
  params = params || {}
  if (isMockEnabled('tutorial')) {
    var category = params.category || ''
    var difficulty = params.difficulty || ''
    var keyword = params.keyword || ''
    var page = params.page || 1
    var pageSize = params.pageSize || 10
    var sort = params.sort || 'newest'

    var list = tutorials.slice()

    if (category) {
      list = list.filter(function(t) { return t.category === category })
    }
    if (difficulty) {
      list = list.filter(function(t) { return t.difficulty === difficulty })
    }
    if (keyword) {
      var kw = keyword.toLowerCase()
      list = list.filter(function(t) {
        return t.title.toLowerCase().indexOf(kw) !== -1 ||
          t.summary.toLowerCase().indexOf(kw) !== -1 ||
          t.tags.some(function(tag) { return tag.toLowerCase().indexOf(kw) !== -1 })
      })
    }

    if (sort === 'newest') {
      list.sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
    } else if (sort === 'hottest') {
      list.sort(function(a, b) { return b.readCount - a.readCount })
    } else if (sort === 'recommended') {
      list.sort(function(a, b) { return b.likeCount - a.likeCount })
    }

    var total = list.length
    var start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return mockAsync({ list: list, total: total, page: page, pageSize: pageSize })
  }

  return get('/api/tutorials', params)
}

function getTutorialDetail(id) {
  if (isMockEnabled('tutorial')) {
    var tutorial = tutorials.find(function(t) { return t.id === id })
    if (!tutorial) return Promise.reject(new Error('教程不存在'))
    return mockAsync(tutorial)
  }
  return get('/api/tutorials/' + id)
}

function getCategories() {
  if (isMockEnabled('tutorial')) {
    var result = categories.map(function(cat) {
      return Object.assign({}, cat, {
        count: tutorials.filter(function(t) { return t.category === cat.id }).length
      })
    })
    return mockAsync(result)
  }
  return get('/api/tutorials/categories')
}

function getRecommended(limit) {
  limit = limit || 5
  if (isMockEnabled('tutorial')) {
    var list = tutorials.slice()
      .sort(function(a, b) { return b.likeCount - a.likeCount })
      .slice(0, limit)
    return mockAsync(list)
  }
  return get('/api/tutorials/recommended', { limit: limit })
}

function getHotTutorials(limit) {
  limit = limit || 10
  if (isMockEnabled('tutorial')) {
    var list = tutorials.slice()
      .sort(function(a, b) { return b.readCount - a.readCount })
      .slice(0, limit)
    return mockAsync(list)
  }
  return get('/api/tutorials/hot', { limit: limit })
}

module.exports = {
  getTutorialList: getTutorialList,
  getTutorialDetail: getTutorialDetail,
  getCategories: getCategories,
  getRecommended: getRecommended,
  getHotTutorials: getHotTutorials
}
