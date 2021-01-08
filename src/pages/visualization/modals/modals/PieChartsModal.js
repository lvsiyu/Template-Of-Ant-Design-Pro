import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Pie } from '@ant-design/charts';

const PieChartsModal = (props) => {
  const { pieData, isModalVisible, handleOk, handleCancel } = props;
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
      <Pie {...config} />
    </Modal>
  );
};

export default PieChartsModal;

PieChartsModal.propTypes = {
  pieData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
