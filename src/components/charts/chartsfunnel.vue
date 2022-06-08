<template>
	<v-chart :options="echartsData" ref="chartsfunnel" />
</template>

<script>
	import ECharts from 'vue-echarts'
	import bus from '../common/bus'

	const echartsJs = require('echarts/lib/echarts')

	//引入折线图
	require('echarts/lib/chart/funnel')

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
			    default: () => ['#ff6074', '#ff8d9b', '#ffb6bf']
			},
			seriesName: {
			    type: String,
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
					this.$refs.chartsfunnel.resize();
		        }
		    })
		},
		computed: {
			echartsData() {
				let that = this;
				return {
					color: this.colorArr,
					tooltip: {
						trigger: 'item',
                        formatter: "{a}<br/>{b}: {c}%",
					},
					calculable: true,
					series: [
						{
							name:this.seriesName,
							type:'funnel',
							left: '10%',
							top: 15,
							bottom: 0,
							width: '80%',
							height: 170,
							max:2000,
							min:400,
							minSize: '40%',
							maxSize: '80%',
							sort: 'descending',
							label: {
								show: true,
								position: 'inside',
                                formatter: '{c}'    // 漏斗图外标签
							},
							itemStyle: {
							    borderWidth: 0
							},
							emphasis: {
								label: {
									fontSize: 15
								}
							},
							data: this.seriesArr
						}
					],
				}
			}
		}
	}
</script>

<style>

</style>
