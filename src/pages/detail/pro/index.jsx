import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import ProSkeleton from '@ant-design/pro-skeleton';
import { Skeleton } from 'antd';
import {
  ProDetailHeaderExtra,
  ProDetailHeaderDescription,
  ProDetailHeaderAction,
  DetailTabs1,
  DetailTabs2,
} from './component/index';
import styles from './style/index.less';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const ProDetailPage = (props) => {
  const { dispatch, proDetailTitleData, proDetailTab1Data, proDetailTab2Data } = props;
  const [tabActiveKey, setTabActiveKey] = useState('tabs1');

  useEffect(() => {
    async function fetchData() {
      await waitTime(2000);
      if (dispatch) {
        dispatch({
          type: 'proDetail/queryProDetailTitle',
        });
        dispatch({
          type: 'proDetail/queryProDetailTab1',
        });
      }
    }
    fetchData();
  }, [dispatch]);

  const onChangeTabs = async (value) => {
    setTabActiveKey(value);
    await waitTime(2000);
    switch (value) {
      case 'tabs1':
        dispatch({
          type: 'proDetail/queryProDetailTab1',
        });
        dispatch({
          type: 'proDetail/resetProDetailTab2Data',
        });
        break;
      case 'tabs2':
        dispatch({
          type: 'proDetail/queryProDetailTab2',
        });
        dispatch({
          type: 'proDetail/resetProDetailTab1Data',
        });
        break;
      default:
        break;
    }
  };

  const showTabContent = (key) => {
    let tabContent = <ProSkeleton type="descriptions" pageHeader={false} />;
    if (key === 'tabs1' && proDetailTab1Data) {
      tabContent = <DetailTabs1 data={proDetailTab1Data} />;
    }
    if (key === 'tabs2' && proDetailTab2Data) {
      tabContent = <DetailTabs2 data={proDetailTab2Data} />;
    }

    return tabContent;
  };

  return (
    <PageContainer
      extra={
        proDetailTitleData ? (
          ProDetailHeaderAction(proDetailTitleData)
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      content={
        proDetailTitleData ? (
          ProDetailHeaderDescription(proDetailTitleData)
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      extraContent={
        proDetailTitleData ? (
          ProDetailHeaderExtra(proDetailTitleData)
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      className={styles.pageHeader}
      tabActiveKey={tabActiveKey}
      onTabChange={(value) => onChangeTabs(value)}
      tabList={[
        { key: 'tabs1', tab: '选项卡1' },
        { key: 'tabs2', tab: '选项卡2' },
      ]}
    >
      {showTabContent(tabActiveKey)}
    </PageContainer>
  );
};

export default connect(({ proDetail }) => ({
  proDetailTitleData: proDetail.proDetailTitleData,
  proDetailTab1Data: proDetail.proDetailTab1Data,
  resetProDetailTab1Data: proDetail.resetProDetailTab1Data,
  proDetailTab2Data: proDetail.proDetailTab2Data,
  resetProDetailTab2Data: proDetail.resetProDetailTab2Data,
}))(ProDetailPage);

ProDetailPage.propTypes = {
  dispatch: PropTypes.any,
  proDetailTitleData: PropTypes.any,
  proDetailTab1Data: PropTypes.any,
  proDetailTab2Data: PropTypes.any,
};
