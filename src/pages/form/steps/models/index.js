import * as stepsFormService from '../service/index';

const StepsModel = {
  namespace: 'stepsForm',
  state: {
    step1Status: false,
  },
  effects: {
    *queryStepsFormData({ payload }, { call }) {
      const { value, callback } = payload;
      const resp = yield call(stepsFormService.queryStepsFormData, value);
      if (resp && callback) {
        callback();
      }
    },
    *querySteps1({ payload }, { call, put }) {
      const { value, callback } = payload;
      const resp = yield call(stepsFormService.queryStepsFormData, value);
      yield put({
        type: 'saveData',
        payload: {
          step1Status: resp.data || {},
        },
      });
      if (resp && callback) {
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
export default StepsModel;
