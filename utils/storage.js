/**
 * 本地存储封装
 * 基于 uni.setStorage/getStorage 封装
 */

const PREFIX = 'lobster_' // 存储键名前缀，避免冲突

/**
 * 设置存储
 * @param {String} key - 键名
 * @param {Any} value - 值
 */
export function set(key, value) {
  try {
    uni.setStorageSync(PREFIX + key, value)
    return true
  } catch (e) {
    console.error('存储失败', e)
    return false
  }
}

/**
 * 获取存储
 * @param {String} key - 键名
 * @param {Any} defaultValue - 默认值
 * @returns {Any}
 */
export function get(key, defaultValue = null) {
  try {
    const value = uni.getStorageSync(PREFIX + key)
    return value !== '' ? value : defaultValue
  } catch (e) {
    console.error('获取存储失败', e)
    return defaultValue
  }
}

/**
 * 删除存储
 * @param {String} key - 键名
 */
export function remove(key) {
  try {
    uni.removeStorageSync(PREFIX + key)
    return true
  } catch (e) {
    console.error('删除存储失败', e)
    return false
  }
}

/**
 * 清空存储
 */
export function clear() {
  try {
    uni.clearStorageSync()
    return true
  } catch (e) {
    console.error('清空存储失败', e)
    return false
  }
}

/**
 * 获取所有存储信息
 * @returns {Object}
 */
export function info() {
  try {
    const info = uni.getStorageInfoSync()
    return info
  } catch (e) {
    console.error('获取存储信息失败', e)
    return null
  }
}

/**
 * 设置带过期时间的存储
 * @param {String} key - 键名
 * @param {Any} value - 值
 * @param {Number} expire - 过期时间（秒）
 */
export function setWithExpiry(key, value, expire) {
  const item = {
    value: value,
    expire: Date.now() + expire * 1000
  }
  return set(key + '_expiry', item)
}

/**
 * 获取带过期时间的存储
 * @param {String} key - 键名
 * @param {Any} defaultValue - 默认值
 * @returns {Any}
 */
export function getWithExpiry(key, defaultValue = null) {
  const item = get(key + '_expiry')
  if (!item) {
    return defaultValue
  }
  
  if (Date.now() > item.expire) {
    remove(key + '_expiry')
    return defaultValue
  }
  
  return item.value
}

export default {
  set,
  get,
  remove,
  clear,
  info,
  setWithExpiry,
  getWithExpiry
}
