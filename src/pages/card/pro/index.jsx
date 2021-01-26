import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

const ProCards = () => {
  return (
    <PageContainer>
      <ProCard title="高级复杂切分" extra="2019年9月28日" split="vertical" bordered headerBordered>
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <ProCard title="标题1">内容1</ProCard>
              <ProCard title="标题2">内容2</ProCard>
              <ProCard title="标题2">内容2</ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="标题1">内容1</ProCard>
              <ProCard title="标题2">内容2</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="标题">
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </ProCard>
        </ProCard>
        <ProCard title="标题">右侧内容</ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default ProCards;
