/**
 * 代码片段 API
 * 目前使用 Mock 数据，后续替换为真实 API 调用
 */

const { isMockEnabled, mockAsync, codeSnippets, languages } = require('../mock/index')
const { get } = require('../utils/request')

function getCodeList(params) {
  params = params || {}
  if (isMockEnabled('code')) {
    var language = params.language || ''
    var keyword = params.keyword || ''
    var tag = params.tag || ''
    var page = params.page || 1
    var pageSize = params.pageSize || 10
    var sort = params.sort || 'newest'

    var list = codeSnippets.slice()

    if (language) {
      list = list.filter(function(c) { return c.language === language })
    }
    if (tag) {
      var tagLower = tag.toLowerCase()
      list = list.filter(function(c) {
        return c.tags.some(function(t) { return t.toLowerCase().indexOf(tagLower) !== -1 })
      })
    }
    if (keyword) {
      var kw = keyword.toLowerCase()
      list = list.filter(function(c) {
        return c.title.toLowerCase().indexOf(kw) !== -1 ||
          c.description.toLowerCase().indexOf(kw) !== -1 ||
          c.tags.some(function(t) { return t.toLowerCase().indexOf(kw) !== -1 })
      })
    }

    if (sort === 'newest') {
      list.sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
    } else if (sort === 'popular') {
      list.sort(function(a, b) { return b.favoriteCount - a.favoriteCount })
    }

    var total = list.length
    var start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return mockAsync({ list: list, total: total, page: page, pageSize: pageSize })
  }

  return get('/api/code-snippets', params)
}

function getCodeDetail(id) {
  if (isMockEnabled('code')) {
    var snippet = codeSnippets.find(function(c) { return c.id === id })
    if (!snippet) return Promise.reject(new Error('代码片段不存在'))
    return mockAsync(snippet)
  }
  return get('/api/code-snippets/' + id)
}

function getLanguages() {
  if (isMockEnabled('code')) {
    var result = languages.map(function(lang) {
      return Object.assign({}, lang, {
        count: codeSnippets.filter(function(c) { return c.language === lang.id }).length
      })
    })
    return mockAsync(result)
  }
  return get('/api/code-snippets/languages')
}

module.exports = {
  getCodeList: getCodeList,
  getCodeDetail: getCodeDetail,
  getLanguages: getLanguages
}
