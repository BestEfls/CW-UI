<template>
  <div class="cw-collapse-item">
    <div class="cw-collapse-item__header" :id="`item-header-${name}`" @click="handleClick"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }">
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="cw-slide" v-on="transitionEvents">
      <!-- 
        为什么要在cw-collapse-item__content外包一层cw-collapse-item__wrapper?
          这是因为cw-collapse-item__content是通过改变height来执行动画的,但是cw-collapse-item__content有一个padding-bottom
          所以当isActive为true动画刚开始进行时cw-collapse-item__content的height为0,而padding-bottom为25px.这就导致cw-collapse-item__content
          一开始就有一段高度,这种用户眼中就是突然有了一段高度然后再开始动画,这样的效果就非常不好. 于是我们选择在cw-collapse-item__content外面
          包一层cw-collapse-item__wrapper然后通过改变cw-collapse-item__wrapper的高度来进行动画,这样就可以规避掉上面的问题
       -->
      <div class="cw-collapse-item__wrapper" v-show="isActive">
        <div class="cw-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject } from 'vue';
  import type { ItemProps } from './types'
  import { collapseContextKey } from './types'
  import Icon from '../Icon/Icon.vue';

  defineOptions({
    name: 'CwCollapseItem',
  })

  const props = defineProps<ItemProps>()

  const collapseContext = inject(collapseContextKey)

  const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
  const handleClick = () => {
    // 如果collapseItem的disabled为true就直接返回
    if (props.disabled) return
    // 执行上下文中的处理方法
    collapseContext?.handleItemClick(props.name)
  }

  // 实现动画
  const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el) {
      el.style.height = '0px'
      el.style.overflow = 'hidden'
    },
    enter(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el) {
      el.style.height = ''
      el.style.overflow = ''
    },
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`
      el.style.overflow = 'hidden'
    },
    leave(el) {
      el.style.height = '0px'
    },
    afterLeave(el) {
      el.style.height = ''
      el.style.overflow = ''
    }
  }

</script>

<style scoped></style>
