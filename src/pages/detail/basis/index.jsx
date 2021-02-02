import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'umi';
import { Card, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { BasisDetail1, BasisDetail2, DetailList1, DetailList2 } from './components/index';
import styles from './style/index.less';

const BasisDetail = (props) => {
  const { dispatch, basisDetailData, loading } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'basisDetail/queryBasisDetail',
      });
    }
  }, [dispatch]);

  return (
    <PageContainer>
      <Card bordered={false}>
        {basisDetailData && basisDetailData.basisDescriptionData1 ? (
          <BasisDetail1 data={basisDetailData.basisDescriptionData1} loading={loading} />
        ) : null}
        <Divider style={{ marginBottom: 32 }} />
        {basisDetailData && basisDetailData.basisDescriptionData2 ? (
          <BasisDetail2 data={basisDetailData.basisDescriptionData2} loading={loading} />
        ) : null}
        <Divider style={{ marginBottom: 32 }} />
        <div className={styles.title}>详情列表1</div>
        {basisDetailData && basisDetailData.basicGoods ? (
          <DetailList1 basicGoods={basisDetailData.basicGoods} loading={loading} />
        ) : null}
        <div className={styles.title}>详情列表2</div>
        {basisDetailData && basisDetailData.basicProgress ? (
          <DetailList2 basicProgress={basisDetailData.basicProgress} loading={loading} />
        ) : null}
      </Card>
    </PageContainer>
  );
};

export default connect(({ basisDetail, loading }) => ({
  basisDetailData: basisDetail.basisDetailData,
  loading: loading.effects['basisDetail/queryBasisDetail'],
}))(BasisDetail);

BasisDetail.propTypes = {
  dispatch: PropTypes.any,
  loading: PropTypes.any,
  basisDetailData: PropTypes.any,
};
