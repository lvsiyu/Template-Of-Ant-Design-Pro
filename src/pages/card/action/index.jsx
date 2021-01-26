import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const ActionCard = () => {
  return (
    <PageContainer>
      <ProCard tabs={{ type: 'card' }}>
        <ProCard.TabPane key="tab1" tab="产品一">
          <ProCard gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}>
            <ProCard
              title="Actions1 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions1 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions1 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions1 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
          </ProCard>
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="产品二">
          <ProCard gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}>
            <ProCard
              title="Actions2 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions2 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions2 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
            <ProCard
              title="Actions2 操作项"
              bordered
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
          </ProCard>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default ActionCard;
