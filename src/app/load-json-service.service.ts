import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BarGraph } from './models/bargraph.model';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonServiceService {

  constructor(private http:HttpClient) {
    
   }
  public getJson():Observable<any>{
    return this.http.get("./assets/sucide-squad.json")
    
  }
}
