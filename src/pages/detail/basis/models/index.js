import * as basisDetailService from '../service/index';

const BasisDetailModel = {
  namespace: 'basisDetail',
  state: {
    basisDetailData: null,
  },
  effects: {
    *queryBasisDetail(_, { call, put }) {
      const resp = yield call(basisDetailService.queryBasisDetail);
      yield put({
        type: 'saveData',
        payload: {
          basisDetailData: resp.data || {},
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
export default BasisDetailModel;
