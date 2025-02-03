import { Medico } from "./medico.model";
import { Estudiante } from "./estudiante.model";

export interface Cita {
    id?: number;
    estudianteId: number;
    medicoId: number;
    fecha: string;
    hora: string;
    estado: 'Pendiente' | 'Confirmada' | 'Cancelada';
    medico?: Medico;
    estudiante?: Estudiante;
  }