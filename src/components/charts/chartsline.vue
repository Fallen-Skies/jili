<template>
	<v-chart :options="echartsData" ref="chartsline" />
</template>

<script>
	import ECharts from 'vue-echarts'
	import bus from '../common/bus'

	const echartsJs = require('echarts/lib/echarts')

	//引入折线图
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
			    default: () => ['#ffb900', '#ff8c00', '#f7630c', '#da3b01', '#ef6950', '#c30052', '#ec407a', '#b71c1c', '#f50057']
			},
			gridTop: {
			    type: Number,
			    default: 25
			},
			gridLeft: {
			    type: Number,
			    default: 30
			},
			gridRight: {
			    type: Number,
			    default: 10
			},
			gridBottom: {
			    type: Number,
			    default: 20
			},
            seriesName: {
                type: Array,
                default: () => []
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
					this.$refs.chartsline.resize();
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
							// type : 'shadow'
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
						// data: this.xAxisData
						data:this.seriesArr[0],
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
						type: 'line',
						// 去除折线图上的小圆点
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[1],
					},
					{
						name: this.seriesName[1],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[2],
					},
					{
						name: this.seriesName[2],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[3],
					},
					{
						name: this.seriesName[3],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[4],
					},
					{
						name: this.seriesName[4],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[5],
					},
					{
						name: this.seriesName[5],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[6],
					},
					{
						name: this.seriesName[6],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[7],
					},
					{
						name: this.seriesName[7],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[8],
					},
					{
						name: this.seriesName[8],
						type: 'line',
						symbol: "none",
						label: {
						    normal: { show: false }
						},
						lineStyle:{
							normal:{ width:2.5 },
						},
						data:this.seriesArr[9],
					}
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
