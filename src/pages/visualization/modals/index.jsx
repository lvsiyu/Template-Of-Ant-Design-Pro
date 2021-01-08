import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { Row, Col, Card, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import * as Charts from './components/index';
import * as ChartsModal from './modals/index';

const ModalsVisualization = (props) => {
  const { dispatch, loading, lineModalData, columnModalData, pieModalData, barModalData } = props;
  const [isLineChartModalVisible, setIsLineChartModalVisible] = useState(false);
  const [isColumnChartModalVisible, setIsColumnChartModalVisible] = useState(false);
  const [isPiehartModalVisible, setIsPieChartModalVisible] = useState(false);
  const [isBarhartModalVisible, setIsBarChartModalVisible] = useState(false);

  /* ******************折线图Modal********************* */
  const showLineChartModal = () => {
    dispatch({
      type: 'modalsVisualization/queryLine',
      payload: {
        callback: () => setIsLineChartModalVisible(true),
      },
    });
  };

  const handleLineChartOk = () => {
    setIsLineChartModalVisible(false);
  };

  const handleLineChartCancel = () => {
    setIsLineChartModalVisible(false);
  };

  /* ******************柱状图Modal********************* */
  const showColumnChartModal = () => {
    dispatch({
      type: 'modalsVisualization/queryColumn',
      payload: {
        callback: () => setIsColumnChartModalVisible(true),
      },
    });
  };

  const handleColumnChartOk = () => {
    setIsColumnChartModalVisible(false);
  };

  const handleColumnChartCancel = () => {
    setIsColumnChartModalVisible(false);
  };

  /* ******************柱状图Modal********************* */
  const showPieChartModal = () => {
    dispatch({
      type: 'modalsVisualization/queryPie',
      payload: {
        callback: () => setIsPieChartModalVisible(true),
      },
    });
  };

  const handlePieChartOk = () => {
    setIsPieChartModalVisible(false);
  };

  const handlePieChartCancel = () => {
    setIsPieChartModalVisible(false);
  };

  /* ******************柱状图Modal********************* */
  const showBarChartModal = () => {
    dispatch({
      type: 'modalsVisualization/queryBar',
      payload: {
        callback: () => setIsBarChartModalVisible(true),
      },
    });
  };

  const handleBarChartOk = () => {
    setIsBarChartModalVisible(false);
  };

  const handleBarChartCancel = () => {
    setIsBarChartModalVisible(false);
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
                <Button
                  disabled={!lineModalData && false}
                  onClick={showLineChartModal}
                  loading={loading}
                  type="primary"
                >
                  弹框显示
                </Button>
              }
            >
              <Charts.LineCharts />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="柱状图"
              style={{ marginBottom: '16px', height: '246px' }}
              extra={
                <Button
                  disabled={!lineModalData && false}
                  onClick={showColumnChartModal}
                  loading={loading}
                  type="primary"
                >
                  弹框显示
                </Button>
              }
            >
              <Charts.ColumnCharts />
            </Card>
            <Card
              title="饼图"
              style={{ height: '246px' }}
              extra={
                <Button
                  disabled={!pieModalData && false}
                  onClick={showPieChartModal}
                  loading={loading}
                  type="primary"
                >
                  弹框显示
                </Button>
              }
            >
              <Charts.PieCharts />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '16px' }}>
          <Col span={12}>
            <Card
              title="条形图"
              extra={
                <Button
                  disabled={!barModalData && false}
                  onClick={showBarChartModal}
                  loading={loading}
                  type="primary"
                >
                  弹框显示
                </Button>
              }
            >
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
      <ChartsModal.ColumnChartsModal
        isModalVisible={isColumnChartModalVisible}
        handleOk={handleColumnChartOk}
        handleCancel={handleColumnChartCancel}
        columnData={columnModalData}
      />
      <ChartsModal.PieChartsModal
        isModalVisible={isPiehartModalVisible}
        handleOk={handlePieChartOk}
        handleCancel={handlePieChartCancel}
        pieData={pieModalData}
      />
      <ChartsModal.BarChartsModal
        isModalVisible={isBarhartModalVisible}
        handleOk={handleBarChartOk}
        handleCancel={handleBarChartCancel}
        barData={barModalData}
      />
    </Fragment>
  );
};

export default connect(({ modalsVisualization, loading }) => ({
  lineModalData: modalsVisualization.lineModalData,
  columnModalData: modalsVisualization.columnModalData,
  pieModalData: modalsVisualization.pieModalData,
  barModalData: modalsVisualization.barModalData,
  loading:
    loading.effects[
      ('modalsVisualization/queryLine',
      'modalsVisualization/queryColumn',
      'modalsVisualization/queryPie',
      'modalsVisualization/queryBar')
    ],
}))(ModalsVisualization);

ModalsVisualization.propTypes = {
  dispatch: PropTypes.any,
  loading: PropTypes.any,
  lineModalData: PropTypes.any,
  columnModalData: PropTypes.any,
  pieModalData: PropTypes.any,
  barModalData: PropTypes.any,
};
