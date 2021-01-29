import request from '@/utils/request';

export async function queryLoginFormData(params) {
  return request('/mock/formRequest', {
    method: 'POST',
    data: params,
  });
}
