// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/utilities/orders/orders.component').then((o) => o.OrdersComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/utilities/users/users.component').then((u) => u.UsersComponent)
      },
      {
        path: 'transactions',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/utilities/transactions/transactions.component').then((t) => t.TransactionsComponent)
      },
      {
        path: 'items',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/utilities/items/items.component').then((i) => i.ItemsComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/utilities/reports/reports.component').then((r) => r.ReportsComponent)
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./theme/layouts/admin-layout/side-bar/messages/messages.component').then((m) => m.MessagesComponent)
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./theme/layouts/admin-layout/side-bar/support/support.component').then((s) => s.SupportComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./theme/layouts/admin-layout/side-bar/settings/settings.component').then((s) => s.SettingsComponent)
      },
    ]
  },
      {
        path: 'login',
        loadComponent: () => import('./theme/layouts/admin-layout/side-bar/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./theme/layouts/admin-layout/side-bar/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
      },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
