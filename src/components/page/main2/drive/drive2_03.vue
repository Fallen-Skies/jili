<template>
    <div class="body-middle">
        <div class="body-middle-chart">
            <div>
                <el-row>
                    <el-col :span="15" class="body-padding-right boder-right">
                        <h3 class="body-margin-bottom">轨迹回放</h3>
                        <div id="map3" class="map"></div>
                        <div class="body-middle-btn" style="float: right;">
                            <el-button @click="startAnimation">回看</el-button>
                            <el-button @click="stopAnimation">暂停</el-button>
                        </div>
                    </el-col>
                    <el-col :span="9" class="body-padding-left">
                        <h3 class="body-margin-bottom">统计信息</h3>
                        <el-row class="middle-text-center body-margin-bottom">
                            <el-col :span="8" v-for="(item,index) in drive2_speed" :key="index" class="drive2-speed">
                                <div><span>{{item.value}}</span>{{index===0?'km/s':'次'}}</div>
                                <p><span>{{item.name}}</span></p>
                            </el-col>
                        </el-row>
                        <div class="table-body">
                            <el-row class="middle-text-center body-head">
                                <el-col :span="8">时间</el-col>
                                <el-col :span="8">地点</el-col>
                                <el-col :span="8">车辆状态</el-col>
                            </el-row>
                            <el-row class="middle-text-center body-foot" v-for="(item,index) in drive2_statistics" :key="index">
                                <el-col :span="8" :title="item.time">{{item.time}}</el-col>
                                <el-col :span="8" :title="item.site">{{item.site}}</el-col>
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
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            drive2_speed:[
                {
                    name:'平均车速',
                    value:'46'
                },{
                    name:'启停次数',
                    value:'2'
                },{
                    name:'偏离路线',
                    value:'3'
                }
            ],

            drive2_statistics:[
                {
                    time:'2019/07/10 12:00:21',
                    site:'上海悦云领克空间',
                    status:'未启动'
                },{
                    time:'2019/07/10 12:00:21',
                    site:'浦东大道1026号',
                    status:'行驶中'
                },{
                    time:'2019/07/10 12:00:21',
                    site:'上海悦云领克空间',
                    status:'熄火'
                },{
                    time:'2019/07/10 12:00:21',
                    site:'上海悦云领克空间',
                    status:'熄火'
                },{
                    time:'2019/07/10 12:00:21',
                    site:'上海悦云领克空间',
                    status:'熄火'
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
            let map = new AMap.Map('map3', {
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
