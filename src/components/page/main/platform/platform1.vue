<template>
    <div class="platform1">
        <div class="header-nav"><span>平台基础管理</span> <i class="el-icon-arrow-right"></i>  <span>经销商管理</span></div>
        <div class='box-head box-head-margin box-border-bottom'>
            <h3>经销商管理</h3>
        </div>
        <div class="body-middle">
            <div class="body-middle-btn">
                <el-input v-model="code_input" placeholder="请输入经销商代码"></el-input>
                <span></span>
                <el-input v-model="name_input" placeholder="请输入经销商名称"></el-input>
                <span></span>
                <el-select v-model="sf_value" placeholder="请选择省份">
                	<el-option v-for="item in sf_options" :key="item.sf_value" :label="item.label" :value="item.sf_value"></el-option>
                </el-select>
                <span></span>
                <el-select v-model="cs_value" placeholder="请选择城市">
                	<el-option v-for="item in cs_options" :key="item.cs_value" :label="item.label" :value="item.cs_value"></el-option>
                </el-select>
                <span></span>
                <el-select v-model="dq_value" placeholder="请选择大区">
                	<el-option v-for="item in dq_options" :key="item.dq_value" :label="item.label" :value="item.dq_value"></el-option>
                </el-select>
                <span></span>
                <el-select v-model="xq_value" placeholder="请选择小区">
                	<el-option v-for="item in xq_options" :key="item.xq_value" :label="item.label" :value="item.xq_value"></el-option>
                </el-select>
                <span></span>
                <el-button >查询</el-button>
                <span></span>
                <el-button class="btn-empty">清空</el-button>
            </div>
            <div class="body-middle-chart">
                <div>
                    <h3 class="body-margin-bottom">经销商列表
                        <span class="chart-max-width chart-max-color"><i class="el-icon-view"></i> 查看日志</span>
                        <span class="chart-max-width chart-max-color"><i class="el-icon-download"></i> 模板下载</span>
                        <span class="chart-max-width chart-max-color"><i class="el-icon-s-unfold"></i> 经销商导入</span>
                        <span class="chart-max-width"><i class="el-icon-plus"></i> 新增经销商</span>
                    </h3>
                    <div class="table-body">
                        <el-row class="middle-text-center body-head">
                            <el-col :span="2">经销商代码</el-col>
                            <el-col :span="2">经销商名称</el-col>
                            <el-col :span="2">大区</el-col>
                            <el-col :span="2">省份</el-col>
                            <el-col :span="2">城市</el-col>
                            <el-col :span="2">服务类型</el-col>
                            <el-col :span="2">FMC/MAC</el-col>
                            <el-col :span="2">销售/售后</el-col>
                            <el-col :span="5">地址</el-col>
                            <el-col :span="3">电话</el-col>
                            <el-col :span="1">状态</el-col>
                            <el-col :span="2">操作</el-col>
                        </el-row>
                        <el-row class="middle-text-center body-foot" v-for="(item,index) in platform1_Arr" :key="index">
                            <el-col :span="2" :title='item.serial'>{{item.serial}}</el-col>
                            <el-col :span="2" :title='item.name'>{{item.name}}</el-col>
                            <el-col :span="2" :title='item.region'>{{item.region}}</el-col>
                            <el-col :span="2" :title='item.province'>{{item.province}}</el-col>
                            <el-col :span="2" :title='item.city'>{{item.city}}</el-col>
                            <el-col :span="2" :title='item.type'>{{item.type}}</el-col>
                            <el-col :span="2" :title='item.fmc'>{{item.fmc}}</el-col>
                            <el-col :span="2" :title='item.sell'>{{item.sell}}</el-col>
                            <el-col :span="5" :title='item.site'>{{item.site}}</el-col>
                            <el-col :span="3" :title='item.phone'>{{item.phone}}</el-col>
                            <el-col :span="1" :title='item.state'>{{item.state}}</el-col>
                            <el-col :span="2"><span><i class="el-icon-edit-outline"></i></span><span><i class="el-icon-delete"></i></span></el-col>
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
    export default {
        data() {
            return {
                code_input: '',
                name_input: '',
                sf_options: [{
                   sf_value: '选项1',
                   label: '江苏省'
                }],
                sf_value: '',
                cs_options: [{
                   cs_value: '选项1',
                   label: '上海'
                }],
                cs_value: '',
                dq_options: [{
                   dq_value: '选项1',
                   label: '大区'
                }],
                dq_value: '',
                xq_options: [{
                   xq_value: '选项1',
                   label: '小区'
                }],
                xq_value: '',

                platform1_Arr: [
                    {
                        serial:'2200901',
                        name:'郑州凯琳',
                        region:'雪佛兰5区',
                        province:'河南省',
                        city:'郑州市',
                        type:'4S',
                        fmc:'王大伟',
                        sell:'售后',
                        site:'河南省郑州市惠济区郑花路河南汽贸中心',
                        phone:'0371-65636333',
                        state:'生效'
                    },{
                        serial:'2200428',
                        name:'上海众国同普',
                        region:'雪佛兰7区',
                        province:'上海市',
                        city:'上海市',
                        type:'4S',
                        fmc:'邹静波',
                        sell:'售后',
                        site:'上海市普陀区同普路1236号',
                        phone:'021-52707722',
                        state:'生效'
                    },{
                        serial:'2200187',
                        name:'上海安吉名门',
                        region:'雪佛兰7区',
                        province:'上海市',
                        city:'上海市',
                        type:'4S',
                        fmc:'邹静波',
                        sell:'售后',
                        site:'上海市铜川路1366号101-105室',
                        phone:'021-52839299',
                        state:'生效'
                    },{
                        serial:'2200657',
                        name:'茂名京粤名通',
                        region:'雪佛兰4区',
                        province:'广东省',
                        city:'茂名市',
                        type:'4S',
                        fmc:'施怡东(兼)',
                        sell:'售后',
                        site:'广东省茂名市高水路南香路段(南香村委会旁)',
                        phone:'0668-3933125',
                        state:'生效'
                    },{
                        serial:'2200624',
                        name:'杭州诚和',
                        region:'雪佛兰7区',
                        province:'浙江省',
                        city:'杭州市',
                        type:'4S',
                        fmc:'赵万春',
                        sell:'售后',
                        site:'浙江省富阳市高桥镇金桥北路988号',
                        phone:'0571-63433900',
                        state:'生效'
                    },{
                        serial:'2200661',
                        name:'莆田中机中泰',
                        region:'雪佛兰4区',
                        province:'福建省',
                        city:'莆田市',
                        type:'4S',
                        fmc:'刘恩斌',
                        sell:'售后',
                        site:'福建省莆田市涵江区白塘镇埭里村(新涵工园区)',
                        phone:'0594-3609117',
                        state:'生效'
                    },{
                        serial:'2200666',
                        name:'佛山时利和申联',
                        region:'雪佛兰4区',
                        province:'广东省',
                        city:'佛山市',
                        type:'4S',
                        fmc:'侯一明',
                        sell:'售后',
                        site:'广东省佛山市南海区桂城街道海八路61号桂江立交桥侧',
                        phone:'0757-86208125',
                        state:'生效'
                    },{
                        serial:'2200713',
                        name:'广西桂海富达',
                        region:'雪佛兰4区',
                        province:'广西壮族自治区',
                        city:'南宁市',
                        type:'4S',
                        fmc:'刘恩斌',
                        sell:'售后',
                        site:'广西壮族自治区南宁市秀厢大道199号金源汽车城内(桂海汽车园内)',
                        phone:'0771-3119996',
                        state:'生效'
                    },{
                        serial:'2200317',
                        name:'扬州润通',
                        region:'雪佛兰8区',
                        province:'江苏省',
                        city:'扬州市',
                        type:'4S',
                        fmc:'陶俊',
                        sell:'售后',
                        site:'江苏省扬州市万福路258号',
                        phone:'0514-87299090',
                        state:'生效'
                    },{
                        serial:'2200531',
                        name:'宜宾申蓉裕祥',
                        region:'雪佛兰6区',
                        province:'四川省',
                        city:'宜宾市',
                        type:'4S',
                        fmc:'刘松桦',
                        sell:'售后',
                        site:'四川省宜宾市临港经济开发区飞云路北段72号(观斗山隧道出口前行100米)',
                        phone:'0831-2402128',
                        state:'生效'
                    },{
                        serial:'2200386',
                        name:'锡林郭勒盟利丰泰莱',
                        region:'雪佛兰2区',
                        province:'内蒙古自治区',
                        city:'锡林郭勒盟',
                        type:'4S',
                        fmc:'杨东辉',
                        sell:'售后',
                        site:'内蒙古自治区锡林部勒盟锡林浩特市经济开发区火车站向北300米处利丰汽车园区',
                        phone:'0479-6959111',
                        state:'生效'
                    },{
                        serial:'2200988',
                        name:'南宁建成',
                        region:'雪佛兰4区',
                        province:'广西壮族自治区',
                        city:'南宁市',
                        type:'4S',
                        fmc:'刘恩斌',
                        sell:'售后',
                        site:'广西壮族自治区南宁市高新区秀厢大道西段9号(科园立交往清川桥方向1000米)',
                        phone:'0771-3395963',
                        state:'生效'
                    }
                ],

            }
        },
        methods: {

        },
    }
</script>

<style lang="scss">
.platform1{
    .body-middle-btn{
        .el-input{
            width: 160px;
            border-radius: 4px;
            .el-input__inner{
               height: 30px;
               line-height: 30px;
            }
        }
        .el-input.is-active .el-input__inner, .el-input__inner:focus {
            border-color: #f64359;
            outline: 0;
        }
        .el-select{
            border: 0px !important;
            width: 160px;
            height: 30px;
            border-radius: 4px;
            border: solid 1px #dde2ec;
            .el-input__inner{
               height: 30px;
               line-height: 30px;
            }
        }
        .el-button{
            margin-left: 0 !important;
        }
    }
}
</style>
