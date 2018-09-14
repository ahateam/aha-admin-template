<template>
  <div>
    <el-row :gutter="8" style="background: rgb(218, 222, 228)">
      <el-col :xl="12" :lg="24" :xs="24" :sm="24" :md="24"  style="margin-top: 8px;" >
        <content-title :title="title"></content-title>
        <el-row >
          <el-col :span="24" class="content-box" >
            <el-col :span="4">
              <div class="img-box">
                <img src="@/assets/image/header.png" alt="" >
              </div>
            </el-col >
            <el-col :span="5">
              <p style="font-weight: bold;font-size:18px;font-family:Arial;margin:0;padding-bottom:9px;  overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #4c88f5">Hi,13274801080</p>
              <el-row style="margin-bottom: 10px">
                <i class="iconfont icon-duanxin2" style="color: #000;font-size: 16px;cursor: pointer"></i>
                <i class="iconfont icon-shouji" style="color: #4c88f5;font-size: 18px;cursor: pointer"></i>
                <i class="iconfont icon-yonghu" style="color: #4c88f5;font-size: 20px;cursor: pointer"></i>
              </el-row>
              <el-row style="color: #f7b247;">
                <i class="iconfont icon-huiyuan" style=" font-size: 20px"></i> 企业已认证
              </el-row>
            </el-col>
            <el-col :span="15">
              <el-row>
                <el-col :span="8" style="padding:0 8px;">
                  <p style="font-size: 14px"><span style="margin-right: 10px;">|</span> 我的产品</p>
                  <p class="font-weight">10</p>
                </el-col>
                <el-col :span="8" >
                  <p style="font-size: 14px;cursor: pointer"><span style="margin-right: 10px;">|</span> 信息反馈</p>
                  <p class="font-weight">10</p>
                </el-col>
                <el-col :span="8">
                  <p style="font-size: 14px;cursor: pointer"><span style="margin-right: 10px;">|</span> 订单明细</p>
                  <p class="font-weight">10</p>
                </el-col>
              </el-row>

            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xl="8" :lg="16" :xs="16" :sm="16" :md="16"  style="margin-top: 8px;">
        <content-title :title="title1"></content-title>
        <el-row>
          <el-col :span="24" class="content-box">
            <el-col :span="6" >
              <div class="img-box">
                <img src="@/assets/image/money.png" alt="">
              </div>
            </el-col>
            <el-col :span="18" style="margin-top: 10px">
              <p class=" applic-main-right-p" style="width:200px;float: left"> 累计充值：<span style="  color: #4C88F5;font-weight: bold;font-size:24px;font-family:Arial;">0.00</span>&nbsp;元</p>
              <el-button type="danger" class="btn-box" size="small"> 去充值 </el-button>
              <div style="clear: both"></div>
              <div style="margin-top: 6px">
                <p class=" applic-main-right-p" style="width:200px;float: left"> 当前积分：<span style="  color: #4C88F5;font-weight: bold;font-size:24px;font-family:Arial;">0.00</span></p>
                <el-button type="danger" class="btn-box" size="small" plain> 去兑换 </el-button>
              </div>
              <div style="clear: both"></div>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xl="4" :lg="8" :xs="8" :sm="8" :md="8" style="margin-top: 8px;">
        <content-title :title="title2"></content-title>
        <el-row>
          <el-col :span="24" class="content-box1">
            <el-col :spam="11">
              <div class="img-box1">
                <img src="@/assets/image/code.png" alt="">
              </div>
            </el-col>
            <el-col :span="13">
              <el-row>
                <p style="font-size: 16px;color:#333;font-weight: bold;padding-top: 22px;">中源蝶信 公众号</p>
                <p style="padding-top: 7px;color: #666;font-size: 14px"> 更多活动即时参与</p>
                <p style="padding-top: 7px;color: #666;font-size: 14px"> 随时查看产品统计</p>
              </el-row>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :span="24" style="margin-top: 8px;">
        <content-title :title="title3"></content-title>
        <el-row   style="padding-top: 15px;padding-bottom: 25px; background: #fff">

        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ContentTitle from '@/components/ContentTitle'
  import ProductBox from '@/components/ProductBox'
  export default {
    components:{
      ContentTitle,
      ProductBox
    },
    data(){
      return {
        title:'客户基本资料',
        title1:'账户余额',
        title2:'扫一扫',
        title3:'我的产品',
      }
    }
  }
</script>

<style scoped lang="scss">
  .content-box{
    padding-top: 10px;
    background:#fff;
    height: 108px;
  }
  .img-box{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    margin-top: 12px;
    position: relative;
    left: 50%;
    margin-left: -40px;
  }
  .img-box img{
    width: 80px;
    height: 80px;
  }
  .font-weight{
    color: #333333;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
  }
  p{
    margin: 0;
  }
  .applic-main-right-p{
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
  .btn-box{
    position: relative;
    margin-left: 30px;
    margin-top: 0px;
  }
  .img-box1{
    width: 105px;
    height: 105px;
    overflow: hidden;
    cursor: pointer;
    margin-top: 1px;
    position: relative;
    left: 50%;
    margin-left: -52px;
  }
  .img-box1 img{
    width: 105px;
    height: 105px;
  }
  .content-box1{
    background:#fff;
    height: 108px;
  }

</style>
