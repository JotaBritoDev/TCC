import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Medico } from 'src/app/models/medico';
import { FormComponent } from 'src/app/comum/form/form.component';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html'
})
export class MedicosFormComponent extends FormComponent implements OnInit {

  @Input() item: Medico;
  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;
  @ViewChild('focusObj') focusObj: ElementRef;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.item ? this.item._id : ''],
      nome: [this.item ? this.item.nome : ''],
      nascimento: [this.item ? this.item.nascimento : true],
      telefone: [this.item ? this.item.telefone : ''],
      email: [this.item ? this.item.email : ''],
      especialidade: [this.item ? this.item.especialidade : ''],
      crm: [this.item ? this.item.crm : ''],
      restricoes: [this.item ? this.item.restricoes : '']
    });

    setTimeout(() => {
      this.focusObj.nativeElement.focus();
    }, 100);

    this.inserindo = (this.item ? false : true);
  }

  public onSubmit() {
    this.save.emit(this.form.value);
  }

}
