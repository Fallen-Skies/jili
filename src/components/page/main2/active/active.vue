<template>
    <div class="warning">
        <div class="header-nav"><span>门店活动管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>门店活动管理</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <span>车型</span>
                <el-select v-model="type_value" placeholder="请选择">
                    <el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                </el-select>
                <el-button>查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">门店活动管理列表
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增活动</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">大区</el-col>
                            <el-col :span="4">省份</el-col>
                            <el-col :span="4">城市</el-col>
                            <el-col :span="4">经销商</el-col>
                            <el-col :span="4">活动主题</el-col>
                            <el-col :span="4">活动时间</el-col>
                            <el-col :span="4">活动类型</el-col>
                            <el-col :span="4">审核状态</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in warning_Arr" :key="index">
                            <el-col :span="4" :title='item.region'>{{item.region}}</el-col>
                            <el-col :span="4" :title='item.province'>{{item.province}}</el-col>
                            <el-col :span="4" :title='item.city'>{{item.city}}</el-col>
                            <el-col :span="4" :title="item.dealer">{{item.dealer}}元</el-col>
                            <el-col :span="4" :title="item.title">{{item.title}}元</el-col>
                            <el-col :span="4" :title='item.time'>{{item.time}}</el-col>
                            <el-col :span="4" :title='item.type'>{{item.type}}</el-col>
                            <el-col :span="4" :title='item.status'>{{item.status}}</el-col>

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
                        region:'领克一区',
                        province:'北京',
                        city:'北京',
                        dealer:'北京中汽众悦领克中心',
                        title:'领克售后保养优惠',
                        time:'2019.02.01~2019.07.31',
                        type:'售后折扣',
                        status:'审核通过'
                    },
                    {
                        region:'领克一区',
                        province:'北京',
                        city:'北京',
                        dealer:'北京中汽众悦领克中心',
                        title:'领克02优惠活动',
                        time:'2019.07.01~2019.07.31',
                        type:'门店折扣',
                        status:'待审核'
                    },
                    {
                        region:'领克一区',
                        province:'北京',
                        city:'北京',
                        dealer:'北京中汽众悦领克中心',
                        title:'领克03金融贷款优惠',
                        time:'2019.02.01~2019.07.31',
                        type:'金融优惠',
                        status:'审核通过'
                    },
                    {
                        region:'领克一区',
                        province:'北京',
                        city:'北京',
                        dealer:'北京中汽众悦领克中心',
                        title:'领克03+新车活动',
                        time:'2019.07.01~2019.07.31',
                        type:'新车上市',
                        status:'待审核'
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
