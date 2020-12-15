import request from '@/utils/request';

export async function queryContradiction(params) {
  return request('/mock/contradiction', {
    params,
  });
}
