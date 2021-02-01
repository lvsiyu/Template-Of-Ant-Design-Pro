import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { QuickSearch } from './components/index';
import styles from './style/index.less';

const FillForms = (props) => {
  const { onSearch, onTypeChange, defaultType = 'articles', onFilterChange } = props;
  const [showFilter, setShowFilter] = useState(true);
  return (
    <PageContainer>
      <ProCard
        bodyStyle={{ paddingBottom: 0 }}
        bordered={false}
        title="查询筛选-搜索"
        headerBordered
        className={showFilter ? '' : styles.hiddenFilter}
      >
        <QuickSearch
          onSearch={onSearch}
          onTypeChange={onTypeChange}
          defaultType={defaultType}
          onFilterChange={onFilterChange}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
      </ProCard>
    </PageContainer>
  );
};

export default FillForms;
FillForms.propTypes = {
  onSearch: PropTypes.any,
  onTypeChange: PropTypes.any,
  defaultType: PropTypes.any,
  onFilterChange: PropTypes.any,
};
