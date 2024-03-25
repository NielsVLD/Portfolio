import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../entities/project.entity';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  @Input() project!: Project;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss('Cross click'); // Dismiss the modal
  }
}
