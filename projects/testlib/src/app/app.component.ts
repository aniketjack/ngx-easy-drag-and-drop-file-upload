import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testlib';
  dndConfigs = {
    allowFileTypes:".xls,.csv,.png",
    fileLimit: 5,
    allowMultiple: true
 };

  getDroppedFiles(eve){
     console.log("Dropped recieved Files >>>> ", eve);
  }
}
