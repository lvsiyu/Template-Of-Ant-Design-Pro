/* 公司名称，版权号 */
const companyText = '技术支持: xxxxxxxx有限公司';

/* 需要去除版权号的页面的路由名称 */
const removeDefaultFooterPage = ['/form/basis'];

/* 根据传入text匹配数组对象中相同label的value */
const fillKeyValues = (text, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (text === arr[i].label) {
      return arr[i].value;
    }
  }
  return false;
};

export { companyText, removeDefaultFooterPage, fillKeyValues };
