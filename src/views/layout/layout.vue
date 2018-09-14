<template>
      <div>
        <el-row class="row-first">
          <content-to-title :title="title"></content-to-title>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="img-box">
                <section class="el-container is-vertical">
                  <header class="el-header header-box" >Header</header>
                  <section class="el-container">
                  <aside class="el-aside asilde-box" >Aside</aside>
                    <main class="el-main main-box">Main</main>
                  </section>
                </section>
              </div>
            </el-col>
            <el-col :span="12"  >
              <div class="img-box">
                <img src="@/assets/image/layout2.png" alt="">
              </div>
            </el-col>
          </el-row>

          <el-row style="margin-top: 20px">
            <content-to-title :title="title1"></content-to-title>
         </el-row>
          <el-row :gutter="20" >
            <el-col :span="12">
              <div class="img-box">
                <section class="el-container is-vertical">
                  <header class="el-header header-box" >Header</header>
                  <main class="el-main main-box"  >Main</main>
                </section>
              </div>
            </el-col>
            <el-col :span="12">

            </el-col>
          </el-row>
        </el-row>
      </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'
    export default {
        name: "layout",
        data(){
            return{
              title:'当前项目布局',
              title1:'可使用布局',
              html1:``
            }
        },
        components:{
          ContentToTitle
        }
    }
</script>

<style scoped lang="scss">
  .row-first {
    background: #fff;
    padding: $small-padding;
  }
  .img-box{
    width: 100%;
    overflow: hidden;
    height: 260px;
  }
  .img-box img{
    width: inherit;
    height: 215px;
  }
  .demo-block .highlight code.hljs {
    margin: 0;
    border: none;
    max-height: none;
    border-radius: 0;
  }
  .hljs {
    font-size: 12px;
    background-color: #fafafa;
  }
  #chang-jian-ye-mian-bu-ju+.demo-container>.source>.el-container {
    margin-bottom: 40px;
  }
  .el-container.is-vertical {
    flex-direction: column;
  }
  .el-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
  }
  .header-box{
    height: 60px;
    background-color: #b3c0d1;
    text-align: center;
    line-height: 60px
  }
  .main-box{
    height: 200px;
    background-color: #e9eef3;
    text-align: center;
    line-height: 160px;
  }
  .asilde-box{
    height: 200px;
    width: 200px;
    line-height: 200px;
    text-align: center;
    background-color: #e9eef3;
    text-align: center;
    background-color: #d3dce6;
  }
</style>
