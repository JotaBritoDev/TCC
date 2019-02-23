import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { BotoesFormularioComponent } from './botoes-formulario/botoes-formulario.component';
import { BotoesGridComponent } from './botoes-grid/botoes-grid.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import { PaginacaoGridComponent } from './paginacao-grid/paginacao-grid.component';
import { SemRegistroGridComponent } from './sem-registro-grid/sem-registro-grid.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    BotoesFormularioComponent,
    BotoesGridComponent,
    CheckboxComponent,
    FormComponent,
    LoadingComponent,
    PaginacaoGridComponent,
    SemRegistroGridComponent
  ],
  exports: [
    BotoesFormularioComponent,
    BotoesGridComponent,
    CheckboxComponent,
    FormComponent,
    LoadingComponent,
    PaginacaoGridComponent,
    SemRegistroGridComponent
  ]
})
export class ComumModule { }
