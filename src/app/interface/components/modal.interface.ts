interface IModalData {
  show?: boolean
  approved?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | any
  icon?: any
  title?: string
  prefixTitle?: boolean
  description?: string
  textApproved?: string
  classApproved?: string
  textDecline?: string
  scrollable?: boolean
  data?: string
  type?: string
}

export type { IModalData }
