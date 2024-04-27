import { KanbanSquare, LayoutDashboard } from 'lucide-react'

import { PAGES_PATH } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    link: PAGES_PATH.HOME,
    label: 'Movies'
  },
  {
    icon: KanbanSquare,
    link: PAGES_PATH.RATED,
    label: 'Rated movies'
  }
]
