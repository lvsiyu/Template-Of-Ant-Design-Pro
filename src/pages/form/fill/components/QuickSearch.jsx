import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Tabs } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import ProForm, { QueryFilter, ProFormText, ProFormDatePicker } from '@ant-design/pro-form';
import styles from '../style/index.less';

const { TabPane } = Tabs;

const QuickSearch = (props) => {
  const {
    onSearch,
    onTypeChange,
    defaultType = 'articles',
    onFilterChange,
    showFilter,
    setShowFilter,
  } = props;
  const [searchText, setSearchText] = useState();
  const quickSearch = ['快速搜索1', '快速搜索2', '快速搜索3'];
  return (
    <Fragment>
      <div>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={() => console.log(searchText)}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div className={styles.quickSearch}>
          {quickSearch.map((text) => (
            <span
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            className={styles.filterTrigger}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
      >
        <TabPane tab="文章" key="articles" />
        <TabPane tab="项目" key="projects" />
        <TabPane tab="应用" key="applications" />
      </Tabs>

      <QueryFilter
        submitter={false}
        span={24}
        labelWidth="auto"
        split
        onChange={onFilterChange}
        className={styles.filter}
      >
        <ProForm.Group title="姓名">
          <ProFormText name="name" />
        </ProForm.Group>
        <ProForm.Group title="详情">
          <ProFormText name="age" label="年龄" />
          <ProFormDatePicker name="birth" label="生日" />
        </ProForm.Group>
      </QueryFilter>
    </Fragment>
  );
};

export default QuickSearch;
QuickSearch.propTypes = {
  onSearch: PropTypes.any,
  onTypeChange: PropTypes.any,
  defaultType: PropTypes.any,
  onFilterChange: PropTypes.any,
  showFilter: PropTypes.any,
  setShowFilter: PropTypes.any,
};
