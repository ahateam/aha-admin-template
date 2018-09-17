<template>
  <div>
    <el-col :span="24" class="title-box">
      {{title}}
    </el-col>
  </div>
</template>

<script>
    export default {
        name: "ContentToTitle",
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
    font-size: 20px;
  }
</style>
