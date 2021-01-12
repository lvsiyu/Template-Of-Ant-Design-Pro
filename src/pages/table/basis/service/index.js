import request from '@/utils/request';

export async function queryBasisTable(params) {
  return request('/mock/basisTable', {
    params,
  });
}

export async function queryBasisInnerTable() {
  return request('/mock/basisInnerTable');
}
