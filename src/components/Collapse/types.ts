import type { InjectionKey, Ref } from 'vue'

export type NameType = string | number

export interface ItemProps {
  // CollapseItem的name,name属性作为CollapseItem的一个标识
  name: NameType
  // CollapseItem的title
  title?: string
  // CollapseItem是否被禁用
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')

export interface CollapseProps {
  // 当前打开的CollapseItem可以是多个,moduleValue就用于存储当前打开的CollapseItem的name,也可以通过modelValue来指定初始CollapseItem的开启状态
  modelValue: string[]
  // 是否开启手风琴模式,开启手风琴模式后一个Collapse中只能有一个CollapseItem处于展开状态
  accordion?: boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType[]): void
  (e: 'change', value: NameType[]): void
}
