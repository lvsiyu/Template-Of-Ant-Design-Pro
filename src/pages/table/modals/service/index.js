import request from '@/utils/request';

export async function queryModalTable(params) {
  return request('/mock/modalTable', {
    params,
  });
}

export async function queryModalTable2(params) {
  return request('/mock/modalTable2', {
    params,
  });
}
