import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Radar } from '@ant-design/charts';

const RadarCharts = (props) => {
  const { dispatch, radarData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'basisVisualization/queryRadar',
      });
    }
  }, [dispatch]);

  const config = {
    data: radarData && radarData.map((d) => ({ ...d, star: Math.log(d.star).toFixed(2) })),
    xField: 'name',
    yField: 'star',
    height: 200,
    meta: {
      star: {
        alias: '分数',
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
    area: {},
  };

  return radarData ? <Radar {...config} /> : <Skeleton style={{ height: '200px' }} />;
};

export default connect(({ basisVisualization }) => ({
  radarData: basisVisualization.radarData,
}))(RadarCharts);

RadarCharts.propTypes = {
  dispatch: PropTypes.any,
  radarData: PropTypes.any,
};
