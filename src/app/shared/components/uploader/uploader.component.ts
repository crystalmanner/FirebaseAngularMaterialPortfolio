import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jps-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;

  files: File[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleHover(event) {
    this.isHovering = event;

  }
  onDrop(files: FileList) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
