import { isMockEnabled, mockAsync, codeSnippets, languages } from '../mock/index'
import { get } from '../utils/request'

export function getCodeList(params) {
  params = params || {}
  if (isMockEnabled('code')) {
    let language = params.language || ''
    let keyword = params.keyword || ''
    let tag = params.tag || ''
    let page = params.page || 1
    let pageSize = params.pageSize || 10
    let sort = params.sort || 'newest'

    let list = codeSnippets.slice()

    if (language) {
      list = list.filter(c => c.language === language)
    }
    if (tag) {
      let tagLower = tag.toLowerCase()
      list = list.filter(c => {
        return c.tags.some(t => t.toLowerCase().indexOf(tagLower) !== -1)
      })
    }
    if (keyword) {
      let kw = keyword.toLowerCase()
      list = list.filter(c => {
        return c.title.toLowerCase().indexOf(kw) !== -1 ||
          c.description.toLowerCase().indexOf(kw) !== -1 ||
          c.tags.some(t => t.toLowerCase().indexOf(kw) !== -1)
      })
    }

    if (sort === 'newest') {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (sort === 'popular') {
      list.sort((a, b) => b.favoriteCount - a.favoriteCount)
    }

    let total = list.length
    let start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return mockAsync({ list, total, page, pageSize })
  }

  return get('/api/code-snippets', params)
}

export function getCodeDetail(id) {
  if (isMockEnabled('code')) {
    let snippet = codeSnippets.find(c => c.id === id)
    if (!snippet) return Promise.reject(new Error('代码片段不存在'))
    return mockAsync(snippet)
  }
  return get('/api/code-snippets/' + id)
}

export function getLanguages() {
  if (isMockEnabled('code')) {
    let result = languages.map(lang => {
      return Object.assign({}, lang, {
        count: codeSnippets.filter(c => c.language === lang.id).length
      })
    })
    return mockAsync(result)
  }
  return get('/api/code-snippets/languages')
}
