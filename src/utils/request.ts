import Taro from '@tarojs/taro'
import { BASE_URL } from '@/config/app.config'
import { HTTP_STATUS } from '@/config/constant'
import { toast, log } from './logger'

export interface RequestInfo {
  url: string
  data?: Object
  contentType?: string
  headers?: Array<{ key: string; value: string }>
  taroOptions?: any
}

// 定义可使用的Request方法
type RequestMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

export const httpRequest = function (requestData: RequestInfo, method: RequestMethod = 'GET'): Promise<any> {
  let contentType = requestData.contentType || 'application/json'
  let headers = {
    'Content-Type': contentType
  }
  if (requestData.headers) {
    requestData.headers.forEach((v) => {
      headers[v.key] = v.value
    })
  }

  return new Promise<any>((resolve, reject) => {
    Taro.request({
      url: BASE_URL + requestData.url,
      data: requestData.data || {},
      method: method,
      header: headers,
      dataType: requestData.taroOptions && requestData.taroOptions.dataType ? requestData.taroOptions.dataType : 'json',
      success(responseData: Taro.request.SuccessCallbackResult<any>) {
        if (responseData.statusCode === HTTP_STATUS.SUCCESS) {
          resolve(responseData.data)
        } else if (responseData.statusCode === HTTP_STATUS.NOT_FOUND) {
          toast('API:', '请求资源不存在')
          reject(responseData)
        } else if (responseData.statusCode === HTTP_STATUS.AUTHENTICATE) {
          toast('API:', '登录非法或已过期，正在重新登录')
          reject(responseData)
        } else if (
          responseData.statusCode === HTTP_STATUS.CLIENT_ERROR ||
          responseData.statusCode === HTTP_STATUS.BAD_GATEWAY ||
          responseData.statusCode === HTTP_STATUS.BAD_GATEWAY
        ) {
          toast('API:', '服务端出现了问题')
          reject(responseData)
        } else if (responseData.statusCode === HTTP_STATUS.FORBIDDEN) {
          toast('API:', '没有权限访问')
          reject(responseData)
        }
      },
      fail(e: any) {
        // toast('API:', '请求接口出现问题', e.errMsg);
        log(e, 'error')
        reject(e)
      }
    })
  })
}

export default {
  /**
   * @description get request
   * @param url 请求链接
   * @param data 请求requestData
   */
  get(url: string, data = {}, contentType?: string) {
    let requestData = { url, data, contentType }
    return httpRequest(requestData)
  },

  /**
   * @description post request
   * @param url
   * @param data request body
   * @param contentType
   */
  post(url: string, data?: object, contentType?: string) {
    let requestData = { url, data, contentType }
    return httpRequest(requestData, 'POST')
  },

  /**
   * @description put request
   * @param url
   * @param data request body
   */

  put(url: string, data?: object, contentType?: string) {
    let requestData = { url, data, contentType }
    return httpRequest(requestData, 'PUT')
  }
}
