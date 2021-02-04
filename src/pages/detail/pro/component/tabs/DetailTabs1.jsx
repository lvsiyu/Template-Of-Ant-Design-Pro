import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProCard from '@ant-design/pro-card';
import DetailSteps1 from '../steps/DetailSteps1';
import DetailGroup1 from '../group/DetailGroup1';
import DetailEmpty1 from '../empty/DetailEmpty2';

const DetailTabs1 = (props) => {
  const { data } = props;
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
    </Fragment>
  );
};

export default DetailTabs1;

DetailTabs1.propTypes = {
  data: PropTypes.any,
};
