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

export async function queryProDetailList1(params) {
  return request('/mock/details/list1', {
    params,
  });
}

export async function queryProDetailList2(params) {
  return request('/mock/details/list2', {
    params,
  });
}

export async function queryProDetailList3(params) {
  return request('/mock/details/list3', {
    params,
  });
}

export async function queryProDetailList4(params) {
  return request('/mock/details/list4', {
    params,
  });
}
