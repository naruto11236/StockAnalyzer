import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
import { HttpClient } from "@angular/common/http";


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
      { headerName: "Symbol", field: "0", sortable: true, filter: true, },
      { headerName: "Open", field: "01", sortable: true, filter: true },
      { headerName: "High", field: "02", sortable: true, filter: true },
      { headerName: "Low", field: "03", sortable: true, filter: true },
      { headerName: "Price", field: "04", sortable: true, filter: true },
    ];
  }

  public onGridReady(params) {
      this.gridApi = params.api;
      this.http.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=YEPZVDEZ6XFE0YRB").subscribe(data => {
        var result = data["Global Quote"];
        let x = [];
        x.push(result);
        this.rowData = x;
      })
  }
}
