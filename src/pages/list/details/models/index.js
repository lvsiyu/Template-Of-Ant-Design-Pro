import * as detailsListService from '../service/index';

const DetailsListModel = {
  namespace: 'detailList',
  state: {
    detailsListData: null,
  },
  effects: {
    *queryDetailsList(_, { call, put }) {
      const resp = yield call(detailsListService.queryDetailsList);
      yield put({
        type: 'saveData',
        payload: {
          detailsListData: resp || {},
        },
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default DetailsListModel;
