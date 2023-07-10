import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticJobListingRoutingModule } from './static-job-listing-routing.module';

import { StaticJobListingComponent } from './static-job-listing.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { JobOptionCardComponent } from './components/job-option-card/job-option-card.component';

@NgModule({
  declarations: [
    StaticJobListingComponent,
    SearcherComponent,
    JobOptionCardComponent,
  ],
  imports: [CommonModule, StaticJobListingRoutingModule],
})
export class StaticJobListingModule {}
