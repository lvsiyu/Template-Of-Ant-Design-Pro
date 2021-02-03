import React, { Fragment } from 'react';
import ProCard from '@ant-design/pro-card';
import DetailSteps1 from '../steps/DetailSteps1';

const DetailTabs1 = () => {
  return (
    <Fragment>
      <ProCard title="流程进度1" style={{ marginBottom: 24 }}>
        <DetailSteps1 />
      </ProCard>
    </Fragment>
  );
};

export default DetailTabs1;
