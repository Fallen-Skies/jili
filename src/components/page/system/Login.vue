<template>
    <div class="login-wrap" v-loading="loading">
        <div id="three_container"></div>
        <!-- <div class="login-carousel-prev" @click="prevPage()"></div>
        <div class="login-carousel-next" @click="nextPage()">></div> -->
        <div class="login-left">
            <el-carousel :autoplay="false" arrow="none" indicator-position="none" ref="carousel" @change="carouselChange">
                <el-carousel-item v-for="(item, index) in imgList" :key="index">
                    <div class="login-img">
                        <img :src=item.src alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="login-right">
            <div class="login-box">
                <div class="login-logo">
                    <img :src="logoSrc" alt="">
                </div>
                <div class="login-title">Vehnov Shop数字化管理平台</div>
                <el-form :model="userForm" :rules="rules" ref="userForm" class="userForm" label-position="top">
                    <el-form-item label="账号" prop="username" class="username_hint">
                        <el-input v-model="userForm.username" size="medium" placeholder="请输入账号" id="username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" class="password_hint">
                        <el-input v-model="userForm.password" type="password" size="medium" placeholder="请输入密码" @keyup.enter.native="submitForm('userForm')" id="password"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('userForm')" size="medium" :style="loginStyle">登录
                        </el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import THREE from "static/js/three.min";

    let SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 70;

    let container;
    let camera, scene, renderer;

    let particles,
        particle,
        count = 0;

    let mouseX = 85,
        mouseY = -342;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    export default {
        data: function() {
            return {
                loading: false,
                imgList: [{
                    id: 0,
                    src: "static/img/login/login_img01.png"
                },
                {
                    id: 1,
                    src: "static/img/login/login_img02.png"
                },
                {
                    id: 2,
                    src: "static/img/login/login_img03.png"
                }],
                loginType: 0,
                logoList: ["static/img/login/login_logo01.png", "static/img/login/login_logo02.png",
                    "static/img/login/login_logo03.png"
                ],
                loginStyle: {
                    backgroundColor: '#f63c53',
                    borderColor: '#f63c53'
                },
                userForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                },
                camera: null,
                scene: null,
                renderer: null,
                particle: null
            }
        },
        computed: {
            logoSrc: function() {
                return this.logoList[this.loginType]
            }
        },
        methods: {
            init() {
                let container = document.getElementById('three_container');

                camera = new THREE.THREE.PerspectiveCamera(
                    120,
                    window.innerWidth / window.innerHeight,
                    1,
                    10000
                );
                container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
                camera.position.z = 1000;

                scene = new THREE.THREE.Scene();

                particles = new Array();

                var PI2 = Math.PI * 2;
                var material = new THREE.THREE.ParticleCanvasMaterial({
                    color: 0xe1e1e1,
                    program: function(context) {
                        context.beginPath();
                        context.arc(0, 0, 0.6, 0, PI2, true);
                        context.fill();
                    }
                });

                var i = 0;

                for (var ix = 0; ix < AMOUNTX; ix++) {
                    for (var iy = 0; iy < AMOUNTY; iy++) {
                        particle = particles[i++] = new THREE.THREE.Particle(material);
                        particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2;
                        particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2;
                        scene.add(particle);
                    }
                }

                renderer = new THREE.THREE.CanvasRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);

            },
            animate() {
                requestAnimationFrame(this.animate);
                this.render();
            },
            render() {
                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                var i = 0;

                for (var ix = 0; ix < AMOUNTX; ix++) {
                    for (var iy = 0; iy < AMOUNTY; iy++) {
                        particle = particles[i++];
                        particle.position.y =
                            Math.sin((ix + count) * 0.3) * 50 +
                            Math.sin((iy + count) * 0.5) * 50;
                        particle.scale.x = particle.scale.y =
                            (Math.sin((ix + count) * 0.3) + 1) * 2 +
                            (Math.sin((iy + count) * 0.5) + 1) * 2;
                    }
                }

                renderer.render(scene, camera);
                count += 0.1;
            },
            submitForm(formName) {
                var username = document.getElementById("username").value;
			 // var username_hint = document.getElementsByClassName("username_hint")[0].innerText;
                if (username == "") {
                    alert("用户名不能为空，请输入用户名");
				// username_hint.html(用户名不能为空);
                    return false;
                } else if (username === "lynkco" || username === "dealer") {
				// return true;
                } else {
				alert(username_hint);
                    alert("用户名错误,请重新输入正确的用户名");
                    return false;
                }
                var password = document.getElementById("password").value;
                if (password == "") {
                    alert("密码不能为空,请输入密码");
                    return false;
                } else if (username == "lynkco") {
                    if (password != "123456") {
                        alert("密码错误,请重新输入");
                        return false;
                    }
                } else if (username == "dealer") {
                    if (password != "123456") {
                        alert("密码错误,请重新输入正确的密码");
                        return false;
                    }
                }

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // localStorage.setItem('username', this.userForm.username);
				    sessionStorage.setItem('username', this.userForm.username);
                        this.loading = true;
                        if (username === "dealer") {
                            this.$router.push('/main2/dashboard');
                        } else {
                            this.$router.push('/main1/dashboard');
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            nextPage() {
                this.$refs.carousel.next();
            },
            prevPage() {
                this.$refs.carousel.prev();
            },
            carouselChange(after, before) {
                this.loginType = after;
            }
        },
        mounted() {
            this.init();
            this.animate()
        }
    }
</script>

<style lang="scss">
    html,
    body,
    #app,
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .login-left {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 70%;
        height: 100%;
    }

    .login-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding-left: 70%;
    }

    .login-img img {
        display: block;
        width: 100%;
    }

    .login-logo img {
        display: block;
        margin: 0 auto;
    }

    .login-title {
        color: #08080b;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -1px;
        text-align: center;
    }

    .login-box {
        position: relative;
        width: 62%;
        height: 100%;
        margin: 0 auto;

        .el-input__inner,
        .el-select-dropdown__item {
            text-align: left;
        }
    }

    .login-btn button {
        width: 100%;
        box-shadow: 0px 4px 7px 0px rgba(246, 60, 83, 0.4);
    }

    .login-logo {
        padding-top: 24%;
    }

    .login-title {
        padding: 30% 0 40%;
        margin-left: -20%;
        margin-right: -20%;
    }

    .login-right {
        .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
            display: none;
        }
    }

    .login-left {

        .el-carousel,
        .el-carousel__container {
            height: 100%;
        }
    }

    .login-carousel-prev,
    .login-carousel-next {
        position: absolute;
        left: 70%;
        width: 64px;
        height: 64px;
        background-color: #0b121a;
        cursor: pointer;
        z-index: 99;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 11px;
            height: 19px;
            transform: translate(-50%, -50%);
            opacity: .5;
        }

        &:hover {
            &::before {
                opacity: 1;
            }
        }
    }

    .login-carousel-next {
        bottom: 114px;

        &::before {
            background: url(~static/img/login/login_icon01.png);
        }
    }

    .login-carousel-prev {
        bottom: 50px;

        &::before {
            background: url(~static/img/login/login_icon02.png);
        }
    }

    #three_container {
        position: absolute;
        top: auto !important;
        bottom: 0 !important;
        width: 100%;
        height: 50%;
        z-index: 9 !important;
        pointer-events: none;
    }
</style>
