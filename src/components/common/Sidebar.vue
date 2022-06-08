<template>
    <div class="sidebar">
        <div class="bg"></div>
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#000000" text-color="#666666" active-text-color="#ffffff !important" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs&&onRoute!=='dashboard2'">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            <i :class="subItem.icon"></i>
                            <span slot="title">{{ subItem.title }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-show="onDashboard2(item.index)" :disabled="onDashboard2Disabled(item)">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [{
                        icon: 'iconfont icon-xitongshouye',
                        index: 'dashboard',
                        title: 'Dashboard',
                    },
                    {
                        icon: 'iconfont el-icon-coin',
                        index: 'marketing',
                        title: '营销诊断',
                        subs: [{
                            index: 'marketing',
                            title: '营销诊断',
                            icon: 'iconfont el-icon-suitcase',
                        }]
                    },
                    {
                        icon: 'iconfont icon-jituanguanli',
                        index: 'shop',
                        title: '进店客流统计',
                        subs: [{
                            index: 'shop1',
                            title: '进店客流统计',
                            icon: 'iconfont  icon-zuzhijiagou',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-coordinate',
                        index: 'drive',
                        title: '试驾统计分析',
                        subs: [{
                            index: 'drive1',
                            title: '车型试驾分析',
                            icon: 'iconfont  el-icon-video-camera',
                        },{
                            index: 'drive2',
                            title: '电子围栏监控',
                            icon: 'iconfont  el-icon-video-camera',
                        }]
                    },
                    {
                        icon: 'iconfont icon-quanxian',
                        index: 'table',
                        title: '数字化行为统计',
                        subs: [{
                            index: 'table1',
                            title: '使用追踪',
                            icon: 'iconfont icon-jiaozhigongguanli',
                        }, {
                            index: 'table2',
                            title: '经销商活跃度',
                            icon: 'iconfont icon-jiaozhigongguanli',
                        }, {
                            index: 'table3',
                            title: '车型卖点统计',
                            icon: 'iconfont icon-jiaozhigongguanli',
                        }]
                    },
                    {
                        icon: 'iconfont icon-jiaowuguanli',
                        index: 'semesterManage',
                        title: '市场活动监测',
                        subs: [{
                            index: 'semesterManage1',
                            title: '活动地图',
                            icon: 'iconfont icon-xueqiguanli',
                        }, {
                            index: 'semesterManage2',
                            title: '活动分析',
                            icon: 'iconfont icon-xueqiguanli',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-reading',
                        index: 'advertising',
                        title: '广告投放监测',
                        subs: [{
                            index: 'advertising1',
                            title: '新媒体投放监测',
                            icon: 'iconfont el-icon-data-line',
                        }, {
                            index: 'advertising2',
                            title: '广告效能分析',
                            icon: 'iconfont el-icon-data-line',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-copy-document',
                        index: 'monitoring',
                        title: '报价监测分析',
                        subs: [{
                            index: 'monitoring1',
                            title: '经销商报价监测',
                            icon: 'iconfont el-icon-document-copy',
                        }, {
                            index: 'monitoring2',
                            title: '经销商车型报价分析',
                            icon: 'iconfont el-icon-document-copy',
                        }]
                    },
                    {
                        icon: 'iconfont icon-xiaoxiguanli',
                        index: 'messManage',
                        title: '消费者洞察',
                        subs: [{
                            index: 'messManage1',
                            title: '用户特征画像',
                            icon: 'iconfont icon-_yijicaidanduanxinguanli',
                        }, {
                            index: 'messManage2',
                            title: '用户需求分析',
                            icon: 'iconfont icon-_yijicaidanduanxinguanli',
                        }, {
                            index: 'messManage3',
                            title: '用户购买行为',
                            icon: 'iconfont icon-_yijicaidanduanxinguanli',
                        }, {
                            index: 'messManage4',
                            title: '用户使用行为',
                            icon: 'iconfont icon-_yijicaidanduanxinguanli',
                        }, {
                            index: 'messManage5',
                            title: '用户人群描述',
                            icon: 'iconfont icon-_yijicaidanduanxinguanli',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-files',
                        index: 'platform',
                        title: '平台基础管理',
                        subs: [{
                            index: 'platform1',
                            title: '经销商管理',
                            icon: 'iconfont el-icon-folder',
                        }, {
                            index: 'platform2',
                            title: '市场活动管理',
                            icon: 'iconfont el-icon-folder',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-files',
                        index: 'manage',
                        title: '试驾管理',
                        subs: [{
                            index: 'manage1',
                            title: '试驾线路管理',
                            icon: 'iconfont el-icon-folder',
                        }, {
                            index: 'manage2',
                            title: '试驾车辆管理',
                            icon: 'iconfont el-icon-folder',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-news',
                        index: 'warning',
                        title: '报价预警管理',
                        subs: [{
                            index: 'warning',
                            title: '报价预警管理',
                            icon: 'iconfont el-icon-folder-checked',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-camera',
                        index: 'business',
                        title: '商务政策下发',
                        subs: [{
                            index: 'business',
                            title: '商务政策下发',
                            icon: 'iconfont el-icon-receiving',
                        }]
                    },
                    {
                        icon: 'iconfont el-icon-edit-outline',
                        index: 'questionnaire',
                        title: '问卷投放管理',
                        subs: [{
                            index: 'questionnaire1',
                            title: '投放项目列表管理',
                            icon: 'iconfont el-icon-folder-opened',
                        },{
                            index: 'questionnaire2',
                            title: '项目评估列表',
                            icon: 'iconfont el-icon-folder-opened',
                        },{
                            index: 'questionnaire3',
                            title: '投放问卷管理',
                            icon: 'iconfont el-icon-folder-opened',
                        }]
                    },
                    // {
                    //     icon: 'iconfont icon-yingyongguanli',
                    //     index: '4',
                    //     title: '应用管理',
                    //     subs: [{
                    //         index: '/appManage',
                    //         title: '应用管理',
                    //         icon: 'iconfont icon-ziyuan'
                    //     }]
                    // },
                ]
            }
        },
        computed: {
            onRoutes() {
                let route = this.$route.path.replace('/main1/', '');
                route = route === 'dashboard2' ? 'dashboard' : route
                return route;
            },
            onRoute() {
                return this.$route.path.replace('/', '');
            },
            onDashboard2() {
                return function(item) {
                    if (item === 'main1/dashboard') {
                        return true
                    } else if (this.onRoute !== 'main1/dashboard2') {
                        return true
                    } else {
                        return false
                    }
                }
            },
            onDashboard2Disabled() {
                return function(item) {
                    if (this.onRoute === 'main1/dashboard2') {
                        return true
                    } else {
                        return false
                    }
                }
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            /*bus.$on('collapse', msg => {
                this.collapse = msg;
            })*/
        }
    }
</script>

<style lang="scss">
    //scoped
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 58px;
        bottom: 0;
        overflow-y: scroll;
        // padding-top: 68px;
        background-image: url(~static/img/dashboard/left_bg02.png);
        background-repeat: no-repeat;
    }

    .sidebar>.bg {
        height: 68px;
        background: linear-gradient(180deg, rgb(40, 40, 40), rgb(5, 5, 5)) !important;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu {
        background: url(~static/img/dashboard/left_bg01.png) no-repeat center bottom;
    }

    .sidebar-el-menu:active-text-color {
        color: #ffffff;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 260px;
    }

    .sidebar>ul {
        height: 100%;
    }

    .content-collapse {
        left: 64px;
    }

    .sidebar-el-menu>.el-menu-item:first-child {
        background: rgb(40, 40, 40) !important;
    }

    .sidebar-el-menu>.el-menu-item:first-child:hover {
        background: rgb(20, 20, 20) !important;
    }

    .sidebar-el-menu>.el-menu-item.is-disabled {
        opacity: 1;
        cursor: default;
    }
</style>
