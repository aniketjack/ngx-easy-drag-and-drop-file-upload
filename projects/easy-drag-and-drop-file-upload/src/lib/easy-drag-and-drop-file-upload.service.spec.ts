import { TestBed } from '@angular/core/testing';

import { EasyDragAndDropFileUploadService } from './easy-drag-and-drop-file-upload.service';

describe('EasyDragAndDropFileUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyDragAndDropFileUploadService = TestBed.get(EasyDragAndDropFileUploadService);
    expect(service).toBeTruthy();
  });
});
