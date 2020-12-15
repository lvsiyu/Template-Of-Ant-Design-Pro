import * as basisServices from '../service/index';

const ChartsModel = {
  namespace: 'basis',
  state: {
    lineData: null,
    columnData: null,
    pieData: null,
    barData: null,
    radarData: null,
    wordCloudData: null,
  },
  effects: {
    *queryLine(_, { call, put }) {
      const resp = yield call(basisServices.queryLine);
      yield put({
        type: 'saveData',
        payload: {
          lineData: resp.data || {},
        },
      });
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
