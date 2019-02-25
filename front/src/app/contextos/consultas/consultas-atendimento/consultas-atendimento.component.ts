import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento';

@Component({
  selector: 'app-consultas-atendimento',
  templateUrl: './consultas-atendimento.component.html'
})
export class ConsultasAtendimentoComponent implements OnInit {

  @Input() item: Consulta;
  @Input() medicamentosLista: Medicamento[];
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<Consulta> = new EventEmitter();

  public form: FormGroup;
  public medicamentos: Medicamento[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.item ? this.item._id : undefined],
      parecerMedico: [this.item ? this.item.parecerMedico : undefined]
    });
  }

  public formatDate(date: Date): string {
    const dt = new Date(date);
    return dt.toLocaleDateString('pt-BR');
  }

  public formatHour(date: Date): string {
    const dt = new Date(date);
    return dt.toLocaleTimeString('pt-BR').substr(0, 5);
  }

  public onSubmit() {
    this.item.parecerMedico = this.form.value.parecerMedico;
    if (this.medicamentos) {
      console.log(this.medicamentos);
      this.item.medicamentos = this.medicamentos;
    }
    this.save.emit(this.form.value);
  }

  public addMedicamento() {
    if (!this.medicamentos) {
      this.medicamentos = [];
    }
    this.medicamentos.push({ _id: undefined, nome: '' });
  }

  public selecionarMedicamento(medicamento: Medicamento, valor) {
    console.log(medicamento);
    medicamento = this.medicamentosLista.find(e => e.nome === valor);
    console.log(medicamento);
  }

}
