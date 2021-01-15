import { Modal } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const AssignmentsModal = (props) => {
  const { visible, handleClickOk, handleClickCancel } = props;

  const modalClickOkChangeData = () => {
    handleClickOk(22);
  };
  return (
    <Modal
      title="分配任务"
      visible={visible}
      onOk={modalClickOkChangeData}
      onCancel={handleClickCancel}
      centered
    >
      <p>分配任务内容</p>
      <p>分配任务内容</p>
      <p>分配任务内容</p>
    </Modal>
  );
};

export default AssignmentsModal;
AssignmentsModal.propTypes = {
  visible: PropTypes.any,
  handleClickOk: PropTypes.any,
  handleClickCancel: PropTypes.any,
};
