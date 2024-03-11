import { LayoutGrid, CalendarDays, PawPrint } from 'lucide-vue-next'

export const routes = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutGrid
  },
  {
    name: 'Agendamentos',
    href: '/schedule',
    icon: CalendarDays
  },
  {
    name: 'Raças',
    href: '/breeds',
    icon: PawPrint
  }
]
