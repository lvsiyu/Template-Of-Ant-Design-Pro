import * as fillFormServices from '../service/index';

const FillFormModel = {
  namespace: 'fillFormModel',
  state: {},
  effects: {
    *queryFillForm({ payload }, { call }) {
      const { value, callback } = payload;
      const resp = yield call(fillFormServices.queryFillForm, value);
      if (resp && callback && resp.code === 0) {
        callback(resp);
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default FillFormModel;
