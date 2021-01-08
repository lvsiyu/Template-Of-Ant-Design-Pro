import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Column } from '@ant-design/charts';

const ColumnChartsModal = (props) => {
  const { columnData, isModalVisible, handleOk, handleCancel } = props;
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
  };

  return (
    <Modal
      title="柱状图"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered
      destroyOnClose
    >
      <Column {...config} />
    </Modal>
  );
};

export default ColumnChartsModal;

ColumnChartsModal.propTypes = {
  columnData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
