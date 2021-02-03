import React, { Fragment } from 'react';
import ProCard from '@ant-design/pro-card';
import DetailSteps2 from '../steps/DetailSteps2';

const DetailTabs1 = () => {
  return (
    <Fragment>
      <ProCard title="流程进度2" style={{ marginBottom: 24 }}>
        <DetailSteps2 />
      </ProCard>
    </Fragment>
  );
};

export default DetailTabs1;
