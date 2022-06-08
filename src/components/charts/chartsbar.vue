<template>
	<v-chart :options="echartsData" ref="chartsbar" />
</template>

<script>
	import ECharts from 'vue-echarts'
	import bus from '../common/bus'

	const echartsJs = require('echarts/lib/echarts')

	//引入折线图
	require('echarts/lib/chart/bar')

	//引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')

	export default {
		 components: {
		     'v-chart': ECharts
		 },
		props: {
			colorArr: {
			    type: Array,
			    default: () => ['#f74156', '#ff6666', '#ffb2b2']
			},
			gridTop: {
			    type: Number,
			    default: 30
			},
			gridLeft: {
			    type: Number,
			    default: 20
			},
			gridRight: {
			    type: Number,
			    default: 20
			},
			gridBottom: {
			    type: Number,
			    default: 30
			},
            seriesName: {
                type: Array,
                default: ""
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
					this.$refs.chartsbar.resize();
		        }
		    })
		},
		computed: {
			echartsData() {
				let that = this;
				return {
					color: this.colorArr,
					tooltip: {
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
						},
						// 分行式，拼合线；分模线
						splitLine: {
						    show: false
						},
						data: this.seriesArr[0]
					},
					// 纵坐标
					yAxis:{
						// 是否显示 y 轴 默认为true
					    show: false,
					    type: 'value'
					},
					// 系列列表。每个系列通过 type 决定自己的图表类型
					series:[{
						name: this.seriesName[0],
						type: 'bar',
						barWidth: "12",
						label: {
						    normal: {
						        show: false
						    }
						},
						barGap:1,
						data:this.seriesArr[1],
					},
					{
						name: this.seriesName[1],
						type: 'bar',
						barWidth: "12",
						label: {
						    normal: {
						        show: false
						    }
						},
						interval: 36,
						data:this.seriesArr[2],
					},
					{
						name: this.seriesName[2],
						type: 'bar',
						barWidth: "12",
						label: {
						    normal: {
						        show: false
						    }
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
