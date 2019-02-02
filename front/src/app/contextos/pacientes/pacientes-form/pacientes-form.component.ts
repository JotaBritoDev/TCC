import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  ConsultaCepService
} from '../servicos/consulta-cep.service';
import { CalculaIdadeService } from '../servicos/calcula-idade.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html'
})
export class PacientesFormComponent implements OnInit {

  @Output() finalizouAlteracao = new EventEmitter();

  public onSubmit(form) {
    console.log(form.value);
    this.finalizouAlteracao.emit();
  }

  public cancelar() {
    this.finalizouAlteracao.emit();
  }

  private completaEndereco(dados, form) {
    form.form.patchValue({
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

  constructor(private cepService: ConsultaCepService,
    private idadeService: CalculaIdadeService) {}

  ngOnInit() {}

}
