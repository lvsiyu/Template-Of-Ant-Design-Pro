import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ProCard from '@ant-design/pro-card';
import DetailSteps2 from '../steps/DetailSteps2';
import DetailGroup2 from '../group/DetailGroup2';
import DetailEmpty2 from '../empty/DetailEmpty2';
import { DetailListTabs3, DetailListTabs4 } from '../list/index';

const DetailTabs2 = (props) => {
  const { data } = props;
  const [tab, setTab] = useState('tab3');
  return (
    <Fragment>
      <ProCard title="流程进度2" style={{ marginBottom: 24 }} headerBordered>
        <DetailSteps2 stepData={data.step} />
      </ProCard>
      <ProCard title="详细信息2" style={{ marginBottom: 24 }} bordered={false} headerBordered>
        <DetailGroup2 groupData={data.group} />
      </ProCard>
      <ProCard title="空内容展示2" style={{ marginBottom: 24 }} bordered={false} headerBordered>
        <DetailEmpty2 />
      </ProCard>
      <ProCard
        tabs={{
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab3" tab="产品三">
          <DetailListTabs3 />
        </ProCard.TabPane>
        <ProCard.TabPane key="tab4" tab="产品四">
          <DetailListTabs4 />
        </ProCard.TabPane>
      </ProCard>
    </Fragment>
  );
};

export default DetailTabs2;

DetailTabs2.propTypes = {
  data: PropTypes.any,
};
