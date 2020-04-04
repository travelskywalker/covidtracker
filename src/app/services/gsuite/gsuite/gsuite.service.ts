import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GsuiteService {

  constructor(private http: HttpClient) { }

  getSpreadSheetData() {
    var url = 'https://spreadsheets.google.com/feeds/cells/1G7J-Cjw8NWyAlKXEjUQsV5-5RdcRC8YBgJ7_ORLCAEQ/1/public/full?alt=json';
    this.http.get(url)
    .subscribe( data => {

      console.log(data)
    })
  }

  s() {

    console.log('test')
  }
}


// https://spreadsheets.google.com/feeds/list/1G7J-Cjw8NWyAlKXEjUQsV5-5RdcRC8YBgJ7_ORLCAEQ/1/public/values?alt=json