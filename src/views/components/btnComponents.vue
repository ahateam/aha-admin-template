<template>
    <div>
      <div  style="background: #fff;padding: 20px">

        <content-to-title :title="title" style="padding: 10px 0"></content-to-title>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title1"></content-to-title>
        </el-row>
        <el-row>
          <el-button disabled>默认按钮</el-button>
          <el-button type="primary" disabled>主要按钮</el-button>
          <el-button type="success" disabled>成功按钮</el-button>
          <el-button type="info" disabled>信息按钮</el-button>
          <el-button type="warning" disabled>警告按钮</el-button>
          <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title2"></content-to-title>
        </el-row>
        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title3"></content-to-title>
        </el-row>
        <el-row>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title4"></content-to-title>
        </el-row>
        <el-row>
          <el-button plain disabled>朴素按钮</el-button>
          <el-button type="primary" plain disabled>主要按钮</el-button>
          <el-button type="success" plain disabled>成功按钮</el-button>
          <el-button type="info" plain disabled>信息按钮</el-button>
          <el-button type="warning" plain disabled>警告按钮</el-button>
          <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title5"></content-to-title>
        </el-row>
        <el-row>
          <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title6"></content-to-title>
        </el-row>
        <el-row>
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-button-group>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title7"></content-to-title>
        </el-row>
        <el-row>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title8"></content-to-title>
        </el-row>
        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title9"></content-to-title>
        </el-row>
        <el-row>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>

        <el-row class="title">
          <content-to-title :title="title10"></content-to-title>
        </el-row>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button size="medium">中等按钮</el-button>
          <el-button size="small">小型按钮</el-button>
          <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row style="margin-top: 20px">
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
      data(){
        return{
          title:'默认按钮',
          title1:'默认禁用按钮',
          title2:'圆角按钮',
          title3:'朴素按钮',
          title4:'朴素禁用按钮',
          title5:'加载按钮',
          title6:'操作按钮',
          title7:'上下页按钮',
          title8:'图标按钮',
          title9:'图标文字按钮',
          title10:'不同尺寸按钮'
        }
      },
        components:{
          ContentToTitle
        },
    }
</script>

<style scoped>
  .title{
    margin-top: 20px;
  }
</style>
