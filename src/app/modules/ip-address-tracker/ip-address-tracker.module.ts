import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpAddressTrackerComponent } from './ip-address-tracker.component';
import { IpAddressTrackerRoutingModule } from './ip-address-tracker-routing.module';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { DataBarComponent } from './components/data-bar/data-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IpAddressTrackerComponent,
    MapComponentComponent,
    DataBarComponent,
  ],
  imports: [CommonModule, IpAddressTrackerRoutingModule, ReactiveFormsModule],
})
export class IpAddressTrackerModule {}
