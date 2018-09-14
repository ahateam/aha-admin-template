<template>
      <div>
        <el-row class="row-first">
          <content-to-title :title="title"></content-to-title>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="img-box">
                <img src="@/assets/image/layout1.png" alt="">
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
                <img src="@/assets/image/layout3.png" alt="">
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
    height: 215px;
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
</style>
