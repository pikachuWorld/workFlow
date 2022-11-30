<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-29 18:07:38
 * @FilePath: /e-commerce-admin/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="content-main">

        <el-container>

            <ElSide></ElSide>
            <el-container>
                <el-header>
                    <!-- <h2 class="success-login">欢迎您登陆后台管理系统， 管理员用户!</h2>
                    <span class="logout" @click="logout">注销</span>
                    <div class="header-left"></div>
                    <div class="header-right"></div> -->
                    <div class="header-left">
                        <!-- <el-page-header @back="goBack">
                            <template #content>
                                <span class="text-large font-600 mr-3"> Title </span>
                            </template>
                        </el-page-header> -->
                        <div class="avic-header-level1">引擎管理</div>
                        <div class="avic-divider--vertical "></div>
                        <div class="avic-header-level2" @click="handleProcess">流程管理</div>

                    </div>
                    <div class="header-right">
                        <span class="logout" @click="logout">注销</span>
                    </div>

                </el-header>
                <el-main>
                    <div class="avic-breadcrumb">
                        <el-breadcrumb separator="/">
                            <!-- <el-breadcrumb-item :to="{ path: '/' }">引擎管理</el-breadcrumb-item> -->
                            <el-breadcrumb-item :to="{ path: '/' }">引擎管理</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/">流程管理</a></el-breadcrumb-item>

                        </el-breadcrumb>
                    </div>

                    <div class="avic-new-process">
                        <el-button type="primary">+新建</el-button>
                    </div>
                    <div class="avic-table">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column fixed prop="date" label="流程ID" width="150" />
                            <el-table-column prop="name" label="流程名称" />
                            <el-table-column prop="state" label="流程key" />
                            <el-table-column fixed="right" label="操作">
                                <template #default>
                                    <el-button link type="primary" size="small" @click="handleClick">设计流程</el-button>
                                    <el-button link type="primary" size="small">设置审批人员</el-button>
                                    <el-button link type="primary" size="small">发布</el-button>
                                    <el-button link type="primary" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>

    </div>
</template>
  <script>
// import Mock from '../../mock/Mock'
// import Tools from '../../Tools/Tools'

// import { ElMessage, Button } from 'element-plus'
// console.log('222ElMessage', ElMessage)

export default {
    data() {
        return {
            tableData: [
                {
                    date: '1',
                    name: '请假流程-动态表单',
                    state: 'leave-dynamic',
                    // city: 'Los Angeles',
                    // address: 'No. 189, Grove St, Los Angeles',
                    // zip: 'CA 90036',
                    // tag: 'Home',
                },
                {
                    date: '2',
                    name: '请假流程-会签',
                    state: 'leave-multi',
                    // city: 'Los Angeles',
                    // address: 'No. 189, Grove St, Los Angeles',
                    // zip: 'CA 90036',
                    // tag: 'Office',
                },
                {
                    date: '3',
                    name: '办公品采购',
                    state: 'purchase',
                    // city: 'Los Angeles',
                    // address: 'No. 189, Grove St, Los Angeles',
                    // zip: 'CA 90036',
                    // tag: 'Home',
                },
            ],
            // search: '',
        }
    },
    mounted() {},
    // 路由更新时刷新数据
    beforeRouteUpdate(to) {
        // console.log(
        //     'beforeRouteUpdate==beforeRouteUpdate',
        //     to.params,
        //     to.params.type
        // )
        // this.orderList = Mock.getOrder(to.params.type)
    },

    methods: {
        handleClick(index, row) {
            console.log('===index, row===', index, row)
            this.$router.push({ path: '/flow' })
            // this.$router.push({
            //     name: 'Home',
            //     params: {
            //         id: this.id,
            //     },
            // })
        },
        handleProcess() {
            this.$router.push({ path: '/flow' })
        },
        goBack() {
            console.log('go back')
        },
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row) {
            console.log(index, row)
        },
    },
}
</script>
  <style scoped  lang="scss">
@import '@/assets/common-element.scss';
.content-main {
    background: #fff;
    // padding: 10px 0 10px 10px;
    border-radius: 5px;
    .header-left {
        display: flex;
        font-size: 18px;
        align-items: center;
        height: 100%;
        .avic-header-level1,
        .avic-header-level2 {
            height: 100%;
            display: flex;
            font-size: 18px;
            align-items: center;
            height: 100%;
            padding: 0 10px;
            box-sizing: border-box;
        }
        .avic-divider--vertical {
            display: inline-block;
            width: 1px;
            height: 1em;
            margin: 0 8px;
            vertical-align: middle;
            position: relative;
            border-left: 1px var(--el-border-color) var(--el-border-style);
        }
        .avic-header-level2 {
            font-size: 14px;
        }
        .avic-header-level2 {
            background-color: #f8f8f8;
            color: #338fe5;
            border-top: 3px solid #338fe5;
            cursor: pointer;
        }
    }

    .avic-breadcrumb {
        height: 40px;
        display: flex;
        // justify-content: center;
        align-items: center;
        padding-left: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        background: #fff;
    }
    .avic-new-process {
        margin-bottom: 10px;
    }
    .demo-input-suffix {
        .el-input {
            margin-right: 15px;
            width: 180px;
        }
        // UI传透
        ::v-deep .el-input__wrapper {
            width: 300px;
        }
    }
    ::v-deep div.el-row:nth-child(2),
    ::v-deep div.el-row:nth-child(3),
    .order-table {
        margin-top: 20px;
    }
    //   .order-table{
    //     margin-top: 20px;
    //   }
}
</style>