import request from '@/utils/request';

export async function queryProDetailTitle(params) {
  return request('/mock/proDetailTitle', {
    params,
  });
}

export async function queryProDetailTab1(params) {
  return request('/mock/proDetailTab1', {
    params,
  });
}

export async function queryProDetailTab2(params) {
  return request('/mock/proDetailTab2', {
    params,
  });
}
