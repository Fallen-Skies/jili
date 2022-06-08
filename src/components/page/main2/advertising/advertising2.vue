<template>
    <div class="advertising2">
        <div class="header-nav"><span>广告投放监测</span> <i class="el-icon-arrow-right"></i>  <span>广告效能分析</span></div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">广告效能分析</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">广告列表
                        <div class="body-middle-btn advertising2-btn">
                            <el-radio-group v-model="advertising2_radio">
                              <el-radio-button label="按日"></el-radio-button>
                              <el-radio-button label="按月"></el-radio-button>
                              <el-radio-button label="按年"></el-radio-button>
                            </el-radio-group>
                            <el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
                            <el-button >查询</el-button>
                        </div>
                    </h3>
                    <div class="advertising2-body">
                    	<div v-for="(item,i) in semesterManage1_hdlb" :key="i">
                    		<h4>{{item.name}}</h4>
                    		<ul>
                    			<li :title="item.city">广告车型：{{item.city}}</li>
                    			<li :title="item.time">广告时间：{{item.time}}</li>
                    			<li :title="item.type">广告类型：{{item.type}}</li>
                    			<li :title="item.site">广告状态：{{item.site}}</li>
                                <div>
                                    <img :src="'static/img/dashboard/02_1_car0'+item.icon+'.png'" alt="">
                                </div>
                    		</ul>
                    	</div>
                    </div>
                    <div class="advertising2-paging">
                    	<div class="prev">上一页</div><span>1/30</span><div class="next">下一页</div>
                    </div>
                </div>
                <div style="border-top: 10px solid #f2f4f8;">
                    <h3 class="body-margin-bottom">近期客流趋势</h3>
                    <div>
                        <vChartsLineCustom :seriesArr="advertising2_Arr" :yAxisName="'客流量'" :seriesName="['有效客流','高意向客流']" style="height: 300px;"></vChartsLineCustom>
                        <div class="chart-line-span chart-linesTwo-bottom">
                        	<span>有效客流</span><span>高意向客流</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="body-margin-bottom">近期成交量趋势</h3>
                    <div>
                        <vChartsLineCustom :seriesArr="advertising2_Arr" :yAxisName="'成交量'" :seriesName="['有效客流','高意向客流']" style="height: 300px;"></vChartsLineCustom>
                        <div class="chart-line-span chart-linesTwo-bottom">
                        	<span>有效客流</span><span>高意向客流</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vChartsLineCustom from '@/components/charts/chartslineCustom';

    export default{
        components: {
            vChartsLineCustom
        },
        data() {
            return {
                advertising2_radio: '按月',
                qyoptions: [{
                  qyvalue: '选项1',
                  qylabel: '全国'
                }],
                qyvalue:'选项1',

                time:['2018-07-15','2018-07-21'],

                semesterManage1_hdlb:[
                	{
                		name:"01焕新上市",
                		city:"领克01",
                		type:"APP",
                		time:"2019-05-01至2019-05-31",
                		site:"进行中",
                        icon:'2'
                	},
                	{
                		name:"驾控体验营",
                		city:"领克01",
                		type:"H5",
                		time:"2019-05-01至2019-05-31",
                		site:"进行中",
                        icon:'1'
                	},
                	{
                		name:"01性能梦想",
                		city:"领克03",
                		type:"电视",
                		time:"2019-05-01至2019-05-31",
                		site:"进行中",
                        icon:'3'
                	},
                ],

                advertising2_Arr:[
                    ['第21周','第22周','第23周','第24周','第25周','第26周','第27周','第28周','第29周','第30周','第31周'],
                    [140,165,85,152,140,155,130,168,138,150,133],
                    [107,132,70,125,115,140,118,160,123,138,123],
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .advertising2{

        .body-middle-btn{
            border: 0px;
            background: rgba(255,255,255,0);
        }
        .advertising2-btn{
            position: relative;
            top:-22.5px;
            padding: 15px 0;
            float: right;
        }
        .advertising2-body{
        	// margin-top: 30px;
            width: 100%;
            display: flex;
        	>div{
        		width: 32%;
        		height: 160px;
        		padding: 13px;
        		background-color: #ffffff;
        		border: solid 1px #dde2ec;
        		border-radius: 5px;
        		margin-bottom: 10px;
        		>h4{
        			height: 16px;
        			font-family: "MicrosoftYaHei-Bold";
        			font-size: 14px;
        			font-stretch: normal;
        			letter-spacing: -0.3px;
        			color: #333333;
        		}
        		>ul{
        			padding-left: 24px;
        			margin-top: 13px;
                    width: 100%;
                    position: relative;
                    height: 100px;
        			color: #333333;
        			>li{
                        width: 58%;
        				font-family: "MicrosoftYaHei";
        				font-size: 12px;
        				font-weight: normal;
        				font-stretch: normal;
        				line-height: 25px;
                        height: 25px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
        				letter-spacing: 0px;
        			}
                    >div{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                    @media(max-width:1400px){
                        >div{
                            right: -15px;
                        }
                        &{
                            padding-left: 16px;
                        }
                    }
        		}
                &:nth-child(2){
                	margin: 0 2%;
                }
        	}
        }
        .advertising2-paging{
        	width: 220px;
        	height: 28px;
        	top: 10px;
        	position: relative;
        	left: 50%;
        	margin-left: -110px;
        	text-align: center;
        	>div{
        		display: inline-block;
        		width: 74px;
        		height: 28px;
        		border-radius: 14px;
        		font-family: MicrosoftYaHei;
        		font-size: 14px;
        		font-weight: normal;
        		font-stretch: normal;
        		letter-spacing: -0.3px;
        		text-align: center;
        		line-height: 28px;
        		&:first-child{
        			float: left;
        			background-color: #ffffff;
        			border: solid 1px #dde2ec;
        			color: #999999;
        		}
        		&:last-child{
        			float: right;
        			background-color: #f63c53;
        			color: #ffffff;
        		}
        	}
        	>span{
        		font-family: MicrosoftYaHei;
        		font-size: 12px;
        		line-height: 28px;
        		letter-spacing: -0.2px;
        		color: #999999;
        	}
        }

    }

</style>
