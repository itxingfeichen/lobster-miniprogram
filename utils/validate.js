/**
 * 数据验证工具
 */

/**
 * 验证手机号
 * @param {String} phone - 手机号
 * @returns {Boolean}
 */
export function isPhone(phone) {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 验证邮箱
 * @param {String} email - 邮箱
 * @returns {Boolean}
 */
export function isEmail(email) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
}

/**
 * 验证身份证号
 * @param {String} idCard - 身份证号
 * @returns {Boolean}
 */
export function isIdCard(idCard) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard)
}

/**
 * 验证 URL
 * @param {String} url - URL
 * @returns {Boolean}
 */
export function isUrl(url) {
  return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)
}

/**
 * 验证 IP 地址
 * @param {String} ip - IP 地址
 * @returns {Boolean}
 */
export function isIp(ip) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(ip)
}

/**
 * 验证中文
 * @param {String} text - 文本
 * @returns {Boolean}
 */
export function isChinese(text) {
  return /^[\u4e00-\u9fa5]+$/.test(text)
}

/**
 * 验证英文
 * @param {String} text - 文本
 * @returns {Boolean}
 */
export function isEnglish(text) {
  return /^[a-zA-Z]+$/.test(text)
}

/**
 * 验证数字
 * @param {String} num - 数字字符串
 * @returns {Boolean}
 */
export function isNumber(num) {
  return /^\d+$/.test(num)
}

/**
 * 验证金额（最多两位小数）
 * @param {String} money - 金额
 * @returns {Boolean}
 */
export function isMoney(money) {
  return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(money)
}

/**
 * 验证密码强度
 * @param {String} password - 密码
 * @returns {Object} { valid: Boolean, strength: 'weak'|'medium'|'strong' }
 */
export function validatePassword(password) {
  if (!password || password.length < 6) {
    return { valid: false, strength: 'weak' }
  }
  
  let strength = 0
  
  // 长度 >= 8
  if (password.length >= 8) strength++
  
  // 包含数字
  if (/\d/.test(password)) strength++
  
  // 包含小写字母
  if (/[a-z]/.test(password)) strength++
  
  // 包含大写字母
  if (/[A-Z]/.test(password)) strength++
  
  // 包含特殊字符
  if (/[^a-zA-Z0-9]/.test(password)) strength++
  
  let strengthLevel = 'weak'
  if (strength >= 4) strengthLevel = 'strong'
  else if (strength >= 2) strengthLevel = 'medium'
  
  return { valid: true, strength: strengthLevel }
}

/**
 * 验证用户名（3-20 位字母数字下划线）
 * @param {String} username - 用户名
 * @returns {Boolean}
 */
export function isUsername(username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username)
}

/**
 * 验证是否为空
 * @param {Any} value - 值
 * @returns {Boolean}
 */
export function isEmpty(value) {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * 验证字符串长度
 * @param {String} str - 字符串
 * @param {Number} min - 最小长度
 * @param {Number} max - 最大长度
 * @returns {Boolean}
 */
export function isLength(str, min, max) {
  if (!str) return false
  const len = str.length
  if (max !== undefined) {
    return len >= min && len <= max
  }
  return len >= min
}

/**
 * 表单验证器类
 */
export class Validator {
  constructor(data) {
    this.data = data
    this.errors = {}
  }
  
  /**
   * 验证字段
   * @param {String} field - 字段名
   * @param {Function} rule - 验证规则
   * @param {String} message - 错误消息
   * @returns {Validator}
   */
  rule(field, rule, message) {
    if (!rule(this.data[field])) {
      this.errors[field] = message
    }
    return this
  }
  
  /**
   * 验证是否通过
   * @returns {Boolean}
   */
  validate() {
    return Object.keys(this.errors).length === 0
  }
  
  /**
   * 获取错误消息
   * @returns {Object}
   */
  getErrors() {
    return this.errors
  }
  
  /**
   * 获取第一个错误消息
   * @returns {String}
   */
  getFirstError() {
    const keys = Object.keys(this.errors)
    return keys.length > 0 ? this.errors[keys[0]] : ''
  }
}

export default {
  isPhone,
  isEmail,
  isIdCard,
  isUrl,
  isIp,
  isChinese,
  isEnglish,
  isNumber,
  isMoney,
  validatePassword,
  isUsername,
  isEmpty,
  isLength,
  Validator
}
