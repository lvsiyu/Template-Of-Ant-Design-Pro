import * as modalFormServices from '../service/index';

const ModalFormModel = {
  namespace: 'modalFormModel',
  state: {},
  effects: {
    *queryModalForm({ payload }, { call }) {
      const { value, callback } = payload;
      const resp = yield call(modalFormServices.queryModalForm, value);
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
export default ModalFormModel;
