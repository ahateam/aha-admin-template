<template>
  <el-col :span="24" class="title-box">
    {{title}}
    <span style="float: right;color:#689cfc;font-size: 12px; margin-right: 20px;letter-spacing: 0;cursor: pointer; font-weight: normal;">
      查看更多>>
    </span>
  </el-col>
</template>

<script>
    export default {
        name: "ContentMoreTitle",
        props:{
          title:String,
        }
    }
</script>

<style scoped lang="scss">
  .title-box{
    height: 14px;
    border-left: 4px solid #01bfcb;
    padding-left: 13px;
    line-height: 14px;
    margin-bottom: 18px;
    color: #878a9d;
    font-weight: 700;
    font-size: 14px;
  }
</style>
