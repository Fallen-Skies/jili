<template>
	<div class="semesterManage1">
		<div class="header-nav"><span>市场活动监测</span> <i class="el-icon-arrow-right"></i>  <span>活动地图</span></div>
		<div class="body-middle">
			<div class="body-middle-table">
				<div class="body-middle-chart">.
					<div>
						<div class="semesterManage1-flex">
							<div>
								<h3>新视界</h3>
								<div class="flex-body1">
									<div v-for="(item,index) in semesterManage1_xsj" :key="index">
										<div><span>{{item.span}}</span>{{item.value}}</div>
										<p>{{item.name}}</p>
									</div>
								</div>
							</div>
							<div>
								<h3>车展</h3>
								<table border=0 cellspacing=0 cellpadding=0>
									<tr v-for="(item,index) in semesterManage1_cz">
										<td>{{item.name}}</td>
										<td><span>{{item.value1}}</span></td>
										<td>{{item.value2}}</td>
										<td>{{item.value3}}</td>
									</tr>
								</table>
							</div>
							<div>
								<h3>移动展厅</h3> 
								<table border=0 cellspacing=0 cellpadding=0>
									<tr v-for="(item,index) in semesterManage1_ydzt">
										<td>{{item.name}}</td>
										<td><span>{{item.value1}}</span></td>
										<td>{{item.value2}}</td>
										<td>{{item.value3}}</td>
									</tr>
								</table>
							</div>
							<div>
								<h3>即将开场 <span>15场</span></h3> 
								<div class="flex-body4">
									<div><b>新视界（5）:</b><p>武汉、长沙、广州、深圳、三亚</p></div>
									<div><b>车展（9）:</b><p>保定、唐山、九江、黄石、乌鲁木齐、杭州、无锡、佳木斯、六盘水</p></div>
									<div><b>移动展厅（1）:</b><p>岳阳</p></div>
								</div>
							</div>
						</div>
						<!-- <img src="../../../../../static/img/moment/semesterManage-img1.png"> -->
					</div>
					<div>
						<!-- <img src="../../../../../static/img/moment/semesterManage-img2.png"> -->
						<div class="semesterManage1-dt-flex">
							<div class="col-dt-7">
								<h3>全国活动地图</h3>
								 <div class="chart-box" :style="{height:'740px'}">
								    <vChartMap2 />
								</div>
							</div>
							<div class="col-dt-3">
								<h3>活动列表 <span>共46场</span></h3>
								<div class="dt-body">
									<div v-for="(item,i) in semesterManage1_hdlb" :key="i">
										<h4>{{item.name}}</h4>
										<ul>
											<li>活动城市：{{item.city}}</li>
											<li>活动类型：{{item.type}}</li>
											<li>活动时间：{{item.time}}</li>
											<li>活动地点：{{item.site}}</li>
										</ul>
										<p><span>{{item.detail}}</span></p>
									</div>
								</div>
								<div class="paging">
									<div class="prev">上一页</div><span>1/30</span><div class="next">下一页</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import vChartMap2 from '@/components/chart/ChartMap2';
	
	import bus from '@/components/common/bus';
	
	export default {
		components: {
			vChartMap2
		},
		data() {
		  return {
			semesterManage1_xsj:[
				{
					name:"累计平均效能",
					span:"↑",
					value:1.72,
				},
				{
					name:"本期效能",
					value:1.62
				},
				{
					name:"上期效能",
					value:1.66
				}
			],
			semesterManage1_cz:[
				{
					name:"",
					value1:"累计平均达标率",
					value2:"本期达标",
					value3:"上期达标"
				},
				{
					name:"经销商",
					value1:"↑ 90.2%",
					value2:"89.5%",
					value3:"91.2%"
				},
				{
					name:"执行方",
					value1:"↑ 92.5%",
					value2:"90.2%",
					value3:"93.2%"
				}
			],
			semesterManage1_ydzt:[
				{
					name:"",
					value1:"累计平均达标率",
					value2:"本期达标",
					value3:"上期达标"
				},
				{
					name:"经销商",
					value1:"↑ 94.2%",
					value2:"89.9%",
					value3:"90.5%" 
				},
				{
					name:"执行方",
					value1:"↑ 92.2%",
					value2:"93.3%",
					value3:"94.0%"
				}
			],
			semesterManage1_hdlb:[
				{
					name:"1、别克新视界临汾站",
					city:"临汾",
					type:"新视界",
					time:"2016-05-07~2016-05-08",
					site:"",
					detail:"查看详细"
				},
				{
					name:"2、别克新视界包头站",
					city:"包头",
					type:"新视界",
					time:"2016-04-30~2016-05-04",
					site:""
				},
				{
					name:"3、别克新视界石家庄站",
					city:"石家庄",
					type:"新视界",
					time:"2016-04-29~2016-05-02",
					site:""
				},
				{
					name:"4、别克车展赤峰站",
					city:"赤峰",
					type:"车展",
					time:"2016-05-28~2016-05-29",
					site:"赤峰市中国国际展览中心"
				},
			]
			
		  };
		},
		methods: {},
		
	};
	
</script>

<style>
</style>
