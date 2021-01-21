import * as tabsTableService from '../service/index';

const tabsTableModal = {
  namespace: 'tabsTable',
  state: {
    tableRightData: null,
  },
  effects: {
    *queryRightTable({ payload }, { call, put }) {
      const { value, callback } = payload;
      const resp = yield call(tabsTableService.queryRightTable, value);
      yield put({
        type: 'saveData',
        payload: {
          tableRightData: resp.data || {},
        },
      });
      if (resp && callback) {
        callback(resp.data);
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default tabsTableModal;
