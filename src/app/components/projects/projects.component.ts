import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'PWS game AlterFire',
      description: 'Highschool Profielwerkstuk game made with GameMaker 8.0.',
      imageUrl: '/assets/images/mainscreen_game.png',
    },
    {
      id: 2,
      name: 'PWS game AlterFire level 1',
      description: 'Highschool Profielwerkstuk game made with GameMaker 8.0.',
      imageUrl: '/assets/images/level1.png',
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal(project: any) {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.project = project;
  }
}
