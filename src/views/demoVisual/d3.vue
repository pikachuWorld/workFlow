
<template>
    <div class="common-layout">
        <el-container>
            <ElSide></ElSide>
            <el-container>
                <el-header>
                    <h2 class="success-login">欢迎您登陆后台管理系统， 管理员用户!</h2>
                    <span class="logout" @click="logout">注销</span>
                </el-header>
                <el-main>
                    <div class="avic-mian">
                        <!-- <histogram></histogram> -->
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <histogramZ2></histogramZ2>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <brokenLine></brokenLine>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <!-- <h2>threejs demo</h2> -->
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <pie></pie>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <D3Force></D3Force>
                                </div>
                            </el-col>
                        </el-row>
                    </div>

                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </div>

</template>
  
<script>
import ElSide from '@/components/ElSide.vue'
import { useCounterStore } from '@/stores/counter'
import histogram from './d3Components/d3-z1.vue'
import histogramZ2 from './d3Components/d3-z2.vue'
import BrokenLine from './d3Components/d3-broken.vue'
import Pie from './d3Components/d3-pie.vue'
import D3Force from './d3Components/d3-force.vue'

import * as d3 from 'd3'

export default {
    name: 'd3demo',
    data() {
        return {}
    },
    components: {
        histogram,
        histogramZ2,
        BrokenLine,
        Pie,
        D3Force,
        ElSide,
    },
    watch: {},
    mounted() {},
    methods: {},
}
</script>
  

<style scoped  lang="scss">
@import '@/assets/common-element.scss';

$nav-color: red;

.home-page {
    background: $nav-color;
}
.avic-mian {
    // background: var(--avic-main-bg);--color-background
    padding: 10px 0 0 15px;
    background: var(--color-background);
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
</style>