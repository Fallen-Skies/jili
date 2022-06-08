<template>
	<div class="messManage messManage4">
		<div class="header-nav"><span>消费者洞察</span> <i class="el-icon-arrow-right"></i>  <span>用户使用行为</span></div>
		<div class="messManage4-body">
			<vIndexModel6 />
		</div>
	</div>
</template>

<script>
	import vIndexModel6 from '@/components/page/main/dashboard/dashboard_model_6';
	import bus from '@/components/common/bus';
	export default {
	    name: 'messManage6',
	    components: {
	        vIndexModel6
	    },
	}
</script>

<style lang="scss">
	.messManage4{
		.messManage4-body{
			margin: 0px 10px;
		}
	}
</style>
