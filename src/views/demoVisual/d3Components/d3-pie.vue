<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-26 18:37:28
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-26 18:55:28
-->

<template>

    <div class="">
        <h2><a href="" target="_blank">D3演示 例3-饼图</a></h2>
        <div id="d3Pie"></div>
    </div>

</template>
  
<script>
import * as d3 from 'd3'

export default {
    name: 'd3demo',
    data() {
        return {}
    },
    components: {
        // histogram,
    },
    watch: {},
    mounted() {
        this.drawBroken()
    },
    methods: {
        drawBroken() {
            //给一个数据
            const width = 300
            const height = 300
            function getColor(i) {
                var palette = [
                    '#688db9',
                    '#515696',
                    '#9bbcab',
                    '#d6cea9',
                    '#a74a90',
                    '#864d93',
                    '#f1a641',
                    '#f38936',
                    '#ed7975',
                    '#f26862',
                ]
                return palette[i % palette.length]
            }
            var dataList = [30, 20, 10, 20, 30]
            var piedata = d3.pie()(dataList)
            var mapPadding = 20
            var svgMap = d3
                .select('#d3Pie')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .style('margin', '10px')
            //定义弧形生成器
            var innerRadius = 50
            var outerRadius = width / 2 - mapPadding
            var arc_generator = d3
                .arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)

            var groups = svgMap
                .selectAll('g')
                .data(piedata)
                .enter()
                .append('g')
                .attr(
                    'transform',
                    'translate(' + width / 2 + ',' + height / 2 + ')'
                )
            groups
                .append('path')
                .attr('fill', function (d, i) {
                    return getColor(i)
                })
                .attr('d', function (d) {
                    return arc_generator(d) //使用弧生成器获取路径
                })
                .on('mouseover', function (d, i) {
                    d3.select(this)
                        .transition()
                        .duration(300)
                        .attr('opacity', 0.7)
                    // attr('opacity', '0.7')
                    // .attr('fill', 'yellow')
                })
                .on('mouseout', function (d, i) {
                    d3.select(this)
                        .transition()
                        .duration(300)
                        .attr('opacity', 1)
                    // .attr('fill', 'grey')
                })
            //添加文字
            groups
                .append('text')
                .attr('transform', function (d) {
                    //位置设在中心处
                    return 'translate(' + arc_generator.centroid(d) + ')'
                })
                .attr('text-anchor', 'middle')
                .text(function (d) {
                    return d.data
                })
                .style('fill', 'black')
                .style('font-size', '20px')
                .style('font-family', 'Arial')
        },
    },
}
</script>
  

<style scoped  lang="scss">
$nav-color: red;
</style>