<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class='box-head'>
                <h3 class="box-head-style0">近一周4S店客流情况</h3>
            </div>
            <div class='box-body model_0'>
                <ul class="model_0-list">
                    <li v-for="(item,index) in model_0_Arr" :key="index">
                        <div class="model_0-item-img">
                            <img :src="'static/img/dashboard/01_1_icon0' + (index + 1) + '.png'" alt="">
                        </div>
                        <div class="model_0-item-name">{{item.name}}</div>
                        <div class="model_0-item-txt">
                            <div class="model_0-item-num">
                                <countTo :startVal='startVal' :endVal='model_0_endVal[index]' separator=',' ref="countTo"></countTo>人次
                            </div>
                            <div class="model_0-item-change">环比：<span :class="{green:item.change>0,grey:item.change<0}">{{item.change&lt;0?-item.change:item.change}}%</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="12">
            <div class='box-head'>
                <h3 class="box-head-style0">近一周展位优选Top3</h3>
            </div>
		  <el-tabs v-model="model_1_activeName"  @tab-click="model_1_handleClick" class="box-head-nav box-body box-body-nav">
				<!-- <el-tab-pane label="新视界" name="xsj">
					<div class=' model_1'>
						<el-row class="model_1-list_head">
							<el-col :span="4">城市</el-col>
							<el-col :span="4">参展人次</el-col>
							<el-col :span="4">高意向客流</el-col>
							<el-col :span="4"> 二次参展客流</el-col>
							<el-col :span="4">单客流成本</el-col>
							<el-col :span="4">活动效能</el-col>
						</el-row>
						<div class="model_1-list">
							<el-row class="model_1-item" v-for="(item,index) in model_1_Arr" :key="index">
								<el-col :span="4">
									<div class="model_1-item-img">
										<img :src="'static/img/dashboard/01_2_city_'+item.icon+'.png'" alt="">
									</div>
									<div class="model_1-item-name">{{item.name}}</div>
									<div class="model_1-item-icon">
										<img :src="'static/img/dashboard/01_2_icon0'+(index+1)+'.png'" alt="">
									</div>
								</el-col>
								<el-col :span="4">{{item.value1}}万人</el-col>
								<el-col :span="4">{{item.value2}}万人</el-col>
								<el-col :span="4">{{item.value3}}万人</el-col>
								<el-col :span="4">{{item.value4}}</el-col>
								<el-col :span="4">{{item.value5}}</el-col>
							</el-row>
						</div>
					</div>
				</el-tab-pane> -->
				 <el-tab-pane label="车展" name="cz">
					<div class='model_1'>
						<el-row class="model_1-list_head box-flex">
							<el-col :span="4">城市</el-col>
							<el-col :span="4">参展人次</el-col>
							<el-col :span="4">高意向客流</el-col>
							<el-col :span="4"> 二次参展客流</el-col>
							<el-col :span="4">单客流成本</el-col>
							<el-col :span="4">活动效能</el-col>
						</el-row>
						<div class="model_1-list">
							<el-row class="model_1-item box-flex" v-for="(item,index) in model_2_Arr" :key="index">
								<el-col :span="4" class="box-flex">
									<div class="model_1-item-img">
										<img :src="'static/img/dashboard/01_2_city_'+item.icon+'.png'" alt="">
									</div>
									<div class="model_1-item-name">{{item.name}}</div>
									<div class="model_1-item-icon">
										<img :src="'static/img/dashboard/01_2_icon0'+(index+1)+'.png'" alt="">
									</div>
								</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value1)}}</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value2)}}</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value3)}}</el-col>
								<el-col :span="4">{{item.value4}}</el-col>
								<el-col :span="4">{{item.value5}}</el-col>
							</el-row>
						</div>
					</div>
				</el-tab-pane>
				 <el-tab-pane label="移动展厅" name="ydzt" >
					<div class='model_1'>
						<el-row class="model_1-list_head box-flex">
							<el-col :span="4">城市</el-col>
							<el-col :span="4">参展人次</el-col>
							<el-col :span="4">高意向客流</el-col>
							<el-col :span="4"> 二次参展客流</el-col>
							<el-col :span="4">单客流成本</el-col>
							<el-col :span="4">活动效能</el-col>
						</el-row>
						<div class="model_1-list">
							<el-row class="model_1-item box-flex" v-for="(item,index) in model_3_Arr" :key="index">
								<el-col :span="4" class="box-flex">
									<div class="model_1-item-img">
										<img :src="'static/img/dashboard/01_2_city_'+item.icon+'.png'" alt="">
									</div>
									<div class="model_1-item-name">{{item.name}}</div>
									<div class="model_1-item-icon">
										<img :src="'static/img/dashboard/01_2_icon0'+(index+1)+'.png'" alt="">
									</div>
								</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value1)}}</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value2)}}</el-col>
								<el-col :span="4">{{$commonJs.formatNumber(item.value3)}}</el-col>
								<el-col :span="4">{{item.value4}}</el-col>
								<el-col :span="4">{{item.value5}}</el-col>
							</el-row>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
        </el-col>
    </el-row>
</template>

<script>
    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';

    export default {
        name: 'dashboard_model_0_1',
        components: {
            countTo
        },
        data() {
            return {
                myChart: {},
                startVal: 0,
                endVal: 0,
                countToAuto: false,
                model_0_endVal: [0, 0, 0],
				model_1_activeName: 'cz',
                model_0_Arr: [{
                    name: "总客流数",
                    value: 11302,
                    change: 5.72,
                },
                {
                    name: "高意向客流数",
                    value: 7812,
                    change: -4.72,
                },
                {
                    name: "二次进店客户",
                    value: 5472,
                    change: 3.72,
                }],

                model_1_Arr: [{
                    name: "上海",
                    icon: "sh",
                    value1: 3.6,
                    value2: 2.4,
                    value3: 2.4,
                    value4: 9.8,
                    value5: 2.7
                },
                {
                    name: "北京",
                    icon: "bj",
                    value1: 3.6,
                    value2: 2.4,
                    value3: 2.4,
                    value4: 9.8,
                    value5: 2.7
                },
                {
                    name: "广州",
                    icon: "gz",
                    value1: 3.6,
                    value2: 2.4,
                    value3: 2.4,
                    value4: 9.8,
                    value5: 2.7
                }],

                model_2_Arr: [{
                    name: "上海",
                    icon: "sh",
                    value1: 36152,
                    value2: 21084,
                    value3: 15846,
                    value4: 10.86,
                    value5: 0.52
                },
                {
                    name: "北京",
                    icon: "bj",
                    value1: 24612,
                    value2: 17421,
                    value3: 10062,
                    value4: 11.2,
                    value5: 0.44
                },
                {
                    name: "广州",
                    icon: "gz",
                    value1: 23965,
                    value2: 12465,
                    value3: 9462,
                    value4: 9.84,
                    value5: 0.41
                }],

                model_3_Arr: [{
                    name: "上海",
                    icon: "sh",
                    value1: 29415,
                    value2: 21563,
                    value3: 10062,
                    value4: 9.42,
                    value5: 0.46
                },
                {
                    name: "北京",
                    icon: "bj",
                    value1: 25640,
                    value2: 18745,
                    value3: 9452,
                    value4: 10.1,
                    value5: 0.43
                },
                {
                    name: "广州",
                    icon: "gz",
                    value1: 21065,
                    value2: 16302,
                    value3: 7201,
                    value4: 8.62,
                    value5: 0.39
                }],
            }

        },
        computed: {
        },
        mounted() {
            //开始动画调整页面
            setTimeout(() => {
                this.model_0_endVal.forEach((item, index, arr) => {
                    this.$set(arr, index, this.model_0_Arr[index]["value"]);
                })
            }, 500)
        },
        methods: {
			model_1_handleClick(tab, event) {
			}
        }
    }
</script>

<style lang="scss" scoped>
</style>
