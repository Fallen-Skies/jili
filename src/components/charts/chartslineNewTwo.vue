<template>
    <v-chart :options="echartsData" ref="chartslineNewTwo" />
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
            br: {
                type: Number,
                default: () => {
                    return document.body.clientWidth < 1610 ? 4 : 6
                }
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
                default: 40
            },
            seriesName: {
                type: Array,
                default: () => []
            },
            seriesArr: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                areaStyleArr: [
                    new echartsJs.graphic.LinearGradient(
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
                    new echartsJs.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: "#d1d1d1"
                        },
                        {
                            offset: 1,
                            color: "#ffffff"
                        }]
                    )
                ]
            }
        },
        created() {
            bus.$on('echarts', msg => {
                if (msg === 'resize') {
                    this.$refs.chartslineNewTwo.resize();
                }
            })
        },
        computed: {
            xAxisData() {
                let tempArr = []
                this.seriesArr[0].forEach((item, index) => {
                    tempArr.push(item.name)
                })
                return tempArr
            },
            seriesData() {
                let tempArr = [];
                this.seriesName.forEach((val, idx) => {
                    let item = {
                        name: val,
                        type: 'line',
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                // color: '#ea4d4d',
                                width: 3
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: this.areaStyleArr[idx],
                            }
                        },
                        data: this.seriesArr[idx]
                    }
                    tempArr.push(item)
                })
                return tempArr
            },
            echartsData() {
                let that = this;
                return {
                    color: ["#ea4d4d", "#111111"],
                    tooltip: {
                        show: true,
                        trigger: 'axis',
                        formatter: (params) => {
                            let htm = '<div style="width:320px;">';
                            params.forEach((item, index) => {
                                htm += `<div class="lineChartsTooltip">
                                            ${item.marker}
                                            <div class="lineChartsTooltip-name">${item.seriesName}</div>
                                            <div class="lineChartsTooltip-num">${item.value}</div>
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
                    // legend: {
                    //     show: true,
                    //     top: 0
                    // },
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
                            show: false
                        },
                        data: this.xAxisData
                    },
                    yAxis: [{
                        show: true,
                        type: 'value',
                        name:'点击量',
                        min: 0,
                        max: 200,
                        interval:50,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        nameTextStyle:{
                            color:"#999999",
                            fontSize:12,
                            padding:[5,0,15,-50]
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            color: '#999999',
                            fontSize: 12,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e5e5e5'
                            }
                        },
                    },{
                        show: true,
                        type: 'value',
                        name:'点击率',
                        min: 0,
                        max: 100,
                        interval:25,
                        nameTextStyle:{
                            color:"#999999",
                            fontSize:12,
                            padding:[5,-50,15,0]
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
                            interval: 'auto',
                            formatter: '{value} %'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e5e5e5'
                            }
                        },
                    }],
                    series: this.seriesData
                }
            }
        },
        methods: {},
        mounted() {}
    }
</script>
<style lang="scss" scoped>
</style>
