<template>
    <div class="monitoring1">
        <div class="header-nav"><span>报价监测分析</span> <i class="el-icon-arrow-right"></i>  <span>经销商报价监测</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>经销商报价监测</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
            	<span>区域</span>
            	<el-select v-model="qyvalue" placeholder="请选择">
            		<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.label" :value="item.qyvalue"></el-option>
            	</el-select>
                <span class="span-left">MAC</span>
                <el-select v-model="macvalue" placeholder="请选择">
                	<el-option v-for="item in macoptions" :key="item.macvalue" :label="item.label" :value="item.macvalue"></el-option>
                </el-select>
            	<span class="span-left">时间</span>
            	<el-radio-group v-model="monitoring1_radio">
            	  <el-radio-button label="按日"></el-radio-button>
            	  <el-radio-button label="按月"></el-radio-button>
            	  <el-radio-button label="按年"></el-radio-button>
            	</el-radio-group>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="boder-right body-padding-right">
                            <h3 class="body-margin-bottom">车系平均报价</h3>
                            <div>
                            	<vChartBars :seriesArr="monitoring1_chexi" :seriesName="'车系平均报价'" :style="{height:'260px'}"></vChartBars>
                            	<p class="chart-bar-bottom chart-bar-span"><span>车系平均报价</span></p>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">车型报价TOP5</h3>
                            <div class="monitoring1-body">
                                <el-row class="middle-text-center body-head">
                                    <el-col :span="4">排行</el-col>
                                    <el-col :span="4">车系</el-col>
                                    <el-col :span="4">车型配置</el-col>
                                    <el-col :span="4">车辆颜色</el-col>
                                    <el-col :span="4">平均报价</el-col>
                                    <el-col :span="4">报价次数</el-col>
                                </el-row>
                                <el-row class="middle-text-center body-foot" v-for="(item,index) in monitoring1_chexing" :key="index">
                                    <el-col :span="4"><img :src="'static/img/dashboard/02_1_cion0' + (index + 1) + '.png'"></el-col>
                                    <el-col :span="4">{{item.name}}</el-col>
                                    <el-col :span="4">{{item.brand}}</el-col>
                                    <el-col :span="4">{{item.color}}</el-col>
                                    <el-col :span="4">{{item.price}}元</el-col>
                                    <el-col :span="4">{{item.value}}</el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row>
                        <el-col :span="12" class="boder-right body-padding-right">
                            <h3 class="body-margin-bottom">购车报价分析</h3>
                            <div>
                            	<vChartsBarTwo :seriesArr="monitoring1_gouche" :seriesName="monitoring1_gouche_name" :style="{height:'260px'}"></vChartsBarTwo>
                            	<p class="chart-bars-bottom chart-bar-span">
                                    <span>总报价数</span>
                                    <span>全购车价数</span>
                                    <span>贷款购车数</span>
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">金融贷款方案分析</h3>
                            <div class="monitoring1-jinrong">
                                <el-row>
                                    <el-col :span="8">
                                        <vChartPie :seriesArr="marketing_jinrong_Arr" :seriesName="'金融贷款方案分析'" :style="{height:'220px'}" :colorArr="jinrong_Color" :titleTxt="''" />
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="jinrong-text">
                                            <p>标准产品-A<span>5次</span></p>
                                            <p>标准产品-B<span>7次</span></p>
                                            <p>优速贷-A<span>4次</span></p>
                                            <p>优速贷-B<span>3次</span></p>
                                            <p>星享贷<span>1次</span></p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="jinrong-qi">
                                            <el-row class="jinrong-head">
                                                <el-col :span="12">标准产品-A</el-col>
                                                <el-col :span="12">金融贷款期限</el-col>
                                            </el-row>
                                            <el-row v-for="(item,index) in marketing_jinrong_qi" :key="index" class="jinrong-foot">
                                                <el-col :span="12">{{item.name}}</el-col>
                                                <el-col :span="12">{{item.value}}</el-col>
                                            </el-row>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vChartBars from '@/components/charts/ChartBars';
    import vChartsBarTwo from '@/components/charts/chartsbarTwo';
    import vChartPie from '@/components/chart/ChartPie';

    import bus from '@/components/common/bus';

    export default{
        components: {
        	vChartBars,
            vChartsBarTwo,
            vChartPie
        },
        data(){
            return{
                monitoring1_radio: '按日',
                qyoptions: [{
                  qyvalue: 'yiqu',
                  label: '一区'
                },{
                  qyvalue: 'erqu',
                  label: '二区'
                },{
                  qyvalue: 'sanqu',
                  label: '三区'
                },{
                  qyvalue: 'siqu',
                  label: '四区'
                },{
                  qyvalue: 'wuqu',
                  label: '五区'
                },{
                  qyvalue: 'liuqu',
                  label: '六区'
                },{
                  qyvalue: 'qiqu',
                  label: '七区'
                },{
                  qyvalue: 'baqu',
                  label: '八区'
                },{
                  qyvalue: 'jiuqu',
                  label: '九区'
                }],
                qyvalue:'yiqu',
                macoptions: [{
                  macvalue: '选项一',
                  label: '常铁军'
                }],
                macvalue: '选项一',

                time:['2018-07-15','2018-07-21'],

                monitoring1_chexi: [
                	{name:'领克01',value:280000},
                	{name:'领克01PHEV',value:250000},
                	{name:'领克02',value:220000},
                	{name:'领克03',value:180000},
                	{name:'领克03+',value:156400}
                ],
                monitoring1_chexing: [
                    {
                        name:'领克01',
                        brand:'耀PRO',
                        color:'蓝黑',
                        price:'116,200',
                        value:35
                    },{
                        name:'领克01',
                        brand:'纯',
                        color:'白',
                        price:'116,200',
                        value:31
                    },{
                        name:'领克01',
                        brand:'劲PRO',
                        color:'红黑',
                        price:'114,200',
                        value:28
                    },{
                        name:'领克03',
                        brand:'劲',
                        color:'白',
                        price:'114,200',
                        value:24
                    },{
                        name:'领克02',
                        brand:'耀',
                        color:'灰',
                        price:'114,200',
                        value:20
                    }
                ],
                monitoring1_gouche: [
                	['领克01','领克01PHEV','领克02','领克03','领克03+'],
                    [100,90,80,65,50],
                    [76,66,56,46,36],
                    [36,30,24,18,12],
                ],
                monitoring1_gouche_name: ['总报价数','全购车价数','贷款购车数'],


                marketing_jinrong_Arr: [{
                    name: '标准产品-A',
                    value: 25
                }, {
                    name: '标准产品-B',
                    value: 35
                }, {
                    name: '优速贷-A',
                    value: 20
                }, {
                    name: '优速贷-B',
                    value: 15
                }, {
                    name: '星享贷',
                    value: 5
                }],
                jinrong_Color: ["#fab2bb", "#ff6074", "#de4155", "#707376", "#131313"],

                marketing_jinrong_qi:[{
                    name:"12期",
                    value:"2次"
                },{
                    name:"16期",
                    value:"2次"
                },{
                    name:"24期",
                    value:"0次"
                },{
                    name:"36期",
                    value:"1次"
                },{
                    name:"48期",
                    value:"0次"
                }],

            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .monitoring1-body{
        .el-col{
            line-height: 50px;
            height: 50px;
        }
        .body-head{
            background-color: #f2f4f8;
            font-size: 12px;
            font-family: MicrosoftYaHei-Bold;
            color: #333333;
            font-weight: 700;
        }
        .body-foot{
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #333333;
            .el-col{
                background-color: #ffffff;
                box-shadow: inset 0px -1px 0px 0px #f2f4f8;
                >img{
                    position: relative;
                    top:4px;
                }
            }
        }
    }
    .monitoring1-jinrong{
        padding-top: 30px;
        .jinrong-text{
            top: 55px;
            position: relative;
            left: 10%;
            color: #333333;
            p{
                width: 140px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 14px;
                font-weight:700;
                padding-left: 20px;
                margin-bottom: 5px;
                position: relative;
                &:after{
                	content: "";
                	position: absolute;
                	top: 4px;left: 0;
                	width: 12px;
                	height: 12px;
                }
            	span{
            		width: 35px;
            		float: right;
            	}
            	&:nth-child(1):after{
            		background-color: #f74156;
            	}
            	&:nth-child(2):after{
            		background-color: #ff6666;
            	}
            	&:nth-child(3):after{
            		background-color: #ff8c8c;
            	}
            	&:nth-child(4):after{
            		background-color: #ffb2b2;
            	}
            	&:nth-child(5):after{
            		background-color: #ffcccc;
            	}
            }
        }
        .jinrong-qi{
            text-align: center;
            background-color: #f2f4f8;
            border-radius: 4px;
            margin-top: 10px;
            height: 200px;
            font-size: 14px;
            color: #333333;
            .jinrong-head{
                font-family: MicrosoftYaHei;
                .el-col{
                    line-height: 44px;
                }
            }
            .jinrong-foot{
                font-family: MicrosoftYaHei-Bold;
                font-weight: 700;
                >div{
                    &:last-child{
                       color: #ea4d4d;
                    }
                }
                .el-col{
                    line-height: 30px;
                }
            }

        }
    }
</style>
