<template>
	<div class="messManage5">
		<div class="header-nav"><span>消费者洞察</span> <i class="el-icon-arrow-right"></i>  <span>用户人群描述</span></div>
		<div class="messManage5-body">
			<!-- <vIndexModel7 /> -->
			<vIndexModel7_2 />
		</div>
	</div>
</template>

<script>
	// import vIndexModel7 from '@/components/page/main/dashboard/dashboard_model_7';
	import vIndexModel7_2 from '@/components/page/main/dashboard/dashboard_model_7_2';
	import bus from '@/components/common/bus';
	export default {
	    name: 'messManage5',
	    components: {
	        // vIndexModel7,
	        vIndexModel7_2
	    },
	 }
</script>

<style lang="scss">
	.messManage5{
		.messManage5-body{
			margin: 0px 10px;
		}
		.box-head{
			display: none !important;
		}
	}
</style>
