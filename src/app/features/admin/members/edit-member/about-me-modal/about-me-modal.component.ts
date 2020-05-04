import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'jps-about-me-modal',
  templateUrl: './about-me-modal.component.html',
  styleUrls: ['./about-me-modal.component.scss']
})
export class AboutMeModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AboutMeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      aboutMeImgUrl: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      birthday: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      interests: [''],
      study: ['', Validators.required],
      degree: [''],
      email: ['', Validators.required],
      phone: [''],
      websiteUrl: [''],
      linkedinUrl: [''],
      facebookUrl: [''],
      twitterUril: [''],
      cvUrl: [''],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {

  }

}
