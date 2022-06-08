<template>
    <v-chart :options="echartsData" ref="ChartLineNew" />
</template>
<script>
    import ECharts from 'vue-echarts'
    import bus from '../common/bus'

    const echartsJs = require('echarts/lib/echarts')

    //引入折线图
    require('echarts/lib/chart/line')

    //引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/legend')
    require('echarts/lib/component/title')
    export default {
        components: {
            'v-chart': ECharts
        },
        props: {
            yAxisName: {
                type: Array,
                default: () => []
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
                default: 30
            },
            gridBottom: {
                type: Number,
                default: 20
            },
            seriesName: {
                type: String,
                default: ""
            },
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
                    this.$refs.ChartLineNew.resize();
                }
            })
        },
        computed: {
            xAxisData() {
                let tempArr = []
                this.seriesArr.forEach((item, index) => {
                    tempArr.push(item.name)
                })
                return tempArr
            },
            echartsData() {
                let that = this;
                return {
                    tooltip: {
                        show: true,
                        trigger: 'axis',
                        formatter: (params) => {
                            let htm = '<div style="width:360px;">';
                            params.forEach((item, index) => {
                                htm += `<div class="lineChartsTooltip">
                                            ${item.marker}
                                            <div class="lineChartsTooltip-name">${item.seriesName}</div>
                                            <div class="lineChartsTooltip-num" style="margin:0 15px 0 30px;">${item.value}</div>
                                            <div class="lineChartsTooltip-change">
                                                环比:<span class="${item.data.wow<0?'grey':'green'}">${item.data.wow<0?-item.data.wow:item.data.wow}% </span>
                                                同比:<span class="${item.data.yoy<0?'grey':'green'}">${item.data.yoy<0?-item.data.yoy:item.data.yoy}% </span>
                                            </div>
                                        </div>`
                            })
                            htm += '</div>'
                            return htm
                        },
                    },
                    grid: {
                        top: this.gridTop,
                        left: this.gridLeft,
                        right: this.gridRight,
                        bottom: this.gridBottom
                    },
                    xAxis: {
                        show: true,
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#e5e5e5'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            color: '#999999',
                            fontSize: 12,
                        },
                        splitLine: {
                            show: false
                        },
                        data: this.xAxisData
                    },
                    yAxis: {
                        show: true,
                        type: 'value',
                        min: 0,
                        max: 200,
                        name:this.yAxisName,
                        nameTextStyle:{
                            color:"#999999",
                            fontSize:12,
                            padding:[5,0,15,-50]
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            color: '#999999',
                            fontSize: 12,
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
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e5e5e5'
                            }
                        },
                    },
                    series: [{
                        name: this.seriesName,
                        type: 'line',
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                color: '#ea4d4d',
                                width: 3
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echartsJs.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{
                                        offset: 0,
                                        color: "#f8dbdb"
                                    },
                                    {
                                        offset: 1,
                                        color: "#ffffff"
                                    }]
                                ),
                            }
                        },
                        data: this.seriesArr
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
