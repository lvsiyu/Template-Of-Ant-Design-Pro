import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { NormalSearch, VerticalSearch, LightSearch, LightSearchSmall } from './components/index';

const FillForms = () => {
  return (
    <PageContainer>
      <ProCard title="查询筛选" headerBordered>
        <NormalSearch />
      </ProCard>
      <ProCard title="垂直筛选" headerBordered style={{ marginTop: 15 }}>
        <VerticalSearch />
      </ProCard>
      <ProCard title="轻量筛选-(正常大小)" headerBordered style={{ marginTop: 15 }}>
        <LightSearch />
      </ProCard>
      <ProCard title="轻量筛选-(缩小版)" headerBordered style={{ marginTop: 15 }}>
        <LightSearchSmall />
      </ProCard>
    </PageContainer>
  );
};

export default FillForms;
