/**
 * 数据格式化工具
 */

/**
 * 格式化日期
 * @param {Date|String|Number} date - 日期对象/字符串/时间戳
 * @param {String} format - 格式化模板，默认 'YYYY-MM-DD HH:mm:ss'
 * @returns {String}
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return ''
  
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 格式化相对时间
 * @param {Date|String|Number} date - 日期
 * @returns {String}
 */
export function formatRelativeTime(date) {
  if (!date) return ''
  
  const now = Date.now()
  const target = new Date(date).getTime()
  const diff = now - target
  
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  
  if (diff < minute) {
    return '刚刚'
  } else if (diff < hour) {
    return Math.floor(diff / minute) + '分钟前'
  } else if (diff < day) {
    return Math.floor(diff / hour) + '小时前'
  } else if (diff < week) {
    return Math.floor(diff / day) + '天前'
  } else if (diff < month) {
    return Math.floor(diff / week) + '周前'
  } else {
    return formatDate(date, 'YYYY-MM-DD')
  }
}

/**
 * 格式化数字（添加千分位）
 * @param {Number} num - 数字
 * @param {Number} decimals - 小数位数
 * @returns {String}
 */
export function formatNumber(num, decimals = 0) {
  if (num === null || num === undefined) return '0'
  
  const number = Number(num)
  if (isNaN(number)) return '0'
  
  const fixed = number.toFixed(decimals)
  return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化文件大小
 * @param {Number} bytes - 字节数
 * @returns {String}
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
}

/**
 * 格式化时长（秒转为分秒格式）
 * @param {Number} seconds - 秒数
 * @returns {String}
 */
export function formatDuration(seconds) {
  if (!seconds) return '00:00'
  
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

/**
 * 格式化百分比
 * @param {Number} value - 值
 * @param {Number} total - 总数
 * @param {Number} decimals - 小数位数
 * @returns {String}
 */
export function formatPercent(value, total, decimals = 0) {
  if (!total) return '0%'
  
  const percent = (value / total) * 100
  return percent.toFixed(decimals) + '%'
}

/**
 * 脱敏手机号
 * @param {String} phone - 手机号
 * @returns {String}
 */
export function maskPhone(phone) {
  if (!phone) return ''
  return String(phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 脱敏邮箱
 * @param {String} email - 邮箱
 * @returns {String}
 */
export function maskEmail(email) {
  if (!email) return ''
  const [name, domain] = email.split('@')
  if (!name || !domain) return email
  
  const maskedName = name.charAt(0) + '***' + name.charAt(name.length - 1)
  return maskedName + '@' + domain
}

export default {
  formatDate,
  formatRelativeTime,
  formatNumber,
  formatFileSize,
  formatDuration,
  formatPercent,
  maskPhone,
  maskEmail
}
