import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../entities/project.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  url: string = '/api/Projects';
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  postNewProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.url, project, {
      headers: this.headers,
    });
  }

  updateProject(project: Project, id: number): Observable<Project> {
    return this.http.put<Project>(this.url + '/' + id, project, {
      headers: this.headers,
    });
  }
}
