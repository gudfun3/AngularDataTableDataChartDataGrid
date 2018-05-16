import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import * as d3 from 'd3';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule } from '@swimlane/ngx-ui';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { D3Chart1Component } from './d3-chart1/d3-chart1.component';

import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3piechartComponent } from './d3piechart/d3piechart.component';
const appRoutes:Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'datatable', component:DataTableComponent},
  {path: 'datagrid', component:DataGridComponent},
  {path: 'datachart', component:DataChartComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'about', component:AboutComponent},
  {path: 'd3chart1', component: D3Chart1Component},
  {path: 'd3piechart', component: D3piechartComponent},
  {path: 'd3barchart', component: D3BarChartComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}  
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactusComponent,
    DataChartComponent,
    DataGridComponent,
    DataTableComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    PageNotFoundComponent,
    D3Chart1Component,
    D3BarChartComponent,
    D3piechartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxChartsModule,
    NgxUIModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
