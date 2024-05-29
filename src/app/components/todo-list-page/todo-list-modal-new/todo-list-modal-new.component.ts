import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list-modal-new',
  templateUrl: './todo-list-modal-new.component.html',
  styleUrl: './todo-list-modal-new.component.css',
})
export class TodoListModalNewComponent implements OnInit {
  newTodoListForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.newTodoListForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: [false, Validators.required],
    });
  }
}
