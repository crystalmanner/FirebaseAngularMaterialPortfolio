import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'jps-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
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
    private _formBuilder: FormBuilder
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

}
