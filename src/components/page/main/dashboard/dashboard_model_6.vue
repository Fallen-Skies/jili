<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <h3 class="box-head-style0">用户使用行为</h3>
            </div>
            <div class='box-body model_6'>
				<div class="box-body-btn">
					<span>时间</span>
					<el-select v-model="sjvalue" placeholder="请选择" calss="sq-btn">
						<el-option v-for="item in sjoptions" :key="item.sjvalue" :label="item.sjlabel" :value="item.sjvalue"></el-option>
					</el-select>
					<span class="span-left">大区</span>
					<el-select v-model="qyvalue" placeholder="请选择" calss="sq-btn">
						<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
					</el-select>
					<span class="span-left">车型</span>
					<el-button >查询</el-button>
				</div>
               <el-select clear="model_6-select" v-model="model_6_select" @change="model_6_selectChange" placeholder="请选择" size="mini">
                    <el-option v-for="item in model_6_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-tabs v-model="model_6_activeName" @tab-click="model_6_handleClick" class="box-body-nav">
                    <el-tab-pane label="车辆用途" name="clyt">
                        <el-row :style="{'padding-top':'55px'}">
                            <el-col :span="8" v-for="(item,index) in model_6_yt" :key="index">
                                <div class="card model_6-card">
                                    <div class="card-hd" v-if="index===0" :style="{'margin-top':'-31px'}">主要用于</div>
                                    <div class="card-bd" :style="{'margin-top':index===0?'15px':''}">
                                        <div class="chart-box" :style="{height:'75px'}">
                                            <div class="model_6_bimg_0 model-bimg">
                                                <div class="model-bimg-img">
                                                    <img :src="'static/img/dashboard/06_1_icon_big0'+(index+1)+'.png'" alt="">
                                                </div>
                                                <div class="model-bimg-txt">
                                                    <p class="model-bimg-num"><span>{{item.value}}</span>%</p>
                                                    <p>{{item.name}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="16">
                                <div class="card model_6-card">
                                    <div class="card-hd">具体使用用途</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'180px'}">
                                            <div class="use-list">
                                                <div class="use-item" v-for="(item,index) in model_6_jt" :key="index">
                                                    <div class="use-item-icon">
                                                        <img :src="'static/img/dashboard/06_1_icon_small0'+(index+1)+'.png'" alt="">
                                                    </div>
                                                    <div class="use-item-num"><span>{{item.value}}</span>%</div>
                                                    <div class="use-item-name" v-html="item.name"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">是否用于共享</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px','margin-top':'14px'}">
                                            <div class="model_6_bimg_2 model-bimg" :style="{'padding-top':'36px'}">
                                                <div class="model-bimg-img">
                                                    <img src="static/img/dashboard/06_1_icon_big04.png" alt="">
                                                </div>
                                                <div class="model-bimg-txt">
                                                    <p class="model-bimg-num"><span>{{model_6_gx[1]["value"]}}</span>%</p>
                                                    <p>是的</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">单日用车频次</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartLine :seriesArr="model_6_dr" :seriesName="'单日用车频次'" v-if="'clyt' === model_6_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">日均行驶里程</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px',paddingTop:'40px'}">
                                            <vChartBar :seriesArr="model_6_rlc" :seriesName="'日均行驶里程'" v-if="'clyt' === model_6_activeName" />
                                            <div class="chart-info">平均里程：<span>{{model_6_rlc_avg}}</span> km</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">单日用车时长</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_6_sc" :seriesName="'单日用车时长'" v-if="'clyt' === model_6_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">用车频率</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <ul class="model_4_progress_0 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_6_yc" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">每周最长单日行驶里程</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px',paddingTop:'40px'}">
                                            <div class="chart-info">平均里程：<span>{{model_6_zlc_avg}}</span> km</div>
                                            <ul class="model_4_progress_0 model-progress model-progress_1" style="paddingTop:0;">
                                                <li v-for="(item,index) in model_6_zlc" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true">
                                                    </el-progress>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">常去的区域</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <ul class="model_4_progress_0 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_6_cq" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="使用情况" name="syqk">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_6-card">
                                    <div class="card-hd">搭载的人员类别 </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_6_dzry" :seriesName="'搭载的人员类别'" v-if="'syqk' === model_6_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_6-card">
                                    <div class="card-hd">不同情况下搭载频率-乘坐1人 </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_6_dz_opt" :seriesName="'不同情况下搭载频率-乘坐1人'" v-if="'syqk' === model_6_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_6-card">
                                    <div class="card-hd">第三排使用情况 </div>
                                    <div class="card-bd">
                                        <el-row>
                                            <el-col :span="8">
                                                <div class="chart-box" :style="{height:'200px'}">
                                                    <vChartBar :seriesArr="model_6_3sy" :seriesName="'使用频率'" v-if="'syqk' === model_6_activeName" />
                                                </div>
                                            </el-col>
                                            <el-col :span="8">
                                                <div class="chart-box" :style="{height:'200px'}">
                                                    <vChartBar :seriesArr="model_6_3yt" :seriesName="'用途'" v-if="'syqk' === model_6_activeName" />
                                                </div>
                                            </el-col>
                                            <el-col :span="8">
                                                <div class="chart-box" :style="{height:'200px'}">
                                                    <vChartBar :seriesArr="model_6_3czr" :seriesName="'乘坐人类型'" v-if="'syqk' === model_6_activeName" />
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="16">
                                <div class="card model_4-card">
                                    <div class="card-hd">搭载物品</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_1 model-tbale">
                                                <li v-for="(item,index) in model_6_dzwp" :key="index">
                                                    <div class="model-tbale-name">{{item.name}}</div>
                                                    <div class="model-tbale-num">{{item.value}}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_4-card">
                                    <div class="card-hd">平均油耗和期望油耗 </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <div class="youhao">
                                                <div class="youhao-box">
                                                    <div class="youhao-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big05.png" alt="">
                                                    </div>
                                                    <div class="youhao-txt">
                                                        <p class="num">{{model_6_yh_pj}}</p>
                                                        <p>平均油耗(L/100km)</p>
                                                    </div>
                                                </div>
                                                <div class="youhao-box">
                                                    <div class="youhao-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big05.png" alt="">
                                                    </div>
                                                    <div class="youhao-txt">
                                                        <p class="num">{{model_6_yh_qw}}</p>
                                                        <p>期望油耗(L/100km)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="用户满意度" name="yhmyd">
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">产品总体满意度(9分制) </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'300px'}">
                                            <div class="myd">
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big06.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_myd_avg}}</p>
                                                        <p>均值</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big07.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_myd_arr[0]["value"]+"%"}}</p>
                                                        <p>满意比例(7-9分)</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big08.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_myd_arr[1]["value"]+"%"}}</p>
                                                        <p>不满意比例(1-3分)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="card model_6-card">
                                    <div class="card-hd">产品各项指标满意度</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'300px'}">
                                            <vChartBar :seriesArr="model_6_myd" :seriesName="'产品各项指标满意度'" v-if="'yhmyd' === model_6_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">售前服务总体满意度(9分制) </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'500px'}">
                                            <div class="myd">
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big06.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_qbmy_avg}}</p>
                                                        <p>均值</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big07.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_qbmy_arr[0]["value"]+"%"}}</p>
                                                        <p>满意比例(7-9分)</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big08.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_qbmy_arr[1]["value"]+"%"}}</p>
                                                        <p>不满意比例(1-3分)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="card model_6-card">
                                    <div class="card-hd">售前服务不满意度的方面-Top8</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'500px'}">
                                            <ul class="model_4_tbale_1 model-tbale">
                                                <li v-for="(item,index) in model_6_qbmy" :key="index">
                                                    <div class="model-tbale-name">{{item.name}}</div>
                                                    <div class="model-tbale-num">{{item.value}}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_6-card">
                                    <div class="card-hd">售后服务总体满意度(9分制) </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'500px'}">
                                            <div class="myd">
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big06.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_hbmy_avg}}</p>
                                                        <p>均值</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big07.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_hbmy_arr[0]["value"]+"%"}}</p>
                                                        <p>满意比例(7-9分)</p>
                                                    </div>
                                                </div>
                                                <div class="myd-box">
                                                    <div class="myd-ico">
                                                        <img src="static/img/dashboard/06_1_icon_big08.png" alt="">
                                                    </div>
                                                    <div class="myd-txt">
                                                        <p class="num">{{model_6_hbmy_arr[1]["value"]+"%"}}</p>
                                                        <p>不满意比例(1-3分)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="card model_6-card">
                                    <div class="card-hd">售后服务不满意度的方面-Top8</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'500px'}">
                                            <ul class="model_4_tbale_1 model-tbale">
                                                <li v-for="(item,index) in model_6_hbmy" :key="index">
                                                    <div class="model-tbale-name">{{item.name}}</div>
                                                    <div class="model-tbale-num">{{item.value}}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import vChartLine from '@/components/chart/ChartLine';
    import vChartBar from '@/components/chart/ChartBar';
    import vChartMap from '@/components/chart/ChartMap';
    import vChartPie from '@/components/chart/ChartPie';
    import vChartPieTwo from '@/components/chart/ChartPieTwo';
    import vChartPieMuch from '@/components/chart/ChartPieMuch';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default {
        name: 'dashboard_model_6',
        components: {
            vChartLine,
            vChartBar,
            vChartMap,
            vChartPie,
            vChartPieTwo,
            vChartPieMuch
        },
        data() {
            return {
                model_6_select: this.$store.state.modelSelectDefault,
                model_6_options: this.$store.state.modelSelectOptions,
                model_6_activeName: "clyt",

				sjoptions: [{
				   sjvalue: '选项1',
				   sjlabel: '2018年'
				}],
				   sjvalue:'选项1',
				qyoptions: [{
				   qyvalue: '选项1',
				   qylabel: '全国'
				}],
				   qyvalue:'选项1',

                model_6_yt: [{ name: "家用为主", value: "0" }, { name: "商务/业务用为主", value: "0" }, { name: "家用与商务/业务用相当", value: "0" }],
                model_6_jt: [],
                model_6_gx: [{ name: "", value: "0" }, { name: "", value: "0" }],

                model_6_dr: [],
                model_6_rlc: [],
                model_6_rlc_avg: [],
                model_6_sc: [],
                model_6_yc: [],
                model_6_zlc: [],
                model_6_zlc_avg: [],
                model_6_cq: [],

                model_6_dzry: [],
                model_6_dz_opt: [],
                model_6_3sy: [],
                model_6_3yt: [],
                model_6_3czr: [],
                model_6_dzwp: [],

                model_6_myd: [],
                model_6_qbmy: [],
                model_6_hbmy: [],

                model_6_yh_pj: "",
                model_6_yh_qw: "",

                model_6_myd_avg: "",
                model_6_qbmy_avg: "",
                model_6_hbmy_avg: "",

                model_6_myd_arr: [{ name: "满意比例（7-9）", value: "0" }, { name: "不满意比例（1-3）", value: "0" }],
                model_6_qbmy_arr: [{ name: "满意比例（7-9）", value: "0" }, { name: "不满意比例（1-3）", value: "0" }],
                model_6_hbmy_arr: [{ name: "满意比例（7-9）", value: "0" }, { name: "不满意比例（1-3）", value: "0" }],
            }
        },
        computed: {
            returnGroup() {
                return this.$store.state.year + '-' + this.$store.state.brand + '-' + this.model_6_select
            },
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                if (this.model_6_activeName === "clyt") {
                    //主要用途
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "主要用途"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_yt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //具体使用用途
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "具体使用用途"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_jt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //是否用于共享
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "是否用于共享"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_gx = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //单日用车频次
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "单日用车频次"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_dr = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //日均行驶里程
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "日均行驶里程"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_rlc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //日均行驶里程均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "日均行驶里程"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_rlc_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //单日用车时长
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "单日用车时长"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_sc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //用车频率
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "使用频率"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_yc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //每周最长单日行驶里程
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "每周最长单日行驶里程"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_zlc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //每周最长单日行驶里程均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "每周最长单日行驶里程"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_zlc_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //常去的区域
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "常去的区域"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_cq = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_6_activeName === "syqk") {

                    //搭载的人员类别
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "搭载的人员类别"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_dzry = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //不同情境下搭载频率-乘坐1人
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "不同情境下搭载频率-乘坐1人"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_dz_opt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //使用频率
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "第三排使用频率"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_3sy = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //用途
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "第三排的用途"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_3yt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //乘坐人类型
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "第三排乘坐人类型"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_3czr = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //搭载物品
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "搭载物品"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_dzwp = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //平均油耗
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "平均油耗"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_yh_pj = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //期望油耗
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "期望油耗"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_yh_qw = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_6_activeName === "yhmyd") {

                    //产品各项指标满意度
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "产品各项指标满意度"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_myd = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售前服务不满意度的方面-Top8
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售前不满意方面评价"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_qbmy = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售后服务不满意度的方面-Top8
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售后服务关注度"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_hbmy = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //产品总体满意度（9分制）
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "产品总体满意度（9分制）"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_myd_arr = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售前服务总体满意度（9分制）
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售前服务总体满意度（9分制）"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_qbmy_arr = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售后服务总体满意度（9分制）
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售后服务总体满意度（9分制）"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_hbmy_arr = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //产品总体满意度
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "产品总体满意度"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_myd_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售前总体满意度评价
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售前总体满意度评价"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_qbmy_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //售后服务的总体满意度
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "售后服务的总体满意度"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_6_hbmy_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                }
            },
            model_6_handleClick(tab, event) {
                this.loadData()
            },
            model_6_selectChange(value) {
                this.loadData()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .youhao,
    .myd {
        height: 100%;
    }

    .youhao-box,
    .myd-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .youhao-box {
        height: 50%;
        padding: 0 10%;
    }

    .myd-box {
        height: 33.33%;
        padding: 0 5% 0 10%;
    }

    .youhao-txt,
    .myd-txt {
        text-align: center;

        .num {
            font-size: 30px;
        }
    }

    .myd-txt {
        width: 100px;
    }
</style>
