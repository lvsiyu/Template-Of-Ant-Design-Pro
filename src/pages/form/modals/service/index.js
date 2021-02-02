import request from '@/utils/request';

export async function queryFormList(params) {
  return request('/mock/formTableList', {
    params,
  });
}

export async function queryModalForm(params) {
  return request('/mock/formRequest', {
    method: 'POST',
    data: params,
  });
}
