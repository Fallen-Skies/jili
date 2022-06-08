<template>
    <v-chart :options="echartsData" ref="ChartPieMuch" />
</template>
<script>
    import ECharts from 'vue-echarts'
    import bus from '../common/bus'

    const echartsJs = require('echarts/lib/echarts')

    //引入折线图
    require('echarts/lib/chart/pie')

    //引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        components: {
            'v-chart': ECharts
        },
        props: {
            //默认xAxis
            titleTxt: {
                type: String,
                default: "2018全国"
            },
            colorArr: {
                type: Array,
                default: () => ['#f63c53', '#ff877e']

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
                    this.$refs.ChartPieMuch.resize();
                }
            })
        },
        computed: {
            titleArr() {
                let tempArr = [];
                this.seriesArr.forEach((value, index) => {
                    let item = {
                        text: value.name + '个',
                        top: 32 - (index * 6) + '%',
                        right: '46%',
                        textAlign: 'center',
                        textStyle: {
                            color: '#333333',
                            fontSize: 12
                        }
                    }
                    tempArr.push(item);
                })
                return tempArr;
            },
            seriesData() {
                let tempArr = [];
                this.seriesArr.forEach((value, index) => {
                    let item = {
                        name: value.name + '个',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: [22 + (index * 12) + '%', 30 + (index * 12) + '%'],
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [value.value, {
                            value: 100 - value.value,
                            hoverOffset: false,
                            hoverAnimation: false,
                            tooltip: {
                                show: false,
                                trigger: 'none'
                            },
                            itemStyle: {
                                emphasis: {
                                    color: "#f2f4f8"
                                }
                            },
                            cursor:'default'
                        }]
                    }
                    tempArr.push(item);
                })
                return tempArr;
            },
            echartsData() {
                return {
                    color: [new echartsJs.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: this.colorArr[0]
                        },
                        {
                            offset: 1,
                            color: this.colorArr[1]
                        }]
                    ), "#f2f4f8"],
                    title: this.titleArr,
                    tooltip: {
                        show: true,
						formatter: "{a}<br/>{b}{d}%"
                    },
                    grid: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    series: this.seriesData
                }
            }
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
</style>
