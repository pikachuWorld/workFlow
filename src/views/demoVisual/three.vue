<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-24 23:14:35
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-26 20:54:58
-->


<template>
    <!-- <h1>D3.js demo</h1> -->
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <h2>技术调研demo</h2>
                <side-menu></side-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <h2 class="success-login">欢迎您登陆后台管理系统， 管理员用户!</h2>
                    <span class="logout" @click="logout">注销</span>
                </el-header>
                <el-main>
                    <h2>threejs demo</h2>
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <three-one></three-one>

                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                                <three-second></three-second>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- <three-one></three-one>
                    <three-second></three-second> -->
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>

</template>
  
<script>
import SideMenu from '@/components/SideMenu.vue'
import ThreeOne from './threeComponents/threeOne.vue'
import ThreeSecond from './threeComponents/threeSecond.vue'
export default {
    name: 'd3demo',
    data() {
        return {}
    },
    components: {
        SideMenu,
        ThreeOne,
        ThreeSecond,
    },
    watch: {},
    mounted() {},
    methods: {},
}
</script>
  


<style scoped  lang="scss">
$nav-color: red;
.home-page {
    background: $nav-color;
}
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}
.common-layout {
    // background: #fff;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}

.el-header {
    background: #a0cfff;
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .success-login {
        font-size: 18px;
    }
    .logout {
        // width: 30px;
        // height: 30px;
        font-size: 18px;
        cursor: pointer;
    }
}
.el-aside {
    background: #6196cc;
    h2 {
        font-size: 18px;
        text-align: center;
    }
}
.el-main {
    // background: #a0cfff;
    background: #fff;
}

.el-footer {
    background: #a0cfff;
    text-align: center;
}
</style>