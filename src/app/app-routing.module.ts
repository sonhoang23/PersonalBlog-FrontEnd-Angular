import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'testangularmaterial',
    loadChildren: () =>
      import('./test/testangularmaterial/testangularmaterial.module').then(
        (m) => m.TestangularmaterialModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./layout/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./layout/customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  // {
  //   path: 'welcome',
  //   loadChildren: () =>
  //     import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
