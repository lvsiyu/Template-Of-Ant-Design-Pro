import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {
  ProDetailHeaderExtra,
  ProDetailHeaderDescription,
  ProDetailHeaderAction,
  DetailTabs1,
  DetailTabs2,
} from './component/index';
import styles from './style/index.less';

const ProDetailPage = () => {
  const [tabActiveKey, setTabActiveKey] = useState('tabs1');
  return (
    <PageContainer
      extra={ProDetailHeaderAction}
      className={styles.pageHeader}
      content={ProDetailHeaderDescription}
      extraContent={ProDetailHeaderExtra}
      tabActiveKey={tabActiveKey}
      onTabChange={(value) => setTabActiveKey(value)}
      tabList={[
        { key: 'tabs1', tab: '选项卡1' },
        { key: 'tabs2', tab: '选项卡2' },
      ]}
    >
      {tabActiveKey === 'tabs1' ? <DetailTabs1 /> : <DetailTabs2 />}
    </PageContainer>
  );
};

export default ProDetailPage;
