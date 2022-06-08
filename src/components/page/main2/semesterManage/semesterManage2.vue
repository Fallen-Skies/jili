<template>
	<div class="semesterManage2">
		<div class="header-nav"><span>市场活动监测</span> <i class="el-icon-arrow-right"></i>  <span>活动分析</span></div>
		<div class="body-middle">
			<el-tabs v-model="semesterManage2_activeName" @tab-click="semesterManage2_handleClick"  class="box-head-nav box-body-nav">
				<el-tab-pane label="车展类型" name="czlx">
					<div class="body-middle-table">
						<div class="body-middle-btn">
							<span>项目类型</span>
							<el-select v-model="xmvalue" placeholder="请选择">
								<el-option v-for="item in xmoptions" :key="item.xmvalue" :label="item.xmlabel" :value="item.xmvalue"></el-option>
							</el-select>
							<span class="span-left">区域</span>
							<el-select v-model="qyvalue" placeholder="请选择">
								<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
							</el-select>
							 <el-button >查询</el-button>
						</div>
						<div class="body-middle-chart">.
							<div>
								<div class="body-middle-flex">
									<div class="col-6-fx">
										<h3>活动效能指数</h3>
										<div class="fx-body">
											<div class="fx-body-title">
												<span>大区</span>
												<span>活动效能指数</span>
												<span>单客流成本</span>
												<span>活动预算</span>
											</div>
											<ul>
												<li v-for="(item,index) in semesterManage2_zhishu" :key="index">
													<span>{{item.name}}</span>
													<span>{{item.value1}}</span>
													<span>{{item.value2}}</span>
													<span>{{item.value3}}</span>
													<div><el-progress :stroke-width="7" :percentage="item.percent" :show-text="false" /></div>
												</li>
											</ul>
										</div>
									</div>
									<div class="col-6-fx col-bian">
										<h3>客流人数</h3>
										<div class="fx-body">
											<vChartsLines :seriesArr="semesterManage2_barlines"  :seriesName="['有效客流 (人次)','高意向客流 (人次)']" v-if="'czlx' === semesterManage2_activeName" style="height: 420px;"></vChartsLines>
											<div class="fx-text">
												<span>有效客流 (人次)</span><span>高意向客流 (人次)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<h3>各城市活动达标对比</h3>
								<div class="semesterManage2_chart">
									<vChartsBars :seriesArr="semesterManage2_qu_Arr" :seriesName="['总客流数','高意向客流数']"  v-if="'czlx' === semesterManage2_activeName" style="height: 260px;"></vChartsBars>
									<div class="chart-text"><span>总客流数</span><span>高意向客流数</span></div>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="活动线路" name="hdfx">
					<div class="body-middle-table">
						<div class="body-middle-btn">
							<span>活动名称</span>
							<el-select v-model="hxlvalue" placeholder="请选择">
								<el-option v-for="item in hxloptions" :key="item.hxlvalue" :label="item.hxllabel" :value="item.hxlvalue"></el-option>
							</el-select>
							<el-button >查询</el-button>
						</div>
						<div class="body-middle-chart">.
							<div>
								<div class="body-middle-flex">
									<div class="col-6-fx">
										<h3>活动效能指数</h3>
										<div class="fx-body">
											<div class="fx-body-title">
												<span>大区</span>
												<span>活动效能指数</span>
												<span>单客流成本</span>
												<span>活动预算</span>
											</div>
											<ul>
												<li v-for="(item,index) in semesterManage2_zhishu" :key="index">
													<span>{{item.name}}</span>
													<span>{{item.value1}}</span>
													<span>{{item.value2}}</span>
													<span>{{item.value3}}</span>
													<div><el-progress :stroke-width="7" :percentage="item.percent" :show-text="false" /></div>
												</li>
											</ul>
										</div>
									</div>
									<div class="col-6-fx col-bian">
										<h3>客流人数</h3>
										<div class="fx-body">
											<vChartsLines :seriesArr="semesterManage2_barlines"  :seriesName="['有效客流 (人次)','高意向客流 (人次)']" v-if="'hdfx' === semesterManage2_activeName" style="height: 420px;"></vChartsLines>
											<div class="fx-text">
												<span>有效客流 (人次)</span><span>高意向客流 (人次)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<h3>各城市活动达标对比</h3>
								<div class="semesterManage2_chart">
                                    <vChartsBars :seriesArr="semesterManage2_qu_Arr" :seriesName="['总客流数','高意向客流数']"  v-if="'hdfx' === semesterManage2_activeName" style="height: 260px;"></vChartsBars>
									<div class="chart-text"><span>总客流数</span><span>高意向客流数</span></div>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="城市" name="cs">
					<div class="body-middle-table">
						<div class="body-middle-btn">
							<span>区域</span>
							<el-select v-model="cqgvalue" placeholder="请选择" style="margin: 0 20px 0 0;">
								<el-option v-for="item in cqgoptions" :key="item.cqgvalue" :label="item.cqglabel" :value="item.cqgvalue"></el-option>
							</el-select>
							<el-select v-model="cqyvalue" placeholder="请选择">
								<el-option v-for="item in cqyoptions" :key="item.cqyvalue" :label="item.cqylabel" :value="item.cqyvalue"></el-option>
							</el-select>
							 <el-button >查询</el-button>
						</div>
						<div class="body-middle-chart">.
							<div>
								<div class="body-middle-flex">
									<div class="col-6-fx">
										<h3>活动效能指数</h3>
										<div class="fx-body">
											<div class="fx-body-title">
												<span>大区</span>
												<span>活动效能指数</span>
												<span>单客流成本</span>
												<span>活动预算</span>
											</div>
											<ul>
												<li v-for="(item,index) in semesterManage2_zhishu" :key="index">
													<span>{{item.name}}</span>
													<span>{{item.value1}}</span>
													<span>{{item.value2}}</span>
													<span>{{item.value3}}</span>
													<div><el-progress :stroke-width="7" :percentage="item.percent" :show-text="false" /></div>
												</li>
											</ul>
										</div>
									</div>
									<div class="col-6-fx col-bian">
										<h3>客流人数</h3>
										<div class="fx-body">
											<vChartsLines :seriesArr="semesterManage2_barlines"  :seriesName="['有效客流 (人次)','高意向客流 (人次)']" v-if="'cs' === semesterManage2_activeName" style="height: 280px;"></vChartsLines>
											<div class="fx-text">
												<span>有效客流 (人次)</span><span>高意向客流 (人次)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div :style="{height:'400px'}">
								<h3>活动列表</h3>
								<div class="semesterManage2_body">
									<div class="body_content" v-for="(item,index) in semesterManage2_huodong" :key="index">
										<h4>{{item.name}}</h4>
										<ul>
											<li>活动类型: {{item.value1}}</li>
											<li>活动时间: {{item.value2}}</li>
											<li>活动地点: </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import vChartsBars from '@/components/charts/chartsBars';
	import vChartsLines from '@/components/charts/chartslines';

	import bus from '@/components/common/bus';

	export default {
		components: {
		    vChartsBars,
			vChartsLines
		},
		data() {
			return {
				semesterManage2_activeName: 'czlx',
				xmoptions: [{
					xmvalue: 'quanguo',
					xmlabel: '全国'
				}],
				xmvalue:'quanguo',
				qyoptions: [{
				   qyvalue: 'quanguo',
				   qylabel: '全国'
				}],
				qyvalue:'quanguo',

				hxloptions: [{
					hxlvalue: 'xly',
					hxllabel: '线路一'
				}],
				hxlvalue:'xly',

				cqgoptions: [{
				   cqgvalue: 'quanguo',
				   cqglabel: '全国'
				}],
				cqgvalue:'quanguo',
				cqyoptions: [{
					cqyvalue: 'beijing',
					cqylabel: '北京'
				}],
				cqyvalue:'beijing',

				semesterManage2_huodong:[
					{
						name:"1、别克新视界2015年",
						value1:'新视界',
						value2:'2015-05-07~2015-05-08',
					},
					{
						name:"2、别克新视界2016年",
						value1:'新视界',
						value2:'2016-05-07~2016-05-08',
					},
					{
						name:"3、别克新视界2017年",
						value1:'新视界',
						value2:'2017-05-07~2017-05-08',
					}
				],
				semesterManage2_barlines:[],
				semesterManage2_qu_Arr: [],
				semesterManage2_zhishu: [],

			};
		},
		methods: {
			loadData() {
				if (this.semesterManage2_activeName === "czlx") {	//车展类型
					//活动效能指数
					this.semesterManage2_zhishu=[
						{name: "一区",value1: "1.70",value2: "9.95元",value3: "18.88万元",percent: 85},
						{name: "二区",value1: "1.71",value2: "10.10元",value3: "21.33万元",percent: 67.5},
						{name: "三区",value1: "1.73",value2: "9.62元",value3: "17.00万元",percent: 50},
						{name: "四区",value1: "1.69",value2: "9.52元",value3: "18.67万元",percent: 85},
						{name: "五区",value1: "1.68",value2: "10.53元",value3: "19.29万元",percent: 67.5},
						{name: "六区",value1: "1.68",value2: "9.87元",value3: "17.62万元",percent: 50},
						{name: "七区",value1: "1.65",value2: "6.80元",value3: "18.57万元",percent: 85},
						{name: "八区",value1: "1.69",value2: "11.05元",value3: "18.57万元",percent: 67.5},
						{name: "九区",value1: "1.68",value2: "9.20元",value3: "18.40万元",percent: 50},
					];
					//客流人数
					this.semesterManage2_barlines=[
						['一区','二区','三区','四区','五区','六区','七区','八区','九区'],
						[2750,3200,2100,2350,2850,3350,2950,2100,2800],
						[2600,3000,1600,2100,2600,2950,2550,1800,2550],
					];
					//各城市活动达标对比
					this.semesterManage2_qu_Arr=[
						['一区','二区','三区','四区','五区','六区','七区','八区','九区'],
						[96,90,84,78,72,66,60,54,48],[80,75,70,65,60,55,50,45,40]
					];
				} else if(this.semesterManage2_activeName === "hdfx"){ 	//活动路线
					//活动效能指数
					this.semesterManage2_zhishu=[
						{name: "北京",value1: "1.70",value2: "9.95元",value3: "18.88万元",percent: 86},
						{name: "上海",value1: "1.71",value2: "10.10元",value3: "21.33万元",percent: 68.5},
						{name: "广州",value1: "1.73",value2: "9.62元",value3: "17.00万元",percent: 51},
						{name: "深圳",value1: "1.69",value2: "9.52元",value3: "18.67万元",percent: 86},
						{name: "天津",value1: "1.68",value2: "10.53元",value3: "19.29万元",percent: 68.5},
						{name: "包头",value1: "1.68",value2: "9.87元",value3: "17.62万元",percent: 51},
						{name: "黑龙江",value1: "1.65",value2: "6.80元",value3: "18.57万元",percent: 86},
						{name: "西藏",value1: "1.69",value2: "11.05元",value3: "18.57万元",percent: 68.5},
						{name: "江苏",value1: "1.68",value2: "9.20元",value3: "18.40万元",percent: 51},
					];
					//客流人数
					this.semesterManage2_barlines=[
						['北京','上海','广州','深圳','天津','包头','黑龙江','西藏','江苏'],
						[2750,3200,2100,2350,2850,3350,2950,2100,2800],
						[2600,3000,1600,2100,2600,2950,2550,1800,2550],
					];
					// 各城市活动达标对比
					this.semesterManage2_qu_Arr=[
						['北京','上海','广州','深圳','天津','包头','黑龙江','西藏','江苏'],
						[96,90,84,78,72,66,60,54,48],[80,75,70,65,60,55,50,45,40]
					];
				} else if(this.semesterManage2_activeName === "cs"){ 	//城市
					//活动效能指数
					this.semesterManage2_zhishu=[
						{name: "2015年",value1: "1.70",value2: "9.95元",value3: "18.88万元",percent: 85},
						{name: "2016年",value1: "1.71",value2: "10.10元",value3: "21.33万元",percent: 67.5},
						{name: "2017年",value1: "1.73",value2: "9.62元",value3: "17.00万元",percent: 50},
					];
					//客流人数
					this.semesterManage2_barlines=[
						['2015年','2016年','2017年'],
						[1200,2600,1300],
						[1000,2350,625],
					];
				}
			},
			semesterManage2_handleClick(tab, event) {
				this.loadData()
			},
		},
		mounted() {
			this.loadData()
		},
	};
</script>

<style>
</style>
