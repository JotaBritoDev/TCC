import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { PacientesService } from '../../pacientes/pacientes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Paciente } from 'src/app/models/paciente';
import { Medico } from 'src/app/models/medico';
import { MedicosService } from '../../medicos/medicos.service';
import { ConsultasService } from '../consultas.service';
import { Consulta } from 'src/app/models/consulta';

@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html'
})
export class ConsultasFormComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject<void>();
  public pacientes: Paciente[];
  public loadingPacientes: boolean;
  public pacienteEscolhido: Paciente;
  public executouPesquisaPaciente: boolean;

  public medicos: Medico[];
  public loadingMedicos: boolean;
  public medicoEscolhido: Medico;
  public executouPesquisaMedico: boolean;

  public loadingConsultas: boolean;
  public horarioEscolhido: Date;
  public executouPesquisaConsulta: boolean;

  public gradeConsultas: any[];
  public observacao: string;

  @Input() item: Consulta;
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<Consulta> = new EventEmitter();

  @ViewChild('pacienteInput') pacienteInput: ElementRef;
  @ViewChild('medicoInput') medicoInput: ElementRef;
  @ViewChild('dataInput') dataInput: ElementRef;
  @ViewChild('observacaoInput') observacaoInput: ElementRef;

  constructor(private pacientesService: PacientesService,
    private medicosService: MedicosService,
    private consultasService: ConsultasService) { }

  ngOnInit() {
    this.loadingPacientes = false;
    this.executouPesquisaPaciente = false;
    this.executouPesquisaConsulta = false;

    setTimeout(() => {
      this.pacienteInput.nativeElement.focus();
    }, 100);
  }

  public filtrarPacientes() {
    this.loadingPacientes = true;
    this.executouPesquisaPaciente = true;
    this.pacienteInput.nativeElement.select();

    this.pacientesService.list(1, this.pacienteInput.nativeElement.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(dados => {
        this.pacientes = dados;
        this.loadingPacientes = false;
      });
  }

  public escolherPaciente(paciente: Paciente) {
    this.pacienteEscolhido = paciente;

    if (this.medicoEscolhido) {
      setTimeout(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.dataInput.nativeElement.value = tomorrow.toISOString().substr(0, 10);
        this.dataInput.nativeElement.focus();
      }, 100);
    } else {
      setTimeout(() => {
        this.medicoInput.nativeElement.focus();
      }, 100);
    }
  }

  public filtrarMedicos() {
    this.loadingMedicos = true;
    this.executouPesquisaMedico = true;
    this.medicoInput.nativeElement.select();

    this.medicosService.list(1, this.medicoInput.nativeElement.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(dados => {
        this.medicos = dados;
        this.loadingMedicos = false;
      });
  }

  public escolherMedico(medico: Medico) {
    this.medicoEscolhido = medico;
    if (this.pacienteEscolhido) {
      setTimeout(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.dataInput.nativeElement.value = tomorrow.toISOString().substr(0, 10);
        this.dataInput.nativeElement.focus();
      }, 100);
    }
  }

  public trocarPaciente() {
    this.executouPesquisaPaciente = false;
    this.pacientes = undefined;
    this.pacienteEscolhido = undefined;
    setTimeout(() => {
      this.pacienteInput.nativeElement.focus();
    }, 100);
  }

  public trocarMedico() {
    this.executouPesquisaMedico = false;
    this.medicos = undefined;
    this.medicoEscolhido = undefined;
    setTimeout(() => {
      this.medicoInput.nativeElement.focus();
    }, 100);
  }

  public formatDate(date: Date): string {
    return new Date( date.toString() + ' 00:00:0000' ).toLocaleDateString('pt-BR');
  }

  public formatDateHour(date: Date): string {
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR').substr(0, 5);
  }

  public formatHour(date: Date): string {
    return date.toLocaleTimeString('pt-BR').substr(0, 5);
  }

  private padLeft(number, length) {
    let my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
  }

  public getConsultas(date: Date) {
    this.loadingConsultas = true;
    this.executouPesquisaConsulta = true;
    this.consultasService.listData(new Date(date.toString() + ' 00:00:0000'))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(dados => {
        this.gradeConsultas = [];
        let hora = 8;
        let minutos = 0;
        for (let index = 0; index < 25; index++) {
          minutos = (index % 2) * 30;
          const momento = this.padLeft(hora, 2) + ':' + this.padLeft(minutos, 2);
          const consulta = dados.filter((e) => this.formatHour(new Date(e.data)) === momento)[0];
          const sit = consulta ? consulta.paciente.nome + (consulta.observacaoMarcada ? ` - ${consulta.observacaoMarcada}` : '') : 'Livre';
          this.gradeConsultas.push({
            id: index,
            horario: momento,
            situacao: sit
          });
          if (index % 2 === 1) {
            hora++;
          }
        }
        this.loadingConsultas = false;
      });
  }

  public escolherHorario(item: any) {
    this.horarioEscolhido = new Date(this.dataInput.nativeElement.value.toString() + ' ' + item.horario.toString() + ':0000');
  }

  public salvar() {
    const consulta: Consulta = {
      _id: undefined,
      paciente: this.pacienteEscolhido,
      medico: this.medicoEscolhido,
      data: this.horarioEscolhido,
      observacaoMarcada: this.observacaoInput.nativeElement.value !== '' ? this.observacaoInput.nativeElement.value : undefined,
      dataRealizado: undefined,
      parecerMedico: undefined,
      medicamentos: undefined
    };
    this.save.emit(consulta);
  }

}
