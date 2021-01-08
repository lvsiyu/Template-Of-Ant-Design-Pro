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
    radarModalData: null,
    wordCloudData: null,
    wordCloudModalData: null,
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
    *queryRadar({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryRadar);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            radarData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            radarModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },
    *queryWordCloud({ payload }, { call, put }) {
      const resp = yield call(basisServices.queryWordCloud);
      if (!payload) {
        yield put({
          type: 'saveData',
          payload: {
            wordCloudData: resp.data || {},
          },
        });
      } else {
        const { callback } = payload;
        yield put({
          type: 'saveData',
          payload: {
            wordCloudModalData: resp.data || {},
          },
        });
        if (resp && callback) {
          callback();
        } else {
          message.error('错误');
        }
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default ChartsModel;
