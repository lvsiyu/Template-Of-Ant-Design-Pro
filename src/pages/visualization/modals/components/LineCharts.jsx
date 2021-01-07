import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Line } from '@ant-design/charts';

const LineCharts = (props) => {
  const { dispatch, lineData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'modalsVisualization/queryLine',
      });
    }
  }, [dispatch]);

  const config = {
    data: lineData,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    height: 403,
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
            return ''.concat(s, ',');
          });
        },
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  return lineData ? <Line {...config} /> : <Skeleton height={403} />;
};

export default connect(({ modalsVisualization }) => ({
  lineData: modalsVisualization.lineData,
}))(LineCharts);

LineCharts.propTypes = {
  dispatch: PropTypes.any,
  lineData: PropTypes.any,
};
