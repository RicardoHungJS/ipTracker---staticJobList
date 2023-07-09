import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPTrackingData, ipAddress } from '../../models/ipTrackerModels';

@Injectable({
  providedIn: 'root',
})
export class IpTrackerService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://geo.ipify.org/api/v2/country,city';
  private ipAddressUrl = 'https://api.ipify.org?format=json';

  getIpAddress(): Observable<ipAddress> {
    const ipObject = this.http.get<ipAddress>(this.ipAddressUrl);
    return ipObject;
  }

  getLocationByIpAddress(
    searchParameter: string,
    inputType: string
  ): Observable<IPTrackingData> {
    /* Se entiende que para las apiKey y otros datos delicados se deben utilizar las variables de entorno del hosting y guardadas en un archivo 'enviroment' y 'env'
    para ser consumidas en toda la aplicación sin embargo para efectos prácticos se dejará la apiKey de ipify guardada en una constante de este servicio. */

    const apiKey = 'at_jJujWXqAOtcCLPdTLX6LGN8tKLykX';

    let url = '';

    switch (inputType) {
      case 'ipAdress':
        url = `${this.apiUrl}?apiKey=${apiKey}&ipAddress=${searchParameter}`;
        break;

      case 'url':
        url = `${this.apiUrl}?apiKey=${apiKey}&domain=${searchParameter}`;
        break;

      default:
        break;
    }

    const response = this.http
      .get<IPTrackingData>(url)
      .pipe(map((res: any) => res));

    return response;
  }
}
