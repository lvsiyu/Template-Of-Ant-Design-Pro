import request from '@/utils/request';

export async function queryLine() {
  return request('/mock/lineData');
}

export async function queryColumn() {
  return request('/mock/columnData');
}

export async function queryPie() {
  return request('/mock/pieData');
}

export async function queryBar() {
  return request('/mock/barData');
}

export async function queryRadar() {
  return request('/mock/radarData');
}

export async function queryWordCloud() {
  return request('/mock/wordCloudData');
}
