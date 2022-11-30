<template>
    <!-- <h2>threejs demo</h2> -->
    <div id="demoThree" class="demo"></div>
</template>
  
  <script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ThreeJs from './index'
export default defineComponent({
    name: 'Demo01',
    props: {},
    setup() {
        onMounted(() => {
            new ThreeJs()
        })
    },
})
</script>
  <style scoped lang="scss">
.demo {
    width: 300px;
    height: 300px;
}
</style>
  
  