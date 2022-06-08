<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class='box-head'>
                <h3 class="box-head-style0">上周4S店客流情况</h3>
            </div>
            <div class='box-body model_0'>
                <ul class="model2_0-list">
                    <li v-for="(item,index) in model_0_Arr" :key="index">
                        <div class="model_0-item-img">
                            <img :src="`static/img/dashboard2/01_1_icon0${index+1}.png`" alt="">
                        </div>
                        <div class="model_0-item-name">
                            {{item.name}}
                        </div>
                        <div class="model_0-item-txt">
                            <div class="model_0-item-num">
                                <countTo :startVal='startVal' :endVal='model_0_endVal[index]' separator=',' ref="countTo"></countTo>人次
                            </div>
                            <div class="model_0-item-change">
                                环比:<span :class="{green:item.wow>0,grey:item.wow<0}">{{item.wow&lt;0?-item.wow:item.wow}}% </span>
                                同比:<span :class="{green:item.yoy>0,grey:item.yoy<0}">{{item.yoy&lt;0?-item.yoy:item.yoy}}% </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="12">
            <div class='box-head'>
                <h3 class="box-head-style0">上周4S店成交情况</h3>
            </div>
            <div class='box-body model_0'>
                <ul class="model2_1-list">
                    <li v-for="(item,index) in model_1_Arr" :key="index">
                        <div class="model_0-item-img">
                            <img :src="`static/img/dashboard2/01_1_icon0${index+5}.png`" alt="">
                        </div>
                        <div class="model_0-item-name">
                            {{item.name}}
                            <span v-if="item.text">{{item.text}}</span>
                        </div>
                        <div class="model_0-item-txt">
                            <div class="model_0-item-num">
                                <countTo :startVal='startVal' :endVal='model_0_endVal[index]' separator=',' ref="countTo"></countTo>{{index===2?'%':'辆'}}
                            </div>
                            <div class="model_0-item-canvas" v-if="index===2">
                                <canvas id="model_0-canvas" width="160" height="160"></canvas>
                            </div>
                            <div class="model_0-item-change">
                                环比:<span :class="{green:item.wow>0,grey:item.wow<0}">{{item.wow&lt;0?-item.wow:item.wow}}% </span>
                                同比:<span :class="{green:item.yoy>0,grey:item.yoy<0}">{{item.yoy&lt;0?-item.yoy:item.yoy}}% </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';

    export default {
        name: 'dashboard_model_0_1',
        components: {
        countTo
        },
        data() {
            return {
                myChart: {},
                startVal: 0,
                endVal: 0,
                countToAuto: false,
                model_0_endVal: [0, 0, 0, 0],
                model_1_activeName: 'cz',
                model_0_Arr: [{
                    name: "总客流数",
                    value: 113,
                    yoy: -14,
                    wow: 4
                },
                {
                    name: "高意向客流数",
                    value: 78,
                    yoy: -14,
                    wow: 4
                },
                {
                    name: "新增潜客数",
                    value: 11,
                    yoy: -14,
                    wow: 4
                },
                {
                    name: "二次进店客户",
                    value: 54,
                    yoy: -14,
                    wow: 4
                }],

                model_1_Arr: [{
                    name: "本店成交数",
                    value: 11,
                    yoy: -14,
                    wow: 4
                },
                {
                    name: "全国成交数",
                    value: 54,
                    yoy: -14,
                    wow: 4
                },
                {
                    name: "成交率",
                    text: '成交率=成交量÷高意向客流数',
                    value: 60,
                    yoy: -14,
                    wow: 4
                }],

                model_2_Arr: [{
                    name: "上海",
                    icon: "sh",
                    value1: 36152,
                    value2: 21084,
                    value3: 15846,
                    value4: 10.86,
                    value5: 0.52
                },
                {
                    name: "北京",
                    icon: "bj",
                    value1: 24612,
                    value2: 17421,
                    value3: 10062,
                    value4: 11.2,
                    value5: 0.44
                },
                {
                    name: "广州",
                    icon: "gz",
                    value1: 23965,
                    value2: 12465,
                    value3: 9462,
                    value4: 9.84,
                    value5: 0.41
                }],

                model_3_Arr: [{
                    name: "上海",
                    icon: "sh",
                    value1: 29415,
                    value2: 21563,
                    value3: 10062,
                    value4: 9.42,
                    value5: 0.46
                },
                {
                    name: "北京",
                    icon: "bj",
                    value1: 25640,
                    value2: 18745,
                    value3: 9452,
                    value4: 10.1,
                    value5: 0.43
                },
                {
                    name: "广州",
                    icon: "gz",
                    value1: 21065,
                    value2: 16302,
                    value3: 7201,
                    value4: 8.62,
                    value5: 0.39
                }],
            }

        },
        computed: {},
        mounted() {
            //开始动画调整页面
            setTimeout(() => {
                this.model_0_endVal.forEach((item, index, arr) => {
                    this.$set(arr, index, this.model_0_Arr[index]["value"]);
                })
            }, 500)

            this.$nextTick(() => {
                let canvas = document.getElementById("model_0-canvas");
                this.drawMain(canvas, 11, "#fff", "rgba(255,255,255,0.4)", "#fff");
            })
        },
        methods: {
            model_1_handleClick(tab, event) {},
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
                var rad = Math.PI * 2 * (200 / 360) / 100;
                var speed = 0;

                // 绘制背景圆圈
                function backgroundCircle() {
                    context.save();
                    context.beginPath();
                    context.lineWidth = 10; //设置线宽
                    var radius = center_x - context.lineWidth;
                    context.lineCap = "round";
                    context.strokeStyle = bgcolor;
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-190), Math.PI / 180 * (10), false); //开始角度 结束角度
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制运动圆环
                function foregroundCircle(n) {
                    context.save();
                    context.strokeStyle = forecolor;
                    context.lineWidth = 10;
                    context.lineCap = "round";
                    var radius = center_x - context.lineWidth;
                    context.beginPath();
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-190), Math.PI / 180 * (-190) + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
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
    .model2_0-list,
    .model2_1-list {
        >li {
            position: relative;
            height: 130px;
            background-size: 100% 100%;
            color: #ffffff;

            &:nth-of-type(1) {
                background-image: url(~static/img/dashboard2/01_1_bg01.png);
            }

            &:nth-of-type(2) {
                background-image: url(~static/img/dashboard2/01_1_bg02.png);
            }

            &:nth-of-type(3) {
                background-image: url(~static/img/dashboard2/01_1_bg03.png);
            }

            &:nth-of-type(4) {
                background-image: url(~static/img/dashboard2/01_1_bg04.png);
            }
        }

        .model_0-item-img {
            position: absolute;
            top: 32px;
            left: 36px;
        }

        .model_0-item-name {
            position: absolute;
            top: 50px;
            left: 120px;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
            font-weight: 700;
        }

        .model_0-item-num {
            position: absolute;
            top: 24px;
            right: 50px;
            font-size: 14px;

            span {
                font-size: 50px;
                line-height: 72px;
                letter-spacing: -1px;
            }
        }

        .model_0-item-change {
            position: absolute;
            bottom: 24px;
            right: 42px;

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

    .model2_1-list {
        >li {
            height: 173px;
            color: #333333;

            &:nth-of-type(1) {
                background-image: url(~static/img/dashboard2/01_1_bg05.png);
            }

            &:nth-of-type(2) {
                background-image: url(~static/img/dashboard2/01_1_bg06.png);
            }

            &:nth-of-type(3) {
                color: #ffffff;
                background-image: url(~static/img/dashboard2/01_1_bg07.png);
            }
        }

        .model_0-item-img {
            top: 47px;
        }

        .model_0-item-name {
            top: 65px;

            span {
                display: block;
                color: #ffb5af;
                font-size: 14px;
                font-weight: 400;
            }
        }

        .model_0-item-num {
            position: absolute;
            top: 48px;
            right: 100px;

            span {
                font-size: 60px;
            }
        }

        .model_0-item-change {
            bottom: 36px;
            right: 72px;
        }

    }

    .model_0-item-canvas {
        position: absolute;
        width: 160px;
        height: 160px;
        top: 20px;
        right: 64px;
        display: flex;
        justify-content: center;
        align-items: center;

        canvas {
            width: 160px;
            height: 160px;
        }
    }
</style>
