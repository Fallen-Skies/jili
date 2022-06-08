<template>
    <div class="questionnaire2">
        <div class="header-nav"><span>问卷投放管理</span> <i class="el-icon-arrow-right"></i>  <span>项目评估列表</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>项目评估列表</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <span>项目名称</span>
                <el-input v-model="name_input"></el-input>
                <span class="span-left">创建年份</span>
                <el-select v-model="year_value" placeholder="请选择">
                	<el-option v-for="item in year_options" :key="item.year_value" :label="item.label" :value="item.year_value"></el-option>
                </el-select>
                <span class="span-left">创建者</span>
                <el-input v-model="creator_input"></el-input>
                <el-button>查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">项目评估列表</h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">项目名称</el-col>
                            <el-col :span="3">项目预计开始时间</el-col>
                            <el-col :span="3">项目预计结束时间</el-col>
                            <el-col :span="2">客户名称</el-col>
                            <el-col :span="2">限制份额</el-col>
                            <el-col :span="2">问卷时长</el-col>
                            <el-col :span="2">项目单价</el-col>
                            <el-col :span="2">项目总价</el-col>
                            <el-col :span="2">创建者</el-col>
                            <el-col :span="2">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in questionnaire2_Arr" :key="index">
                            <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="3" :title='item.begin'>{{item.begin}}</el-col>
                            <el-col :span="3" :title='item.finish'>{{item.finish}}</el-col>
                            <el-col :span="2" :title='item.client'>{{item.client}}</el-col>
                            <el-col :span="2" :title='item.limit'>{{item.limit}}</el-col>
                            <el-col :span="2" :title='item.quest'>{{item.quest}}</el-col>
                            <el-col :span="2" :title='item.unit'>{{item.unit}}</el-col>
                            <el-col :span="2" :title='item.total'>{{item.total}}</el-col>
                            <el-col :span="2" :title='item.creator'>{{item.creator}}</el-col>
                            <el-col :span="2">
                                <span><i class="el-icon-magic-stick"></i></span>
                            </el-col>
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
                name_input:'',
                creator_input:'',

                year_options: [{
                   year_value: '选项0',
                   label: '请选择'
                },{
                   year_value: '选项1',
                   label: '2016'
                },{
                   year_value: '选项2',
                   label: '2017'
                },{
                   year_value: '选项3',
                   label: '2018'
                }],
                year_value:'选项0',

                questionnaire2_Arr:[
                    {
                        name:'2018年领克汽车测试项目',
                        begin:'2018.7.18',
                        finish:'2018.8.18',
                        client:'领克',
                        limit:'600',
                        quest:'5分钟',
                        unit:'20CNY',
                        total:'12000CNY',
                        creator:'张三'
                    },{
                        name:'2018年领克01问卷调研',
                        begin:'2018.7.18',
                        finish:'2018.8.18',
                        client:'领克',
                        limit:'600',
                        quest:'5分钟',
                        unit:'-',
                        total:'-',
                        creator:'李四'
                    }
                ]

            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .questionnaire2{

        .body-middle-btn{
            .el-input{
                width: 120px;
                border-radius: 4px;
                .el-input__inner{
                   height: 30px;
                   line-height: 30px;
                   border: solid 1px #dde2ec;
                }
            }
            .el-input.is-active .el-input__inner, .el-input__inner:focus {
                border-color: #f64359;
                outline: 0;
            }
            .el-select{
                border: 0px !important;
                width: 120px;
                height: 30px;
                border-radius: 4px;
                border: solid 1px #dde2ec;
                .el-input__inner{
                   height: 30px;
                   line-height: 30px;
                }
            }
        }

    }
</style>
