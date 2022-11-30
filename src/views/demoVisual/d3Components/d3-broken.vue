<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-25 19:55:59
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-26 18:44:57
-->

<template>

    <div class="">
        <h2><a href="" target="_blank">D3演示 例2-折线图</a></h2>
        <div id="brokenLine"></div>
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
            const height = 300,
                width = 300,
                margin = 25
            //定义咱们的svg画布空间容器
            //定义咱们的svg画布空间容器
            let svg = d3
                .select('#brokenLine')
                .append('svg')
                .attr('width', width)
                .attr('height', height)

            //绘制一个横着的坐标轴
            // function drawXAxis() {
            console.log('broken===drawXAxis')
            //创建线性比例尺，使用坐标轴必备
            const xScale = d3
                .scaleLinear()
                .domain([0, 10])
                .range([0, width - margin * 2])

            //创建底部的x的坐标轴
            const xAxis = d3.axisBottom(xScale)

            //使坐标轴插入svg中
            svg.append('g')
                .attr('class', 'x-axis')
                .attr('transform', function () {
                    //让平移到底部x对的位置，咱们还要绘制y轴呢
                    return `translate(${margin}, ${height - margin})`
                })
                .call(xAxis)
            // }

            //绘制一个竖着的坐标轴
            // function drawYAxis() {
            console.log('broken===drawYAxis')

            //创建线性比例尺，使用坐标轴必备
            const yScale = d3
                .scaleLinear()
                .domain([10, 0])
                .range([0, width - margin * 2])

            //创建底部的x的坐标轴
            const yAxis = d3.axisLeft(yScale)

            //使坐标轴插入svg中
            svg.append('g')
                .attr('class', 'y-axis')
                .attr('transform', function () {
                    //让平移到底部x对的位置，咱们还要绘制y轴呢
                    return `translate(${margin}, ${margin})`
                })
                .call(yAxis)
            // }

            // function drawGrid() {
            console.log('broken===drawGrid')
            //绘制y轴的线
            d3.selectAll('.y-axis .tick')
                .append('line')
                .attr('x1', 0)
                .attr('y1', 0)
                //大家不必疑惑这个height - margin * 2 他其实就是咱们的长度啊
                .attr('x2', height - margin * 2)
                .attr('y2', 0)
                .attr('stroke', '#e4e4e4')

            //绘制x轴的线
            d3.selectAll('.x-axis .tick')
                .append('line')
                .attr('x1', 0)
                .attr('y1', 0)
                .attr('x2', 0)
                .attr('y2', -height + margin * 2)
                .attr('stroke', '#e4e4e4')
            // }
            //数据定义, 两条线
            const data = [
                [
                    { x: 0, y: 6 },
                    { x: 1, y: 5 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 5 },
                    { x: 6, y: 4 },
                    { x: 7, y: 3 },
                    { x: 8, y: 3 },
                    { x: 9, y: 2 },
                    { x: 10, y: 10 },
                ],
                d3.range(10).map(function (i) {
                    return { x: i, y: Math.min(i) }
                }),
            ]
            // function drawLine() {
            //d3.line是把数组的坐标生成一个path路径
            //创建柱子容器,方便绑定事件
            // const chart = g.selectAll('bar').data(dataArr).enter().append('g')
            let line = d3
                .line()
                .x(function (d) {
                    //这个d就是咱们的data[0] 遍历的数据了 return也就是坐标 相当于帮咱们生成了一个 M0,0 L 1,2.....这个样
                    return xScale(d.x)
                })
                .y(function (d) {
                    return yScale(d.y)
                })
                .curve(d3.curveCardinal) //曲线效果

            // const chart = svg.append('g').selectAll('.circle')

            //添加path
            svg.selectAll('path.path')
                .data(data)
                .enter()
                .append('path')
                .attr('class', 'path')
                .attr('d', function (d) {
                    return line(d)
                })
                .attr('stroke', '#2e6be6')
                .attr('fill', 'none')
                .attr('transform', `translate(${margin}, ${margin})`)
            // .on('mouseover', function () {
            //     d3.select(this).attr('opacity', '0.7')
            // })
            // .on('mouseout', function () {
            //     d3.select(this).attr('opacity', '1')
            // })
            // }
            data.forEach((item) => {
                svg.append('g')
                    .selectAll('.circle')
                    .data(item)
                    .attr('class', 'circle')
                    .enter()
                    .append('circle')
                    .attr('cx', function (d) {
                        return xScale(d.x)
                    })
                    .attr('cy', function (d) {
                        return yScale(d.y)
                    })
                    .attr('r', 4)
                    .attr('transform', `translate(${margin}, ${margin})`)
                    .attr('fill', '#fff')
                    .attr('stroke', 'rgba(56, 8, 228, .5)')
                // .on('mouseover', () => {
                //     console.log('mouseover', this)
                //     d3.select(this)
                //         .transition()
                //         .duration(300)
                //         .attr('opacity', '0.7')
                // })
                // .on('mouseout', function () {
                //     console.log('mouseout')
                //     d3.select(this).attr('opacity', '1')
                // })
            })

            // drawXAxis()
            // drawYAxis()
            // drawGrid()
            // drawLine()
            function drawAnimations() {
                //连线动画
                svg.selectAll('path.path')
                    .attr('stroke', '#2e6be6')
                    .attr('transform', 'translate(25,25)')
                    .style('stroke-dasharray', function () {
                        return d3.select(this).node().getTotalLength()
                    })
                    .style('stroke-dashoffset', function () {
                        return d3.select(this).node().getTotalLength()
                    })
                    .transition()
                    .duration(2000)
                    .delay(200)
                    .ease(d3.easeLinear)

                    .style('stroke-dashoffset', 0)
                //圆点
                svg.selectAll('.circle')
                    .style('stroke-width', 0)
                    .transition()
                    .duration(1000)
                    .delay(function (d, i) {
                        return i * 100
                    })
                    .ease(d3.easeLinear)
                    .style('stroke-width', 1)

                //加一个简单的事件交互
                // const chart = svg.selectAll('.circle')
                // chart
                //     .on('mouseover', function () {
                //         d3.select(this).attr('opacity', '0.7')
                //     })
                //     .on('mouseout', function () {
                //         d3.select(this).attr('opacity', '1')
                //     })
            }
            drawAnimations()
            // end
        },
    },
}
</script>
  

<style scoped  lang="scss">
$nav-color: red;
</style>