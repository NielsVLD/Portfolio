import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalNewComponent } from './project-modal-new.component';

describe('ProjectModalNewComponent', () => {
  let component: ProjectModalNewComponent;
  let fixture: ComponentFixture<ProjectModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
