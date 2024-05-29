import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalEditComponent } from './project-modal-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

describe('ProjectModalEditComponent', () => {
  let component: ProjectModalEditComponent;
  let fixture: ComponentFixture<ProjectModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModalEditComponent ],
      imports: [
        HttpClientModule,
        NgbActiveModal,
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
