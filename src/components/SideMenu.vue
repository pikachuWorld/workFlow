<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 16:51:41
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-23 16:52:21
-->

<template>
    <div class="side-menu">

        <el-row class="tac">
            <el-menu default-active="route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="selectItem">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="/home/order/0">普通订单</el-menu-item>

                </el-sub-menu>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <span> 引擎管理</span>
                    </template>
                    <el-menu-item index="/flow">LogicFlow流程管理</el-menu-item>
                    <el-menu-item index="">表单管理</el-menu-item>
                    <el-menu-item index="">已部署流程</el-menu-item>
                </el-sub-menu>

            </el-menu>
        </el-row>
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
/* #6196cc */
.el-menu {
    background: #6196cc;
    width: 100%;
    border-right: none;
    li {
        background: #6196cc;
    }
    .is-active {
        background: #a0cfff;
        color: #fff;
    }
}
</style>
