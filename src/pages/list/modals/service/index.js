import request from '@/utils/request';

export async function queryCar(params) {
  return request('/mock/car', {
    params,
  });
}
