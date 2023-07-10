import { Component, DoCheck, OnInit } from '@angular/core';
import { JobModel } from 'src/app/shared/models/jobModel';
import { JobListService } from '../../shared/services/job-list/job-list.service';

@Component({
  selector: 'app-static-job-listing',
  templateUrl: './static-job-listing.component.html',
  styleUrls: ['./static-job-listing.component.scss'],
})
export class StaticJobListingComponent implements OnInit, DoCheck {
  dataReceved: JobModel[] = [];
  activeTags: Array<string> = [];
  dataFiltered: JobModel[] = [];

  constructor(private jobService: JobListService) {}

  ngDoCheck(): void {
    if (this.activeTags.length !== 0) {
      this.dataFiltered = this.dataFilter().sort((a, b) => a.id - b.id);
    } else {
      this.dataFiltered = [];
    }
  }

  ngOnInit(): void {
    this.initJobsData();
  }

  dataFilter() {
    if (this.activeTags.length === 0) {
      return this.dataReceved;
    } else {
      let arrayx = [];
      arrayx.push(
        this.activeTags.map((item) => {
          const resultados = this.dataReceved.filter((job) => {
            const { languages, level, role } = job;

            let someTrueArray = [];
            someTrueArray = languages.map((lang) => {
              return lang
                .toLocaleLowerCase()
                .includes(item.toLocaleLowerCase());
            });

            return (
              someTrueArray.some((val) => val === true) ||
              level.toLowerCase().includes(item.toLowerCase()) ||
              role.toLowerCase().includes(item.toLowerCase())
            );
          });

          return resultados;
        })
      );

      const map = new Map<number, any>();
      arrayx.flat(Infinity).forEach((objeto: any) => {
        map.set(objeto.id, objeto);
      });
      return Array.from(map.values());
    }
  }

  addSearchTag(e: any) {
    if (!this.activeTags.includes(e.toLowerCase())) {
      this.activeTags = [...this.activeTags, e.toLowerCase()];
    }
  }

  deleteSearchTag(e: string) {
    this.activeTags = this.activeTags.filter((tag) => tag !== e);
  }

  deleteAllSearchData() {
    this.activeTags = [];
  }

  initJobsData() {
    this.jobService
      .JobsData()
      .subscribe((res) => (this.dataReceved = res.default));
  }
}
