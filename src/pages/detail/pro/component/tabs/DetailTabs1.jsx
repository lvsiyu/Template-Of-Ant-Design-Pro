import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ProCard from '@ant-design/pro-card';
import DetailSteps1 from '../steps/DetailSteps1';
import DetailGroup1 from '../group/DetailGroup1';
import DetailEmpty1 from '../empty/DetailEmpty2';
import { DetailListTabs1, DetailListTabs2 } from '../list/index';

const DetailTabs1 = (props) => {
  const { data } = props;
  const [tab, setTab] = useState('tab1');
  return (
    <Fragment>
      <ProCard title="流程进度1" style={{ marginBottom: 24 }} headerBordered>
        <DetailSteps1 stepData={data.step} />
      </ProCard>
      <ProCard title="详细信息1" style={{ marginBottom: 24 }} bordered={false} headerBordered>
        <DetailGroup1 groupData={data.group} />
      </ProCard>
      <ProCard title="空内容展示1" style={{ marginBottom: 24 }} bordered={false} headerBordered>
        <DetailEmpty1 />
      </ProCard>
      <ProCard
        tabs={{
          activeKey: tab,
          onChange: (key) => {
            setTab(key);
          },
        }}
      >
        <ProCard.TabPane key="tab1" tab="产品一">
          <DetailListTabs1 />
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="产品二">
          <DetailListTabs2 />
        </ProCard.TabPane>
      </ProCard>
    </Fragment>
  );
};

export default DetailTabs1;

DetailTabs1.propTypes = {
  data: PropTypes.any,
};
