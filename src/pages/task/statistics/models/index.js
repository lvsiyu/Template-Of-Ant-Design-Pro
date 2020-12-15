import * as personnelServices from '../service/index';

const ChartsModel = {
  namespace: 'taskStatistics',
  state: {
    personnelData: null,
  },
  effects: {
    *queryLine(_, { call, put }) {
      const resp = yield call(personnelServices.queryPersonnel);
      yield put({
        type: 'saveData',
        payload: {
          personnelData: resp.data || {},
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
export default ChartsModel;
