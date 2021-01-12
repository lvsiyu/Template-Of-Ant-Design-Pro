import * as basisTable from '../service/index';

const BasisTable = {
  namespace: 'basisTable',
  state: {
    basisInnerTableData: null,
  },
  effects: {
    *queryBasisInnerTable(_, { call, put }) {
      const resp = yield call(basisTable.queryBasisInnerTable);
      yield put({
        type: 'saveData',
        payload: {
          basisInnerTableData: resp || {},
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
export default BasisTable;
