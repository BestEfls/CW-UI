<template>
  <Transition name="cw-alert">
    <div class="cw-alert" :class="{
      [`cw-alert--${type}`]: type,
      'is-light': effect === 'light',
      'is-dark': effect === 'dark',
      'is-center': center
    }" v-if="isOpen">
      <Icon class="cw-alert__icon" :class="{ 'is-big': description }" :icon="iconType!" v-if="props['showIcon']"></Icon>
      <div class="cw-alert__content">
        <span class="cw-alert__title" :class="{ 'with-description': description }">{{ title }}</span>
        <p class="cw-alert__description" v-if="description">{{ description }}</p>
        <Icon icon="xmark" v-if="closeable && !props['closeText']" class="el-alert__close-btn" @click="closeHandler">
        </Icon>
        <div @click="closeHandler" v-if="props['closeText']" class="el-alert__close-btn is-custom">{{ props['closeText']
          }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import type { AlertEmits, AlertProps } from './types';
  import Icon from '../Icon/Icon.vue';
  import { computed, onUnmounted, ref, getCurrentInstance } from 'vue';

  const instance = getCurrentInstance()
  const emits = defineEmits<AlertEmits>()

  const props = withDefaults(defineProps<AlertProps>(), {
    effect: "light",
    type: "primary",
    closeable: true,
  })

  const iconType = computed(() => {
    if (props['showIcon']) {
      let res
      switch (props.type) {
        case "primary":
          res = "copyright"
          break;
        case "info":
          res = "circle-info"
          break
        case "success":
          res = "circle-check"
          break
        case "warning":
          res = "circle-exclamation"
          break
        case "danger":
          res = "circle-xmark"
      }
      return res
    } else {
      return ''
    }
  })

  const isOpen = ref(true)

  function closeHandler(e: MouseEvent) {
    isOpen.value = false
    emits("close", e)
  }

  defineExpose({
    close: closeHandler
  })
</script>

<style scoped></style>