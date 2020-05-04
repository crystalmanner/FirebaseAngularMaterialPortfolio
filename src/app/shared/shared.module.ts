import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './directives/dropzone.directive';

import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [UploaderComponent]
})
export class SharedModule { }
