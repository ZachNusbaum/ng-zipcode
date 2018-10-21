import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZippoService {

  constructor(private http: HttpClient) { }

  public parse(zip: string) {
    return this.http.get(`https://api.zippopotam.us/us/${zip}`);
  }

  public reverse(city: string, state: string) {
    return this.http.get(`https://api.zippopotam.us/us/${state}/${city}`);
  }

  parseTwo(zip1: string, zip2: string) {
    let req1 = this.http.get(`https://api.zippopotam.us/us/${zip1}`);
    let req2 = this.http.get(`https://api.zippopotam.us/us/${zip2}`);

    return forkJoin([req1, req2]);
  }
}
