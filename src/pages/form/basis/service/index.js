import request from '@/utils/request';

export async function queryBasisFormData(params) {
  return request('/mock/formRequest', {
    method: 'POST',
    data: params,
  });
}
