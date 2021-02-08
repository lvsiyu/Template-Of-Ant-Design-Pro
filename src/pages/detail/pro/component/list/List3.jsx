import React from 'react';
import ProTable from '@ant-design/pro-table';
import { queryProDetailList3 } from '../../service/index';

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

const DetailListTabs3 = () => {
  return (
    <ProTable
      bordered
      columns={columns}
      request={queryProDetailList3}
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

export default DetailListTabs3;
