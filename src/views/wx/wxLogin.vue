<template>
  <div class="box">
    <div class="content">
      <div class="text">
        <h2>企业通讯与销售管理平台</h2>
        <p>融合呼叫中心、CRM、OA办公、企业微信等多<br/>
          种应用，基于云计算SaaS平台架构，随时随地只<br/>
          要有网络的地方都可使用，超过20万家企业见证<br/>
          其安全稳定可靠，值得信赖。</p>
      </div>
      <div class="login-form">
        <div class="form-bg"></div>
          <form action="">
            <div class="form">
              <h1>登录平台</h1>
              <p>
                请用手机号作为用户名登录
              </p>
              <div class="item">
                <i class="iconfont icon-yonghu-tianchong"></i>
                <input class="input" type="text" name="user" placeholder="请输入用户名" />
              </div>
              <div class="item">
                <i class="iconfont icon-duanxin2"></i>
                <input class="input" type="password" name="user" placeholder="请输入密码" />
              </div>
              <div class="item">
                <input type="checkbox" style="float: left;width: 15px;height: 25px;margin-top: 10px">
                &nbsp;<span style="color: #fff;font-size: 14px">记住密码</span>
                <a href="#" style="float: right;text-decoration: none;cursor: pointer;font-size: 14px;color: #fff">忘记密码?</a>
              </div>
              <div class="item">
                <button class="button" @click="loginBtn">登&nbsp;&nbsp;录</button>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wxLogin",
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
  .box{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/wximages/bg.jpg");
    background-size: cover;
    background-position: center;
  }
  .content{
    position: relative;
    width: 960px;
    margin: 140px auto;
  }
  .text{
    float: left;
    margin: 90px 0 0 104px;
  }
  .text h2{
    color: #fff;
    font-size: 26px;
  }
  .text p{
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    margin-top: 30px;
  }
  .login-form{
    float: right;
    position: relative;
    padding: 40px 35px 40px 45px;
    width: 270px;
    height: 330px;
  }
  .form-bg{
    position: absolute;
    top: 0;
    left: 0;
    opacity: .8;
    filter: alpha(opacity=80);
    width: 100%;
    height: 100%;
    background-color: #141924;
  }
  .form{
    position: absolute;
  }
  .form h1{
    color: #fff;
    font-size: 18px;
  }
  .form p {
    font-size: 14px;
    color: #e9e9e9;
    margin-top: 15px;
  }
  .item{
    margin: 25px 0;
    height: 40px;
    line-height: 40px;
  }
  .input{
    float: right;
    width: 200px;
    padding: 12px;
    border: none;
  }
  .item i{
    float: left;
    font-size: 40px;
    background: gainsboro;
  }
  .button{
    width: 264px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border: none;
    background: url("../../assets/wximages/button-bg.jpg");
  }
</style>
