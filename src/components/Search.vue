<template>
    <div>
      <el-col :span="5" style="margin-left: 15px" >
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button id="btnset" slot="append" >搜索</el-button>
        </el-input>
      </el-col>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
#btnset{
  background: rgb(48,166,80);
  color: #fff;
  border-radius:none;
}
#btnset:active{
  background: rgb(55,171,159);
  color: #fff;
}
</style>
