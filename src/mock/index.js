const Mock = require('mockjs');

const Random =Mock.Random;

//mock数据
const produceData = function (opt) {
  console.log('opt',opt);
  let articles = [];      //组合假数据的数组名
  for (let i = 0; i < 5 ; i++){ //定义数据生成规则
    let newArticleObject = {
      title:Random.csentence(5,30),
      thunb_img:Random.dataImage('300*250','mock的图片'),
      name:'唐诗恶疾',
      date:Random.date()+' '+Random.time(),
      email:Random.email(),
    }
    articles.push(newArticleObject)
  }
  return{
     data:articles  //返回假数据
  }
}

Mock.mock('/user',/post|get/i,produceData());   //拦截/user请求，并返回假数据

