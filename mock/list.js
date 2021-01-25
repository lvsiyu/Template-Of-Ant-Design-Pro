const basisListDataSource = [];
for (let i = 0; i < 10; i += 1) {
  basisListDataSource.push({
    title: `标题${i + 1}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  });
}

export default {
  'GET /mock/basisList': basisListDataSource,
};
