import { message } from 'antd';
import * as basisServices from '../service/index';

const ChartsModel = {
  namespace: 'modalsVisualization',
  state: {
    lineData: null,
    lineModalData: null,
    columnData: null,
    pieData: null,
    barData: null,
    radarData: null,
    wordCloudData: null,
  },
  effects: {
    *queryLine(payload, { call, put }) {
      const { callback } = payload;
      const resp = yield call(basisServices.queryLine);
      if (!callback && resp) {
        yield put({
          type: 'saveData',
          payload: {
            lineData: resp.data || {},
          },
        });
      }

      if (callback && resp) {
        yield put({
          type: 'saveData',
          payload: {
            lineModalData: resp.data || {},
          },
        });
        callback();
      }
      if ((callback && !resp) || (!callback && !resp)) {
        message.error('错误');
      }
    },

    *queryColumn(_, { call, put }) {
      const resp = yield call(basisServices.queryColumn);
      yield put({
        type: 'saveData',
        payload: {
          columnData: resp.data || {},
        },
      });
    },

    *queryPie(_, { call, put }) {
      const resp = yield call(basisServices.queryPie);
      yield put({
        type: 'saveData',
        payload: {
          pieData: resp.data || {},
        },
      });
    },
    *queryBar(_, { call, put }) {
      const resp = yield call(basisServices.queryBar);
      yield put({
        type: 'saveData',
        payload: {
          barData: resp.data || {},
        },
      });
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
