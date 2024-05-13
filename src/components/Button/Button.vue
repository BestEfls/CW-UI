<template>
  <button class="cw-button" :class="{
    [`cw-button--${type}`]: type,
    [`cw-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
  }" :disabled="disabled" :type="nativeType" :autofocus="autofocus" ref="_ref">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { ButtonProps } from './types'
  defineOptions({
    name: 'CwButton',
  })
  withDefaults(defineProps<ButtonProps>(), {
    nativeType: () => 'button',
  })

  const _ref = ref<HTMLButtonElement>()

  defineExpose({
    ref: _ref,
  })
</script>

<style scoped></style>
