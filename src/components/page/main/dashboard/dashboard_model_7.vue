<template>
    <el-row>
        <el-col :span="24">
            <div class='box-head'>
                <h3 class="box-head-style0">用户人群描述</h3>
            </div>
            <div class='box-body model_7'>
                <el-row>
                    <el-col :span="24">
                        <div class="card model_7-card">
                            <div class="card-hd">十大人群综述</div>
                            <div class="card-bd">
                                <div class="model_7-nav">
                                    <div class="model_7-item" v-for="(item,index) in model_7_list" :key="index" :class="model_7_index===index?'active':''" @click="model_7_click(index)">
                                        <div class="model_7-item-t">
                                            <p class="model_7-item-num"><span>{{item.value}}</span>%</p>
                                            <p>{{item.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="model_7-main">
                                    <div class="model_7-main-item">
                                        <div class="model_7-main-item-txt">
                                            <p class="model_7-main-item-num"><span>{{model_7_data.value}}</span>%
                                            </p>
                                            <p>{{model_7_data.name}}</p>
                                        </div>
                                        <div class="model_7-main-item-left">
                                            <img :src="model_7_data.lImg" alt="">
                                        </div>
                                        <div class="model_7-main-item-right">
                                            <img :src="model_7_data.rImg" alt="">
                                        </div>
										<div class="model_7-main-item-goumai">
											<div class="model_7-main-item-bg">
												<img src="../../../../../static/img/dashboard/07_bg.png" alt="">
												<p>购买排行TOP3</p>
												<div>
													<ul>
														<li v-for="(item,index) in model_7_data.list" :key="index">
														{{index+1}}. {{item.name}} <span>{{item.value}}</span></li>
													</ul>
												</div>
											</div>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';

    export default {
        name: 'dashboard_model_7',
        components: {
            countTo
        },
        data() {
            return {
                model_7_index: 0,
                model_7_list: [{
                       name: "稳进内敛",
                       value: "5.0",
                       list: [{
                           name: "领克03&劲Pro",
                           value: "33%"
                       },{
                           name: "领克03&型Pro",
                           value: "26%"
                       },{
                           name: "领克03&劲",
                           value: "20%"
                       }]
                   },
                   {
                       name: "富有精英",
                       value: "7.7",
                       list: [{
                           name: "领克03+",
                           value: "42%"
                       },{
                           name: "领克03&劲Pro",
                           value: "22%"
                       },{
                           name: "领克03&型Pro",
                           value: "20%"
                       }]
                   },
                   {
                       name: "知性内涵",
                       value: "8.9",
                       list: [{
                           name: "领克03&劲Pro",
                           value: "24%"
                       },{
                           name: "领克03&型Pro",
                           value: "21%"
                       },{
                           name: "领克03&劲",
                           value: "21%"
                       }]
                   },
                   {
                       name: "实力任性",
                       value: "5.5",
                       list: [{
                           name: "领克03+",
                           value: "65%"
                       },{
                           name: "领克03&劲Pro",
                           value: "12%"
                       },{
                           name: "领克03&型Pro",
                           value: "10%"
                       }]
                   },
                   {
                       name: "顾家进取",
                       value: "13.3",
                       list: [{
                           name: "领克01PHEV&劲",
                           value: "40%"
                       },{
                           name: "领克01PHEV&劲Lite",
                           value: "23%"
                       },{
                           name: "领克01&劲Pro",
                           value: "15%"
                       }]
                   },
                   {
                       name: "稳健彰显",
                       value: "15.2",
                       list: [{
                           name: "领克03&型Pro",
                           value: "34%"
                       },{
                           name: "领克03&劲",
                           value: "25%"
                       },{
                           name: "领克03&型",
                           value: "22%"
                       }]
                   },
                   {
                       name: "现代乐活",
                       value: "16.8",
                       list: [{
                           name: "领克03&型",
                           value: "34%"
                       },{
                           name: "领克02&劲",
                           value: "22%"
                       },{
                           name: "领克02&耀",
                           value: "18%"
                       }]
                   },
                   {
                       name: "安稳务实",
                       value: "6.2",
                       list: [{
                           name: "领克01&劲Pro",
                           value: "33%"
                       },{
                           name: "领克01&型Pro",
                           value: "28%"
                       },{
                           name: "领克02&纯Lite",
                           value: "20%"
                       }]
                   },
                   {
                       name: "经济体面",
                       value: "9.3",
                       list: [{
                           name: "领克03&纯Lite",
                           value: "33%"
                       },{
                           name: "领克02&劲",
                           value: "22%"
                       },{
                           name: "领克02&耀",
                           value: "19%"
                       }]
                   },
                   {
                       name: "经济乐享",
                       value: "11.2",
                       list: [{
                           name: "领克02&劲",
                           value: "28%"
                       },{
                           name: "领克02&耀",
                           value: "25%"
                       },{
                           name: "领克01&劲Pro",
                           value: "22%"
                       }]
                   }]
               }
        },
        computed: {
            model_7_data() {
                return {
                    name: this.model_7_list[this.model_7_index].name,
                    value: this.model_7_list[this.model_7_index].value,
                    lImg: "static/img/dashboard/07_img0" + (this.model_7_index - 0 + 1) + "_1.png",
                    rImg: "static/img/dashboard/07_img0" + (this.model_7_index - 0 + 1) + "_2.png",
		            list: this.model_7_list[this.model_7_index].list
                };
            }
        },
        mounted() {},
        methods: {
            model_7_click(index) {
                this.model_7_index = index;
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>