import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatDividerModule } from '@angular/material';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PfSideNavComponent } from './portfolio/pf-side-nav/pf-side-nav.component';
import { PfFooterComponent } from './portfolio/pf-footer/pf-footer.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    MainComponent,
    AuthComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PortfolioComponent,
    PfSideNavComponent,
    PfFooterComponent,
    AdminHeaderComponent,
    AuthHeaderComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class LayoutModule { }
