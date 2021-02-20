import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const UserInfo = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <PageContainer>
      <ProCard
        tabs={{
          tabPosition: 'left',
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab1" tab="基本设置">
          <ProCard direction="column" gutter={[0, 16]}>
            <ProCard bordered>内容1-1</ProCard>
            <ProCard bordered>内容1-2</ProCard>
          </ProCard>
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="安全设置">
          <ProCard direction="column" gutter={[0, 16]}>
            <ProCard bordered>内容2-1</ProCard>
            <ProCard bordered>内容2-2</ProCard>
          </ProCard>
        </ProCard.TabPane>
        <ProCard.TabPane key="tab3" tab="新消息通知">
          <ProCard direction="column" gutter={[0, 16]}>
            <ProCard bordered>内容3-1</ProCard>
            <ProCard bordered>内容3-2</ProCard>
          </ProCard>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default UserInfo;
