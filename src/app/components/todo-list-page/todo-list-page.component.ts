import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../services/projects.service';
import { AuthService } from '../../services/auth.service';
import { TodoListModalNewComponent } from './todo-list-modal-new/todo-list-modal-new.component';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.css',
})
export class TodoListPageComponent {
  constructor(
    private modalService: NgbModal,
    private projectsService: ProjectsService,
    private auth: AuthService,
  ) {}

  openModalNewProject() {
    const modalRef = this.modalService.open(TodoListModalNewComponent);
    modalRef.result.catch((reason) => {
      if (reason === 'Submit todoList') {
      }
    });
  }
}
