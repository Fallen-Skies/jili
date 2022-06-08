<template>
    <v-chart :options="echartsData" ref="ChartPieTwo" />
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
            seriesName: {
                type: String,
                default: ""
            },
            colorInArr: {
                type: Array,
                default: () => ['#ff6074', '#707376']

            },
            colorOutArr: {
                type: Array,
                default: () => ["#fff", '#ff8d9b', '#ffb6bf', '#ffdce0']

            },
            seriesPercent: {
                type: String,
                default: ""
            },
            //默认series
            seriesArr: {
                type: Array,
                default: () => []

            },
        },
        data() {
            return {}
        },
        created() {
            bus.$on('echarts', msg => {
                if (msg === 'resize') {
                    this.$refs.ChartPieTwo.resize();
                }
            })
        },
        computed: {
            seriesOutMax() {
                let temp = 0;
                this.seriesArr.forEach((val, idx) => {
                    if (idx > 0) {
                        temp += val.value - 0;
                    }
                })
                return temp
            },
            seriesInData() {
                let tempArr = [{
                    name: "消费支出",
                    value: this.seriesPercent,
                    itemStyle: {
                        normal: {
                            color: this.colorInArr[0]
                        }
                    }
                }, {
                    name: "",
                    value: 100 - this.seriesPercent,
                    itemStyle: {
                        normal: {
                            color: this.colorInArr[1]
                        }
                    }
                }];
                return tempArr
            },
            seriesOutData() {
                let tempArr = [];
                this.seriesArr.forEach((val, idx) => {
                    if (idx > 0) {
                        let item = {
                            name: val.name,
                            value: val.value,
                            itemStyle: {
                                normal: {
                                    color: this.colorOutArr[idx]
                                }
                            },
                            tooltip: {
                                show: true,
                                formatter: function(params) {
                                    if (params["name"] !== "") {
                                        return params["seriesName"] + '<br>' + params["marker"] + params["name"] + ': ' + Math.round(params["value"] / 1000) / 10 + 'W'
                                    }
                                }
                            },
                        }
                        tempArr.push(item)
                    }
                })
                tempArr.push({
                    name: '',
                    value: (this.seriesOutMax * 100 / this.seriesPercent) - this.seriesOutMax,
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            opacity: 0
                        },
                        emphasis: {
                            color: '#fff',
                            opacity: 0
                        },
                    }
                })
                return tempArr
            },
            echartsData() {
                return {
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
                        formatter: function(params) {
                            if (params["name"] !== "") {
                                return params["seriesName"] + '<br>' + params["marker"] + params["name"] + ': ' + params["value"] + '%'
                            }
                        }
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
                        radius: ['50%', '70%'],
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
                        data: this.seriesInData
                    },
                    {
                        name: this.seriesName,
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: ['70%', '90%'],
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
                        data: this.seriesOutData
                    }]
                }
            }
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
</style>