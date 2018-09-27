const Mock = require('mockjs');

// const Random =Mock.Random;

//couponList 数据
const produceData = function (opt) {
  console.log('opt',opt);
  let articles = [

    {
      type : '折扣券',
      name : '9.5折卡',
      date : '领取后当天生效3天有效' ,
      stock : '100',
      state : '已投放'
    },
    {
      type : '团购券',
      name : '中秋团购',
      date : '领取后当天生效3天有效' ,
      stock : '100',
      state : '待投放'
    },
    {
      type : '代金券',
      name : '20元代金券',
      date : '2018-9-10（已过期）' ,
      stock : '50',
      state : '已投放'
    },
    {
      type : '兑换券',
      name : '天猫兑换券',
      date : '2018-11-11' ,
      stock : '500',
      state : '待投放'
    }

  ];      //组合假数据的数组名
  return{
     data:articles  //返回假数据
  }
}

//login  数据
const loginData = function () {

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

//优惠卷种类
const couponTypeList = function(){
  let data=[
    {
      type : '折扣券',
      info : '可为用户提供消费折扣',
    },
    {
      type : '代金券',
      info : '可为用户提供抵扣现金服务',
    },
    {
      type : '兑换券',
      info : '可为用户提供消费赠品服务',
    },
    {
      type : '团购券',
      info : '可为用户提供团购套餐服务',
    },
    {
      type : '优惠卷',
      info : '即通用券，建议当以上四种无法满足需求时采用',
    }
  ]
  return{
    data:data  //返回假数据
  }
}
//新增优惠券
const couponAdd = function () {

  let data = [
    {
      code:'1',
      msg:'新增成功!'
    }
  ]

  return{
    data:data  //返回假数据
  }

}

Mock.mock('/login',/post|get/i,loginData());   //拦截/login，并返回假数据

Mock.mock('/couponList',/post|get/i,produceData());   //拦截/couponList，并返回假数据

Mock.mock('/couponTypeList',/post|get/i,couponTypeList());   //拦截/couponTypeList，并返回假数据

Mock.mock('/couponAdd',/post|get/i,couponAdd());   //拦截/couponAdd，并返回假数据
