/* import { Divider } from 'antd'; */
import React /* , { Fragment } */ from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { queryPlace } from './service/index';

const Place = () => {
  const columns = [
    {
      title: '单位名称',
      dataIndex: 'name',
      valueType: 'input',
      ellipsis: true,
    },
    {
      title: '单位类型',
      dataIndex: 'type',
      search: false,
      ellipsis: true,
    },
    {
      title: '单位性质',
      dataIndex: 'dwxz',
      search: false,
      ellipsis: true,
    },
    {
      title: '单位地址',
      dataIndex: 'dwdz',
      valueType: 'input',
      search: false,
      ellipsis: true,
    },
    {
      title: '单位法人',
      dataIndex: 'dwfr',
      valueType: 'input',
      search: false,
      ellipsis: true,
    },
    {
      title: '采集时间',
      dataIndex: 'cjsj',
      search: false,
      ellipsis: true,
    },
    {
      title: '采集派出所',
      dataIndex: 'cjpcs',
      valueType: 'select',
      valueEnum: selectStationValue,
      ellipsis: true,
    },
    {
      title: '采集人',
      dataIndex: 'cjr',
      width: 80,
      search: false,
      ellipsis: true,
    },
    {
      title: '采集开始时间',
      dataIndex: 'collectionStartTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '采集结束时间',
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
        headerTitle="重点单位场所列表"
        request={(params) => queryPlace({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default Place;
