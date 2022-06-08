<template>
    <div class="marketing">
        <div class="header-nav"><span>营销诊断</span></div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">营销诊断</h3>
        </div>
        <div class="marketing-body body-middle">
            <div class="body-middle-btn" v-if="marketing_activeName === 'dqzd'">
            	<span>区域</span>
            	<el-select v-model="qyvalue" placeholder="请选择">
            		<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
            	</el-select>
            	<span class="span-left">时间</span>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <div class="body-middle-btn" v-if="marketing_activeName === 'zddb'">
                <span>区域一</span>
                <el-select v-model="qy1value" placeholder="请选择">
                	<el-option v-for="item in qy1options" :key="item.qy1value" :label="item.label" :value="item.qy1value"></el-option>
                </el-select>
            	<span class="span-left">区域二</span>
            	<el-select v-model="qy2value" placeholder="请选择">
            		<el-option v-for="item in qy2options" :key="item.qy2value" :label="item.label" :value="item.qy2value"></el-option>
            	</el-select>
            	<span class="span-left">时间</span>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <el-tabs v-model="marketing_activeName" @tab-click="marketing_handleClick" class="box-head-nav box-body-nav">
                <el-tab-pane label="单区诊断" name="dqzd">
                    <div class="body-middle-chart">
                        <div>
                            <h3>诊断内容</h3>
                            <div class="marketing-flex-zd">
                                <div>
                                    <div class="body-zd1">
                                        <div>
                                            <div class="marketing_circle-canvas">
                                               <canvas id="marketing_circle-canvas1" width="160" height="160"></canvas>
                                            </div>
                                            <div class="marketing_circle-num">
                                                <countTo :startVal='0' :endVal='60' separator=',' ref="countTo" v-if="marketing_activeName === 'dqzd'"></countTo>
                                            </div>
                                            <div class="body-zd1-text">
                                                <p><span>亚健康</span></p>
                                                <div>环比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon04.png"></img> 14%</span>
                                                同比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon03.png"> 4%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>营销健康指数</h4>
                                            <div class="body-zd1-jdt" style="margin-top: 20px;">
                                                <div v-for="(item,index) in marketing_health">
                                                    <span>{{item.name}}</span>
                                                    <el-progress :stroke-width="7" :percentage="item.value" :show-text="false"/>
                                                    <span>{{item.value}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                     <div class="body-zd2">
                                        <div class="body-zd2-text" v-for="(item,index) in marketing_zd_arr" :key="index">
                                            <div>
                                              <img :src="'static/img/marketing/02_icon0' + (index + 1) + '.png'">
                                              <h5>{{item.name}}</h5>
                                            </div>
                                          <ul><li v-for="items in item.list">{{items.vaule}}</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <el-row>
                                <el-col :span="12" class="body-padding-right boder-right">
                                    <h3>近期进店客流趋势
                                        <el-radio-group v-model="marketing_radio">
                                          <el-radio-button label="总客流趋势"></el-radio-button>
                                          <el-radio-button label="潜客趋势"></el-radio-button>
                                        </el-radio-group>
                                    </h3>
                                    <div :style="{height:'340px'}">
                                         <vChartLineNewTwo :seriesArr="marketing_jd_Arr" :seriesName="['总客流趋势','高意向客流趋势']" v-if="marketing_activeName === 'dqzd'" />
                                    </div>
                                </el-col>
                                <el-col :span="12" class="body-padding-left">
                                     <h3>各店交易统计</h3>
                                    <div :style="{height:'340px'}">
                                        <vChartLineNew :seriesArr="marketing_gd_Arr" :seriesName="'各店成交'" v-if="marketing_activeName === 'dqzd'" />
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="诊断对比" name="zddb">
                    <div class="body-middle-chart">
                        <div class="chart-div">
                            <div class="marketing-flex-zd">
                                <!-- 领克1区 -->
                                <div>
                                    <h3>领克1区-诊断内容</h3>
                                    <div class="body-zd1">
                                        <div>
                                            <div class="marketing_circle-canvas">
                                               <canvas id="marketing_circle-canvas2" width="160" height="160"></canvas>
                                            </div>
                                            <div class="marketing_circle-num">
                                                <countTo :startVal='0' :endVal='60' separator=',' ref="countTo" v-if="marketing_activeName === 'zddb'"></countTo>
                                            </div>
                                            <div class="body-zd1-text">
                                                <p><span>亚健康</span></p>
                                                <div>环比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon04.png"></img> 14%</span>
                                                同比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon03.png"> 4%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>领克1区-营销健康指数</h4>
                                            <div class="body-zd1-jdt">
                                                <div><span>领克1区</span><el-progress :stroke-width="7" :percentage="60" :show-text="false"/><span>60</span></div>
                                                <!-- <div><span>全国</span><el-progress :stroke-width="7" :percentage="40" :show-text="false"/><span>40</span></div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body-zd2">
                                        <div class="body-zd2-text" v-for="(item,index) in marketing_zd_arr" :key="index">
                                            <div>
                                              <img :src="'static/img/marketing/02_icon0' + (index + 1) + '.png'">
                                              <h5>{{item.name}}</h5>
                                            </div>
                                          <ul><li v-for="items in item.list">{{items.vaule}}</li></ul>
                                        </div>
                                    </div>
                                    <p></p>
                                    <el-row>
                                        <el-col :span="24">
                                            <h3>领克1区-各店客流统计
                                                <el-radio-group v-model="marketing_radio">
                                                  <el-radio-button label="总客流趋势"></el-radio-button>
                                                  <el-radio-button label="潜客趋势"></el-radio-button>
                                                </el-radio-group>
                                            </h3>
                                            <div :style="{height:'340px'}">
                                                 <vChartLineNewTwo :seriesArr="marketing_jd_Arr" :seriesName="['总客流趋势','高意向客流趋势']" v-if="marketing_activeName === 'zddb'" />
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <p></p>
                                    <el-row>
                                        <el-col :span="24">
                                             <h3>领克1区-各店交易统计</h3>
                                            <div :style="{height:'340px'}">
                                                <vChartLineNew :seriesArr="marketing_gd_Arr" :seriesName="'各店成交'" v-if="marketing_activeName === 'zddb'" />
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <!-- 领克2区 -->
                                <div>
                                    <h3>领克2区-诊断内容</h3>
                                    <div class="body-zd1">
                                        <div>
                                            <div class="marketing_circle-canvas">
                                               <canvas id="marketing_circle-canvas3" width="160" height="160"></canvas>
                                            </div>
                                            <div class="marketing_circle-num">
                                                <countTo :startVal='0' :endVal='60' separator=',' ref="countTo" v-if="marketing_activeName === 'zddb'"></countTo>
                                            </div>
                                            <div class="body-zd1-text">
                                                <p><span>亚健康</span></p>
                                                <div>环比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon04.png"></img> 14%</span>
                                                同比：
                                                <span><img src="../../../../../static/img/marketing/01_1_icon03.png"> 4%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>领克2区-营销健康指数</h4>
                                            <div class="body-zd1-jdt">
                                                <div><span>领克1区</span><el-progress :stroke-width="7" :percentage="60" :show-text="false"/><span>60</span></div>
                                                <!-- <div><span>全国</span><el-progress :stroke-width="7" :percentage="40" :show-text="false"/><span>40</span></div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body-zd2">
                                        <div class="body-zd2-text" v-for="(item,index) in marketing_zd_arr" :key="index">
                                            <div>
                                              <img :src="'static/img/marketing/02_icon0' + (index + 1) + '.png'">
                                              <h5>{{item.name}}</h5>
                                            </div>
                                          <ul><li v-for="items in item.list">{{items.vaule}}</li></ul>
                                        </div>
                                    </div>
                                    <p></p>
                                    <el-row>
                                        <el-col :span="24">
                                            <h3>领克2区-各店客流统计
                                                <el-radio-group v-model="marketing_radio">
                                                  <el-radio-button label="总客流趋势"></el-radio-button>
                                                  <el-radio-button label="潜客趋势"></el-radio-button>
                                                </el-radio-group>
                                            </h3>
                                            <div :style="{height:'340px'}">
                                                 <vChartLineNewTwo :seriesArr="marketing_jd_Arr" :seriesName="['总客流趋势','高意向客流趋势']" v-if="marketing_activeName === 'zddb'" />
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <p></p>
                                    <el-row>
                                        <el-col :span="24">
                                             <h3>领克2区-各店交易统计</h3>
                                            <div :style="{height:'340px'}">
                                                <vChartLineNew :seriesArr="marketing_gd_Arr" :seriesName="'各店成交'" v-if="marketing_activeName === 'zddb'" />
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">营销透视</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
            	<span>区域</span>
            	<el-select v-model="qyvalue" placeholder="请选择">
            		<el-option v-for="item in qyoptions" :key="item.qyvalue" :label="item.qylabel" :value="item.qyvalue"></el-option>
            	</el-select>
            	<span class="span-left">时间</span>
            	<el-date-picker v-model="time" type="daterange" start-placeholder="" end-placeholder="" class="body-middle-btn-time"></el-date-picker>
            	<el-button >查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="boder-right body-padding-right">
                            <h3>领克1区客流人群分布（性别）</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="marketing_sex_Arr" :seriesName="'近一周客流人群分布（性别）'" :titleTxt="''" />
                                    <div class="chart-info-gender chart-info-gender2">
                                        <p class="chart-info-gender-man">男占比：<span>{{marketing_sex_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-gender-woman">女占比：<span>{{marketing_sex_Arr[1]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3>领克1区客流人群分布（年龄段）</h3>
                            <div class="card-bd">
                                <div class="chart-box" :style="{width:'400px',height:'200px'}">
                                    <vChartPie :seriesArr="marketing_age_Arr" :seriesName="'近一周客流人群分布（年龄段）'" :colorArr="marketing_age_Color" :titleTxt="''" />
                                    <div class="chart-info-buy chart-info-buy2">
                                        <p class="chart-info-buy_0">18-24：<span>{{marketing_age_Arr[0]["value"]}}%</span></p>
                                        <p class="chart-info-buy_1">25-34：<span>{{marketing_age_Arr[1]["value"]}}%</span></p>
                                        <p class="chart-info-buy_2">35-44：<span>{{marketing_age_Arr[2]["value"]}}%</span></p>
                                        <p class="chart-info-buy_3">45-54：<span>{{marketing_age_Arr[3]["value"]}}%</span></p>
                                        <p class="chart-info-buy_4">55+：<span>{{marketing_age_Arr[4]["value"]}}%</span></p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="body-middle" style="margin-top: 20px;">
            <div class="body-middle-btn">
            	<span>性别</span>
            	<el-select v-model="sex_value" placeholder="请选择">
            		<el-option v-for="item in sex_options" :key="item.sex_value" :label="item.label" :value="item.sex_value"></el-option>
            	</el-select>
            	<span class="span-left">年龄</span>
            	<el-select v-model="age_value" placeholder="请选择">
            		<el-option v-for="item in age_options" :key="item.age_value" :label="item.label" :value="item.age_value"></el-option>
            	</el-select>
            	<el-button>查询</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <el-row>
                        <el-col :span="12" class="boder-right body-padding-right">
                            <h3>热门车型分析</h3>
                            <div class="marketing-cx-body">
                                <el-row>
                                    <el-col :span="12">官方推荐</el-col>
                                    <el-col :span="12">用户洞察</el-col>
                                </el-row>
                                <ul class="cx-body">
                                    <li v-for="(item,index) in marketing_1_progress" :key="index" class="el-row">
                                        <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                        <el-col :span="8" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                        <el-col :span="4">{{item.name}}</el-col>
                                        <el-col :span="8" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                        <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                        <el-col :span="12" class="body-padding-left">
                            <h3>销售卖点分析
                            <el-select clear="model_3-select" v-model="lklx_value" placeholder="请选择" size="mini">
                                <el-option v-for="item in lklx_options" :key="item.lklx_value" :label="item.label" :value="item.lklx_value">
                                </el-option>
                            </el-select>
                            </h3>
                            <div class="chartsSwiper">
                                <swiper :options="swiperOption" ref="mySwiper">
                                    <swiper-slide>
                                        <div class="marketing-cx-body">
                                            <el-row>
                                                <el-col :span="10">官方推荐</el-col>
                                                <el-col :span="4">二级卖点</el-col>
                                                <el-col :span="10">用户洞察</el-col>
                                            </el-row>
                                            <ul class="cx-body">
                                                <li v-for="(item,index) in marketing_2_progress" :key="index" class="el-row">
                                                    <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                                    <el-col :span="4" aria-label='item.'>{{item.name}}</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                                    <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                                </li>
                                            </ul>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="marketing-cx-body">
                                            <el-row>
                                                <el-col :span="9">官方推荐</el-col>
                                                <el-col :span="6">外观设计的三级卖点</el-col>
                                                <el-col :span="9">用户洞察</el-col>
                                            </el-row>
                                            <ul class="cx-body">
                                                <li v-for="(item,index) in marketing_2_progress" :key="index" class="el-row">
                                                    <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                                    <el-col :span="7" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                                    <el-col :span="6">{{item.name}}</el-col>
                                                    <el-col :span="7" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                                    <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                                </li>
                                            </ul>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="marketing-cx-body">
                                            <el-row>
                                                <el-col :span="9">官方推荐</el-col>
                                                <el-col :span="6">安全科技</el-col>
                                                <el-col :span="9">用户洞察</el-col>
                                            </el-row>
                                            <ul class="cx-body">
                                                <li v-for="(item,index) in marketing_2_progress" :key="index" class="el-row">
                                                    <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                                    <el-col :span="4">{{item.name}}</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                                    <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                                </li>
                                            </ul>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="marketing-cx-body">
                                            <el-row>
                                                <el-col :span="9">官方推荐</el-col>
                                                <el-col :span="6">智能互联</el-col>
                                                <el-col :span="9">用户洞察</el-col>
                                            </el-row>
                                            <ul class="cx-body">
                                                <li v-for="(item,index) in marketing_2_progress" :key="index" class="el-row">
                                                    <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                                    <el-col :span="4">{{item.name}}</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                                    <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                                </li>
                                            </ul>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="marketing-cx-body">
                                            <el-row>
                                                <el-col :span="9">官方推荐</el-col>
                                                <el-col :span="6">电渠系统</el-col>
                                                <el-col :span="9">用户洞察</el-col>
                                            </el-row>
                                            <ul class="cx-body">
                                                <li v-for="(item,index) in marketing_2_progress" :key="index" class="el-row">
                                                    <el-col :span="2" class="cx-body-text">{{item.value[0]}}%</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress :stroke-width="8" :percentage="item.value[0]-0" :show-text="false" class="cx-body-progress" /></el-col>
                                                    <el-col :span="4">{{item.name}}</el-col>
                                                    <el-col :span="8" class="cx-body-top"><el-progress class="model-progress-two-bar_1" :stroke-width="8" :percentage="item.value[1]-0" :show-text="false" /></el-col>
                                                    <el-col :span="2" class="cx-body-text">{{item.value[1]}}%</el-col>
                                                </li>
                                            </ul>
                                        </div>
                                    </swiper-slide>
                                    <div class="swiper-pagination" slot="pagination"></div>
                                </swiper>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vChartLineNew from '@/components/chart/ChartLineNew';
    import vChartLineNewTwo from '@/components/chart/ChartLineNewTwo';
    import vChartPie from '@/components/chart/ChartPie';

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';
    import Qs from 'qs';

    export default{
        components: {
            vChartLineNew,
            vChartLineNewTwo,
            vChartPie,
            swiper,
            swiperSlide,
            countTo
        },
        data(){
            return{
                marketing_activeName: 'dqzd',
                marketing_radio: '总客流趋势',
                qyoptions: [{
                   qyvalue: '选项1',
                   qylabel: '全国'
                }],
                qyvalue:'选项1',
                time:['2018-07-15','2018-07-21'],
                qy1options: [{
                   qy1value: '选项1',
                   label: '领克一区'
                }],
                qy1value:'选项1',
                qy2options: [{
                   qy2value: '选项1',
                   label: '领克二区'
                }],
                qy2value:'选项1',
                sex_options: [{
                   sex_value: '选项1',
                   label: '男',
                },{
                   sex_value: '选项2',
                   label: '女',
                }],
                sex_value:'选项1',
                age_options: [{
                   age_value: '选项1',
                   label: '18-24',
                },{
                   age_value: '选项2',
                   label: '25-34',
                },{
                   age_value: '选项3',
                   label: '35-44',
                },{
                   age_value: '选项4',
                   label: '45-54',
                },{
                   age_value: '选项5',
                   label: '55+',
                }],
                age_value:'选项1',

                lklx_options: [{
                   lklx_value: '选项1',
                   label: '领克01',
                },{
                   lklx_value: '选项2',
                   label: '领克01PHEV',
                },{
                   lklx_value: '选项3',
                   label: '领克02',
                },{
                   lklx_value: '选项4',
                   label: '领克03',
                },{
                   lklx_value: '选项5',
                   label: '领克03+',
                }],
                lklx_value:'选项1',

                marketing_health:[
                    {
                        name:'全国',
                        value:40
                    },{
                        name:'领克1区',
                        value:50
                    },{
                        name:'领克2区',
                        value:60
                    },{
                        name:'领克3区',
                        value:70
                    },{
                        name:'领克4区',
                        value:80
                    },{
                        name:'领克5区',
                        value:90
                    }
                ],

                marketing_zd_arr:[{
                    name:'诊断小结',
                    list:[{
                        vaule:"1、本周店内表现良好，与上周相比有明显提升。"
                    },{
                        vaule:"2、一区健康度优于全国平均，稍低于全国去年平均。"
                    },{
                        vaule:"3、客流量较高，但成交率稍低，营销转化率有提升空间。"
                    }]
                },{
                    name:'营销建议',
                    list:[{
                        vaule:"1、围绕新车上市，可选定某成熟商圈，进行地面活动推广，加强宣传。"
                    },{
                        vaule:"2、组织销售人员培训，提高车辆卖点熟悉度。"
                    },{
                        vaule:"3、适当更新门店宣传物料，重点优惠活动推荐。"
                    }]
                }],
                marketing_jd_Arr: [
                    [{
                        name: "上海弘贤",
                        value: 140,
                        yoy: 4,
                        wow: -4
                    }, {
                        name: "上海龙祥",
                        value: 162,
                        yoy: 3,
                        wow: 3
                    }, {
                        name: "上海中骐",
                        value: 86,
                        yoy: 5,
                        wow: -10
                    }, {
                        name: "上海通孚祥领云",
                        value: 121,
                        yoy: 6,
                        wow: 2
                    }, {
                        name: "上海宝锐",
                        value: 156,
                        yoy: 4,
                        wow: 3
                    }, {
                        name: "上海鸿志",
                        value: 132,
                        yoy: 6,
                        wow: -2
                    }],
                    [{
                        name: "上海弘贤",
                        value: 115,
                        yoy: 2,
                        wow: -10
                    }, {
                        name: "上海龙祥",
                        value: 142,
                        yoy: 3,
                        wow: -1
                    }, {
                        name: "上海中骐",
                        value: 76,
                        yoy: 4,
                        wow: 2
                    }, {
                        name: "上海通孚祥领云",
                        value: 98,
                        yoy: 6,
                        wow: -3
                    }, {
                        name: "上海宝锐",
                        value: 146,
                        yoy: 4,
                        wow: -7
                    }, {
                        name: "上海鸿志",
                        value: 120,
                        yoy: 6,
                        wow: -10
                    }]
                ],
                marketing_gd_Arr: [{
                    name: "上海弘贤",
                    value: 140,
                    yoy: 2,
                    wow: 6
                }, {
                    name: "上海龙祥",
                    value: 162,
                    yoy: 3,
                    wow: -3
                }, {
                    name: "上海中骐",
                    value: 86,
                    yoy: 4,
                    wow: 4
                }, {
                    name: "上海通孚祥领云",
                    value: 110,
                    yoy: 6,
                    wow: -11
                }, {
                    name: "上海宝锐",
                    value: 156,
                    yoy: 2,
                    wow: -8
                }, {
                    name: "上海鸿志",
                    value: 132,
                    yoy: 2,
                    wow: -10
                }],
                marketing_sex_Arr: [{
                    name: '男',
                    value: 64
                }, {
                    name: '女',
                    value: 36
                }],

                marketing_age_Arr: [{
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

                marketing_age_Color: ["#fab2bb", "#ff6074", "#de4155", "#707376", "#131313"],

                marketing_1_progress: [
                    {
                        name: '领克01',
                        value: [30, 30]
                    },
                    {
                        name: '领克01PHEV',
                        value: [25, 25]
                    },
                    {
                        name: '领克02',
                        value: [20, 20]
                    },
                    {
                        name: '领克03',
                        value: [15, 15]
                    },
                    {
                        name: '领克03+',
                        value: [10, 10]
                    }
                    ],

                marketing_2_progress: [
                    {
                        name: '外观设计',
                        value: [30, 30]
                    },
                    {
                        name: '内部空间',
                        value: [25, 25]
                    },
                    {
                        name: '安全科技',
                        value: [20, 20]
                    },
                    {
                        name: '智能互联',
                        value: [15, 15]
                    },
                    {
                        name: '电渠系统',
                        value: [10, 10]
                    },
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
                    //width: 550,
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
        mounted() {
            this.loadData()

            this.$nextTick(() => {
                let canvas1 = document.getElementById("marketing_circle-canvas1");
                this.drawMain(canvas1, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                let canvas2 = document.getElementById("marketing_circle-canvas2");
                this.drawMain(canvas2, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                let canvas3 = document.getElementById("marketing_circle-canvas3");
                this.drawMain(canvas3, 60, "#ff7b42", "#faf5f5", "#ff7b42");
            })
        },
        methods: {
            loadData() {},
            drawMain(drawing_elem, percent, forecolor, bgcolor, fillColor) {
                /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
            */
                var context = drawing_elem.getContext("2d");
                var center_x = drawing_elem.width / 2;
                var center_y = drawing_elem.height / 2;
                //var rad = Math.PI * 2 / 100;
                var rad = Math.PI * 2 * (240 / 360) / 100;
                var speed = 0;

                // 绘制背景圆圈
                function backgroundCircle() {
                    context.save();
                    context.beginPath();
                    context.lineWidth = 10; //设置线宽
                    var radius = center_x - context.lineWidth;
                    context.lineCap = "round";
                    context.strokeStyle = bgcolor;
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-210), Math.PI / 180 * (30), false); //开始角度 结束角度
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制运动圆环
                function foregroundCircle(n) {
                    context.save();
                    context.strokeStyle = forecolor;
                    context.lineWidth = 13;
                    context.lineCap = "round";
                    var radius = center_x - context.lineWidth;
                    context.beginPath();
                    context.arc(center_x, center_y, radius, Math.PI / 180 * (-210), Math.PI / 180 * (-210) + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                    context.stroke();
                    context.closePath();
                    context.restore();
                }

                //绘制文字
                function text(n) {
                    context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
                    context.fillStyle = forecolor;
                    var font_size = 40;
                    context.font = font_size + "px Helvetica";
                    var text_width = context.measureText(n.toFixed(0) + "%").width;
                    context.fillText(n.toFixed(0) + "%", center_x - text_width / 2, center_y + font_size / 2);
                    context.restore();
                }

                //执行动画
                (function drawFrame() {
                    window.requestAnimationFrame(drawFrame);
                    context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
                    backgroundCircle();
                    //text(speed);
                    foregroundCircle(speed);
                    if (speed >= percent) return;
                    speed += 1;
                }());
            },
            marketing_handleClick(tab, event) {
                this.loadData();
                this.$nextTick(() => {
                    let canvas1 = document.getElementById("marketing_circle-canvas1");
                    this.drawMain(canvas1, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                    let canvas2 = document.getElementById("marketing_circle-canvas2");
                    this.drawMain(canvas2, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                    let canvas3 = document.getElementById("marketing_circle-canvas3");
                    this.drawMain(canvas3, 60, "#ff7b42", "#faf5f5", "#ff7b42");
                })
            },
        }
    }
</script>

<style lang="scss">
    .marketing{
        .body-middle{
            border-radius: 0;
            padding-bottom:0px;
            .body-middle-btn-time{
            	margin-left: 0px;
            }
            .body-middle-chart{
                .card-bd{
                    margin-top: 40px;
                    .chart-box{
                        margin-left: 10%;
                    }
                }
                h3{
                    .el-select{
                        position: absolute;
                        top: -6px;
                        right: 0px;

                        .el-input__inner{
                            width: 140px;
                            height: 30px;
                            background-color: #ffffff;
                            border-radius: 15px;
                            border: solid 2px #dde2ec;
                        }
                        .el-input__inner:focus{
                            border-color: #f64359;
                        }
                    }
                }
                .chart-info-gender2 {
                    top: 50%;
                    left: 85%;
                    width: 110px;
                    margin-left: 0;
                    font-weight: 700;
                    font-size: 14px;
                    margin-top: -20px;
                }
                .chart-info-buy {
                    top: 50%;
                    width: 110px;
                    left: 85%;
                    margin-left: 0;
                    margin-top: -50px;
                    p {
                        font-weight: 700;
                        font-size: 14px;
                        &.chart-info-buy_0::after {
                            background-color: #fab2bb;
                        }

                        &.chart-info-buy_1::after {
                            background-color: #ff6074;
                        }

                        &.chart-info-buy_2::after {
                            background-color: #de4155;
                        }

                        &.chart-info-buy_3::after {
                            background-color: #707376;
                        }

                        &.chart-info-buy_4::after {
                            background-color: #131313;
                        }
                    }
                }
                .marketing-cx-body{
                    margin:30px 8.6%;
                    height: 210px;
                    text-align: center;
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    color: #333333;
                    .cx-body{
                        >li{
                            margin-top: 15px;
                        }
                        .cx-body-top{
                            position: relative;
                            top: 5px;
                            .cx-body-progress{
                                transform: rotateY(180deg);

                                .el-progress-bar__inner {
                                    background-image: linear-gradient(90deg,
                                            #131313 0%,
                                            #707376 100%),
                                        linear-gradient(#f2f2f2,
                                            #f2f2f2);
                                }
                            }
                        }
                        .cx-body-text{

                            color: #ea4d4d;
                        }
                    }
                }
            }
        }
        .marketing-body{
            background: #fff;
            position: relative;
            .body-middle-btn{
                border-bottom:0px;
                position: absolute;
                height: 58px;
                right: 0;
                z-index: 10;
            }
            .el-tabs__nav {
                left: 32px !important;
            }
            .body-middle-chart{
                h3{
                    width: 100%;
                    margin-bottom: 30px;
                    .el-radio-group{
                        float: right;
                        border-radius: 4px;
                        position: relative;
                        top:-6px;

                        .el-radio-button__inner{
                            width: 100px;
                            height: 30px;
                            max-width: 100px;
                            line-height: 10px;
                            background-color: #ffffff;
                            top: 0px;
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
                }

                .chart-div{
                    border-bottom:0;
                }
                .marketing-flex-zd{
                    display: flex;
                    width: 100%;
                    >div{
                        width: 50%;
                        &:first-child{
                            border-right: 1px solid #dee2e6;
                            padding-right: 30px;
                        }
                        &:last-child{
                            padding-left: 30px;
                        }
                        >div{
                            width: 100%;
                        }
                        .body-zd1{
                            display: flex;
                            >div:first-child{
                                width: 40%;
                                text-align: center;
                                position: relative;
                                margin-top: 20px;
                                .marketing_circle-num {
                                    position: absolute;
                                    top: 40px;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    span {
                                        display: inline-block;
                                        color: #333333;
                                        font-size: 48px;
                                        line-height: 72px;
                                        letter-spacing: -1px;
                                        font-family: "fjallaone";
                                    }
                                }
                                .body-zd1-text{
                                    position: relative;
                                    top: -45px;
                                    >p{
                                        >span{
                                            display: inline-block;
                                            width: 60px;
                                            height: 22px;
                                            text-align: center;
                                            line-height: 22px;
                                            color: #fff;
                                            background-image: linear-gradient(90deg, #f09819 0%, #ff8758 100%),
                                            linear-gradient(#075d76, #075d76);
                                            border-radius: 4px;
                                            font-family: MicrosoftYaHei;
                                            letter-spacing: 0.5px;
                                            font-size: 12px;
                                        }
                                    }
                                    >div{
                                        font-family: MicrosoftYaHei;
                                        font-size: 12px;
                                        line-height: 50px;
                                        letter-spacing: 0.5px;
                                        color: #333333;
                                        >span{
                                            margin-right: 10px;
                                            position: relative;
                                            letter-spacing: 0.5px;
                                            color: #ff4f41;
                                            font-family: MicrosoftYaHei;
                                            &:first-child{
                                                color: #0acf97;
                                            }
                                        }
                                    }
                                }
                            }
                            >div:last-child{
                                width: 48%;
                                h4{
                                    font-family: MicrosoftYaHei-Bold;
                                    font-size: 14px;
                                    text-align: center;
                                    letter-spacing: 0.6px;
                                    color: #333333;
                                }
                                .body-zd1-jdt{
                                    margin-top: 60px;
                                    // height: 61px;
                                    >div{
                                        width: 100%;
                                        display: flex;
                                        margin-bottom: 10px;
                                        >span{
                                            display: inline-block;
                                            font-family: MicrosoftYaHei;
                                            font-size: 12px;
                                            &:first-child{
                                                width: 46px;
                                                text-align: right;
                                                color: #333333;
                                            }
                                            &:last-child{
                                                color: #ea4d4d;
                                            }
                                        }
                                        >div{
                                            width: 70%;
                                            margin: 0 4%;
                                            position: relative;
                                            top:5px;
                                        }
                                    }
                                }
                            }
                        }
                        .body-zd2{
                            .body-zd2-text{
                                display: flex;
                                margin-bottom: 20px;
                                color: #333333;
                                >div{
                                    width: 60px;
                                    min-width: 60px;
                                    text-align: center;
                                    font-family: MicrosoftYaHei-Bold;
                                    font-size: 14px;
                                    white-space: nowrap;
                                    letter-spacing: 0.6px;
                                }
                                >ul{
                                    padding: 20px;
                                    height: 100px;
                                    width: 93%;
                                    background-color: #f6f6f6;
                                    border-radius: 0px 20px 20px 20px;
                                    >li{
                                        width: 100%;
                                        line-height: 20px;
                                        letter-spacing: 0px;
                                        font-size: 12px;
                                    }
                                }
                            }
                            >div:last-child{
                                >ul{
                                    background-color: #ffefee;
                                }
                            }
                        }
                        >p{
                            width: 100%;
                            height: 1px;
                            background: #dee2e6;
                            margin: 40px 0;
                        }
                    }
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
