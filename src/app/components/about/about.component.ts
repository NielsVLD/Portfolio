import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../entities/project.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  profilePicture: string =
    'https://onedrive.live.com/embed?resid=6BFB86DAE0ADC616%213480&authkey=%21ALranRe6JLeHfAQ&width=660';
  loaded: boolean = false;
  projects: Project[] = [];
  aboutForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.getProjects();
    this.aboutForm = this.formBuilder.group({
      alinea1: ['', [Validators.required]],
      alinea2: ['', [Validators.required]],
      alinea3: ['', [Validators.required]],
    });
  }

  getProjects() {
    this.http
      .get<Project[]>('/api/Projects', {
        withCredentials: true,
      })
      .forEach((result) => {
        this.projects = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onImageLoad() {
    this.loaded = true;
  }
}
