import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class GsuiteService {

  constructor(private http: HttpClient) { }

  getSpreadSheetData() {
    var url = 'https://docs.google.com/spreadsheets/d/1G7J-Cjw8NWyAlKXEjUQsV5-5RdcRC8YBgJ7_ORLCAEQ/edit#gid=989351860';
    this.http.get(url)
    .subscribe( data => {
      console.log('data', data);


    })
  }

  s() {

    console.log('test')
  }
}
