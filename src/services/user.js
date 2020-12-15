import request from '@/utils/request';

export async function query() {
  return request('/mock/users');
}
export async function queryCurrent() {
  return request('/mock/currentUser');
}
export async function queryNotices() {
  return request('/mock/notices');
}
