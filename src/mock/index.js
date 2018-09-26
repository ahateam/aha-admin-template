const Mock = require('mockjs');

// const Random =Mock.Random;

//mock数据
const produceData = function (opt) {
  console.log('opt',opt);
  let articles = [

    {
      type : '折扣券',
      name : '9.5折卡',
      date : '领取后当天生效3天有效' ,
      stock : '100'
    },
    {
      type : '团购券',
      name : '中秋团购',
      date : '领取后当天生效3天有效' ,
      stock : '100'
    },
    {
      type : '代金券',
      name : '20元代金券',
      date : '2018-9-10（已过期）' ,
      stock : '50'
    },
    {
      type : '兑换券',
      name : '天猫兑换券',
      date : '2018-11-11' ,
      stock : '500'
    }

  ];      //组合假数据的数组名
  return{
     data:articles  //返回假数据
  }
}


const loginData = function (opt) {

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

Mock.mock('/login',/post|get/i,loginData());   //拦截/user请求，并返回假数据

Mock.mock('/couponList',/post|get/i,produceData());   //拦截/user请求，并返回假数据




