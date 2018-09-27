<template>
  <div style="background: gainsboro;padding: 20px">
    <div class="box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商户名称">
          <el-input v-model="form.name" style="width: 40%"></el-input>
        </el-form-item>
        <el-form-item label="卡卷颜色">
          <el-select v-model="form.region" placeholder="请选择颜色">
            <el-option label="颜色一" value="shanghai"></el-option>
            <el-option label="颜色二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="减免金额">
          <el-input v-model="form.money" style="width: 40%"></el-input>
        </el-form-item>
        <el-form-item label="有效期">
          <template>
            <div class="block">
              <el-date-picker
                v-model="value"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            </div>
          </template>
        </el-form-item>
        <el-form-item label="封面上传">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture"
            style="width: 50%">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，建议尺寸：850像素*350像素，且不超过2M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="使用须知">
          <el-input type="textarea" v-model="form.desc" style="width: 50%"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="onSubmit">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "couponAdd",
      data() {
        return {
          form: {
            name: '',
            region: '',
            money: '',
            date1: '',
            date2: '',
            desc: '',
          },
          value: '',
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],

        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
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
