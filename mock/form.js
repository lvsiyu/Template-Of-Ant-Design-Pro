const formRequest = {
  code: 0,
  data: true,
  msg: '请求成功',
};

const formTableList = { code: 0, data: [], msg: 'success' };
for (let i = 0; i < 30; i += 1) {
  formTableList.data.push({
    id: i,
    name: '姓名',
    sex: Math.random() > 0.5 ? '男' : '女',
    age: parseInt(Math.random() * 100),
    address: 'xxxx省xxx市xxx街道xxxx路xxxx号xxxxx单元xxx栋xxxx单元xxx',
    discription: '一些备注一些备注一些备注一些备注一些备注一些备注一些备注一些备注',
  });
}

export default {
  'POST /mock/formRequest': formRequest,
  'GET /mock/formTableList': formTableList,
};
