/* import { Divider } from 'antd'; */
import React /* , { Fragment } */ from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { queryContradiction } from './service/index';

const Contradiction = () => {
  const columns = [
    {
      title: '矛盾类型',
      dataIndex: 'type',
      valueType: 'input',
      search: false,
    },
    {
      title: '矛盾内容',
      dataIndex: 'content',
      valueType: 'input',
      search: false,
    },
    {
      title: '矛盾地址',
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
      dataIndex: 'collectionPeople',
      search: false,
    },
    {
      title: '处理时间',
      dataIndex: 'processTime',
      search: false,
    },
    {
      title: '处理开始时间',
      dataIndex: 'collectionStartTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '处理结束时间',
      dataIndex: 'collectionEndTime',
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
        headerTitle="矛盾纠纷列表"
        request={(params) => queryContradiction({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default Contradiction;
