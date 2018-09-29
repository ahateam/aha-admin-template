<template>
  <div style="background: gainsboro;padding: 20px">
    <div class="box">
      <el-row style="margin: 0px 15px 30px 15px">
        <content-to-title title="使用设置"></content-to-title>
      </el-row>

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="卡卷库存">
          <el-input v-model="form.name" style="width: 40%"></el-input>
          <span>&nbsp份</span>
        </el-form-item>

        <el-row style="margin-left: 10px;margin-bottom: 15px">
          <el-col :span="5">
            <input type="checkbox" style="width: 15px;height: 15px">
            <span style="font-size: 14px">用户可以分享领券链接</span>
          </el-col>
          <el-col :span="5">
            <input type="checkbox" style="width: 15px;height: 15px">
            <span style="font-size: 14px">用户可以分享领券链接</span>
          </el-col>
        </el-row>

        <el-form-item label="核销方式">
          <el-radio-group v-model="form.resource">
            <el-radio label="自助核销"></el-radio>
            <el-radio label="用扫码核销"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="margin-left: 35%">
          <el-button type="primary" @click="onSubmit">上一步</el-button>
          <el-button type="primary" @click="jump">创建</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    export default {
        name: "couponSet",
      components:{
        ContentToTitle
      },
      data() {
        return {
          form: {
            name: '',
            resource: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
          this.$router.push({path: '/couponAdd'})
        },
        jump() {
          this.$router.push({path: '/couponAddSuccess'});
            this.$message({                       //弹出新增卡卷成功提示
              message: '新增卡卷成功',
              type: 'success'
            })
        }
      }
    }
</script>

<style scoped>
  .box{
    background: #fff;
    padding: 50px 30px 10px 30px;
  }
</style>
