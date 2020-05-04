import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'jps-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private commonService: CommonService
  ) {
  }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value);
    this.loading = true;
    this.userService.register(this.signupForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('User Registered successfully!', 'Success');
          this.router.navigate([this.returnUrl ? this.returnUrl : 'auth/login']);
        },
        error => {
          console.log(error);
          this.toastr.error(this.commonService.convertReqErr2String(error.error), 'Error');
          this.error = error.error.message;
          this.loading = false;
        }
      )
  }

}
