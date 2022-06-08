<template>
    <div class="platform2">
        <div class="header-nav"><span>平台基础管理</span> <i class="el-icon-arrow-right"></i>  <span>市场活动管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>活动管理</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <span>区域</span>
                <el-select v-model="qyvalue" placeholder="请选择">
                	<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.label" :value="item.qyvalue"></el-option>
                </el-select>
                <span></span>
                <el-select v-model="csvalue" placeholder="请选择">
                	<el-option v-for="item in csoptions" :key="item.csvalue" :label="item.label" :value="item.csvalue"></el-option>
                </el-select>
                <span class="span-left">活动类型</span>
                <el-select v-model="type_value" placeholder="请选择">
                	<el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                </el-select>
                <span class="span-left">时间</span>
                <el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
                 <span class="span-left">活动状态</span>
                <el-select v-model="hd_value" placeholder="请选择">
                	<el-option v-for="item in hd_options" :key="item.hd_value" :label="item.label" :value="item.hd_value"></el-option>
                </el-select>
                <span></span><span></span>
                <el-button>查询</el-button>
                <span></span>
                <el-button class="btn-empty">清空</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">市场活动列表
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增活动</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="2">大区</el-col>
                            <el-col :span="2">省份</el-col>
                            <el-col :span="2">城市</el-col>
                            <el-col :span="2">活动类型</el-col>
                            <el-col :span="3">活动主题</el-col>
                            <el-col :span="2">活动线路</el-col>
                            <el-col :span="5">活动时间</el-col>
                            <el-col :span="2">活动地址</el-col>
                            <el-col :span="2">活动状态</el-col>
                            <el-col :span="2">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in platform2_Arr" :key="index">
                            <el-col :span="2" :title='item.region'>{{item.region}}</el-col>
                            <el-col :span="2" :title='item.province'>{{item.province}}</el-col>
                            <el-col :span="2" :title='item.city'>{{item.city}}</el-col>
                            <el-col :span="2" :title='item.type'>{{item.type}}</el-col>
                            <el-col :span="3" :title='item.theme'>{{item.theme}}</el-col>
                            <el-col :span="2" :title='item.circuit'>{{item.circuit}}</el-col>
                            <el-col :span="5" :title='item.time'>{{item.time}}</el-col>
                            <el-col :span="2" :title='item.site'>{{item.site}}</el-col>
                            <el-col :span="2" :title='item.status'>{{item.status}}</el-col>
                            <el-col :span="2"><span><i class="el-icon-view"></i></span><span><i class="el-icon-delete"></i></span></el-col>
                        </el-row>
                        <div class="table_paging">
                            <div class="table-prev">上一页</div>
                            <span>1</span><span>2</span>
                            <div class="table-next">下一页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                qyoptions: [{
                   qyvalue: '选项1',
                   label: '北京'
                },{
                   qyvalue: '选项2',
                   label: '上海'
                },{
                   qyvalue: '选项3',
                   label: '山东省'
                }],
                qyvalue:'选项3',

                csoptions: [{
                   csvalue: '选项1',
                   label: '淄博市'
                }],
                csvalue:'选项1',

                type_options: [{
                   type_value: '选项1',
                   label: '新视界'
                },{
                   type_value: '选项2',
                   label: '展会'
                },{
                   type_value: '选项3',
                   label: '移动展厅'
                }],
                type_value:'选项1',

                time:['2018-07-15','2018-07-21'],

                hd_options: [{
                   hd_value: '选项1',
                   label: '全部'
                },{
                   hd_value: '选项2',
                   label: '未开始'
                },{
                   hd_value: '选项3',
                   label: '进行中'
                },{
                   hd_value: '选项4',
                   label: '活动结束'
                }],
                hd_value:'选项1',

                platform2_Arr: [
                    {
                        region:'别克一区',
                        province:'山东省',
                        city:'淄博市',
                        type:'展会',
                        theme:'2019年车展',
                        circuit:'-',
                        time:'2019-02-24—2019-02-28',
                        site:'销售展厅',
                        status:'活动结束',
                    },{
                        region:'别克二区',
                        province:'河北省',
                        city:'保定市',
                        type:'展会',
                        theme:'2019年车展',
                        circuit:'-',
                        time:'2019-02-24—2019-02-28',
                        site:'销售展厅',
                        status:'活动结束',
                    },{
                        region:'别克二区',
                        province:'内蒙古自治区',
                        city:'通辽市',
                        type:'展会',
                        theme:'2019年车展',
                        circuit:'-',
                        time:'2019-02-24—2019-02-28',
                        site:'销售展厅',
                        status:'活动结束',
                    },{
                        region:'别克二区',
                        province:'山西省',
                        city:'朔州市',
                        type:'展会',
                        theme:'2019年车展',
                        circuit:'-',
                        time:'2019-02-24—2019-02-28',
                        site:'销售展厅',
                        status:'活动结束',
                    },{
                       region:'别克七区',
                       province:'浙江省',
                       city:'绍兴市',
                       type:'新视界',
                       theme:'新视界绍兴站',
                       circuit:'线路A',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'进行中',
                    },{
                       region:'别克八区',
                       province:'江苏省',
                       city:'南通市',
                       type:'新视界',
                       theme:'新视界南通站',
                       circuit:'线路B',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'进行中',
                    },{
                       region:'别克八区',
                       province:'江苏省',
                       city:'淮安市',
                       type:'新视界',
                       theme:'新视界淮安站',
                       circuit:'线路B',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'进行中',
                    },{
                       region:'别克一区',
                       province:'山东省',
                       city:'济宁市',
                       type:'移动展厅',
                       theme:'新车主爱车课堂',
                       circuit:'-',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'未开始',
                    },{
                       region:'别克二区',
                       province:'河北省',
                       city:'张家口市',
                       type:'移动展厅',
                       theme:'新车主爱车课堂',
                       circuit:'-',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'未开始',
                    },{
                       region:'别克七区',
                       province:'浙江省',
                       city:'湖州市',
                       type:'移动展厅',
                       theme:'新车主爱车课堂',
                       circuit:'-',
                       time:'2019-02-24—2019-02-28',
                       site:'销售展厅',
                       status:'未开始',
                    }
                ],

            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .platform2{
        .body-middle-btn{
            .body-middle-btn-time{
            	margin-left: 0px;
            }
            .el-button{
                margin-left: 0 !important;
            }
        }
    }
</style>
