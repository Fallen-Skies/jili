<template>
    <div class="warning">
        <div class="header-nav"><span>门店活动管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>门店活动管理</h3>
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
                <span class="span-left">车型</span>
                <el-select v-model="type_value" placeholder="请选择">
                	<el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                </el-select>
                <el-button>查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">门店活动列表
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增活动</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">车型</el-col>
                            <el-col :span="4">车型配置</el-col>
                            <el-col :span="4">车辆颜色</el-col>
                            <el-col :span="4">建议零售价</el-col>
                            <el-col :span="4">预警价</el-col>
                            <el-col :span="4">使用经销商范围</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in warning_Arr" :key="index">
                            <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="4" :title='item.brand'>{{item.brand}}</el-col>
                            <el-col :span="4" :title='item.color'>{{item.color}}</el-col>
                            <el-col :span="4" :title="item.price+'元'">{{item.price}}元</el-col>
                            <el-col :span="4" :title="item.value+'元'">{{item.value}}元</el-col>
                            <el-col :span="4" :title='item.scope'>{{item.scope}}</el-col>
                            <el-col :span="3">
                                <span><i class="el-icon-view"></i></span>
                                <span class="span-color"><i class="el-icon-edit-outline"></i></span>
                                <span><i class="el-icon-delete"></i></span>
                                </el-col>
                        </el-row>
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
                   label: '全国'
                },{
                   qyvalue: '选项2',
                   label: '北京'
                },{
                   qyvalue: '选项3',
                   label: '上海'
                },{
                   qyvalue: '选项4',
                   label: '山东省'
                }],
                qyvalue:'选项1',
                csoptions: [{
                   csvalue: '选项1',
                   label: '-'
                },{
                   csvalue: '选项2',
                   label: '淄博市'
                }],
                csvalue:'选项1',
                type_options: [{
                   type_value: '选项1',
                   label: '全部'
                },{
                   type_value: '选项2',
                   label: '领克01'
                },{
                   type_value: '选项3',
                   label: '领克02'
                },{
                   type_value: '选项4',
                   label: '领克03'
                }],
                type_value:'选项1',
                warning_Arr: [
                    {
                        name:'领克01',
                        brand:'耀PRO',
                        color:'蓝黑',
                        price:'116,200',
                        value:'100,000',
                        scope:'全国'
                    },
                    {
                        name:'领克01',
                        brand:'纯',
                        color:'白',
                        price:'120,200',
                        value:'110,000',
                        scope:'全国'
                    }
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
</style>
