<template>
	<div class="messManage messManage2">
		<div class="header-nav"><span>消费者洞察</span> <i class="el-icon-arrow-right"></i>  <span>用户需求分析</span></div>
		<div class="messManage2-body">
			<vIndexModel4 />
		</div>
	</div>
</template>

<script>
	import vIndexModel4 from '@/components/page/main2/dashboard/dashboard_model_4';
	import bus from '@/components/common/bus';
	export default {
	    name: 'messManage4',
	    components: {
	        vIndexModel4
	    },
		data() {
		  return {
			
		  };
		},
	}
</script>

<style lang="scss">
	.messManage2{
		.messManage2-body{
			margin: 0px 10px;
		}
	}
</style>
