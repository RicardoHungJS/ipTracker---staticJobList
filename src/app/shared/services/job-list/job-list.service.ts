import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../jobs-data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListService {
  jobsData = data;

  constructor() {}

  JobsData(): Observable<any> {
    return of<any>(this.jobsData);
  }
}
