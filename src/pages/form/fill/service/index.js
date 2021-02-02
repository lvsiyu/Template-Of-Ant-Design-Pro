import request from '@/utils/request';

export async function queryFillForm(params) {
  return request('/mock/formRequest', {
    method: 'POST',
    data: params,
  });
}
