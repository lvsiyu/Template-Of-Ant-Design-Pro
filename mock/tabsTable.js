const valueEnum = ['success', 'error', 'processing', 'default'];
const tableLeftDataArr = [];
for (let i = 0; i < 20; i += 1) {
  if (i % 2 === 0) {
    tableLeftDataArr.push({
      id: i + 1,
      name: `很长很长的名称很长很长的名称很长很长的名称${i}`,
      code1: 10,
      code2: 20,
      code3: 30,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
    });
  } else {
    tableLeftDataArr.push({
      id: i + 1,
      name: `名称${i}`,
      code1: 10,
      code2: 20,
      code3: 30,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
    });
  }
}

const tableLeftData = {
  code: 1,
  data: tableLeftDataArr,
  msg: 'success',
};

const tableRightDataArr = [];
for (let i = 0; i < 15; i += 1) {
  tableRightDataArr.push({
    createdAt: Date.now() - Math.floor(Math.random() * 10000),
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    code: `我是内容我是内容我是内容我是内容我是内容我是内容我是内容\n我是内容我是内容我是内容我是内容我是内容\n我是内容我是内容我是内容`,
    key: i,
  });
}

const tableRightData = {
  code: 1,
  data: tableRightDataArr,
  msg: 'success',
};

export default {
  'GET /mock/tabsTableLeft': tableLeftData,
  'GET /mock/tabsTableRight': tableRightData,
};
