import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popconfirm, message } from 'antd';
import classNames from 'classnames';
import styles from '../../style/index.less';

const { Step } = Steps;

const DetailSteps1 = (props) => {
  const { stepData } = props;
  const confirm = () => {
    message.success('简易操作了一波');
  };

  const cancel = () => {
    message.error('取消操作了一波');
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
        <Steps
          direction={isMobile ? 'vertical' : 'horizontal'}
          current={stepData.current}
          percent={stepData.percent}
        >
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

export default DetailSteps1;

DetailSteps1.propTypes = {
  stepData: PropTypes.any,
};
