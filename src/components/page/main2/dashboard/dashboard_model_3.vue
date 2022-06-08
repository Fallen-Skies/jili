<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <h3 class="box-head-style0">用户画像特征</h3>
            </div>
            <div class='box-body model_3'>
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
                <el-select clear="model_3-select" v-model="model_3_select" @change="model_3_selectChange" placeholder="请选择" size="mini" id="model_3-select-btn">
                    <el-option v-for="item in model_3_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-tabs v-model="model_3_activeName" @tab-click="model_3_handleClick" class="box-body-nav">
                    <el-tab-pane label="基本情况" name="jbqk">
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_3-card">
                                    <div class="card-hd">性别</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartPie :seriesArr="model_3_gender" :seriesName="'性别'" :titleTxt="'全国车主\n男女占比'" v-if="'jbqk' === model_3_activeName" />
                                            <div class="chart-info chart-info-gender">
                                                <p class="chart-info-gender-man">男占比：<span>{{model_3_gender[0]["value"]}}%</span></p>
                                                <p class="chart-info-gender-woman">女占比：<span>{{model_3_gender[1]["value"]}}%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_3-card">
                                    <div class="card-hd">年龄</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'260px',paddingTop:'40px'}">
                                            <vChartLine :seriesArr="model_3_age" :seriesName="'年龄'" v-if="'jbqk' === model_3_activeName" />
                                            <div class="chart-info">平均年龄：<span><!-- {{model_3_age_avg}} -->33</span></div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="card model_3-card">
                                    <div class="card-hd">学历</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'260px',paddingTop:'40px'}">
                                            <vChartBar :seriesArr="model_3_education" :seriesName="'学历'" v-if="'jbqk' === model_3_activeName" />
                                            <div class="chart-info">本科以上：<span>{{model_3_education_avg}}</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="card model_3-card">
                                    <div class="card-hd">婚姻</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <ul class="model_3_progress_0 model-progress model-progress_0">
                                                <li v-for="(item,index) in model_3_marriage" :key="index">
                                                    <div class="model-progress-name" :title=item.name>{{item.name}}</div>
                                                    <el-progress :stroke-width="8" :percentage="item.value-0" :show-text="true" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_3-card">
                                    <div class="card-hd">孩子数量</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <ul class="kid-list">
                                                <li v-for="(item,index) in model_3_child" :key="index">
                                                    <div class="kid-item-ico">
                                                        <img :src="'static/img/dashboard/03_1_icon0'+(index+1)+'.png'" alt="">
                                                    </div>
                                                    <div class="kid-item-txt">
                                                        <p class="kid-item-num"><span>{{item.value}}</span>%</p>
                                                        <p>{{item.name}}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_3-card">
                                    <div class="card-hd">同住人口数</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartPieMuch :seriesArr="model_3_resideNum" :seriesName="'同住人口数'" v-if="'jbqk' === model_3_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_3-card">
                                    <div class="card-hd">同住成员是谁</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartBar :seriesArr="model_3_reside" :seriesName="'同住成员是谁'" v-if="'jbqk' === model_3_activeName" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="职业情况" name="zyqk">
                        <el-row>
                            <el-col :span="8">
                                <div class="card model_3-card">
                                    <div class="card-hd">从事行业</div>
                                    <div class="card-bd">
                                        <div class="chart-box">
                                            <ul class="model_3_tbale_0 model-tbale">
                                                <li v-for="(item,index) in model_3_industry" :key="index">
                                                    <div class="model-tbale-name">{{item.name}}</div>
                                                    <div class="model-tbale-num">{{item.value}}%</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="card model_3-card">
                                    <div class="card-hd">工作单位</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'200px'}">
                                            <vChartBar :seriesArr="model_3_job" :seriesName="'工作单位'" v-if="'zyqk' === model_3_activeName" />
                                        </div>
                                        <div class="chart-list_10">
                                            <div v-for="(item,index) in model_3_job_Arr" :key="index" class="chart-item_10" :class="{'bg_none':!item.name}">
                                                <div v-for="(val,idx) in item.list" :key="idx" class="chart-item_10-bag">
                                                    <el-progress v-if="item.list" :stroke-width="8" :percentage="val.value-0" :show-text="false" />
                                                    <div v-if="item.list" class="chart-item_10-name">{{val.name}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="消费情况" name="xfqk">
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">个人税前年收入</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px',paddingTop:'40px'}">
                                            <vChartBar :seriesArr="model_3_personal" :seriesName="'个人税前年收入'" v-if="'xfqk' === model_3_activeName" />
                                            <div class="chart-info">平均收入：<span>{{model_3_personal_avg}}</span>W</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">家庭税前年收入</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px',paddingTop:'40px'}">
                                            <vChartBar :seriesArr="model_3_familyAfter" :seriesName="'家庭税前年收入'" v-if="'xfqk' === model_3_activeName" />
                                            <div class="chart-info">平均收入：<span>{{model_3_familyAfter_avg}}</span>W</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <div class="card model_3-card">
                                    <div class="card-hd">家庭税后年收入</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px',paddingTop:'40px'}">
                                            <vChartBar :seriesArr="model_3_familyBefore" :seriesName="'家庭税后年收入'" v-if="'xfqk' === model_3_activeName" />
                                            <div class="chart-info">平均收入：<span>{{model_3_familyAfter_avg}}</span>W</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_3-card model_media">
                                    <div class="card-hd">年均消费支出占比和费用</div>
                                    <div class="card-bd">
                                        <div class="chart-box" :style="{height:'250px'}">
                                            <vChartPieTwo :seriesArr="model_3_consume" :seriesPercent="model_3_consume_avg" :seriesName="'年均消费支出占比和费用'" v-if="'xfqk' === model_3_activeName" />
                                            <div class="chart-info chart-info-expense">
                                                <p class="chart-info-expense_0">消费支出：<span>{{model_3_consume_avg}}%</span></p>
                                                <p class="chart-info-expense_1">房贷/房租支出：<span>{{returnConsumePercent(1)}}%</span></p>
                                                <p class="chart-info-expense_2">教育固定支出：<span>{{returnConsumePercent(2)}}%</span></p>
                                                <p class="chart-info-expense_3">纯消费支出：<span>{{returnConsumePercent(3)}}%</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <!-- <el-tab-pane label="互联网行为（SGM）" name="sgm"></el-tab-pane> -->
                </el-tabs>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import vChartLine from '@/components/chart/ChartLine';
    import vChartBar from '@/components/chart/ChartBar';
    import vChartPie from '@/components/chart/ChartPie';
    import vChartPieTwo from '@/components/chart/ChartPieTwo';
    import vChartPieMuch from '@/components/chart/ChartPieMuch';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default {
        name: 'dashboard_model_3',
        components: {
            vChartLine,
            vChartBar,
            vChartPie,
            vChartPieTwo,
            vChartPieMuch
        },
        data() {
            return {
                model_3_select: this.$store.state.modelSelectDefault,
                model_3_options: this.$store.state.modelSelectOptions,
                model_3_activeName: "jbqk",

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

                model_3_gender: [{ name: "男", value: "0"}, { name: "女", value: "0"}],
                model_3_age: [],
                model_3_age_avg: "",
                model_3_education: [],
                model_3_education_avg: "",
                model_3_resideNum: [],
                model_3_reside: [],
                model_3_marriage: [],
                model_3_child: [],


                model_3_industry: [],
                model_3_job: [],

                model_3_job_Arr: [{
                    name: "外资/合资企业",
                    list: []
                }, {
                    name: "私营/民营企业",
                    list: []
                }, {
                    name: "国家党政机关",
                    list: []
                }, {
                    name: "事业单位",
                    list: []
                }, {
                    name: "国有/集体企业",
                    list: []
                }, {}, {}, {}, {}, {}],

                model_3_personal: [],
                model_3_personal_avg: "",
                model_3_familyBefore: [],
                model_3_familyBefore_avg: "",
                model_3_familyAfter: [],
                model_3_familyAfter_avg: "",
                model_3_consume: [
                    { name: "年均消费支出", value: "0" },
                    { name: "房贷/房租的支出", value: "0" },
                    { name: "教育固定支出", value: "0" },
                    { name: "纯消费支出", value: "0" }
                ],
                model_3_consume_avg: ""
            }
        },
        computed: {
            returnGroup() {
                return this.$store.state.year + '-' + this.$store.state.brand + '-' + this.model_3_select
            },
            returnConsumePercent() {
                return (idx) => {
                    let max = 0;
                    this.model_3_consume.forEach((item, index) => {
                        if (index > 0) {
                            max += item.value - 0;
                        }
                    })
                    return Math.round(this.model_3_consume_avg * this.model_3_consume[idx]["value"] / max * 10) / 10
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            wan(number) {
                number = number - 0;
                return Math.round(number / 1000) / 10
            },
            loadData() {
                if (this.model_3_activeName === "jbqk") {
                    //性别
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "性别"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_gender = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //年龄
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "年龄分布"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_age = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //年龄均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "年龄分布"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_age_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //学历
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "学历"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_education = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //学历均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "学历"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_education_avg = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //婚姻
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "婚姻情况"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_marriage = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //孩子数量
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "孩子数量"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_child = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //同住人口数
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "同住人口数"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_resideNum = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //同住人口数
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "同住成员是谁"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_reside = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_3_activeName === "zyqk") {

                    //从事行业
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "从事行业"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_industry = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "工作单位性质"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位-外资/合资企业
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "岗位级别-外资/合资企业"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job_Arr[0]["list"] = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位-私营/民营企业
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "岗位级别-私营/民营企业"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job_Arr[1]["list"] = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位-国家党政机关
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "岗位级别-国家党政机关"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job_Arr[2]["list"] = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位-事业单位
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "岗位级别-事业单位"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job_Arr[3]["list"] = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //工作单位-国有/集体企业
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "岗位级别-国有/集体企业"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_job_Arr[4]["list"] = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})
                } else if (this.model_3_activeName === "xfqk") {

                    //个人税前年收入
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "个人年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_personal = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //个人税前年收入均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "个人年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_personal_avg = this.wan(res.data[this.returnGroup]);
                            }
                        })
                        .catch((res) => {})

                    //家庭税前年收入
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "家庭年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_familyBefore = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //家庭税前年收入均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "家庭年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_familyBefore_avg = this.wan(res.data[this.returnGroup]);
                            }
                        })
                        .catch((res) => {})

                    //家庭税后年收入
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "家庭税后年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_familyAfter = res.data[this.returnGroup];
                            }
                        })
                        .catch((res) => {})

                    //家庭税后年收入均值
                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "家庭税后年收入"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.model_3_familyAfter_avg = this.wan(res.data[this.returnGroup]);
                            }
                        })
                        .catch((res) => {})

                    //年均消费支出占比和费用

                    this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSDataNew", Qs.stringify({
                            group: this.returnGroup,
                            block: "年均消费支出"
                        }))
                        .then((res) => {
                            if (res.status === 200) {
                                this.$axios.post(process.env.API_HOST + "/bi/geelyTest/getNCBSAverageDataNew", Qs.stringify({
                                        group: this.returnGroup,
                                        block: "年均纯消费支出"
                                    }))
                                    .then((res2) => {
                                        if (res2.status === 200) {
                                            this.model_3_consume_avg = res.data[this.returnGroup][0]["value"];
                                            this.model_3_consume = res2.data[this.returnGroup];
                                        }
                                    })
                                    .catch((res) => {})
                            }
                        })
                        .catch((res) => {})

                }
            },
            model_3_handleClick(tab, event) {
                this.loadData()
            },
            model_3_selectChange(value) {
                this.loadData()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
