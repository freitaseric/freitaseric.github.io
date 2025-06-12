export type ProjectData = Array<{
  title: string
  projects: Array<{
    text: string
    description?: string
    icon?: string
    href: string
    target?: '_self' | '_blank'
  }>
}>
