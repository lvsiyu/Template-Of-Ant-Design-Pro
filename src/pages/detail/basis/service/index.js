import request from '@/utils/request';

export async function queryBasisDetail(params) {
  return request('/mock/details/basic', {
    params,
  });
}
