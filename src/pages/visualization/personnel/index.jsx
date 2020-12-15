/* import { Divider } from 'antd'; */
import React /* , { Fragment } */ from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { selectStationValue } from '@/utils/dictionary';
import { queryPersonnel } from './service/index';

const Personnel = () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'xm',
      valueType: 'input',
    },
    {
      title: '性别',
      dataIndex: 'xb',
      search: false,
    },
    {
      title: '证件号码',
      dataIndex: 'zjhm',
      valueType: 'input',
    },
    {
      title: '人员类型',
      dataIndex: 'rylx',
      search: false,
    },
    {
      title: '住址',
      dataIndex: 'zz',
      search: false,
    },
    {
      title: '采集派出所',
      dataIndex: 'cjpcs',
      valueType: 'select',
      valueEnum: selectStationValue,
    },
    {
      title: '采集人',
      dataIndex: 'cjr',
      search: false,
    },
    {
      title: '采集时间',
      dataIndex: 'cjsj',
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
        headerTitle="重点人员列表"
        request={(params) => queryPersonnel({ ...params })}
        columns={columns}
      />
    </PageContainer>
  );
};

export default Personnel;
