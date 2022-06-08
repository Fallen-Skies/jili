<template>
    <div class="drive1">
        <div class="header-nav"><span>试驾统计分析</span> <i class="el-icon-arrow-right"></i>  <span>车型试驾分析</span></div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">车型试驾分析</h3>
        </div>
        <div class="body-middle">
        	<div class="body-middle-btn">
        		<span>时间</span>
        		<el-radio-group v-model="drive1_radio">
        		  <el-radio-button label="按日"></el-radio-button>
        		  <el-radio-button label="按月"></el-radio-button>
        		  <el-radio-button label="按年"></el-radio-button>
        		</el-radio-group>
        		<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
        		<el-button >查询</el-button>
        	</div>
        	<div class="body-middle-chart">
                <div>
                    <el-row class="drive1-row">
                        <el-col :span="7" >
                            <h3 class="body-margin-bottom">试驾达标指数</h3>
                            <div class="middle-text-center drive1-body">
                                <div>
                                   <canvas id="drive1_circle-canvas" width="160" height="160"></canvas>
                                </div>
                                <div class="drive1_circle-num">
                                    <countTo :startVal='0' :endVal='85' separator=',' ref="countTo"></countTo>{{'分'}}
                                </div>
                                <div class="body-zd1-text">
                                    <div>环比：
                                    <span><img src="../../../../../static/img/marketing/01_1_icon04.png"></img> 14%</span>
                                    同比：
                                    <span><img src="../../../../../static/img/marketing/01_1_icon03.png"> 4%</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="17">
                            <h3 class="body-margin-bottom">近期进店客流趋势</h3>
                            <div :style="{height:'230px'}">
                                <vChartsLinebar :seriesArr="drive1_linebar" :seriesName="['一区试驾数','二区试驾数','三区试驾数','四区试驾数','五区试驾数','试驾满意度','试驾参与率']"></vChartsLinebar>
                            </div>
                            <div class="chart-bar-span chart-linebar-bottom">
                                <span>一区试驾数</span>
                                <span>二区试驾数</span>
                                <span>三区试驾数</span>
                                <span>四区试驾数</span>
                                <span>五区试驾数</span>
                                <span>试驾满意度</span>
                                <span>试驾参与率</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right boder-right">
                            <h3 class="body-margin-bottom">全国试驾次数分析</h3>
                            <div :style="{height:'330px'}">
                                <vChartLineNewTwo :seriesArr="drive1_lineNewTwo" :seriesName="['单车平均次数','单店平均次数']"/>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">试驾未达标的车辆统计</h3>
                            <div>
                                <vChartsBars :seriesArr="drive1_bars" :seriesName="['上期数据','本期试驾数']"  :gridTop='60' :colorArr='this.drive1_bars_color' :style="{height:'270px'}"></vChartsBars>
                                <div class="chart-bar-span chart-bars-bottom">
                                    <span>上期数据</span>
                                    <span>本期试驾数</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right">
                            <h3 class="body-margin-bottom">近期试驾人数趋势
                                <div><span>车型</span>
                                    <el-select v-model="type_value" placeholder="请选择">
                                        <el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                                    </el-select>
                                </div>
                            </h3>
                            <div :style="{height:'330px'}">
                                <vChartsLineNew :seriesArr="drive1_lineNew" :gridTop='20' :seriesName="'近期试驾人数趋势'"/>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left boder-left">
                            <h3 class="body-margin-bottom">区域试驾趋势</h3>
                            <div :style="{height:'330px'}">
                                <vChartsLineTwo :seriesArr="drive1_lineTwo" :seriesName="['一区试驾数','二区试驾数','三区试驾数','四区试驾数','五区试驾数']" />
                            </div>
                            <div class="chart-line-span chart-lineTwo-bottom">
                                <span>一区试驾数</span>
                                <span>二区试驾数</span>
                                <span>三区试驾数</span>
                                <span>四区试驾数</span>
                                <span>五区试驾数</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">试驾车系分布</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right boder-right">
                            <h3 class="body-margin-bottom">车辆类型</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="drive1_car_Arr" :colorArr="drive1_car_Color" :seriesName="'车辆类型'" :titleTxt="''" />
                                    <div class="chart-info-gender chart-info-gender2 chart-info-gender3">
                                        <p>SUV：<span>{{drive1_car_Arr[0]["value"]}}%</span></p>
                                        <p>SEDAN：<span>{{drive1_car_Arr[1]["value"]}}%</span></p>
                                        <p>新能源：<span>{{drive1_car_Arr[2]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">车型</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="drive1_type_Arr" :seriesName="'车型'" :colorArr="drive1_age_Color" :titleTxt="''" />
                                    <div class="chart-info-buy chart-info-buy2">
                                        <p class="chart-info-buy_0">领克01：<span>{{drive1_type_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-buy_1">领克01PHEV：<span>{{drive1_type_Arr[1]["value"]}}%</span></p>
                                        <p class="chart-info-buy_2">领克02：<span>{{drive1_type_Arr[2]["value"]}}%</span></p>
                                        <p class="chart-info-buy_3">领克03：<span>{{drive1_type_Arr[3]["value"]}}%</span></p>
                                        <p class="chart-info-buy_4">领克03+：<span>{{drive1_type_Arr[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">试驾用户属性</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
            	<span>车型</span>
            	<el-select v-model="lkcx_value" placeholder="请选择">
            		<el-option v-for="item in lkcx_options" :key="item.lkcx_value" :label="item.label" :value="item.lkcx_value"></el-option>
            	</el-select>
            	<el-button>查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right boder-right">
                            <h3 class="body-margin-bottom">性别分布</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="drive1_sex_Arr" :seriesName="'近一周客流人群分布（性别）'" :titleTxt="''" />
                                    <div class="chart-info-gender chart-info-gender2" style="width: 86px;">
                                        <p class="chart-info-gender-man">男：<span>{{drive1_sex_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-gender-woman">女：<span>{{drive1_sex_Arr[1]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">年龄段分布</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="drive1_age_Arr" :seriesName="'近一周客流人群分布（年龄段）'" :colorArr="drive1_age_Color" :titleTxt="''" />
                                    <div class="chart-info-buy chart-info-buy2" style="width: 110px;">
                                        <p class="chart-info-buy_0">18-24：<span>{{drive1_age_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-buy_1">25-34：<span>{{drive1_age_Arr[1]["value"]}}%</span></p>
                                        <p class="chart-info-buy_2">35-44：<span>{{drive1_age_Arr[2]["value"]}}%</span></p>
                                        <p class="chart-info-buy_3">45-54：<span>{{drive1_age_Arr[3]["value"]}}%</span></p>
                                        <p class="chart-info-buy_4">55+：<span>{{drive1_age_Arr[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">试驾统计</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right">
                            <h3 class="body-margin-bottom">违规统计</h3>
                            <div :style="{height:'330px'}">
                                <vChartLineNewTwo :seriesArr="drive1_lineNewTwo2" :seriesName="['违规次数','车辆报备']"/>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left boder-left">
                            <h3 class="body-margin-bottom">服务质量统计</h3>
                            <div :style="{height:'293px'}">
                                <vChartsLinesbar :seriesArr="drive1_linesbar" :yAxisName="['km','mm']" :seriesName="['单次试驾时间','单次试驾评价里程']" />
                            </div>
                            <div class="chart-line-span chart-linesbar-bottom">
                                <span>单次试驾时间</span>
                                <span>单次试驾评价里程</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    //数字滚动
    import countTo from 'vue-count-to';
    import vChartsLinebar from '@/components/charts/chartslinebar';
    import vChartLineNewTwo from '@/components/chart/ChartLineNewTwo';
    import vChartsBars from '@/components/charts/chartsBars';
    import vChartsLineNew from '@/components/charts/chartslineNew';
    import vChartsLineTwo from '@/components/charts/chartslineTwo';
    import vChartPie from '@/components/chart/ChartPie';
    import vChartsLinesbar from '@/components/charts/chartslinesbar';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default{
        components: {
            countTo,
            vChartsLinebar,
            vChartLineNewTwo,
            vChartsBars,
            vChartsLineNew,
            vChartsLineTwo,
            vChartPie,
            vChartsLinesbar
        },
        data() {
            return {
                drive1_radio: '按日',
                time:['2018-07-15','2018-07-21'],

                drive1_linebar:[
                    ['领克 01','领克 01PHEV','领克 02','领克 03','领克 03+'],
                    [15,45,15,10,35],[25,20,20,25,20],[15,20,10,15,20],
                    [15,20,15,10,30],[15,20,15,5,10],[155,185,115,152,148],
                    [118,150,100,120,135]
                ],

                drive1_lineNewTwo: [
                    [{
                        name: "第21周",
                        value: 140,
                        yoy: 4,
                        wow: -4
                    }, {
                        name: "第22周",
                        value: 162,
                        yoy: 3,
                        wow: 3
                    }, {
                        name: "第23周",
                        value: 80,
                        yoy: 5,
                        wow: -10
                    }, {
                        name: "第24周",
                        value: 110,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "第25周",
                        value: 140,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "第26周",
                        value: 170,
                        yoy: 4,
                        wow: 3
                    }, {
                        name: "第27周",
                        value: 150,
                        yoy: 6,
                        wow: -2
                    }],
                    [{
                        name: "第21周",
                        value: 115,
                        yoy: 2,
                        wow: -10
                    }, {
                        name: "第22周",
                        value: 142,
                        yoy: 3,
                        wow: -1
                    }, {
                        name: "第23周",
                        value: 66,
                        yoy: 4,
                        wow: 2
                    }, {
                        name: "第24周",
                        value: 83,
                        yoy: 6,
                        wow: -3
                    }, {
                        name: "第25周",
                        value: 118,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "第26周",
                        value: 160,
                        yoy: 4,
                        wow: -7
                    }, {
                        name: "第27周",
                        value: 138,
                        yoy: 6,
                        wow: -10
                    }]
                ],

                drive1_bars:[
                	['一区','二区','三区','四区','五区'],
                	[30,35,45,50,25],[20,26,35,38,16]
                ],

                drive1_bars_color:['#ff6666','#ffb2b2'],

                drive1_lineNew: [{
                    name: "第21周",
                    value: 135,
                    yoy: 2,
                    wow: 6
                }, {
                    name: "第22周",
                    value: 162,
                    yoy: 3,
                    wow: -3
                }, {
                    name: "第23周",
                    value: 80,
                    yoy: 4,
                    wow: 4
                }, {
                    name: "第24周",
                    value: 108,
                    yoy: 6,
                    wow: -11
                }, {
                    name: "第25周",
                    value: 136,
                    yoy: 6,
                    wow: -11
                }, {
                    name: "第26周",
                    value: 156,
                    yoy: 2,
                    wow: -8
                }, {
                    name: "第27周",
                    value: 132,
                    yoy: 2,
                    wow: -10
                }],

                type_options: [{
                   type_value: '选项0',
                   label: '全部'
                },{
                   type_value: '选项1',
                   label: '新视界'
                },{
                   type_value: '选项2',
                   label: '展会'
                },{
                   type_value: '选项3',
                   label: '移动展厅'
                }],
                type_value:'选项0',

                drive1_lineTwo:[
                    ['第21周','第22周','第23周','第24周','第25周','第26周','第27周'],
                    [180,185,170,175,161,147,185],
                    [130,160,138,145,148,125,145],
                    [125,150,115,125,128,118,95],
                    [98,115,100,85,105,75,68],
                    [53,38,50,65,80,48,38]
                ],

                drive1_car_Arr: [{
                    name: 'SUV',
                    value: 50
                },{
                    name: 'SEDAN',
                    value: 24
                },{
                    name: '新能源',
                    value: 26
                }],

                drive1_car_Color: ["#ff6074","#707376","#1ed2aa"],

                drive1_type_Arr: [{
                    name: '领克01',
                    value: 25
                }, {
                    name: '领克01PHEV',
                    value: 35
                }, {
                    name: '领克02',
                    value: 20
                }, {
                    name: '领克03',
                    value: 15
                }, {
                    name: '领克03+',
                    value: 5
                }],

                drive1_age_Color: ["#fab2bb", "#ff6074", "#de4155", "#707376", "#131313"],

                lkcx_options: [{
                   lkcx_value: '选项0',
                   label: '全部',
                },{
                   lkcx_value: '选项1',
                   label: '领克01',
                },{
                   lkcx_value: '选项2',
                   label: '领克01PHEV',
                },{
                   lkcx_value: '选项3',
                   label: '领克02',
                },{
                   lkcx_value: '选项4',
                   label: '领克03',
                },{
                   lkcx_value: '选项5',
                   label: '领克03+',
                }],
                lkcx_value:'选项0',

                drive1_sex_Arr: [{
                    name: '男',
                    value: 64
                }, {
                    name: '女',
                    value: 36
                }],

                drive1_age_Arr: [{
                    name: '18-24',
                    value: 25
                }, {
                    name: '25-34',
                    value: 35
                }, {
                    name: '35-44',
                    value: 20
                }, {
                    name: '45-54',
                    value: 15
                }, {
                    name: '55+',
                    value: 5
                }],
                drive1_lineNewTwo2: [
                    [{
                        name: "一区",
                        value: 178,
                        yoy: 2,
                        wow: 6
                    }, {
                        name: "二区",
                        value: 90,
                        yoy: 3,
                        wow: -3
                    }, {
                        name: "三区",
                        value: 121,
                        yoy: 4,
                        wow: 4
                    }, {
                        name: "四区",
                        value: 152,
                        yoy: 6,
                        wow: -11
                    }, {
                        name: "五区",
                        value: 165,
                        yoy: 6,
                        wow: -11
                    }],
                    [{
                        name: "一区",
                        value: 150,
                        yoy: 2,
                        wow: -10
                    }, {
                        name: "二区",
                        value: 75,
                        yoy: 3,
                        wow: -1
                    }, {
                        name: "三区",
                        value: 95,
                        yoy: 4,
                        wow: 2
                    }, {
                        name: "四区",
                        value: 125,
                        yoy: 6,
                        wow: -3
                    }, {
                        name: "五区",
                        value: 155,
                        yoy: 6,
                        wow: 2
                    }]
                ],
                drive1_linesbar: [
                    ['一区','二区','三区','四区','五区'],
                    [138,168,130,118,172],
                    [105,110,155,160,95]
                ]
            }
        },
        mounted() {
            this.loadData()
            this.$nextTick(() => {
                let canvas = document.getElementById("drive1_circle-canvas");
                this.drawMain(canvas, 85, "#ff7b42", "#faf5f5", "#ff7b42");
            })
        },
        methods: {
            loadData() {},
            drawMain(drawing_elem, percent, forecolor, bgcolor, fillColor) {
                /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
            */
                var context = drawing_elem.getContext("2d");
                var center_x = drawing_elem.width / 2;
                var center_y = drawing_elem.height / 2;
                //var rad = Math.PI * 2 / 100;
                var rad = Math.PI * 2 * (240 / 360) / 100;
                var speed = 0;

                // 绘制背景圆圈
                function backgroundCircle() {
                    context.save();
                    context.beginPath();
                    context.lineWidth = 10; //设置线宽
                    var radius = center_x - context.lineWidth;
                    context.lineCap = "round";
                    context.strokeStyle = bgcolor;
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-210), Math.PI / 180 * (30), false); //开始角度 结束角度
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制运动圆环
                function foregroundCircle(n) {
                    context.save();
                    context.strokeStyle = forecolor;
                    context.lineWidth = 13;
                    context.lineCap = "round";
                    var radius = center_x - context.lineWidth;
                    context.beginPath();
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-210), Math.PI / 180 * (-210) + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制文字
                function text(n) {
                    context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
                    context.fillStyle = forecolor;
                    var font_size = 40;
                    context.font = font_size + "px Helvetica";
                    var text_width = context.measureText(n.toFixed(0) + "%").width;
                    context.fillText(n.toFixed(0) + "%", center_x - text_width / 2, center_y + font_size / 2);
                    context.restore();
                }

                //执行动画
                (function drawFrame() {
                    window.requestAnimationFrame(drawFrame);
                    context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
                    backgroundCircle();
                    //text(speed);
                    foregroundCircle(speed);
                    if (speed >= percent) return;
                    speed += 1;
                }());
            },
        },
    }
</script>

<style lang="scss" scoped>
.drive1{
    .body-middle{
        .chart-bars-bottom{
            >span{
                margin: 0px 15px 20px;
            	&:nth-child(1):after{
            		background-color:#ff6666;
            	}
                &:nth-child(2):after{
            		background-color:#ffb2b2;
            	}
            }
        }
        .body-middle-chart{
            >div{
                &:last-child{
                    padding-bottom: 30px;
                }
            }

            h3{
                >div{
                    float: right;
                    position: relative;
                    top:-6px;
                    font-size: 12px;
                    font-weight: 500;
                    >span{
                        margin-right: 10px;
                        line-height: 30px;
                    }
                }
                .el-select{
                	border: 0px !important;
                	width: 90px;
                    height: 30px;
                	border-radius: 4px;
                	border: solid 1px #dde2ec;
                    .el-input{
                        .el-input__inner{
                           height: 30px;
                           text-align: center;
                           line-height: 30px;
                        }
                    }
                }
            }
        }

        .card-bd{
            margin-top: 40px;
            .chart-box{
                margin-left: 10%;
            }
        }
        .chart-info-gender2 {
            top: 50%;
            left: 85%;
            width: 120px;
            margin-left: 0;
            font-weight: 700;
            font-size: 14px;
            margin-top: -20px;
        }
        .chart-info-gender3 {
            margin-top: -30px;
            >p{
                &:nth-child(1):after {
                    background-color: #ff6074;
                }
                &:nth-child(2):after {
                    background-color: #707376;
                }
                &:nth-child(3):after {
                    background-color: #1ed2aa;
                }
            }
        }
        .chart-info-buy {
            top: 50%;
            width: 160px;
            left: 85%;
            margin-left: 0;
            margin-top: -50px;
            p {
                font-weight: 700;
                font-size: 14px;
                &.chart-info-buy_0::after {
                    background-color: #fab2bb;
                }

                &.chart-info-buy_1::after {
                    background-color: #ff6074;
                }
                &.chart-info-buy_2::after {
                    background-color: #de4155;
                }
                &.chart-info-buy_3::after {
                    background-color: #707376;
                }
                &.chart-info-buy_4::after {
                    background-color: #131313;
                }
            }
        }
        @media (max-width: 1400px){
            .chart-info-buy {
                max-width: 148px;
                left: 80%;
            }
        }
    }
    .drive1-row{
        .el-col{
            position: relative;
        }
        .drive1-body{
            position: relative;
            top: 30px;
        }
        .body-zd1-text{
            position: relative;
            top: -23px;
            >div{
                font-family: MicrosoftYaHei;
                font-size: 12px;
                line-height: 50px;
                letter-spacing: 0.5px;
                color: #333333;
                >span{
                    margin-right: 10px;
                    position: relative;
                    letter-spacing: 0.5px;
                    color: #ff4f41;
                    font-family: MicrosoftYaHei;
                    &:first-child{
                        color: #0acf97;
                    }
                }
            }
        }
    }
    .drive1_circle-num {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        letter-spacing: -0.4px;
        font-weight: bold;
        font-family: PingFangSC-Regular;
        color: #333333;
        span {
            display: inline-block;
            font-weight: normal;
            font-size: 48px;
            line-height: 72px;
            letter-spacing: -1px;
            font-family: "fjallaone";
        }
    }
    .body-zd1-text{
        position: relative;
        top: -30px;
        >div{
            font-family: MicrosoftYaHei;
            font-size: 12px;
            line-height: 50px;
            letter-spacing: 0.5px;
            color: #333333;
            >span{
                margin-right: 10px;
                position: relative;
                letter-spacing: 0.5px;
                color: #ff4f41;
                font-family: MicrosoftYaHei;
                &:first-child{
                    color: #0acf97;
                }
            }
        }
    }
}
</style>
