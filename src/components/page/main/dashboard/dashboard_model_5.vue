<template>

    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <h3 class="box-head-style0">用户购买行为</h3>
            </div>
            <div class='box-body model_5'>
				<div class="box-body-btn">
					<span>时间</span>
					<el-select v-model="svalue" placeholder="请选择">
						<el-option v-for="item in soptions" :key="item.svalue" :label="item.slabel" :value="item.svalue"></el-option>
					</el-select>
					<span class="span-left">大区</span>
					<el-select v-model="qvalue" placeholder="请选择">
						<el-option v-for="item in qoptions" :key="item.qvalue" :label="item.qvalue" :value="item.qvalue"></el-option>
					</el-select>
					<span class="span-left">车型</span>
					<el-button >查询</el-button>
				</div>
                <el-select clear="model_5-select" v-model="model_5_select" @change="model_5_selectChange" placeholder="请选择" size="mini">
                    <el-option v-for="item in model_5_options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-tabs v-model="model_5_activeName" @tab-click="model_5_handleClick" class="box-body-nav">
                    <el-tab-pane label="购买动机" name="gmdj">
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_5-card">
                                    <div class="card-hd">购车情形</div>
                                    <el-row>
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div class="chart-box" :style="{height:'250px'}">
                                                    <vChartPie :seriesArr="model_5_buy" :seriesName="'购车情形'" :colorArr="pieColorArr" v-if="'gmdj' === model_5_activeName" />
                                                    <div class="chart-info chart-info-buy">
                                                        <p class="chart-info-buy_0">第一次购买：<span>{{model_5_buy[0]["value"]}}%</span></p>
                                                        <p class="chart-info-buy_1">更新/替换：<span>{{model_5_buy[1]["value"]}}%</span></p>
                                                        <p class="chart-info-buy_2">增加一辆车：<span>{{model_5_buy[2]["value"]}}%</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'250px'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_gcdj" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="考虑因素" name="klys">
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_5-card">
                                    <div class="card-hd">购车考虑因素 </div>
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'400px'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_kl" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'147px',padding:'0 20px',margin:'126px 0'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_kl_opt" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="信息渠道" name="xxqd">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">购车信息渠道</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_5_qd" :seriesName="'购车信息渠道'" v-if="'xxqd' === model_5_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">互联网信息渠道-电脑PC端</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartLine :seriesArr="model_5_pc" :seriesName="'互联网信息渠道-电脑PC端'" :gridLeft="25" :gridRight="25" v-if="'xxqd' === model_5_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_4-card">
                                    <div class="card-hd">上网关注信息</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_5_sw" :key="index">
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
                                    <div class="card-hd">广告类型偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_5_gg" :key="index">
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
                                    <div class="card-hd">节目类型偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_5_jr" :key="index">
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
                    <el-tab-pane label="营销偏好" name="yxph">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_4-card">
                                    <div class="card-hd">促销活动偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_5_cx" :key="index">
                                                    <div class="model-tbale-name">{{item.name}}</div>
                                                    <div class="model-tbale-num">{{item.value}}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_4-card">
                                    <div class="card-hd">客户维系活动偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_5_wx" :key="index">
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
                            <el-col :span="24">
                                <div class="card model_5-card">
                                    <div class="card-hd">营销活动偏好</div>
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'250px'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_yx" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'160px',padding:'0 20px',margin:'45px 0'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_yx_opt" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="车型对比" name="cxdb">
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_5-card">
                                    <div class="card-hd">置换升级路径图</div>
                                    <div class="card-bd">
                                        <div class="model_5_cxdb_tabs">
                                            <el-radio v-model="model_5_cxdb_tab" label="0" border>置换升级路径图</el-radio>
                                            <el-radio v-model="model_5_cxdb_tab" label="1" border>竞争对比图</el-radio>
                                        </div>
                                        <div class="model_5_cxdb_tab" v-if="model_5_cxdb_tab==='0'">
                                            <div class="model_5_zh">
                                                <el-row>
                                                    <el-col :span="7" :sm="6">
                                                        <ul class="model_5_list">
                                                            <li v-for="(item,index) in model_5_zh_l" :key="index">
                                                                <div class="model_5_item_index">{{index+1}}</div>
                                                                <div class="model_5_item_name">{{item.name}}</div>
                                                                <div class="model_5_item_num">{{item.value}}%</div>
                                                            </li>
                                                        </ul>
                                                    </el-col>
                                                    <el-col :span="10" :sm="12">
                                                        <div class="model_5_zh-lbg">流入</div>
                                                        <div class="model_5_zh-rbg">流出</div>
                                                        <div class="model_5_zh-name">
                                                            <div class="model_5_zh-name-ico">
                                                                <img :src="returnZhIco" alt="">
                                                            </div>
                                                            <div class="model_5_zh-name-txt">
                                                                {{model_5_zh_Map[model_5_select]["name"]}}
                                                            </div>
                                                        </div>
                                                    </el-col>
                                                    <el-col :span="7" :sm="6">
                                                        <ul class="model_5_list">
                                                            <li v-for="(item,index) in model_5_zh_r" :key="index">
                                                                <div class="model_5_item_index">{{index+1}}</div>
                                                                <div class="model_5_item_name">{{item.name}}</div>
                                                                <div class="model_5_item_num">{{item.value}}%</div>
                                                            </li>
                                                        </ul>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="model_5_cxdb_tab" v-if="model_5_cxdb_tab==='1'">
                                            <div class="model_5_zh">
                                                <el-row>
                                                    <el-col :span="7" :sm="8" :style="{position:'relative'}">
                                                        <div class="model_5_zh-rbg"><span>流出</span></div>
                                                        <div class="model_5_zh-name" :style="{left:'0',marginLeft:'0'}">
                                                            <div class="model_5_zh-name-ico">
                                                                <img :src="returnZhIco" alt="">
                                                            </div>
                                                            <div class="model_5_zh-name-txt">
                                                                {{model_5_zh_Map[model_5_select]["name"]}}
                                                            </div>
                                                        </div>
                                                    </el-col>
                                                    <el-col :span="7" :sm="8">
                                                        <ul class="model_5_list">
                                                            <li v-for="(item,index) in model_5_zh_rr" :key="index">
                                                                <div class="model_5_item_index">{{index+1}}</div>
                                                                <div class="model_5_item_name">{{item.name}}</div>
                                                                <div class="model_5_item_num">{{Math.round(item.value*10)/10}}%</div>
                                                            </li>
                                                        </ul>
                                                    </el-col>
                                                    <el-col :span="10" :sm="8">
                                                        <div class="model_5_zh_p">
                                                            <div class="model_5_zh_p-tit">选择{{model_5_zh_rr[model_5_zh_rr_index]["name"]}}原因</div>
                                                            <div class="chart-box" :style="{height:'200px'}">
                                                                <ul class="model_5_progress_0 model-progress model-progress_1">
                                                                    <li v-for="(item,index) in model_5_zh_x" :key="index">
                                                                        <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                                        <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="model_5_zh_p">
                                                            <div class="model_5_zh_p-tit">拒绝{{model_5_zh_rr[model_5_zh_rr_index]["name"]}}原因</div>
                                                            <div class="chart-box" :style="{height:'200px'}">
                                                                <ul class="model_5_progress_0 model-progress model-progress_1">
                                                                    <li v-for="(item,index) in model_5_zh_j" :key="index">
                                                                        <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                                        <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="购买" name="gm">
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_5-card model_media">
                                    <div class="card-hd">是否有其他资金来源</div>
                                    <el-row>
                                        <el-col :span="10">
                                            <div class="card-bd">
                                                <div class="chart-box" :style="{height:'250px'}">
                                                    <vChartPie :seriesArr="model_5_ly" :seriesName="'是否有其他资金来源'" :colorArr="pieColorArr2" v-if="'gm' === model_5_activeName"></vChartPie>
                                                    <div class="chart-info chart-info-buy">
                                                        <p class="chart-info-buy_0">有：<span>29.37%</span></p>
                                                        <p class="chart-info-buy_1">没有：<span>70.63%</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                        <el-col :span="14">
                                            <div class="card-bd">
                                                <div id='model_5_chart1' :style="{height:'250px'}">
                                                    <ul class="model_5_progress_0 model-progress model-progress_1">
                                                        <li v-for="(item,index) in model_5_jt" :key="index">
                                                            <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                            <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">购买场所</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_5_cs" :seriesName="'购买场所'" v-if="'gm' === model_5_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">质保期后的维修场所选择 </div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_5_zb" :seriesName="'质保期后的维修场所选择'" v-if="'gm' === model_5_activeName" />
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
        name: 'dashboard_model_5',
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

				soptions: [{
				   svalue: '选项1',
				   slabel: '2018年'
				}],
				   svalue:'选项1',
				qoptions: [{
				   qvalue: '全国',
				   qlabel: '全国'
				}],
				   qvalue:'全国',

                model_5_select: this.$store.state.modelSelectDefault,
                model_5_options: this.$store.state.modelSelectOptions,
                model_5_activeName: "gmdj",

                pieColorArr: ["#f74a62", "#707376", "#131313"],
                pieColorArr2: ["#f74a62", "#707376"],
                model_5_buy: [{ name: "第一次购买", value: "0" }, { name: "更新/替换", value: "0" }, { name: "增加一辆车", value: "0" }],
                model_5_gcdj: [],

                model_5_kl: [],
                model_5_kl_opt: [],

                model_5_qd: [],
                model_5_pc: [],
                model_5_sw: [],
                model_5_gg: [],
                model_5_jr: [],


                model_5_cx: [],
                model_5_wx: [],
                model_5_yx: [],
                model_5_yx_opt: [],

                model_5_ly: [],
                model_5_jt: [],
                model_5_cs: [],
                model_5_zb: [],

                model_5_cxdb_tab: '0',
                model_5_zh_Map: {
                    "昂科威": {
                        "name": "领克01",
                        "icon": "L01"
                    },
                    "昂科拉": {
                        "name": "领克02",
                        "icon": "L02"
                    },
                    "君威": {
                        "name": "领克03",
                        "icon": "L03"
                    }
                },
                model_5_zh_l: [],
                model_5_zh_r: [],

                model_5_zh_rr_data: {},
                model_5_zh_rr_index: 0,
                model_5_zh_rr: []
            }
        },
        computed: {
            model_5_zh_x() {
                return this.model_5_zh_rr_data["seriesData"][this.model_5_zh_rr[this.model_5_zh_rr_index]["name"]]["02 选购原因"].slice(0, 6)
            },
            model_5_zh_j() {
                return this.model_5_zh_rr_data["seriesData"][this.model_5_zh_rr[this.model_5_zh_rr_index]["name"]]["03 弃购原因"].slice(0, 6)
            },
            returnZhIco() {
                return 'static/img/dashboard/' + (this.model_5_zh_Map[this.model_5_select]["icon"]) + '.png'
            },
            returnGroup() {
                return this.$store.state.year + '-' + this.$store.state.brand + '-' + this.model_5_select
            },
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                if (this.model_5_activeName === "gmdj") {
                    //购车情形
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车情形"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_buy = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车动机
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车动机-level1"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_gcdj = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_5_activeName === "klys") {
                    //购车重视因素
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车重视因素"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_kl = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车重视因素-安全性
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车重视因素-安全性"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_kl_opt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_5_activeName === "xxqd") {

                    //购车信息渠道
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车信息渠道"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_qd = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //互联网信息渠道-电脑PC端
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "互联网信息渠道-电脑PC端"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_pc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //上网关注信息
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "关注信息领域"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_sw = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //广告类型偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "广告类型偏好"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_gg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //节目类型偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "节目类型偏好"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_jr = res.data[this.returnGroup].slice(0, 13);
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_5_activeName === "yxph") {

                    //促销活动偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "促销活动偏好"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_cx = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //客户维系活动偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "客户维系活动偏好"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_wx = res.data[this.returnGroup].slice(0, 13);
                            }
                        })
                        .catch((res) => {})

                    //营销活动偏好-level1
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "营销活动偏好-level1"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_yx = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //营销活动偏好-体验类
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "营销活动偏好-体验类"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_yx_opt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_5_activeName === "cxdb") {
                    //被替换车辆生产厂家-流入
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "被替换车辆生产厂家-流入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_zh_l = res.data[this.returnGroup].slice(0, 6);
                            }
                        })
                        .catch((res) => {})
                    //被替换车辆车身形式-流出
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "被替换车辆车身形式-流出"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_zh_r = res.data[this.returnGroup].slice(0, 6);
                            }
                        })
                        .catch((res) => {})
                    //竞争对比图
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSReasonNew", Qs.stringify({
                            group: this.returnGroup
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_zh_rr = res.data[this.returnGroup]["name"].slice(0, 6);
                                this.model_5_zh_rr_data = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_5_activeName === "gm") {
                    //是否有其他资金来源
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "是否有其他资金来源"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                //把是放前面
                                res.data[this.returnGroup].reverse();
                                this.model_5_ly = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //具体资金来源
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "具体资金来源"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_jt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购买场所
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购买场所"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_cs = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //质保期后的维修场所选择
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "质保期后的维修场所选择"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_5_zb = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                }
            },
            model_5_handleClick(tab, event) {
                this.loadData()
            },
            model_5_selectChange(value) {
                this.loadData()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .model_5_cxdb_tabs {
        width: 300px;
        height: 30px;
        margin: 10px auto;
        border-radius: 4px;
        border: 1px solid #DCDFE6;

        .el-radio.is-bordered {
            float: left;
            width: 50%;
            margin: 0;
            padding: 0;
            height: 28px;
            border: none;
            border-radius: 2px;
            line-height: 28px;
            text-align: center;

            &.is-checked {

                &:after {
                    content: "";
                    position: absolute;
                    top: -1px;
                    left: -1px;
                    width: calc(100% + 0px);
                    height: calc(100% + 0px);
                    border: 1px solid #f63c53;
                    border-radius: 4px;
                }
            }
        }
    }

    .model_5_zh {
        height: 530px;

        .model_5_zh-lbg {
            float: left;
            width: 260px;
            height: 530px;
            padding-left: 95px;
            line-height: 530px;
            text-align: center;
            font-family: MicrosoftYaHei-Bold;
            font-size: 20px;
            color: #333333;
            letter-spacing: 2px;
            background: url(~static/img/dashboard/lbg.png) no-repeat;
            pointer-events: none;
        }

        .model_5_zh-rbg {
            float: right;
            width: 260px;
            height: 530px;
            padding-right: 95px;
            line-height: 530px;
            text-align: center;
            font-family: MicrosoftYaHei-Bold;
            font-size: 20px;
            color: #333333;
            letter-spacing: 2px;
            background: url(~static/img/dashboard/rbg.png) no-repeat;
            pointer-events: none;
        }

        @media(max-width:1400px){
            .model_5_zh-lbg {
                padding-left: 2.5%;
                font-size: 17px;
            }
            .model_5_zh-rbg {
                padding-right: 1%;
                font-size: 17px;
                >span{
                    margin-left: 25px;
                }
            }
        }

        .model_5_zh-name {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 240px;
            height: 240px;
            margin: -120px 0 0 -120px;
            border-radius: 50%;
            background-color: #ffffff;
            box-shadow: 0px 7px 7px 0px rgba(254, 128, 122, 0.26);
            border: 1px solid #f64359;
        }

        .model_5_zh-name-ico {
            width: 200px;
            margin: 72px auto 20px;

            img {
                display: block;
                width: 100%;
            }
        }

        .model_5_zh-name-txt {
            font-size: 16px;
            text-align: center;
        }
    }

    .model_5_list {
        min-height: 1px;

        >li {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 80px;
            border-radius: 4px;
            padding-left: 100px;
            padding-right: 20px;
            border: 1px solid #dde2ec;
            font-size: 14px;

            &+li {
                margin-top: 10px;
            }
        }

        .model_5_item_index {
            position: absolute;
            top: 13px;
            left: 23px;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            font-size: 20px;
            line-height: 54px;
            text-align: center;
        }

        .model_5_item_name {
            width: calc(100% - 10px);
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .model_5_zh_p {
        height: 265px;
        padding: 0 10%;

        .model_5_zh_p-tit {
            line-height: 30px;
            text-align: center;
        }
    }
</style>
