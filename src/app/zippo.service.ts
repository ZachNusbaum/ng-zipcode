import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZippoService {

  constructor(private http: HttpClient) { }

  public parse(zip) {
    return this.http.get(`https://api.zippopotam.us/us/${zip}`);
  }

  public reverse(city: string, state: string) {
    return this.http.get(`https://api.zippopotam.us/us/${state}/${city}`);
  }
}
