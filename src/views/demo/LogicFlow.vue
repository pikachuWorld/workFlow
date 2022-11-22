<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-22 21:43:57
 * @FilePath: /e-commerce-admin/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>
        在vue等前端框架中使用logicflow</h1>
    <div class="main">
        <div class="container" ref="container">
        </div>

    </div>
    <!-- <div class="rightContain">
            <input v-model="inputText">
           当前节点的文字:{{currentText}}
        </div> -->
</template>
  
<script>
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import { DndPanel, SelectionSelect, Menu } from '@logicflow/extension'
import '@logicflow/extension/lib/style/index.css'
// import '@logicflow/extension/lib/style/index.css'
import { testNode, dndPanelItems, menuConfig } from './dataConfig'
// console.log('==DndPanel, SelectionSelect',DndPanel, SelectionSelect)
export default {
    name: 'login',
    data() {
        return {
            user: '',
            currentText: '',
            inputText: 'default',
            curData: null,
        }
    },
    watch: {
        inputText: function (val) {
            console.log('watch监听文本：this.curData', this.curData)
            let { text } = this.curData
            console.log('watch==text==', text, '监听文本：', val)

            let newData = {
                ...this.curData,
                text: {
                    value: val,
                },
            }

            console.log('==修改之后newData==', newData)
        },
    },
    mounted() {
        console.log('当前的输入的值', this.inputText)
        this.lf = new LogicFlow({
            container: this.$refs.container,
            grid: true,
            plugins: [DndPanel, SelectionSelect, Menu],
            // stopMoveGraph: false,
        })
        // this.lf.render();
        /// 测试节点数据 dndPanelItems node:dbclick

        const callback = () => {
            this.lf.extension.selectionSelect.openSelectionSelect()
            this.lf.once('selection:selected', () => {
                console.log('====selection:selected')
                this.lf.extension.selectionSelect.closeSelectionSelect()
            })
        }
        this.lf.extension.dndPanel.setPatternItems(dndPanelItems(callback))
        // 为菜单追加选项（必须在 lf.render() 之前设置）
        this.lf.extension.menu.addMenuConfig(menuConfig)
        // this.lf.extension.menu.setMenuConfig({
        //     nodeMenu: [
        //         {
        //             text: '删除',
        //             className: 'lf-menu-delete',
        //             icon: true,
        //             callback: (node) => {
        //                 this.lf.deleteNode(node.id)
        //             },
        //         },
        //     ], // 覆盖默认的节点右键菜单
        //     edgeMenu: false, // 删除默认的边右键菜单
        //     graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
        // })
        this.lf.render()
        // 事件
        // this.lf.on('node:dbclick', (data) => {
        //     const {text} = data
        //     console.log(data,'==node:dbclick==data==text', text&&text)
        // })
        // this.$nextTick(() => {
        //     this.lf.on('node:dbclick', (data) => {
        //     const {text} = data
        //     console.log(data,'==$nextTick==data==text', text&&text)
        // })
        // });
        // this.lf.on('text:update', (data) => {
        //     const { text } = data
        //     console.log(data, '==text:update==data==text', text)
        //     this.currentText = text
        // })
        // const { eventCenter } = this.lf.graphModel

        // eventCenter.on('node:click', (args) => {
        //     this.curData = args.data
        //     console.log('node:click==args:', args, 'node:click', args.position)
        // })
        // eventCenter.on('element:click', (args) => {
        //     console.log(args.e.target, '==element:click==', args.e.target.value)
        // })
    },
}
</script>
  

<style scoped lang="scss">
$nav-color: red;
.layout-demo {
}

.container {
    width: 800px;
    height: 500px;
}

.left {
    width: 200px;
    height: 100%;
    position: relative;
    background: red;
    opacity: 0.6;
}

.rightContain {
    margin-top: 20px;
}
// lf-menu-item-icon
.lf-menu-delete .lf-menu-item-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('./delete.png') no-repeat;
    background-size: 20px;
}

:deep(.lf-menu-item-icon) {
    // display: inline-block;
    // width: 20px;
    // height: 20px;
    // background: red url('./delete.png') no-repeat;
    // background-size: 20px;
}
:deep(.lf-menu-item-icon:before) {
    content: '\e7c9';
}
</style>