<template>
    <div class="body-middle">
        <div class="body-middle-chart">
            <div>
                <el-row>
                    <el-col :span="15" class="body-padding-right boder-right">
                        <h3 class="body-margin-bottom">车辆行驶记录地图</h3>
                        <div id="map" class="map"></div>
                        <div class="body-middle-btn">
                            <span style="margin-right: 3px;">车牌：</span><b>沪A54169</b>
                            <span class="span-left">时间</span>
                            <!-- <el-select v-model="sjvalue" placeholder="请选择" class="body-middle-btn-sj">
                                <el-option v-for="item in sjoptions" :key="item.sjvalue" :label="item.label" :value="item.sjvalue"></el-option>
                            </el-select>
                            <span>—</span>
                            <el-select v-model="time_value" placeholder="请选择" class="body-middle-btn-sj">
                                <el-option v-for="item in time_select" :key="item.time_value" :label="item.label" :value="item.time_value"></el-option>
                            </el-select> -->
                            <el-date-picker v-model="time" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" class="body-middle-btn-time"></el-date-picker>
                            <el-button @click="startAnimation">回看</el-button>
                            <el-button @click="stopAnimation">结束</el-button>
                            <el-button @click="speediness">快速</el-button>
                            <el-button>清除</el-button>
                        </div>
                    </el-col>
                    <el-col :span="9" class="body-padding-left">
                        <h3 class="body-margin-bottom">车辆状态
                        <span style="max-width: 100px;height: 30px;line-height: 30px;" @click="monitorings">实时监控</span>
                        </h3>
                        <div class="table-body">
                            <el-row class="middle-text-center body-head">
                                <el-col :span="8">车型</el-col>
                                <el-col :span="8">车牌</el-col>
                                <el-col :span="8">车辆状态</el-col>
                            </el-row>
                            <el-row class="middle-text-center body-foot" v-for="(item,index) in drive2_status" :key="index">
                                <el-col :span="8" :title="item.brand">{{item.brand}}</el-col>
                                <el-col :span="8" :title="item.plate">{{item.plate}}</el-col>
                                <el-col :span="8" :title="item.status">{{item.status}}</el-col>
                            </el-row>
                            <div class="table_paging">
                                <div class="table-prev">上一页</div>
                                <span>1</span><span>2</span>
                                <div class="table-next">下一页</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div>
                <h3 class="body-margin-bottom">车辆行驶记录</h3>
                <div class="table-body">
                    <el-row class="middle-text-center body-head">
                        <el-col :span="3">序号</el-col>
                        <el-col :span="3">车型</el-col>
                        <el-col :span="3">车牌</el-col>
                        <el-col :span="6">GPS时间</el-col>
                        <el-col :span="3">车速</el-col>
                        <el-col :span="3">总里程</el-col>
                        <el-col :span="3">超出电子围栏范围次数</el-col>
                    </el-row>
                    <el-row class="middle-text-center body-foot" v-for="(item,index) in drive2_record" :key="index">
                        <el-col :span="3" :title="item.number">{{item.number}}</el-col>
                        <el-col :span="3" :title="item.brand">{{item.brand}}</el-col>
                        <el-col :span="3" :title="item.plate">{{item.plate}}</el-col>
                        <el-col :span="6" :title="item.time">{{item.time}}</el-col>
                        <el-col :span="3" :title="item.speed">{{item.speed}}</el-col>
                        <el-col :span="3" :title="item.total">{{item.total}}</el-col>
                        <el-col :span="3" :title="item.value">{{item.value}}</el-col>
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
</template>

<script>
export default{
    data() {
        return {
            /*sjoptions: [{
              sjvalue: '选项1',
              label: '2019/07/10 12:00:21'
            }],
            sjvalue:'选项1',

            time_select: [{
              time_value: '选项1',
              label: '22019/07/10 12:40:00'
            }],
            time_value:'选项1',*/

            time:['2018-07-07','2018-07-10'],

            drive2_status:[
                {
                    brand:'领克01',
                    plate:'沪A54169',
                    status:'离线 10小时'
                },{
                    brand:'领克01PHEV',
                    plate:'沪A54184',
                    status:'20km/h'
                },{
                    brand:'领克03',
                    plate:'沪A54152',
                    status:'离线 10小时'
                },{
                    brand:'领克03+',
                    plate:'沪B54169',
                    status:'离线 10小时'
                },{
                    brand:'领克02',
                    plate:'沪F48169',
                    status:'20km/h'
                },{
                    brand:'领克03+',
                    plate:'沪B54169',
                    status:'静止'
                },{
                    brand:'领克02',
                    plate:'沪F48169',
                    status:'静止'
                }
            ],

            drive2_record: [
                {
                    number:'1',
                    brand:'领克01',
                    plate:'沪A54169',
                    time:'2019/07/10 12:00:21 - 2019/07/10 12:40:00',
                    speed:'20km/h',
                    total:'30km',
                    value:0
                },{
                    number:'2',
                    brand:'领克01',
                    plate:'沪A54169',
                    time:'2019/07/09 10:00:21 - 2019/07/09 10:40:00',
                    speed:'20km/h',
                    total:'30km',
                    value:0
                },{
                   number:'3',
                   brand:'领克01',
                   plate:'沪A54169',
                   time:'2019/07/08 12:00:21 - 2019/07/08 12:40:00',
                   speed:'20km/h',
                   total:'30km',
                   value:1
                },{
                    number:'4',
                    brand:'领克01',
                    plate:'沪A54169',
                    time:'2019/07/08 09:10:21 - 2019/07/08 09:40:00',
                    speed:'20km/h',
                    total:'30km',
                    value:0
                },{
                    number:'5',
                    brand:'领克01',
                    plate:'沪A54169',
                    time:'2019/07/07 09:10:21 - 2019/07/07 09:40:00',
                    speed:'20km/h',
                    total:'30km',
                    value:0
                }
            ],

            lineArr:[
                [116.478935,39.997761],
                [116.478939,39.997825],
                [116.478912,39.998549],
                [116.478912,39.998549],
                [116.478998,39.998555],
                [116.478998,39.998555],
                [116.479282,39.99856],
                [116.479658,39.998528],
                [116.480151,39.998453],
                [116.480784,39.998302],
                [116.480784,39.998302],
                [116.481149,39.998184],
                [116.481573,39.997997],
                [116.481863,39.997846],
                [116.482072,39.997718],
                [116.482362,39.997718],
                [116.483633,39.998935],
                [116.48367,39.998968],
                [116.484648,39.999861]
            ],

            marker:[
                [116.478935,39.997761],
                [116.478939,39.997825],
                [116.478912,39.998549],
                [116.478912,39.998549],
                [116.478998,39.998555],
                [116.478998,39.998555],
                [116.479282,39.99856],
                [116.479658,39.998528],
                [116.480151,39.998453],
                [116.480784,39.998302],
                [116.480784,39.998302],
                [116.481149,39.998184],
                [116.481573,39.997997],
                [116.481863,39.997846],
                [116.482072,39.997718],
                [116.482362,39.997718],
                [116.483633,39.998935],
                [116.48367,39.998968],
                [116.484648,39.999861]
            ],

        }
    },
    mounted() {
        this.map();
    },
    methods: {
        map(){
            var lineArr,marker=this.marker;
            let map = new AMap.Map('map', {
                resizeEnable: true,
                center: [116.397428, 39.90923],
                zoom: 17
            });

            this.marker = new AMap.Marker({
                map: map,
                position: [116.478935,39.997761],
                icon: "https://webapi.amap.com/images/car.png",
                offset: new AMap.Pixel(-26, -13),
                autoRotation: true,
                angle:-90,
            });

            // 绘制轨迹
            var polyline = new AMap.Polyline({
                map: map,
                path: this.lineArr,
                showDir:true,
                strokeColor: "#28F",  //线颜色
                strokeWeight: 6,      //线宽
            });

            var passedPolyline = new AMap.Polyline({
                map: map,
                strokeColor: "#AF5",  //线颜色
                strokeWeight: 6,      //线宽
            });

            this.marker.on('moving', function (e) {
                passedPolyline.setPath(e.passedPath);
            });
            map.setFitView();
        },
        //回看
        monitorings(){
            this.$parent.monitoring();
        },
        startAnimation () {
            this.marker.moveAlong(this.lineArr, 200);
        },
        //结束
        stopAnimation () {
            this.marker.stopMove();
        },
        //快速
        speediness () {
            this.marker.moveAlong(this.lineArr, 600);
        }
    },

}
</script>

<style lang="scss">
</style>
