<template>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="model_2_time" @change="model_2_redioChange">
                <el-radio v-model="model_2_time" disabled label="week" border>近一周</el-radio>
                <!-- <el-radio v-model="model_2_time" label="month" v-bind:disabled="model_2_disabled()" border>近一月</el-radio> -->
                <el-radio v-model="model_2_time" disabled label="month" border>近一月</el-radio>
            </div>
            <el-tabs v-model="model_2_activeName" @tab-click="model_2_handleClick" class="box-head-nav">
                <el-tab-pane label="数字化体验地图" name="szhdt" lazy=''>
                    <div class='box-body model_2'>
                        <el-row>
                            <el-col :span="12">
                                <div class="chart-box" :style="{height:'500px'}">
                                    <vChartMap v-if="'szhdt' === model_2_activeName" />
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_2-card">
                                    <div class="card-hd">热门关注车系TOP3</div>
                                    <div class="card-bd">
                                        <ul class="model_2-follow-list">
                                            <li v-for="(item,index) in model_2_follow_Arr" :key="index">
                                                <div class="model_2-follow-item-rank">
                                                    <span>{{index+1}}</span><i><img :src="'static/img/dashboard/02_1_img01.png'" alt=""></i>
                                                </div>
                                                <div class="model_2-follow-item-name">{{item.name}}</div>
                                                <div class="model_2-follow-item-img">
                                                    <img :src="'static/img/dashboard/02_1_car0'+item.icon+'.png'" alt="">
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="card model_2-card">
                                    <div class="card-hd">热门卖点点击TOP5</div>
                                    <div class="card-bd">
                                        <ul class="model_2-click-list">
                                            <li v-for="(item,index) in model_2_click_Arr" :key="index">
                                                <div class="model_2-click-item-rank">
                                                    <img :src="'static/img/dashboard/02_1_cion0' + (index + 1) + '.png'">
                                                </div>
                                                <div class="model_2-click-item-num">{{$commonJs.formatNumber(item.value)}}次</div>
                                                <div class="model_2-click-item-name" :title="item.name">{{item.name}}</div>
                                                <el-progress :stroke-width="8" :percentage="item.percent" :show-text="false" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="活动地图" name="hddt">
                    <div class='box-body model_2'>
                        <el-row>
                            <el-col :span="12">
                                <div class="chart-box" :style="{height:'500px'}">
                                    <!-- <v-chart :options="echartsMap" v-if="'hddt' === model_2_activeName"/> -->
                                    <vChartMap2 v-if="'hddt' === model_2_activeName" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="card model_2-card">
                                    <div class="card-hd">活动客流TOP3</div>
                                    <div class="card-bd">
                                        <ul class="model_2-hd-list">
                                            <li v-for="(item,index) in model_2_hd_Arr" :key="index">
                                                <div class="model_2-hd-item-name"><img :src="'static/img/dashboard/02_1_cion0'+(index+1)+'.png'" alt="">{{item.name}}</div>
                                                <div class="model_2-hd-item-city">{{item.city}}</div>
                                                <div class="model_2-hd-item-unit">{{item.unit1}}</div>
                                                <div class="model_2-hd-item-value">{{item.value1}}</div>
                                                <div class="model_2-hd-item-progress el-progress_type0">
                                                    <el-progress :stroke-width="8" :percentage="item.percent" :show-text="false" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-hd">单客流成本TOP3</div>
                                    <div class="card-bd">
                                        <ul class="model_2-hd-list">
                                            <li v-for="(item,index) in model_2_hd_Arr" :key="index">
                                                <div class="model_2-hd-item-name"><img :src="'static/img/dashboard/02_1_cion0'+(index+1)+'.png'" alt="">{{item.name}}</div>
                                                <div class="model_2-hd-item-city">{{item.city}}</div>
                                                <div class="model_2-hd-item-unit">{{item.unit2}}</div>
                                                <div class="model_2-hd-item-value">{{item.value2}}</div>
                                                <div class="model_2-hd-item-progress el-progress_type0">
                                                    <el-progress :stroke-width="8" :percentage="item.percent" :show-text="false" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-hd">展位优选TOP3</div>
                                    <div class="card-bd">
                                        <ul class="model_2-hd-list">
                                            <li v-for="(item,index) in model_2_hd_Arr" :key="index">
                                                <div class="model_2-hd-item-name"><img :src="'static/img/dashboard/02_1_cion0'+(index+1)+'.png'" alt="">{{item.name}}</div>
                                                <div class="model_2-hd-item-city">{{item.city}}</div>
                                                <div class="model_2-hd-item-unit">{{item.unit3}}</div>
                                                <div class="model_2-hd-item-value">{{item.value3}}</div>
                                                <div class="model_2-hd-item-progress el-progress_type0">
                                                    <el-progress :stroke-width="8" :percentage="item.percent" :show-text="false" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>

<script>
    import vChartMap from '@/components/chart/ChartMap';
    import vChartMap2 from '@/components/chart/ChartMap2';

    import bus from '@/components/common/bus';

    export default {
        name: 'dashboard_model_2',
        components: {
            vChartMap,
            vChartMap2
        },
        data() {
            return {
                model_2_activeName: 'szhdt',

                model_2_time: 'week',

                model_2_follow_Arr: [{
                    name: "领克02",
                    icon: "2",
                },
                {
                    name: "领克01",
                    icon: "1",
                },
                {
                    name: "领克03",
                    icon: "3",
                }],

				model_2_click_Arr:[],

                model_2_hd_Arr: [{
                    name: "领克车展上海站",
                    city: "上海",
                    unit1: "参展人次",
					unit2: "客流成本",
					unit3: "活动效能",
                    value1: "5.1万人",
					value2: 10.9,
					value3: "2.70",
                    percent: 60
                },
                {
                    name: "领克车展北京站",
                    city: "北京",
					unit1: "参展人次",
                    unit2: "客流成本",
                    unit3: "活动效能",
                    value1: "4万人",
                    value2: 10.8,
                    value3: "2.16",
                    percent: 50
                },
                {
                    name: "领克车展广州站",
                    city: "广州",
					unit1: "参展人次",
                    unit2: "客流成本",
                    unit3: "活动效能",
                    value1: "3.6万人",
                    value2: 9.8,
                    value3: "2.00",
                    percent: 40
                }],

            }
        },
        computed: {

		},
        mounted() {
			this.datatime();
		},
        methods: {
			datatime(){
				if (this.model_2_time === 'week') {
			         this.model_2_click_Arr=[{
			            name: "智能云端语音识别",
			            value: "39452",
			            percent: 60
			        },
			        {
			            name: "3种驾驶模式×3档能量回收",
			            value: "34015",
			            percent: 50
			        },
			        {
			            name: "充足的后备箱容积",
			            value: "31062",
			            percent: 40
			        },
			        {
			            name: "自动泊车系统",
			            value: "28713",
			            percent: 30
			        },
			        {
			            name: "行人防碰撞",
			            value: "27961",
			            percent: 20
			        }];
					// console.log("week");
					return this.model_2_click_Arr;
				} else if(this.model_2_time === 'month'){
					this.model_2_click_Arr=[{
						name: "3种驾驶模式×3档能量回收",
						value: "144826",
						percent: 60
					},{
					    name: "智能云端语音识别",
					    value: "136524",
					    percent: 50
					},
					{
					    name: "充足的后备箱容积",
					    value: "98645",
					    percent: 40
					},
					{
					    name: "自动泊车系统",
					    value: "79452",
					    percent: 30
					},
					{
					    name: "行人防碰撞",
					    value: "68942",
					    percent: 20
					}];
					// console.log("month");
					return this.model_2_click_Arr;
				};
			},
			model_2_disabled(){
				if (this.model_2_activeName === "szhdt") {
					// console.log("数字化体验地图");
					return false;
				} else if(this.model_2_activeName === "hddt"){
					// console.log("活动地图");
					return true;
				}
			},model_2_disabled2(){
				if (this.model_2_activeName === "szhdt") {

				} else if(this.model_2_activeName === "hddt"){
					return this.model_2_time="week";
				}
			},
			model_2_handleClick(tab, event) {
				this.model_2_disabled();
				this.model_2_disabled2();
				this.datatime();
			},
			model_2_redioChange(value) {
				this.datatime();
			}
        }
    }
</script>

<style lang="scss" scoped>
    .model_2_time {
        position: absolute;
        top: 12px;
        right: 10px;
        z-index: 1;
    }
</style>
