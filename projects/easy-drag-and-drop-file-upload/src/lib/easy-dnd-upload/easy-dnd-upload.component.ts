import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'ngx-easy-dnd-upload',
  templateUrl: './easy-dnd-upload.component.html',
  styleUrls: ['./easy-dnd-upload.component.css']
})
export class EasyDndUploadComponent implements OnInit {

  files: any[] = [];

  /*************************************************************
   * Input() memebrs
   *************************************************************/
  // Title
  private _title:string = "Drag and Drop File Upload"; // default title
  @Input()
  set title(value: string) {
    this._title = value;    
    //console.log(`title is changed to ${value}`);
  }

  get title(): string {
    return this._title;
  }

  // Allow file types
  private _allowedFiles:string = "*"; // Deafult allowed any type of file
  @Input()
  set allowedFiles(value: string) {
    this._allowedFiles = value;    
    //console.log(`Allowed files is changed to ${value}`);
  }

  get allowedFiles(): string {
    return this._allowedFiles;
  }

  // File Limit
  private _fileLimit: number = -1; // Allow any size of file
  @Input()
  set fileLimit(value: number) {
    this._fileLimit = value;    
    //console.log(`file limit is changed to ${value}`);
  }

  get fileLimit(): number {
    return this._fileLimit;
  }

  // Multiple file
  private _allowMultiple: boolean = true; // Allow multiple files by default
  @Input()
  set allowMultiple(value: boolean) {
    this._allowMultiple = value;    
    //console.log(`allow multiple is changed to ${value}`);
  }

  get allowMultiple(): boolean {
    return this._allowMultiple;
  }

  // Output
  @Output() droppedFiles = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {}


  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.droppedFiles.emit(this.files);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
        this.droppedFiles.emit(this.files);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }


}
