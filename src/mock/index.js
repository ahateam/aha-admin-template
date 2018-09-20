const Mock = require('mockjs');

// const Random =Mock.Random;

//mock数据
const produceData = function (opt) {
  console.log('opt',opt);
  let articles = [

    {
      'type':'优惠券',
      'name':'九折卡',
      'date':'2018-01-01 14:50:01',
    },
    {
      'type':'优惠券1',
      'name':'九折卡',
      'date':'2018-01-01 14:50:01',
    },
    {
      'type':'优惠券2',
      'name':'九折卡',
      'date':'2018-01-01 14:50:01',
    },
    {
      'type':'优惠券3',
      'name':'九折卡',
      'date':'2018-01-01 14:50:01',
    }

  ];      //组合假数据的数组名
  // for (let i = 0; i < 5 ; i++){ //定义数据生成规则
  //   let newArticleObject = {
  //     title:Random.csentence(5,30),
  //     thunb_img:Random.dataImage('300*250','mock的图片'),
  //     name:Random.cname,
  //     date:Random.date()+' '+Random.time(),
  //     email:Random.email(),
  //   }
  //   articles.push(newArticleObject)
  // }
  return{
     data:articles  //返回假数据
  }
}


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

Mock.mock('/login',/post|get/i,loginData());   //拦截/user请求，并返回假数据
Mock.mock('/couponList',/post|get/i,produceData());   //拦截/user请求，并返回假数据




