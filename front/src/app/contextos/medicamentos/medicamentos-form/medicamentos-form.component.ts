import {
  Component,
  OnInit, 
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicamentos-form',
  templateUrl: './medicamentos-form.component.html',
  styleUrls: ['./medicamentos-form.component.scss']
})
export class MedicamentosFormComponent implements OnInit {

  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;

  public onSubmit(medicamento) {
    this.save.emit(medicamento);    
  }

  constructor() { }

  ngOnInit() { }

}
