import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgendaComponent } from './agenda/agenda.component';
import { MatIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { MedicamentosGridComponent } from './medicamentos/medicamentos-grid/medicamentos-grid.component';
import { MedicamentosFormComponent } from './medicamentos/medicamentos-form/medicamentos-form.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { ConveniosFormComponent } from './convenios/convenios-form/convenios-form.component';
import { ConveniosGridComponent } from './convenios/convenios-grid/convenios-grid.component';
import { MedicosGridComponent } from './medicos/medicos-grid/medicos-grid.component';
import { MedicosFormComponent } from './medicos/medicos-form/medicos-form.component';
import { PacientesFormComponent } from './pacientes/pacientes-form/pacientes-form.component';
import { PacientesGridComponent } from './pacientes/pacientes-grid/pacientes-grid.component';
import { ConsultasGridComponent } from './consultas/consultas-grid/consultas-grid.component';
import { ConsultasFormComponent } from './consultas/consultas-form/consultas-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AgendaComponent,
    DashboardComponent,
    ConsultasComponent,
    PacientesComponent,
    MedicosComponent,
    HorariosComponent,
    MedicamentosComponent,
    MedicamentosGridComponent,
    MedicamentosFormComponent,
    ConveniosComponent,
    ConveniosFormComponent,
    ConveniosGridComponent,
    MedicosGridComponent,
    MedicosFormComponent,
    PacientesFormComponent,
    PacientesGridComponent,
    ConsultasGridComponent,
    ConsultasFormComponent
  ],
  exports: [ ]
})
export class ContextosModule { }
