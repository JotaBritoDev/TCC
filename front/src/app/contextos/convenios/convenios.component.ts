import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  public formVisible = false;

  public showForm() {
    this.formVisible = true;
  }

  public showGrid() {
    this.formVisible = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
