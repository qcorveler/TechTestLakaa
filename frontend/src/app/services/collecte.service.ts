import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collecte } from '../models/collecte.model';

@Injectable({
  providedIn: 'root'
})
export class CollecteService {
  private apiUrl = 'http://localhost:8080/api/collectes';

  constructor(private http: HttpClient) { }

  getAllCollectes(): Observable<Collecte[]> {
    return this.http.get<Collecte[]>(this.apiUrl);
  }

  createCollecte(collecte: Collecte): Observable<Collecte> {
    return this.http.post<Collecte>(this.apiUrl, collecte);
  }
}
