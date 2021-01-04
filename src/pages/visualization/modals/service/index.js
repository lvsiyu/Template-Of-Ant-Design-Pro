import request from '@/utils/request';

export async function queryPersonnel(params) {
  return request('/mock/personnel', {
    params,
  });
}
