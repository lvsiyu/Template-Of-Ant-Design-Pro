import * as proDetailService from '../service/index';

const proDetailModel = {
  namespace: 'proDetail',
  state: {
    proDetailTitleData: null,
    proDetailTab1Data: null,
    proDetailTab2Data: null,
  },
  effects: {
    *queryProDetailTitle(_, { call, put }) {
      const resp = yield call(proDetailService.queryProDetailTitle);
      yield put({
        type: 'saveData',
        payload: {
          proDetailTitleData: resp.data || {},
        },
      });
    },
    *queryProDetailTab1(_, { call, put }) {
      const resp = yield call(proDetailService.queryProDetailTab1);
      yield put({
        type: 'saveData',
        payload: {
          proDetailTab1Data: resp.data || {},
        },
      });
    },
    *queryProDetailTab2(_, { call, put }) {
      const resp = yield call(proDetailService.queryProDetailTab2);
      yield put({
        type: 'saveData',
        payload: {
          proDetailTab2Data: resp.data || {},
        },
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
    resetProDetailTab1Data(state) {
      return { ...state, proDetailTab1Data: null };
    },
    resetProDetailTab2Data(state) {
      return { ...state, proDetailTab2Data: null };
    },
  },
};
export default proDetailModel;
