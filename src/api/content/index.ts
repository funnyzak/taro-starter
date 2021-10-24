import { siteId, channelId } from '@/config/app.config';
import { IContentsParams } from '@/interfaces/api.params';
import request, { httpRequest } from '@/utils/request';

// 获取单条内容
const GET_CONTENT = `/api/v1/contents/${siteId}/$channel/$id`;
// 获取内容列表API
const GET_CONTENTS = `/api/v1/contents`;

// 更新点击次数
const DIGG_CONTENTS = `/api/hits/${siteId}/$channel/$id`;

function get(id: number, chnId: number = channelId) {
  return request.get(
    GET_CONTENT.replace('$id', id.toString()).replace(
      '$channel',
      chnId.toString()
    )
  );
}

function digg(id: number, chnId: number = channelId) {
  return httpRequest(
    {
      url: DIGG_CONTENTS.replace('$id', id.toString()).replace(
        '$channel',
        chnId.toString()
      ),
      data: {},
      headers: [{ key: 'hello', value: 'world' }],
      taroOptions: {
        dataType: '其他'
      }
    },
    'GET'
  );
}

function list(params: IContentsParams) {
  return request.post(GET_CONTENTS, params);
}

export default {
  get,
  digg,
  list
};
