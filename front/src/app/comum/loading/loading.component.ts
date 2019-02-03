import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnChanges {

  @Input() loading: boolean;
  @Input() big: boolean;

  constructor() { }

  ngOnChanges() {
  }

  public getSize(): string {
    return this.big ? '128px' : '64px';
  }

}
