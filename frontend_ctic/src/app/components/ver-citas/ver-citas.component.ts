import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {
  citas: any[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    const estudianteId = 1; // Cambia esto por el ID del estudiante logueado
    this.citaService.obtenerCitasPorEstudiante(estudianteId).subscribe(
      response => {
        this.citas = response;
      },
      error => {
        alert('Error al obtener las citas');
      }
    );
  }
}