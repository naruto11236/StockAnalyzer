import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './SideBar/SideBar.component';
import { HomeComponent} from './Home/Home.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule} from "@angular/common/http";
import {GetApiService} from "./Home/get-api.service";
import { ChartModule } from 'angular-highcharts';

 @NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    AgGridModule.withComponents([])

  ],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
