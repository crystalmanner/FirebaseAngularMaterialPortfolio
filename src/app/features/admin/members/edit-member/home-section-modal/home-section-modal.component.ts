import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'jps-home-section-modal',
  templateUrl: './home-section-modal.component.html',
  styleUrls: ['./home-section-modal.component.scss']
})
export class HomeSectionModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<HomeSectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['', Validators.required],
      fullName: ['', Validators.required],
      birthday: ['', Validators.required],
      developerType: ['', Validators.required],
      bgImg: ['', Validators.required],
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
