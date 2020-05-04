import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CarouselModule } from "ngx-carousel-lib";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', pathMatch: 'full', redirectTo: 'introduction' },
      { path: '', component: HomePageComponent },
    ]),

    MatButtonModule,
    MatIconModule,
    CarouselModule,
  ]
})
export class LandingPageModule { }
