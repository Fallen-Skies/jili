//引入阿里巴巴图标库
import './assets/icon/iconfont.css';
import './assets/iconfont/iconfont.css';
// ElementUI默认主题
import 'element-ui/lib/theme-chalk/index.css';
// ElementUI自定义主题
// import '../static/css/theme-green/index.css';       
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';

//引入公用方法
import commonJs from '../static/js/commonJs';
Vue.prototype.$commonJs = commonJs

Vue.use(ElementUI, {
    size: 'small'
});
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.permission)) { // 判断该路由是否需要登录权限
		console.log("需要登录");
		const role = sessionStorage.getItem('username');
		if(!role && to.path !== '/login'){
			next('/login');
		}else if(to.meta.permission){
		   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
			if(role === 'lynkco' && to.path.indexOf('/main1') !== -1){
				next();	   
			}else if(role === 'dealer' && to.path.indexOf('/main2') !== -1){
				next(); 
			}else{
				next('/403');
			}
		}else{
		   // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
			if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
				Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
					confirmButtonText: '确定'
				});
			}else{
				next();
			}
		}
    	
	} else{
		next();
	}
})
// 路由判断登录 根据路由配置文件的参数
// router.beforeEach((to, from, next) => {
//  if (to.matched.some(record => record.meta.permission)){ // 判断该路由是否需要登录权限
//   console.log('需要登录');
//   if (sessionStorage.uzername) { // 判断当前的token是否存在 ； 登录存入的token
//    next();
//   }
//   else {
//    next({
//     path: '/',
//     query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//    })
//   }
//  }
//  else {
//   next();
//  }
// });
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');