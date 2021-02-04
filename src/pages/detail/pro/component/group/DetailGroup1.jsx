import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Descriptions, Tooltip, Card, Divider } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const DetailGroup1 = (props) => {
  const { groupData } = props;
  return (
    <Fragment>
      <Descriptions style={{ marginBottom: 24 }}>
        <Descriptions.Item label="信息标题1">{groupData.text1}</Descriptions.Item>
        <Descriptions.Item label="信息标题2">{groupData.num2}</Descriptions.Item>
        <Descriptions.Item label="信息标题3">{groupData.num3}</Descriptions.Item>
        <Descriptions.Item label="信息标题4">{groupData.phone}</Descriptions.Item>
        <Descriptions.Item label="信息标题5">{groupData.text3}</Descriptions.Item>
      </Descriptions>
      <Descriptions style={{ marginBottom: 24 }} title="信息组">
        <Descriptions.Item label="某某数据">{groupData.num1}</Descriptions.Item>
        <Descriptions.Item label="该数据更新时间">{groupData.date}</Descriptions.Item>
        <Descriptions.Item
          label={
            <span>
              {groupData.text1}
              <Tooltip title={groupData.tip}>
                <InfoCircleOutlined style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }} />
              </Tooltip>
            </span>
          }
        >
          {groupData.num1}
        </Descriptions.Item>
        <Descriptions.Item label="该数据更新时间">{groupData.date}</Descriptions.Item>
      </Descriptions>
      <h4 style={{ marginBottom: 16 }}>信息组</h4>
      <Card type="inner" title="多层级信息组">
        <Descriptions style={{ marginBottom: 16 }} title="组名称">
          <Descriptions.Item label="姓名">{groupData.text1}</Descriptions.Item>
          <Descriptions.Item label="角色码">{groupData.num2}</Descriptions.Item>
          <Descriptions.Item label="所属部门">XX公司 - YY部</Descriptions.Item>
          <Descriptions.Item label="过期时间">{groupData.date}</Descriptions.Item>
          <Descriptions.Item label="描述">{groupData.description}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ margin: '16px 0' }} />
        <Descriptions style={{ marginBottom: 16 }} title="组名称" column={1}>
          <Descriptions.Item label="内容">{groupData.description}</Descriptions.Item>
        </Descriptions>
        <Divider style={{ margin: '16px 0' }} />
        <Descriptions title="组名称">
          <Descriptions.Item label="姓名">{groupData.text1}</Descriptions.Item>
          <Descriptions.Item label="角色码">{groupData.num2}</Descriptions.Item>
        </Descriptions>
      </Card>
    </Fragment>
  );
};

export default DetailGroup1;

DetailGroup1.propTypes = {
  groupData: PropTypes.any,
};
