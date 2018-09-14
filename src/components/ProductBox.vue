<template>
    <div>


      <el-row :gutter="15" style="padding: 0 15px">

        <el-col :xl="6" :lg="8" :md="12"  v-for="(item,_index) in productData" :key="_index">
          <div class="product-box">
            <el-row :gutter="93" class="row-box" >
              <el-col :span="6">
                <div class="child-img-box">
                  <i :class="item.icon"></i>
                </div>
              </el-col>
              <el-col :span="18">
                <p class=" applic-main-right-p line-height-2 color_666">
                  {{item.productTitle}}
                  <span v-if="item.status == -1">
                      <span style="color: red;font-size: 12px;font-weight: normal;">  未激活 </span>
                   </span>
                </p>
                <p class="new-word">
                  {{item.productContent}}
                </p>
              </el-col>
            </el-row>
            <el-row :gutter="93"   class="row-box1" >
              <el-col :span="6">
                <div class="btn-defalut">{{item.productBtn}}</div>
              </el-col>
              <span v-if="item.status !== -1">
                  <el-col :span="18">
                     <p class="show-my-m"> 余额 :  {{item.productYue}}</p>
                   </el-col>
               </span>

            </el-row>
          </div>
        </el-col>


      </el-row>


    </div>
</template>

<script>
    export default {
        name: "ProductBox",
      data(){
          return {
            productData:[
              {
                status:1,
                icon:'iconfont icon-duanxin1',
                productTitle:'验证码通知短信',
                productContent:' 通过API的形式，将验证码或者通知短信准确发至用户手中。',
                productBtn:'进入应用',
                productYue:' 28 条'
              },
              {
                status:1,
                icon:'iconfont icon-huiyuan',
                productTitle:'会员营销短信',
                productContent:' 通过短信的形式，将企业的产品及服务信息推广至用户。',
                productBtn:'进入应用',
                productYue:' 0 条'
              },
              {
                status:1,
                icon:'iconfont icon-yuyin',
                productTitle:'语音验证码',
                productContent:' 通过API语音的形式，拨打电话告知用户验证码，实现信息验证。',
                productBtn:'进入应用',
                productYue:' 28 条'
              },
              {
                status:1,
                icon:'iconfont icon-diqiu',
                productTitle:'国际产品',
                productContent:' 短信可发至不同国家用户的手机，实现产品全球化服务。',
                productBtn:'进入应用',
                productYue:' 10 元'
              },
              {
                status:1,
                icon:'iconfont icon-liuliang2',
                productTitle:'流量产品',
                productContent:' 在线生成营销活动，赠予用户手机流量，实现企业活动引流。',
                productBtn:'进入应用',
                productYue:' 0 元'
              },
              {
                status:1,
                icon:'iconfont icon-mms',
                productTitle:'彩信产品',
                productContent:' 一条彩信可容纳数万字和多张图片，信息以最生动的形式传达给用户。',
                productBtn:'进入应用',
                productYue:' 10 条'
              },
              {
                status:1,
                icon:'iconfont icon-dyvmsyuyinfuwu',
                productTitle:'语音服务 ',
                productContent:' 为企业和开发者提供SDK，API的接入，实现拨打网络电话。',
                productBtn:'进入应用',
                productYue:' 0.00 元'
              },  {
                status:1,
                icon:'iconfont icon-socialfill',
                productTitle:'空号检测',
                productContent:' 提供空实号检测、二次账号清洗，羊毛党防控、风控、行业报告等服务。 ',
                productBtn:'进入应用',
                productYue:' 500 条'
              },  {
                status:-1,
                icon:'iconfont icon-duanxin1',
                productTitle:'HK短信 ',
                productContent:' 运营商政策导向性产品，发送有效性以运营商政策为准。',
                productBtn:'激活应用',
              },  {
                status:1,
                icon:'iconfont icon-youjian',
                productTitle:'邮件产品',
                productContent:' 定制私有的投递通道，精准锁定每一位用户，实现企业营销计划。',
                productBtn:'进入应用',
                productYue:' 30 条'
              },  {
                status:1,
                icon:'iconfont icon-jiekou',
                productTitle:'SDK短信产品',
                productContent:' 提供SDK接入，发送验证码短信至用户，实现信息验证。',
                productBtn:'进入应用',
                productYue:' 130 条'
              }
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  p{
    margin: 0;
    padding: 0;
  }
  .row-box{
    height: 75px;
    margin-top: 10px;
  }
  .row-box1{
    margin-top: 25px
  }
  .product-box{
    height: 150px;
    border: 1px solid #ddd;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0,0,0,.11);
    padding: 12px 14px 8px 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all ease .3s;
    margin-top: 10px;
  }
  .child-img-box{
    height: 64px !important;
    border-radius: 50%;width: 64px !important;
    margin-left: 6px;
    box-shadow: 0 0 6px rgba(0,0,0,.28);
    color: #4c88f5;
    text-align: center;
    line-height: 64px;
  }
  .child-img-box i{
    font-size: 32px;
  }
  .line-height-2{
    line-height: 2em;
  }
  .color_666 {
    color: #666;
  }
  .new-word {
    height: 3.6em;
    line-height: 1.6em;
    font-size: 12px;
    color: #808080;
    margin-bottom: 10px;
  }
  .btn-defalut{
    background-color: #9eabc3;
    width: 78px;
    line-height: 26px;
    height: 26px;
    font-size: 12px;
    padding: 0;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
  }
  .show-my-m{
    height: 26px;
    line-height: 26px;
    color: #333;
    font-size: 14px;
  }
  .applic-main-right-p{
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
  .product-box:hover {
    border: 1px solid #4c88f5;
  }
  .product-box:hover .color_666{
    color: #4c88f5;
  }
  .product-box:hover .new-word{
    color: #4c88f5;
  }
  .product-box:hover .btn-defalut{
    background: #4c88f5;
  }
</style>
