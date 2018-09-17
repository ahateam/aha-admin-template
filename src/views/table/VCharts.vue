<template>
  <div>
    <el-row style="margin: 10px; background: #fff">
      <el-col :span="12">
        <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
      </el-col>
      <el-col :span="12">
        <ve-pie :data="chartData1" :settings="chartSettings1"></ve-pie>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "VCharts",
      data () {
        this.chartSettings = {
          axisSite: { right: ['下单率'] },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['数值', '比率']
        }
        this.chartSettings1 = {
            dataType: 'percent'
        }
        return {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
              { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
              { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
              { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
              { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
              { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
          },
          chartData1: {
            columns: ['日期', '访问用户'],
            rows: [
              { '日期': '1/1', '访问用户': 1393 },
              { '日期': '1/2', '访问用户': 3530 },
              { '日期': '1/3', '访问用户': 2923 },
              { '日期': '1/4', '访问用户': 1723 },
              { '日期': '1/5', '访问用户': 3792 },
              { '日期': '1/6', '访问用户': 4593 }
            ]
          }
        }
      }
    }
</script>

<style scoped>

</style>
