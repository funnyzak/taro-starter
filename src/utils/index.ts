import api from './request'
import { log, toast } from './logger'
import { toPage } from './page'

export { api, log, toast, toPage }

/**
 * 转换为时间字符串
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(
  time: object | string | number,
  cFormat: string = '{y}-{m}-{d} {h}:{i}',
  dValue = '无'
): string {
  if (!time) {
    return dValue
  }
  if (arguments.length === 0) {
    return ''
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date
  if (typeof time === 'object') {
    date = time as Date
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function rangeArray(size: number) {
  let _array: Array<number> = []
  for (let i = 0; i < size; i++) {
    _array[i] = i
  }
  return _array
}

export function queryString(obj?: Object) {
  if (!obj) {
    return ''
  }
  return (
    '?' +
    Object.keys(obj)
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
      })
      .join('&')
  )
}

/**
 * 将http转为https
 * @param url 链接
 */
export const parse2Https = (url: string) => {
  if (!url) return
  return url.startsWith('https') ? url : url.replace('http', 'https')
}

export const parseDate = function (date: string) {
  var t = Date.parse(date)
  if (typeof t === 'number') {
    return new Date(Date.parse(date.replace(/-/g, '/')))
  } else {
    return new Date()
  }
}

export function parseWeekday(sDate) {
  var dt = typeof sDate === 'string' ? new Date(sDate.replace(/-/g, '/')) : sDate
  var a = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return a[dt.getDay()]
}
