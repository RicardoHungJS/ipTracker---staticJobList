import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpAddressTrackerComponent } from './ip-address-tracker.component';

const routes: Routes = [
  { path: '', component: IpAddressTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpAddressTrackerRoutingModule {}
