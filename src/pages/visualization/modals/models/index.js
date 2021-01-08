import { message } from 'antd';
import * as basisServices from '../service/index';

const ChartsModel = {
  namespace: 'modalsVisualization',
  state: {
    lineData: null,
    lineModalData: null,
    columnData: null,
    columnModalData: null,
    pieData: null,
    pieModalData: null,
    barData: null,
    barModalData: null,
    radarData: null,
    wordCloudData: null,
  },
  effects: {
    *queryLine({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryLine);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            lineData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            lineModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },

    *queryColumn({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryColumn);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            columnData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            columnModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },

    *queryPie({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryPie);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            pieData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            pieModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },
    *queryBar({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryBar);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            barData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            barModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },
    *queryRadar(_, { call, put }) {
      const resp = yield call(basisServices.queryRadar);
      yield put({
        type: 'saveData',
        payload: {
          radarData: resp.data || {},
        },
      });
    },
    *queryWordCloud(_, { call, put }) {
      const resp = yield call(basisServices.queryWordCloud);
      yield put({
        type: 'saveData',
        payload: {
          wordCloudData: resp.data || {},
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
