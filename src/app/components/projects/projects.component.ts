import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { Project } from '../../entities/project.entity';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private modalService: NgbModal,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((response) => {
      this.projects = response;
    });
  }

  openModal(project: any) {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.project = project;
  }
}
