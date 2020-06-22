import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  public columnDefs;
  public rowData: any[];
  public APIKEY = "brf5sanrh5rah2kpep0g";
  public tickers = ["AAPL", "AMZN", "MSFT", "TSLA", "BA", "CVS", "EA", "ATVI", "ZM", "FB"]

  constructor(public api: GetApiService, public http: HttpClient) {

  }
  ngOnInit() {
    this.columnDefs = [
      { headerName: "Symbol", field: "symbol", sortable: true, filter: true, },
      { headerName: "Price", field: "metricType", sortable: true, filter: true, },
      { headerName: "10 Day Average", field: "metric.10DayAverageTradingVolume", sortable: true, filter: true },
      { headerName: "3 Month Average", field: "metric.3MonthAverageTradingVolume", sortable: true, filter: true },
      { headerName: "52 Week High", field: "metric.52WeekHigh", sortable: true, filter: true },
      { headerName: "52 Week low", field: "metric.52WeekLow", sortable: true, filter: true },
      { headerName: "Volume", field: "metric.Volume", sortable: true, filter: true },
      { headerName: "High Today", field: "metric.High", sortable: true, filter: true },
      { headerName: "Low Today", field: "metric.Low", sortable: true, filter: true }

    ];
  }
  private gridApi;

  public onGridReady(params: any) {
    this.gridApi = params.api;
    var x = [];
    this.tickers.forEach(e => {
      this.http.get(`https://finnhub.io/api/v1/stock/metric?symbol=${e}&metric=Price&token=${this.APIKEY}`).subscribe(data => {
        x.push(data);
        this.gridApi.setRowData(x);
      })
    });
  
   
  }
}
