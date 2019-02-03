import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  protected inserindo = false;

  constructor() { }

  ngOnInit() {
  }

  public isInvalid(control: AbstractControl, path: string): boolean {
    const names = path.split('.');
    for (const name of names) {
      control = control.get(name);
    }

    const _invalid = control.invalid;
    if (_invalid && (control.touched)) {
      return true;
    }

    return false;
  }

  public getPlaceholder(placeholder: string) {
    return this.inserindo ?  placeholder : '';
  }

}
