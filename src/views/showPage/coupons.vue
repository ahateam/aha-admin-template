<template>
  <div style="background: #fff;padding: 20px">
    <div class="box">
      <div class="content">
        <el-row style="padding: 30px 50px 10px 50px">
          <content-to-title title="卡卷功能"></content-to-title>
        </el-row>

        <el-row style="padding: 0px 50px">
          <el-tabs type="border-card">

            <el-tab-pane label="优惠卷">
              <template>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="type"
                    label="卡卷类型"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="卡卷名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="卡卷有效期"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="state"
                    label="全部状态"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="inventory"
                    label="库存"
                    width="180">
                  </el-table-column>
                  <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                  <el-button type="text">投放</el-button>
                  <el-button @click="handleClick(scope.row)" type="text">详情</el-button>
                  <el-button type="text">修改</el-button>
                  <el-button type="text">删除</el-button>
                  </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>

            <el-tab-pane label="会员卡">
              <template>
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="type"
                    label="卡卷类型"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="卡卷名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="卡卷有效期"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="state"
                    label="全部状态"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="inventory"
                    label="库存"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text">投放</el-button>
                      <el-button @click="handleClick(scope.row)" type="text">详情</el-button>
                      <el-button type="text">修改</el-button>
                      <el-button type="text">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>

            <el-tab-pane label="卡卷投放"></el-tab-pane>

            <el-tab-pane label="卡卷核销"></el-tab-pane>

          </el-tabs>
        </el-row>

      </div>
    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'
    export default {
        name: "coupons",
      data() {
        return {
          tableData: [{
            type: '折扣卷',
            name: '9折卡',
            time: '领取后当天生效3天有效',
            state: '待投放',
            inventory: '10'
          }, {
            type: '团购卷',
            name: '111',
            time: '领取后当天生效3天有效',
            state: '已投放',
            inventory: '12'
          }, {
            type: '代金券',
            name: '20元代金券',
            time: '领取后当天生效3天有效',
            state: '已投放',
            inventory: '15'
          }, {
            type: '兑换卷',
            name: '兑换券',
            time: '2018-09-10至2018-09-10（已过期）',
            state: '已投放',
            inventory: '9'
          },{
            type: '代金卷',
            name: '满1000减100代金券优惠卷',
            time: '领取后当天生效3天有效',
            state: '已投放',
            inventory: '7'
          },{
            type: '优惠卷',
            name: '满199减100',
            time: '领取后当天生效3天有效',
            state: '已投放',
            inventory: '22'
          },]
        }
      },
      methods: {
        handleClick(row) {
          console.log(row);
        }
      },
      components:{
        ContentToTitle
      },
    }
</script>

<style scoped>
  .box{
    background: gainsboro;
    padding: 10px 10px 100px 10px;
  }
  .content{
    background: #fff;
    margin: 50px;
    padding-bottom: 30px;
  }
</style>
