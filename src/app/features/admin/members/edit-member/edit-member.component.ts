import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { HomeSectionModalComponent } from './home-section-modal/home-section-modal.component';
import { AboutMeModalComponent } from './about-me-modal/about-me-modal.component';
import { MyAbilitiesModalComponent } from './my-abilities-modal/my-abilities-modal.component';
import { ServiceModalComponent } from './service-modal/service-modal.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'jps-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  skills = [
    { skill: "Angular", years: 5, level: 95 },
    { skill: "React", years: 6, level: 90 },
    { skill: "Vue", years: 2, level: 90 },
    { skill: "JavaScript", years: 8, level: 99 },
    { skill: "HTML/CSS", years: 8, level: 100 },
    { skill: "Node/Express", years: 4, level: 95 },
    { skill: "Database", years: 4, level: 85 },
  ]
  curCategory = "All";
  category = ["All", "Design", "Frontend", "Backend", "Full-Stack"];
  works = [
    { category: 'Design', imgUrl: 'assets/works/1.jpg', title: "Title 1", author: "Author 1" },
    { category: 'Frontend', imgUrl: 'assets/works/2.jpg', title: "Title 2", author: "Author 2" },
    { category: 'Backend', imgUrl: 'assets/works/3.jpg', title: "Title 3", author: "Author 3" },
    { category: 'Full-Stack', imgUrl: 'assets/works/4.jpg', title: "Title 4", author: "Author 4" },
    { category: 'Frontend', imgUrl: 'assets/works/5.jpg', title: "Title 5", author: "Author 5" },
    { category: 'Design', imgUrl: 'assets/works/6.jpg', title: "Title 6", author: "Author 6" },
  ]

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required]
    });

    this.myStyle = {
      'width': '100%',
      'height': '100%',
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }
  openHomeSectionModal() {
    const dialogRef = this.dialog.open(HomeSectionModalComponent, {
      width: '50%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');

    })
  }
  openAboutMeEditModal() {
    const dialogRef = this.dialog.open(AboutMeModalComponent, {
      width: '80%',
      maxWidth: "1000px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  openEditAbilitiesModal() {
    const dialogRef = this.dialog.open(MyAbilitiesModalComponent, {
      width: '80%',
      maxWidth: "1000px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  addNewService() {
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      width: '80%',
      maxWidth: "600px",
      data: { title: "Add" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  editService() {

    const dialogRef = this.dialog.open(ServiceModalComponent, {
      width: '80%',
      maxWidth: "600px",
      data: { title: "Edit" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  deleteService() {

  }

  addNewProject() {
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '80%',
      maxWidth: "800px",
      data: { title: "Add" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  editProject() {

    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '80%',
      maxWidth: "800px",
      data: { title: "Edit" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }
  deleteProject() {

  }
}
