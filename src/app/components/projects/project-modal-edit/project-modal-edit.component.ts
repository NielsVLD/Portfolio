import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../entities/project.entity';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { skillsList } from '../../../helpers/constants';

@Component({
  selector: 'app-project-modal-edit',
  templateUrl: './project-modal-edit.component.html',
  styleUrl: './project-modal-edit.component.css',
})
export class ProjectModalEditComponent implements OnInit {
  updatedProjectForm!: FormGroup;
  project!: Project;
  skills = new FormControl();
  skillsList = skillsList;

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
      link: [this.project.link],
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
        link: this.updatedProjectForm.get('link')?.value,
      };
      this.projectService
        .updateProject(updatedProject, this.project.id)
        .subscribe(
          () => {
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
