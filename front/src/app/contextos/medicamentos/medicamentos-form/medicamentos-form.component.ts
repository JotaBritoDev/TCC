import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medicamento } from 'src/app/models/medicamento';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html'
})
export class MedicamentosFormComponent implements OnInit {

  @Input() item: Medicamento;
  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.item ? this.item._id : ''],
      nome: [this.item ? this.item.nome : '']
    });
  }

  public onSubmit() {
    this.save.emit(this.form.value);
  }

}
