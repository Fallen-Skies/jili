<template>
	<div class="messManage messManage1">
		<div class="header-nav"><span>消费者洞察</span> <i class="el-icon-arrow-right"></i>  <span>用户特征画像</span></div>
		<div class="messManage1-body">
			<vIndexModel3 />
		</div>
	</div>
</template>

<script>
	import vIndexModel3 from '@/components/page/main/dashboard/dashboard_model_3';
	import bus from '@/components/common/bus';
	export default {
	    name: 'messManage3',
	    components: {
	        vIndexModel3
	    },
	}
</script>

<style lang="scss">
	.messManage1{
		.messManage1-body{
			margin: 0px 10px;
		}
        .model_3 .el-select{
            margin-right: 0;
        }
		.box-head{
			display: none !important;
		}
		.el-input--mini{
			position: absolute;
			top: -32px !important;
		}
	}
</style>
