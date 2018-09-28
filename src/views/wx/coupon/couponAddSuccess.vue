<template>
  <div style="background: gainsboro;padding: 20px">
    <div class="box">
      <el-row style="margin: 0px 15px 30px 15px">
        <content-to-title title="成功创建优惠卷"></content-to-title>
      </el-row>

      <div class="content">
        <div class="icon">
          <i class="iconfont icon-yonghu-tianchong"></i>
        </div>
        <div class="text">
          <h4>你创建的卡卷已提交审核</h4>
          <p>将在一个工作日内审核完毕，通过审核后可以投放卡卷</p>
          <button class="btn" @click="jump">返回卡卷管理</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    export default {
        name: "couponAddSuccess",
      components:{
        ContentToTitle
      },
      methods: {
        jump() {
          this.$router.push({path: '/couponList'})
        }
      }
    }
</script>

<style scoped>
  .box{
    background: #fff;
    padding: 50px 30px 10px 30px;
  }
  .content{
    position: relative;
    width: 40%;
    height: 250px;
    margin: 0 auto;
  }
  .icon{
    position: relative;
    width: 20%;
    float: left;
  }
  .icon i{
    font-size: 50px;
    color: green;
    float: right;
    padding: 10px;
    margin: 10px 10px 0px 0px;
  }
  .text{
    position: relative;
    width: 80%;
    float: right;
    margin-top: 0px;
  }
  .text p{
    font-size: 14px;
    margin-top: -15px;
  }
  .btn{
    margin-top: 30px;
  }
</style>
