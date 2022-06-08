<template>
    <!-- <div style="width:100%;height:100%;">
       <div class="chartMap_title">
            <h5>全国</h5>
            <p>活跃经销商：<span>630家</span></p>
            <p>活跃设备量：<span>6,000台</span></p>
            <p>平均活跃度：<span>43%</span></p>
        </div>
    </div> -->
    <v-chart :options="echartsData" ref="chartsmap" @mouseover="onMouseover" @mouseout="onMouseout"/>
</template>
<script>
    import ECharts from 'vue-echarts'
    import echarts from 'echarts'
    import bus from '../common/bus'

    //引入中国地图
    require('echarts/map/js/china')

    //引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        components: {
            'v-chart': ECharts
        },
        props: {
        },
        data() {
            return {
                geoCoordMap: {
                    '领克1区': [ 114.8031, 41.8682 ],
                    '领克2区': [ 113.9394, 28.2719 ],
                    '领克3区': [ 111.7421, 22.943 ],
                    '领克4区': [ 98.2636, 36.554 ],
                    '领克5区': [ 120.4191, 26.7312 ],
                    '领克6区': [ 121.9996, 33.415 ],
                    '领克7区': [ 126.7898, 45.1506 ],
                    '领克8区': [ 103.5585, 28.1904 ],
                    '领克9区': [ 117.5461, 30.9661 ]
                },
                mock: [
                    {
                        name: "领克1区"
                    },
                    {
                        name: "领克2区"
                    },
                      {
                        name: "领克3区"
                    },
                    {
                        name: "领克4区"
                    },
                    {
                        name: "领克5区"
                    },
                    {
                        name: "领克6区"
                    },
                    {
                        name: "领克7区"
                    },
                    {
                        name: "领克8区"
                    },
                    {
                        name: "领克9区"
                    }
                ],
                regionMap: {
                    "领克1区": ["北京", "河北", "内蒙古", "山西", "天津"],
                    "领克2区": ["湖北", "湖南", "江西"],
                    "领克3区": ["广东", "广西", "海南"],
                    "领克4区": ["甘肃", "河南", "宁夏", "青海", "陕西", "新疆"],
                    "领克5区": ["浙江", "福建"],
                    "领克6区": ["江苏"],
                    "领克7区": ["黑龙江", "吉林", "辽宁", "山东"],
                    "领克8区": ["贵州", "四川", "西藏", "云南", "重庆"],
                    "领克9区": ["安徽", "上海"]
                },
                myChart:{},
                mapData: {
                    '领克1区': {
                        value: 52,
                        activeDevice: 604,
                        applySales: 110,
                        activePercent: "52%↑",
                        color: "green"
                    },
                    '领克2区': {
                        value: 31,
                        activeDevice: 292,
                        applySales: 83,
                        activePercent: "31%↓",
                        color: "red"
                    },
                    '领克3区': {
                        value: 58,
                        activeDevice: 434,
                        applySales: 75,
                        activePercent: "58%↑",
                        color: "green"
                    },
                    '领克4区': {
                        value: 67,
                        activeDevice: 578,
                        applySales: 96,
                        activePercent: "67%↑",
                        color: "green"
                    },
                    '领克5区': {
                        value: 28,
                        activeDevice: 350,
                        applySales: 90,
                        activePercent: "28%↓",
                        color: "red"
                    },
                    '领克6区': {
                        value: 45,
                        activeDevice: 425,
                        applySales: 80,
                        activePercent: "45%↑",
                        color: "green"
                    },
                    '领克7区': {
                        value: 55,
                        activeDevice: 704,
                        applySales: 125,
                        activePercent: "55%↑",
                        color: "green"
                    },
                    '领克8区': {
                        value: 25,
                        activeDevice: 208,
                        applySales: 80,
                        activePercent: "25%↓",
                        color: "red"
                    },
                    '领克9区': {
                        value: 31,
                        activeDevice: 320,
                        applySales: 71,
                        activePercent: "31%↓",
                        color: "red"
                    }
                },
                highlightArr:[]
            }
        },
        created() {
            bus.$on('echarts', msg => {
                if (msg === 'resize') {
                    this.$refs.chartsmap.resize();
                }
            })
        },
        computed: {
            echartsData() {
                return {
                    // title: {
                    //     top: '212',
                    //     right: 'right',
                    //     text: '( 大区颜色越深\n活跃度越高 )',
                    //     textStyle: {
                    //         color: "#999999",
                    //         fontWeight: 400,
                    //         fontSize: 12,
                    //         lineHeight: 16
                    //     }
                    // },
                    tooltip: {
                        show: true,
                        position: function(point, params, dom, rect, size){
                            return [point[0]-100,point[1]-135];
                        },
                        formatter: (params) => {
                            var name;
                            var arr = [];
                            if (params.seriesIndex == 0) {
                                //scatter
                                name = params.name;
                                var dict = this.mapData[name];
                                return this.tipTemplate(name,dict.activeDevice,dict.applySales,dict.activePercent,dict.color);
                            } else {
                                //地图
                                 if (!params.data) {
                                    return;
                                };
                                for (const key in this.regionMap) {
                                    if (this.regionMap.hasOwnProperty(key)) {
                                        const array = this.regionMap[key];
                                        if (array.indexOf(params.data.name) != -1) {
                                            name = key;
                                            arr = array;
                                            break;
                                        }
                                    }
                                }
                                return this.tipTemplate(name,params.data.activeDevice,params.data.applySales,params.data.activePercent,params.data.color)
                            }
                        }
                    },
                    visualMap: {
                        type: 'continuous',
                        min: 0,
                        max: 100,
                        top: '35',
                        right: 'right',
                        calculable: true,
                        inverse: true,
                        seriesIndex: 1,
                        show:false,
                        inRange: {
                            color: ['#aeb7bc','#e5e8ea']
                        }
                    },
                    geo: {
                        map: 'china',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle : {
                            normal : {
                                borderColor : '#fff',
                                borderWidth : 2
                            },
                            emphasis: {
                                borderColor : '#fb6d7b'
                            }
                        },
                    },
                    series: [
                    {
						type : 'scatter',
						coordinateSystem : 'geo',
						symbol: 'roundRect',
						symbolSize: [40, 20],
						itemStyle: {
							normal: {
								color: 'transparent'
							}
						},
						label : {
							normal : {
								show : true,
								formatter : function(params) {
									return params.name;
								},
								position: 'inside',
								padding : [ 4, 15 ],
								borderRadius : 50,
								borderWidth : 0,
								borderColor : '#FFFFFF',
                                textStyle: {
                                    color : '#28353d',
                                    fontFamily : '微软雅黑',
                                    fontSize : 10,
                                    fontWeight : 'bold'
                                }
                            },
							emphasis : {
								show : false
							}
                        },
						data : this.convertData(this.mock)
					},
                    {
                        name: '地图',
                        type: 'map',
                        mapType: 'china',
                        roam : false,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle : {
                            emphasis: {
                                areaColor : '#fb6d7b'
                            }
                        },
                        data: this.convertData2()
                    }]
                }
            }
        },
        methods: {
            convertData(data) {
                let res = [];
                for (let i = 0; i < data.length; i++) {
                    let geoCoord = this.geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            },
            convertData2() {
                let series = [];
                for (const key in this.regionMap) {
                    if (this.regionMap.hasOwnProperty(key)) {
                        const array = this.regionMap[key];
                        let dict = this.mapData[key];
                        array.forEach(element => {
                            series.push({
                                name: element,
                                value: dict.value,
                                activeDevice: dict.activeDevice,
                                applySales: dict.applySales,
                                activePercent: dict.activePercent,
                                color: dict.color
                            })
                        });
                    }
                }
                return series;
            },
            tipTemplate(name, activeDevice, applySales, activePercent, color) {
                let html = `<div style="position:relative;background-color: #3A3C3D;height:135px;width:200px;border-radius:5px;margin: -16px;">
                            <div style="position:absolute;top:0;left:0;right:0;height:30px;line-height:30px;margin:0;color:#FFFFFF;font-size:14px;font-weight:bold;font-family:'Microsoft YaHei';text-align:left;border-bottom:1px solid #6A6D6D;padding-left:20px;">
                                ${name}
                            </div>
                            <div style="position:absolute;top:25px;width:200px;height:80px;margin-top:15px;">
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">活跃经销商数：</span>
                                    <span style="float:right;margin-right:20px;">${applySales}</span>
                                </div>
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">活跃设备总数：</span>
                                    <span style="float:right;margin-right:20px;">${activeDevice}</span>
                                </div>
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">平均活跃度：</span>
                                    <span style="float:right;margin-right:20px;color:${color};">${activePercent}</span>
                                </div>
                            </div>
                            <span style="position:absolute;top:135px;left:85px;display:block;width:0;height:0;border-top:12px solid #3A3C3D;border-left:12px solid transparent;border-right:12px solid transparent;"></span>
                        </div>`;
                return html;
            },
            drawMap() {
                let chartMap = document.getElementById('chartMap');
                this.myChart = echarts.init(chartMap);
                this.myChart.setOption(this.echartsData);
            },
            onMouseover(params) {
                this.highlightArr = [];
                if (params.seriesIndex == 0) {
                    //scatter
                    this.highlightArr = this.regionMap[params.name];
                } else {
                    //地图
                    if (!params.data) {
                        return;
                    }
                    for (const key in this.regionMap) {
                        if (this.regionMap.hasOwnProperty(key)) {
                            const array = this.regionMap[key];
                            if (array.indexOf(params.data.name) != -1) {
                                this.highlightArr = array;
                                break;
                            }
                        }
                    }
                }
                if (this.highlightArr.length == 0) {
                    return;
                }
                this.highlightArr.forEach(element => {
                    this.$refs.ChartMap.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 1,
                        name: element
                    });
                });
            },
            onMouseout(params) {
                this.highlightArr.forEach(element => {
                    this.$refs.ChartMap.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 1,
                        name: element
                    });
                });
            }
        },
    }
</script>
<style lang="scss" scoped>
    // .chartMap_title {
    //     position: absolute;
    //     top: 15px;
    //     left: 25px;
    // }
    // .chartMap_title h5 {
    //     border-left: 3px solid #f64359;
    //     padding-left: 10px;
    // }
    // .chartMap_title p {
    //     margin: 5px 5px 5px 10px;
    //     color: #666;
    // }
    // .chartMap_title p span {
    //     color: #F63C53;
    //     margin-left: 15px;
    //     font-weight: 900;
    // }
</style>
