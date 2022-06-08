<template>
    <div>
        <el-row>
            <div class="page-title">Dashboard</div>
        </el-row>
        <vIndexModel01 />
        <vIndexModel012 />
        <vIndexModel2 />
        <vIndexModel3 />
        <vIndexModel4 />
        <vIndexModel5 />
        <vIndexModel6 />
        <!-- <vIndexModel7 /> -->
        <vIndexModel7_2 />
    </div>
</template>

<script>
    import vIndexModel01 from '@/components/page/main/dashboard/dashboard_model_0_1';
    import vIndexModel012 from '@/components/page/main/dashboard/dashboard_model_0_12';
    import vIndexModel2 from '@/components/page/main/dashboard/dashboard_model_2';
    import vIndexModel3 from '@/components/page/main/dashboard/dashboard_model_3';
    import vIndexModel4 from '@/components/page/main/dashboard/dashboard_model_4';
    import vIndexModel5 from '@/components/page/main/dashboard/dashboard_model_5';
    import vIndexModel6 from '@/components/page/main/dashboard/dashboard_model_6';
    // import vIndexModel7 from '@/components/page/main/dashboard/dashboard_model_7';
    import vIndexModel7_2 from '@/components/page/main/dashboard/dashboard_model_7_2';

    import bus from '@/components/common/bus';

    export default {
        name: 'dashboard',
        components: {
            vIndexModel01,
            vIndexModel012,
            vIndexModel2,
            vIndexModel3,
            vIndexModel4,
            vIndexModel5,
            vIndexModel6,
            // vIndexModel7,
            vIndexModel7_2
        },
        data() {
            return {}
        },
        computed: {},
//         mounted() {
//             const that = this;
//             window.onresize = function() {
//                 bus.$emit('echarts', 'resize');
//                 if (document.body.clientWidth < 1500) {
//                     bus.$emit('collapse', true);
//                 } else {
//                     bus.$emit('collapse', false);
//                 }
//             };
//
//             //开始动画调整页面
//             setTimeout(() => {
//                 bus.$emit('echarts', 'resize');
//             }, 500)
//         },
        methods: {}
    }
</script>
<style lang="scss">

</style>
