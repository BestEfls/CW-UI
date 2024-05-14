export interface AlertProps {
  title: string
  type?: 'primary' | 'info' | 'warning' | 'success' | 'danger'
  description?: string
  closeable?: boolean
  center?: boolean
  closeText?: string
  showIcon?: boolean
  effect?: 'light' | 'dark'
}

export interface AlertEmits {
  (e: 'close', value: MouseEvent): void
}

export interface AlertInstance {
  close: () => void
}
