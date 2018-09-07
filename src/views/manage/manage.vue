<template>
    <div>
      <el-row class="row-style">
        <radio-text :radioData="radioData"></radio-text>
        <radio-text :radioData="radioData1"></radio-text>
      </el-row>

      <el-row class="row-style">
        <el-table
          :data="tableData"
          border
          style="width: 100%" >
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-row>
    </div>
</template>

<script>
  import RadioText from '@/components/RadioText.vue';
  import radioTextData from '@/config/RadioTextData.js'
    export default {
        name: "manage",
        data() {
          return {
            radioData: radioTextData.radioTextData[0],
            radioData1: radioTextData.radioTextData[1],
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
        },
      components:{
        RadioText
      }
    }
</script>

<style scoped lang="scss">
  .row-style {
    background: #fff;
    margin-top: 20px;
    padding: $small-padding;
  }
</style>
