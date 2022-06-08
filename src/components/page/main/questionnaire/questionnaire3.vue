<template>
    <div class="questionnaire3">
        <div class="header-nav"><span>问卷投放管理</span> <i class="el-icon-arrow-right"></i>  <span>投放问卷管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>投放问卷管理</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <span>项目编号</span>
                <el-input v-model="number_input"></el-input>
                <span class="span-left">项目名称</span>
                <el-input v-model="name_input"></el-input>
                <span class="span-left">项目状态</span>
                <el-select v-model="type_value" placeholder="请选择">
                	<el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                </el-select>
                <span class="span-left">创建时间</span>
                <el-date-picker v-model="time" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" class="body-middle-btn-time"></el-date-picker>

                <div class="linefeed">
                    <span class="span-left">创建者</span>
                    <el-input v-model="creator_input"></el-input>
                    <span class="span-left">客户</span>
                    <el-input v-model="client_input"></el-input>
                    <el-button>查询</el-button>
                </div>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">投放问卷管理
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增项目</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="3">问卷编号</el-col>
                            <el-col :span="6">调查标题</el-col>
                            <el-col :span="3">创建时间</el-col>
                            <el-col :span="3">运行状态</el-col>
                            <el-col :span="3">有效回复</el-col>
                            <el-col :span="3">客服名称</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in questionnaire2_Arr" :key="index">
                            <el-col :span="3" :title='item.number'>{{item.number}}</el-col>
                            <el-col :span="6" :title='item.title'>{{item.title}}</el-col>
                            <el-col :span="3" :title='item.time'>{{item.time}}</el-col>
                            <el-col :span="3" :title='item.status'>{{item.status}}</el-col>
                            <el-col :span="3" :title='item.revert'>{{item.revert}}</el-col>
                            <el-col :span="3" :title='item.client'>{{item.client}}</el-col>
                            <el-col :span="3">
                                <span><i class="el-icon-view"></i></span>
                                <span class="span-color"><i class="el-icon-edit-outline"></i></span>
                                <span><i class="el-icon-delete"></i></span>
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
                number_input:'',
                name_input:'',
                creator_input:'',
                client_input:'',

                type_options: [{
                   type_value: '选项0',
                   label: '请选择'
                },{
                   type_value: '选项1',
                   label: '新视界'
                },{
                   type_value: '选项2',
                   label: '展会'
                },{
                   type_value: '选项3',
                   label: '移动展厅'
                }],
                type_value:'选项0',

                time:['2018-07-18','2018-07-20'],

                questionnaire2_Arr:[
                    {
                        number:'196784841',
                        title:'2018年领克汽车测试项目',
                        time:'2018.7.18',
                        status:'未发布',
                        revert:'600',
                        client:'领克'
                    },{
                        number:'196784864',
                        title:'2018年领克汽车测试项目',
                        time:'2018.7.18',
                        status:'正运行',
                        revert:'600',
                        client:'领克'
                    },{
                        number:'196784896',
                        title:'2018年领克汽车测试项目',
                        time:'2018.7.18',
                        status:'已结束',
                        revert:'600',
                        client:'领克'
                    }
                ]
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
    .questionnaire3{

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
            .body-middle-btn-time{
                margin-left: 0;
            }
        }

    }
</style>
