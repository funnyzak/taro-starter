import { IContentResponse } from '@/interfaces/http.response';
import { IPageParams } from '@/interfaces/page.params';
import api from '@/api';
import { contentId } from '@/config/app.config';
import Taro, { getCurrentInstance, RouterInfo } from '@tarojs/taro';
import { log } from '.';

// 定义当前内容对象Key
export const current_content_storage_key: string = 'current_content';

// 定义已请求的过内容对象id（标记，以免重复拉取）
let requested_content_id: number = 0;

export const setCurrentMeeting = (content: IContentResponse): void => {
  Taro.setStorage({
    key: current_content_storage_key,
    data: content
  });
};

export const currentContent = (): Promise<IContentResponse> => {
  const params: IPageParams = (getCurrentInstance().router as RouterInfo)
    .params;
  const _contentId = params.id && params.id !== null ? params.id : contentId;

  const requestContent = (
    id: number,
    resolve,
    defContent?: IContentResponse
  ) => {
    Taro.showLoading({
      title: '数据加载中..'
    });
    api.Content.get(id)
      .then((res) => {
        requested_content_id = id;
        const contentResponse = res as IContentResponse;
        Taro.hideLoading();
        Taro.setStorage({
          key: current_content_storage_key,
          data: contentResponse
        });
        resolve(contentResponse);
        api.Content.digg(id); // 更新点击次数
      })
      .catch((err) => {
        Taro.hideLoading();
        log(err, 'error');
        resolve(defContent);
      });
  };

  return new Promise<IContentResponse>((resolve) => {
    let rltContent: IContentResponse;
    Taro.getStorage({
      key: current_content_storage_key,
      success: (res) => {
        rltContent = res.data;
        if (
          _contentId > 0 &&
          _contentId !== requested_content_id &&
          _contentId !== rltContent.id
        ) {
          requestContent(_contentId, resolve, rltContent);
        } else {
          resolve(rltContent);
        }
      },
      fail: () => {
        requestContent(_contentId, resolve);
      }
    });
  });
};
