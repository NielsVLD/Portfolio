import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { Project } from '../../entities/project.entity';
import { ProjectsService } from '../../services/projects.service';
import { AuthService } from '../../services/auth.service';
import { ProjectModalNewComponent } from './project-modal-new/project-modal-new.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isSignedIn: boolean = false;
  loaded: boolean = false;

  constructor(
    private modalService: NgbModal,
    private projectsService: ProjectsService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((response) => {
      this.projects = response;
    });
    this.auth.isSignedIn().subscribe((response) => {
      this.isSignedIn = response;
      this.loaded = true;
    });
  }

  openModalProjectInfo(project: any) {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.project = project;
  }

  openModalNewProject() {
    const modalRef = this.modalService.open(ProjectModalNewComponent);
    modalRef.result.catch((reason) => {
      if (reason === 'Submit project') {
        this.reloadProjects();
      }
    });
  }

  reloadProjects(): void {
    this.projectsService.getProjects().subscribe((response) => {
      this.projects = response;
    });
  }
}
