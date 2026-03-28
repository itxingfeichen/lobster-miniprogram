/**
 * 教程 API
 * 目前使用 Mock 数据，后续替换为真实 API 调用
 */

import { isMockEnabled, mockAsync, tutorials, categories } from '../mock/index'
import { get } from '../utils/request'

export function getTutorialList(params) {
  params = params || {}
  if (isMockEnabled('tutorial')) {
    let category = params.category || ''
    let difficulty = params.difficulty || ''
    let keyword = params.keyword || ''
    let page = params.page || 1
    let pageSize = params.pageSize || 10
    let sort = params.sort || 'newest'

    let list = tutorials.slice()

    if (category) {
      list = list.filter(t => t.category === category)
    }
    if (difficulty) {
      list = list.filter(t => t.difficulty === difficulty)
    }
    if (keyword) {
      let kw = keyword.toLowerCase()
      list = list.filter(t => {
        return t.title.toLowerCase().indexOf(kw) !== -1 ||
          t.summary.toLowerCase().indexOf(kw) !== -1 ||
          t.tags.some(tag => tag.toLowerCase().indexOf(kw) !== -1)
      })
    }

    if (sort === 'newest') {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (sort === 'hottest') {
      list.sort((a, b) => b.readCount - a.readCount)
    } else if (sort === 'recommended') {
      list.sort((a, b) => b.likeCount - a.likeCount)
    }

    let total = list.length
    let start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return mockAsync({ list, total, page, pageSize })
  }

  return get('/api/tutorials', params)
}

export function getTutorialDetail(id) {
  if (isMockEnabled('tutorial')) {
    let tutorial = tutorials.find(t => t.id === id)
    if (!tutorial) return Promise.reject(new Error('教程不存在'))
    return mockAsync(tutorial)
  }
  return get('/api/tutorials/' + id)
}

export function getCategories() {
  if (isMockEnabled('tutorial')) {
    let result = categories.map(cat => {
      return Object.assign({}, cat, {
        count: tutorials.filter(t => t.category === cat.id).length
      })
    })
    return mockAsync(result)
  }
  return get('/api/tutorials/categories')
}

export function getRecommended(limit) {
  limit = limit || 5
  if (isMockEnabled('tutorial')) {
    let list = tutorials.slice()
      .sort((a, b) => b.likeCount - a.likeCount)
      .slice(0, limit)
    return mockAsync(list)
  }
  return get('/api/tutorials/recommended', { limit })
}

export function getHotTutorials(limit) {
  limit = limit || 10
  if (isMockEnabled('tutorial')) {
    let list = tutorials.slice()
      .sort((a, b) => b.readCount - a.readCount)
      .slice(0, limit)
    return mockAsync(list)
  }
  return get('/api/tutorials/hot', { limit })
}
