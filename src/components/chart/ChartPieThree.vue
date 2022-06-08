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
                default: () => ['#ff8d9b', '#ffb6bf']

            },
            seriesInArr: {
                type: Array,
                default: () => []
            },
            seriesOutArr: {
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
                this.seriesOutArr.forEach((val, idx) => {
                    temp += val.value - 0;
                })
                return temp
            },
            seriesInData() {
                let tempArr = [];
                this.seriesInArr.forEach((value, index) => {
                    let item = {
                        name: value.name,
                        value: value.value,
                        itemStyle: {
                            normal: {
                                color: this.colorInArr[index]
                            }
                        }
                    }
                    tempArr.push(item)
                })
                return tempArr
            },
            seriesOutData() {
                let tempArr = [];
                this.seriesOutArr.forEach((val, idx) => {
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
                                    return params["seriesName"] + '<br>' + params["marker"] + params["name"] + ': ' + params["value"] + '%'
                                }
                            }
                        },
                    }
                    tempArr.push(item)
                })
                if (this.seriesInArr[0] && this.seriesInArr[0]["value"]) {
                    tempArr.push({
                        name: '',
                        value: (this.seriesOutMax * 100 / this.seriesInArr[0]["value"]) - this.seriesOutMax,
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
                }
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
                        radius: ['50%', '76%'],
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
                        radius: ['76%', '102%'],
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
