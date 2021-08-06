# ngx-easy-drag-and-drop-file-upload

Angular Drag and drop based file upload library.

## Features

- Clean and minimilist User Interface of file uploader
- Drag and Drop single or multiple files at a time
- Animated and iconified drop zone with Progress bar
- Multiple options supported for file types , number of files limit etc.
- Very lightweight and easy to install

## Dependencies

Latest version available for each version of Angular

| Version | Angular version    |
| ---------- | ----------- |
| current    | >= 7.x     |

## Install

```bash
npm i easy-drag-and-drop-file-upload --save
```

## Setup

**step 1:** add dependency in your app.module.ts. Do not forget to add CUSTOM_ELEMENTS_SCHEMA
```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from  '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA is mandatory
import { BrowserModule } from  '@angular/platform-browser';

import { EasyDragAndDropFileUploadModule } from  'easy-drag-and-drop-file-upload'; // import module <--
import { AppComponent } from  './app.component';

@NgModule({
declarations: [
	AppComponent
],
imports: [
	BrowserModule,
    EasyDragAndDropFileUploadModule // Module Dependency needs to be register <--
],
providers: [],
bootstrap: [AppComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA] // do not forget to add CUSTOM_ELEMENTS_SCHEMA <--
})

export  class  AppModule { }
```


## Use

Usage in component
```typescript
import { Component } from  '@angular/core';
@Component({
 selector:  'app-root',
 templateUrl:  './app.component.html',
 styleUrls: ['./app.component.scss']
})

export  class  AppComponent {

// Options
  title = 'Pass your custom title here'; // title / heading
  allowFileTypes = ".xls,.csv,.png"; // file types
  fileLimit = 5; // file limit
  allowMultiple =  true; // allow multiple files

// Recieved files event
getDroppedFiles(e){
  console.log("Dropped recieved File/s >>>> ", e); // here you can proceed with the captured files.
 }
}
```
HTML 
```html
<ngx-easy-dnd-upload
	[title]="title"
	[fileLimit]="5"
	[allowedFiles]="'.csv,.xls,.png'"
	[allowMultiple]="false"
	(droppedFiles)="getDroppedFiles($event)">
</ngx-easy-dnd-upload>
```
## Options

There are several options you can use.

| Option            | Type                           | Default                        | Description                                                                             
| ----------------- | ------------------------------ | ------------------------------ | ------------------------------------------------- |
| Heading / Title    | string                      | Drag and Drop File Upload                         | Display heading               |
| Allowed files       | string                        | ".xls,.csv,.png"                          | Comma seperated string of different file types which needs to be allowd to be upload                                 |
| File limit           | number                         | -1                           | Control number of files to be upload. By default there is no limit.                     |
| Multiple files  | boolean                         | true | Allow multiple files by default. But you can restrict and allow only single file at a time to be upload by passing 'false'.                           




## License

MIT

---
> GitHub [@aniketjack](https://github.com/aniketjack/ngx-easy-drag-and-drop-file-upload/) &nbsp;&middot;&nbsp;
