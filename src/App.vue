<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
	import bus from '@/components/common/bus';
	export default{
		mounted(){
			const that = this;
			window.onresize = function() {
				bus.$emit('echarts', 'resize');
				if (document.body.clientWidth < 1500) {
					bus.$emit('collapse', true);
				} else {
					bus.$emit('collapse', false);
				}
			};

			//开始动画调整页面
			setTimeout(() => {
				bus.$emit('echarts', 'resize');
			}, 500)
		},
	}
</script>
<style lang="scss">
    /* 公共 */
    @import "static/css/common.scss";
    /* 自定义elementui */
    @import "static/css/elementui-define.scss";
    /* 默认主题 */
    @import "static/css/color-default.scss";
    /* 自定义主题 */
    /*@import "../static/css/theme-green/color-green.css";*/
    // dashboard的层叠样式表
    @import "static/css/dashboard.scss";
    /* 单细胞公共*/
    @import "static/css/monoplast.scss";
    /* 单细胞通用样式*/
    @import "static/css/commonality.scss";
    /* 媒体查询*/
    @import "static/css/mediaqueries.scss";
</style>
