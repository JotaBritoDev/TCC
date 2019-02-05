import { Component, EventEmitter, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';

import { CalculaIdadeService } from '../servicos/calcula-idade.service';
import { ConsultaCepService } from '../servicos/consulta-cep.service';
import { Paciente } from 'src/app/models/paciente';
import { FormComponent } from 'src/app/comum/form/form.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Convenio } from 'src/app/models/convenio';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html'
})
export class PacientesFormComponent extends FormComponent implements OnInit {

  @Input() item: Paciente;
  @Input() convenios: Convenio[];
  @Output() cancel = new EventEmitter;
  @Output() save = new EventEmitter;
  @ViewChild('focusObj') focusObj: ElementRef;

  public form: FormGroup;
  private conveniosOriginal: Convenio[];

  constructor(private formBuilder: FormBuilder,
    private cepService: ConsultaCepService,
    private idadeService: CalculaIdadeService) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      _id: [this.item ? this.item._id : ''],
      nome: [this.item ? this.item.nome : ''],
      nascimento: [this.item ? this.item.nascimento : true],
      telefone: [this.item ? this.item.telefone : ''],
      email: [this.item ? this.item.email : ''],
      convenio: [this.item ? this.item.convenio : ''],
      altura: [this.item ? this.item.altura : ''],
      peso: [this.item ? this.item.peso : ''],
      endereco: this.formBuilder.group ({
        cep: [this.item ? this.item.endereco.cep : ''],
        numero: [this.item ? this.item.endereco.numero : ''],
        complemento: [this.item ? this.item.endereco.complemento : ''],
        rua: [this.item ? this.item.endereco.rua : ''],
        bairro: [this.item ? this.item.endereco.bairro : ''],
        cidade: [this.item ? this.item.endereco.cidade : ''],
        estado: [this.item ? this.item.endereco.estado : '']})
      });

    setTimeout(() => {
      this.focusObj.nativeElement.focus();
    }, 100);

    this.inserindo = (this.item ? false : true);

    this.loadCombo();
  }

  private loadCombo() {
    if ((this.item) && (this.item.convenio) && (this.convenios)) {
      this.conveniosOriginal = this.convenios;

      this.convenios = this.convenios
        .filter((e) => e.nome !== this.item.convenio.nome);
      this.convenios.push(this.item.convenio);
      this.convenios
        .sort((a, b) => {
          return a.nome > b.nome ? 1 : -1;
        });
    }
  }

  public convenioAtivo(convenio: Convenio): boolean {
    let retorno = false;

    if (!this.conveniosOriginal) {
      retorno = true;
    } else {
      retorno = this.conveniosOriginal.filter(e => e.nome === convenio.nome).length > 0;
    }

    return retorno;
  }

  public onSubmit() {
    this.save.emit(this.form.value);
  }

  private completaEndereco(dados, form) {
    this.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        complemento: dados.complemento
      }
    });
  }

  private resetaEndereco(form) {
    form.form.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
        complemento: null
      }
    });
  }

  public consultaCEP(cep: string, form: any) {
    if ((cep != null) && (cep !== '')) {
      const retorno = this.cepService.execute(cep);

      if (retorno != null) {
        retorno.subscribe(dados => {
          if (!('erro' in dados)) {
            this.completaEndereco(dados, form);
          } else {
            this.resetaEndereco(form);
          }
        });
      }
    }
  }

  public calculaIdade(nascimento) {
    return this.idadeService.execute  (nascimento);
  }

}
