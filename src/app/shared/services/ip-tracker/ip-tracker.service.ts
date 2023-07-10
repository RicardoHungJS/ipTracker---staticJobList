import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPTrackingData, ipAddress } from '../../models/ipTrackerModels';
import { environment } from 'src/enviroments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class IpTrackerService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://geo.ipify.org/api/v2/country,city';
  private ipAddressUrl = 'https://api.ipify.org?format=json';
  private apiKey = environment.ipify_key;

  getIpAddress(): Observable<ipAddress> {
    const ipObject = this.http.get<ipAddress>(this.ipAddressUrl);
    return ipObject;
  }

  getLocationByIpAddress(
    searchParameter: string,
    inputType: string
  ): Observable<IPTrackingData> {
    let url = '';

    switch (inputType) {
      case 'ipAdress':
        url = `${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${searchParameter}`;
        break;

      case 'url':
        url = `${this.apiUrl}?apiKey=${this.apiKey}&domain=${searchParameter}`;
        break;

      default:
        break;
    }

    const response = this.http.get<IPTrackingData>(url);

    return response;
  }
}
