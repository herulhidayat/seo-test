import { IMenu } from '@app/interface/config/menu.interface'

export const MENU: IMenu[] = [
  {
    id: '0',
    idParent: '',
    display: 'Home',
    name: 'home',
    path: '/home',
    show: true,
    search: false,
    enabled: true,
    group: 'admin',
    type: 'menu',
    icon: 'fa fa-user',
    seo: {
      title: 'Home',
      description: 'This is home',
    },
    privileges: ['view', 'create', 'update', 'delete'],
  },
  {
    id: '0',
    idParent: '',
    display: 'About',
    name: 'about',
    path: '/home/about',
    show: true,
    search: false,
    enabled: true,
    group: 'admin',
    type: 'menu',
    icon: 'fa fa-user',
    seo: {
      title: 'About',
      description: 'This is about',
    },
    privileges: ['view', 'create', 'update', 'delete'],
  },
]

export const ADMIN_MENU = () => [
  {
    id: '1',
    idParent: '',
    display: 'Administrasi',
    name: 'administrasi',
    path: '/administrasi',
    show: true,
    search: false,
    enabled: true,
    type: 'menu',
    group: 'admin',
    icon: 'administration',
    seo: {
      title: 'Administrasi  | Project App',
      description: '',
    },
    privileges: ['view', 'create', 'update', 'delete'],
  },
  {
    id: '11',
    idParent: '1',
    display: 'Beranda',
    name: 'beranda',
    path: '/administrasi/beranda',
    show: true,
    search: false,
    enabled: true,
    type: 'menu',
    group: 'admin',
    icon: 'home',
    seo: {
      title: 'Beranda Administrasi  | Project App',
      description: '',
    },
    privileges: ['view', 'create', 'update', 'delete'],
  },
]
