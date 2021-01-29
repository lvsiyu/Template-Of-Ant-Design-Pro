import request from '@/utils/request';

export async function queryStepsFormData(params) {
  return request('/mock/formRequest', {
    method: 'POST',
    data: params,
  });
}
