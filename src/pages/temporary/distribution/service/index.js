import request from '@/utils/request';

export async function queryDistribution(params) {
  return request('/mock/temporaryDistribution', {
    params,
  });
}
