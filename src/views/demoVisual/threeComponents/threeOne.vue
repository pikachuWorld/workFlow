<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: jinqingsong
 * @Date: 2022-11-24 23:14:35
 * @LastEditors: jinqingsong
 * @LastEditTime: 2022-11-29 15:20:20
-->


<template>
    <!-- <h1>D3.js demo</h1> -->
    <div class="">
        <!-- <h2>threejs demo</h2> -->
        <div id="myThree"></div>
    </div>

</template>
  
<script>
import SideMenu from '@/components/SideMenu.vue'
import { useCounterStore } from '@/stores/counter'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
        this.drawThree()
    },
    methods: {
        drawThree() {
            //创建一个三维场景
            const scene = new THREE.Scene()
            //创建一个物体（形状）
            const geometry = new THREE.BoxGeometry(100, 100, 100) //长宽高都是100的立方体
            // const geometry = new THREE.SphereGeometry(60,40,40);//半径是60的圆
            //widthSegments, heightSegments：水平方向和垂直方向上分段数。widthSegments最小值为3，默认值为8。heightSegments最小值为2，默认值为6。
            //创建材质（外观）
            const material = new THREE.MeshLambertMaterial({
                // color: 0x0000ff,//设置材质颜色(蓝色)
                color: 0x00ff00, //(绿色)
                transparent: true, //开启透明度
                opacity: 0.5, //设置透明度
            })
            //创建一个网格模型对象
            const mesh = new THREE.Mesh(geometry, material) //网络模型对象Mesh
            //把网格模型添加到三维场景
            scene.add(mesh) //网络模型添加到场景中

            // // 添加多个模型（添加圆形）
            const geometry2 = new THREE.SphereGeometry(60, 40, 40)
            const material2 = new THREE.MeshLambertMaterial({
                color: 0xffff00,
            })
            const mesh2 = new THREE.Mesh(geometry2, material2) //网格模型对象Mesh
            // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
            mesh2.position.set(120, 0, 0) //设置mesh3模型对象的xyz坐标为120,0,0
            scene.add(mesh2)

            //添加光源 //会照亮场景里的全部物体（氛围灯），前提是物体是可以接受灯光的，这种灯是无方向的，即不会有阴影。
            const ambient = new THREE.AmbientLight(0xffffff, 0.4)
            const light = new THREE.PointLight(0xffffff, 1) //点光源，color:灯光颜色，intensity:光照强度

            scene.add(ambient)
            light.position.set(200, 300, 400)
            scene.add(light)

            //创建一个透视相机，窗口宽度，窗口高度
            const width = 400,
                height = 300
            const camera = new THREE.PerspectiveCamera(
                45,
                width / height,
                1,
                1000
            )
            //设置相机位置
            camera.position.set(300, 300, 300)
            //设置相机方向
            camera.lookAt(0, 0, 0)

            //创建辅助坐标轴
            const axesHelper = new THREE.AxesHelper(200) //参数200标示坐标系大小，可以根据场景大小去设置
            scene.add(axesHelper)

            //创建一个WebGL渲染器
            const renderer = new THREE.WebGLRenderer()
            renderer.setSize(width, height) //设置渲染区尺寸
            renderer.render(scene, camera) //执行渲染操作、指定场景、相机作为参数

            const controls = new OrbitControls(camera, renderer.domElement) //创建控件对象
            controls.addEventListener('change', () => {
                renderer.render(scene, camera) //监听鼠标，键盘事件
            })
            document.getElementById('myThree').appendChild(renderer.domElement)

            // onMounted(()=>{
            //     document.getElementById('my-three')?.appendChild(renderer.domElement)
            // })
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
.el-aside {
    background: #313a4c;
    h2 {
        font-size: 18px;
        text-align: center;
    }
}
// .el-main {
//     // background: #a0cfff;
//     background: #fff;
// }

.el-footer {
    background: #a0cfff;
    text-align: center;
}
</style>