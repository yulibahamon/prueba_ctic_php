import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      estudiante_id: ['', Validators.required],
      medico_id: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.citaForm.valid) {
      this.citaService.agendarCita(this.citaForm.value).subscribe(
        response => {
          alert('Cita agendada con éxito');
        },
        error => {
          alert('Error al agendar la cita');
        }
      );
    }
  }
}