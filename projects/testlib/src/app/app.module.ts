import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { EasyFileUploadModule } from 'easy-file-upload';




@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EasyFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
