<template>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="content-title">
              {{title}}
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "ContentTitle",
      props:{
          title:String
      }
    }
</script>

<style scoped lang="scss">
  .content-title{
    height: 50px;
    background: #eaedef;
    padding-left: 25px;
    color: #333;
    font-size: 20px;
    line-height: 50px;
  }
</style>
