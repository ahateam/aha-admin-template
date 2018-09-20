<template>
  <div style="background: #fff;padding: 20px">
    <div class="box">

      <el-row style="padding: 20px 20px 0px 20px">
        <content-to-title title="基本单选择器" style="padding: 10px 0"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="有禁用选项选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="禁用状态选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value3" disabled placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="可清空单选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value4" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="基本多选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            v-model="value11"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="自定义模板选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value6" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="分组选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value7" placeholder="请选择">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="可搜索选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="远程搜索选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="可创建条目选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <template>
          <el-select
            v-model="value10"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-row>

      <el-row class="title">
        <content-to-title title="基本级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-col :span="12" class="ways">
          默认 click 触发子菜单
          <el-row>
            <el-cascader
              :options="moreoptions"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          </el-row>
        </el-col>
        <el-col :span="12" class="ways">
          hover 触发子菜单
          <el-row>
            <el-cascader
              expand-trigger="hover"
              :options="moreoptions"
              v-model="selectedOptions2"
              @change="handleChange">
            </el-cascader>
          </el-row>
        </el-col>
      </el-row>

      <el-row class="title">
        <content-to-title title="有禁用选项级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-cascader :options="optionsWithDisabled"></el-cascader>
      </el-row>

      <el-row class="title">
        <content-to-title title="仅显示最后一级级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-cascader
          :options="moreoptions"
          :show-all-levels="false"
        ></el-cascader>
      </el-row>

      <el-row class="title">
        <content-to-title title="默认值级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-cascader
          :options="moreoptions"
          v-model="selectedOptions3"
        ></el-cascader>
      </el-row>

      <el-row class="title">
        <content-to-title title="选择即改变级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-cascader
          :options="moreoptions"
          change-on-select
        ></el-cascader>
      </el-row>

      <el-row class="title">
        <content-to-title title="动态加载次级选项级联选择器"></content-to-title>
      </el-row>
      <el-row class="select">
        <el-cascader
          :options="moreoptions2"
          @active-item-change="handleItemChange"
          :props="props"
        ></el-cascader>
      </el-row>

      <el-row class="title">
        <content-to-title title="可搜索级联选择器"></content-to-title>
      </el-row>
      <el-row class="select" style="margin-bottom: 20px">
        <el-col :span="12" class="ways">
          只可选择最后一级菜单的选项
          <el-row>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="moreoptions"
              filterable
            ></el-cascader>
          </el-row>
        </el-col>
        <el-col :span="12" class="ways">
          可选择任意一级菜单的选项
          <el-row>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="moreoptions"
              filterable
              change-on-select
            ></el-cascader>
          </el-row>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import ContentToTitle from '@/components/ContentToTitle'
    export default {
        name: "selectComponents",
      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          options2: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶',
            disabled: true
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value2: '',
          value3: '',
          value4: '',value5: [],
          value11: [],
          cities: [{
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Nanjing',
            label: '南京'
          }, {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }],
          value6: '',
          options3: [{
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }, {
            label: '城市名',
            options: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }],
          value7: '',
          value8: '',
          options4: [],
          value9: [],
          list: [],
          loading: false,
          states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"],
          options5: [{
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }],
          value10: [],
          moreoptions: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
          selectedOptions: [],
          selectedOptions2: [],
          optionsWithDisabled: [{
            value: 'zhinan',
            label: '指南',
            disabled: true,
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
          selectedOptions3: ['zujian', 'data', 'tag'],
          moreoptions2: [{
            label: '江苏',
            cities: []
          }, {
            label: '浙江',
            cities: []
          }],
          props: {
            value: 'label',
            children: 'cities'
          },
        }
      },
      mounted() {
        this.list = this.states.map(item => {
          return { value: item, label: item };
        });
      },
      methods: {
        remoteMethod(query) {
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.options4 = this.list.filter(item => {
                return item.label.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.options4 = [];
          }
        },
        handleChange(value) {
          console.log(value);
        },
        handleItemChange(val) {
          console.log('active item:', val);
          setTimeout(_ => {
            if (val.indexOf('江苏') > -1 && !this.moreoptions2[0].cities.length) {
              this.moreoptions2[0].cities = [{
                label: '南京'
              }];
            } else if (val.indexOf('浙江') > -1 && !this.moreoptions2[1].cities.length) {
              this.moreoptions2[1].cities = [{
                label: '杭州'
              }];
            }
          }, 300);
        }
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
  .select{
    padding: 0px 20px;
  }
  .ways{
    text-align: center;
    line-height: 40px;
    border: 1px solid gainsboro;
    padding-bottom: 20px;
  }
</style>
