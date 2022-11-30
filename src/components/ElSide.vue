<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-29 13:11:33
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-29 13:34:19
-->


<template>
    <!-- <div class="avic-side"> -->
    <el-aside width="200px">
        <h2>AVIC ADMIN</h2>
        <side-menu></side-menu>
    </el-aside>
    <!-- </div> -->
</template>

<script  setup>
import { useRouter, useRoute } from 'vue-router'
import SideMenu from '@/components/SideMenu.vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
</script>
<style scoped  lang="scss">
@import '@/assets/common-element.scss';
/* #6196cc */
</style>
