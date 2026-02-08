import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indicator } from '../models/indicator.model';
import { BaseIndicator } from '../models/base-indicator.model';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  private apiUrl = 'http://localhost:8080/api/indicators';

  constructor(private http: HttpClient) { }

  getAllIndicators(): Observable<Indicator[]> {
    return this.http.get<Indicator[]>(this.apiUrl);
  }

  getAllBaseIndicators(): Observable<BaseIndicator[]> {
    return this.http.get<BaseIndicator[]>(`${this.apiUrl}`);
  }

  createIndicator(indicator: Indicator): Observable<Indicator> {
    return this.http.post<Indicator>(this.apiUrl, indicator);
  }

  deleteIndicator(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
