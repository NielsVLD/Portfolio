import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../entities/project.entity';

@Component({
  selector: 'app-project-modal-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './project-modal-edit.component.html',
  styleUrl: './project-modal-edit.component.css',
})
export class ProjectModalEditComponent implements OnInit {
  projectForm!: FormGroup;
  project!: Project;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
  ) {}

  ngOnInit(): void {
    console.log(this.project);
    this.projectForm = this.fb.group({
      id: [this.project.id],
      name: [''],
      description: [''],
      descriptionLong: [''],
      skills: [[]],
      icons: [[]],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const updatedProject: Project = this.projectForm.value;
      this.projectService
        .updateProject(updatedProject, this.project.id)
        .subscribe(
          (response) => {
            console.log('project updated');
          },
          (error) => {
            console.error('Error:', error);
          },
        );
    } else {
      console.log('Error in form');
    }
  }
}
