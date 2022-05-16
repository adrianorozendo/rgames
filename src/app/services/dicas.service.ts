import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dicas } from '../models/dicas';

@Injectable({
  providedIn: 'root'
})
export class DicasService {

    url = "http://localhost:3000/dicas"

  constructor(private httpClient : HttpClient) { }

  getDicas(): Observable<Dicas[]>{
    return this.httpClient.get<Dicas[]>(this.url)
  }
}
