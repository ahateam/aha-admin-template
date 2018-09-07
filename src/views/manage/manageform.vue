<template>
 <div>
   <el-form ref="form" :model="form"  :label-position="labelPosition" label-width="120px" style="background: #fff">

     <el-row class="row-style" style="padding-top: 10px">
       <el-form-item label="基础商品编号："  class="ietm-style">
         <el-input v-model="form.name">
         </el-input>
      </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="基础商品名称："  class="ietm-style">
         <el-input v-model="form.input" placeholder="2-12个字"></el-input>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="类型："  class="ietm-style">
         <el-input v-model="form.name"></el-input>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="成本价："  class="ietm-style">
         <el-input v-model="form.name"></el-input>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="状态："  class="ietm-style">
         <el-switch v-model="form.delivery"></el-switch>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="标签："  class="ietm-style">
         <el-col :span="12">
           <el-input v-model="form.name"></el-input>
         </el-col>
         <el-col :span="10" style="margin-left: 10px">
           <el-tag
             :key="tag"
             v-for="tag in dynamicTags"
             closable
             :disable-transitions="false"
             @close="handleClose(tag)">
             {{tag}}
           </el-tag>
           <el-input
             class="input-new-tag"
             v-if="inputVisible"
             v-model="inputValue"
             ref="saveTagInput"
             size="small"
             @keyup.enter.native="handleInputConfirm"
             @blur="handleInputConfirm"
           >
           </el-input>
           <el-button  type="primary" v-else class="button-new-tag" size="small" @click="showInput">添加</el-button>
         </el-col>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item label="备注：" class="ietm-style">
         <el-input type="textarea" v-model="form.desc"></el-input>
       </el-form-item>
     </el-row>

     <el-row class="row-style">
       <el-form-item  class="ietm-style" id="form-button">
         <el-button type="primary" style="margin-left: -150px" @click="onSubmit">保存</el-button>
         <el-button type="primary" style="margin-left: 40px">取消</el-button>
       </el-form-item>
     </el-row>
   </el-form>
 </div>
</template>

<script>
    export default {
        name: "manageShop",
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            input: ''
          },
          labelPosition: 'left',
          dynamicTags: ['标签一', '标签二', '标签三'],
          inputVisible: false,
          inputValue: ''
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },

        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamicTags.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        }
      }

    }
</script>

<style scoped lang="scss">
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .row-style {
    background: #fff;
    margin-top: 20px;
    padding: $small-padding;
  }
  .ietm-style{
    margin: 0;
  }
  #form-button{
    text-align: center;
  }
</style>
