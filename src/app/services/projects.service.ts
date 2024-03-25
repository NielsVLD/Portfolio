import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../entities/project.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/Projects');
  }
}
