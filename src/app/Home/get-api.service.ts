import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Stock } from './global.model';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }

  apiCall() {
    return this.http.get<Stock[]>("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=YEPZVDEZ6XFE0YRB");
  }
}
