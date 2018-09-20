const Mock = require('mockjs');


const loginData = function (opt) {
  console.log('opt',opt);
  let loginData = [
    {
      code:'1',
      msg:'登陆成功!'
    }
  ]
  return{
    data:loginData  //返回假数据
  }

}


Mock.mock('/login','/post',loginData());
