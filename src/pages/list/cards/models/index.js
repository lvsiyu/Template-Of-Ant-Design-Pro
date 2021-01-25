/* import * as basisListService from '../service/index';

const BasisListModel = {
  namespace: 'basisList',
  state: {
    basisListData: null,
  },
  effects: {
    *queryBasisListData(_, { call, put }) {
      const resp = yield call(basisListService.queryBasisListData);
      yield put({
        type: 'saveData',
        payload: {
          basisListData: resp || null,
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
export default BasisListModel;
 */
