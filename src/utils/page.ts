import Taro from '@tarojs/taro'
import { queryString } from '.'

/**
 * 导航
 * @param path url
 * @param params 传参
 */
export function toPage(path: string, o?: object) {
  // Taro.showLoading()
  const url = `/pages/${path}/index${queryString(o)}`
  Taro.navigateTo({
    url,
    success: () => {
      // Taro.hideLoading()
    }
  })
}
