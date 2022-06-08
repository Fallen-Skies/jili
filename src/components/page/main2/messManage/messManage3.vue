<template>
	<div class="messManage messManage3">
		<div class="header-nav"><span>消费者洞察</span> <i class="el-icon-arrow-right"></i>  <span>用户购买行为</span></div>
		<div class="messManage3-body">
			<vIndexModel5 />
		</div>
	</div>
</template>

<script>
	import vIndexModel5 from '@/components/page/main2/dashboard/dashboard_model_5';
	import bus from '@/components/common/bus';
	export default {
	    name: 'messManage5',
	    components: {
	        vIndexModel5
	    },
	}
</script>

<style lang="scss">
	.messManage3{
		.messManage3-body{
			margin: 0px 10px;
		}
	}
</style>
