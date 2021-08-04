import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDndUploadComponent } from './easy-dnd-upload.component';

describe('EasyDndUploadComponent', () => {
  let component: EasyDndUploadComponent;
  let fixture: ComponentFixture<EasyDndUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyDndUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyDndUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
