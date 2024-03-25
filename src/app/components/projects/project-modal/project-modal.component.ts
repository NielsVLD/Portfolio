import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../entities/project.entity';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent implements OnInit {
  @Input() project!: Project;

  isSignedIn: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.isSignedIn().subscribe((response) => {
      this.isSignedIn = response;
    });
  }

  closeModal() {
    this.activeModal.dismiss('Cross click'); // Dismiss the modal
  }
}
