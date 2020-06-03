import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetApiService} from './get-api.service';
import { Subscriber } from 'rxjs';
import { Stock} from './global.model'
@Component({
 selector: 'app-home',
 templateUrl: './Home.component.html',
 styleUrls:['./Home.component.css']
})
export class HomeComponent implements OnInit {
  stocks$: Stock[];
    columnDefs = [
        {headerName: "Symbol", field: "symbol", sortable: true, filter: true},
        {headerName: "Open", field: "ticker", sortable: true, filter: true},
        {headerName: "High", field: "high", sortable: true, filter: true},
        {headerName: "Low", field: "low", sortable: true, filter: true},
        {headerName: "Price", field: "price", sortable: true, filter: true},

      ]
      rowData: any = [];
      
      constructor(private api:GetApiService) {

      }
      ngOnInit() {
        const stocks$ = this.api.apiCall().subscribe(data=>{this.stocks$=data; this.rowData = this.stocks$; console.log(data)});
        // this.rowData = x.map;
        
        }
      }
    