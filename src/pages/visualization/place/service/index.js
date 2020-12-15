import request from '@/utils/request';

export async function queryPlace(params) {
  return request('/mock/place', {
    params,
  });
}
