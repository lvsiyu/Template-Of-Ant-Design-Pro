import React from 'react';
import { Row, Col, Card } from 'antd';
import { AMapScene, Marker } from '@antv/l7-react';
import { PageContainer } from '@ant-design/pro-layout';

const BasisMap = () => {
  function creatMarkers() {
    const markers = [];
    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        markers.push(<Marker key={`${i}-${j}`} lnglat={[112 + i, 30 + j]} />);
      }
    }
    return markers;
  }

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <Card style={{ height: '509px' }}>
            <AMapScene
              map={{
                center: [114, 32],
                pitch: 0,
                style: 'dark',
                zoom: 6,
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              option={{
                logoVisible: false,
              }}
            >
              {creatMarkers()}
            </AMapScene>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="待开发" style={{ marginBottom: '16px', height: '246px' }}></Card>
          <Card title="待开发" style={{ height: '246px' }}></Card>
        </Col>
      </Row>
      {/* <Row gutter={16} style={{ marginTop: '16px' }}>
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
      </Row> */}
    </PageContainer>
  );
};

export default BasisMap;
