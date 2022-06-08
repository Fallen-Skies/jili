<template>
    <!-- <v-chart :options="echartsData" ref="ChartMap2" @click="onClick"/> -->
    <div id="chartMap2" style="width:100%;height:100%"></div>
</template>
<script>
    // import ECharts from 'vue-echarts'

    import echarts from 'echarts'
    import bus from '../common/bus'
    import Qs from 'qs';

    //引入中国地图
    require('echarts/map/js/china')
    //require('echarts/map')
    import Buick from 'static/json/Buick_geo.json'
    import buick_01 from 'static/json/buick_01_geo.json'
    import buick_02 from 'static/json/buick_02_geo.json'
    import buick_03 from 'static/json/buick_03_geo.json'
    import buick_04 from 'static/json/buick_04_geo.json'
    import buick_05 from 'static/json/buick_05_geo.json'
    import buick_06 from 'static/json/buick_06_geo.json'
    import buick_07 from 'static/json/buick_07_geo.json'
    import buick_08 from 'static/json/buick_08_geo.json'
    import buick_09 from 'static/json/buick_09_geo.json'

    //引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    export default {
        components: {
            // 'v-chart': ECharts
        },
        props: {

        },
        data() {
            return {
                myChart:{},
                areaMap: {
                    "全国" : "Buick",
                    "领克1区" : "buick_01",
                    "领克2区" : "buick_02",
                    "领克3区" : "buick_03",
                    "领克4区" : "buick_04",
                    "领克5区" : "buick_05",
                    "领克6区" : "buick_06",
                    "领克7区" : "buick_07",
                    "领克8区" : "buick_08",
                    "领克9区" : "buick_09"
                },
                myOption: {},
                curRegion: '全国',
                records: []
            }
        },
        created() {
            bus.$on('echarts', msg => {
                if (msg === 'resize') {
                console.log(this.$refs)
                    this.$refs.ChartMap2.resize();
                }
            })
        },
        computed: {
        },
        methods: {
            drawMap(){
                let chartMap = document.getElementById('chartMap2');
                // 注册可用的地图
                echarts.registerMap('全国', Buick);
                this.myChart = echarts.init(chartMap);
                let that = this;
                let now = new Date().getTime();
                this.myOption = {
                    tooltip: {
                        show: true
                    },
					color : [ '#FFF739', '#59D251', '#FF566B', '#4A4A4A' ],
                    legend : {
                        orient : 'vertical',
                        x: 20,
                        bottom: 20,
                        data : [ '正在开展', '车展', '移动展厅' ]
                    },
                    tooltip : {
							show : true,
							trigger : 'item',
							showDelay : 0,
							transitionDuration : 0.2,
							backgroundColor : '#fff',
							borderRadius : 0,
							borderWidth : 1,
							borderColor : '#ccc',
							// padding : [6,0,0,30],
							position : function(p) {
								return [ p[0] - 105, p[1] - 160 ];
							},
							textStyle : {
								color : '#000'
							},
							formatter : function(params) {
								let name = params.name;
								let planhold = 0, havehold = 0, willhold = 0;
								for (let i = 0; i < that.records.length; i++) {
									if (that.curRegion == '全国') {
										if (name == that.records[i].region) {
											planhold++;
											let begin = new Date(
													that.records[i].begin_date)
													.getTime();
											if (now > begin) {
												havehold++;
											}
											if (now < begin) {
												willhold++;
											}
										}
									} else {
										if (name == that.records[i].province) {
											planhold++;
											let begin = new Date(
													that.records[i].begin_date)
													.getTime();
											if (now > begin) {
												havehold++;
											}
											if (now < begin) {
												willhold++;
											}
										}
									}
                                }
                                return that.tipTemplate(name, planhold, havehold, willhold);
							}
						},
                    series: [
                        {
                            name : '大区',
                            type : 'map',
                            roam : false,
                            mapType : '全国', // 自定义扩展图表类型
                            selectedMode : 'single',
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : true,
                                        textStyle : {
                                            color : '#28353d',
                                            fontFamily : '微软雅黑',
                                            fontSize : 10,
                                            fontWeight : 'bold'
                                        }
                                    },
                                    areaColor: '#e5e8ea',
                                    borderColor : '#FFFFFF',
                                    borderWidth : 1
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        textStyle : {
                                            color : '#28353d',
                                            fontFamily : '微软雅黑',
                                            fontSize : 10,
                                            fontWeight : 'bold'
                                        }
                                    },
                                    areaColor: '#cbd3d6'
                                }
                            },
                            data : []
                        }, {
                            name : '正在开展',
                            type : 'map',
                            mapType : '全国',
                            data : [],
                            markPoint : {
                                symbol : 'circle',
                                symbolSize : 8,
                                effect : {
                                    show : true
                                },
                                itemStyle : {
                                    normal : {
                                        label : {
                                            show : false
                                        }
                                    }
                                },
                                tooltip : {
                                    formatter : function(params) {
                                        return that.tip1Template(params.data.title,params.data.name,params.data.type,params.data.time,params.data.address)
                                    }
                                },
                                data : []
                            }
                        },
                        {
                            name : '移动展厅',
                            type : 'map',
                            mapType : '全国',
                            data : [],
                            markPoint : {
                                symbol : 'circle',
                                symbolSize : 8,
                                itemStyle : {
                                    normal : {
                                        label : {
                                            show : false
                                        }
                                    }
                                },
                                tooltip : {
                                    formatter : function(params) {
                                        return that.tip1Template(params.data.title,params.data.name,params.data.type,params.data.time,params.data.address)
                                    }
                                },
                                data : []
                            }
                        }, {
                            name : '车展',
                            type : 'map',
                            mapType : '全国',
                            data : [],
                            markPoint : {
                                symbol : 'circle',
                                symbolSize : 8,
                                itemStyle : {
                                    normal : {
                                        label : {
                                            show : false
                                        }
                                    }
                                },
                                tooltip : {
                                    formatter : function(params) {
                                        return that.tip1Template(params.data.title,params.data.name,params.data.type,params.data.time,params.data.address)
                                    }
                                },
                                data : []
                            }
                        }]
                    };
                this.myChart.setOption(this.myOption);
                this.getInfo();
            },
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
            getInfo() {
                let that = this;
                this.$axios.post(process.env.API_HOST + "/bi/geelyTest/postGeelyActivityMap", Qs.stringify({
                        region: this.curRegion
                }))
                .then((res) => {
                    if (res.status === 200) {
                        let data = res.data;
                        that.records = data;
                        let type_0 = new Array();
                        let type_1 = new Array();
                        let type_2 = new Array();
                        let type_3 = new Array();
                        let type_4 = new Array();
                        let totalCount = 0;
                        let overCount = 0;
                        let list = new Array();
                        let count_1 = 0, count_2 = 0, count_3 = 0;
                        let city_1 = new Array(), city_2 = new Array(), city_3 = new Array();
                        for (let i = 0; i < data.length; i++) {
                            let begin = new Date(
                                    data[i].begin_date)
                                    .getTime();
                            let end = new Date(data[i].end_date)
                                    .getTime();
                            if (data[i].type == '新视界') {
                                type_2.push({
                                    name : data[i].city,
                                    coord : [
                                            data[i].longitude,
                                            data[i].latitude ],
                                    title : data[i].name,
                                    type : data[i].type,
                                    time : data[i].begin_date,
                                    address : data[i].address
                                });
                                if (data[i].status == '未开始') {
                                    totalCount++;
                                    count_1++;
                                    city_1.push(data[i].city);
                                } else {
                                    overCount++;
                                    list.push(data[i]);
                                }

                            } else if (data[i].type == '车展') {
                                type_3.push({
                                    name : data[i].city,
                                    coord : [
                                            data[i].longitude,
                                            data[i].latitude ],
                                    title : data[i].name,
                                    type : data[i].type,
                                    time : data[i].begin_date,
                                    address : data[i].address
                                });
                                if (data[i].status == '未开始') {
                                    totalCount++;
                                    count_2++;
                                    city_2.push(data[i].city);
                                } else {
                                    overCount++;
                                    list.push(data[i]);
                                }
                            } else if (data[i].type == '移动展厅') {
                                type_4.push({
                                    name : data[i].city,
                                    coord : [
                                            data[i].longitude,
                                            data[i].latitude ],
                                    title : data[i].name,
                                    type : data[i].type,
                                    time : data[i].begin_date,
                                    address : data[i].address
                                });
                                if (data[i].status == '未开始') {
                                    totalCount++;
                                    count_3++;
                                    city_3.push(data[i].city);
                                } else {
                                    overCount++;
                                    list.push(data[i]);
                                }
                            }

                            // if (now > begin && now < end) { //正在开展
                            //     type_1.push({
                            //         name : data[i].city,
                            //         coord : [
                            //                 data[i].longitude,
                            //                 data[i].latitude ],
                            //         title : data[i].name,
                            //         type : data[i].type,
                            //         time : data[i].begin_date,
                            //         address : data[i].address
                            //     })
                            // }
                        }
                        setTimeout(function() { //地图初始化未完成，调用会报错
                            that.myOption.series[1].markPoint.data = type_1;
                            that.myOption.series[2].markPoint.data = type_3;
                            that.myOption.series[3].markPoint.data = type_4;
                            that.myChart.setOption(that.myOption);
                        }, 500);
                    }
                })
                .catch((res) => {})
            },
            tipTemplate(title, planhold, havehold, willhold) {
                let html = `<div style="position:relative;background-color: #3A3C3D;height:135px;width:200px;border-radius:5px;margin: -16px;">
                            <div style="position:absolute;top:0;left:0;right:0;height:30px;line-height:30px;margin:0;color:#FFFFFF;font-size:14px;font-weight:bold;font-family:'Microsoft YaHei';text-align:left;border-bottom:1px solid #6A6D6D;padding-left:20px;">
                                ${title}
                            </div>
                            <div style="position:absolute;top:25px;width:200px;height:80px;margin-top:15px;">
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">计划开展：</span>
                                    <span style="float:right;margin-right:20px;">${planhold}场</span>
                                </div>
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">已经开展：</span>
                                    <span style="float:right;margin-right:20px;">${havehold}场</span>
                                </div>
                                <div style="font-size:14px;height: 21px;color:#fff;margin-bottom:5px;">
                                    <span style="float:left;margin-left:20px;">即将开展：</span>
                                    <span style="float:right;margin-right:20px;">${willhold}场</span>
                                </div>
                            </div>
                            <span style="position:absolute;top:135px;left:85px;display:block;width:0;height:0;border-top:12px solid #3A3C3D;border-left:12px solid transparent;border-right:12px solid transparent;"></span>
                        </div>`;
                return html;
            },
            tip1Template(title, city, type, time, address) {
                let html = `<div style="position:relative;background-color: #3A3C3D;width:240px;height:150px;border-radius:5px;margin: -16px;">
                                <div style="position:absolute;top:0;left:0;right:0;padding-left:20px;height:30px;line-height:30px;margin:0;color:#FFFFFF;font-size:14px;font-weight:bold;font-family:'Microsoft YaHei';border-bottom:1px solid #6A6D6D;">
                                ${title}
                                </div>
                                <div style="position:absolute;top:25px;width:240px;height:100px;margin-top:15px;padding-left:20px;color:#fff;">
                                    <div style="font-size:14px;line-height:20px;margin-bottom:5px;"><b>活动城市：</b>${city}</div>
                                    <div style="font-size:14px;line-height:20px;margin-bottom:5px;"><b>活动类型：</b>${type}</div>
                                    <div style="font-size:14px;line-height:20px;margin-bottom:5px;"><b>活动时间：</b>${time}</div>
                                    <div style="font-size:14px;line-height:20px;margin-bottom:5px;margin-right:20px;overflow: hidden;text-overflow: ellipsis;"><b>活动地点：</b>${address}</div>
                                </div>
                                <span style="position:absolute;top:150px;left:105px;display:block;width:0;height:0;border-top:12px solid #3A3C3D;border-left:12px solid transparent;border-right:12px solid transparent;"></span>
                            </div>`;
                return html;
            }
        },
        mounted() {
            let that = this;
            this.drawMap();
            this.myChart.on("mapselectchanged", function(params) {
                let name = params.batch[0].name;
                that.curRegion = name;
                 if (name == "领克1区") {
                    echarts.registerMap(name, buick_01);
                } else if (name == "领克2区") {
                    echarts.registerMap(name, buick_02);
                } else if (name == "领克3区") {
                    echarts.registerMap(name, buick_03);
                } else if (name == "领克4区") {
                    echarts.registerMap(name, buick_04);
                } else if (name == "领克5区") {
                    echarts.registerMap(name, buick_05);
                } else if (name == "领克6区") {
                    echarts.registerMap(name, buick_06);
                } else if (name == "领克7区") {
                    echarts.registerMap(name, buick_07);
                } else if (name == "领克8区") {
                    echarts.registerMap(name, buick_08);
                } else if (name == "领克9区") {
                    echarts.registerMap(name, buick_09);
                } else {
                    echarts.registerMap(name, Buick);
                    that.curRegion = '全国';
                }
                [0,1,2,3].forEach(element => {
                    that.myOption.series[element].mapType = name;
                    that.myOption.series[element].map = name;
                    if (element != 0) {
                        that.myOption.series[element].markPoint.data = [];
                    }
                });
                that.myChart.setOption(that.myOption, true);
                that.getInfo();
            })
        }
    }
</script>
<style lang="scss" scoped>
</style>
