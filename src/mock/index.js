const Mock = require('mockjs');

const Random =Mock.Random;

//mock数据
const produceData = function (opt) {
  console.log('opt',opt);
  let articles = [];
  for (let i = 0; i < 30 ; i++){ //定义数据生成规则
    let newArticleObject = {
      title:Random.csentence(5,30),
      thunb_img:Random.dataImage('300*250','mock的图片')
    }
  }
}
