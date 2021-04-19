const basicGoods = [
  {
    id: '1234561',
    name: '名称1',
    barcode: '12421432143214321',
    price: '2.00',
    num: '1',
    amount: '2.00',
  },
  {
    id: '1234562',
    name: '名称2',
    barcode: '12421432143214322',
    price: '3.00',
    num: '2',
    amount: '6.00',
  },
  {
    id: '1234563',
    name: '名称3',
    barcode: '12421432143214323',
    price: '7.00',
    num: '4',
    amount: '28.00',
  },
  {
    id: '1234564',
    name: '长一点的名称4',
    barcode: '12421432143214324',
    price: '8.50',
    num: '3',
    amount: '25.50',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: '状态名称',
    status: 'processing',
    operator: '角色名称',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '5mins',
  },
];

const basisDescriptionData1 = {
  text1: '详情内容',
  text2: '详情内容',
  text3: '详情内容',
  text4: '详情内容',
};

const basisDescriptionData2 = {
  text1: '详情内容',
  text2: '详情内容',
  text3: '详情内容',
  text4: '详情内容',
  text5: '详情内容',
};

const getProfileBasicData = {
  code: 0,
  data: { basicGoods, basicProgress, basisDescriptionData1, basisDescriptionData2 },
  msg: 'success',
};

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

const detailList1 = {
  code: 0,
  data: [],
  msg: 'success',
};

const detailList2 = {
  code: 0,
  data: [],
  msg: 'success',
};

const detailList3 = {
  code: 0,
  data: [],
  msg: 'success',
};

const detailList4 = {
  code: 0,
  data: [],
  msg: 'success',
};

for (let i = 0; i < 25; i += 1) {
  detailList1.data.push({
    name: `名称1-${i}`,
    content1: '短一点的内容1',
    content2: '2020-02-05 14:24',
    content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
  });

  detailList2.data.push({
    name: `名称2-${i}`,
    content1: '短一点的内容1',
    content2: '2020-02-05 14:24',
    content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
  });

  detailList3.data.push({
    name: `名称3-${i}`,
    content1: '短一点的内容1',
    content2: '2020-02-05 14:24',
    content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
  });

  detailList4.data.push({
    name: `名称4-${i}`,
    content1: '短一点的内容1',
    content2: '2020-02-05 14:24',
    content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
  });
}

export default {
  'GET /mock/details/basic': getProfileBasicData,
  'GET /mock/proDetailTitle': proDetailTitle,
  'GET /mock/proDetailTab1': proDetailTab1,
  'GET /mock/proDetailTab2': proDetailTab2,
  'GET /mock/details/list1': detailList1,
  'GET /mock/details/list2': detailList2,
  'GET /mock/details/list3': detailList3,
  'GET /mock/details/list4': detailList4,
};
