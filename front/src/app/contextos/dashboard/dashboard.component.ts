import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultasService } from '../consultas/consultas.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Consulta } from 'src/app/models/consulta';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject<void>();
  constructor(private consultasService: ConsultasService) { }

  public carregando: boolean;

  public labelsConvenios: string[];
  public dataConvenios: number[];

  public labelsConsultas: string[];
  public dataConsultas: number[];
  public dataConsultasCompleto: Array<any>;

  public labelConsultasConvenios: string[];
  public dataConsultasConvenios: number[];

  public labelsMedicos: string[];
  public dataMedicos: number[];

  public optionsConsultas = {
    scaleShowVerticalLines: false,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 1
        }
      }]
    }
  };

  public optionsConsultasConvenios = {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 25
      }
    }
  };

  public optionsMedicos = {
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          stepSize: 1
        }
      }]
    }
  };

  public optionsConvenios = {
    cutoutPercentage: 5,
    legend: {
      reverse: true,
      position: 'bottom',
      labels: {
        boxWidth: 10
      }
    }
  };

  ngOnInit() {
    this.carregando = true;
    this.labelsConsultas = [];
    this.dataConsultas = [];
    this.dataConsultasConvenios = [];

    this.labelConsultasConvenios = ['Com convênio', 'Sem convênio'];
    const filtroConvenio = function (e: Consulta) { return e.paciente.convenio ? true : false; };

    const dia = new Date();
    dia.setDate(dia.getDate() - 4);

    this.consultasService.listData(dia)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((dados) => {
        this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
        this.dataConsultas.push(dados.length);
        dia.setDate(dia.getDate() + 1);

        this.consultasService.listData(dia)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe((dados2) => {
            this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
            this.dataConsultas.push(dados2.length);
            dia.setDate(dia.getDate() + 1);

            this.consultasService.listData(dia)
              .pipe(takeUntil(this.unsubscribe))
              .subscribe((dados3) => {
                this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                this.dataConsultas.push(dados3.length);
                dia.setDate(dia.getDate() + 1);

                this.consultasService.listData(dia)
                  .pipe(takeUntil(this.unsubscribe))
                  .subscribe((dados4) => {
                    this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                    this.dataConsultas.push(dados4.length);
                    dia.setDate(dia.getDate() + 1);

                    this.consultasService.listData(dia)
                      .pipe(takeUntil(this.unsubscribe))
                      .subscribe((dados5) => {
                        this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                        this.dataConsultas.push(dados5.length);
                        dia.setDate(dia.getDate() + 1);

                        this.consultasService.listData(dia)
                          .pipe(takeUntil(this.unsubscribe))
                          .subscribe((dados6) => {
                            this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                            this.dataConsultas.push(dados6.length);
                            dia.setDate(dia.getDate() + 1);

                            this.consultasService.listData(dia)
                              .pipe(takeUntil(this.unsubscribe))
                              .subscribe((dados7) => {
                                this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                                this.dataConsultas.push(dados7.length);
                                dia.setDate(dia.getDate() + 1);

                                this.consultasService.listData(dia)
                                  .pipe(takeUntil(this.unsubscribe))
                                  .subscribe((dados8) => {
                                    this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                                    this.dataConsultas.push(dados8.length);
                                    dia.setDate(dia.getDate() + 1);

                                    this.consultasService.listData(dia)
                                      .pipe(takeUntil(this.unsubscribe))
                                      .subscribe((dados9) => {
                                        this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                                        this.dataConsultas.push(dados9.length);
                                        dia.setDate(dia.getDate() + 1);

                                        this.consultasService.listData(dia)
                                          .pipe(takeUntil(this.unsubscribe))
                                          .subscribe((dados10) => {
                                            this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                                            this.dataConsultas.push(dados10.length);
                                            dia.setDate(dia.getDate() + 1);

                                            this.consultasService.listData(dia)
                                              .pipe(takeUntil(this.unsubscribe))
                                              .subscribe((dados11) => {
                                                this.labelsConsultas.push(`${dia.getDate()}/${dia.getMonth() + 1}`);
                                                this.dataConsultas.push(dados11.length);
                                                dia.setDate(dia.getDate() + 1);

                                                const totalConvenio = dados.filter(filtroConvenio).length +
                                                  dados2.filter(filtroConvenio).length +
                                                  dados3.filter(filtroConvenio).length +
                                                  dados4.filter(filtroConvenio).length +
                                                  dados5.filter(filtroConvenio).length +
                                                  dados6.filter(filtroConvenio).length +
                                                  dados7.filter(filtroConvenio).length +
                                                  dados8.filter(filtroConvenio).length +
                                                  dados9.filter(filtroConvenio).length +
                                                  dados10.filter(filtroConvenio).length +
                                                  dados11.filter(filtroConvenio).length;

                                                this.dataConsultasCompleto = dados.concat(dados2).concat(dados3).concat(dados4)
                                                  .concat(dados5).concat(dados6).concat(dados7).concat(dados8).concat(dados9)
                                                  .concat(dados10).concat(dados11);

                                                this.dataConsultasConvenios.push(totalConvenio);
                                                this.dataConsultasConvenios.push(this.dataConsultasCompleto.length - totalConvenio);

                                                this.montaGraficoConvenios();
                                                this.montaGraficoMedicos();

                                                this.carregando = false;
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }

  private montaGraficoConvenios() {
    this.dataConvenios = [];
    this.labelsConvenios = [];

    const conveniosDados = [];
    let convenioAtual = '';
    let qtde = 0;
    this.dataConsultasCompleto
      .filter(e => e.paciente.convenio)
      .sort((a, b) => a.paciente.convenio.nome > b.paciente.convenio.nome ? -1 :
        a.paciente.convenio.nome < b.paciente.convenio.nome ? 1 : 0)
      .forEach(e => {
        if (e.paciente.convenio.nome !== convenioAtual) {
          if (convenioAtual !== '') {
            conveniosDados.push({
              convenio: convenioAtual,
              valor: qtde
            });
          }
          convenioAtual = e.paciente.convenio.nome;
          qtde = 0;
        }
        qtde ++;
      });
      if (convenioAtual !== '') {
        conveniosDados.push({
          convenio: convenioAtual,
          valor: qtde
        });
      }

    qtde = 0;
    conveniosDados
      .sort((a, b) => a.valor > b.valor ? -1 :
        a.valor < b.valor ? 1 : 0)
      .forEach(e => {
        if (this.dataConvenios.length < 4) {
          this.dataConvenios.push(e.valor);
          this.labelsConvenios.push(e.convenio);
        } else {
          qtde += e.valor;
        }
      });
    if (qtde > 0) {
      this.dataConvenios.push(qtde);
      this.labelsConvenios.push('Outros');
    }
    this.dataConvenios.reverse();
    this.labelsConvenios.reverse();
  }

  private montaGraficoMedicos() {
    this.dataMedicos = [];
    this.labelsMedicos = [];

    const medicosDados = [];

    let especialidadeAtual = '';
    let qtde = 0;
    this.dataConsultasCompleto
      .sort((a, b) => a.medico.especialidade > b.medico.especialidade ? -1 :
        a.medico.especialidade < b.medico.especialidade ? 1 : 0)
      .forEach(e => {
        if (e.medico.especialidade !== especialidadeAtual) {
          if (especialidadeAtual !== '') {
            medicosDados.push({
              especialidade: especialidadeAtual,
              valor: qtde
            });
          }
          especialidadeAtual = e.medico.especialidade;
          qtde = 0;
        }
        qtde++;
      });
    if (especialidadeAtual !== '') {
      medicosDados.push({
        especialidade: especialidadeAtual,
        valor: qtde
      });
    }

    qtde = 0;
    medicosDados
      .sort((a, b) => a.valor > b.valor ? -1 :
        a.valor < b.valor ? 1 : 0)
      .forEach(e => {
          this.dataMedicos.push(e.valor);
          this.labelsMedicos.push(e.especialidade);
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
