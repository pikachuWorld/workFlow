
<template>

    <div>
        <h2><a href="https://d3js.org" target="_blank">D3演示histogram</a></h2>
        <div id="rose-chart-container"></div>
    </div>

</template>
  
<script>
import SideMenu from '@/components/SideMenu.vue'
import { useCounterStore } from '@/stores/counter'

import * as d3 from 'd3'

export default {
    name: 'd3demo',
    data() {
        return {}
    },
    components: {
        SideMenu,
    },
    watch: {},
    mounted() {
        this.drawroseChart()
    },
    methods: {
        drawroseChart() {
            var width = 500
            var height = 400
            var high = [
                10, 15, 17, 13, 17, 15, 17, 15, 18, 19, 22, 26, 26, 24, 23,
            ]
            var low = [1, 4, 8, 5, 5, 4, 6, 6, 5, 7, 11, 12, 13, 13, 14]
            var svg = d3
                .select('#rose-chart-container') //选择<body>
                .append('svg') //在<body>中添加<svg>
                .attr('width', width) //设定<svg>的宽度属性
                .attr('height', height)
            var rect = svg
                .selectAll('rect')
                .data(low)
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                    console.log('111==d', d, '==i==', i)
                    return i * 30 + 20
                })
                .attr('y', function (d) {
                    // console.log('222==d', d)
                    return 500 - d * 13
                })
                .attr('fill', 'blue')
                .attr('opacity', 0.5)
                .attr('width', 20)
                .attr('height', function (d) {
                    // console.log('333==d', d)
                    return d * 13
                })
            var rect2 = svg
                .selectAll('rect2')
                .data(high)
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                    // console.log('444==d', d)
                    return i * 30 + 20
                })
                .attr('y', function (d) {
                    // console.log('555==d', d)
                    return 500 - d * 13
                })
                .attr('fill', 'orange')
                .attr('opacity', 0.5)
                .attr('width', 20)
                .attr('height', function (d) {
                    // console.log('666==d', d)
                    return d * 13
                })
        },
    },
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
// .el-aside {
//     background: #6196cc;
//     h2 {
//         font-size: 18px;
//         text-align: center;
//     }
// }
// .el-main {
//     background: #a0cfff;
// }
.el-footer {
    background: #a0cfff;
    text-align: center;
}
</style>