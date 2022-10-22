export declare namespace AppAPI {
  export type API_VERSION = 'app' | undefined

  /**
   * @description: 通用请求参数
   */
  export interface PageCommonParams {
    num?: number
  }

  /**
   * @description: 通用请求Body
   */
  export interface PageCommonBody {
    text?: string
  }
}
