import { Modal } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const TableModal = (props) => {
  const { visible, handleClickOk, handleClickCancel } = props;

  return (
    <Modal
      title="弹框列表"
      visible={visible}
      onOk={handleClickOk}
      onCancel={handleClickCancel}
      centered
    >
      <p>分配任务内容</p>
      <p>分配任务内容</p>
      <p>分配任务内容</p>
    </Modal>
  );
};

export default TableModal;

TableModal.propTypes = {
  visible: PropTypes.any,
  handleClickOk: PropTypes.any,
  handleClickCancel: PropTypes.any,
};
