import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
import { HttpClient } from "@angular/common/http";
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public rowData;

  constructor(public api: GetApiService, public http: HttpClient) {

  }
  ngOnInit() {
    this.columnDefs = [
      { headerName: "Symbol", field: "symbol", sortable: true, filter: true, },
      { headerName: "10 Day Average", field: "metric.10DayAverageTradingVolume", sortable: true, filter: true },
      { headerName: "3 Month Average", field: "metric.3MonthAverageTradingVolume", sortable: true, filter: true },
      { headerName: "52 Week High", field: "metric.52WeekHigh", sortable: true, filter: true },
      { headerName: "52 Week low", field: "metric.52WeekLow", sortable: true, filter: true },
    ];
  }

  public onGridReady(params) {
      this.gridApi = params.api;
      this.http.get("https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=brf5sanrh5rah2kpep0g").subscribe(data => {
        let x = [];
        x.push(data);
        this.rowData = x;
      })
  }
}
