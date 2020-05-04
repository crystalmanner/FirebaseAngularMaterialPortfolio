import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'jps-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  form: FormGroup;
  modalType: "Add";

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ServiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalType = data.title;
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      logoUrl: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {

  }

}
