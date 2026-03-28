import { tutorials, categories } from './tutorials'
import { codeSnippets, languages } from './codeSnippets'

const mockConfig = {
  enabled: true,
  modules: {
    tutorial: true,
    code: true,
    user: true
  },
  delay: 300,
  failureRate: 0
}

export function isMockEnabled(moduleName) {
  if (!mockConfig.enabled) return false
  if (moduleName && mockConfig.modules[moduleName] !== undefined) {
    return mockConfig.modules[moduleName]
  }
  return mockConfig.enabled
}

export function mockAsync(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < mockConfig.failureRate) {
        reject(new Error('Mock: 模拟请求失败'))
        return
      }
      resolve(data)
    }, mockConfig.delay)
  })
}

export function setMockConfig(config) {
  Object.assign(mockConfig, config)
  if (config.modules) {
    Object.assign(mockConfig.modules, config.modules)
  }
}

export {
  tutorials,
  categories,
  codeSnippets,
  languages,
  mockConfig
}
