<template>
    <div class="dashboard_0_12">
        <div class='box-head'>
            <h3 class="box-head-style0">营销诊断</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <div>
                    <h3>诊断内容</h3>
                    <div class="marketing-flex-zd">
                        <div>
                            <div class="body-zd1">
                                <div>
                                    <div class="marketing_circle-canvas">
                                       <canvas id="model_0_12-canvas1" width="160" height="160"></canvas>
                                    </div>
                                    <div class="marketing_circle-num">
                                        <countTo :startVal='0' :endVal='60' separator=',' ref="countTo"></countTo>
                                    </div>
                                    <div class="body-zd1-text">
                                        <p><span>亚健康</span></p>
                                        <div>环比：
                                        <span><img src="../../../../../static/img/marketing/01_1_icon04.png"></img> 14%</span>
                                        同比：
                                        <span><img src="../../../../../static/img/marketing/01_1_icon03.png"> 4%</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4>营销健康指数</h4>
                                    <div class="body-zd1-jdt">
                                        <div v-for="(item,index) in marketing_health">
                                            <span>{{item.name}}</span>
                                            <el-progress :stroke-width="7" :percentage="item.value" :show-text="false"/>
                                            <span>{{item.value}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <div class="body-zd2">
                                <div class="body-zd2-text" v-for="(item,index) in marketing_zd_arr" :key="index">
                                    <div>
                                      <img :src="'static/img/marketing/02_icon0' + (index + 1) + '.png'">
                                      <h5>{{item.name}}</h5>
                                    </div>
                                  <ul><li v-for="items in item.list">{{items.vaule}}</li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                   <canvas id="model_0_12-canvas2" width="160" height="160"></canvas>
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
            </div>
        </div>
    </div>
</template>

<script>
    //数字滚动
    import countTo from 'vue-count-to';
    import vChartsLinebar from '@/components/charts/chartslinebar';
    import bus from '@/components/common/bus';
    import Qs from 'qs';
    export default{
        components: {
            countTo,
            vChartsLinebar,
        },
        data() {
            return {
                marketing_health:[
                    {
                        name:'全国',
                        value:40
                    },{
                        name:'领克1区',
                        value:50
                    },{
                        name:'领克2区',
                        value:60
                    },{
                        name:'领克3区',
                        value:70
                    },{
                        name:'领克4区',
                        value:80
                    },{
                        name:'领克5区',
                        value:90
                    }
                ],
                marketing_zd_arr:[{
                    name:'诊断小结',
                    list:[{
                        vaule:"1、本周店内表现良好，与上周相比有明显提升。"
                    },{
                        vaule:"2、一区健康度优于全国平均，稍低于全国去年平均。"
                    },{
                        vaule:"3、客流量较高，但成交率稍低，营销转化率有提升空间。"
                    }]
                },{
                    name:'营销建议',
                    list:[{
                        vaule:"1、围绕新车上市，可选定某成熟商圈，进行地面活动推广，加强宣传。"
                    },{
                        vaule:"2、组织销售人员培训，提高车辆卖点熟悉度。"
                    },{
                        vaule:"3、适当更新门店宣传物料，重点优惠活动推荐。"
                    }]
                }],
                drive1_linebar:[
                    ['领克 01','领克 01PHEV','领克 02','领克 03','领克 03+'],
                    [15,45,15,10,35],[25,20,20,25,20],[15,20,10,15,20],
                    [15,20,15,10,30],[15,20,15,5,10],[155,185,115,152,148],
                    [118,150,100,120,135]
                ],
            }
        },
        mounted() {
            this.$nextTick(() => {
                let canvas1 = document.getElementById("model_0_12-canvas1");
                this.drawMain(canvas1, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                let canvas2 = document.getElementById("model_0_12-canvas2");
                this.drawMain(canvas2, 85, "#ff7b42", "#faf5f5", "#ff7b42");
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
.dashboard_0_12{
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
                &:nth-child(n+6):after{
                    top: 28px;
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
            top: -45px;
            >p{
                >span{
                    display: inline-block;
                    width: 60px;
                    height: 22px;
                    text-align: center;
                    line-height: 22px;
                    color: #fff;
                    background-image: linear-gradient(90deg, #f09819 0%, #ff8758 100%),
                    linear-gradient(#075d76, #075d76);
                    border-radius: 4px;
                    font-family: MicrosoftYaHei;
                    letter-spacing: 0.5px;
                    font-size: 12px;
                }
            }
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

        .marketing-flex-zd{
            display: flex;
            width: 100%;
            >div{
                width: 50%;
                &:first-child{
                    border-right: 1px solid #dee2e6;
                    padding-right: 30px;
                }
                &:last-child{
                    padding-left: 30px;
                }
                >div{
                    width: 100%;
                }
                .body-zd1{
                    display: flex;
                    >div:first-child{
                        width: 40%;
                        text-align: center;
                        position: relative;
                        margin-top: 20px;
                        .marketing_circle-num {
                            position: absolute;
                            top: 40px;
                            left: 50%;
                            transform: translateX(-50%);
                            span {
                                display: inline-block;
                                color: #333333;
                                font-size: 48px;
                                line-height: 72px;
                                letter-spacing: -1px;
                                font-family: "fjallaone";
                            }
                        }
                    }
                    >div:last-child{
                        width: 48%;
                        h4{
                            font-family: MicrosoftYaHei-Bold;
                            font-size: 12px;
                            text-align: center;
                            letter-spacing: 0.6px;
                            color: #333333;
                        }
                        .body-zd1-jdt{
                            margin-top: 20px;
                            // height: 61px;
                            >div{
                                width: 100%;
                                display: flex;
                                margin-bottom: 10px;
                                >span{
                                    display: inline-block;
                                    font-family: MicrosoftYaHei;
                                    font-size: 12px;
                                    &:first-child{
                                        width: 46px;
                                        text-align: right;
                                        color: #333333;
                                    }
                                    &:last-child{
                                        color: #ea4d4d;
                                    }
                                }
                                >div{
                                    width: 70%;
                                    margin: 0 4%;
                                    position: relative;
                                    top:5px;
                                }
                            }
                        }
                    }
                }
                .body-zd2{
                    .body-zd2-text{
                        display: flex;
                        margin-bottom: 20px;
                        color: #333333;
                        >div{
                            width: 60px;
                            min-width: 60px;
                            text-align: center;
                            font-family: MicrosoftYaHei-Bold;
                            font-size: 14px;
                            white-space: nowrap;
                            letter-spacing: 0.6px;
                        }
                        >ul{
                            padding: 20px;
                            height: 100px;
                            width: 93%;
                            background-color: #f6f6f6;
                            border-radius: 0px 20px 20px 20px;
                            >li{
                                width: 100%;
                                line-height: 20px;
                                letter-spacing: 0px;
                                font-size: 12px;
                            }
                        }
                    }
                    >div:last-child{
                        >ul{
                            background-color: #ffefee;
                        }
                    }
                }
                >p{
                    width: 100%;
                    height: 1px;
                    background: #dee2e6;
                    margin: 40px 0;
                }
            }
        }
    }
}
</style>
