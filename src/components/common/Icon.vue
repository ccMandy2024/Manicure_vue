<!-- src/components/common/Icon.vue -->
<template>
  <svg aria-hidden="true" class="svg-icon" :style="style">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  size?: string;
}>();

const style = computed(() => ({
  width: props.size || "1em",
  height: props.size || "1em",
}));
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
  display: inline-block;
}
</style>
