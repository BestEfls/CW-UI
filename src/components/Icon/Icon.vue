<template>
  <i class="cw-icon" :class="{ [`cw-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
    <!-- 取消属性透传后,可以使用$props或者$attr去绑定属性 -->
    <FontAwesomeIcon v-bind="filteredProps"></FontAwesomeIcon>
  </i>
</template>

<script setup lang="ts">
  import type { IconProps } from './types'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { omit } from 'lodash-es'
  import { computed } from 'vue';

  defineOptions({
    name: "CwIcon",
    inheritAttrs: false// 取消属性透传 文档:https://cn.vuejs.org/guide/components/attrs.html#fallthrough-attributes
  })

  const props = defineProps<IconProps>()

  const filteredProps = computed(() => omit(props, ['type', 'color']))// 过滤掉props中的type和color属性
  const customStyles = computed(() => props.color ? { color: props.color } : {})
</script>

<style scoped></style>