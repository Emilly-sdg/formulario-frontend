import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  formularioAtual!: Animal

  constructor(private httpClient: HttpClient) {}

  criarAnimal(pessoa: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>("http://localhost:8080/animal", pessoa);
  }

  getListPessoa(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>("http://localhost:8080/animal");
  }

  criarFormularioAtual(pessoa: Animal): void {
    this.formularioAtual = pessoa;
  }

  getFormularioAtual(): Animal {
    return this.formularioAtual;
  }
}
