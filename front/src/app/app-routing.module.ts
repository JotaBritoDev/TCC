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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'consultas', component: ConsultasComponent, canActivate: [AuthGuard] },
  { path: 'consultas/new', component: ConsultasComponent, canActivate: [AuthGuard] },
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard] },
  { path: 'medicos', component: MedicosComponent, canActivate: [AuthGuard] },
  { path: 'horarios', component: HorariosComponent, canActivate: [AuthGuard] },
  { path: 'medicamentos', component: MedicamentosComponent, canActivate: [AuthGuard] },
  { path: 'convenios', component: ConveniosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
