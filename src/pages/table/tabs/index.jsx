import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { message } from 'antd';
import { TableLeftList, TableRightList } from './Tables/index';
import PropTypes from 'prop-types';

const TabsTable = (props) => {
  const { dispatch, tableRightData, loading } = props;
  const [id, setId] = useState('0');
  const [name, setName] = useState('默认名称');
  const [rightTableData, setRightTableData] = useState(null);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'tabsTable/queryRightTable',
        payload: {
          value: { id: 'all' },
          callback: (respData) => {
            setRightTableData(respData);
          },
        },
      });
    }
  }, [dispatch]);

  const queryRightTableSuccess = (newId, newName) => {
    message.success('查询成功');
    setId(newId);
    setName(newName);
    setRightTableData(tableRightData);
  };

  const changeSelect = (newId, newName) => {
    dispatch({
      type: 'tabsTable/queryRightTable',
      payload: {
        value: { id: newId },
        callback: () => queryRightTableSuccess(newId, newName),
      },
    });
  };
  return (
    <PageContainer>
      <ProCard split="vertical" title="左右结构表格" extra="副标题" bordered headerBordered>
        <ProCard colSpan="384px" ghost>
          <TableLeftList
            onChange={(newId, newCode) => changeSelect(newId, newCode)}
            loading={loading}
            id={id}
            name={name}
          />
        </ProCard>
        <ProCard title={`${name}-详细内容`}>
          <TableRightList data={rightTableData} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default connect(({ tabsTable, loading }) => ({
  tableRightData: tabsTable.tableRightData,
  loading: loading.effects['tabsTable/queryRightTable'],
}))(TabsTable);

TabsTable.propTypes = {
  dispatch: PropTypes.any,
  tableRightData: PropTypes.any,
  loading: PropTypes.any,
};
