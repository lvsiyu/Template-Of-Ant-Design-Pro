import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const DetailList1 = (props) => {
  const { basicGoods, loading } = props;
  let goodsData = [];
  if (basicGoods.length) {
    let num = 0;
    let amount = 0;
    basicGoods.forEach((item) => {
      num += Number(item.num);
      amount += Number(item.amount);
    });
    goodsData = basicGoods.concat({
      id: '总计',
      num,
      amount,
    });
  }

  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === basicGoods.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const goodsNum = (text, row, index) => {
    if (index < basicGoods.length) {
      return text;
    }
    return <span style={{ fontWeight: 600 }}>{text}</span>;
  };

  const goodsMoney = (text, row, index) => {
    if (index < basicGoods.length) {
      return text;
    }
    return <span style={{ fontWeight: 600 }}>{text}</span>;
  };

  const goodsColumns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      render: (text, row, index) => {
        if (index < basicGoods.length) {
          return <a>{text}</a>;
        }
        return {
          children: <span style={{ fontWeight: 600 }}>总计</span>,
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: '条码',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: renderContent,
    },
    {
      title: '数量（件）',
      dataIndex: 'num',
      key: 'num',
      align: 'right',
      render: (text, row, index) => goodsNum(text, row, index),
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (text, row, index) => goodsMoney(text, row, index),
    },
  ];
  return (
    <Table
      bordered
      style={{ marginBottom: 24 }}
      pagination={false}
      loading={loading}
      dataSource={goodsData}
      columns={goodsColumns}
      rowKey="id"
    />
  );
};

export default DetailList1;

DetailList1.propTypes = {
  basicGoods: PropTypes.any,
  loading: PropTypes.any,
};
