import request from '@/utils/request';

export async function queryBasisListData(params) {
  return request('/mock/basisList', {
    params,
  });
}
