import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Pie } from '@ant-design/charts';

const PieCharts = (props) => {
  const { dispatch, pieData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'basis/queryPie',
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

export default connect(({ basis }) => ({
  pieData: basis.pieData,
}))(PieCharts);
