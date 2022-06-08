<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <div class="model_time model_3_time">
                    <el-radio v-model="model_3_time" disabled label="week" border>近一周</el-radio>
                    <el-radio v-model="model_3_time" disabled label="month" border>近一月</el-radio>
                    <el-date-picker v-model="model_3_time2time" type="daterange" range-separator="至" start-placeholder="" end-placeholder="">
                    </el-date-picker>
                </div>
                <h3 class="box-head-style0">营销透视</h3>
            </div>
            <div class='box-body model_3'>
                <el-row>
                    <el-col :span="12">
                        <div class="card model_3-card">
                            <div class="card-hd">近一周客流人群分布（性别）</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="model2_3_0_Arr" :seriesName="'近一周客流人群分布（性别）'" :titleTxt="''" />
                                    <div class="chart-info chart-info-gender chart-info-gender2">
                                        <p class="chart-info-gender-man">男占比：<span>{{model2_3_0_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-gender-woman">女占比：<span>{{model2_3_0_Arr[1]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="card model_3-card">
                            <div class="card-hd">近一周客流人群分布（年龄段）</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="model2_3_1_Arr" :seriesName="'近一周客流人群分布（年龄段）'" :colorArr="model2_3_1_Color" :titleTxt="''" />
                                    <div class="chart-info chart-info-buy chart-info-buy2">
                                        <p class="chart-info-buy_0">18-24：<span>{{model2_3_1_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-buy_1">25-34：<span>{{model2_3_1_Arr[1]["value"]}}%</span></p>
                                        <p class="chart-info-buy_2">35-44：<span>{{model2_3_1_Arr[2]["value"]}}%</span></p>
                                        <p class="chart-info-buy_3">45-54：<span>{{model2_3_1_Arr[3]["value"]}}%</span></p>
                                        <p class="chart-info-buy_4">55+：<span>{{model2_3_1_Arr[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class='box-body model_3' style="marginTop:5px;">
                <el-row style="padding:15px 0 15px 10px;">
                    <el-col :span="24">
                        <div class="model_3_select_box">
                            <div class="model_3_select_tit">性别</div>
                            <el-select class="model_3_select" v-model="model2_3_2_select" @change="model_3_selectChange" placeholder="请选择" size="mini" id="model_3-select-btn">
                                <el-option v-for="item in model2_3_2_options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="model_3_select_box">
                            <div class="model_3_select_tit">年龄</div>
                            <el-select class="model_3_select" v-model="model2_3_3_select" @change="model_3_selectChange" placeholder="请选择" size="mini" id="model_3-select-btn">
                                <el-option v-for="item in model2_3_3_options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <el-button class="model_3_select_btn">查询</el-button>
                        <el-select clear="model_3-select" v-model="model_3_select" @change="model_3_selectChange" placeholder="请选择" size="mini" id="model_3-select-btn">
                            <el-option v-for="item in model_3_options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="card model_3-card">
                            <div class="card-hd">热门车型分析</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'240px'}">
                                    <div class="model-progress-two-tit">
                                        <div class="model-progress-two-tit_0">官方推荐</div>
                                        <div class="model-progress-two-tit_1"></div>
                                        <div class="model-progress-two-tit_2">用户洞察</div>
                                    </div>
                                    <ul class="model2_3_2_progress model-progress-two" style="height:200px;">
                                        <li v-for="(item,index) in model2_3_2_progress" :key="index">
                                            <div class="model-progress-two-num_0" :title=item.name>{{item.value[0]}}%</div>
                                            <el-progress class="model-progress-two-bar_0" :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" />
                                            <div class="model-progress-two-name" :title=item.name>{{item.name}}</div>
                                            <el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" />
                                            <div class="model-progress-two-num_1" :title=item.name>{{item.value[1]}}%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="card model_3-card">
                            <div class="card-hd">销售卖点分析</div>
                            <div class="card-bd">
                                <div class="chart-box" :style="{height:'240px'}">
                                    <div class="model-progress-two-tit">
                                        <div class="model-progress-two-tit_0">官方推荐</div>
                                        <div class="model-progress-two-tit_1">二级卖点</div>
                                        <div class="model-progress-two-tit_2">用户洞察</div>
                                    </div>
                                    <div class="chartsSwiper">
                                        <swiper :options="swiperOption" ref="mySwiper">
                                            <swiper-slide>
                                                <ul class="model2_3_2_progress model-progress-two" style="height:220px;paddingBottom:20px;">
                                                    <li v-for="(item,index) in model2_3_3_progress" :key="index">
                                                        <div class="model-progress-two-num_0" :title=item.name>{{item.value[0]}}%</div>
                                                        <el-progress class="model-progress-two-bar_0" :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" />
                                                        <div class="model-progress-two-name" :title=item.name>{{item.name}}</div>
                                                        <el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" />
                                                        <div class="model-progress-two-num_1" :title=item.name>{{item.value[1]}}%</div>
                                                    </li>
                                                </ul>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <ul class="model2_3_2_progress model-progress-two" style="height:220px;paddingBottom:20px;">
                                                    <li v-for="(item,index) in model2_3_3_progress" :key="index">
                                                        <div class="model-progress-two-num_0" :title=item.name>{{item.value[0]}}%</div>
                                                        <el-progress class="model-progress-two-bar_0" :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" />
                                                        <div class="model-progress-two-name" :title=item.name>{{item.name}}</div>
                                                        <el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" />
                                                        <div class="model-progress-two-num_1" :title=item.name>{{item.value[1]}}%</div>
                                                    </li>
                                                </ul>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <ul class="model2_3_2_progress model-progress-two" style="height:220px;paddingBottom:20px;">
                                                    <li v-for="(item,index) in model2_3_3_progress" :key="index">
                                                        <div class="model-progress-two-num_0" :title=item.name>{{item.value[0]}}%</div>
                                                        <el-progress class="model-progress-two-bar_0" :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" />
                                                        <div class="model-progress-two-name" :title=item.name>{{item.name}}</div>
                                                        <el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" />
                                                        <div class="model-progress-two-num_1" :title=item.name>{{item.value[1]}}%</div>
                                                    </li>
                                                </ul>
                                            </swiper-slide>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                        </swiper>
                                    </div>
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
    import vChartPie from '@/components/chart/ChartPie';

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default {
        name: 'dashboard_model_3',
        components: {
            vChartPie,
            swiper,
            swiperSlide
        },
        data() {
            return {
                model_3_time: 'week',
                model_3_time2time: ['2019-6-10', '2019-6-16'],
                model_3_gender: [{ name: "男", value: "64" }, { name: "女", value: 36 }],
                model2_3_0_Arr: [{
                    name: '男',
                    value: 64
                }, {
                    name: '女',
                    value: 36
                }],

                model2_3_1_Arr: [{
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

                model2_3_2_progress: [
                {
                    name: '领克01',
                    value: [30, 30]
                },
                {
                    name: '领克01PHEV',
                    value: [25, 25]
                },
                {
                    name: '领克02',
                    value: [20, 20]
                },
                {
                    name: '领克03',
                    value: [15, 15]
                },
                {
                    name: '领克03+',
                    value: [10, 10]
                }],

                model2_3_1_Color: ["#fab2bb", "#ff6074", "#de4155", "#707376", "#131313"],

                model_3_select: this.$store.state.modelSelectDefault,
                model_3_options: this.$store.state.modelSelectOptions,

                model2_3_2_select: '男',
                model2_3_2_options: [{
                    value: '男',
                    label: '男'
                }, {
                    value: '女',
                    label: '女'
                }],

                model2_3_3_select: '18-24',
                model2_3_3_options: [{
                    value: '18-24',
                    label: '18-24'
                }, {
                    value: '25-34',
                    label: '25-34'
                }, {
                    value: '35-44',
                    label: '35-44'
                }, {
                    value: '45-54',
                    label: '45-54'
                }, {
                    value: '55+',
                    label: '55+'
                }],

                model2_3_3_progress: [
                {
                    name: '外观设计',
                    value: [30, 30]
                },
                {
                    name: '内部空间',
                    value: [25, 25]
                },
                {
                    name: '安全科技',
                    value: [20, 20]
                },
                {
                    name: '智能互联',
                    value: [15, 15]
                },
                {
                    name: '电渠系统',
                    value: [10, 10]
                }],

                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        bulletElement: 'div',
                        bulletClass: 'charts-bullet',
                        bulletActiveClass: 'charts-bullet-active',
                        clickable: true,
                    },
                    //width: 550,
                    observer: true,
                    observeParents: true
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            loadData() {},
            model_3_selectChange() {}
        },
        mounted() {
            this.loadData()
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

    .chart-info-gender2 {
        top: 50%;
        left: 100%;
        margin-left: 0;
        margin-top: -20px;
    }


    .chart-info-buy {
        top: 50%;
        left: 100%;
        margin-left: 0;
        margin-top: -50px;

        p {

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
</style>
<style lang="scss">
    .model_3_select_box {
        display: inline-block;
        width: 160px;
        margin: 0 10px;

        .model_3_select_tit {
            float: left;
            width: 40px;
            font-size: 14px;
            line-height: 30px;
        }

        .model_3_select {
            width: calc(100% - 40px);
            height: 100%;

            .el-input--mini {
                font-size: 12px;
            }

            .el-input__inner {
                border-radius: 4px;
                border: 1px solid #dde2ec;
                background-color: #ffffff;
                height: 30px;
                line-height: 30px;
            }
        }
    }

    .model_3_select_btn {
        width: 80px;
        height: 30px;
        padding: 0;
        text-align: center;
        border-color: #f63c53;
        background-color: #f63c53;
        color: #ffffff;

        &:hover,
        &:focus {
            border-color: #f63c53;
            background-color: #f63c53;
            color: #ffffff;
        }
    }

    .model_3 .el-select[clear='model_3-select'] {
        float: right;
        margin-right: 15px;
    }

    .model2_3_2_progress {
        width: 600px;
        max-width: 100%;
        margin: 0 auto;
    }

    .model-progress-two-tit {
        width: 600px;
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 10px auto;
        line-height: 20px;
        text-align: center;

        .model-progress-two-tit_0,
        .model-progress-two-tit_2 {
            width: 40%;
            min-height: 1px;
        }

        .model-progress-two-tit_0 {
            padding-left: 5%;
        }

        .model-progress-two-tit_2 {
            padding-right: 5%;
        }

        .model-progress-two-tit_1 {
            width: 20%;
            min-height: 1px;
        }
    }

    .model2_3_2_progress {
        display: flex;
        flex-direction: column;
        height: 100%;

        >li {
            flex: 1;
            align-items: center;
            position: relative;
            display: flex;
            min-height: 20px;
            line-height: 20px;
        }

        .model-progress-two-num_0,
        .model-progress-two-num_1 {
            width: 6%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .model-progress-two-num_0 {
            text-align: left;
            padding-right: 5px;
        }

        .model-progress-two-num_1 {
            text-align: right;
            padding-left: 5px;
        }

        .model-progress-two-name {
            width: 20%;
            padding: 0 5px;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .model-progress-two-bar_0,
        .model-progress-two-bar_1 {
            width: 34%;
            padding: 0 5px;
        }

        .model-progress-two-bar_0 {
            transform: rotateY(180deg);

            .el-progress-bar__inner {
                background-image: linear-gradient(90deg,
                        #131313 0%,
                        #707376 100%),
                    linear-gradient(#f2f2f2,
                        #f2f2f2);
            }
        }
    }

    .chartsSwiper {
        width: 100%;
        max-width: 100%;

        .swiper-container-horizontal>.swiper-pagination-bullets {
            bottom: 0;
        }

        .charts-bullet {
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin: 0 3px;
            background-color: #d9d9d9;
        }

        .charts-bullet-active {
            width: 12px;
            border-radius: 3px;
            background-color: #ff6074;
        }
    }
</style>