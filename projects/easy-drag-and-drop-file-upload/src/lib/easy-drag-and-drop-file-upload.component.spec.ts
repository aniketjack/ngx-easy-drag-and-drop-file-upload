import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDragAndDropFileUploadComponent } from './easy-drag-and-drop-file-upload.component';

describe('EasyDragAndDropFileUploadComponent', () => {
  let component: EasyDragAndDropFileUploadComponent;
  let fixture: ComponentFixture<EasyDragAndDropFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDragAndDropFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDragAndDropFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
