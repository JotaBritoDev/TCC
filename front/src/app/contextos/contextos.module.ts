import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

import { BotoesFormularioComponent } from '../comum/botoes-formulario/botoes-formulario.component';
import { BotoesGridComponent } from '../comum/botoes-grid/botoes-grid.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultasFormComponent } from './consultas/consultas-form/consultas-form.component';
import { ConsultasGridComponent } from './consultas/consultas-grid/consultas-grid.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConveniosFormComponent } from './convenios/convenios-form/convenios-form.component';
import { ConveniosGridComponent } from './convenios/convenios-grid/convenios-grid.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MedicamentosFormComponent } from './medicamentos/medicamentos-form/medicamentos-form.component';
import { MedicamentosGridComponent } from './medicamentos/medicamentos-grid/medicamentos-grid.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { MedicosFormComponent } from './medicos/medicos-form/medicos-form.component';
import { MedicosGridComponent } from './medicos/medicos-grid/medicos-grid.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesFormComponent } from './pacientes/pacientes-form/pacientes-form.component';
import { PacientesGridComponent } from './pacientes/pacientes-grid/pacientes-grid.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CheckboxComponent } from '../comum/checkbox/checkbox.component';
import { LoadingComponent } from '../comum/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
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
    ConsultasFormComponent,
    BotoesFormularioComponent,
    BotoesGridComponent,
    CheckboxComponent,
    LoadingComponent
  ],
  exports: [ ]
})
export class ContextosModule { }
