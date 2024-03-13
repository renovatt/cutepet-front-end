import { LayoutGrid, CalendarDays, PawPrint, Cat, Dog } from 'lucide-vue-next'

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
]

export const breedsDropdownRoutes = {
  name: 'Raças',
  path: '/breeds',
  icon: PawPrint,
  children: [
    {
      name: 'Gatos',
      path: '/breeds/cats',
      icon: Cat
    },
    {
      name: 'Cães',
      path: '/breeds/dogs',
      icon: Dog
    }
  ]
}

export const breedsDropdown = {
  name: 'Raças',
  path: '/breeds',
  icon: PawPrint,
  children: [
    {
      name: 'Gatos',
      path: '/breeds/cats',
      icon: Cat
    },
    {
      name: 'Cães',
      path: '/breeds/dogs',
      icon: Dog
    }
  ]
}
