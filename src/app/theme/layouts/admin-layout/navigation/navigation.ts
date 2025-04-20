export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'orders',
        title: 'Orders',
        type: 'item',
        classes: 'nav-item',
        icon:'shopping-cart',
        url: '/orders',
      },
      {
        id: 'users',
        icon: 'user',
        title: 'Users',
        type: 'item',
        classes: 'nav-item',
        url: '/users',
      },
      {
        id: 'items',
        title: 'Items',
        type: 'item',
        classes: 'nav-item',
        icon:"product",
        url: '/items',
        target: false,
        external: false
      },
      {
        id: 'transactions',
        title: 'Transactions',
        type: 'item',
        icon: 'transaction',
        classes: 'nav-item',
        url: '/transactions',
        target: false,
        external: false
      },
      {
        id: 'reports',
        title: 'Reports',
        classes: 'nav-item',
        type: 'item',
        url: '/reports',
        icon: 'profile',
        target: false,
        external: false
      },
      {
        id: 'messages',
        title: "Messages",
        classes: 'nav-item',
        type:"item",
        url: '/messages',
        icon:'message',
        target: false,
        external: false
      },
      {
        id: 'support',
        title: "Support",
        classes: 'nav-item',
        url: '/support',
        type:"item",
        icon:"question-circle",
        target: false,
        external: false
      },
      {
        id: 'settings',
        title: "Settings",
        classes: 'nav-item',
        type:"item",
        url: '/settings',
        icon: 'setting',
        target: false,
        external: false
      },
    ]
  },
];
