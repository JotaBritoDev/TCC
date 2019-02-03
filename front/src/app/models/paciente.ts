export interface Paciente {
    _id: string;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
    convenio: string;
    altura: string;
    peso: string;
    endereco: {
        cep: string;
        numero: string;
        complemento: string;
        rua: string;
        bairro: string;
        cidade: string;
        estado: string;
    };
}
