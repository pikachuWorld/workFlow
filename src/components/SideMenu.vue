<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 16:51:41
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-29 14:34:47
-->

<template>
    <div class="side-menu">

        <e-row class="tac">
            <el-menu default-active="route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="selectItem">
                <!-- <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="/home/order/0">普通订单</el-menu-item>

                </el-sub-menu> -->
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <span> 引擎管理</span>
                    </template>
                    <!-- LogicFlow设计器 -->
                    <el-menu-item index="/flowList">流程管理</el-menu-item>
                    <!--X6.js 设计器 -->
                    <el-menu-item index="">设计器</el-menu-item>
                    <el-menu-item index="">已部署流程</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>可视化</span>
                    </template>
                    <el-menu-item index="/d3js">d3.js-demo</el-menu-item>
                    <el-menu-item index="/threejs">Three.js-demo</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>函数编辑</span>
                    </template>
                    <el-menu-item index="/">公式编辑：MathJax.js</el-menu-item>
                    <el-menu-item index="/">代码编辑：CodeMirror</el-menu-item>
                </el-sub-menu>

            </el-menu>
        </e-row>
    </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
function selectItem(index) {
    console.log('selectItem==', route.path, 'index:', index)
    router.push({ path: index })
}
</script>
<style scoped  lang="scss">
@import '@/assets/common-element.scss';
/* #6196cc */
</style>
