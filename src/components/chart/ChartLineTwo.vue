<template>
    <v-chart :options="echartsData" ref="ChartLine" />
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
            gridTop: {
                type: Number,
                default: 10
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
                default: 35
            },
            seriesName: {
                type: Array,
                default: () => []
            },
            // seriesNameT: {
            //     type: String,
            //     default: ""
            // },
            seriesArr: {
                type: Array,
                default: () => []
            },
            seriesArrT: {
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
                    this.$refs.ChartLine.resize();
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
            trimSeriesArrT() {
                let tempArr = [];
                this.xAxisData.forEach((item, index) => {
                    this.seriesArrT.forEach((v, i) => {
                        if (item === v['name']) {
                            tempArr.push(v);
                        }
                    })
                })
                return tempArr
            },
            echartsData() {
                let that = this;
                return {
                    tooltip: {
                        show: true,
                        // formatter: "{a}<br/>{b}: {c}%",
                        trigger: 'axis',
                        formatter: (params) => {
                            let htm = params[0].seriesName + '<br>';
                            params.forEach((item, index) => {
                                htm += item.marker + item.seriesName + ': ' + item.value + "%" +'<br>'
                            })
                            return htm
                        }
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
                            show: true,
                            inside: true
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
                    yAxis: {
                        show: false,
                        type: 'value'
                    },
                    series: [{
                        name: this.seriesName[0],
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
                                        color: "#ea4d4d"
                                    },
                                    {
                                        offset: 1,
                                        color: "#ffffff"
                                    }]
                                ),
                            }
                        },
                        data: this.seriesArr
                    },
                    {
                        name: this.seriesName[1],
                        type: 'line',
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                color: '#707376',
                                width: 3
                            }
                        },
                        /*
                        areaStyle: {
                            normal: {
                                color: new echartsJs.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{
                                        offset: 0,
                                        color: "#ea4d4d"
                                    },
                                    {
                                        offset: 1,
                                        color: "#ffffff"
                                    }]
                                ),
                            }
                        },*/
                        data: this.trimSeriesArrT
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
