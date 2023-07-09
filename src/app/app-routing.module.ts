import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SelectProjectComponentComponent } from './shared/components/select-project-component/select-project-component.component';

const routes: Routes = [
  {
    path: '',
    component: SelectProjectComponentComponent,
  },
  {
    path: 'ip-tracker',
    loadChildren: () =>
      import('./modules/ip-address-tracker/ip-address-tracker.module').then(
        (m) => m.IpAddressTrackerModule
      ),
  },
  {
    path: 'static-jobs-list',
    loadChildren: () =>
      import('./modules/static-job-listing/static-job-listing.module').then(
        (m) => m.StaticJobListingModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
