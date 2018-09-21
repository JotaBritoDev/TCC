import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-convenios-form',
  templateUrl: './convenios-form.component.html',
  styleUrls: ['./convenios-form.component.scss']
})
export class ConveniosFormComponent implements OnInit {

  @Output() finalizouAlteracao = new EventEmitter();

  public convenio = { nome: '' };

  public onSubmit(form) {
    console.log(this.convenio);
    this.finalizouAlteracao.emit();
  }

  public cancelar() {
    this.finalizouAlteracao.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
