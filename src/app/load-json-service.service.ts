import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BarGraph } from './models/bargraph.model';
import { json } from 'd3';

@Injectable()
export class LoadJsonServiceService {

  constructor(private http:HttpClient) {
    
   }
  public getJson():Observable<BarGraph>{
    return this.http.get<BarGraph>("https://api.myjson.com/bins/utaki")
    .pipe(
     
    );
    
  }
}
