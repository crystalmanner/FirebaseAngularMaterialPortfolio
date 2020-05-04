import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jps-pf-side-nav',
  templateUrl: './pf-side-nav.component.html',
  styleUrls: ['./pf-side-nav.component.scss']
})
export class PfSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollTo(elId) {
    console.log(elId);
    let el = document.getElementById(elId);
    console.log(el);
    el.scrollIntoView({behavior:"smooth"});

  }
}
