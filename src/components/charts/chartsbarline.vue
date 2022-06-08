<template>
	<v-chart :options="echartsData" ref="chartsbarline" />
</template>

<script>
	import ECharts from 'vue-echarts'
	import bus from '../common/bus'

	const echartsJs = require('echarts/lib/echarts')

	//引入折线图
	require('echarts/lib/chart/bar')
	require('echarts/lib/chart/line')

	//引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')

	export default {
		 components: {
		     'v-chart': ECharts
		 },
		props: {
			br: {
			    type: Number,
			    default: () => {
			        return document.body.clientWidth < 1610 ? 4 : 6
			    }
			},
			colorArr: {
			    type: Array,
			    default: () => ['#ff6666', '#ffb2b2', '#ea4d4d']
			},
			gridTop: {
			    type: Number,
			    default: 20
			},
			gridLeft: {
			    type: Number,
			    default: 10
			},
			gridRight: {
			    type: Number,
			    default: 40
			},
			gridBottom: {
			    type: Number,
			    default: 20
			},
			//默认series
			seriesArr: {
			    type: Array,
			    default: () => []
			}
		},
		data() {
		    return {}
		},
		created() {
		    bus.$on('echarts', msg => {
		        if (msg === 'resize') {
					this.$refs.chartsbarline.resize();
		        }
		    })
		},
		computed: {
			echartsData() {
				let that = this;
				return {
					color: this.colorArr,
					tooltip : {
						show: true,
						trigger: 'axis',
						axisPointer : {
							type : 'shadow'
						}
					},
					grid:{
						top: this.gridTop,
						left: this.gridLeft,
						right: this.gridRight,
						bottom: this.gridBottom
					},
					 // 横坐标
					xAxis:{
						show: true,
						type: 'category',
						// 是否显示坐标轴轴线 默认为true
						axisLine:{
						    show: true,
						    lineStyle: {
						        color: '#e5e5e5'
						    }
						},
						// 是否显示坐标轴刻度 默认为true
						axisTick: {
						    show: false
						},
						// 是否显示刻度标签 默认为true
						axisLabel:{
							show: true,
							interval: 0,
							color: '#999999',
							fontSize: 12,
							// 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
							formatter: function(params) {
							    let newParamsName = "";
							    let paramsNameNumber = params.length;
							    let rowNumber = Math.ceil(paramsNameNumber / that.br);
							    if (paramsNameNumber > that.br) {
							        for (let p = 0; p < rowNumber; p++) {
							            let tempStr = "";
							            let start = p * that.br;
							            let end = start + that.br;
							            if (p == rowNumber - 1) {
							                tempStr = params.substring(start, paramsNameNumber);
							            } else {
							                tempStr = params.substring(start, end) + "\n";
							            }
							            newParamsName += tempStr;
							        }

							    } else {
							        newParamsName = params;
							    }
							    return newParamsName
							},
						},
						 // 分行式，拼合线；分模线
						 splitLine: {
						    show: false
						},
						// data: this.xAxisData
						data:this.seriesArr[0]
					},
					// 纵坐标
					yAxis:{
						// 是否显示 y 轴 默认为true
					    show: false,
					    type: 'value'
					},
					// 系列列表。每个系列通过 type 决定自己的图表类型
					series:[{
						name: '报备数',
						type: 'bar',
						barWidth: "12",
						label: {
						    normal: {
						        show: false
						    }
						},
						barGap:0.3,
						data:this.seriesArr[1],
					},
					{
						name: '活跃设备数',
						type: 'bar',
						barWidth: "12",
						label: {
						    normal: {
						        show: false
						    }
						},
						data:this.seriesArr[2],
					},
					{
						name: '活跃度',
						type: 'line',
						// 去除折线图上的小圆点
						symbol: "none",
						label: {
						    normal: {
						        show: false
						    }
						},
						lineStyle:{
							normal:{
								width:2.5,
							},
						},
						data:this.seriesArr[3],
					},
					],
				}
			}
		},
		methods: {},
		mounted() {}
	 }
</script>

<style lang="scss" scoped>

</style>
