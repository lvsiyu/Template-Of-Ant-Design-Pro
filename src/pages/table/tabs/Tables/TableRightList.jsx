import React from 'react';
import PropTypes from 'prop-types';
import ProTable from '@ant-design/pro-table';
import { Image } from 'antd';

const tableInnerImg = (text, record) => <Image width={80} src={record.url} />;

const TableRightList = (props) => {
  const { data, loading } = props;
  const columns = [
    {
      title: '时间点',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '图片',
      dataIndex: 'url',
      width: 80,
      render: (text, record) => tableInnerImg(text, record),
    },
    {
      title: '代码',
      width: 80,
      dataIndex: 'code',
      valueType: 'code',
    },
    {
      title: '操作',
      width: 80,
      valueType: 'option',
      render: () => [<a key="a">操作</a>],
    },
  ];
  return (
    <ProTable
      columns={columns}
      dataSource={data && data}
      bordered
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
      }}
      rowKey="key"
      toolBarRender={false}
      loading={loading}
      search={false}
    />
  );
};

TableRightList.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.any,
};

export default TableRightList;
