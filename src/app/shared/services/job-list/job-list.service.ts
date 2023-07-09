import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../jobs-data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListService {
  jobsData = data;

  constructor(private http: HttpClient) {}

  JobsData(): Observable<any> {
    return of<any>(this.jobsData);
  }
}
