<template>
	<div class="table2">
		<div class="header-nav"><span>数字化行为统计</span> <i class="el-icon-arrow-right"></i>  <span>经销商活跃度</span></div>
		<div class="body-middle">
			<div class="body-middle-btn">
				<!-- <span>区域</span>
				<el-select v-model="qyvalue" placeholder="请选择">
					<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
				</el-select> -->
				<span>时间</span>
				<el-radio-group v-model="table2_radio">
				  <el-radio-button label="按日"></el-radio-button>
				  <el-radio-button label="按月"></el-radio-button>
				  <el-radio-button label="按年"></el-radio-button>
				</el-radio-group>
				<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
				<el-button >查询</el-button>
			</div>
			<div class="body-middle-chart">
				<div>
					<div class="body-middle-flex">
						<div class="col-6">
							<h3>整体使用情况</h3>
							<div>
								<vChartsBarline :seriesArr="table2_barline"  :seriesName="'整体使用情况'"></vChartsBarline>
								<div class="body-flex-text">
									<span>报备数</span><span>活跃设备数</span><span>活跃度</span>
								</div>
							</div>
						</div>
						<div class="col-6 col-bian">
							<h3>近期活跃度走势</h3>
							<div>
								<vChartsLine :seriesArr="table2_line"  :seriesName="['活跃度']" style="height: 300px;"></vChartsLine>
								<!-- <div class="body-flex-text2">
									<span>一区</span><span>二区</span><span>三区</span>
									<span>四区</span><span>五区</span><br><span>六区</span>
									<span>七区</span><span>八区</span><span>九区</span>
									<span>十区</span>
								</div> -->
							</div>
						</div>
					</div>
					<!-- <img src="../../../../../static/img/moment/table-img4.png"> -->
				</div>
				<div>
					<h3 class="body-margin-bottom">经销商使用情况</h3>
					<!-- <div class="body-middle-btn table2-btn">
						<el-select v-model="dqvalue" placeholder="请选择">
							<el-option v-for="item in dqoptions" :key="item.dqvalue" :label="item.dqlabel" :value="item.dqvalue"></el-option>
						</el-select>
                        <span class="span-left"></span>
						<el-select v-model="rmvalue" placeholder="请选择">
							<el-option v-for="item in rmoptions" :key="item.rmvalue" :label="item.rmlabel" :value="item.rmvalue"></el-option>
						</el-select>
						<el-button >查询</el-button>
					</div> -->
					<div class="table2-body">
						<div class="col-3">
							<div v-for="(item,index) in table2_sj" :key="index">
								<span>5</span>
								<ul>
									<li>{{item.name}}</li>
									<li>{{item.value}}</li>
								</ul>
								<p><i></i><i></i><i></i></p>
							</div>
						</div>
						<div class="col-7">
							<h4>赤峰市君泰汽车消费服务有限公司</h4>
							<div class="btn-select">
								<el-select v-model="bhvalue" placeholder="请选择">
									<el-option v-for="item in bhoptions" :key="item.bhvalue" :label="item.bhlabel" :value="item.bhvalue"></el-option>
								</el-select>
							</div>
							<div class="table2-chart">
								<vChartBar :seriesArr="table2_bianhao" :seriesName="'赤峰市君泰汽车消费服务有限公司'"></vChartBar>
								<p><span>活跃度</span></p>
							</div>
						</div>
					</div>
					<!-- <img src="../../../../../static/img/moment/table-img5.png"> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vChartsBarline from '@/components/charts/chartsbarline';
	import vChartsLine from '@/components/charts/chartsline';
	import vChartBar from '@/components/chart/ChartBar';

	import bus from '@/components/common/bus';

	export default {
		components: {
			vChartsBarline,
			vChartsLine,
			vChartBar
		},
		data(){
		  return{
			table2_radio: '按日',
			qyoptions: [
				{qyvalue: 'quanguo',qylabel: '全国'},
			],
			qyvalue:'quanguo',
			time:['2018-07-15','2018-07-21'],
			dqoptions: [
				{dqvalue: 'yiqu',dqlabel: '一区'},
				{dqvalue: 'erqu',dqlabel: '二区'},
				{dqvalue: 'sanqu',dqlabel: '三区'},
				{dqvalue: 'siqu',dqlabel: '四区'},
				{dqvalue: 'wuqu',dqlabel: '五区'},
				{dqvalue: 'liuqu',dqlabel: '六区'},
			],
			dqvalue:'yiqu',
			rmoptions: [
				{rmvalue: 'ctj',rmlabel: '常铁军'},
			],
			rmvalue:'ctj',
			bhoptions: [
				{bhvalue: 'bh1',bhlabel: '设备编码：SJ1932-00001'},
				{bhvalue: 'bh2',bhlabel: '设备编码：SJ1932-00002'},
				{bhvalue: 'bh3',bhlabel: '设备编码：SJ1932-00003'},
			],
			bhvalue:'bh1',


			table2_barline:[
                ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
				[55,60,80,55,50,90,53],
				[40,40,63,40,37,65,40],
				[40,48,70,45,40,70,43]
			],
			table2_line:[
                ['7.15','7.16','7.17','7.18','7.19','7.20','7.21'],
				[100,94,84,74,60,86,100],
				// [94,88,78,68,54,78,95],
				// [90,78,94,58,70,60,42],
				// [82,60,70,50,44,68,82],
				// [74,70,78,84,83,71,79],
				// [70,48,74,35,48,34,20],
				// [58,53,64,74,78,64,72],
				// [52,48,36,23,10,36,56],
				// [39,34,46,50,59,47,49]
			],

			table2_sj:[
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1932'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1933'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1934'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1935'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1936'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1937'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1938'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1939'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1940'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1941'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1942'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1943'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1944'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1945'},
				{name:'赤峰市君泰汽车消费服务有限公司',value:'SJ1946'},
				],

			table2_bianhao: [
				{name:'7.15',value:60},
				{name:'7.16',value:65},
				{name:'7.17',value:80},
				{name:'7.18',value:60},
				{name:'7.19',value:50},
				{name:'7.20',value:95},
				{name:'7.21',value:55},
			]

			};
		},
		methods:{

		},
		computed:{

		},
		mounted(){

		}
	}
</script>

<style lang="scss">
</style>
