import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita.model';
import { Medico } from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://localhost:8000/api'; // URL de tu backend Laravel

  constructor(private http: HttpClient) {}

  // Obtener médicos disponibles
  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.apiUrl}/medicos`);
  }

  // Obtener citas de un estudiante
  getCitasPorEstudiante(estudianteId: number): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.apiUrl}/citas/estudiante/${estudianteId}`);
  }

  // Agendar nueva cita
  agendarCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.apiUrl}/citas`, cita);
  }

  // Cancelar cita
  cancelarCita(citaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/citas/${citaId}`);
  }
}