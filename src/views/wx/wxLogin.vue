<template>
  <div class="box">

    <div class="content">
      <div class="content-box">
        <div class="content-text1">
          <img src="@/assets/images/contenttest.png" alt="">
        </div>
        <div class="content-text">
          <div class="content-form">
            <div class="form-title">
              <span class="title-text">登 录</span>
            </div>
            <div class="form-input">
              <el-input v-model="userName" placeholder="用户名" style="width:99%"></el-input>
            </div>
            <div class="form-input">
              <el-input type="password" v-model="pwd" placeholder="密码" style="width:99%"></el-input>
            </div>
            <div class="form-input">
              <div class="form-btn" style="height: 39px"></div>
            </div>
            <div class="form-check">
              <div class="active-login">
                <el-checkbox v-model="checked">下次自动登录</el-checkbox>
              </div>
              <div class="active-password">
                忘记密码
              </div>
            </div>
            <div class="form-input1">
              <div class="submit-btn" @click="loginBtn">登 录</div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-text1">
        <span >企业法人营业执照 &nbsp;</span>
        <span> &nbsp;| &nbsp;</span>
        <span>基础电信业务经营许可证 &nbsp;</span>
        <span> &nbsp;| &nbsp;</span>
        <span>增值电信业务经营许可证 &nbsp;</span>
        <span>  &nbsp;| &nbsp; </span>
        <span>网络文化经营许可证 </span>
      </div>
      <div class="footer-text2">
        <span>Copyright</span>
        <span>&copy; </span>
        <span> 1999-2018 中国联通 版权所有</span>
      </div>
      <div class="footer-text2">
          <span>
            <img src="@/assets/images/footer-icon.png" alt="" style="width: 160px;height: 38px">
          </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wxLogin",
      data(){
        return {
          companyCode:'',
          userName:'',
          pwd:'',
          btn:'',
          checked:false,
        }
      },
      methods:{
        loginBtn(){
          let that = this;
          this.$http.post('/login')             //请求 /login 接口
            .then(function (res) {              //成功执行函数
              if(res.data.data[0].code == '1'){       //判断返回值中的code  登陆成功 code == 1
                that.$message({                       //弹出登陆成功提示
                  message: res.data.data[0].msg,
                  type: 'success'
                })
                setTimeout(function () {            //延迟0.2s 跳转页面
                  that.$router.push({path: '/system'});
                },200)
                ;
              }else{
                that.$message.error(res.data.data[0].msg);    //弹出登陆失败提示
              }

            })
        }
      }
    }
</script>

<style scoped lang="scss">
  a{
    text-decoration:none;
    color:#333;
  }
  html{
    overflow-y: auto;
  }
  *{
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
  }
  .box{
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }
  .nav{
    width: 100%;
    height: 60px;
    background: #fff;
  }
  .nav-box{
    position: relative;
    width: 75%;
    height: 60px;
    margin: 0 auto;
  }
  .logo{
    position: absolute;
    left: 0;
    width: 110px;
    height: 50px;
    bottom: 5px;
    overflow: hidden;
  }
  .logo img{
    width: 110px;
    height: 50px;
  }
  .nav-btn{
    position: absolute;
    right: 70px;
    bottom: 5px;
  }

  .nav-btn1{
    position: absolute;
    right: 0px;
    bottom: 5px;
  }
  .btn-box{
    float: left;
    margin-right: 10px;
    height: 22px;
    line-height: 22px;
    margin-top: 12px;
    background: #f0581d;
    color: #fff;
    font-size: 12px;
    padding: 0  6px;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-box:hover{
    background: #f16821;
  }
  .btn-box:active{
    background: #db3820;
  }
  .content{
    width: 100%;
    height: 800px;
    background-image: url("../../assets/images/loginbg.jpg");
    background-size: cover;
    background-position: center;
  }
  .footer{
    width: 100%;
    background: #fff;
    bottom: 0;
    margin-top: 20px;
  }
  .content-box{
    width:75%;
    margin: 0 auto;
  }
  .content-text{
    float: left;
    width: 50%;
    height: 800px;
  }
  .content-text1{
    float: left;
    width: 50%;
    height: 800px;
    line-height: 800px;
  }
  .content-text1 img{
    width: 85%;
    vertical-align:middle;
  }
  .content-form{
    float: right;
    margin-top:157px;
    width: 310px;
    padding:20px 20px;
    border-radius: 5px;
    background: #fff;
  }
  .form-title{
    width: 100%;
    height: 50px;
    padding-left: 10px;
  }
  .title-text{
    font-size: 20px;
    padding-bottom: 10px;
    font-weight: 600;
    border-bottom: 4px solid #d42b2f;
  }

  .form-input{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 15px;
  }
  .form-btn{
    width: 89%;
    height: 42px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 15px;
    cursor: pointer;
    background-image: url("../../assets/images/btn-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin:0 auto;
  }

  .form-btn:active{
    border: 1px solid rgb(64,158,255);
  }
  .active-login{
    float: left;
    color: #313131;
    padding-left: 15px;
  }
  .active-password{
    float: right;
    color: #313131;
    padding-right: 15px;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
  }
  .form-check{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .form-input1{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .submit-btn{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ca361f;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    padding: 0 15px;
    cursor: pointer;
  }
  .footer{
    padding:20px 0;
  }
  .footer-text1{
    text-align: center;
    color: #000;
    font-size: 16px;
    cursor: pointer;
  }
  .footer-text2{
    margin-top: 10px;
    text-align: center;
    color: #808080;
    font-size: 15px;
    cursor: pointer;
  }
</style>
