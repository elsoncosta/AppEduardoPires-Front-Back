import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Produto } from "../models/produto";

@Injectable()
export class ProdutoService extends BaseService {

    Produto: Produto = new Produto();

    constructor(private http: HttpClient) { super() 
    
        // this.Produto.nome = "Teste Fake"
        // this.Produto.documento = "32165498754"
        // this.Produto.ativo = true
        // this.Produto.tipoProduto = 1
    }

    obterTodos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlServiceV1 + "Produtoes")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Produto> {
        return new Observable<Produto>();
    }

    novoProduto(Produto: Produto): Observable<Produto> {
        return new Observable<Produto>();
    }

    atualizarProduto(Produto: Produto): Observable<Produto> {
        return new Observable<Produto>();
    }

    excluirProduto(id: string): Observable<Produto> {
        return new Observable<Produto>();
    }    
}
