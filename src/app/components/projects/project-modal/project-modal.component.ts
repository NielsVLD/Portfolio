import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  @Input() project: any;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss('Cross click'); // Dismiss the modal
  }
}
