<template>
  <div style="background: #fff;padding: 20px">
    <div class="box">

      <el-row style="padding: 20px 20px 0px 20px">
        <content-to-title title="固定时间点" style="padding: 10px 0"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-time-select
          v-model="value1"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
            }"
          placeholder="选择时间">
        </el-time-select>
      </el-row>

      <el-row class="title">
        <content-to-title title="任意时间点"></content-to-title>
      </el-row>
      <el-row class="input">
        <template>
          <el-time-picker
            v-model="value2"
            :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
              }"
            placeholder="任意时间点">
          </el-time-picker>
          <el-time-picker
            arrow-control
            v-model="value3"
            :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
              }"
            placeholder="任意时间点">
          </el-time-picker>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="固定时间范围"></content-to-title>
      </el-row>
      <el-row class="input">
        <template>
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }">
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
              }">
          </el-time-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="任意时间范围"></content-to-title>
      </el-row>
      <el-row class="input">
        <template>
          <el-time-picker
            is-range
            v-model="value4"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
          <el-time-picker
            is-range
            arrow-control
            v-model="value5"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="基础日期"></content-to-title>
      </el-row>

      <el-row class="input">
        <el-col :span="12" class="time">
          默认
          <el-row class="input">
            <el-date-picker
              v-model="value6"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          带快捷选项
          <el-row class="input">
            <el-date-picker
              v-model="value7"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="其他日期单位"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-col :span="12" class="time">
          周
          <el-row class="input">
            <el-date-picker
              v-model="value8"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          年
          <el-row class="input">
            <el-date-picker
              v-model="value9"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="input">
        <el-col :span="12" class="time">
          月
          <el-row class="input">
            <el-date-picker
              v-model="value10"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          多个日期
          <el-row class="input">
            <el-date-picker
              type="dates"
              v-model="value11"
              placeholder="选择一个或多个日期">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="选择日期范围"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-col :span="12" class="time">
          默认
          <el-row class="input">
            {{value12}}
            <el-date-picker
              v-model="value12"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          带快捷选项
          <el-row class="input">
            <el-date-picker
              v-model="value13"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="日期和时间点"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-col :span="8" class="time">
          默认
          <el-row class="input">
            <el-date-picker
              v-model="value14"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="8" class="time">
          带快捷选项
          <el-row class="input">
            <el-date-picker
              v-model="value15"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="8" class="time">
          设置默认时间
          <el-row class="input">
            <el-date-picker
              v-model="value16"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="日期和时间范围"></content-to-title>
      </el-row>
      <el-row class="input">
        <el-col :span="12" class="time">
          默认
          <el-row class="input">
            <el-date-picker
              v-model="value17"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          带快捷选项
          <el-row class="input">
            <el-date-picker
              v-model="value18"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="默认的起始与结束时刻"></content-to-title>
      </el-row>
      <el-row class="input" style="margin-bottom: 20px">
        <el-col :span="12" class="time">
          起始日期时刻为 12:00:00
          <el-row class="input">
            <el-date-picker
              v-model="value19"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </el-row>
        </el-col>
        <el-col :span="12" class="time">
          起始日期时刻为 12:00:00，结束日期时刻为 08:00:00
          <el-row class="input">
            <el-date-picker
              v-model="value20"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
          </el-row>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'

    export default {
        name: "timerComponents",
      data() {
        return {
          value1: '',
          value2: new Date(2016, 9, 10, 18, 40),
          value3: new Date(2016, 9, 10, 18, 40),
          startTime: '',
          endTime: '',
          value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value6: '',
          value7: '',
          value8: '',
          value9: '',
          value10: '',
          value11: '',
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
          value12: '',
          value13: '',
          value14: '',
          value15: '',
          value16: '',
          value17: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
          value18: '',
          value19: '',
          value20: '',
        };
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
  .input{
    padding: 0px 20px;
  }
  .time{
    text-align: center;
    line-height: 40px;
    border: 1px solid gainsboro;
    padding-bottom: 20px;
  }
</style>
