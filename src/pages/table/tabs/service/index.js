import request from '@/utils/request';

export async function queryLeftTable(params) {
  return request('/mock/tabsTableLeft', {
    params,
  });
}

export async function queryRightTable(params) {
  return request('/mock/tabsTableRight', {
    params,
  });
}
