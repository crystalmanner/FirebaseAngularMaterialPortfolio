import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'jps-my-abilities-modal',
  templateUrl: './my-abilities-modal.component.html',
  styleUrls: ['./my-abilities-modal.component.scss']
})
export class MyAbilitiesModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MyAbilitiesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      someAbilitiesTitle: ['', Validators.required],
      someAbilitiesContent: ['', Validators.required],
      skills: new FormArray([])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {

  }
  addSkill() {
    (<FormArray>this.form.controls.skills).push(new FormGroup({
      skill: new FormControl('', Validators.required),
      startYear: new FormControl(2012, Validators.required),
      rate: new FormControl(100, Validators.required),
    }))
  }
}
