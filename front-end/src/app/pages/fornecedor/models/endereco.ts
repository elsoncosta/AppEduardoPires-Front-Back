import { Attribute } from "@angular/core";

export class Endereco {
    constructor(@Attribute('type') 
    public type: string) { 
        
    }
    id: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    fornecedorId: string;
}