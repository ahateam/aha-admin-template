<template>
  <div style="background: #fff;padding: 15px 0px">
    <div class="content">
      <el-row style="padding: 30px 50px 10px 50px">
        <el-col :span="12">
          <content-to-title title="卡卷功能"></content-to-title>
        </el-col>
        <el-col :span="12">
          <button style="float: right;width: 90px;height: 40px;background: rgb(64,158,255);text-align: center;
          font-size: 14px;color: #fff;padding: 5px;border: none;cursor: pointer;" @click="getCardType()">新增卡卷</button>
          <el-dialog
            title="请选择卡卷类型"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose"
            center>
            <span>
              <table style="width: 100%;border-collapse: collapse">
                <tr class="tr">
                  <th>请选择</th>
                  <th>卡券类型</th>
                  <th>卡券信息说明</th>
                </tr>
                <tr class="tr" v-for="(item,_index) in couponTypeList" :key="_index">
                  <td><input type="checkbox" style="width: 20px;height: 20px"></td>
                  <td>{{item.type}}</td>
                  <td>{{item.info}}</td>
                </tr>
              </table>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"><span @click="jump">确 定</span></el-button>
            </span>
          </el-dialog>
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
          couponTypeList:[],
          dialogVisible: false
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
          this.$http.get('/couponList')   //请求couponList接口
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
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        getCardType(){
          this.dialogVisible = true;
          console.log('开始请求');
          let that = this;
          this.$http.get('/couponTypeList')   //请求couponTypeList接口
            .then(function (res) {       //请求成功执行
              console.log('请求成功了');
              console.log(res);
              that.couponTypeList = res.data.data
            })
            .catch(function (err) {     //请求失败执行
              console.log('错误连接'+err);
            })
        },
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
  .tr th{
    border: 1px solid #000000;
    font-size: 16px;
  }
  .tr td{
    border: 1px solid #000000;
    text-align: center;
    font-size: 16px;
  }
</style>
