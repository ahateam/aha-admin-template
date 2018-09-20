<template>
    <div style="background: #fff;padding: 20px">
      <div class="box">

        <el-row :gutter="20" style="padding: 20px 20px 0px 20px">
          <el-col :span="12" >
            <content-to-title title="基本单选框" style="padding: 10px 0"></content-to-title>
          </el-col>
          <el-col :span="12">
            <content-to-title title="基本多选框" style="padding: 10px 0"></content-to-title>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="checked">
          <el-col :span="12">
            <div  class="label">
              <template>
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
              </template>
            </div>
          </el-col>
          <el-col :span="12" >
            <div class="label">
              <template>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="checked">备选项</el-checkbox>
              </template>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="title">
          <el-col :span="12">
            <content-to-title title="基本禁用单选框"></content-to-title>
          </el-col>
          <el-col :span="12">
            <content-to-title title="基本禁用多选框"></content-to-title>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="checked">
          <el-col :span="12">
            <div class="label">
              <template>
                <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
                <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
              </template>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="label">
              <template>
                <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
                <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
              </template>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="title">
          <el-col :span="12">
            <content-to-title title="单选框组"></content-to-title>
          </el-col>
          <el-col :span="12">
            <content-to-title title="多选框组"></content-to-title>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="checked">
          <el-col :span="12">
            <div class="label">
              <template>
                <el-radio-group v-model="radio2">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </template>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="label">
              <template>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                  <el-checkbox label="禁用" disabled></el-checkbox>
                  <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
              </template>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="title">
          <el-col :span="12">
            <content-to-title title="按钮样式单选框组合"></content-to-title>
          </el-col>
          <el-col :span="12">
            <content-to-title title="按钮样式多选框组合"></content-to-title>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="checked">
          <el-col :span="12">
            <div class="label" style="padding: 20px 20px;">
              <template>
                <div>
                  <el-radio-group v-model="radio3">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                  <el-radio-group v-model="radio4" size="medium">
                    <el-radio-button label="上海" ></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                  <el-radio-group v-model="radio5" size="small">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京" disabled ></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                  <el-radio-group v-model="radio6" disabled size="mini">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                  </el-radio-group>
                </div>
              </template>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="label" style="padding: 20px 20px;">
              <template>
                <div>
                  <el-checkbox-group v-model="checkboxGroup1">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox-group v-model="checkboxGroup2" size="medium">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox-group v-model="checkboxGroup3" size="small">
                    <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                  </el-checkbox-group>
                </div>
              </template>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="title">
          <el-col :span="12">
            <content-to-title title="带边框单选框组合"></content-to-title>
          </el-col>
          <el-col :span="12">
            <content-to-title title="带边框多选框组合"></content-to-title>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="checked">
          <el-col :span="12">
            <div class="label" style="padding: 20px 20px;">
              <template>
                <div>
                  <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
                  <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
                </div>
                <div style="margin-top: 20px">
                  <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
                  <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
                </div>
                <div style="margin-top: 20px">
                  <el-radio-group v-model="radio9" size="small">
                    <el-radio label="1" border>备选项1</el-radio>
                    <el-radio label="2" border disabled>备选项2</el-radio>
                  </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                  <el-radio-group v-model="radio10" size="mini" disabled>
                    <el-radio label="1" border>备选项1</el-radio>
                    <el-radio label="2" border>备选项2</el-radio>
                  </el-radio-group>
                </div>
              </template>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="label" style="padding: 20px 20px;">
              <template>
                <div>
                  <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
                  <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
                  <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox-group v-model="checkboxGroup5" size="small">
                    <el-checkbox label="备选项1" border></el-checkbox>
                    <el-checkbox label="备选项2" border disabled></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                  <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                    <el-checkbox label="备选项1" border></el-checkbox>
                    <el-checkbox label="备选项2" border></el-checkbox>
                  </el-checkbox-group>
                </div>
              </template>
            </div>
          </el-col>
        </el-row>

        <el-row class="title">
          <content-to-title title="indeterminate 状态多选框"></content-to-title>
        </el-row>
        <el-row class="checked">
          <el-col class="label">
            <template>
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </template>
          </el-col>
        </el-row>

        <el-row class="title">
          <content-to-title title="可选项目数量限制多选框"></content-to-title>
        </el-row>
        <el-row class="checked" style="margin-bottom: 20px">
          <el-col class="label">
            <template>
              <el-checkbox-group
                v-model="checkedCities1"
                :min="1"
                :max="2">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </template>
          </el-col>
        </el-row>

      </div>
    </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "checkedComponents",
      data () {
        return {
          radio: '1',
          checked: true,
          radio1: '选中且禁用',
          checked1: false,
          checked2: true,
          radio2: 3,
          checkList: ['选中且禁用','复选框 A'],
          radio3: '上海',
          radio4: '上海',
          radio5: '上海',
          radio6: '上海',
          checkboxGroup1: ['上海'],
          checkboxGroup2: ['上海'],
          checkboxGroup3: ['上海'],
          checkboxGroup4: ['上海'],
          cities: cityOptions,
          radio7: '1',
          radio8: '1',
          radio9: '1',
          radio10: '1',
          checked3: true,
          checked4: false,
          checked5: false,
          checked6: true,
          checkboxGroup5: [],
          checkboxGroup6: [],
          checkAll: false,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true,
          checkedCities1: ['上海', '北京'],
          cities: cityOptions
        };
      },
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
      },
      components:{
        ContentToTitle
      },
    }
</script>

<style scoped>
  .box{
    border: 1px solid gainsboro;
    background: #fff;
    padding: 10px;
  }
  .title{
    margin-top: 50px;
    padding: 0px 20px;
  }
  .checked{
    padding: 10px 20px;
    line-height: 40px;
  }
  .label{
    border: 1px solid gainsboro;
    padding: 0px 20px;
  }
</style>
