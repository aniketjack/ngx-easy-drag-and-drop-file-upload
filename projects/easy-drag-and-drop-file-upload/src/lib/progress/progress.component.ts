import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'easy-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() progress = 0;
  constructor() {}

  ngOnInit() {}
}
