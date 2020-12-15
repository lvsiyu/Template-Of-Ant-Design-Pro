import request from '@/utils/request';

export async function queryUserInfo(params) {
  return request('/mock/userInfo', {
    params,
  });
}
