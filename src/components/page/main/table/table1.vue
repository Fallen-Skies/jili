<template>
	<div class="table1">
		<div class="header-nav"><span>数字化行为统计</span> <i class="el-icon-arrow-right"></i>  <span>使用追踪</span></div>
		<div class="body-middle">
			<div class="body-middle-btn">
				<span>区域</span>
				<el-select v-model="qyvalue" placeholder="请选择">
					<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
				</el-select>
				<span class="span-left">时间</span>
				<el-radio-group v-model="table1_radio">
				  <el-radio-button label="按日"></el-radio-button>
				  <el-radio-button label="按月"></el-radio-button>
				  <el-radio-button label="按年"></el-radio-button>
				</el-radio-group>
				<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
				<el-button >查询</el-button>
			</div>
			<div class="body-middle-chart">
				<div>
					<div class="body-middle-flex">
						<div class="col-1">
							<h3>活跃经销商</h3>
							<div class='box-body model_0'>
							    <ul class="model_0-list">
							        <li v-for="(item,index) in table1_Arr" :key="index">
							            <div class="model_0-item-img">
							                <img :src="'static/img/moment/table01_icon0' + (index + 1) + '.png'" alt="">
							            </div>
							            <div class="model_0-item-name">{{item.name}}</div>
							            <div class="model_0-item-txt">
							                <div class="model_0-item-num">
							                    <countTo :startVal='startVal' :endVal='table1_endVal[index]' separator='' ref="countTo"></countTo>{{index===2?'%':''}}
							                </div>
							               <!-- <div class="model_0-item-change">环比：<span :class="{green:item.change>0,grey:item.change<0}">{{item.change&lt;0?-item.change:item.change}}%</span>
							                </div> -->
							            </div>
							        </li>
							    </ul>
							</div>
						</div>
						<div class="col-2">
							<h3>点击车型TOP3</h3>
							<div class="card-bd">
							    <ul class="model_2-follow-list">
							        <li v-for="(item,index) in table1_follow_Arr" :key="index">
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
						<div class="col-3">
							<div class="chart-box" :style="{height:'460px'}"><vChartMap/></div>
						</div>
					</div>
				</div>
				<div>
					<h3>车型数据TOP10</h3>
					<div class="table1-chart"><vChartBar :seriesArr="table1_chexing" :seriesName="'车型数据TOP10'" /></div>
				</div>
				<div>
					<h3>卖点数据TOP10</h3>
					<div class="table1-chart"><vChartBar :seriesArr="table1_maidian" :seriesName="'卖点数据TOP10'" /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//数字滚动
	import countTo from 'vue-count-to';

	import vChartBar from '@/components/chart/ChartBar';
	import vChartMap from '@/components/chart/ChartMap';

	import bus from '@/components/common/bus';

	export default {
		components: {
		    vChartBar,
			vChartMap,
			countTo
		},
		data() {
		  return {
			table1_radio: '按日',
			qyoptions: [{
			  qyvalue: '选项1',
			  qylabel: '全国'
			}],
			qyvalue:'选项1',

			time:['2018-07-15','2018-07-21'],

			startVal: 0,
			endVal: 0,
			countToAuto: false,
			table1_endVal: [0, 0, 0],
			table1_Arr: [{
			    name: "活跃经销商数",
			    value: 113,
			    change: 5.72,
			},
			{
			    name: "活跃设备总数",
			    value: 7012,
			    change: -4.72,
			},
			{
			    name: "二次进店客户",
			    value: 53,
			    change: 3.72,
			}],

			table1_follow_Arr: [{
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

			table1_chexing:[
				{name:'君威',value:100},{name:'英朗',value:90},
				{name:'昂科威',value:80},{name:'GL8 ES 豪华商务车',value:70},
				{name:'GL6',value:60},{name:'君越',value:50},
				{name:'全新一代凯越',value:40},{name:'阅朗',value:30},
				{name:'威朗',value:20},{name:'昂科拉 Encore',value:10}
			],
			table1_maidian:[
				{name:'2.0T+9AT最尖端的动力组合',value:100},{name:'车况检测',value:90},
				{name:'2.0T SIDI直喷涡轮增压发动机+9速HYDRA-MATIC智能变速箱',value:80},
				{name:'全新小型发动机架构',value:70},{name:'RPA倒车雷达',value:60},
				{name:'飞翼式镀铬进气格栅',value:50},{name:'BFUI一体化车身',value:40},
				{name:'车载4G LTE Wi-Fi',value:30},{name:'车辆远程控制/查看/提醒功能',value:20},
				{name:'0-60公里直线加速操作演示',value:10}
			]
			};
		},
		computed: {},
        methods: {},
		mounted() {
		    //开始动画调整页面
		    setTimeout(() => {
		        this.table1_endVal.forEach((item, index, arr) => {
		            this.$set(arr, index, this.table1_Arr[index]["value"]);
		        })
		    }, 500)
		},
	}
</script>

<style lang="scss">
.table1{
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
			left: 26px;
		}
		.model_0-item-name{
			position: absolute;
			top: 45px;
			left: 100px;
			font-family: MicrosoftYaHei-Bold;
			font-size: 18px;
			line-height: 24px;
			letter-spacing: 0.7px;
		}
		.model_0-item-num{
			position: absolute;
			top: 24px;
			right: 30px;
			font-size: 16px;
			span{
				font-size: 40px;
				line-height: 72px;
				letter-spacing: -1px;
			}
		}
	}
}
</style>
