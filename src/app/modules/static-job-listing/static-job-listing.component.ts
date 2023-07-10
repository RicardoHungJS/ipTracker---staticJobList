import { Component, OnInit } from '@angular/core';
import { JobListService } from '../../shared/services/job-list/job-list.service';
import { JobModel } from 'src/app/shared/models/jobModel';
@Component({
  selector: 'app-static-job-listing',
  templateUrl: './static-job-listing.component.html',
  styleUrls: ['./static-job-listing.component.scss'],
})
export class StaticJobListingComponent implements OnInit {
  dataReceved: JobModel[] = [];
  activeTags: Array<string> = [];

  constructor(private jobService: JobListService) {}

  ngOnInit(): void {
    this.initJobsData();
  }

  addSearchTag(e: any) {
    if (!this.activeTags.includes(e)) {
      this.activeTags = [...this.activeTags, e];
    }
  }

  initJobsData() {
    this.jobService
      .JobsData()
      .subscribe((res) => (this.dataReceved = res.default));
  }
}
