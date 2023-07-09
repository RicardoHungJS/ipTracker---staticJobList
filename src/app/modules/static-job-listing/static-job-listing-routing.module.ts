import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticJobListingComponent } from './static-job-listing.component';

const routes: Routes = [
  { path: 'static-jobs-list', component: StaticJobListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpAddressTrackerRoutingModule {}
