<template>
	<div class="shop1">
		<div class="header-nav">进店客流统计</div>
        <el-tabs v-model="shop1_activeName" @tab-click="shop1_Click" class="box-head-nav box-body-nav">
			<el-tab-pane label="4S店客流统计" name="sdkltj">
				<div class="shop1-body-item body-middle">
					<div class="body-middle-btn">
						<!-- <span>区域</span>
						<el-select v-model="qyvalue" placeholder="请选择">
							<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
						</el-select> -->
						<span>时间</span>
						 <el-radio-group v-model="shop1_radio">
						  <el-radio-button label="按日"></el-radio-button>
						  <el-radio-button label="按月"></el-radio-button>
						  <el-radio-button label="按年"></el-radio-button>
						</el-radio-group>
                        <el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
						<el-button>查询</el-button>
					</div>
                    <div class="body-middle-chart">
                        <div>
                            <h3>客流统计</h3>
                            <div>
                            <vChartsBar :seriesArr="shop1_qu_Arr" :seriesName="shop1_qu_name" v-if="'sdkltj' === shop1_activeName"  style="height: 220px;"/>
                            <div class="chart-bar-span chart-Bar-bottom"><span>总客流数</span><span>高意向客流数</span><span>二次进店数</span></div>
                            </div>
                        </div>
                        <div>
                            <h3>客流人群分布（性别）</h3>
                            <div class="shop1-body">
                               <div class="shop1-body-left" :style="{height:'220px'}">
                                    <vChartPie :seriesArr="shop1_gender" :seriesName="'性别'" :titleTxt="'客流性别占比'" v-if="'sdkltj' === shop1_activeName" />
                                    <div class="shop1-body-text shop1-sex-text">
                                        <p>男：<span>{{shop1_gender[0]["value"]}}%</span></p>
                                        <p>女：<span>{{shop1_gender[1]["value"]}}%</span></p>
                                    </div>
                                </div>
                                <div class="shop1-body-right">
                                    <vChartsPile :seriesArr="shop1_pile_Arr" :seriesName="'性别'" v-if="'sdkltj' === shop1_activeName"></vChartsPile>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>客流人群分布（年龄）</h3>
                            <div class="shop1-body">
                                <div class="shop1-body-left" :style="{height:'220px'}">
                                    <vChartPie :seriesArr="shop1_age" :colorArr="shop1_age_color" :seriesName="'年龄'" :titleTxt="'客流年龄占比'" v-if="'sdkltj' === shop1_activeName" />
                                     <div class="shop1-body-text shop1-age-text">
                                        <p>18~24：<span>{{shop1_age[0]["value"]}}%</span></p>
                                        <p>25~34：<span>{{shop1_age[1]["value"]}}%</span></p>
                                        <p>35~44：<span>{{shop1_age[2]["value"]}}%</span></p>
                                        <p>45~54：<span>{{shop1_age[3]["value"]}}%</span></p>
                                        <p>55+：<span>{{shop1_age[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                                <div class="shop1-body-right">
                                    <vChartsPileMuch :seriesArr="shop1_pileMuch_Arr"  :seriesName="'年龄'" v-if="'sdkltj' === shop1_activeName"></vChartsPileMuch>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="车展客流统计" name="czkltj">
				<div class="shop1-body-item body-middle">
					<div class="body-middle-btn">
						<!-- <span>区域</span>
						<el-select v-model="qyvalue" placeholder="请选择">
							<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
						</el-select> -->
						<span>时间</span>
						 <el-radio-group v-model="shop1_radio">
						  <el-radio-button label="按日"></el-radio-button>
						  <el-radio-button label="按月"></el-radio-button>
						  <el-radio-button label="按年"></el-radio-button>
						</el-radio-group>
						<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
						<el-button >查询</el-button>
					</div>
                    <div class="body-middle-chart">
                        <div>
                            <h3>客流统计</h3>
                            <div>
                                <vChartsBar :seriesArr="shop1_qu_Arr" :seriesName="shop1_qu_name" v-if="'czkltj' === shop1_activeName"  style="width: 100%; height: 220px;"/>
                                <div class="chart-bar-span chart-Bar-bottom"><span>总客流数</span><span>高意向客流数</span><span>二次进店数</span></div>
                            </div>
                        </div>
                        <div>
                            <h3>人群漏斗</h3>
                            <div class="shop1-funnel">
                                <div><p>新视界</p><vChartsFunnel :seriesArr="shop1_funnel_Arr" :seriesName="'新视界'" v-if="'czkltj' === shop1_activeName"></vChartsFunnel></div>
                                <div><p>车展</p><vChartsFunnel :seriesArr="shop1_funnel_Arr"  :seriesName="'车展'" v-if="'czkltj' === shop1_activeName"></vChartsFunnel></div>
                                <div><p>移动展厅</p><vChartsFunnel :seriesArr="shop1_funnel_Arr"  :seriesName="'移动展厅'" v-if="'czkltj' === shop1_activeName"></vChartsFunnel></div>
                            </div>
                            <div class="chart-bar-span chart-Bar-bottom"><span>总客流数</span><span>高意向客流数</span><span>二次进店数</span></div>
                        </div>
                        <div>
                            <h3>客流人群分布（性别）</h3>
                            <div class="shop1-body">
                               <div class="shop1-body-left" :style="{height:'220px'}">
                                    <vChartPie :seriesArr="shop1_gender" :seriesName="'性别'" :titleTxt="'客流性别占比'" v-if="'czkltj' === shop1_activeName" />
                                    <div class="shop1-body-text shop1-sex-text">
                                        <p>男：<span>{{shop1_gender[0]["value"]}}%</span></p>
                                        <p>女：<span>{{shop1_gender[1]["value"]}}%</span></p>
                                    </div>
                                </div>
                                <div class="shop1-body-right">
                                    <vChartsPile :seriesArr="shop1_pile_Arr" :seriesName="'性别'" v-if="'czkltj' === shop1_activeName"></vChartsPile>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>客流人群分布（年龄）</h3>
                            <div class="shop1-body">
                                <div class="shop1-body-left" :style="{height:'220px'}">
                                    <vChartPie :seriesArr="shop1_age" :seriesName="'年龄'" :colorArr="shop1_age_color" :titleTxt="'客流年龄占比'" v-if="'czkltj' === shop1_activeName" />
                                    <div class="shop1-body-text shop1-age-text">
                                        <p>18~24：<span>{{shop1_age[0]["value"]}}%</span></p>
                                        <p>25~34：<span>{{shop1_age[1]["value"]}}%</span></p>
                                        <p>35~44：<span>{{shop1_age[2]["value"]}}%</span></p>
                                        <p>45~54：<span>{{shop1_age[3]["value"]}}%</span></p>
                                        <p>55+：<span>{{shop1_age[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                                <div class="shop1-body-right">
                                    <vChartsPileMuch :seriesArr="shop1_pileMuch_Arr"  :seriesName="'年龄'" v-if="'czkltj' === shop1_activeName"></vChartsPileMuch>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</el-tab-pane>
        </el-tabs>
	</div>
</template>

<script>
	import vChartsBar from '@/components/charts/chartsbar';
	import vChartPie from '@/components/chart/ChartPie';
	import vChartsPile from '@/components/charts/chartspile';
	import vChartsPileMuch from '@/components/charts/chartspileMuch';
	import vChartsFunnel from '@/components/charts/chartsfunnel';

	import bus from '@/components/common/bus';
	import Qs from 'qs';

	export default {
		components: {
		    vChartsBar,
			vChartPie,
			vChartsPile,
			vChartsPileMuch,
			vChartsFunnel
		},
		data() {
		  return {
			shop1_activeName: 'sdkltj',
		    shop1_radio: '按日',

			qyoptions: [{
			   qyvalue: '选项1',
			   qylabel: '全国'
			}],
            qyvalue:'选项1',

            time:['2018-07-15','2018-07-21'],

			shop1_qu_Arr: [],
			shop1_qu_name: ['总客流数','高意向客流数','二次进店数'],
			shop1_gender: [{ name: "男", value: "73.5"}, { name: "女", value: "26.5"}],
			shop1_age: [
				{ name: "18~24", value: "25"},
				{ name: "25~34", value: "35"},
				{ name: "35~44", value: "20"},
				{ name: "45~54", value: "15"},
				{ name: "55+", value: "5"},
			],
            shop1_age_color:['#f74156', '#ff6666', '#ff8c8c', '#ffb2b2', '#ffcccc'],
			shop1_funnel_Arr: [
				{value: 2000, name: '总客流数'},
				{value: 1500, name: '高意向客流数'},
				{value: 1000, name: '二次进店数'},
			],
			shop1_pile_Arr:[],
			shop1_pileMuch_Arr:[],

			};
		},
		computed: {},
		methods: {
			loadData() {
				if (this.shop1_activeName === "sdkltj") {
					this.shop1_qu_Arr=[
                        ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
                        [146,136,126,116,106,96,86],[104,98,90,82,74,66,58],
                        [76,70,64,58,52,46,40]
                    ];
					this.shop1_pile_Arr=[
                        ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
                        [73.5,82,73.5,80,82,90,82],
                        [26.5,18,26.5,20,18,10,18]
                    ];
					this.shop1_pileMuch_Arr=[
                        ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
                        [35,20,51,35,47,37,32],
                        [25,40,9,13,10,10,25],
                        [8,8,15,20,8,20,5],
                        [14,20,8,20,25,22,20],
                        [18,12,17,12,10,11,18]
                    ];
				} else if(this.shop1_activeName === "czkltj"){
					this.shop1_qu_Arr=[
					    ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
					    [146,136,126,116,106,96,86],[104,98,90,82,74,66,58],
					    [76,70,64,58,52,46,40]
					];
					this.shop1_pile_Arr=[
                        ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
					    [73.5,82,73.5,80,82,90,82],
					    [26.5,18,26.5,20,18,10,18]
					];
					this.shop1_pileMuch_Arr=[
                        ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
					    [35,20,51,35,47,37,32],
					    [25,40,9,13,10,10,25],
					    [8,8,15,20,8,20,5],
					    [14,20,8,20,25,22,20],
					    [18,12,17,12,10,11,18]
					];
				}
			},
			shop1_Click(tab, event) {
				 this.loadData()
			},
		},
		mounted() {
			this.loadData()
		},
	};
</script>

<style lang="scss">
.shop1{
    .el-tabs__nav {
        margin: 20px 10px 0;
        left: 0px !important;
    }

    .chart-Bar-bottom{
        >span{
            margin: 10px 20px 0;
            &:nth-child(1):after{
                background-color:#f74156;
            }
            &:nth-child(2):after{
                background-color:#ff6666;
            }
            &:nth-child(3):after{
                background-color:#ffb2b2;
            }
        }
    }

    .shop1-body{
        display: flex;
        margin-top: 40px;
        position: relative;
        .shop1-body-left{
            width: 28%;
            margin-right: 2%;
            position: relative;
            .echarts{
                margin-left: -70px;
            }
            .shop1-body-text{
                position: absolute;
                right: 10px;
                color: #333333;
                >p{
                    width: 120px;
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
                }
            }
            .shop1-sex-text{
                top: 90px;
                >p{
                    &:nth-child(1):after{
                        background-color: #1ed2aa;
                    }
                    &:nth-child(2):after{
                        background-color: #ff6074;
                    }
                }

            }
            .shop1-age-text{
                top: 55px;
                p{
                    span{
                        width: 36px;
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
        }
        .shop1-body-right{
            width: 70%;
        }
    }


    .shop1-funnel{
        width: 80%;
        margin: 0 10%;
        display: flex;
        >div{
            margin-top: 40px;
            height: 220px;
            width: 33.333333%;
            >p{
                text-align: center;
                font-weight: 700;
                font-size: 14px;
                color: #333333;
            }
        }
    }

}
</style>
