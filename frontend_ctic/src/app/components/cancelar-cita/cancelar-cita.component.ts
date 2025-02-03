import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.css']
})
export class CancelarCitaComponent implements OnInit {
  citaId: number = 0;

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {}

  cancelarCita(): void {
    if (this.citaId) {
      this.citaService.cancelarCita(this.citaId).subscribe(
        response => {
          alert('Cita cancelada con éxito');
        },
        error => {
          alert('Error al cancelar la cita');
        }
      );
    }
  }
}