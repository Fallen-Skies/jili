<template>
    <v-chart :options="echartsData" ref="ChartBar" />
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
            br: {
                type: Number,
                default: () => {
                    return document.body.clientWidth < 1610 ? 4 : 6
                }
            },
            gridTop: {
                type: Number,
                default: 60
            },
            gridLeft: {
                type: Number,
                default: 50
            },
            gridRight: {
                type: Number,
                default: 30
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
                    this.$refs.ChartBar.resize();
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
                        formatter: "{a}<br/>{b}: {c}%",
                        // trigger: 'axis',
                        // formatter: (params) => {
                        //     let htm = '';
                        //     params.forEach((item, index) => {
                        //         htm += item.seriesName + '<br>' + item.seriesIndex + item.name + ': ' + item.value+"%"
                        //     })
                        //     return htm
                        // },
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
                    yAxis: {
                        show: false,
                        type: 'value'
                    },
                    series: [{
                        name: this.seriesName,
                        type: 'bar',
                        barWidth: "16",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echartsJs.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{
                                        offset: 0,
                                        color: "#f63c53"
                                    },
                                    {
                                        offset: 1,
                                        color: "#ff877e"
                                    }]
                                ),
                                barBorderRadius: [2, 2, 0, 0]
                            }
                        },
                        data: this.seriesArr,
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
