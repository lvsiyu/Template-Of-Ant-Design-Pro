import request from '@/utils/request';

export async function queryPersonnel(params) {
  return request('/api/biz/zdrkgk/getZdrkByPage', {
    params,
  });
}
