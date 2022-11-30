<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-23 21:09:50
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-30 10:46:57
-->

<template>
    <!-- <h1>
        在vue等前端框架中使用logicflow</h1> -->
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="16">
                        <div class="grid-content ep-bg-purple">
                            流程设计
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content ep-bg-purple-light">
                            <div class="snapshot">
                                <span id="download">
                                    <img src="../../../public/icon-01.png" alt="下载图片">
                                </span>
                                <span>
                                    <img src="../../../public/icon-02.png" alt="上传XML">
                                </span>
                                <span>
                                    <img src="../../../public/icon-03.png" alt="上传XML">
                                </span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <div class="main">

                    <el-row :gutter="20">
                        <el-col :span="19">
                            <div class="grid-content ep-bg-purple">
                                <div class="container" ref="container">
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <h3>流程信息栏</h3>
                            <div class="grid-content ep-bg-purple">
                                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                                    <el-tab-pane label="基本信息" name="first">
                                        <el-form label-width="100px" style="max-width: 460px">
                                            <el-form-item label="标识">
                                                <el-input v-model="formLabelAlign.name" />
                                            </el-form-item>
                                            <el-form-item label="名称">
                                                <el-input v-model="formLabelAlign.region" />
                                            </el-form-item>
                                            <el-form-item label="业务标识">
                                                <el-input v-model="formLabelAlign.type" />
                                            </el-form-item>
                                        </el-form>
                                    </el-tab-pane>
                                    <el-tab-pane label="人员" name="second">人员</el-tab-pane>
                                    <el-tab-pane label="表单" name="third">表单</el-tab-pane>
                                    <el-tab-pane label="扩展" name="fourth">扩展</el-tab-pane>
                                </el-tabs>
                            </div>
                        </el-col>
                    </el-row>

                    <!-- <el-button :plain="true" id="js_set_animate" class="download-pic">开启动画</el-button> -->

                </div>
            </el-main>
        </el-container>
    </div>

    <!-- <div class="rightContain">
            <input v-model="inputText">
           当前节点的文字:{{currentText}}
        </div> -->
</template>
  
<script>
import LogicFlow from '@logicflow/core'
import { Calendar } from '@element-plus/icons-vue'
import { ref } from 'vue'
// import { TabsPaneContext } from 'element-plus'

import {
    DndPanel,
    SelectionSelect,
    Menu,
    Control,
    MiniMap,
    InsertNodeInPolyline,
    BpmnElement,
    BpmnXmlAdapter,
    // BpmnAdapter,
    Snapshot,
} from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import { testNode, dndPanelItems, menuConfig } from './dataConfig'
import UserTask from './common/UserTaskNode'
import SystemTask from './common/SystemTaskNode'
import StartTask from './common/startTaskNode'
import EndTask from './common/endTaskNode'
import DiamondTask from './common/diamondTaskNode'
import customEdge from './common/customEdge'

export default {
    name: 'login',
    data() {
        return {
            user: '',
            currentText: '',
            inputText: 'default',
            curData: null,
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
            },
        }
    },
    components: {
        Calendar,
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
                // BpmnAdapter,
                Snapshot,
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
        // StartTaskNode   CustomEdge
        this.lf.register(StartTask)
        this.lf.register(UserTask)
        this.lf.register(SystemTask)
        this.lf.register(EndTask)
        this.lf.register(DiamondTask)
        this.lf.register(customEdge)
        this.lf.setDefaultEdgeType('custom-edge')
        const callback = () => {
            this.lf.extension.selectionSelect.openSelectionSelect()
            this.lf.once('selection:selected', () => {
                console.log('====selection:selected')
                this.lf.extension.selectionSelect.closeSelectionSelect()
            })
        }
        this.lf.setTheme({
            baseNode: {
                fill: '#FFFFFF',
                stroke: 'rgb(24, 125, 255)',
                strokeWidth: 2,
            },
            baseEdge: {
                stroke: '#187DFF',
                strokeWidth: 2,
            },
        })

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
        //SystemTask  DiamondTask
        this.lf.render({
            nodes: [
                {
                    type: 'UserTask',
                    x: 200,
                    y: 200,
                },
            ],
            nodes: [
                {
                    type: 'SystemTask',
                    x: 300,
                    y: 300,
                },
            ],
            nodes: [
                {
                    type: 'StartTask',
                    x: 100,
                    y: 100,
                },
            ],
            nodes: [
                {
                    type: 'DiamondTask',
                    x: 200,
                    y: 200,
                },
            ],
        })
        // 通过 getGraphData 来获取转换后的数据
        this.lf.getGraphData()
        // 开启动画效果

        // document
        //     .querySelector('#js_set_animate')
        //     .addEventListener('click', () => {
        //         const { edges } = this.lf.getGraphRawData()
        //         console.log('==getGraphRawData==', edges)
        //         edges.forEach(({ id }) => {
        //             this.lf.openEdgeAnimation(id)
        //         })
        //     })
        // // 可以使用任意方式触发，然后将绘制的图形下载到本地磁盘上
        // document.getElementById('download').addEventListener('click', () => {
        //     console.log('download')
        //     this.lf.getSnapshot()
        //     // 或者 1.1.13版本
        //     // this.lf.extension.snapshot.getSnapshot()
        // })
        const activeName = ref('first')
        console.log('===activeName===', activeName.value)

        const handleClick = (tab, event) => {
            console.log(tab, event)
        }
    },
    methods: {},
}
</script>
 

<style scoped lang="scss">
@import '@/assets/common-element.scss';

$nav-color: red;
.layout-demo {
}
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
:deep(.el-header) {
    display: block;
    line-height: 60px;
}
:deep(.el-main) {
    padding: 0;
}
:deep(.el-form-item) {
    display: block;
}
:deep(.el-form-item .el-form-item__label) {
    display: flex;
    height: auto;
    text-align: left;
    margin-bottom: 8px;
    line-height: 22px;
    flex-direction: row;
    justify-content: flex-start;
}

.main {
    position: relative;
    top: 6px;
    .download-pic {
        position: absolute;
        top: 20px;
        left: 100px;
    }
    .snapshot {
        // position: absolute;
        // left: 50px;
        // bottom: 20px;
        // z-index: 9999;
        background: hsla(0, 0%, 100%, 0.8);
        box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
        padding: 10px;
        display: flex;
        span {
            display: block;
            margin-left: 10px;
            // background: #000;
        }
    }
}
.snapshot {
    // position: absolute;
    // left: 50px;
    // bottom: 20px;
    // z-index: 9999;
    background: hsla(0, 0%, 100%, 0.8);
    // box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    // padding: 10px;
    display: flex;
    height: 30px;
    margin-top: 20px;
    span {
        display: block;
        margin-left: 10px;
        // background: #000;
    }
}
.container {
    width: 100%;
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
.download-pic {
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
:deep(.lf-dnd-shape) {
    width: 26px;
    height: 26px;
    background-size: cover;
}
:deep(.custom-minimap) {
    background: url(data:image/png;base64,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);
}
</style>