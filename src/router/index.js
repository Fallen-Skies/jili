import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/system/Login.vue'], resolve),
            meta: {
                title: 'Vehnov数字化展厅管理平台',
            },
        },
	   //全国经理
        {
            path: '/main1',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: 'Vehnov数字化展厅管理平台'
            },
            children: [{
                path: 'dashboard',
                component: resolve => require(['../components/page/main/dashboard.vue'], resolve),
                meta: {
                    title: 'Vehnov数字化展厅管理平台',
				permission: true
                },
            },
            {
                path: 'marketing',
                component: resolve => require(['../components/page/main/marketing/marketing.vue'], resolve),
            	meta: {
            	    title: 'Vehnov数字化展厅管理平台'
            	},
            },
			{
			    path: 'shop1',
			    component: resolve => require(['../components/page/main/shop/shop1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'drive1',
			    component: resolve => require(['../components/page/main/drive/drive1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'drive2',
			    component: resolve => require(['../components/page/main/drive/drive2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
                path: 'table1',
                component: resolve => require(['../components/page/main/table/table1.vue'], resolve),
            	meta: {
            	    title: 'Vehnov数字化展厅管理平台'
            	},
            },
			{
			    path: 'table2',
			    component: resolve => require(['../components/page/main/table/table2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'table3',
			    component: resolve => require(['../components/page/main/table/table3.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'semesterManage1',
			    component: resolve => require(['../components/page/main/semesterManage/semesterManage1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'semesterManage2',
			    component: resolve => require(['../components/page/main/semesterManage/semesterManage2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'advertising1',
			    component: resolve => require(['../components/page/main/advertising/advertising1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'advertising2',
			    component: resolve => require(['../components/page/main/advertising/advertising2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'monitoring1',
			    component: resolve => require(['../components/page/main/monitoring/monitoring1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'monitoring2',
			    component: resolve => require(['../components/page/main/monitoring/monitoring2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'messManage1',
			    component: resolve => require(['../components/page/main/messManage/messManage1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'messManage2',
			    component: resolve => require(['../components/page/main/messManage/messManage2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'messManage3',
			    component: resolve => require(['../components/page/main/messManage/messManage3.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'messManage4',
			    component: resolve => require(['../components/page/main/messManage/messManage4.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: 'messManage5',
			    component: resolve => require(['../components/page/main/messManage/messManage5.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'platform1',
			    component: resolve => require(['../components/page/main/platform/platform1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'platform2',
			    component: resolve => require(['../components/page/main/platform/platform2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'manage1',
			    component: resolve => require(['../components/page/main/manage/manage1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'manage2',
			    component: resolve => require(['../components/page/main/manage/manage2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'warning',
			    component: resolve => require(['../components/page/main/warning/warning.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'business',
			    component: resolve => require(['../components/page/main/business/business.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'questionnaire1',
			    component: resolve => require(['../components/page/main/questionnaire/questionnaire1.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'questionnaire2',
			    component: resolve => require(['../components/page/main/questionnaire/questionnaire2.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
            {
			    path: 'questionnaire3',
			    component: resolve => require(['../components/page/main/questionnaire/questionnaire3.vue'], resolve),
				meta: {
				    title: 'Vehnov数字化展厅管理平台'
				},
			},
			{
			    path: '404',
			    component: resolve => require(['../components/page/status/404.vue'], resolve),
			}

			],
        },
	   //经销商
        {
            path: '/main2',
            component: resolve => require(['../components/common/Home2.vue'], resolve),
            meta: {
                title: 'Vehnov数字化展厅管理平台'
            },
            children: [{
                path: 'dashboard',
                component: resolve => require(['../components/page/main2/dashboardNew.vue'], resolve),
                meta: {
                    title: 'Vehnov数字化展厅管理平台',
				permission: true
                },
            },
                {
                    path: 'marketing',
                    component: resolve => require(['../components/page/main2/marketing/marketing.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'shop1',
                    component: resolve => require(['../components/page/main2/shop/shop1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'drive1',
                    component: resolve => require(['../components/page/main2/drive/drive1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'drive2',
                    component: resolve => require(['../components/page/main2/drive/drive2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'table1',
                    component: resolve => require(['../components/page/main2/table/table1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'table2',
                    component: resolve => require(['../components/page/main2/table/table2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'table3',
                    component: resolve => require(['../components/page/main2/table/table3.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'semesterManage0',
                    component: resolve => require(['../components/page/main2/semesterManage/semesterManage0.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'semesterManage1',
                    component: resolve => require(['../components/page/main2/semesterManage/semesterManage1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'semesterManage2',
                    component: resolve => require(['../components/page/main2/semesterManage/semesterManage2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'advertising1',
                    component: resolve => require(['../components/page/main2/advertising/advertising1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'advertising2',
                    component: resolve => require(['../components/page/main2/advertising/advertising2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'monitoring1',
                    component: resolve => require(['../components/page/main2/monitoring/monitoring1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'monitoring2',
                    component: resolve => require(['../components/page/main2/monitoring/monitoring2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'messManage1',
                    component: resolve => require(['../components/page/main2/messManage/messManage1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'messManage2',
                    component: resolve => require(['../components/page/main2/messManage/messManage2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'messManage3',
                    component: resolve => require(['../components/page/main2/messManage/messManage3.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'messManage4',
                    component: resolve => require(['../components/page/main2/messManage/messManage4.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'messManage5',
                    component: resolve => require(['../components/page/main2/messManage/messManage5.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'manage1',
                    component: resolve => require(['../components/page/main2/manage/manage1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'manage2',
                    component: resolve => require(['../components/page/main2/manage/manage2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'warning',
                    component: resolve => require(['../components/page/main2/warning/warning.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'active',
                    component: resolve => require(['../components/page/main2/active/active.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'business',
                    component: resolve => require(['../components/page/main2/business/business.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'questionnaire1',
                    component: resolve => require(['../components/page/main2/questionnaire/questionnaire1.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'questionnaire2',
                    component: resolve => require(['../components/page/main2/questionnaire/questionnaire2.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: 'questionnaire3',
                    component: resolve => require(['../components/page/main2/questionnaire/questionnaire3.vue'], resolve),
                    meta: {
                        title: 'Vehnov数字化展厅管理平台'
                    },
                },
                {
                    path: '404',
                    component: resolve => require(['../components/page/status/404.vue'], resolve),
                }

            ],
        },
        /*
            {
                path: '/404',
                component: resolve => require(['../components/page/status/404.vue'], resolve)
            },*/
        {
            path: '/403',
            component: resolve => require(['../components/page/status/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
