import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {

  @Input() texto = 'Ativo';
  @Input() disabled = false;
  @Input() form: FormGroup;
  @Input() controlName: string;
  @ViewChild('check') check: ElementRef;

  constructor() { }

  ngOnInit() {
    const valorInicial: boolean = this.form.get(this.controlName).value;
    this.check.nativeElement.checked = valorInicial;
    this.form.get(this.controlName).setValue(valorInicial);
  }

  public getDisabled(): boolean {
    return this.disabled;
  }

  public changeCheck() {
    this.form.get(this.controlName).setValue(this.check.nativeElement.checked);
  }

}
