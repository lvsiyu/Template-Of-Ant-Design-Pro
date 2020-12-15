/* import { PlusOutlined } from '@ant-design/icons'; */
import { Divider } from 'antd';
import React, { /* useState, useRef, */ Fragment } from 'react';
/* import { useIntl, FormattedMessage } from 'umi'; */
import { PageContainer /* , FooterToolbar */ } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
/* import ProDescriptions from '@ant-design/pro-descriptions';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm'; */
import { queryRule } from './service';

const TableList = () => {
  const columns = [
    {
      title: '规则名称',
      dataIndex: 'name',
      /* tip: '规则名称是唯一的 key', */
      render: (_, record) => <a>{record.name}</a>,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '运行中',
          status: 'Processing',
        },
        2: {
          text: '已上线',
          status: 'Success',
        },
        3: {
          text: '异常',
          status: 'Error',
        },
      },
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      sorter: true,
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <Fragment>
          <a>配置</a>
          <Divider type="vertical" />
          <a>订阅警报</a>
        </Fragment>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        bordered
        request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
