import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';
import { Ticket } from '../model/ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8000/api/tickets/';

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}${id}/`);
  }

  create(ticket: Ticket): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, ticket);
  }

}
