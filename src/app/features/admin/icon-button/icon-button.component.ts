import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jps-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon = 'edit';
  @Input() offset = "0";
  constructor() { }

  ngOnInit() {
  }

}
