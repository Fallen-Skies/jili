<template>
    <div class="business">
        <div class="header-nav"><span>商务执行手册</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>商务执行手册</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
            	<!-- <span>区域</span>
            	<el-select v-model="qyvalue" placeholder="请选择">
            		<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
            	</el-select> -->
            	<span>时间</span>
            	<el-radio-group v-model="business_radio">
            	  <el-radio-button label="按日"></el-radio-button>
            	  <el-radio-button label="按月"></el-radio-button>
            	  <el-radio-button label="按年"></el-radio-button>
            	</el-radio-group>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">商务执行列表
                        <!-- <span class="chart-max-width"><i class="el-icon-plus"></i> 新增</span> -->
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">名称</el-col>
                            <el-col :span="4">时间</el-col>
                            <el-col :span="4">创建时间</el-col>
                            <el-col :span="4">适用车型</el-col>
                            <el-col :span="4">类型</el-col>
                            <el-col :span="4">涵盖区域</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in business_Arr" :key="index">
                            <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="4" :title='item.brand'>{{item.brand}}</el-col>
                            <el-col :span="4" :title='item.color'>{{item.color}}</el-col>
                            <el-col :span="4" :title='item.price'>{{item.price}}</el-col>
                            <el-col :span="4" :title='item.value'>{{item.value}}</el-col>
                            <el-col :span="4" :title='item.scope'>{{item.scope}}</el-col>
                            <el-col :span="3">
                                <span><i class="el-icon-view"></i></span>
                                <!-- <span class="span-color"><i class="el-icon-edit-outline"></i></span>
                                <span><i class="el-icon-delete"></i></span> -->
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
                business_radio: '按日',
                qyoptions: [{
                  qyvalue: '选项1',
                  qylabel: '全国'
                }],
                qyvalue:'选项1',

                time:['2018-07-15','2018-07-21'],

                business_Arr: [
                    {
                        name:'技高01筹',
                        brand:'2019/05/01~2019/05/31',
                        color:'2019/04/25 10：12：36',
                        price:'领克01',
                        value:'公告',
                        scope:'全国'
                    },{
                        name:'领克02金融贷款新政策',
                        brand:'2019/05/01~2019/05/31',
                        color:'2019/04/25 10：12：36',
                        price:'领克02',
                        value:'政策',
                        scope:'全国'
                    },
                ],

            }
        },
        methods: {

        },
    }
</script>

<style>
</style>
