import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { MatProgressBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SummaryComponent, ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: '', pathMatch: 'full', redirectTo: 'introduction' },
      { path: ':id', component: SummaryComponent },
      { path: ':id/project', component: SummaryComponent },
    ]),
    ParticlesModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortfolioModule { }
