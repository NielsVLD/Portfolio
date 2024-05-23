import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Project } from "../../../entities/project.entity";
import { ProjectsService } from "../../../services/projects.service";

@Component({
  selector: "app-project-modal-new",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./project-modal-new.component.html",
  styleUrl: "./project-modal-new.component.css"
})
export class ProjectModalNewComponent implements OnInit {
  newProjectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService
  ) {
  }

  ngOnInit(): void {
    this.newProjectForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      descriptionLong: ["", Validators.required],
      skills: [[]],
      icons: [[]]
    });
  }

  onSubmit() {
    if (!this.newProjectForm.valid) {
      return;
    }
    const newProject: Project = {
      id: 0,
      name: this.newProjectForm.get('name')?.value,
      description: this.newProjectForm.get('description')?.value,
      descriptionLong: this.newProjectForm.get('descriptionLong')?.value,
      skills: this.newProjectForm.get('skills')?.value,
      icons: this.newProjectForm.get('icons')?.value
    }
        this.projectService.postNewProject(newProject).subscribe(
          (response) => {
            console.log("project created");
          },
          (error) => {
            console.error("Error:", error);
          }
        );
  }

  //   if (this.newProjectForm.valid) {
  //     const newProject: Project = this.newProjectForm.value;
  //     this.projectService.postNewProject(newProject).subscribe(
  //       (response) => {
  //         console.log("project created");
  //       },
  //       (error) => {
  //         console.error("Error:", error);
  //       }
  //     );
  //   } else {
  //     console.log("Error in form");
  //   }
  // }
}
