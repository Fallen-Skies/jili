<template>
    <div class="header">
        <!-- 折叠按钮 
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>-->
        <div class="logo">
            <img src="static/img/dashboard/left_logo.png" alt="">
        </div>
        <div class="header-left">
            <div class="header-title">数字展厅行为监测与分析平台</div>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 消息中心 
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/messageList">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>-->
                <!-- 用户头像 -->
                <div class="user-avator"><img src="static/img/img.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <!-- <el-dropdown-item command="info">个人资料</el-dropdown-item> -->
                        <el-dropdown-item command="loginout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: '全国经理',
                message: 2
            }
        },
        computed: {
            username() {
                let route = this.$route.path;
                let username = route.indexOf('main2') >-1? '经销商' : this.name //localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods: {
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if (command == 'loginout') {
                    //localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
                if (command == 'info') {
                    this.$router.push('/changePsd')
                }
            },
            // 侧边栏折叠
            collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },

        },
        beforeMount() {
        },
        mounted() {
            if (document.body.clientWidth < 1500) {
                this.collapseChage();
            }
        }
    }
</script>
<style lang="scss">
    //scoped
    .header {
        position: relative;
        width: 100%;
        height: 58px;
        font-size: 14px;

        .logo {
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 260px;
            height: 100%;

            img {
                display: block;
            }
        }
		@media (max-width:1400px) {
			.logo {
			    width: 64px;
			    height: 100%;
			    img {
					width: 95%;
					margin: 0 2.5%;
			        display: block;
			    }
			}
		}
    }

    .header-left {
        float: left;
        padding-left: 30px;

        .header-title {
            display: flex;
            height: 58px;
            align-items: center;
            font-size: 14px;
        }
    }

    .header-right {
        float: right;
        padding-right: 30px;

        .header-user-con {
            display: flex;
            height: 58px;
            align-items: center;
        }

        .user-avator img {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }


    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }

  /*  .btn-bell,
    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }

    .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }

    .btn-bell .el-icon-bell {
        color: #fff;
    }*/
	
    .user-name {
        margin-left: 10px;
    }

    .user-avator {
        margin-left: 20px;
    }

    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
