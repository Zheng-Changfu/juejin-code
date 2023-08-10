<script setup lang="ts">
import { ref } from 'vue';
import { useMouse } from './hooks/useMouse'
// import { useMouseInElement } from './hooks/useMouseInElement'
import { useEventListener } from './hooks/useEventListener'
import { useMouseInElement } from '@vueuse/core'

const el = ref()
const el2 = ref()
const { x, y } = useMouse()
const { elementX, elementY, elementPositionX, elementPositionY } = useMouseInElement(el)

</script>
<template>
  <div ref="el" :style="{ width: '90vw', height: '1000px', background: '#ccc' }">{{ elementPositionX }},{{
    elementPositionY
  }}</div>
  <!-- <div class="outer" ref="el2">
    <div class="inner">inner</div>
  </div> -->
</template>
<style scoped>
.outer {
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: skyblue;
  overflow: scroll;
}

.inner {
  width: 100px;
  height: 400px;
  background-color: red;
}
</style>
