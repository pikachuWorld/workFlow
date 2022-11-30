
<template>

    <div class="">
        <h2><a href="" target="_blank">D3演示 例3-热力图</a></h2>
        <div id="forceHeat"></div>
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
            let padding = { top: 20, right: 20, bottom: 20, left: 20 },
                width = 400 - padding.right - padding.left,
                height = 400 - padding.bottom - padding.top

            var svg = d3
                .select('#forceHeat')
                .append('svg')
                .attr('width', width + padding.left + padding.right)
                .attr('height', height + padding.top + padding.bottom)

            // var width = svg.attr('width', 300)
            // var height = svg.attr('height', 300)
            // var padding = {
            //     left: 30,
            //     right: 30,
            //     top: 20,
            //     bottom: 20,
            // }
            var nodesData = [
                { name: 'Lillian', sex: 'F', index: '0' },
                { name: 'Gordon', sex: 'M', index: '1' },
                { name: 'Sylvester', sex: 'M', index: '2' },
                { name: 'Mary', sex: 'F', index: '3' },
                { name: 'Helen', sex: 'F', index: '4' },
                { name: 'Jamie', sex: 'M', index: '5' },
                { name: 'Jessie', sex: 'F', index: '6' },
                { name: 'Ashton', sex: 'M', index: '7' },
                { name: 'Duncan', sex: 'M', index: '8' },
                { name: 'Evette', sex: 'F', index: '9' },
                { name: 'Mauer', sex: 'M', index: '10' },
                { name: 'Fray', sex: 'F', index: '11' },
                { name: 'Duke', sex: 'M', index: '12' },
                { name: 'Baron', sex: 'M', index: '13' },
                { name: 'Infante', sex: 'M', index: '14' },
                { name: 'Percy', sex: 'M', index: '15' },
                { name: 'Cynthia', sex: 'F', index: '16' },
            ]
            var linksData = [
                { source: 'Sylvester', target: 'Gordon', type: 'A' },
                { source: 'Sylvester', target: 'Lillian', type: 'A' },
                { source: 'Sylvester', target: 'Mary', type: 'A' },
                { source: 'Sylvester', target: 'Jamie', type: 'A' },
                { source: 'Sylvester', target: 'Jessie', type: 'A' },
                { source: 'Sylvester', target: 'Helen', type: 'A' },
                { source: 'Helen', target: 'Gordon', type: 'A' },
                { source: 'Mary', target: 'Lillian', type: 'A' },
                { source: 'Ashton', target: 'Mary', type: 'A' },
                { source: 'Duncan', target: 'Jamie', type: 'A' },
                { source: 'Gordon', target: 'Jessie', type: 'A' },
                { source: 'Sylvester', target: 'Fray', type: 'E' },
                { source: 'Fray', target: 'Mauer', type: 'A' },
                { source: 'Percy', target: 'Cynthia', type: 'A' },
                { source: 'Infante', target: 'Duke', type: 'A' },
                { source: 'Duke', target: 'Gordon', type: 'A' },
                { source: 'Baron', target: 'Duke', type: 'A' },
                { source: 'Baron', target: 'Sylvester', type: 'E' },
                { source: 'Evette', target: 'Sylvester', type: 'E' },
                { source: 'Cynthia', target: 'Sylvester', type: 'E' },
            ]
            var force = d3
                .forceSimulation()
                .nodes(nodesData)
                .force('charge', d3.forceManyBody())
                .force(
                    'center',
                    d3.forceCenter(
                        (width - padding.left - padding.right) / 2,
                        (height - padding.top - padding.bottom) / 2
                    )
                )

            var linkForce = d3
                .forceLink(linksData)
                .id((d) => {
                    return d.name
                })
                .distance(150)
            force.force('links', linkForce)
            var link = svg
                .append('g')
                .attr('class', 'links')
                .selectAll('.line')
                .data(linksData)
                .enter()
                .append('line')
                .attr('stroke-width', 1)
                .style('stroke', '#688db9')
            var node = svg
                .append('g')
                .attr('class', 'nodes')
                .selectAll('.node')
                .data(nodesData)
                .enter()
                .append('circle')
                .attr('r', 6)
                .attr('fill', '#515696')
                .style('opacity', 0.8)

            var text = svg
                .append('g')
                .attr('class', 'texts')
                .selectAll('.node')
                .data(nodesData)
                .enter()
                .append('text')
                .attr('dx', '-0.5em')
                .attr('dy', '1em')
                .text(function (d) {
                    return d.name
                })
            force.on('tick', tickAction)

            function tickAction() {
                node.attr('cx', function (d) {
                    return d.x
                }).attr('cy', function (d) {
                    return d.y
                })
                text.attr('x', function (d) {
                    return d.x
                }).attr('y', function (d) {
                    return d.y
                })

                link.attr('x1', function (d) {
                    return d.source.x
                })
                    .attr('y1', function (d) {
                        return d.source.y
                    })
                    .attr('x2', function (d) {
                        return d.target.x
                    })
                    .attr('y2', function (d) {
                        return d.target.y
                    })
            }
            //end
        },
    },
}
</script>
  

<style scoped  lang="scss">
$nav-color: red;
</style>