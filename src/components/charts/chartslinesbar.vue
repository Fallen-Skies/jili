<template>
	<v-chart :options="echartsData" ref="chartslinesbar" />
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
			colorArr: {
			    type: Array,
			    default: () => ['#111111', '#ff6666']
			},
			gridTop: {
			    type: Number,
			    default: 50
			},
			gridLeft: {
			    type: Number,
			    default: 45
			},
			gridRight: {
			    type: Number,
			    default: 45
			},
			gridBottom: {
			    type: Number,
			    default: 20
			},
			yAxisName: {
				type: Array,
				default: () => []
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
					this.$refs.chartslinesbar.resize();
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
					xAxis:{
						show: true,
						type: 'category',
						axisLine:{
						    show: true,
						    lineStyle: {
						        color: '#e5e5e5'
						    }
						},
						axisTick: {
						    show: false
						},
						axisLabel:{
							show: true,
							interval: 0,
							color: '#999999',
							fontSize: 12
						},
						 splitLine: {
						    show: false
						},
						data:this.seriesArr[0],
					},
					yAxis:[{
						min: 0,
						max:200,
						interval:50,
						name:this.yAxisName[0],
						nameTextStyle:{
						    color:"#999999",
						    fontSize:12,
						    padding:[5,0,15,-40]
						},
						splitLine:{
							show:true,
							lineStyle:{
								width:0.6,
							}
						},
					    axisLabel:{
							show:true,
							textStyle:{
							   color: '#999999',
							   fontSize: 12,
							}
						},
						axisLine:{
							show:true,
							lineStyle:{
								color:'#fff',
								width:0,
							}
						}
					},{
						min: 0,
						max:100,
						interval:25,
						name:this.yAxisName[1],
						nameTextStyle:{
						    color:"#999999",
						    fontSize:12,
						    padding:[5,0,15,40]
						},
						splitLine:{
							show:true,
							lineStyle:{
								width:0.6,
							}
						},
					    axisLabel:{
							show:true,
                            interval: 'auto',
                            formatter: '{value}',
							textStyle:{
							   color: '#999999',
							   fontSize: 12,
							}
						},
						axisLine:{
							show:true,
							lineStyle:{
								color:'#fff',
								width:0,
							}
						}
					}],
					series:[{
                        name: this.seriesName[0],
                        type: 'line',
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
                        data:this.seriesArr[1]
                    },{
						name: this.seriesName[1],
						type: 'bar',
						barWidth: "12",
						data:this.seriesArr[2]
					}]
				}
			}
		},
		methods: {},
		mounted() {}
	 }
</script>

<style lang="scss" scoped>

</style>
