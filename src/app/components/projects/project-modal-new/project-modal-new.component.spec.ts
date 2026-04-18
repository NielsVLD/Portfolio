import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalNewComponent } from './project-modal-new.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ProjectModalNewComponent', () => {
  let component: ProjectModalNewComponent;
  let fixture: ComponentFixture<ProjectModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ProjectModalNewComponent, NgbActiveModal],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();

    fixture = TestBed.createComponent(ProjectModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
