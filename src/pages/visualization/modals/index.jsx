import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { Row, Col, Card, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import * as Charts from './components/index';
import * as ChartsModal from './modals/index';

const ModalsVisualization = (props) => {
  const { dispatch, lineModalData } = props;
  const [isLineChartModalVisible, setIsLineChartModalVisible] = useState(false);

  const showLineChartModal = () => {
    dispatch({
      type: 'modalsVisualization/queryLine',
      callback: () => setIsLineChartModalVisible(true),
    });
  };

  const handleLineChartOk = () => {
    setIsLineChartModalVisible(false);
  };

  const handleLineChartCancel = () => {
    setIsLineChartModalVisible(false);
  };
  return (
    <Fragment>
      <PageContainer>
        <Row gutter={16}>
          <Col span={16}>
            <Card
              title="主折线图"
              style={{ height: '509px' }}
              extra={
                <Button onClick={showLineChartModal} type="primary">
                  弹框显示
                </Button>
              }
            >
              <Charts.LineCharts />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="柱状图" style={{ marginBottom: '16px', height: '246px' }}>
              <Charts.ColumnCharts />
            </Card>
            <Card title="饼图" style={{ height: '246px' }}>
              <Charts.PieCharts />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '16px' }}>
          <Col span={12}>
            <Card title="条形图">
              <Charts.BarCharts />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="雷达图">
              <Charts.RadarCharts />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="词云图">
              <Charts.WordCloudCharts />
            </Card>
          </Col>
        </Row>
      </PageContainer>
      <ChartsModal.LineChartsModal
        isModalVisible={isLineChartModalVisible}
        handleOk={handleLineChartOk}
        handleCancel={handleLineChartCancel}
        lineData={lineModalData}
      />
    </Fragment>
  );
};

export default connect(({ modalsVisualization }) => ({
  lineModalData: modalsVisualization.lineModalData,
}))(ModalsVisualization);

ModalsVisualization.propTypes = {
  dispatch: PropTypes.any,
  lineModalData: PropTypes.any,
};
