import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Tag, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';
import { fillKeyValues } from '@/utils/common';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const DetailsList = (props) => {
  const { dispatch, detailsListData, loading } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'detailList/queryDetailsList',
      });
    }
  }, [dispatch]);

  const detailsListExtra = () => {
    return [
      <Button key="3" type="primary">
        操作
      </Button>,
    ];
  };

  const detailsListTag = (text, record) => {
    return (
      <Space>
        {record.tag.length > 0 &&
          record.tag.map((item, index) => <Tag key={`${index + 1}`}>{item}</Tag>)}
      </Space>
    );
  };

  const detailsListActions = (text, record) => {
    return (
      <Space>
        <IconText
          icon={StarOutlined}
          text={record.action && record.action.length > 0 && fillKeyValues('star', record.action)}
          key="list-vertical-star-o"
        />
        <IconText
          icon={LikeOutlined}
          text={record.action && record.action.length > 0 && fillKeyValues('great', record.action)}
          key="list-vertical-like-o"
        />
        <IconText
          icon={MessageOutlined}
          text={
            record.action && record.action.length > 0 && fillKeyValues('message', record.action)
          }
          key="list-vertical-message"
        />
      </Space>
    );
  };

  const detailsListImgs = (text, record) => {
    return <img width={272} alt="logo" src={record.image} />;
  };

  const detailsListContent = (text) => {
    return <div>{text}</div>;
  };

  return (
    <PageContainer>
      <ProList
        toolBarRender={detailsListExtra}
        itemLayout="vertical"
        rowKey="id"
        headerTitle="详情列表展示栏"
        dataSource={detailsListData && detailsListData}
        pagination={{ pageSize: 5 }}
        loading={loading}
        metas={{
          title: {},
          description: { render: (text, record) => detailsListTag(text, record) },
          actions: { render: (text, record) => detailsListActions(text, record) },
          extra: { render: (text, record) => detailsListImgs(text, record) },
          content: { render: (text) => detailsListContent(text) },
        }}
      />
    </PageContainer>
  );
};

export default connect(({ detailList, loading }) => ({
  detailsListData: detailList.detailsListData,
  loading: loading.effects['detailList/queryDetailsList'],
}))(DetailsList);

IconText.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.any,
};
DetailsList.propTypes = {
  dispatch: PropTypes.any,
  detailsListData: PropTypes.any,
  loading: PropTypes.any,
};
