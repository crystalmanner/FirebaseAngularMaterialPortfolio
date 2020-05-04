import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'jps-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get curUser() {
    return this.authService.currentUserValue;
  }
  logout() {
    this.authService.logout();
  }
}
