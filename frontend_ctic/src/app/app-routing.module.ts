import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { CancelarCitaComponent } from './components/cancelar-cita/cancelar-cita.component';

const routes: Routes = [
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'ver-citas', component: VerCitasComponent },
  { path: 'cancelar-cita', component: CancelarCitaComponent },
  { path: '', redirectTo: '/agendar-cita', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }