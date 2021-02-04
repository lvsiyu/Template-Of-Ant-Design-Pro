import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popover, Badge, Popconfirm, message } from 'antd';
import classNames from 'classnames';
import styles from '../../style/index.less';

const { Step } = Steps;

const DetailSteps2 = (props) => {
  const { stepData } = props;
  const confirm = () => {
    message.success('简易操作了一波');
  };

  const cancel = () => {
    message.error('取消操作了一波');
  };

  const popoverContent = (
    <div style={{ width: 160 }}>
      {stepData.people ? stepData.people : '暂无操作人'}
      <span className={styles.textSecondary} style={{ float: 'right' }}>
        <Badge
          status={stepData.status ? stepData.status : '暂无状态'}
          text={
            <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
              {stepData.statusName ? stepData.statusName : '暂无状态名称'}
            </span>
          }
        />
      </span>
      <div className={styles.textSecondary} style={{ marginTop: 4 }}>
        耗时：{stepData.costTime ? stepData.costTime : '暂无耗时'}
      </div>
    </div>
  );

  const customDot = (dot, { status }) => {
    if (status === 'process') {
      return (
        <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
          {dot}
        </Popover>
      );
    }
    return dot;
  };

  const description = (value, index) => {
    return (
      <div
        className={
          stepData.current === index
            ? styles.stepDescription
            : classNames(styles.textSecondary, styles.stepDescription)
        }
      >
        {value.name ? <Fragment>{value.name}</Fragment> : null}
        {value.time ? <div>{value.time}</div> : null}
        {value.action ? (
          <div>
            <Popconfirm
              title="是否确认该操作"
              onConfirm={confirm}
              onCancel={cancel}
              okText="是"
              cancelText="否"
            >
              <a>{value.action}</a>
            </Popconfirm>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <Steps direction={isMobile ? 'vertical' : 'horizontal'} progressDot={customDot} current={1}>
          {stepData.stepContent &&
            stepData.stepContent.length > 0 &&
            stepData.stepContent.map((item, index) => (
              <Step
                key={`${index + 1}`}
                title={item.title}
                description={description(item, index)}
              />
            ))}
        </Steps>
      )}
    </RouteContext.Consumer>
  );
};

export default DetailSteps2;

DetailSteps2.propTypes = {
  stepData: PropTypes.any,
};
