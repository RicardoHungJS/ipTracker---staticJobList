import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticJobListingComponent } from './static-job-listing.component';

const routes: Routes = [
  { path: '', component: StaticJobListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticJobListingRoutingModule {}
