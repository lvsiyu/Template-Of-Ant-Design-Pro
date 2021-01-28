import * as basisFormService from '../service/index';

const BasisFormModel = {
  namespace: 'basisForm',
  state: {},
  effects: {
    *queryBasisFormData({ payload }, { call }) {
      const { value, callback } = payload;
      const resp = yield call(basisFormService.queryBasisFormData, value);
      if (resp && callback) {
        callback();
      }
    },
  },
  reducers: {},
};
export default BasisFormModel;
