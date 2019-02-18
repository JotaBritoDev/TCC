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

  public labelsConsultas: string[];
  public dataConsultas: number[];
  public dataConsultasCompleto: any;

  public labelConsultasConvenios: string[];
  public dataConsultasConvenios: number[];

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

  ngOnInit() {
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

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
