import { Paciente } from './paciente';
import { Medico } from './medico';
import { Medicamento } from './medicamento';

export interface Consulta {
    _id: string;
    paciente: Paciente;
    medico: Medico;
    data: Date;
    observacaoMarcada: string;
    dataRealizado: Date;
    parecerMedico: string;
    medicamentos: Medicamento[];
}
