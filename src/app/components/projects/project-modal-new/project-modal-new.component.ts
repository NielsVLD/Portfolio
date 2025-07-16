import { Component, OnInit } from "@angular/core";
import {
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Project } from "../../../entities/project.entity";
import { ProjectsService } from "../../../services/projects.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { skillsList } from "../../../helpers/constants";

@Component({
    selector: "app-project-modal-new",
    templateUrl: "./project-modal-new.component.html",
    styleUrl: "./project-modal-new.component.css",
    standalone: false
})
export class ProjectModalNewComponent implements OnInit {
  newProjectForm!: FormGroup;
  skills = new FormControl()

  skillsList = skillsList

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
    this.newProjectForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      descriptionLong: ["", Validators.required],
      skills: [[]],
      icons: [[]],
      link: [""]
    });
  }

  onSubmit() {
    console.log(this.skills.value)
    if (!this.newProjectForm.valid) {
      return;
    }
    this.closeModal()
    const newProject: Project = {
      id: 0,
      name: this.newProjectForm.get('name')?.value,
      description: this.newProjectForm.get('description')?.value,
      descriptionLong: this.newProjectForm.get('descriptionLong')?.value,
      skills: this.skills.value,
      icons: this.newProjectForm.get('icons')?.value,
      link: this.newProjectForm.get('link')?.value
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

  closeModal() {
    this.activeModal.dismiss('Submit project');
  }
}
