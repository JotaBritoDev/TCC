import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Convenio } from 'src/app/models/convenio';

@Component({
  selector: 'app-convenios-form',
  templateUrl: './convenios-form.component.html'
})
export class ConveniosFormComponent implements OnInit {

  @Input() item: Convenio;
  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;
  @ViewChild('focusObj') focusObj: ElementRef;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.item ? this.item._id : ''],
      nome: [this.item ? this.item.nome : ''],
      ativo: [this.item ? this.item.ativo : true]
    });

    setTimeout(() => {
      this.focusObj.nativeElement.focus();
    }, 100);
  }

  public onSubmit() {
    this.save.emit(this.form.value);
  }

}
