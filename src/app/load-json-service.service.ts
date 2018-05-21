import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BarGraph } from './models/bargraph.model';

@Injectable()
export class LoadJsonServiceService {

  constructor(private http:HttpClient) {
    
   }
  public getJson():Observable<BarGraph> {
    return this.http.get<BarGraph>("./assets/sucide-squad.json")
    
  }
}
