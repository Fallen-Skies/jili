<template>
    <div class="questionnaire1">
        <div class="header-nav"><span>问卷投放管理</span> <i class="el-icon-arrow-right"></i>  <span>投放项目列表管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>投放项目列表管理</h3>
        </div>
        <el-row class="body-head-el">
            <el-col :span="6" v-for="(item,index) in questionnaire1_head" :key="index" style="padding:0 10px;">
                <div class="questionnaire1-head">
                    <div class="questionnaire1-head-img">
                        <img :src="'static/img/advertising/12_tab_icon0' + item.icon + '.png'" alt="">
                    </div>
                    <div class="questionnaire1-head-name">{{item.name}}</div>
                    <div class="questionnaire1-head-num">
                        <p v-if="index === 3">{{item.value}}</p>
                        <countTo :startVal='startVal' :endVal='questionnaire1_endVal[index]' separator='' ref="countTo" v-else></countTo>
                        <!-- <span>21</span> -->
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="body-middle">
            <div class="body-middle-btn">
                <span>项目编号</span>
                <el-input v-model="number_input"></el-input>
                <span class="span-left">项目名称</span>
                <el-input v-model="name_input"></el-input>
                <span class="span-left">项目状态</span>
                <el-select v-model="type_value" placeholder="请选择">
                    <el-option v-for="item in type_options" :key="item.type_value" :label="item.label" :value="item.type_value"></el-option>
                </el-select>
                <span class="span-left">创建时间</span>
                <el-date-picker v-model="time" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" class="body-middle-btn-time"></el-date-picker>
                <div class="linefeed">
                    <span class="span-left">创建者</span>
                    <el-input v-model="creator_input"></el-input>
                    <span class="span-left">客户</span>
                    <el-input v-model="client_input"></el-input>
                    <el-button>查询</el-button>
                </div>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">投放项目列表
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增项目</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="2">项目编号</el-col>
                            <el-col :span="5">项目名称</el-col>
                            <el-col :span="2">开始时间</el-col>
                            <el-col :span="2">结束时间</el-col>
                            <el-col :span="2">创建时间</el-col>
                            <el-col :span="2">状态</el-col>
                            <el-col :span="2">限制份额</el-col>
                            <el-col :span="2">创建者</el-col>
                            <el-col :span="2">客户名称</el-col>
                            <el-col :span="3">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in questionnaire1_Arr" :key="index">
                            <el-col :span="2" :title='item.number'>{{item.number}}</el-col>
                            <el-col :span="5" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="2" :title='item.begin'>{{item.begin}}</el-col>
                            <el-col :span="2" :title='item.finish'>{{item.finish}}</el-col>
                            <el-col :span="2" :title='item.found'>{{item.found}}</el-col>
                            <el-col :span="2" :title='item.type'>{{item.type}}</el-col>
                            <el-col :span="2" :title='item.limit'>{{item.limit}}</el-col>
                            <el-col :span="2" :title='item.creator'>{{item.creator}}</el-col>
                            <el-col :span="2" :title='item.client'>{{item.client}}</el-col>
                            <el-col :span="3">
                                <span><i class="el-icon-view"></i></span>
                                <span class="span-color"><i class="el-icon-edit-outline"></i></span>
                                <span><i class="el-icon-delete"></i></span>
                            </el-col>
                        </el-row>
                        <div class="table_paging">
                            <div class="table-prev">上一页</div>
                            <span>1</span><span>2</span>
                            <div class="table-next">下一页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    //数字滚动
    import countTo from 'vue-count-to';

    import bus from '@/components/common/bus';

    export default{
        components: {
        	countTo
        },
        data() {
            return {

                number_input:'',
                name_input:'',
                creator_input:'',
                client_input:'',

                type_options: [{
                   type_value: '选项0',
                   label: '请选择'
                },{
                   type_value: '选项1',
                   label: '新视界'
                },{
                   type_value: '选项2',
                   label: '展会'
                },{
                   type_value: '选项3',
                   label: '移动展厅'
                }],
                type_value:'选项0',

                time:['2018-07-18','2018-07-20'],

                startVal: 0,
                endVal: 0,
                countToAuto: false,
                questionnaire1_endVal: [0, 0, 0],
                questionnaire1_head: [{
                    icon: '1',
                    name: "准备期项目",
                    value: 113
                },{
                    icon: '2',
                    name: "执行期项目",
                    value: 53
                },{
                    icon: '3',
                    name: "完成项目",
                    value: 24
                },{
                    icon: '4',
                    name: "角色权限",
                    value: "全国经理"
                }],

                questionnaire1_Arr: [
                    {
                        number:'196784841',
                        name:'2018年领克汽车测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'测试',
                        limit:'600',
                        creator:'张三',
                        client:'领克'
                    },{
                        number:'196784651',
                        name:'2018年领克01测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'准备中',
                        limit:'600',
                        creator:'张三',
                        client:'别克'
                    },{
                        number:'948456125',
                        name:'2018年网易测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'已结束',
                        limit:'600',
                        creator:'张三',
                        client:'网易'
                    },{
                        number:'365847954',
                        name:'2018年车轮测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'执行中',
                        limit:'600',
                        creator:'张三',
                        client:'车轮'
                    },{
                        number:'197489191',
                        name:'2018年车轮测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'评估中',
                        limit:'600',
                        creator:'张三',
                        client:'车轮'
                    },{
                        number:'481916166',
                        name:'2018年车轮测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'暂停',
                        limit:'600',
                        creator:'张三',
                        client:'车轮'
                    },{
                        number:'298161584',
                        name:'2018年车轮测试项目',
                        begin:'2018.7.18',
                        finish:'2018.7.20',
                        found:'2018.7.18',
                        type:'准备中',
                        limit:'600',
                        creator:'张三',
                        client:'车轮'
                    }
                ],


            }
        },
        methods: {

        },
        mounted() {
            //开始动画调整页面
            setTimeout(() => {
                this.questionnaire1_endVal.forEach((item, index, arr) => {
                    this.$set(arr, index, this.questionnaire1_head[index]["value"]);
                });
            }, 500)
        },
    }
</script>

<style lang="scss">
.questionnaire1{
    .body-head-el{
        >div{
            &:nth-child(1){
                >div{
                    background-image: url(~static/img/advertising/06_bg01.png);
                }
            }
            &:nth-child(2),&:nth-child(3){
                >div{
                    background-color: #4c4e50;
                }
            }
            &:nth-child(4){
                >div{
                    background-color: #ea4d4d;
                }
            }
        }
    }
    .questionnaire1-head{
        height: 120px;
        margin-top: 32px;
        border-radius: 4px;
        position: relative;
        color: #ffffff;
    }
    .questionnaire1-head-img{
        position: absolute;
        top: 27px;
        left: 30px;
    }
    .questionnaire1-head-name{
        position: absolute;
        top: 45px;
        left: 110px;
        font-weight: 600;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.8px;
    }
    .questionnaire1-head-num{
    	position: absolute;
    	top: 22px;
        right: 10%;
    	font-size: 16px;
    	span{
    		font-size: 40px;
    		line-height: 72px;
    		letter-spacing: -1px;
    	}
        >p{
            font-size: 24px;
            letter-spacing: 1px;
            font-family: MicrosoftYaHei-Bold;
            line-height: 68px;
        }
    }

    @media(max-width:1400px){
        .questionnaire1-head-img{
            left: 15px;
        }
        .questionnaire1-head-name{
            left: 85px;
            top: 46px;
            font-size: 16px;
        }
        .questionnaire1-head-num{
            right: 15px;
            span{
                font-size: 36px;
            }
            >p{
                font-size: 20px;
                font-weight: 600;
                line-height: 70px;
            }
        }
    }

    .body-middle-btn{
        .el-input{
            width: 120px;
            border-radius: 4px;
            .el-input__inner{
               height: 30px;
               line-height: 30px;
               border: solid 1px #dde2ec;
            }
        }
        .el-input.is-active .el-input__inner, .el-input__inner:focus {
            border-color: #f64359;
            outline: 0;
        }
        .el-select{
            border: 0px !important;
            width: 120px;
            height: 30px;
            border-radius: 4px;
            border: solid 1px #dde2ec;
            .el-input__inner{
               height: 30px;
               line-height: 30px;
            }
        }
        .body-middle-btn-time{
            margin-left: 0;
        }
    }
}
</style>
