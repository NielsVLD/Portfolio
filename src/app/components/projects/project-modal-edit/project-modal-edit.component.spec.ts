import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalEditComponent } from './project-modal-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProjectModalEditComponent', () => {
  let component: ProjectModalEditComponent;
  let fixture: ComponentFixture<ProjectModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModalEditComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: NgbActiveModal, useValue: {} },
        { provide: FormBuilder, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
