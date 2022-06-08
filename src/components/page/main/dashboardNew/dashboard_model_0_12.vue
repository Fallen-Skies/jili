<template>
    <div class="dashboard_New_012">
        <div class='box-head'>
            <h3 class="box-head-style0">车型试驾分析</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <div>
                    <el-row class="drive1-row">
                        <el-col :span="7" >
                            <h3 class="body-margin-bottom">试驾达标指数</h3>
                            <div class="middle-text-center drive1-body">
                                <div>
                                   <canvas id="model_0_12-canvas3" width="160" height="160"></canvas>
                                </div>
                                <div class="drive1_circle-num">
                                    <countTo :startVal='0' :endVal='85' separator=',' ref="countTo"></countTo>{{'分'}}
                                </div>
                                <div class="body-zd1-text" style="margin-top: 22px;">
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
                                <vChartsLinebarNew :seriesArr="drive1_linebar" :seriesName="['试驾数','试驾满意度','试驾参与率']" />
                            </div>
                            <div class="chart-bar-span chart-linebar-bottom">
                                <span>试驾数</span>
                                <span>试驾满意度</span>
                                <span>试驾参与率</span>
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
    import vChartsLinebarNew from '@/components/charts/chartslinebarNew';
    import bus from '@/components/common/bus';
    import Qs from 'qs';
    export default{
        components: {
            countTo,
            vChartsLinebarNew,
        },
        data() {
            return {
                drive1_linebar:[
                    ['领克 01','领克 01PHEV','领克 02','领克 03','领克 03+'],
                    [85,125,80,65,115],
                    [155,185,115,152,148],
                    [118,150,100,120,135]
                ],
            }
        },
        mounted() {
            this.$nextTick(() => {
                let canvas1 = document.getElementById("model_0_12-canvas3");
                this.drawMain(canvas1, 85, "#ff7b42", "#faf5f5", "#ff7b42");
            })
        },
        methods: {
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
        }
    }
</script>

<style lang="scss">
.dashboard_New_012{
    .body-middle{
        border-radius: 0;
        margin: 32px 0px 0px;
        padding-bottom:0px;
        background: #fff;
        position: relative;
        .body-middle-chart{
            >div:last-child{
                padding-bottom: 30px;
            }
            h3{
                font-size: 12px;
            }
        }
        .chart-linebar-bottom{
            >span{
                font-size:12px;
                &:after{
                    top: 23px;
                }
                &:nth-child(n+2):after{
                    top: 28px;
                    width: 20px;
                    left: -8px;
                    height: 3px;
                }
                &:nth-child(1):after{
                	background-color:#ffb2b2;
                }
                &:nth-child(2):after{
                	background-color:#ea4d4d;
                }
                &:nth-child(3):after{
                	background-color:#111111;
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
}
</style>
