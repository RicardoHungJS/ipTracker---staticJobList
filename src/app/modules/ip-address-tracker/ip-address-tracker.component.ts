import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import {
  Coords,
  DataBar,
  IPTrackingData,
  ipAddress,
} from 'src/app/shared/models/ipTrackerModels';
import { IpTrackerService } from 'src/app/shared/services/ip-tracker/ip-tracker.service';

@Component({
  selector: 'app-ip-address-tracker',
  templateUrl: './ip-address-tracker.component.html',
  styleUrls: ['./ip-address-tracker.component.scss'],
})
export class IpAddressTrackerComponent implements OnInit {
  ipAddress: string = '';
  ipData!: IPTrackingData;
  coords!: Coords;
  dataBarInfo!: DataBar;

  ipForm!: FormGroup;

  constructor(
    private ipTrackerService: IpTrackerService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.buildForm();
    await this.gettingIpAddressData();
  }

  buildForm() {
    this.ipForm = this.formBuilder.group({
      formIpAddress: [
        '',
        [
          Validators.required,
          Validators.pattern('^(\\d{1,3}(\\.\\d{1,3}){3}|[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\\.[a-zA-Z]{2,})+)$'),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.ipForm?.valid) {
      const searchParameter = this.ipForm.value.formIpAddress;
      if (searchParameter) {
        this.checkIpAddressOrUrl(searchParameter);
      }
    }
  }

  checkIpAddressOrUrl(input: string) {
    const ipAddressRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const urlRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
    let inputType = '';
    if (ipAddressRegex.test(input)) {
      inputType = 'ipAdress';
      this.getLocationData(input, inputType);
    } else if (urlRegex.test(input)) {
      inputType = 'url';
      this.getLocationData(input, inputType);
    }
  }

  async gettingIpAddress() {
    const ipAddressAux: ipAddress = await firstValueFrom(
      this.ipTrackerService.getIpAddress()
    );
    this.ipAddress = ipAddressAux.ip;
    this.ipForm.patchValue({ formIpAddress: this.ipAddress });
  }

  async gettingIpAddressData() {
    await this.gettingIpAddress();
    if (this.ipAddress) {
      this.getLocationData(this.ipAddress, 'url');
    }
  }

  getLocationData(searchParameter: string, inputType: string) {
    this.ipTrackerService.getLocationByIpAddress(searchParameter, inputType).subscribe((res) => {
        this.ipData = res;
        this.coords = {
          lat: this.ipData?.location?.lat,
          lng: this.ipData?.location?.lng,
        };
        this.dataBarInfo = {
          ip: this.ipData?.ip,
          city: this.ipData?.location.city,
          region: this.ipData?.location.region,
          postalCode: this.ipData?.location.postalCode,
          timezone: this.ipData?.location.timezone,
          isp: this.ipData?.isp,
        };
      });
  }
}
