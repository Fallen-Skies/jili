<template>
    <div class="manage1">
        <div class="header-nav"><span>试驾申请管理</span> <i class="el-icon-arrow-right"></i>  <span>试驾线路管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>试驾线路管理</h3>
        </div>
        <div class="body-middle">
        	<div class="body-middle-btn">
                <!--
        		<span>区域</span>
        		<el-select v-model="qyvalue" placeholder="请选择">
        			<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.label" :value="item.qyvalue"></el-option>
        		</el-select>
        		-->
        		<span>时间</span>
        		<el-radio-group v-model="manage1_radio">
        		  <el-radio-button label="按日"></el-radio-button>
        		  <el-radio-button label="按月"></el-radio-button>
        		  <el-radio-button label="按年"></el-radio-button>
        		</el-radio-group>
        		<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
        		<el-button >查询</el-button>
        	</div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">试驾线路列表
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">经销商</el-col>
                            <el-col :span="4">试驾线路名称</el-col>
                            <el-col :span="4">审核者</el-col>
                            <el-col :span="4">申请人</el-col>
                            <el-col :span="4">申请时间</el-col>
                            <el-col :span="4">状态</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in manage1_Arr" :key="index">
                            <el-col :span="4" :title='item.dealer'>{{item.dealer}}</el-col>
                            <el-col :span="4" :title='item.circuit'>{{item.circuit}}</el-col>
                            <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="4" :title="item.proposer">{{item.proposer}}</el-col>
                            <el-col :span="4" :title="item.time">{{item.time}}</el-col>
                            <el-col :span="4" :title='item.type'>{{item.type}}</el-col>
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
                manage1_radio: '按日',
                qyoptions: [{
                  qyvalue: '选项1',
                  label: '全国'
                }],
                qyvalue:'选项1',

                time:['2018-07-15','2018-07-21'],

                manage1_Arr: [
                    {
                        dealer:'上海悦云领克空间',
                        circuit:'试驾A线',
                        name:'admin',
                        proposer:'王奇',
                        time:'2019-07-29 18:21:00',
                        type:'审核中'
                    },{
                        dealer:'上海悦云领克空间',
                        circuit:'试驾B线',
                        name:'admin',
                        proposer:'王奇',
                        time:'2019-07-31 10:11:48',
                        type:'审核通过'
                    },{
                        dealer:'上海悦云领克空间',
                        circuit:'试驾C线',
                        name:'admin',
                        proposer:'王奇',
                        time:'2019-07-29 18:21:00',
                        type:'审核不通过'
                    },{
                        dealer:'上海悦云领克空间',
                        circuit:'试驾D线',
                        name:'admin',
                        proposer:'王奇',
                        time:'2019-07-29 18:21:00',
                        type:'审核通过'
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
