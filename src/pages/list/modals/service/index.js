import request from '@/utils/request';

export async function queryModalListData(params) {
  return request('/mock/basisList', {
    params,
  });
}
