import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jps-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  app = APP_CONFIG.app

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
