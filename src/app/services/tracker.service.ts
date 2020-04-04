import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private byCity = 'https://api.covidph.org/api/byCity';
  private totals = 'https://api.covidph.org/api/totals';
  private patientList = 'https://api.covidph.org/api/patientList';

  private requestOptions;

  constructor(private http: HttpClient) {
    const headerDict = {
      'Access-Control-Allow-Headers': '*',
      Accept: '*/*',
    };
    this.requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
  }

  getCity = () => {
    return this.http.post(this.byCity,'', this.requestOptions);
  }

  getTotal = () => {
    return this.http.post(this.totals, this.requestOptions);
  }

  getPatients = () => {
    return this.http.post(this.patientList, this.requestOptions);
  }

}
