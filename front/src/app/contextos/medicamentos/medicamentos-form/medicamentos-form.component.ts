import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.scss']
})
export class MedicamentosFormComponent implements OnInit {

  @Output() finalizouAlteracao = new EventEmitter();

  public onSubmit(form) {
    console.log(form.value);
    this.finalizouAlteracao.emit();
  }

  public cancelar() {
    this.finalizouAlteracao.emit();
  }

  constructor() {}

  ngOnInit() {}

}
