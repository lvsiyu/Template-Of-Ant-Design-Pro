import React from 'react';
import ProTable from '@ant-design/pro-table';
import { queryProDetailList1 } from '../../service/index';

const columns = [
  {
    dataIndex: 'name',
    title: '名称',
    ellipsis: true,
  },
  {
    dataIndex: 'content1',
    title: '短内容',
    ellipsis: true,
  },
  {
    dataIndex: 'content2',
    title: '时间',
    ellipsis: true,
  },
  {
    dataIndex: 'content3',
    title: '长内容',
    ellipsis: true,
  },
];

const DetailListTabs1 = () => {
  return (
    <ProTable
      bordered
      columns={columns}
      request={queryProDetailList1}
      rowKey="name"
      pagination={{
        showQuickJumper: true,
        pageSize: 5,
      }}
      toolBarRender={false}
      search={false}
    />
  );
};

export default DetailListTabs1;
