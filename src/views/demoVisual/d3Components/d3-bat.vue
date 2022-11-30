<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-24 23:14:35
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-24 23:56:42
-->
<template>

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
                    {{route.path}}
                    <h1>D3.js demo</h1>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>

</template>
  
<script>
import SideMenu from '@/components/SideMenu.vue'
import { useCounterStore } from '@/stores/counter'

export default {
    name: 'd3demo',
    data() {
        return {}
    },
    components: {},
    watch: {},
    mounted() {},
}
</script>
  

<style scoped lang="scss">
$nav-color: red;
</style>