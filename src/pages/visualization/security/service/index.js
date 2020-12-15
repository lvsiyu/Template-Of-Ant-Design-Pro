import request from '@/utils/request';

export async function querySecurity(params) {
  return request('/mock/security', {
    params,
  });
}
