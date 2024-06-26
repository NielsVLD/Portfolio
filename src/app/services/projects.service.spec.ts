import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

import { ProjectsService } from './projects.service';
import { Project } from '../entities/project.entity';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpSpy: Spy<HttpClient>;
  let fakeProjects: Project[] = [
    {
      id: 1,
      name: 'test',
      description: 'test',
      descriptionLong: 'test',
      skills: [],
      icons: [],
      link: '',
    },
    {
      id: 2,
      name: 'test',
      description: 'test',
      descriptionLong: 'test',
      skills: [],
      icons: [],
      link: '',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) },
      ],
    });

    service = TestBed.inject(ProjectsService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should return an expected list of projects', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeProjects);

    service.getProjects().subscribe((projects) => {
      expect(projects).toHaveSize(projects.length);
      done();
    }, done.fail);
    expect(httpSpy.get.calls.count()).toBe(1);
  });
});
