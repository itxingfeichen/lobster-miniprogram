/**
 * API 统一入口
 * 导出所有模块 API，统一管理 API 配置
 */

var tutorial = require('./tutorial')
var code = require('./code')
var user = require('./user')
var mock = require('../mock/index')

var API_CONFIG = {
  baseUrl: 'https://api.example.com',
  timeout: 10000,
  version: 'v1'
}

module.exports = {
  // 教程相关
  getTutorialList: tutorial.getTutorialList,
  getTutorialDetail: tutorial.getTutorialDetail,
  getCategories: tutorial.getCategories,
  getRecommended: tutorial.getRecommended,
  getHotTutorials: tutorial.getHotTutorials,

  // 代码片段相关
  getCodeList: code.getCodeList,
  getCodeDetail: code.getCodeDetail,
  getLanguages: code.getLanguages,

  // 用户相关
  getUserInfo: user.getUserInfo,
  getLearnProgress: user.getLearnProgress,
  getFavorites: user.getFavorites,
  toggleFavorite: user.toggleFavorite,

  // 配置管理
  API_CONFIG: API_CONFIG,
  setMockConfig: mock.setMockConfig,
  mockConfig: mock.mockConfig,
  isMockEnabled: mock.isMockEnabled
}
