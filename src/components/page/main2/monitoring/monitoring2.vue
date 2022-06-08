<template>
    <div class="monitoring2">
        <div class="header-nav"><span>报价监测分析</span> <i class="el-icon-arrow-right"></i>  <span>经销商车型报价分析</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>车型报价分析</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
            	<span>区域</span>
            	<el-select v-model="qyvalue" placeholder="请选择">
            		<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.label" :value="item.qyvalue"></el-option>
            	</el-select>
                <span class="span-left">MAC</span>
                <el-select v-model="macvalue" placeholder="请选择">
                	<el-option v-for="item in macoptions" :key="item.macvalue" :label="item.label" :value="item.macvalue"></el-option>
                </el-select>
                <span class="span-left">车型</span>
                <el-select v-model="lkcx_value" placeholder="请选择">
                	<el-option v-for="item in lkcx_options" :key="item.lkcx_value" :label="item.label" :value="item.lkcx_value"></el-option>
                </el-select>
                <span></span>
                <el-select v-model="kind_value" placeholder="请选择">
                	<el-option v-for="item in kind_options" :key="item.kind_value" :label="item.label" :value="item.kind_value"></el-option>
                </el-select>
            	<span class="span-left">时间</span>
            	<el-radio-group v-model="monitoring2_radio">
            	  <el-radio-button label="按日"></el-radio-button>
            	  <el-radio-button label="按月"></el-radio-button>
            	  <el-radio-button label="按年"></el-radio-button>
            	</el-radio-group>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="body-padding-right boder-right" :style="{height:'420px'}">
                            <h3 class="body-margin-bottom">近期车型报价概况</h3>
                            <div class="body-padding-top" :style="{height:'292px'}">
                                <vChartBar :seriesArr="monitoring2_chexi" :seriesName="'近期车型报价概况'" ></vChartBar>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3 class="body-margin-bottom">报价单明细</h3>
                            <div class="chartsSwiper">
                                <swiper :options="swiperOption" ref="mySwiper">
                                    <swiper-slide v-for="(items,i) in swiperfor" :key="i">
                                        <el-row>
                                            <el-col :span="12" style="padding-right: 5px;">
                                                <div class="monitoring2-body" >
                                                    <el-row v-for="(item,index) in monitoring2_offer_Arr1" :key="index">
                                                        <el-col :span="6">{{item.name}}：</el-col>
                                                        <el-col :span="18">{{item.value}}</el-col>
                                                    </el-row>
                                                </div>
                                            </el-col>
                                            <el-col :span="12" style="padding-left: 5px;">
                                                <div class="monitoring2-body" style="padding: 52px 20px;;">
                                                    <el-row v-for="(item,index) in monitoring2_offer_Arr2" :key="index">
                                                        <el-col :span="6">{{item.name}}：</el-col>
                                                        <el-col :span="18">{{item.value}}</el-col>
                                                    </el-row>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </swiper-slide>
                                    <div class="swiper-pagination" slot="pagination"></div>
                                </swiper>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <h3>近期车型价格趋势</h3>
                    <div>
                        <vChartsLinesTwo :seriesArr="monitoring2_qushi"  :seriesName="['平均报价','实际成交价']" style="height: 300px;"></vChartsLinesTwo>
                        <div class="chart-line-span chart-linesTwo-bottom">
                        	<span>平均报价</span><span>实际成交价</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vChartBar from '@/components/chart/ChartBar';
    import vChartsLinesTwo from '@/components/charts/chartslinesTwo';

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    import bus from '@/components/common/bus';
    export default{
        components: {
            vChartBar,
            swiper,
            swiperSlide,
            vChartsLinesTwo
        },
        data(){
            return{
                monitoring2_radio: '按日',
                qyoptions: [{
                  qyvalue: 'yiqu',
                  label: '一区'
                },{
                  qyvalue: 'erqu',
                  label: '二区'
                },{
                  qyvalue: 'sanqu',
                  label: '三区'
                },{
                  qyvalue: 'siqu',
                  label: '四区'
                },{
                  qyvalue: 'wuqu',
                  label: '五区'
                },{
                  qyvalue: 'liuqu',
                  label: '六区'
                },{
                  qyvalue: 'qiqu',
                  label: '七区'
                },{
                  qyvalue: 'baqu',
                  label: '八区'
                },{
                  qyvalue: 'jiuqu',
                  label: '九区'
                }],
                qyvalue:'yiqu',
                macoptions: [{
                  macvalue: '选项一',
                  label: '常铁军'
                }],
                macvalue: '选项一',
                lkcx_options: [{
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
                lkcx_value:'选项1',
                kind_options: [{
                   kind_value: '选项1',
                   label: '耀Pro',
                },{
                   kind_value: '选项2',
                   label: '纯',
                },{
                   kind_value: '选项3',
                   label: '劲PRO',
                },{
                   kind_value: '选项4',
                   label: '劲',
                },{
                   kind_value: '选项5',
                   label: '耀',
                }],
                kind_value:'选项1',

                time:['2018-07-15','2018-07-21'],

                monitoring2_chexi: [
                	{name:'低于预警价12万',value:18},
                	{name:'12-15万',value:36},
                	{name:'15-18万',value:28},
                	{name:'18万以上',value:18},
                ],

                monitoring2_offer_Arr1:[
                    {
                        name:'经销商名称',
                        value: '赤峰市君泰汽车销售服务有限公司'
                    },
                    {
                        name:'经销商代码',
                        value: 'SJ1932'
                    },
                    {
                        name:'车辆颜色',
                        value: '黑灰'
                    },
                    {
                        name:'支付方式',
                        value: '贷款购车'
                    },
                    {
                        name:'报价金额',
                        value: '120,200元'
                    },
                    {
                        name:'基础费用',
                        value: '116,200元'
                    },
                    {
                        name:'商业险',
                        value: '4,000元'
                    },
                    {
                        name:'金融方案',
                        value: '标准产品-A'
                    },
                    {
                        name:'贷款金额',
                        value: '72,120元'
                    },
                    {
                        name:'期限',
                        value: '24期'
                    },
                    {
                        name:'报价时间',
                        value: '2019.02.15   14：21：06'
                    },
                    {
                        name:'销售顾问',
                        value: '常铁军'
                    }],

                    monitoring2_offer_Arr2:[
                        {
                            name:'经销商名称',
                            value: '赤峰市君泰汽车销售服务有限公司'
                        },
                        {
                            name:'经销商代码',
                            value: 'SJ1932'
                        },
                        {
                            name:'车辆颜色',
                            value: '黑灰'
                        },
                        {
                            name:'支付方式',
                            value: '全款购车'
                        },
                        {
                            name:'报价金额',
                            value: '120,200元'
                        },
                        {
                            name:'基础费用',
                            value: '116,200元'
                        },
                        {
                            name:'商业险',
                            value: '4,000元'
                        },
                        {
                            name:'报价时间',
                            value: '2019.02.15   14：21：06'
                        },
                        {
                            name:'销售顾问',
                            value: '常铁军'
                        },
                    ],

                    monitoring2_qushi:[
                        ['6.03','6.04','6.05','6.06','6.07','6.08','6.09','6.10','6.11','6.12','6.13'],
                        [140,165,85,152,140,155,130,168,138,150,133],
                        [107,132,70,125,115,140,118,160,123,138,123],
                    ],

                    swiperfor:[
                        {index:1},
                        {index:2},
                        {index:3},
                        {index:4},
                        {index:5}
                    ],
                    swiperOption: {
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            bulletElement: 'div',
                            bulletClass: 'charts-bullet',
                            bulletActiveClass: 'charts-bullet-active',
                            clickable: true,
                        },
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
        methods: {},
    }
</script>

<style lang="scss">
    .monitoring2{

        .monitoring2-body{
            background-color: #ffffff;
            font-family: MicrosoftYaHei;
            border-radius: 5px;
            height: 340px;
            padding:13px 20px;
            font-size: 12px;
            border: solid 1px #dde2ec;
            margin-bottom: 25px;
            .el-row{
                display: flex;
                >div{
                    &:first-child{
                        color: #999999;
                        min-width: 75px;
                    }
                    &:last-child{
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .el-col{
                    height: 26px;
                    line-height: 26px;
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

    }
</style>
