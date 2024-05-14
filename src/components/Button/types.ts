import type { PropType } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
// button标签的原生type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#type
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}

/*
  https://cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props
  为什么写了ButtonProps类型还要搞一个ButtonProps2对象?
    这是因为在vue3.2及以下版本中不允许以下的写法:
      <script setup lang="ts">
        import type { ButtonProps } from './foo'
        const props = defineProps<ButtonProps>()
      </script>
    我们只能使用下面这种写法:
      <script setup lang="ts">
        import { ButtonProps2 } from './foo'
        const props = defineProps(ButtonProps2)
      </script>
    必须要引入编译宏才能解决这个问题,但是在vue3.3版本后这个写法就被支持了

  PropType<T>用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义。
  PropType文档:https://cn.vuejs.org/api/utility-types.html#proptype-t
 */
export const ButtonProps2 = {
  type: {
    type: String as PropType<ButtonProps>,
  },
  size: {
    type: String as PropType<ButtonProps>,
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
