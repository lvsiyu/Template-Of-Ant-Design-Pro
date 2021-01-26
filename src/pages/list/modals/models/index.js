import * as modalListService from '../service/index';

const ModalListModel = {
  namespace: 'modalList',
  state: {
    modalListData: null,
    modalData: null,
  },
  effects: {
    *queryModalListData({ payload }, { call, put }) {
      if (payload) {
        const { value, callback } = payload;
        const resp = yield call(modalListService.queryModalListData, value);
        yield put({
          type: 'saveData',
          payload: {
            modalData: resp || null,
          },
        });
        if (resp && callback) {
          callback();
        }
      } else {
        const resp = yield call(modalListService.queryModalListData);
        yield put({
          type: 'saveData',
          payload: {
            modalListData: resp || null,
          },
        });
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default ModalListModel;
