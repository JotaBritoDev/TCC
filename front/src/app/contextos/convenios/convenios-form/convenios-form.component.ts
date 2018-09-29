import {
  Component,
  OnInit, 
  Output,
  EventEmitter, 
  ViewChild, 
  AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-convenios-form',
  templateUrl: './convenios-form.component.html',
  styleUrls: ['./convenios-form.component.scss']
})
export class ConveniosFormComponent implements OnInit, AfterContentInit {

  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;
  @ViewChild('frm') form;

  public onSubmit(medicamento) {
    this.save.emit(medicamento);    
  }
  
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.form.form.setValue({
      nome: "teste"
    });
  }

}
