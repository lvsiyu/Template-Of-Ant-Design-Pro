/* import { Divider } from 'antd'; */
import React /* , { Fragment } */ from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { querySecurity } from './service/index';

const Security = () => {
  const columns = [
    {
      title: '隐患类型',
      dataIndex: 'type',
      search: false,
    },
    {
      title: '隐患描述',
      dataIndex: 'description',
      search: false,
    },
    {
      title: '地址',
      dataIndex: 'address',
      valueType: 'input',
      search: false,
    },
    {
      title: '处理派出所',
      dataIndex: 'station',
      valueType: 'select',
      valueEnum: selectStationValue,
    },
    {
      title: '处理人',
      dataIndex: 'processPerson',
      search: false,
    },
    {
      title: '处理时间',
      dataIndex: 'processTime',
      search: false,
    },
    {
      title: '处理开始时间',
      dataIndex: 'processStarTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '处理结束时间',
      dataIndex: 'processEndTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    /* {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <Fragment>
          <a>操作</a>
          <Divider type="vertical" />
          <a>操作</a>
        </Fragment>
      ),
    }, */
  ];
  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        bordered
        pagination={{
          showQuickJumper: true,
        }}
        headerTitle="安全隐患列表"
        request={(params) => querySecurity({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default Security;
