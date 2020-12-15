import request from '@/utils/request';

export async function queryLine() {
  return request('/api/biz/syjbxx/getLineData');
}

export async function queryColumn() {
  return request('/api/biz/syjbxx/getPieData');
}

export async function queryPie() {
  return request('/api/biz/syjbxx/getPieData');
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
