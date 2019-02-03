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
  @Input() valorInicial: boolean;
  @ViewChild('check') check: ElementRef;

  constructor() { }

  ngOnInit() {
    const vlrInicial: boolean = (this.form ? this.form.get(this.controlName).value : this.valorInicial);
    this.check.nativeElement.checked = vlrInicial;

    if (this.form) {
      this.form.get(this.controlName).setValue(vlrInicial);
    }
  }

  public getDisabled(): boolean {
    return this.disabled;
  }

  public changeCheck() {
    if (this.form) {
      this.form.get(this.controlName).setValue(this.check.nativeElement.checked);
    }
  }

}
