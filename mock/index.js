/**
 * Mock 数据统一管理
 * 统一导出所有 Mock 数据，提供 Mock 开关控制
 */

const { tutorials, categories } = require('./tutorials')
const { codeSnippets, languages } = require('./codeSnippets')

// Mock 全局配置
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

function isMockEnabled(moduleName) {
  if (!mockConfig.enabled) return false
  if (moduleName && mockConfig.modules[moduleName] !== undefined) {
    return mockConfig.modules[moduleName]
  }
  return mockConfig.enabled
}

function mockAsync(data) {
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

function setMockConfig(config) {
  Object.assign(mockConfig, config)
  if (config.modules) {
    Object.assign(mockConfig.modules, config.modules)
  }
}

module.exports = {
  tutorials,
  categories,
  codeSnippets,
  languages,
  mockConfig,
  isMockEnabled,
  mockAsync,
  setMockConfig
}
