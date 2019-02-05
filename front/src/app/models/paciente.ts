import { Convenio } from './convenio';
import { Endereco } from './endereco';

export interface Paciente {
    _id: string;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
    convenio: Convenio;
    altura: string;
    peso: string;
    endereco: Endereco;
}
