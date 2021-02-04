const basisListDataSource = [];
for (let i = 0; i < 10; i += 1) {
  basisListDataSource.push({
    title: `标题${i + 1}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  });
}

const detailsListDataSource = [];
for (let i = 0; i < 20; i += 1) {
  detailsListDataSource.push({
    id: i,
    title: `标题${i + 1}`,
    tag: ['我是tag1', '我是tag2', '我是比较长的tag3'],
    content:
      '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
    action: [
      { label: 'star', value: 156 },
      { label: 'great', value: 74 },
      { label: 'message', value: 5 },
    ],
    image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  });
}

const proDetailTitle = {
  code: 0,
  data: {
    title1: '标题1',
    title2: '标题2',
    time: '2021-02-06',
    action: '操作内容',
    rangeTime: '2020-02-01 ~ 2020-02-06',
    description: '备注标题备注标题备注标题备注标题',
    rightContent1: '大小内容',
    rightContent2: '568.08',
  },
  msg: 'success',
};

const proDetailTab1 = {
  code: 0,
  data: {
    step: {
      current: 1,
      percent: 60,
      stepContent: [
        {
          title: '第一步骤',
          name: '操作人1',
          time: '2021-02-04 17:53',
        },
        {
          title: '第二步骤',
          name: '操作人2',
          action: '简易操作',
        },
        {
          title: '第三步骤',
        },
        {
          title: '完成步骤',
        },
      ],
    },
    group: {
      text1: '短内容',
      text2: '中等内容中等内容中等内容',
      text3:
        '我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容',
      phone: '13888888888',
      num1: '123',
      num2: '1234567890',
      num3: '111222333444555666777888999',
      date: '2020-02-04',
      description: '这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...',
      tip: '这是说明',
    },
  },
  msg: 'success',
};

const proDetailTab2 = {
  code: 0,
  data: {
    step: {
      current: 1,
      status: 'default',
      statusName: '未响应状态',
      costTime: '2小时25分钟',
      people: '操作人2',
      stepContent: [
        {
          title: '第一步骤',
          name: '操作人1',
          time: '2021-02-04 17:53',
        },
        {
          title: '第二步骤',
          name: '操作人2',
          action: '简易操作',
        },
        {
          title: '第三步骤',
        },
        {
          title: '完成步骤',
        },
      ],
    },
    group: {
      text1: '短内容',
      text2: '中等内容中等内容中等内容',
      text3:
        '我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容我是比较长的内容',
      phone: '13888888888',
      num1: '123',
      num2: '1234567890',
      num3: '111222333444555666777888999',
      date: '2020-02-04',
      description: '这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...',
      tip: '这是说明',
    },
  },
  msg: 'success',
};

export default {
  'GET /mock/basisList': basisListDataSource,
  'GET /mock/detailsList': detailsListDataSource,
  'GET /mock/proDetailTitle': proDetailTitle,
  'GET /mock/proDetailTab1': proDetailTab1,
  'GET /mock/proDetailTab2': proDetailTab2,
};
