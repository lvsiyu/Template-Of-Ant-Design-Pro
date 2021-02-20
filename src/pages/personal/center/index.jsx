import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const UserCenter = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <PageContainer>
      <Row gutter={[16, 0]}>
        <Col span={8}>
          <ProCard title="111">11111</ProCard>
        </Col>
        <Col span={16}>
          <ProCard
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              onChange: (key) => {
                setTab(key);
              },
            }}
          >
            <ProCard.TabPane key="tab1" tab="内容一">
              内容一
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="内容二">
              内容二
            </ProCard.TabPane>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default UserCenter;
