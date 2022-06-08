<template>
	<v-chart :options="echartsData" ref="chartspile" />
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

	export default{
		components: {
		    'v-chart': ECharts
		},
		props:{
			br: {
			    type: Number,
			    default: () => {
			        return document.body.clientWidth < 1610 ? 4 : 6
			    },
			},
			colorArr: {
			    type: Array,
			    default: () => ['#1ed2aa', '#ff6074']
			},
			gridTop: {
				type: Number,
				default: 0
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
					this.$refs.chartspile.resize();
		        }
		    })
		},
		computed: {
			echartsData(){
				let that = this;
				return {
					color:this.colorArr,
					tooltip : {
						show: true,
                        trigger: 'axis',
                        axisPointer : {
                        	type : 'shadow'
                        },
                        formatter: (params) => {
                            let htm = '';
                            params.forEach((item, index) => {
                                let name='';
                                if(index === 0){
                                    name=item.name+'<br>';
                                }
                                htm+=name+item.marker+item.seriesName + ': ' + item.value+"%"+'<br>';
                            })
                            return htm
                        },
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
							// 格式化
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
							}
						},
						 // 分行式，拼合线；分模线
						 splitLine: {
						    show: false
						},
						data:this.seriesArr[0],
					},
					yAxis:{
						// 是否显示 y 轴 默认为true
					    show: false,
					    type: 'value'
					},
					series:[
						{
							name:'男',
							type:'bar',
							stack:'性别',
							barWidth: "36",
							data:this.seriesArr[1]
						},
						{
							name:'女',
							type:'bar',
							stack:'性别',
							data:this.seriesArr[2]
						},
					]
				}
			}
		}
	}
</script>

<style>
</style>
