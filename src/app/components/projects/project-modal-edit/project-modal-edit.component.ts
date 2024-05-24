import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
  updatedProjectForm!: FormGroup;
  project!: Project;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.updatedProjectForm = this.fb.group({
      id: [this.project.id],
      name: [this.project.name],
      description: [this.project.description],
      descriptionLong: [''],
      skills: [[]],
      icons: [[]],
    });
  }

  onSubmit() {
    if (this.updatedProjectForm.valid) {
      const updatedProject: Project = {
        id: this.project.id,
        name: this.updatedProjectForm.get('name')?.value,
        description: this.updatedProjectForm.get('description')?.value,
        descriptionLong: this.updatedProjectForm.get('descriptionLong')?.value,
        skills: this.updatedProjectForm.get('skills')?.value,
        icons: this.updatedProjectForm.get('icons')?.value,
      };
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
