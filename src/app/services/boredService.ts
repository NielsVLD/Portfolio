import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoredApi } from '../entities/boredApi.entity';

@Injectable({
  providedIn: 'root',
})
export class BoredService {
  url: string = '/api/bored/random';

  constructor(private http: HttpClient) {}

  getActivity(): Observable<IBoredApi> {
    return this.http.get<IBoredApi>(this.url);
  }
}
