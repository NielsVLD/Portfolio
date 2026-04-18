import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalNewComponent } from './project-modal-new.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModalNewComponent', () => {
  let component: ProjectModalNewComponent;
  let fixture: ComponentFixture<ProjectModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalNewComponent, NgbActiveModal],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalNewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
