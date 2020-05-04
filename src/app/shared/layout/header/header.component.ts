import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
@Component({
  selector: 'jps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appInfo = APP_CONFIG;

  constructor() { }

  ngOnInit() {

  }

}
