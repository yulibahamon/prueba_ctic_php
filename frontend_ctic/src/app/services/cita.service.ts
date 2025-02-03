import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  agendarCita(cita: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/citas`, cita);
  }

  obtenerCitasPorEstudiante(estudianteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/citas/estudiante/${estudianteId}`);
  }

  cancelarCita(citaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/citas/${citaId}`);
  }
}