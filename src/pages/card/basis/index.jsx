import React, { useState } from 'react';
import { message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { RightOutlined } from '@ant-design/icons';

const BasisCard = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <PageContainer>
      <ProCard
        title="左右分栏带标题"
        extra="2019年9月28日"
        split="vertical"
        bordered
        headerBordered
      >
        <ProCard title="左侧详情" colSpan="300px">
          左侧内容
        </ProCard>
        <ProCard title="流量占用情况">
          <div style={{ height: 160 }}>右侧内容</div>
        </ProCard>
      </ProCard>

      <ProCard split="vertical" style={{ marginTop: 20 }}>
        <ProCard title="左侧详情" colSpan="30%">
          左侧内容
        </ProCard>
        <ProCard title="左右分栏子卡片带标题" headerBordered>
          <div style={{ height: 160 }}>右侧内容</div>
        </ProCard>
      </ProCard>

      <ProCard headerBordered title="卡片布局" gutter={[16, 16]} style={{ marginTop: 20 }}>
        <ProCard colSpan="300px" title="title" headerBordered bordered>
          300px
        </ProCard>
        <ProCard bordered>Auto</ProCard>
      </ProCard>

      <ProCard
        title="卡片布局"
        headerBordered
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        style={{ marginTop: 20 }}
      >
        <ProCard bordered>Responsive</ProCard>
        <ProCard bordered>Responsive</ProCard>
        <ProCard bordered>Responsive</ProCard>
      </ProCard>

      <ProCard headerBordered title="卡片布局" gutter={16} style={{ marginTop: 20 }}>
        <ProCard bordered>Auto</ProCard>
        <ProCard bordered>Auto</ProCard>
        <ProCard bordered>Auto</ProCard>
      </ProCard>

      <ProCard
        title="可折叠"
        headerBordered
        collapsible
        defaultCollapsed
        onCollapse={(collapse) => message.success(collapse ? '折叠' : '展开')}
        style={{ marginTop: 20 }}
      >
        内容
      </ProCard>
      <ProCard
        title="可折叠-受控自定义"
        extra={
          <RightOutlined
            rotate={!collapsed ? 90 : undefined}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        }
        style={{ marginTop: 16 }}
        headerBordered
        collapsed={collapsed}
      >
        内容
      </ProCard>
    </PageContainer>
  );
};

export default BasisCard;
