import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobModel } from 'src/app/shared/models/jobModel';

@Component({
  selector: 'app-job-option-card',
  templateUrl: './job-option-card.component.html',
  styleUrls: ['./job-option-card.component.scss'],
})
export class JobOptionCardComponent implements OnInit {
  @Input() jobsData!: JobModel;
  @Input() activeTags!: Array<string>;
  @Output() agregarTagFilter = new EventEmitter();

  tagsArray?: Array<string> = [];

  ngOnInit(): void {
    if (this.jobsData) {
      this.integrateTagsIntoArray();
    }
  }

  integrateTagsIntoArray() {
    this.jobsData.languages.forEach((tag) => this.tagsArray?.push(tag));
    this.tagsArray?.push(this.jobsData.level);
    this.tagsArray?.push(this.jobsData.role);
  }

  addTagToSearch(e: MouseEvent) {
    const elemento = e.target as HTMLElement;
    const texto = elemento.textContent;
    this.agregarTagFilter.emit(texto);
  }
}
