import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Progress, Tag, Space, message } from 'antd';
import ProList from '@ant-design/pro-list';
import { ModalListModal } from './modals/index';

const ModalList = (props) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { dispatch, modalListData, modalData, loading } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'modalList/queryModalListData',
      });
    }
  }, [dispatch]);

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

  const handleOk = (selectModalKey) => {
    message.success(`选择了${selectModalKey.length}条数据`);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    message.warning('取消了弹框，清空了选择');
    setIsModalVisible(false);
  };

  const queryModalListDataSuccess = () => {
    message.success('查询成功');
    setIsModalVisible(true);
  };

  const showModal = (record) => {
    if (record && record.title) {
      dispatch({
        type: 'modalList/queryModalListData',
        payload: {
          value: { name: record.title },
          callback: queryModalListDataSuccess,
        },
      });
    }
  };

  const basisListAction = (text, record) => {
    return <a onClick={() => showModal(record)}>弹框</a>;
  };

  const basisListToolBar = () => {
    return [
      <Button key="3" type="primary">
        按钮
      </Button>,
    ];
  };

  return (
    <Fragment>
      <PageContainer>
        <ProList
          rowKey="title"
          headerTitle="带请求数据的基础列表"
          toolBarRender={basisListToolBar}
          expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
          dataSource={modalListData && modalListData}
          pagination={{ pageSize: 5 }}
          rowSelection={rowSelection}
          split
          loading={loading}
          metas={{
            title: {},
            subTitle: { render: basisListTag },
            description: { render: basisListDescription },
            avatar: {},
            content: { render: basisListProgress },
            actions: { render: (text, record) => basisListAction(text, record) },
          }}
        />
      </PageContainer>
      <ModalListModal
        modalData={modalData}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Fragment>
  );
};

export default connect(({ modalList, loading }) => ({
  modalListData: modalList.modalListData,
  modalData: modalList.modalData,
  loading: loading.effects['modalList/queryModalListData'],
}))(ModalList);

ModalList.propTypes = {
  dispatch: PropTypes.any,
  modalListData: PropTypes.any,
  modalData: PropTypes.any,
  loading: PropTypes.any,
};
