<template>
  <div style="background: #fff;padding: 20px">
    <div class="box">

      <el-row style="padding: 20px 20px 0px 20px">
        <content-to-title title="默认按钮" style="padding: 10px 0"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="默认禁用按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="圆角按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="朴素按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="朴素禁用按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" plain disabled>主要按钮</el-button>
        <el-button type="success" plain disabled>成功按钮</el-button>
        <el-button type="info" plain disabled>信息按钮</el-button>
        <el-button type="warning" plain disabled>警告按钮</el-button>
        <el-button type="danger" plain disabled>危险按钮</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="加载按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button type="primary" :loading="true">加载中</el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="操作按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-row>

      <el-row class="title">
        <content-to-title title="上下页按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-row>

      <el-row class="title">
        <content-to-title title="图标按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="图标文字按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-row>

      <el-row class="title">
        <content-to-title title="不同尺寸按钮"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </el-row>
      <el-row class="input" style="margin-top: 20px;margin-bottom: 20px">
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
      </el-row>

    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    export default {
        name: "btnComponents",
      components:{
        ContentToTitle
      },
    }
</script>

<style scoped>
  .box{
    border: 1px solid gainsboro;
    background: #fff;
    padding: 10px;
  }
  .title{
    margin-top: 50px;
    padding: 0px 20px;
  }
  .input{
    padding: 0px 20px;
  }
</style>
