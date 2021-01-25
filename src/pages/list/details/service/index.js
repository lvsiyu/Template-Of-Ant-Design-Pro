import request from '@/utils/request';

export async function queryDetailsList(params) {
  return request('/mock/detailsList', {
    params,
  });
}
