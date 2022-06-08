<template>
    <div class="drive2">
        <div class="header-nav"><span>试驾监测</span> <i class="el-icon-arrow-right"></i>  <span>试驾详情</span></div>
        <div class='box-head box-head-margin'>
            <h3 class="box-head-style0">试驾详情</h3>
        </div>
        <Drive01 v-if="content === 'dzjk'"></Drive01>
        <Drive02 v-if="content === 'ssjk'"></Drive02>
        <Drive03 v-if="content === 'gj'"></Drive03>
    </div>
</template>

<script>
    import Drive01 from '@/components/page/main2/drive/drive2_01';
    import Drive02 from '@/components/page/main2/drive/drive2_02';
    import Drive03 from '@/components/page/main2/drive/drive2_03';
    export default{
        components: {
            Drive01,
            Drive02,
            Drive03,
        },
        data() {
            return {
                content:'dzjk'
            }
        },
        mounted() {},
        methods: {
            electronic(){
                this.content='dzjk';
            },
            monitoring(){
                this.content='ssjk';
            },
            replaying(){
                this.content='gj';
            },
        },
    }
</script>

<style lang="scss">
.drive2{
    .body-middle-chart{
        >div:last-child{
            padding-bottom: 30px;
        }
    }
    .table_paging{
        margin: 20px auto 0px;
    }
    .map{
        height: 430px;
        width: 100%;
        .amap-copyright{
            display: none!important;
        }
        .amap-logo img{
            display: none!important;
        }
    }
    .body-middle-btn{
        border-bottom: 0px;
        padding: 15px 0px;
        >b{
            font-size: 14px;
            line-height: 30px;
            white-space: nowrap;
        }
        // .body-middle-btn-sj{
        // 	width: 180px;
        // 	height: 30px;
        // 	margin-left: 0px;
        // }
        // .body-middle-btn-sj+span{
        //     margin: 0 10px;
        //     color: #b2b0b0;
        // }
        .body-middle-btn-time{
        	margin-left: 0px;
        }
        .el-button{
            width: 60px;
            margin-left: 10px;
        }
    }
    .drive2-btn{
        border-bottom:0px;
        position: absolute;
        height: 30px;
        right: 0;
        top: -7px;
        font-size: 12px;
        font-weight: 500;
        padding: 0px;
        z-index: 10;
        .el-button{
            width: 60px;
            margin-left: 20px;
        }
    }
    @media (max-width: 1399px){
        .body-middle-btn .el-button {
            margin-left: 10px !important;
        }
        .el-col-15{
            width: 66.66667%;
        }
        .el-col-9{
            width: 33.33333%;
        }
    }

    .drive2-speed{
        color: #333333;
        >div{
            font-family: GeometricSlab703BT-MediumCond;
            letter-spacing: -0.6px;
            font-size: 18px;
            font-weight:600;
            >span{
                font-family: "fjallaone";
                font-size: 36px;
                font-weight: normal;
                letter-spacing: -1.2px;
            }
        }
        >p{
            font-family: MicrosoftYaHei-Bold;
            font-size: 12px;
        }
    }

}
</style>
