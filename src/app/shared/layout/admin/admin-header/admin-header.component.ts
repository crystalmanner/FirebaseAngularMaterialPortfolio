import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
@Component({
  selector: 'jps-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  appInfo = APP_CONFIG;

  constructor() { }

  ngOnInit() {
  }

}
