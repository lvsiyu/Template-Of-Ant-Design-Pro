import request from '@/utils/request';

export async function queryPlace(params) {
  return request('/api/biz/zddwgk/getZddwByPage', {
    params,
  });
}
