import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../entities/project.entity';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-project-modal-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    NgForOf,
  ],
  templateUrl: './project-modal-edit.component.html',
  styleUrl: './project-modal-edit.component.css',
})
export class ProjectModalEditComponent implements OnInit {
  updatedProjectForm!: FormGroup;
  project!: Project;
  skills = new FormControl();
  skillsList = [
    'Angular',
    'C#',
    'CSS',
    'DOTNET',
    'HTML',
    'Javascript',
    'NodeJS',
    'Python',
    'Typescript',
  ];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.updatedProjectForm = this.fb.group({
      id: [this.project.id],
      name: [this.project.name],
      description: [this.project.description],
      descriptionLong: [this.project.descriptionLong],
      skills: [this.project.skills],
      icons: [this.project.icons],
    });
    this.skills.setValue(this.project.skills);
  }

  onSubmit() {
    if (this.updatedProjectForm.valid) {
      this.closeModal();
      const updatedProject: Project = {
        id: this.project.id,
        name: this.updatedProjectForm.get('name')?.value,
        description: this.updatedProjectForm.get('description')?.value,
        descriptionLong: this.updatedProjectForm.get('descriptionLong')?.value,
        skills: this.skills.value,
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

  closeModal() {
    this.activeModal.dismiss('Submit project');
  }
}
