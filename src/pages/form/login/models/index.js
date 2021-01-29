import * as loginFormService from '../service/index';

const LoginFormModal = {
  namespace: 'loginForm',
  state: {},
  effects: {
    *queryLoginFormData({ payload }, { call }) {
      const { value, callback } = payload;
      const resp = yield call(loginFormService.queryLoginFormData, value);
      if (resp && callback) {
        callback();
      }
    },
  },
  reducers: {},
};
export default LoginFormModal;
