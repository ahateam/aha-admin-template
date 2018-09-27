<template>
  <div style="background: #fff;padding: 15px 0px">
    <div class="content">
      <el-row style="padding: 30px 50px 10px 50px">
        <el-col :span="12">
          <content-to-title title="卡卷功能"></content-to-title>
        </el-col>
        <el-col :span="12">
          <button @click="jump" style="float: right;background: rgb(64,158,255);text-align: center;
          font-size: 20px;color: #fff;padding: 5px;border: none;cursor: pointer;">新增卡卷</button>
        </el-col>
      </el-row>

      <el-row style="padding: 0px 50px">
        <el-tabs type="border-card">

          <el-tab-pane label="优惠卷">
            <template>
              <el-table
                :data="couponList"
                border
                style="width: 100%">
                <el-table-column
                  prop="type"
                  label="卡卷类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="卡卷名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="卡卷有效期"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="全部状态"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="stock"
                  label="剩余数量">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="250">
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
                :data="couponList"
                border
                style="width: 100%">
                <el-table-column
                  prop="type"
                  label="卡卷类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="卡卷名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="卡卷有效期"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="全部状态"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="stock"
                  label="剩余数量">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="250">
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
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'
    export default {
        name: "system",
      data() {
        return {
          couponList:[],
        }
      },
      mounted(){
        this.getUserData()
      },
      methods: {
        handleClick(row) {
          console.log(row);
        },
        getUserData(){
          console.log('开始请求');
          let that = this;
          this.$http.get('/coupon')   //请求couponList接口
            .then(function (res) {       //请求成功执行
              console.log('请求成功了');
              console.log(res);
              that.couponList = res.data.data

            })
            .catch(function (err) {     //请求失败执行
              console.log('错误连接'+err);
            })
        },
        jump(){
          this.$router.push({path: '/couponAdd'})
        }
      },
      components:{
        ContentToTitle
      },
    }
</script>

<style scoped>
  .content{
    background: #fff;
    padding-bottom: 50px;
  }
</style>
