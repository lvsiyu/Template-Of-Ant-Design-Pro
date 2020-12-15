import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Bar } from '@ant-design/charts';

const BarCharts = (props) => {
  const { dispatch, barData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'basis/queryBar',
      });
    }
  }, []);

  const config = {
    data: barData,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    height: 200,
    legend: { position: 'top-left' },
  };

  return barData ? <Bar {...config} /> : <Skeleton style={{ height: '200px' }} />;
};

export default connect(({ basis }) => ({
  barData: basis.barData,
}))(BarCharts);
