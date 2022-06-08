<template>
	<div class="table3">
		<div class="header-nav"><span>数字化行为统计</span> <i class="el-icon-arrow-right"></i>  <span>车型卖点统计</span></div>
		<div class="body-middle">
			<div class="body-middle-btn">
				<span>区域</span>
				<el-select v-model="qyvalue" placeholder="请选择">
					<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
				</el-select>
				<span class="span-left">时间</span>
				<el-radio-group v-model="table3_radio">
				  <el-radio-button label="按日"></el-radio-button>
				  <el-radio-button label="按月"></el-radio-button>
				  <el-radio-button label="按年"></el-radio-button>
				</el-radio-group>
				<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
				<el-button >查询</el-button>
			</div>
			<div class="body-middle-chart">
				<div>
					<h3>热门关注车系TOP4</h3>
					<div class="table3-flex">
						<div class="table-col-4">
							<ul>
								<li v-for="(item,index) in table3_follow_Arr" :key="index">
									<div class="cx-shu"><span>{{index+1}}</span><i><img :src="'static/img/moment/table3_img0'+item.icon0+'.png'" alt=""></i></div>
									<div class="cx-text"> <h4>{{item.value}}</h4> <p>{{item.name}}</p></div>
									<div class="cx-cb"><img :src="'static/img/dashboard/02_1_car0'+item.icon+'.png'" alt=""></div>
								</li>
							</ul>
						</div>
						<div class="table-col-6">
							<h4>领克02 各区关注分布</h4>
							<div style="height: 390px;"><vChartsBar :seriesArr="table3_fenbu" :seriesName="'领克02各区关注分布'" /></div>
						</div>
					</div>
					<!-- <img src="../../../../../static/img/moment/table-img6.png"> -->
				</div>
				<div>
					<div class="table3-flex2">
						<div v-for="(item,index) in table3_flex2" :key="index">
							<img :src="'static/img/moment/table03_icon0' + (index + 1) + '.png'" alt="">
						</div>
					</div>
					<div class="table3-flex3">
						<div>
							<h3>颜色点击分布</h3>
							<div class="flex3-body" v-for="(item,i) in table3_flex3" :key="i">
								<span>{{item.name}}</span>
								<div><el-progress :stroke-width="7" :percentage="item.percent" :show-text="false"/></div>
								<span>{{item.value}}%</span>
							</div>
						</div>
						<div>
							<h3>卖点点击分布</h3>
							<div class="flex3-item">
								<div v-for="(item,i) in table3_icon">
									<i><img :src="'static/img/moment/icon'+item.icon+'.png'" alt=""></i>
									<div>{{item.value}}<span>%</span></div>
									<p>{{item.text}}</p>
								</div>
							</div>
						</div>
					</div>
					<!-- <img src="../../../../../static/img/moment/table-img7.png"> -->
				</div>
				<div>
					<h3>卖点数据TOP10</h3>
					<div class="table1-chart"><vChartBar :seriesArr="table3_maidian" :seriesName="'卖点数据TOP10'" /></div>
					<!-- <img src="../../../../../static/img/moment/table-img8.png"> -->
				</div>
				<div>
					<h3>卖点点击详情</h3>
					<div class="table3-flex">
						<div class="table-col-3">
							<ul class="model-tbale">
								<li v-for="(item,index) in table3_industry1" :key="index" :class="item.class">
									<div class="model-tbale-name">{{item.name}}</div>
									<div class="model-tbale-num">{{item.value}}</div>
								</li>
							</ul>
						</div>
						<div class="table-col-3 col-margin">
							<ul class="model-tbale">
								<li v-for="(item,index) in table3_industry2" :key="index" :class="item.class">
									<div class="model-tbale-name">{{item.name}}</div>
									<div class="model-tbale-num">{{item.value}}</div>
								</li>
							</ul>
						</div>
						<div class="table-col-3">
							<ul class="model-tbale">
								<li v-for="(item,index) in table3_industry3" :key="index" :class="item.class">
									<div class="model-tbale-name">{{item.name}}</div>
									<div class="model-tbale-num">{{item.value}}</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vChartBar from '@/components/chart/ChartBar';
	import vChartsBar from '@/components/charts/ChartBar';

	import bus from '@/components/common/bus';

	export default {
		components: {
		    vChartBar,
			vChartsBar
		},
		data() {
		  return {
			table3_radio: '按日',
			qyoptions: [{
			  qyvalue: '选项1',
			  qylabel: '全国'
			}],
			qyvalue:'选项1',

			time:['2018-07-15','2018-07-21'],

			table3_follow_Arr: [{
				icon0: "1",
				value:"55238",
			    name: "领克02",
			    icon: "2",
			},
			{
				icon0: "2",
				value:"43215",
			    name: "领克01",
			    icon: "1",
			},
			{
				icon0: "2",
				value:"42795",
			    name: "领克03",
			    icon: "3",
			},{
				icon0: "2",
				value:"34465",
			    name: "领克01 PHEV",
			    icon: "4",
			}],
			table3_fenbu:[
				{name:'一区',value:66},
				{name:'二区',value:100},
				{name:'三区',value:78},
				{name:'四区',value:69},
				{name:'五区',value:82},
				{name:'六区',value:88},
				{name:'七区',value:69.6}
			],

			table3_flex2:[
				{icon:"1"},
				{icon:"2"},
				{icon:"3"},
				{icon:"4"}
			],

			table3_flex3:[
				{
					name:"蓝黑",
					percent:63.7,
					value:"63.7"
				},{
					name:"蓝",
					percent:20.8,
					value:"20.8"
				},{
					name:"灰",
					percent:10.0,
					value:"10.0"
				},
			],

			table3_icon:[
				{icon:"01",value:"66",text:"外观"},{icon:"02",value:"10",text:"内饰"},
				{icon:"03",value:"7",text:"车身设计"},{icon:"04",value:"5",text:"卖点视频"},
				{icon:"05",value:"2",text:"电商入口"},{icon:"06",value:"2",text:"安全科技"},
				{icon:"07",value:"2",text:"互联技术"},{icon:"08",value:"2",text:"交互体验"},
				{icon:"09",value:"2",text:"电驱系统"},{icon:"10",value:"2",text:"语音交互"}
			],

			table3_maidian:[
				{name:'2.0T+9AT最尖端的动力组合',value:100},{name:'车况检测',value:90},
				{name:'2.0T SIDI直喷涡轮增压发动机+9速HYDRA-MATIC智能变速箱',value:80},
				{name:'全新小型发动机架构',value:70},{name:'RPA倒车雷达',value:60},
				{name:'飞翼式镀铬进气格栅',value:50},{name:'BFUI一体化车身',value:40},
				{name:'车载4G LTE Wi-Fi',value:30},{name:'车辆远程控制/查看/提醒功能',value:20},
				{name:'0-60公里直线加速操作演示',value:10}
			],
			table3_industry1:[
				{name:'外观',value:'',class:'title'},
				{name:'玛瑙红',value:'55238'},
				{name:'雪域白',value:'43215'},
				{name:'星辉蓝',value:'42795'},
				{name:'陨铁灰',value:'34465'},
				{name:'极光蓝',value:'24918'},
				{name:'内饰',value:'',class:'title'},
				{name:'总点击量',value:'24918'},
				{name:'车身设计',value:'',class:'title'},
				{name:'宽敞通透的乘坐空间',value:'151'},
				{name:'一体式全景天幕',value:'133'},
				{name:'充足的后备箱容积',value:'172'},
				{name:'创新比例的车身布局',value:'2735'},
				{name:'气动美学设计精髓',value:'243'},
				{name:'销售宝典',value:'',class:'title'},
				{name:'总点击量',value:'60'},
				{name:'OTA远程升级',value:'59'}
			],
			table3_industry2:[
				{name:'互联技术',value:'',class:'title'},
				{name:'组团出行功能',value:'114'},
				{name:'手机蓝牙钥匙',value:'484'},
				{name:'智能云端语音识别',value:'63'},
				{name:'车联应用流量终身免费+车载4G热点',value:'167'},
				{name:'高德实时导航系统',value:'98'},
				{name:'OTA远程升级',value:'59'},
				{name:'电驱系统',value:'',class:'title'},
				{name:'极致宁静的驾乘感受',value:'331'},
				{name:'3种驾驶模式x3档能量回收',value:'641'},
				{name:'安全科技',value:'',class:'title'},
				{name:'LDW车道偏离预警',value:'149'},
				{name:'FCA前方碰撞预警+CMB碰撞缓解系统',value:'46'},
				{name:'SBZA侧盲区预警',value:'117'},
				{name:'APA自动泊车系统',value:'62'},
				{name:'满足最高功能安全等级ASILD',value:'383'},
				{name:'远超国标的电池安全防护',value:'142'},
				{name:'2018版五星电动车安全标准打造',value:'51'},
			],
			table3_industry3:[
				{name:'卖点视频',value:'',class:'title'},
				{name:'外观篇',value:'1250'},
				{name:'动力篇',value:'266'},
				{name:'智能出行篇',value:'384'},
				{name:'智能互联篇',value:'294'},
				{name:'语音交互',value:'',class:'title'},
				{name:'你好别克',value:'43'},
				{name:'帮助',value:'3'},
				{name:'音乐/听歌/我想听歌',value:'43'},
				{name:'导航/吃饭/去吃饭',value:'35'},
				{name:'电商入口',value:'',class:'title'},
				{name:'总点击量',value:'113'},
				{name:'交互体验',value:'',class:'title'},
				{name:'参与体验次数',value:'276'},
				{name:'留资分享次数',value:'0'},
				{name:'参与调研次数',value:'0'},
				{name:'H5链接打开次数',value:'0'}
			]

			};
		},
	}
</script>

<style lang="scss">
	.table3{
		.table-col-3{
			padding-left: 10px;
			.model-tbale{
				padding-top: 0;
				.title{
					padding-left: 0px;
				}
				>li{
					position: relative;
					height: 31px;
					font-weight: 700;
					padding-left: 15px;
					&:before{
						content: "";
						position: absolute;
						top: 50%;
						right: 90px;
						width: calc(100% - 120px);
						height: 1px;
						border-top-width: 1px;
						border-top-style: solid;
					}
				}
			}
		}
	}
</style>
