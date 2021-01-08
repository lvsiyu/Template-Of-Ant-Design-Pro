import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Bar } from '@ant-design/charts';

const BarChartsModal = (props) => {
  const { barData, isModalVisible, handleOk, handleCancel } = props;
  const config = {
    data: barData,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };

  return (
    <Modal
      title="饼图"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
      destroyOnClose
    >
      <Bar {...config} />
    </Modal>
  );
};

export default BarChartsModal;

BarChartsModal.propTypes = {
  barData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
