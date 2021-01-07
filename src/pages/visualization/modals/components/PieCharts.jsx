import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Pie } from '@ant-design/charts';

const PieCharts = (props) => {
  const { dispatch, pieData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'modalsVisualization/queryPie',
      });
    }
  }, []);

  const config = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    height: 140,
  };

  return pieData ? <Pie {...config} /> : <Skeleton style={{ height: '140px' }} />;
};

export default connect(({ modalsVisualization }) => ({
  pieData: modalsVisualization.pieData,
}))(PieCharts);

PieCharts.propTypes = {
  dispatch: PropTypes.any,
  pieData: PropTypes.any,
};
