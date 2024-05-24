import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalEditComponent } from './project-modal-edit.component';

describe('ProjectModalEditComponent', () => {
  let component: ProjectModalEditComponent;
  let fixture: ComponentFixture<ProjectModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
