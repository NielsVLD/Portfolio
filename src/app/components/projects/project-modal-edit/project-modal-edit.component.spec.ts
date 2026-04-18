import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalEditComponent } from './project-modal-edit.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModalEditComponent', () => {
  let component: ProjectModalEditComponent;
  let fixture: ComponentFixture<ProjectModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalEditComponent, NgbActiveModal, FormBuilder],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
