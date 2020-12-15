import request from '@/utils/request';

export async function queryGuard(params) {
  return request('/mock/guard', {
    params,
  });
}
