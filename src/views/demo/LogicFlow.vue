<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-23 16:11:41
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
import {
    DndPanel,
    SelectionSelect,
    Menu,
    Control,
    MiniMap,
    InsertNodeInPolyline,
    BpmnAdapter,
} from '@logicflow/extension'
import '@logicflow/extension/lib/style/index.css'
import { testNode, dndPanelItems, menuConfig } from './dataConfig'

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
        // console.log('当前的输入的值', this.inputText)
        this.lf = new LogicFlow({
            container: this.$refs.container,
            grid: true,
            plugins: [
                DndPanel,
                SelectionSelect,
                Menu,
                Control,
                MiniMap,
                InsertNodeInPolyline,
                BpmnAdapter,
            ],
            pluginsOptions: {
                MiniMap: {
                    width: 200,
                    height: 170,
                    headerTitle: '缩略图',
                    rightPosition: 20,
                    bottomPosition: 10,
                },
            },
        })

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
        // 添加导航栏
        this.lf.extension.control.addItem({
            iconClass: 'custom-minimap',
            title: 'ss',
            text: '导航',
            onMouseEnter: (lf, ev) => {
                const position = lf.getPointByClient(ev.x, ev.y)
                lf.extension.miniMap.show(
                    position.domOverlayPosition.x - 120,
                    position.domOverlayPosition.y + 35
                )
            },
            onClick: (lf, ev) => {
                const position = lf.getPointByClient(ev.x, ev.y)
                lf.extension.miniMap.show(
                    position.domOverlayPosition.x - 120,
                    position.domOverlayPosition.y + 35
                )
            },
        })
        this.lf.render()
        // 通过 getGraphData 来获取转换后的数据
        this.lf.getGraphData()
        this.lf.adapterIn = function (userData) {
            console.log('==userData==', userData)
            // 这里把userData转换为LogicFlow支持的格式
            return logicFlowData
        }
        this.lf.adapterOut = function (logicFlowData) {
            console.log('==logicFlowData==', logicFlowData)
            // 这里把LogicFlow生成的数据转换为用户需要的格式。
            return userData
        }
        // 导航开启
        // this.lf.extension.miniMap.show()
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
:deep(.lf-control-item i) {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background-size: cover;
}
:deep(.custom-minimap) {
    background: url(data:image/png;base64,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);
}
</style>