import React, { Fragment, useState } from 'react';
import { Tooltip, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { queryModalTable } from './service/index';
import { TableModal } from './modals';

const ProcessMap = {
  close: 'normal',
  running: 'active',
  online: 'success',
  error: 'exception',
};

const tableDate = (text, record) => (
  <Tooltip title={`${record.date} ${record.time}`}>
    <span>{`${record.date} ${record.time}`}</span>
  </Tooltip>
);

const tableAction = (showModal) => (
  <Space>
    <a onClick={showModal}>弹框</a>
  </Space>
);

const ModalTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '基本名称',
      dataIndex: 'name',
      valueType: 'input',
      ellipsis: true,
    },
    {
      title: '基本描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '日期显示',
      dataIndex: 'date-time',
      valueType: 'input',
      ellipsis: true,
      render: (text, record) => tableDate(text, record),
    },
    {
      title: '状态',
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '进度展示',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
    },
    {
      title: '时间选择',
      dataIndex: 'selectTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 70,
      render: () => tableAction(showModal),
    },
  ];

  return (
    <Fragment>
      <PageContainer>
        <ProTable
          rowKey="id"
          search={{
            labelWidth: 120,
          }}
          bordered
          pagination={{
            showQuickJumper: true,
            pageSize: 10,
          }}
          headerTitle="基础表格"
          request={(params) => queryModalTable({ ...params })}
          columns={columns}
        />
      </PageContainer>
      <TableModal
        visible={isModalVisible}
        handleClickOk={handleModalOk}
        handleClickCancel={handleModalCancel}
      />
    </Fragment>
  );
};

export default ModalTable;
