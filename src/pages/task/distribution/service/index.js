import request from '@/utils/request';

export async function queryTaskDistribution(params) {
  return request('/mock/taskDistribution', {
    params,
  });
}
