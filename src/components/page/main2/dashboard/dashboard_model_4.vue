<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <h3 class="box-head-style0">用户需求分析</h3>
            </div>
            <div class='box-body model_4'>
				 <div class="box-body-btn">
					<span>时间</span>
					<el-select v-model="sjvalue" placeholder="请选择">
						<el-option v-for="item in sjoptions" :key="item.sjvalue" :label="item.sjlabel" :value="item.sjvalue"></el-option>
					</el-select>
					<!-- <span class="span-left">大区</span>
					<el-select v-model="qyvalue" placeholder="请选择">
						<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
					</el-select> -->
					<span class="span-left">车型</span>
					<el-button >查询</el-button>
					</div>
					<el-select clear="model_4-select" v-model="model_4_select" @change="model_4_selectChange" placeholder="请选择" size="mini">
                    <el-option v-for="item in model_4_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>

                <el-tabs v-model="model_4_activeName" @tab-click="model_4_handleClick" class="box-body-nav">
                    <el-tab-pane label="产品偏好" name="cpph">
                        <el-row>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好排量</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <vChartBar :seriesArr="model_4_pl" :seriesName="'偏好排量'" v-if="'cpph' === model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好变速箱</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <vChartBar :seriesArr="model_4_bsx" :seriesName="'偏好变速箱'" v-if="'cpph' === model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好档位</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <vChartBar :seriesArr="model_4_dw" :seriesName="'偏好档位'" :br="3" v-if="'cpph' === model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好座位数</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <vChartBar :seriesArr="model_4_zw" :seriesName="'偏好座位数'" v-if="'cpph' === model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好排量是否带T</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <div class="plt">
                                                <div class="plt-left-progress" :style="{width:returnDtL+'%'}"></div>
                                                <div class="plt-right-progress" :style="{width:returnDtR+'%'}"></div>
                                                <div class="plt-left">
                                                    <p class="plt-left-icon">是</p>
                                                    <p class="plt-num"><span>{{returnDtL}}</span>%</p>
                                                </div>
                                                <div class="plt-right">
                                                    <p class="plt-right-icon">否</p>
                                                    <p class="plt-num"><span>{{returnDtR}}</span>%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好驱动方式</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <ul class="model_4_progress_0 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_qd" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好车身形式</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <ul class="model_4_progress_1 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_cs" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">偏好车系</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'150px'}">
                                            <ul class="model_4_progress_2 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_cx" :key="index" :style="{paddingLeft:'20%'}">
                                                    <div class="model-progress-name" :title=item.name :style="{width:'15%'}">{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_4-card">
                                    <div class="card-hd">购车倾向</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'360px'}">
                                            <ul class="model_4_tbale_0 model-tbale">
                                                <li v-for="(item,index) in model_4_gc" :key="index">
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
                                    <div class="card-hd">偏好配置类型</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'360px'}">
                                            <ul class="model_4_tbale_1 model-tbale">
                                                <li v-for="(item,index) in model_4_pz" :key="index">
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
                                    <div class="card-hd">关注那些主动安全功能</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'360px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_4_zd" :key="index">
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
                    <el-tab-pane label="设计偏好" name="sjph">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">外观风格偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartBar :seriesArr="model_4_wg" :seriesName="'外观风格偏好'" v-if="'sjph'=== model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">哪个部分的外观造型最重要</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartBar :seriesArr="model_4_bf" :seriesName="'哪个部分的外观造型最重要'" v-if="'sjph'=== model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">车身颜色偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartBar :seriesArr="model_4_ys" :seriesName="'车身颜色偏好'" v-if="'sjph'=== model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">内饰风格偏好</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartBar :seriesArr="model_4_ns" :seriesName="'内饰风格偏好'" v-if="'sjph'=== model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_3-card">
                                    <div class="card-hd">理想车型形象和本车形象</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartLineTwo :seriesArr="model_4_lx" :seriesArrT="model_4_bc" :seriesName="['理想车型形象','本车形象']" v-if="'sjph' === model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="智能互联功能偏好" name="znph">
                        <el-row>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">购车时对中控台液晶屏重视因素</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <ul class="model_4_progress_1 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_zk" :key="index">
                                                    <div class="model-progress-name model-progress-name2" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">购车时对语音辅助功能重视因素</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <ul class="model_4_progress_1 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_yy" :key="index">
                                                    <div class="model-progress-name model-progress-name2" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">购车时对导航功能重视因素</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <ul class="model_4_progress_1 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_dh" :key="index">
                                                    <div class="model-progress-name model-progress-name2" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_4-card">
                                    <div class="card-hd">购车时对车联网功能重视因素</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <ul class="model_4_progress_1 model-progress model-progress_1">
                                                <li v-for="(item,index) in model_4_clw" :key="index">
                                                    <div class="model-progress-name model-progress-name2" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_4-card">
                                    <div class="card-hd">关注哪些智能互联网车载影音主机功能</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_4_zj" :key="index">
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
                                    <div class="card-hd">关注哪些手机APP应用软件</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'400px'}">
                                            <ul class="model_4_tbale_2 model-tbale">
                                                <li v-for="(item,index) in model_4_app" :key="index">
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
                    <el-tab-pane label="二手车和新能源车偏好" name="esc">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card model_media">
                                    <div class="card-hd">是否考虑过二手车</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartPie :seriesArr="model_4_esc" :seriesName="'是否考虑过二手车'" :colorArr="pieColorArr" v-if="'esc' === model_4_activeName" />
                                            <div class="chart-info chart-info-expense chart-info-expense-big">
                                                <p class="chart-info-expense_0">是：<span>{{model_4_esc[0]["value"]}}%</span></p>
                                                <p class="chart-info-expense_1">否：<span>{{model_4_esc[1]["value"]}}%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card model_media">
                                    <div class="card-hd">是否考虑过新能源车</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartPieThree :seriesInArr="model_4_xny" :seriesOutArr="model_4_xnys" :seriesPercent="model_4_xny[1]['value']" :seriesName="'是否考虑过新能源车'" v-if="'esc' === model_4_activeName" />
                                            <div class="chart-info chart-info-expense chart-info-expense-big">
                                                <p class="chart-info-expense_0">是：<span>{{model_4_xny[0]["value"]}}%</span></p>
                                                <p class="chart-info-expense_1">否：<span>{{model_4_xny[1]["value"]}}%</span></p>
                                                <p class="chart-info-expense_2">纯电动(BEV)：<span>{{model_4_xnys[0]["value"]}}%</span></p>
                                                <p class="chart-info-expense_3">插电式混合动力(PHEV)：<span>{{model_4_xnys[1]["value"]}}%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_3-card">
                                    <div class="card-hd">最终不买二手车的原因</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_4_nesc" :seriesName="'最终不买二手车的原因'" v-if="'esc'=== model_4_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="card model_3-card">
                                    <div class="card-hd">最终没买新能源车的原因</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_4_nxny" :seriesName="'最终没买新能源车的原因'" v-if="'esc'=== model_4_activeName" />
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
    import vChartLineTwo from '@/components/chart/ChartLineTwo';
    import vChartBar from '@/components/chart/ChartBar';
    import vChartPie from '@/components/chart/ChartPie';
    import vChartPieThree from '@/components/chart/ChartPieThree';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default {
        name: 'dashboard_model_4',
        components: {
            vChartLine,
            vChartLineTwo,
            vChartBar,
            vChartPie,
            vChartPieThree
        },
        data() {
            return {
                model_4_select: this.$store.state.modelSelectDefault,
                model_4_options: this.$store.state.modelSelectOptions,
                model_4_activeName: "cpph",

                pieColorArr: ["#ff6074", "#707376"],

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

                model_4_pl: [],
                model_4_bsx: [],
                model_4_dw: [],
                model_4_zw: [],

                model_4_dt: [
                    { name: "是", value: "0" },
                    { name: "否", value: "0" }
                ],

                model_4_qd: [],
                model_4_cs: [],
                model_4_cx: [],

                model_4_gc: [],
                model_4_pz: [],
                model_4_zd: [],

                model_4_wg: [],
                model_4_bf: [],
                model_4_ys: [],
                model_4_ns: [],
                model_4_lx: [],
                model_4_bc: [],

                model_4_zk: [],
                model_4_yy: [],
                model_4_dh: [],
                model_4_clw: [],
                model_4_zj: [],
                model_4_app: [],

                model_4_esc: [{ name: "是", value: "0" }, { name: "否", value: "0" }],
                model_4_xny: [{ name: "是", value: "0" }, { name: "否", value: "0" }],
                model_4_nesc: [],
                model_4_nxny: [],
                model_4_xnys: [{ name: "纯电动（BEV）", value: "0" }, { name: "插电式混合动力（PHEV）", value: "0" }],
            }
        },
        computed: {
            returnGroup() {
                return this.$store.state.year + '-' + this.$store.state.brand + '-' + this.model_4_select
            },
            returnDtL() {
                return this.model_4_dt[0]["value"]
            },
            returnDtR() {
                return this.model_4_dt[1]["value"]
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                if (this.model_4_activeName === "cpph") {
                    //偏好排量
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好排量"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_pl = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好变速箱
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好变速箱"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_bsx = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好档位
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好档位数"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_dw = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好座位数
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好座位数"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_zw = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好排量是否带T
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好排量是否带T"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_dt = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好驱动形式
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好驱动形式"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_qd = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好车身形式
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好车身形式"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_cs = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好车系
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好车系"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_cx = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车倾向
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "购车倾向"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_gc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //偏好配置类型
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "喜欢的配置类别是"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_pz = res.data[this.returnGroup].slice(0, 10);
                            }
                        })
                        .catch((res) => {})

                    //关注那些主动安全功能
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "关注哪些主动安全功能"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_zd = res.data[this.returnGroup].slice(0, 10);
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_4_activeName === "sjph") {
                    //外观风格偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好外观风格"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_wg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //哪个部分的外观造型最重要
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "哪些部位的外观造型更重要"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_bf = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //车身颜色偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好车身颜色"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_ys = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //内饰风格偏好
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "偏好内饰风格"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_ns = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //理想车型形象和本车形象
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "理想级别的车的形象"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                                        group: this.returnGroup,
                                        block: "本车的车型形象"
                                    }))
                                    .then((res2) => {
                                        if (res2.status === 200) {
                                            this.model_4_lx = res.data[this.returnGroup];
                                            this.model_4_bc = res2.data[this.returnGroup];
                                        }
                                    })
                                    .catch((res) => {})
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_4_activeName === "znph") {

                    //购车时对中控台液晶屏重视因素
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "中控台液晶屏的哪些方面更重要"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_zk = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车时对语音辅助功能重视因素
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "语音辅助的哪些方面更重要"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_yy = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车时对导航功能重视因素
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "内置导航的哪些方面更重要"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_dh = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //购车时对车联网功能重视因素
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "车联网功能的哪些方面更重要"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_clw = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //关注哪些智能互联网车载影音主机功能
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "关注哪些智能互联网车载影音主机功能"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_zj = res.data[this.returnGroup].slice(0,15);
                            }
                        })
                        .catch((res) => {})

                    //关注哪些手机APP应用软件
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "关注哪些手机APP应用软件"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_app = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_4_activeName === "esc") {

                    //是否考虑过二手车
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "是否考虑二手车"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                //默认否在前，反转
                                res.data[this.returnGroup].reverse();
                                this.model_4_esc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //是否考虑过新能源车
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "是否考虑过购买新能源车"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                                        group: this.returnGroup,
                                        block: "考虑新能源车类型"
                                    }))
                                    .then((res2) => {
                                        if (res2.status === 200) {
                                            //默认否在前，反转
                                            res.data[this.returnGroup].reverse();
                                            this.model_4_xny = res.data[this.returnGroup];
                                            this.model_4_xnys = res2.data[this.returnGroup];
                                        }
                                    })
                                    .catch((res) => {})
                            }
                        })
                        .catch((res) => {})

                    //最终不买二手车的原因
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "不买二手车的原因"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_nesc = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //最终没买新能源车的原因
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "没有购买新能源汽车的原因"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_4_nxny = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                }
            },
            model_4_handleClick(tab, event) {
                this.loadData()
            },
            model_4_selectChange(value) {
                this.loadData()
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
