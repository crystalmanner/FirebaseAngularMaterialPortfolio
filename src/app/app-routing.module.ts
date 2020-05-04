import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './shared/layout/layout.module';
import { MainComponent } from './shared/layout/main/main.component';
import { AdminComponent } from './shared/layout/admin/admin.component';
import { PortfolioComponent } from './shared/layout/portfolio/portfolio.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { AuthComponent } from './shared/layout/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('./features/landing-page/landing-page.module').then(m => m.LandingPageModule) },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
    ]
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
