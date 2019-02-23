import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './contextos/dashboard/dashboard.component';
import { AgendaComponent } from './contextos/agenda/agenda.component';
import { ConsultasComponent } from './contextos/consultas/consultas.component';
import { PacientesComponent } from './contextos/pacientes/pacientes.component';
import { MedicosComponent } from './contextos/medicos/medicos.component';
import { HorariosComponent } from './contextos/horarios/horarios.component';
import { MedicamentosComponent } from './contextos/medicamentos/medicamentos.component';
import { ConveniosComponent } from './contextos/convenios/convenios.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/agenda', pathMatch: 'full' },
  { path: 'agenda', component: AgendaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'consultas/new', component: ConsultasComponent },
  { path: 'convenios', component: ConveniosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
