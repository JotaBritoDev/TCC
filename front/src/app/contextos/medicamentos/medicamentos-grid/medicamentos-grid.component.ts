import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicamentos-grid',
  templateUrl: './medicamentos-grid.component.html',
  styleUrls: ['./medicamentos-grid.component.scss']
})
export class MedicamentosGridComponent implements OnInit {

  @Input() lista: any;
  @Output() delete = new EventEmitter;
  @Output() edit = new EventEmitter;

  constructor() { }

  ngOnInit() { }

}
