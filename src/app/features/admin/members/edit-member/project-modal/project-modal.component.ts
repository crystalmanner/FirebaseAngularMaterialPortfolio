import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'jps-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  form: FormGroup;
  modalType: 'Add';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalType = data.title;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      projectImgs: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', Validators.required],
      endedDate: ['', Validators.required],
      skills: ['', Validators.required],
      refUrl: [''],
      difficulty: [5, Validators.required],
      published: [true],
      firstPage: [true],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {

  }

}
