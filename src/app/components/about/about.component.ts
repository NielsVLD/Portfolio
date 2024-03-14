import { Component, OnInit } from '@angular/core';

import {
  CommonModule,
  NgFor,
  NgForOf,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../entities/project.entity';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatProgressSpinner,
    NgIf,
    CommonModule,
    NgFor,
    NgForOf,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  profilePicture: string =
    'https://onedrive.live.com/embed?resid=6BFB86DAE0ADC616%213480&authkey=%21ALranRe6JLeHfAQ&width=660';

  loaded: boolean = false;

  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.http
      .get<Project[]>('/api/Projects', {
        withCredentials: true,
      })
      .forEach((result) => {
        this.projects = result;
        console.log(this.projects);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onImageLoad() {
    this.loaded = true;
  }
}
