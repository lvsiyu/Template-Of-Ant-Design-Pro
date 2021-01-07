import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import { connect } from 'umi';
import { Column } from '@ant-design/charts';

const ColumnCharts = (props) => {
  const { dispatch, columnData } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'modalsVisualization/queryColumn',
      });
    }
  }, []);

  const config = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
    height: 140,
  };

  return columnData ? <Column {...config} /> : <Skeleton style={{ height: '140px' }} />;
};

export default connect(({ modalsVisualization }) => ({
  columnData: modalsVisualization.columnData,
}))(ColumnCharts);

ColumnCharts.propTypes = {
  dispatch: PropTypes.any,
  columnData: PropTypes.any,
};
