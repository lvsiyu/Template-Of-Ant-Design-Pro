import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Progress, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';

const ModalListModal = (props) => {
  const { modalData, isModalVisible, handleOk, handleCancel } = props;
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  const basisListTag = () => {
    return (
      <Space size={0}>
        <Tag color="blue">tag1</Tag>
        <Tag color="#5BD8A6">tag2</Tag>
      </Space>
    );
  };

  const basisListProgress = () => {
    return (
      <div style={{ minWidth: 200, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '200px' }}>
          <div>发布中</div>
          <Progress percent={80} />
        </div>
      </div>
    );
  };

  const basisListDescription = () => {
    return (
      <span style={{ maxWidth: 200 }}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </span>
    );
  };

  const handleClickOk = () => {
    handleOk(selectedRowKeys);
    setSelectedRowKeys([]);
  };

  const handleClickCancel = () => {
    handleCancel();
    setSelectedRowKeys([]);
  };

  return (
    <Modal
      title="弹框内容"
      visible={isModalVisible}
      onOk={handleClickOk}
      onCancel={handleClickCancel}
      width={1000}
      centered
      destroyOnClose
    >
      <ProList
        rowKey="title"
        expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
        dataSource={modalData && modalData}
        pagination={{ pageSize: 5 }}
        rowSelection={rowSelection}
        split
        metas={{
          title: {},
          subTitle: { render: basisListTag },
          description: { render: basisListDescription },
          avatar: {},
          content: { render: basisListProgress },
        }}
      />
    </Modal>
  );
};

export default ModalListModal;

ModalListModal.propTypes = {
  modalData: PropTypes.any,
  isModalVisible: PropTypes.any,
  handleOk: PropTypes.any,
  handleCancel: PropTypes.any,
};
