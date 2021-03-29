import React from 'react';
import { message } from 'antd';
import PropTypes from 'prop-types';
import { Button, Badge, Tooltip } from 'antd';
import ProTable from '@ant-design/pro-table';
import { queryLeftTable } from '../service/index';
import styles from '../styles/index.less';

const tableIp = (item) => (
  <Tooltip title={item.name}>
    <Badge
      status={item.status}
      text={item.name && item.name.length > 6 ? `${item.name.substr(0, 6)}...` : item.name}
    />
  </Tooltip>
);

const TableLeftList = (props) => {
  const { onChange, id } = props;
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      width: 150,
      render: (_, item) => tableIp(item),
    },
    {
      title: '数值1',
      dataIndex: 'code1',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: '数值2',
      dataIndex: 'code2',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: '数值3',
      dataIndex: 'code3',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
  ];
  return (
    <ProTable
      columns={columns}
      request={(params) => queryLeftTable({ ...params })}
      rowKey="id"
      rowClassName={(record) => {
        return record.id === id ? styles['split-row-select-active'] : '';
      }}
      toolbar={{
        search: {
          placeholder: '请输入名称查询',
          onSearch: (value) => {
            message.success(value);
          },
        },
        actions: [
          <Button key="list" type="primary">
            操作按钮
          </Button>,
        ],
      }}
      options={false}
      pagination={{
        pageSize: 13,
        showSizeChanger: false,
      }}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.id) {
              onChange(record.id, record.name);
            }
          },
        };
      }}
    />
  );
};

export default TableLeftList;

TableLeftList.propTypes = {
  onChange: PropTypes.any,
  id: PropTypes.any,
};
