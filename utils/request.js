/**
 * 网络请求封装
 * 基于 uni.request 封装
 */

const BASE_URL = 'https://api.example.com' // 替换为实际 API 地址
const TIMEOUT = 10000 // 请求超时时间（毫秒）

/**
 * 请求封装
 * @param {Object} options - 请求配置
 * @returns {Promise}
 */
export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      timeout: options.timeout || TIMEOUT,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          uni.showToast({
            title: `请求失败：${res.statusCode}`,
            icon: 'none'
          })
          reject(res)
        }
      },
      fail: (err) => {
        uni.showToast({
          title: '网络错误',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

/**
 * GET 请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求参数
 */
export function get(url, data) {
  return request({ url, method: 'GET', data })
}

/**
 * POST 请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求数据
 */
export function post(url, data) {
  return request({ url, method: 'POST', data })
}

/**
 * PUT 请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求数据
 */
export function put(url, data) {
  return request({ url, method: 'PUT', data })
}

/**
 * DELETE 请求
 * @param {String} url - 请求地址
 * @param {Object} data - 请求参数
 */
export function del(url, data) {
  return request({ url, method: 'DELETE', data })
}

export default {
  request,
  get,
  post,
  put,
  del
}
