import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Line } from '@ant-design/charts';

const LineChartsModal = (props) => {
  const { lineData, isModalVisible, handleOk, handleCancel } = props;

  const config = {
    data: lineData,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
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

  return (
    <Modal
      title="主折线图"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
      destroyOnClose
    >
      <Line {...config} />
    </Modal>
  );
};

export default LineChartsModal;

LineChartsModal.propTypes = {
  lineData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
