/* import { Divider } from 'antd'; */
import React /* , { Fragment } */ from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { queryCar } from './service/index';

const ModalsDetail = () => {
  const columns = [
    {
      title: '单位名称',
      dataIndex: 'name',
      valueType: 'input',
    },
    {
      title: '单位类型',
      dataIndex: 'type',
      search: false,
    },
    {
      title: '单位地址',
      dataIndex: 'address',
      valueType: 'input',
    },
    {
      title: '采集时间',
      dataIndex: 'time',
      search: false,
    },
    {
      title: '采集派出所',
      dataIndex: 'station',
      valueType: 'select',
      valueEnum: selectStationValue,
    },
    {
      title: '采集人',
      dataIndex: 'collectionPeople',
      search: false,
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
        headerTitle="暂未开发"
        request={(params) => queryCar({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default ModalsDetail;
