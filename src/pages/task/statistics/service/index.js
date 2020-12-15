import request from '@/utils/request';

export async function queryTaskStatistics(params) {
  return request('/mock/taskStatistics', {
    params,
  });
}
