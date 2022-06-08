<template>
    <v-chart :options="echartsData" ref="ChartPie"/>
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
                default: () => ['#1ed2aa', '#ff6074']
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
                    this.$refs.ChartPie.resize();
                }
            })
        },
        computed: {
            echartsData() {
                return {
                    color: this.colorArr,
                    title: {
                        text: this.titleTxt,
                        top: 'middle',
                        left: '49%',
                        textAlign: 'center',
                        textStyle: {
                            color: '#999999',
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        show: true,
						formatter: "{a}<br/>{b}: {d}%"
                    },
                    grid: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    series: [{
                        name: this.seriesName,
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: ['50%', '76%'],
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.seriesArr
                    }]
                }
            }
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
</style>