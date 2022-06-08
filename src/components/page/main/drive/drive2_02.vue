<template>
    <div class="body-middle">
        <div class="body-middle-chart">
            <div>
                <h3 class="body-margin-bottom">试驾实时监控
                    <div class="body-middle-btn drive2-btn">
                        <span>经销商</span>
                        <el-select v-model="dealer_value" placeholder="请选择">
                            <el-option v-for="item in dealer_select" :key="item.dealer_value" :label="item.label" :value="item.dealer_value"></el-option>
                        </el-select>
                        <span class="span-left">区域</span>
                        <el-select v-model="area_value" placeholder="请选择">
                            <el-option v-for="item in area_select" :key="item.area_value" :label="item.label" :value="item.area_value"></el-option>
                        </el-select>
                        <el-button >查询</el-button>
                    </div>
                </h3>
                <div id="map2" class="map"></div>
            </div>
            <div>
                <h3 class="body-margin-bottom">车辆行驶记录</h3>
                <div class="table-body">
                    <el-row class="middle-text-center body-head">
                        <el-col :span="3">车型</el-col>
                        <el-col :span="3">车牌</el-col>
                        <el-col :span="3">车辆状态</el-col>
                        <el-col :span="3">行驶状态</el-col>
                        <el-col :span="3">当前位置</el-col>
                        <el-col :span="4">上报时间</el-col>
                        <el-col :span="5">超出电子围栏范围次数</el-col>
                    </el-row>
                    <el-row class="middle-text-center body-foot" v-for="(item,index) in drive2_record2" :key="index">
                        <el-col :span="3" :title='item.brand'>{{item.brand}}</el-col>
                        <el-col :span="3" :title='item.plate'>{{item.plate}}</el-col>
                        <el-col :span="3" :title='item.vehicle'>{{item.vehicle}}</el-col>
                        <el-col :span="3" :title='item.travel'>{{item.travel}}</el-col>
                        <el-col :span="3" :title='item.site'>{{item.site}}</el-col>
                        <el-col :span="4" :title='item.time'>{{item.time}}</el-col>
                        <el-col :span="5">
                            <div>
                                <span>车辆详情</span>
                                <span @click="replayings">轨迹</span>
                                <span @click="electronics">历史轨迹</span>
                            </div>
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
</template>

<script>
export default{
    data() {
        return {
            dealer_select:[{
                dealer_value: '选项1',
                label: '上海悦云领'
            }],
            dealer_value: '选项1',

            area_select: [{
               area_value: '选项1',
               label: '领克一区'
            },{
               area_value: '选项2',
               label: '领克二区'
            },{
               area_value: '选项3',
               label: '领克三区'
            }],
            area_value:'选项1',

            drive2_record2: [
                {
                    brand:'领克01',
                    plate:'沪A54169',
                    vehicle:'停车',
                    travel:'未启动',
                    site:'上海悦云领克空间',
                    time:'2019/07/10 12:00:21'
                },{
                    brand:'领克01',
                    plate:'沪A54169',
                    vehicle:'试乘试驾中',
                    travel:'行驶中',
                    site:'浦东大道1026号',
                    time:'2019/07/10 12:00:21'
                },{
                    brand:'领克01',
                    plate:'沪A54169',
                    vehicle:'试乘试驾中',
                    travel:'熄火',
                    site:'上海悦云领克空间',
                    time:'2019/07/10 12:00:21'
                },{
                    brand:'领克01',
                    plate:'沪A54169',
                    vehicle:'试乘试驾中',
                    travel:'熄火',
                    site:'上海悦云领克空间',
                    time:'2019/07/10 12:00:21'
                },{
                    brand:'领克01',
                    plate:'沪A54169',
                    vehicle:'试乘试驾中',
                    travel:'熄火',
                    site:'上海悦云领克空间',
                    time:'2019/07/10 12:00:21'
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
            let map = new AMap.Map('map2', {
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
        electronics(){
            this.$parent.electronic();
        },
        replayings(){
            this.$parent.replaying();
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
