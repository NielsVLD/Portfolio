import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalNewComponent } from './project-modal-new.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModalNewComponent', () => {
  let component: ProjectModalNewComponent;
  let fixture: ComponentFixture<ProjectModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModalNewComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: NgbActiveModal, useValue: {} },
        { provide: FormBuilder, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalNewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
