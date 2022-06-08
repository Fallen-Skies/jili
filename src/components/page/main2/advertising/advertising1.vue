<template>
    <div class="advertising1">
        <div class="header-nav"><span>广告投放监测</span> <i class="el-icon-arrow-right"></i>  <span>新媒体投放监测</span></div>
        <el-row>
        	<el-col :span="12">
                <div class='box-head box-head-margin'>
                    <h3 class="box-head-style0">广告统计</h3>
                </div>
                 <div>
                    <el-row>
                        <el-col :span="12">
                            <div class='box-body model_0'>
                                <ul class="model_0-list advertising1-list1" style="padding:0 5px;">
                                    <li v-for="(item,index) in advertising1_head_Arr1" :key="index">
                                        <div class="model_0-item-img">
                                            <img :src="'static/img/advertising/06_icon0' + item.icon + '.png'" alt="">
                                        </div>
                                        <div class="model_0-item-name">{{item.name}}</div>
                                        <div class="model_0-item-txt">
                                            <div class="model_0-item-num">
                                                <countTo :startVal='startVal' :endVal='advertising1_endVal1[index]' separator='' ref="countTo"></countTo>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class='box-body model_0'>
                                <ul class="model_0-list advertising1-list1" style="padding:0 5px;">
                                    <li v-for="(item,index) in advertising1_head_Arr2" :key="index">
                                        <div class="model_0-item-img">
                                            <img :src="'static/img/advertising/06_icon0' + item.icon + '.png'" alt="">
                                        </div>
                                        <div class="model_0-item-name">{{item.name}}</div>
                                        <div class="model_0-item-txt">
                                            <div class="model_0-item-num">
                                                <countTo :startVal='startVal' :endVal='advertising1_endVal2[index]' separator='' ref="countTo"></countTo>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </div>
        	</el-col>
        	<el-col :span="12">
                <div class='box-head box-head-margin'>
                    <h3 class="box-head-style0">广告诊断
                    <div class="model_time model_2_time">
                        <el-radio v-model="model_2_time" disabled label="week" border>近一周</el-radio>
                        <!-- <el-radio v-model="model_2_time" label="month" v-bind:disabled="model_2_disabled()" border>近一月</el-radio> -->
                        <el-radio v-model="model_2_time" disabled label="month" border>近一月</el-radio>
                        <el-date-picker v-model="model_2_time2time" type="daterange" range-separator="至" start-placeholder="" end-placeholder="">
                        </el-date-picker>
                    </div>
                    </h3>
                </div>
                <div class='box-body model_0'>
                    <ul class="model_0-list advertising1-list2" style="padding:0 5px;">
                        <li v-for="(item,index) in advertising1_head_Arr3" :key="index">
                            <div class="model_0-item-img">
                                <img :src="'static/img/advertising/06_icon0' + item.icon + '.png'" alt="">
                            </div>
                            <div class="model_0-item-name">{{item.name}}</div>
                            <div class="model_0-item-txt">
                                <div class="model_0-item-num">
                                    <countTo :startVal='startVal' :endVal='advertising1_endVal3[index]' separator='' ref="countTo"></countTo>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        	</el-col>
        </el-row>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">近期广告点击趋势</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-chart">
                <el-row>
                    <el-col :span="12" class="body-padding-right boder-right">
                        <h3 class="body-margin-bottom">近期趋势</h3>
                        <div class="advertising1-select chart-line-span">
                            <span>
                                <el-select v-model="djl_value" placeholder="请选择">
                                	<el-option v-for="item in djl_options" :key="item.djl_value" :label="item.label" :value="item.djl_value"></el-option>
                                </el-select>
                            </span>
                            <span>
                                <el-select v-model="djl2_value" placeholder="请选择">
                                	<el-option v-for="item in djl2_options" :key="item.djl2_value" :label="item.label" :value="item.djl2_value"></el-option>
                                </el-select>
                            </span>
                        </div>
                        <div :style="{height:'340px'}">
                             <vChartslineNewTwo :seriesArr="advertising1_jq_Arr" :seriesName="['点击率','点击量']"/>
                        </div>
                    </el-col>
                    <el-col :span="12" class="body-padding-left">
                        <h3 class="body-margin-bottom">趋势报表
                            <div>
                                <span>
                                    <i class="el-icon-download"></i>
                                    下载报表
                                </span>
                            </div>
                            <div>
                                <el-radio-group v-model="advertising1_radio">
                                  <el-radio-button label="全部"></el-radio-button>
                                  <el-radio-button label="APP"></el-radio-button>
                                  <el-radio-button label="H5"></el-radio-button>
                                </el-radio-group>
                            </div>
                        </h3>
                        <div class="advertising1-body">
                            <el-row class="middle-text-center body-head">
                                <el-col :span="4">车系</el-col>
                                <el-col :span="4">广告名称</el-col>
                                <el-col :span="4">广告类型</el-col>
                                <el-col :span="4">曝光量</el-col>
                                <el-col :span="4">点击量</el-col>
                                <el-col :span="4">曝光率</el-col>
                            </el-row>
                            <el-row class="middle-text-center body-foot" v-for="(item,index) in advertising1_chexing" :key="index">
                                <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                                <el-col :span="4" :title='item.brand'>{{item.brand}}</el-col>
                                <el-col :span="4" :title='item.color'>{{item.color}}</el-col>
                                <el-col :span="4" :title='item.price'>{{item.price}}</el-col>
                                <el-col :span="4" :title='item.value'>{{item.value}}</el-col>
                                <el-col :span="4" :title="item.rate+'%'">{{item.rate}}%</el-col>
                            </el-row>
                            <div class="table_paging">
                                <div class="table-prev">上一页</div>
                                <span>1</span><span>2</span>
                                <div class="table-next">下一页</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">人群分析</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <el-radio-group v-model="advertising1_radio2">
                  <el-radio-button label="曝光量"></el-radio-button>
                  <el-radio-button label="点击量"></el-radio-button>
                  <el-radio-button label="点击率"></el-radio-button>
                  <el-radio-button label="留资数"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <!-- <el-col :span="11" class="body-padding-right boder-right">
                            <h3>省级地域分布TOP5</h3>
                            <el-row style="position: relative;margin-left: -48px;">
                                <el-col :span="17" class="vChartsMap">
                                    <vChartsMap ></vChartsMap>
                                </el-col>
                                <el-col :span="7">
                                    <div class="map-body">
                                        <div v-for="(item,index) in advertising1_map" :key="index">
                                            <img :src="'static/img/dashboard/02_1_cion0' + (index + 1) + '.png'">
                                            <span>{{item.name}}</span>
                                            <div>{{item.value}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col> -->
                        <el-col :span="12" class="body-padding-left boder-right">
                            <h3 class="media-margin-bottom">人群分布 (性别)</h3>
                            <el-col :span="14" style="height: 260px;">
                                <vChartPie :seriesArr="advertising1_sex_Arr" :seriesName="'人群分布（性别）'" :titleTxt="''" />
                            </el-col>
                            <el-col :span="10">
                                <div class="advertising1_pie_sex advertising1_pie">
                                    <p>男占比：<span>{{advertising1_sex_Arr[0]["value"]}}%</span></p>
                                    <p>女占比：<span>{{advertising1_sex_Arr[1]["value"]}}%</span></p>
                                </div>
                            </el-col>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="media-margin-bottom">人群分布 (年龄段)</h3>
                            <el-row>
                                <el-col :span="14" style="height: 260px;">
                                    <vChartPie :seriesArr="advertising1_age_Arr" :seriesName="'人群分布（年龄段）'" :colorArr="advertising1_age_Color" :titleTxt="''" />
                                </el-col>
                                <el-col :span="10">
                                    <div class="advertising1_pie_age advertising1_pie">
                                        <p>18~24：<span>{{advertising1_age_Arr[0]["value"]}}%</span></p>
                                        <p>25~34：<span>{{advertising1_age_Arr[1]["value"]}}%</span></p>
                                        <p>35~44：<span>{{advertising1_age_Arr[2]["value"]}}%</span></p>
                                        <p>45~54：<span>{{advertising1_age_Arr[3]["value"]}}%</span></p>
                                        <p>55+：<span>{{advertising1_age_Arr[4]["value"]}}%</span></p>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
                <div style="border-top: 10px solid #f2f4f8;">
                    <h3 class="body-margin-bottom">广告分析
                        <div>
                            <span>
                                <i class="el-icon-download"></i>
                                下载报表
                            </span>
                        </div>
                        <div>
                            <el-radio-group v-model="advertising1_radio3" class="radio3">
                              <el-radio-button label="省级地域分布"></el-radio-button>
                              <el-radio-button label="市级地域分布"></el-radio-button>
                              <el-radio-button label="性别分布"></el-radio-button>
                              <el-radio-button label="年龄分布"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </h3>
                    <div class="advertising1-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="4">地域</el-col>
                            <el-col :span="4">车系</el-col>
                            <el-col :span="4">广告名称</el-col>
                            <el-col :span="4">曝光量</el-col>
                            <el-col :span="4">点击量</el-col>
                            <el-col :span="4">点击率</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in advertising1_guanggao" :key="index">
                            <el-col :span="4" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="4" :title='item.brand'>{{item.brand}}</el-col>
                            <el-col :span="4" :title='item.color'>{{item.color}}</el-col>
                            <el-col :span="4" :title='item.price'>{{item.price}}</el-col>
                            <el-col :span="4" :title='item.value'>{{item.value}}</el-col>
                            <el-col :span="4" :title="item.rate+'%'">{{item.rate}}%</el-col>
                        </el-row>
                        <div class="table_paging">
                            <div class="table-prev">上一页</div>
                            <span>1</span><span>2</span>
                            <div class="table-next">下一页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //数字滚动
    import countTo from 'vue-count-to';

    import vChartslineNewTwo from '@/components/charts/chartslineNewTwo';
    import vChartsMap from '@/components/charts/chartsmap';
    import vChartPie from '@/components/chart/ChartPie';

    import bus from '@/components/common/bus';

    export default{
        components: {
        	countTo,
            vChartslineNewTwo,
            vChartsMap,
            vChartPie
        },
        data(){
            return{
                model_2_time: 'week',
                model_2_time2time: ['2019-6-03', '2019-6-09'],
                advertising1_radio: '全部',
                advertising1_radio2: '曝光量',
                advertising1_radio3: '省级地域分布',

                djl_options: [{
                   djl_value: '选项1',
                   label: '点击率'
                }],
                djl_value:'选项1',

                djl2_options: [{
                   djl2_value: '选项1',
                   label: '点击量'
                }],
                djl2_value:'选项1',


                startVal: 0,
                endVal: 0,
                countToAuto: false,
                advertising1_endVal1: [0, 0],
                advertising1_endVal2: [0, 0],
                advertising1_endVal3: [0, 0],
                advertising1_head_Arr1: [{
                    icon: '1',
                    name: "投放中",
                    value: 21
                },
                {
                    icon: '3',
                    name: "已结束",
                    value: 11
                }],
                advertising1_head_Arr2: [{
                    icon: '2',
                    name: "今日更新",
                    value: 3
                },
                {
                    icon: '4',
                    name: "有效广告",
                    value: 20
                }],
                advertising1_head_Arr3: [{
                    icon: '5',
                    name: "曝光异常",
                    value: 1
                },
                {
                    icon: '6',
                    name: "点击异常",
                    value: 0
                }],
                advertising1_jq_Arr: [
                    [{
                        name: "6.03",
                        value: 140,
                        yoy: 4,
                        wow: -4
                    }, {
                        name: "6.04",
                        value: 162,
                        yoy: 3,
                        wow: 3
                    }, {
                        name: "6.05",
                        value: 80,
                        yoy: 5,
                        wow: -10
                    }, {
                        name: "6.06",
                        value: 110,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "6.07",
                        value: 140,
                        yoy: 6,
                        wow: 2
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
                        value: 115,
                        yoy: 2,
                        wow: -10
                    }, {
                        name: "6.04",
                        value: 142,
                        yoy: 3,
                        wow: -1
                    }, {
                        name: "6.05",
                        value: 66,
                        yoy: 4,
                        wow: 2
                    }, {
                        name: "6.06",
                        value: 83,
                        yoy: 6,
                        wow: -3
                    }, {
                        name: "6.07",
                        value: 118,
                        yoy: 6,
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
                advertising1_chexing: [
                    {
                        name:'领克01',
                        brand:'诚意01',
                        color:'APP',
                        price:163,
                        value:142,
                        rate:87.1
                    },{
                        name:'领克01',
                        brand:'01焕新上市',
                        color:'APP',
                        price:130,
                        value:74,
                        rate:74.3
                    },{
                        name:'领克01',
                        brand:'驾控体验营',
                        color:'H5',
                        price:98,
                        value:60,
                        rate:60.9
                    },{
                        name:'领克03',
                        brand:'性能梦想',
                        color:'H5',
                        price:164,
                        value:90,
                        rate:90.1
                    },{
                        name:'领克02',
                        brand:'02高能上市',
                        color:'APP',
                        price:146,
                        value:73,
                        rate:73.4
                    }
                ],
                advertising1_map: [
                    {
                        name:'上海',
                        value:'260'
                    },{
                        name:'北京',
                        value:'224'
                    },{
                        name:'广州',
                        value:'216'
                    },{
                        name:'厦门',
                        value:'198'
                    },{
                        name:'深圳',
                        value:'186'
                    }
                ],
                advertising1_age_Color: ["#fc8493", "#ff6074", "#de4155", "#707376", "#131313"],
                advertising1_sex_Arr: [{
                    name: '男',
                    value: 64
                }, {
                    name: '女',
                    value: 36
                }],

                advertising1_age_Arr: [{
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
                advertising1_guanggao: [
                    {
                        name:'北京',
                        brand:'领克01',
                        color:'诚意01',
                        price:163,
                        value:142,
                        rate:87.1
                    },{
                        name:'北京',
                        brand:'领克01',
                        color:'01焕新上市',
                        price:130,
                        value:74,
                        rate:74.3
                    },{
                        name:'北京',
                        brand:'领克03',
                        color:'驾控体验营',
                        price:98,
                        value:60,
                        rate:60.9
                    },{
                        name:'北京',
                        brand:'领克03',
                        color:'性能梦想',
                        price:164,
                        value:90,
                        rate:90.1
                    },{
                        name:'北京',
                        brand:'领克02',
                        color:'02高能上市',
                        price:146,
                        value:73,
                        rate:73.4
                    }
                ],
            }
        },
        methods: {},
        computed: {},
        mounted() {
            //开始动画调整页面
            setTimeout(() => {
                this.advertising1_endVal1.forEach((item, index, arr) => {
                    this.$set(arr, index, this.advertising1_head_Arr1[index]["value"]);
                });
                this.advertising1_endVal2.forEach((item, index, arr) => {
                    this.$set(arr, index, this.advertising1_head_Arr2[index]["value"]);
                })
                this.advertising1_endVal3.forEach((item, index, arr) => {
                    this.$set(arr, index, this.advertising1_head_Arr3[index]["value"]);
                })
            }, 500)
        },
    }
</script>

<style lang="scss" scoped>
    .advertising1{
        .model_0-list{
        	color: #ffffff;
        	>li{
        	    position: relative;
        	    height: 120px;
        	    background-size: 100% 100%;
        	}
        	.model_0-item-img{
        		position: absolute;
        		top: 27px;
        		left: 30px;
        	}
        	.model_0-item-name{
        		position: absolute;
        		top: 45px;
        		left: 110px;
                font-weight: 600;
        		font-family: MicrosoftYaHei-Bold;
        		font-size: 18px;
        		line-height: 24px;
        		letter-spacing: 0.8px;
        	}
        	.model_0-item-num{
        		position: absolute;
        		top: 24px;
                right: 10%;
        		// right: 30px;
        		font-size: 16px;
        		span{
        			font-size: 40px;
        			line-height: 72px;
        			letter-spacing: -1px;
        		}
        	}
        }
        .advertising1-list1{
            >li{
                &:nth-of-type(1) {
                    background-image: url(~static/img/advertising/06_bg01.png);
                }

                &:nth-of-type(2) {
                    background-image: url(~static/img/advertising/06_bg01.png);
                }
            }
        }
        .advertising1-list2{
            >li{
                &:nth-of-type(1) {
                    background-image: url(~static/img/advertising/06_bg02.png);
                }

                &:nth-of-type(2) {
                    background-image: url(~static/img/advertising/06_bg02.png);
                }
            }
            .model_0-item-img{
            	left: 37px;
            }
            .model_0-item-name{
            	left: 121px;
            	font-size: 20px;
            	letter-spacing: 1px;
            }
        }
        .advertising1-select{
            // display: flex;
            text-align: center;
            >span{
                margin: 0 20px 20px;;
                display: inline-block;
                .el-select{
                    border: 0px !important;
                    width: 90px;
                    height: 30px;
                    border-radius: 4px;
                    border: solid 1px #dde2ec;
                    position: relative;
                    top:-5px;
                    color: #333333;
                    .el-input__inner{
                       height: 30px;
                       line-height: 30px;
                    }
                }
                &:nth-child(1):after{
                    background-color:#ea4d4d;
                }
                &:nth-child(2):after{
                    background-color:#111111;
                }
            }
        }
        .advertising1-body{
            padding-top: 15px;
            .el-col{
                line-height: 50px;
                height: 50px;
            }
            .body-head{
                background-color: #f2f4f8;
                font-size: 12px;
                font-family: MicrosoftYaHei-Bold;
                color: #333333;
                font-weight: 700;
            }
            .body-foot{
                font-family: MicrosoftYaHei;
                font-size: 12px;
                color: #333333;
                .el-col{
                    background-color: #ffffff;
                    box-shadow: inset 0px -1px 0px 0px #f2f4f8;
                    >img{
                        position: relative;
                        top:4px;
                    }
                }
            }
        }
        .el-row{
            display: flex;
        }
        .vChartsMap{
            height: 340px;
        }
        .map-body{
            width: 100%;
            height: 245px;
            margin-top: 50px;
            margin-left: -5px;
            padding: 10px 20px;
            border-radius: 4px;
            background: #f2f4f8;
            >div{
                line-height: 45px;
                height: 45px;
                font-size: 14px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: 700;
                >img{
                    position: relative;
                    top: 3px;
                }
                >span{
                    margin-left: 15px;
                }
                >div{
                    float: right;
                    color: #ea4d4d;
                }
            }
        }
        .media-margin-bottom{
            margin-bottom: 40px;
        }
        .advertising1_pie{
            position: relative;
            color: #333333;
            left: 5px;
        	>p{
                span{
                	width: 35px;
                	float: right;
                }
        		font-family: MicrosoftYaHei-Bold;
                height: 25px;
                line-height: 25px;
        		font-size: 14px;
        		font-weight:700;
        		padding-left: 20px;
        		position: relative;
        		&:after{
        			content: "";
        			position: absolute;
        			top: 7px;
                    left: 0;
        			width: 12px;
        			height: 12px;
        		}
        	}
        }
        .advertising1_pie_age{
        	top: 50%;
            margin-top: -60px;
        	p{
                width: 130px;
        		&:nth-child(1):after{
        			background-color: #f74156;
        		}
        		&:nth-child(2):after{
        			background-color: #ff6666;
        		}
        		&:nth-child(3):after{
        			background-color: #ff8c8c;
        		}
        		&:nth-child(4):after{
        			background-color: #ffb2b2;
        		}
        		&:nth-child(5):after{
        			background-color: #ffcccc;
        		}
        	}
        }
        .advertising1_pie_sex{
            top: 105px;;
            p{
                width: 130px;
            	&:nth-child(1):after{
            		background-color: #1ed2aa;
            	}
            	&:nth-child(2):after{
            		background-color: #ff6074;
            	}
            }
        }
        @media(max-width:1400px) {
            .vChartsMap{
                height: 300px;
            }
            .map-body{
                height: 220px;
                margin-top: 40px;
                >div{
                    line-height: 40px;
                    height: 40px;
                    >img{
                        position: relative;
                        top: 4px;
                    }
                    >span{
                        margin-left: 6px;
                    }
                    >div{
                        float: right;
                        color: #ea4d4d;
                    }
                }
            }
            .media-margin-bottom{
                margin-bottom: 18px;
            }
            .advertising1_pie{
                left: -10px;
                >p{
                    height: 20px;
                    line-height: 20px;
                	&:after{
                		top: 4px;
                	}
                }
            }
            .advertising1_pie_sex{
                top: 110px;;
                >p{
                    width: 115px;
                }
            }
            .advertising1_pie_age{
                margin-top: -50px;
            }
        }
    }
</style>
<style lang="scss">
.advertising1{
    .body-middle{
        padding-bottom: 0px;
        .body-middle-chart{
            >div:last-child {
                padding-bottom: 30px;
                margin-bottom: 20px;
            }
            h3{
                width: 100%;
                >div{
                    float: right;
                    position: relative;
                    top:-6px;
                    margin-left: 20px;
                    .el-radio-group{
                        border-radius: 4px;
                        .el-radio-button__inner{
                            line-height: 10px;
                            height: 30px;
                            background-color: #ffffff;
                            font-family: MicrosoftYaHei;
                            letter-spacing: 0.2px;
                            color: #6d717b;
                        }
                    }
                    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
                        color: #495057;
                        background-color: #dde2ec;
                        border-color: #dde2ec;
                        box-shadow: -1px 0 0 0 #dde2ec;
                    }

                    >span{
                        width: 100px;
                        height: 30px;
                        background-color: #f63c53;
                        border-radius: 3px;
                        display: inline-block;
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        font-weight: normal;
                        letter-spacing: 0px;
                        color: #ffffff;
                        line-height: 30px;
                        text-align: center;
                        >i{
                            font-family: FontAwesome;
                            position: relative;
                            top: 1px;
                        }
                    }
                }
                .radio3{
                    .el-radio-button__inner{
                        width:100px;
                    }
                }
            }
        }

    }
}
</style>
