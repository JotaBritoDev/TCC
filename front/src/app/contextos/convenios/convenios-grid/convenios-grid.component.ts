import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-convenios-grid',
  templateUrl: './convenios-grid.component.html',
  styleUrls: ['./convenios-grid.component.scss']
})
export class ConveniosGridComponent implements OnInit {

  @Input() lista: any;
  @Output() delete = new EventEmitter;
  @Output() edit = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
