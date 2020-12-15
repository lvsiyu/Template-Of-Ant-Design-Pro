import request from '@/utils/request';

export async function queryStatistics(params) {
  return request('/mock/temporaryStatistics', {
    params,
  });
}
