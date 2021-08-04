import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EasyDndUploadComponent } from './easy-dnd-upload/easy-dnd-upload.component';
import { ProgressComponent } from './progress/progress.component';
import { CommonModule } from '@angular/common';
import { EasyDragAndDropFileUploadDirective } from './easy-drag-and-drop-file-upload.directive';
import { EasyDragAndDropFileUploadComponent } from './easy-drag-and-drop-file-upload.component';


@NgModule({
  declarations: [
    EasyDndUploadComponent,
    EasyDragAndDropFileUploadComponent,
    EasyDragAndDropFileUploadDirective,
    ProgressComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    EasyDragAndDropFileUploadComponent,
    EasyDndUploadComponent
  ]
})
export class EasyDragAndDropFileUploadModule { }
