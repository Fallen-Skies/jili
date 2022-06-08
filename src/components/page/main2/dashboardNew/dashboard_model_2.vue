<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <div class="model_time model_2_time">
                    <el-radio v-model="model_2_time" disabled label="week" border>近一周</el-radio>
                    <!-- <el-radio v-model="model_2_time" label="month" v-bind:disabled="model_2_disabled()" border>近一月</el-radio> -->
                    <el-radio v-model="model_2_time" disabled label="month" border>近一月</el-radio>
                    <el-date-picker v-model="model_2_time2time" type="daterange" range-separator="至" start-placeholder="" end-placeholder="">
                    </el-date-picker>
                </div>
                <h3 class="box-head-style0">营销诊断</h3>
            </div>
            <div class='box-body'>
                <el-row style="paddingTop:60px;">
                    <el-col :span="9">
                        <div class="card model2_2-card">
                            <div class="card-hd" style="marginTop:-40px;">诊断内容</div>
                            <div class="card-bd" style="paddingTop:24px;">
                                <div class="chart-box" :style="{height:'250px'}">
                                    <div class="model2_2_0">
                                        <div class="model2_2-tit">营销健康指数</div>
                                        <div class="model2_2_0_circle">
                                            <div class="model2_2_0_circle-num">
                                                <countTo :startVal='0' :endVal='60' separator=',' ref="countTo"></countTo>
                                            </div>
                                            <div class="model2_2_0_circle-name">亚健康</div>
                                            <div class="model2_2_0_circle-canvas">
                                                <canvas id="model2_2_0_circle-canvas" width="160" height="160"></canvas>
                                            </div>
                                            <div class="model2_2_0_circle-change">
                                                环比:<span :class="{green:14>0,grey:14<0}">{{14&lt;0?-14:14}}% </span>
                                                同比:<span :class="{green:-4>0,grey:-4<0}">{{-4&lt;0?-(-4):-4}}% </span>
                                            </div>
                                        </div>
                                        <ul class="model2_2_0_progress model-progress model-progress_1">
                                            <li v-for="(item,index) in model2_2_0_Arr" :key="index">
                                                <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                <div class="model-progress-num" :title=item.name>{{item.value}}</div>
                                                <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="false" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="card model2_2-card">
                            <div class="card-hd"></div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'250px'}">
                                    <div class="model2_2_1">
                                        <div class="model2_2-tit">媒体标签</div>
                                        <ul class="model2_2_1-list">
                                            <li :class="{'active':model2_2_1_Arr_active.indexOf(item)>-1}" v-for="(item,index) in model2_2_1_Arr" :key="index">{{item}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="card model2_2-card">
                            <div class="card-hd"></div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'250px'}">
                                    <div class="model2_2_2">
                                        <div class="model2_2_2-i">
                                            <img src="static/img/dashboard2/02_icon01.png" alt="">
                                        </div>
                                        <div class="model2_2_2-i">
                                            <img src="static/img/dashboard2/02_icon02.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="card model2_2-card">
                            <div class="card-hd">进店客流趋势</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'360px',paddingTop:'20px'}">
                                    <div class="model-nav-box model2_2_3-nav">
                                        <el-radio v-model="model_nav_0" label="总客流趋势" border>总客流趋势</el-radio>
                                        <el-radio v-model="model_nav_0" label="潜客趋势" border>潜客趋势</el-radio>
                                    </div>
                                    <vChartLineNewTwo :seriesArr="model2_2_3_Arr" :seriesName="['总客流趋势','高意向客流趋势']" />
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="card model2_2-card">
                            <div class="card-hd">近期成交趋势</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'360px',paddingTop:'20px'}">
                                    <vChartLineNew :seriesArr="model2_2_4_Arr" :seriesName="'本店成交趋势'" />
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import vChartLineNew from '@/components/chart/ChartLineNew';
    import vChartLineNewTwo from '@/components/chart/ChartLineNewTwo';

    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default {
        name: 'dashboard_model2_2',
        components: {
            vChartLineNew,
            vChartLineNewTwo,
            countTo
        },
        data() {
            return {
                model_2_time: 'week',
                model_2_time2time: ['2019-6-10', '2019-6-16'],
                model_nav_0: '总客流趋势',
                model2_2_0_Arr: [{
                    name: "本店",
                    value: 60
                },
                {
                    name: "区域",
                    value: 40
                },
                {
                    name: "全国",
                    value: 62
                }],
                model2_2_1_Arr: ["户外活动", "区域车展", "电视投放", "门店活动", "售后折扣", "新车上市"],
                model2_2_1_Arr_active: ["门店活动", "新车上市"],
                model2_2_3_Arr: [
                    [{
                        name: "6.03",
                        value: 148,
                        yoy: 4,
                        wow: -4
                    }, {
                        name: "6.04",
                        value: 162,
                        yoy: 3,
                        wow: 3
                    }, {
                        name: "6.05",
                        value: 86,
                        yoy: 5,
                        wow: -10
                    }, {
                        name: "6.06",
                        value: 105,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "6.07",
                        value: 137,
                        yoy: 3,
                        wow: -4
                    }, {
                        name: "6.08",
                        value: 156,
                        yoy: 4,
                        wow: 3
                    }, {
                        name: "6.09",
                        value: 132,
                        yoy: 6,
                        wow: -2
                    }],
                    [{
                        name: "6.03",
                        value: 128,
                        yoy: 2,
                        wow: -10
                    }, {
                        name: "6.04",
                        value: 142,
                        yoy: 3,
                        wow: -1
                    }, {
                        name: "6.05",
                        value: 76,
                        yoy: 4,
                        wow: 2
                    }, {
                        name: "6.06",
                        value: 98,
                        yoy: 6,
                        wow: -3
                    }, {
                        name: "6.07",
                        value: 117,
                        yoy: 2,
                        wow: 2
                    }, {
                        name: "6.08",
                        value: 146,
                        yoy: 4,
                        wow: -7
                    }, {
                        name: "6.09",
                        value: 120,
                        yoy: 6,
                        wow: -10
                    }]
                ],
                model2_2_4_Arr: [{
                    name: "6.03",
                    value: 148,
                    yoy: 2,
                    wow: 6
                }, {
                    name: "6.04",
                    value: 162,
                    yoy: 3,
                    wow: -3
                }, {
                    name: "6.05",
                    value: 86,
                    yoy: 4,
                    wow: 4
                }, {
                    name: "6.06",
                    value: 105,
                    yoy: 6,
                    wow: -11
                }, {
                    name: "6.07",
                    value: 137,
                    yoy: 5,
                    wow: -4
                }, {
                    name: "6.08",
                    value: 156,
                    yoy: 2,
                    wow: -8
                }, {
                    name: "6.09",
                    value: 132,
                    yoy: 2,
                    wow: -10
                }]
            }
        },
        computed: {

        },
        mounted() {
            this.loadData()

            this.$nextTick(() => {
                let canvas = document.getElementById("model2_2_0_circle-canvas");
                this.drawMain(canvas, 60, "#ff7b42", "#faf5f5", "#ff7b42");
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box-body {
        >.el-row {
            padding: 25px 0;
        }

        >.el-row+.el-row {
            border-top-width: 1px;
            border-top-style: solid;
            border-color: #e5e5e5;
        }

        >.el-row>.el-col+.el-col {
            border-left-width: 1px;
            border-left-style: solid;
            border-color: #e5e5e5;
        }

        .card {
            padding: 0 25px;
        }
    }

    .model2_2-tit {
        font-size: 14px;
        text-align: center;
    }

    .model2_2_0_circle {
        float: left;
        width: 40%;
        min-height: 1px;
    }

    .model2_2_0_progress {
        float: left;
        width: 60%;
        height: 200px;

        &.model-progress_1 .el-progress {
            margin-top: -4px;
        }
    }

    .model2_2_1 {
        text-align: center;

        .model2_2_1-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 300px;
            max-width: 100%;
            margin: 30px auto 0;

            >li {
                width: 140px;
                height: 34px;
                border-radius: 4px;
                margin-top: 20px;
                border: 1px solid #dde2ec;
                line-height: 32px;

                &.active {
                    color: #ffffff;
                    background-image: linear-gradient(90deg,
                            #eb4f4e 0%,
                            #fd6459 100%),
                        linear-gradient(#ffffff,
                            #ffffff);
                }
            }
        }
    }

    .model2_2_2 {
        width: 485px;
        max-width: 100%;
        margin: 0 auto;

        .model2_2_2-i {

            img {
                display: block;
                width: 100%;
            }

            &+.model2_2_2-i {
                margin-top: 20px;
            }

        }
    }

    .model2_2_3-nav {
        position: absolute;
        top: -20px;
        right: 0;
    }

    @media (max-width:1600px) {
        .model2_2_1 {
            .model2_2_1-list {
                max-width: 100%;

                >li {
                    width: 100px;
                }
            }
        }
    }

    @media (max-width:1400px) {
        .model2_2_1 {
            .model2_2_1-list {
                max-width: 100%;

                >li {
                    width: 100px;
                }
            }
        }
    }
</style>
<style lang="scss">
    .card .model-nav-box {
        display: flex;
        width: 200px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #dde2ec;

        .el-radio.is-bordered {
            flex: 1;
            width: 100px;
            height: 28px;
            margin: 0;
            padding: 0;
            border: none;
            color: #6d717b;
            line-height: 28px;
            text-align: center;
        }

        .el-radio.is-bordered.is-checked {
            background-color: #dde2ec;
        }

        .el-radio__input.is-checked+.el-radio__label {
            color: #495057 !important;
        }
    }

    .model2_2_0_circle {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 20px auto 0;

        .model2_2_0_circle-num {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            span {
                display: inline-block;
                font-weight: normal;
                color: #333333;
                font-size: 48px;
                font-family: "fjallaone";
                line-height: 72px;
                letter-spacing: -1px;
            }
        }

        .model2_2_0_circle-name {
            position: absolute;
            top: 115px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 22px;
            border-radius: 4px;
            background-image: linear-gradient(90deg,
                    #f09819 0%,
                    #ff8758 100%),
                linear-gradient(#075d76,
                    #075d76);
            color: #ffffff;
            line-height: 22px;
            text-align: center;
        }

        .model2_2_0_circle-canvas {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 160px;
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;

            canvas {
                width: 160px;
                height: 160px;
            }
        }

        .model2_2_0_circle-change {
            position: absolute;
            top: 150px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            text-align: center;

            .green,
            .grey {
                position: relative;
                margin: 0 3px;
                padding-left: 13px;
            }

            .green::after,
            .grey::after {
                content: "";
                position: absolute;
                top: 1px;
                left: 4px;
                width: 8px;
                height: 10px;
            }

            .green::after {
                background: url(~static/img/dashboard/01_1_icon04.png) no-repeat;
            }

            .grey::after {
                background: url(~static/img/dashboard/01_1_icon05.png) no-repeat;
            }
        }
    }
</style>
