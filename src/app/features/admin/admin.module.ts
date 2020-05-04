import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatExpansionModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { MembersComponent } from './members/members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMemberComponent } from './members/edit-member/edit-member.component';
import { ParticlesModule } from 'angular-particle';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { HomeSectionModalComponent } from './members/edit-member/home-section-modal/home-section-modal.component';
import { AboutMeModalComponent } from './members/edit-member/about-me-modal/about-me-modal.component';
import { MyAbilitiesModalComponent } from './members/edit-member/my-abilities-modal/my-abilities-modal.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ServiceModalComponent } from './members/edit-member/service-modal/service-modal.component';
import { ProjectModalComponent } from './members/edit-member/project-modal/project-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AdminHomeComponent, MembersComponent, EditMemberComponent, SkillsComponent, ProjectsComponent, ServicesComponent, HomeSectionModalComponent, AboutMeModalComponent, MyAbilitiesModalComponent, IconButtonComponent, ServiceModalComponent, ProjectModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    ParticlesModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

    RouterModule.forChild([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'members', component: MembersComponent },
      { path: 'members/:id/edit', component: EditMemberComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'services', component: ServicesComponent },
    ])
  ],
  entryComponents: [
    HomeSectionModalComponent,
    AboutMeModalComponent,
    MyAbilitiesModalComponent,
    ServiceModalComponent,
    ProjectModalComponent
  ]
})
export class AdminModule { }
