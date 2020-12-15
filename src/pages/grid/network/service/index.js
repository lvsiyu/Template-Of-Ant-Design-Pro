import request from '@/utils/request';

export async function queryNewWork(params) {
  return request('/mock/network', {
    params,
  });
}
