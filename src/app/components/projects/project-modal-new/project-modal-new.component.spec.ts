import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalNewComponent } from './project-modal-new.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ProjectModalNewComponent', () => {
  let component: ProjectModalNewComponent;
  let fixture: ComponentFixture<ProjectModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModalNewComponent],
      imports: [HttpClientModule, NgbActiveModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
