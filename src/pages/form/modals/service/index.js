import request from '@/utils/request';

export async function queryFormList(params) {
  return request('/mock/formTableList', {
    params,
  });
}
